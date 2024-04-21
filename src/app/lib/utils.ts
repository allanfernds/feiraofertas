
export function formatarData(data: string): string {
  // Array com os nomes dos meses
  var meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

  // Cria um objeto de data com a string fornecida
  var dataObj = new Date(data);

  // Obtém dia, mês e ano
  var dia = dataObj.getDate();
  var mesIndex = dataObj.getMonth();
  var mes = meses[mesIndex];
  var ano = dataObj.getFullYear();

  // Retorna a data formatada
  return dia + ' de ' + mes + ', ' + ano;
}