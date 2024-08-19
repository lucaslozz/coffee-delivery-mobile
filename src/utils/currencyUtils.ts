const formatCurrency = (value: string) => {
  const numericValue = value.replace(/\D/g, '');

  const formattedValue = (Number(numericValue) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formattedValue;
};

export const currencyUtils = {formatCurrency};
