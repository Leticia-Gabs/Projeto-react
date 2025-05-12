import { Link } from "react-router-dom";

export function Contact() {
  const membros = ["Leticia Gabriella", "Jeniffer Cristine", "Manuele Macedo", "Dayvid Cristiano"];
  
  return (
    <div className="equipe-container">
      <h1>Equipe</h1>
      <div className="membros-lista">
        {membros.map(nome => (
          <Link key={nome} to={`/member/${nome}`} className="membro-link">
            {nome.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
