export function About() {
  return (
    <div
      style={{
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111",
        color: "white",
        textAlign: "center",
        padding: "1rem"
      }}
    >
      <h1 style={{ marginBottom: "1rem" }}>Sobre</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        Este projeto foi feito para praticar React, rotas e componentes.
      </p>
    </div>
  );
}
