export function SobreNosotros() {
  return (
    <div
      style={{
        fontFamily: "'Courier New', monospace",
        backgroundColor: "#ffffff",
        color: "#0a0a0a",
        padding: "0px",
        lineHeight: "1.6",
      }}
    >
      {/* Título principal */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.8rem",
          marginBottom: "10px",
          color: "#00bcd4",
          textShadow: "0 0 10px rgba(0, 188, 212, 0.6)",
          letterSpacing: "2px",
        }}
      >
        SOBRE NOSOTROS
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#333",
          fontSize: "1rem",
        }}
      >
        Conociendo al equipo y nuestra propuesta digital_
      </p>

      {/* Sección de equipo */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            backgroundColor: "#e0f7fa",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 0 12px rgba(0,188,212,0.5)",
            flex: "1 1 300px",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3
            style={{
              marginBottom: "10px",
              color: "#0097a7",
              textShadow: "0 0 5px rgba(0,188,212,0.4)",
            }}
          >
            Nuestro Equipo
          </h3>
          <p style={{ color: "#222" }}>
            Somos <strong>Luciano, Nadia y Emiliano</strong>, un grupo de
            estudiantes apasionados por la tecnología, el diseño y la innovación
            digital. Nuestra meta es crear soluciones reales que combinen
            creatividad, funcionalidad y rendimiento.
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#f1f8e9",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 0 12px rgba(100,255,150,0.4)",
            flex: "1 1 300px",
            transition: "transform 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <h3
            style={{
              marginBottom: "20px",
              color: "#00c853",
              textShadow: "0 0 5px rgba(0,200,83,0.4)",
            }}
          >
            Nuestro Proyecto
          </h3>
          <p style={{ color: "#222" }}>
            Este proyecto consiste en el desarrollo de una{" "}
            <strong>página de e-commerce</strong> moderna y dinámica. Buscamos
            ofrecer una experiencia fluida al usuario, con un catálogo
            interactivo, carrito funcional y gestión de productos conectada a
            una API. Todo diseñado bajo una estética tecnológica y minimalista.
          </p>
        </div>
      </div>

      {/* Línea temporal */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#00bcd4",
          textShadow: "0 0 8px rgba(0,188,212,0.4)",
          letterSpacing: "1px",
        }}
      >
        LÍNEA TEMPORAL
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "50px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 200px", textAlign: "center", margin: "10px" }}>
          <strong style={{ color: "#0097a7" }}>
            2025: Inicio del Proyecto
          </strong>
          <p style={{ color: "#333" }}>
            Definimos la idea y los roles del equipo. Diseñamos la estructura
            base del e-commerce y la organización del repositorio en GitHub.
          </p>
        </div>
        <div style={{ flex: "1 1 200px", textAlign: "center", margin: "10px" }}>
          <strong style={{ color: "#00acc1" }}>2025: Desarrollo Activo</strong>
          <p style={{ color: "#333" }}>
            Implementación de componentes en React, configuración de Redux y
            conexión con la API. Pruebas de interfaz y corrección de errores.
          </p>
        </div>
        <div style={{ flex: "1 1 200px", textAlign: "center", margin: "10px" }}>
          <strong style={{ color: "#00bfa5" }}>2025: Presentación Final</strong>
          <p style={{ color: "#333" }}>
            Finalización del diseño, documentación y despliegue de la plataforma
            para su evaluación final. Proyecto 100% funcional y responsive.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#00bcd4",
          textShadow: "0 0 8px rgba(0,188,212,0.4)",
        }}
      >
        Preguntas frecuentes
      </h2>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        {[
          "¿Qué tecnologías usamos?",
          "¿Cuál fue el mayor desafío del proyecto?",
          "¿Qué aprendimos durante el desarrollo?",
        ].map((q, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#e0f7fa",
              borderRadius: "12px",
              padding: "15px",
              marginBottom: "10px",
              cursor: "pointer",
              boxShadow: "0 0 6px rgba(0,188,212,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(0,188,212,0.6)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 6px rgba(0,188,212,0.3)";
            }}
          >
            ▶ {q}
          </div>
        ))}
      </div>
    </div>
  );
}
