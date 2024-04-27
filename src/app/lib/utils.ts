
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



export const calcularDescontoPorcentagem = (precoOriginal: number, precoDesconto: number): string => {
  if (precoOriginal <= 0 || precoDesconto <= 0) {
    throw new Error("Valores inválidos para preço original e preço com desconto");
  }

  if (precoOriginal < precoDesconto) {
    throw new Error("O preço original não pode ser menor que o preço com desconto");
  }

  const desconto = ((precoOriginal - precoDesconto) / precoOriginal) * 100;
  const descontoFormatado = desconto.toFixed(0);

  return `${descontoFormatado}% OFF`;
}