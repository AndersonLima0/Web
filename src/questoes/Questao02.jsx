import { useEffect, useState } from "react";
function Questao02() {
  //criando estados para as imagens e a flag que mudara os lados da imageem
  const [verso, setVerso] = useState("back");

  //condicional para trocar o lado da imagem
  if (verso == "back") {
    return (
      <>
        <button onClick={setVerso("front")}></button>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" />
      </>
    );
  } else {
    return (
      <>
        <button onClick={setVerso("back")}></button>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/front/25.png" />
      </>
    );
  }
}
export default Questao02;
