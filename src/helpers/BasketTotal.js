
 export const getTotalPrice = (basketData) => {
    let totalQuantity = 0
    let totalPrice = 0
    basketData?.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
