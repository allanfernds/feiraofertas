
export const formatarData = (data: string): string =>  {
  // Array com os nomes dos meses
  const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

  // Cria um objeto de data com a string fornecida
  const dataObj = new Date(data);

  // Obtém dia, mês e ano
  const dia = dataObj.getDate();
  const mesIndex = dataObj.getMonth();
  const mes = meses[mesIndex];
  const ano = dataObj.getFullYear();

  // Retorna a data formatada
  return dia + ' de ' + mes + ', ' + ano;
}



