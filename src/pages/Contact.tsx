import { Link } from "react-router-dom";

export function Contact() {
  const membros = ["Leticia Gabriella", "Jeniffer Cristine", "Manuelle Macedo", "Dayvid Cristiano"];
  return (
    <div>
      <h1>Equipe</h1>
      <ul>
        {membros.map(nome => (
          <li key={nome}>
            <Link to={`/member/${nome}`}>{nome.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
