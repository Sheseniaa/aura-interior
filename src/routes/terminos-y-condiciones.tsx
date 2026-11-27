import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y Condiciones — Aura Interior" },
      { name: "description", content: "Términos aplicables a consultas, propuestas, servicios de diseño y productos artesanales de Aura Interior." },
    ],
    links: [{ rel: "canonical", href: "https://diseodeinteriores.online/terminos-y-condiciones" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Términos y Condiciones" updated="27 de noviembre de 2026">
      <p>Estos términos describen las condiciones generales para navegar el sitio y solicitar servicios o productos ofrecidos bajo el nombre Aura Interior. El proveedor que opera comercialmente la marca debe completar su identificación antes de publicar esta versión: <strong>[COMPLETAR NOMBRE LEGAL]</strong>, NIT <strong>[COMPLETAR NIT]</strong>, dirección <strong>[COMPLETAR DIRECCIÓN]</strong>, teléfono <strong>[COMPLETAR TELÉFONO]</strong>. Contacto: <a href={\`mailto:\${CONTACT_EMAIL}\`}>{CONTACT_EMAIL}</a>.</p>
      <section>
        <h2>1. Oferta general</h2>
        <p>El sitio presenta información sobre arquitectura, diseño de interiores, decoración, asesorías, planos, modelado y visualización 3D, además de piezas artesanales y decorativas. La información permite conocer los servicios y contactar a Aura Interior; una consulta enviada no constituye por sí sola la aceptación de una cotización ni la celebración de un contrato.</p>
      </section>
      <section>
        <h2>2. Cotización y contratación</h2>
        <p>El alcance, precio, moneda, forma y calendario de pagos, anticipos si los hay, entregables, formatos, fechas, número de revisiones, responsabilidades y demás condiciones de cada encargo se especificarán en la cotización, propuesta o contrato aceptado por las partes. El trabajo se entiende contratado cuando exista aceptación expresa de la propuesta o el acuerdo correspondiente. No se presume una condición particular que no haya sido acordada.</p>
      </section>
      <section>
        <h2>3. Desarrollo y colaboración del cliente</h2>
        <p>El cliente debe entregar información, medidas, referencias, permisos de acceso y decisiones que sean necesarias para su proyecto, y confirmar que tiene derecho a compartir los materiales que suministra. Cambios de alcance, nuevos entregables o demoras por información pendiente pueden requerir ajustar la propuesta y el cronograma, previo acuerdo.</p>
        <p>Renders, imágenes y planos sirven para representar la propuesta dentro del alcance contratado. Su nivel de detalle, formatos y uso se definen en la cotización. No sustituyen licencias, estudios técnicos, diseños especializados, dirección de obra ni aprobaciones de autoridades, salvo que se incluyan expresamente en el acuerdo.</p>
      </section>
      <section>
        <h2>4. Precios y productos artesanales</h2>
        <p>Los precios y disponibilidad visibles para productos se informan en su ficha correspondiente. Antes de confirmar una compra se comunicarán al cliente los detalles aplicables del producto, disponibilidad, valor total y, cuando corresponda, costos y condiciones de entrega. Las características de piezas hechas a mano pueden presentar variaciones propias de su fabricación. Las personalizaciones, colores, medidas y tiempos se confirmarán individualmente antes de aceptar el pedido.</p>
        <p>No hay carrito ni pasarela de pago en este sitio: los botones de consulta dirigen al contacto por correo. El pedido y sus condiciones se confirman directamente con Aura Interior. Los derechos irrenunciables de consumidores y las garantías legales siguen aplicando.</p>
      </section>
      <section>
        <h2>5. Cancelaciones y retracto</h2>
        <p>Las solicitudes de cambio, cancelación o devolución deben enviarse a <a href={\`mailto:\${CONTACT_EMAIL}\`}>{CONTACT_EMAIL}</a>. Las consecuencias económicas o de programación dependerán de lo acordado en la cotización o contrato y de los derechos imperativos reconocidos por la legislación colombiana. El derecho de retracto y sus excepciones se aplican únicamente en los casos y términos previstos por la ley; las excepciones legales para bienes confeccionados conforme a especificaciones del consumidor o claramente personalizados no se amplían por estos términos.</p>
      </section>
      <section>
        <h2>6. Propiedad intelectual</h2>
        <p>El nombre y logo Aura Interior, identidad visual, textos, fotografías, renders, diseños, planos, modelos 3D, gráficos y demás contenido del sitio pertenecen a Aura Interior o se utilizan con autorización de sus respectivos titulares. Nada aquí transfiere derechos de propiedad intelectual al visitante. No está permitido copiar, distribuir, modificar o explotar dichos materiales sin autorización, salvo usos permitidos por la ley.</p>
        <p>La titularidad, licencia de uso, archivos editables y usos permitidos de los entregables de un proyecto se definirán en la propuesta o contrato. Los materiales aportados por clientes o terceros siguen perteneciendo a sus respectivos titulares.</p>
      </section>
      <section>
        <h2>7. Alcance de responsabilidad</h2>
        <p>Aura Interior procura mantener información correcta y el sitio disponible, pero puede haber interrupciones o errores técnicos. La información general del sitio no reemplaza una propuesta personalizada ni asesoría profesional contratada. Esta cláusula no limita derechos del consumidor ni excluye responsabilidades que no puedan limitarse conforme a la ley.</p>
      </section>
      <section>
        <h2>8. Contacto, ley aplicable y autoridad</h2>
        <p>Para consultas, reclamaciones o solicitudes relacionadas con estos términos, escribe a <a href={\`mailto:\${CONTACT_EMAIL}\`}>{CONTACT_EMAIL}</a>. Se aplica la legislación colombiana. Si una operación queda comprendida en las reglas de comercio electrónico, consulta también la información y canales de la <a href="https://www.sic.gov.co/" target="_blank" rel="noopener noreferrer">Superintendencia de Industria y Comercio (SIC)</a>.</p>
      </section>
    </LegalPage>
  );
}
