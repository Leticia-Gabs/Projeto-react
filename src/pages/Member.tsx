import { useParams } from "react-router-dom";

export function Member() {
  const { nome } = useParams();
  const imagem = `/src/assets/${nome}.jpg`;

  return (
    <div>
      <h2>{nome?.toUpperCase()}</h2>
      <img src={imagem} alt={`Foto de ${nome}`} width="300" />
    </div>
  );
}
