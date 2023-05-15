import { useState } from "react";

function Questao03() {
  //estados guardando as variaveis
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(287937123);
  const [paises, setPaises] = useState([]);
  //pegandos os valores dos paises
  fetch(
    "https://restcountries.com/v3.1/region/europe?fields=capital,population"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.table(
        data.map((country) => country.capital[0] + "-" + country.population)
      );
      setPaises(data);
    })
    .catch((error) => console.log(error));
  //percorendos e comparando valores dos paises
  paises.map((valores) => {
    if (valores.population > maior) {
      setMaior(valores.population);
    }
    if (valores.population < menor) {
      setMenor(valores.population);
    }
  });

  return (
    <>
      Maior: {maior}
      <br />
      Menor: {menor}
    </>
  );
}

export default Questao03;
