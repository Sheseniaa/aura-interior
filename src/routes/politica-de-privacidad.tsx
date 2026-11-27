import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { CONTACT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad — Aura Interior" },
      { name: "description", content: "Política de Tratamiento de Datos Personales de Aura Interior, conforme al marco colombiano de protección de datos." },
    ],
    links: [{ rel: "canonical", href: "https://diseodeinteriores.online/politica-de-privacidad" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Política de Tratamiento de Datos Personales" updated="27 de noviembre de 2026">
      <p>Esta política explica cómo Aura Interior trata los datos personales relacionados con consultas, cotizaciones y servicios de arquitectura, diseño de interiores, decoración, visualización 3D y productos artesanales. Se aplica conforme a la Ley 1581 de 2012, sus normas reglamentarias y demás disposiciones colombianas aplicables.</p>
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>El responsable que opera comercialmente como Aura Interior es <strong>[COMPLETAR NOMBRE LEGAL]</strong>, identificado con NIT <strong>[COMPLETAR NIT]</strong>, con dirección en <strong>[COMPLETAR DIRECCIÓN]</strong>. Canal electrónico de atención: <a href={\`mailto:\${CONTACT_EMAIL}\`}>{CONTACT_EMAIL}</a>. Teléfono: <strong>[COMPLETAR TELÉFONO]</strong>. El proyecto identifica su actividad en Envigado, Medellín, Colombia; esta referencia no reemplaza la dirección legal pendiente.</p>
      </section>
      <section>
        <h2>2. Datos que podemos recopilar</h2>
        <ul>
          <li>En el formulario: nombre, correo electrónico, servicio de interés, ubicación, presupuesto estimado y descripción del proyecto.</li>
          <li>Si la persona los proporciona por correo, WhatsApp o Instagram: número de teléfono, imágenes, planos, medidas, preferencias y demás datos incluidos voluntariamente en el mensaje.</li>
          <li>Cuando se contrata un servicio o producto: información necesaria para preparar y ejecutar la propuesta o atender obligaciones contractuales y legales, que se solicitará según el caso.</li>
          <li>Datos técnicos básicos que el navegador o los proveedores de alojamiento y comunicación puedan procesar al cargar o utilizar el sitio.</li>
        </ul>
        <p>No solicitamos datos sensibles ni información de menores como requisito del formulario. Por favor, no incluyas información sensible que no sea necesaria para tu consulta.</p>
      </section>
      <section>
        <h2>3. Finalidades y base de autorización</h2>
        <ul>
          <li>Recibir y responder consultas, entender el proyecto y preparar cotizaciones o propuestas solicitadas.</li>
          <li>Coordinar, prestar y hacer seguimiento a servicios contratados de arquitectura, interiorismo, decoración, asesoría y visualización 3D.</li>
          <li>Atender pedidos y solicitudes sobre productos artesanales, así como gestionar comunicaciones relacionadas con ellos.</li>
          <li>Conservar soportes y atender deberes legales, contables o contractuales aplicables.</li>
          <li>Enviar publicidad, promociones o novedades únicamente cuando exista una autorización previa, expresa y separada. El formulario actual no solicita esa autorización comercial.</li>
        </ul>
        <p>La autorización del formulario permite gestionar la consulta enviada. Si se inicia una relación contractual, algunos datos podrán tratarse además en lo necesario para ejecutar el contrato o cumplir obligaciones legales.</p>
      </section>
      <section>
        <h2>4. Proveedores y transferencias</h2>
        <p>El sitio usa FormSubmit como servicio externo para transmitir el formulario al correo de Aura Interior. El proveedor puede procesar la información enviada y datos técnicos de la solicitud bajo sus propias condiciones y políticas. También se cargan tipografías desde Google Fonts; al solicitar esos archivos, el navegador se conecta a infraestructura de Google. Correo, alojamiento y publicación del sitio pueden involucrar otros proveedores tecnológicos según su configuración. La política de privacidad de cada proveedor rige su tratamiento. No afirmamos una ubicación o plazo de almacenamiento de terceros que no esté confirmado.</p>
      </section>
      <section>
        <h2>5. Derechos de las personas</h2>
        <p>La persona titular puede conocer, actualizar y rectificar sus datos; solicitar prueba de la autorización cuando corresponda; conocer el uso dado; presentar quejas ante la Superintendencia de Industria y Comercio después de agotar el trámite ante el responsable; revocar la autorización y/o pedir la supresión cuando sea procedente; y acceder gratuitamente a sus datos personales.</p>
      </section>
      <section>
        <h2>6. Consultas, reclamos y solicitudes</h2>
        <p>Envía tu solicitud a <a href={\`mailto:\${CONTACT_EMAIL}\`}>{CONTACT_EMAIL}</a> con el asunto “Datos personales”, indicando tu nombre, medio para responder, derecho que deseas ejercer y la información necesaria para localizar los datos. Para protegerlos, podremos solicitar verificación razonable de identidad.</p>
        <p>Las consultas se responderán dentro del plazo legal de diez (10) días hábiles desde su recepción; si no es posible, se informará el motivo y la nueva fecha dentro de ese plazo, que no podrá superar cinco (5) días hábiles adicionales. Los reclamos completos se atenderán en quince (15) días hábiles; cuando proceda una prórroga, se informará antes del vencimiento y no superará ocho (8) días hábiles adicionales. Si falta información, se solicitará completar el reclamo conforme al procedimiento legal.</p>
      </section>
      <section>
        <h2>7. Conservación y seguridad</h2>
        <p>Conservamos la información durante el tiempo necesario para atender la finalidad, la relación contractual y los deberes legales aplicables; después se elimina o anonimiza cuando corresponda. Aplicamos medidas razonables para limitar el acceso y proteger la información. Ninguna transmisión por internet o correo puede garantizar seguridad absoluta.</p>
      </section>
      <section>
        <h2>8. Vigencia y cambios</h2>
        <p>Esta política rige desde el 27 de noviembre de 2026. Si cambia de forma sustancial, publicaremos la versión actualizada en esta página e indicaremos la fecha de revisión. Las solicitudes sobre privacidad pueden enviarse al canal señalado arriba.</p>
      </section>
    </LegalPage>
  );
}
