export const formatPrice = (number) => {
  return new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH',
  }).format(number / 100)
}

export const getUniqueValues = () => {}
