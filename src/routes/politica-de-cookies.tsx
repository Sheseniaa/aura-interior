import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Aura Interior" },
      { name: "description", content: "Información sobre cookies y tecnologías similares utilizadas en el sitio de Aura Interior." },
    ],
    links: [{ rel: "canonical", href: "https://diseodeinteriores.online/politica-de-cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies" updated="27 de noviembre de 2026">
      <p>Esta información se basa en una revisión del código del sitio. Las cookies son pequeños archivos que algunos sitios guardan en el navegador; tecnologías similares incluyen almacenamiento local y etiquetas de medición.</p>
      <section>
        <h2>1. Tecnologías identificadas</h2>
        <p>En la versión de código revisada no encontramos herramientas de analítica, píxeles publicitarios ni uso activo de almacenamiento local o de sesión para rastrear visitantes. Tampoco se observó una cookie propia activa en las páginas actuales. Existe un componente de interfaz que podría guardar el estado de una barra lateral, pero no se utiliza en las rutas del sitio revisadas.</p>
        <p>El sitio carga tipografías de Google Fonts, por lo que el navegador solicita recursos a Google. El formulario transmite la información que envías a FormSubmit. Esos proveedores pueden procesar datos técnicos de conexión según sus sistemas y políticas; la revisión del código no permite asegurar qué cookies de terceros podrían establecer en cada navegador o configuración.</p>
      </section>
      <section>
        <h2>2. Cookies necesarias y opcionales</h2>
        <p>El código revisado no instala deliberadamente cookies no esenciales de analítica o publicidad. No se añade una plataforma de consentimiento ni herramientas de seguimiento en esta versión. El alojamiento, la infraestructura y servicios externos podrían utilizar tecnologías técnicas propias para prestar sus servicios.</p>
      </section>
      <section>
        <h2>3. Cómo gestionar cookies</h2>
        <p>Puedes revisar, bloquear o eliminar cookies desde la configuración de tu navegador. Si bloqueas recursos de terceros, algunas tipografías o servicios externos podrían no mostrarse o funcionar de la misma manera. La gestión del navegador no desactiva el envío del formulario que tú decidas presentar.</p>
      </section>
      <section>
        <h2>4. Cambios y contacto</h2>
        <p>Si incorporamos nuevas herramientas, actualizaremos esta política para describirlas antes de su uso cuando sea necesario. Para consultas, escribe a <a href="mailto:aura.interioor@gmail.com">aura.interioor@gmail.com</a>.</p>
      </section>
    </LegalPage>
  );
}
