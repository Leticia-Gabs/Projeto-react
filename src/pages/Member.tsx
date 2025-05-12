import { useParams, useNavigate } from "react-router-dom";

export function Member() {
  const { nome } = useParams();
  const navigate = useNavigate();

  const fotos: Record<string, string> = {
    "Leticia Gabriella": "/fotogabi.jpeg",
    "Jeniffer Cristine": "/fotojeni.jpeg",
    "Manuele Macedo": "/fotomanu.png",
    "Dayvid Cristiano": "/fotodayvid.jpeg"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>{nome?.toUpperCase()}</h1>
      {fotos[nome || ""] ? (
        <img
          src={fotos[nome || ""]}
          alt={`Foto de ${nome}`}
          style={{ maxWidth: "300px", borderRadius: "8px", marginTop: "1rem" }}
        />
      ) : (
        <p>Foto não encontrada</p>
      )}
      <br />
      <button
        onClick={() => navigate("/contact")}
        style={{
          marginTop: "1.5rem",
          padding: "0.6rem 1.2rem",
          backgroundColor: "#00BFFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Voltar para Equipe
      </button>
    </div>
  );
}
