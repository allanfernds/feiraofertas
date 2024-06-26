import { Product } from './types';

export const formatarData = (data: string): string => {
  // Array com os nomes dos meses
  const meses = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ];

  // Cria um objeto de data com a string fornecida
  const dataObj = new Date(data);

  // Obtém dia, mês e ano
  const dia = dataObj.getDate();
  const mesIndex = dataObj.getMonth();
  const mes = meses[mesIndex];
  const ano = dataObj.getFullYear();

  // Obtém hora, minutos e segundos
  const hora = dataObj.getHours();

  // Retorna a data formatada
  return `${dia} de ${mes}, ${ano} ás ${hora}h`;
};

export const calcularDescontoPorcentagem = (
  precoOriginal: number,
  precoDesconto: number,
): string => {
  if (precoOriginal <= 0 || precoDesconto <= 0) {
    throw new Error('Valores inválidos para preço original e preço com desconto');
  }

  if (precoOriginal < precoDesconto) {
    throw new Error('O preço original não pode ser menor que o preço com desconto');
  }

  const desconto = ((precoOriginal - precoDesconto) / precoOriginal) * 100;
  const descontoFormatado = desconto.toFixed(0);

  return `${descontoFormatado}% OFF`;
};

export const verificarExpiracao = (expirationDate: string): boolean => {
  // Cria um objeto de data com a data de expiração fornecida
  const dataExpiracao = new Date(expirationDate);

  // Obtém a data atual
  const dataAtual = new Date();

  // Compara as datas

  return dataAtual.getTime() > dataExpiracao.getTime();
};

export const productArrayOrder = (products: Product[]) => {
  const expiredProducts = products.filter((product) => verificarExpiracao(product.expirationDate));
  const nonExpiredProducts = products.filter(
    (product) => !verificarExpiracao(product.expirationDate),
  );

  return [...nonExpiredProducts, ...expiredProducts];
};
