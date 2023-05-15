import { useEffect } from "react";
const Questao01A = (medias) => {
  const alunos = {
    nome: "sicrano",
    notas: { ap1: 8.4, ap2: 5.4 },
    nome: "beltrano",
    notas: { ap1: 6.7, ap2: 3.5 },
    nome: "fulano",
    notas: { ap1: 7.3, ap2: 9.2 },
  };

  return (
    //passando alunos via props para o pai
    <>
      <Questao01B alunos={alunos} />
      {medias.map((notas, index) => {
        if (notas[index] >= 6) {
          <h1>notas[index]</h1>;
        }
      })}
    </>
  );
};
function Questao01B(alunos) {
  let medias = [];
  //calculando media
  //maps para percorrer todas as posicoes
  useEffect(() => {
    useEffect(() => {
      alunos.map((media) => {
        //maps para percorrer todas as posicoes
        let mediaFinal = (media.notas.ap1 + media.notas.ap2) / 2;
        medias.push(mediaFinal);
      });
    }, [alunos]);
  });
  return <Questao01A medias={medias} />;
}
export { Questao01A, Questao01B };
