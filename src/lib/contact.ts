/**
 * Contact configuration.
 * Requests are sent through FormSubmit. The browser never opens an email app.
 */
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "aura.interioor@gmail.com";
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "3133648105";

export function buildWhatsAppUrl(message: string) {
  if (!WHATSAPP_NUMBER) return undefined;
  return \`https://wa.me/\${WHATSAPP_NUMBER}?text=\${encodeURIComponent(message)}\`;
}

const LIMITS = {
  name: 120,
  email: 254,
  service: 120,
  location: 120,
  budget: 120,
  message: 5000,
};

function cleanText(value: string, maxLength: number) {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

export async function submitContactRequest(input: {
  name: string;
  email: string;
  service: string;
  location: string;
  budget: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}) {
  if (!input.consent) throw new Error("Debes autorizar el tratamiento de datos para enviar tu solicitud.");

  // Silent success for bots that fill the off-screen honeypot; no message is sent.
  if (cleanText(input.honeypot || "", 200)) return { success: true };

  const name = cleanText(input.name, LIMITS.name);
  const email = cleanText(input.email, LIMITS.email);
  const service = cleanText(input.service, LIMITS.service);
  const location = cleanText(input.location, LIMITS.location);
  const budget = cleanText(input.budget, LIMITS.budget);
  const message = cleanText(input.message, LIMITS.message);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2 || !emailPattern.test(email) || !service || !message) {
    throw new Error("Revisa el nombre, el correo y la descripción antes de enviar.");
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 45000);
  let response: Response;
  try {
    response = await fetch(\`https://formsubmit.co/ajax/\${encodeURIComponent(CONTACT_EMAIL)}\`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal: controller.signal,
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        service,
        location,
        budget,
        message,
        privacy_authorization: "Sí, autorizo el tratamiento según la Política de Tratamiento de Datos Personales.",
        _subject: \`Nueva solicitud Aura Interior — \${service}\`,
        _template: "table",
        _captcha: "false",
        _honey: "",
      }),
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("El servicio de correo tardó en responder. Tu solicitud podría haberse recibido; revisa tu correo antes de enviarla otra vez. Si no llega confirmación, escríbenos directamente.");
    }
    throw new Error("No pudimos confirmar la conexión con el servicio de correo. Tu solicitud podría haberse recibido; revisa tu correo antes de intentarlo de nuevo.");
  } finally {
    window.clearTimeout(timeout);
  }

  const responseText = await response.text();
  let result: { success?: string | boolean; message?: string } = {};
  try {
    result = responseText ? JSON.parse(responseText) : {};
  } catch {
    throw new Error("El servicio no confirmó el resultado. Revisa tu correo antes de enviar otra vez.");
  }

  if (!response.ok || result.success === false || result.success === "false") {
    throw new Error("No se pudo confirmar el envío. Revisa tu conexión e inténtalo nuevamente.");
  }
  return result;
}
