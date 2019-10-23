import React, { FunctionComponent } from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { OrderItemsProvider, useOrderItems } from 'vtex.order-items/OrderItems'
import { ExtensionPoint } from 'vtex.render-runtime'

const ProductList: FunctionComponent = () => {
  const {
    orderForm: { items },
  } = useOrderForm()
  const { updateQuantity, removeItem } = useOrderItems()

  const handleQuantityChange = (uniqueId: string, quantity: number) =>
    updateQuantity({ uniqueId, quantity })
  const handleRemove = (uniqueId: string) => removeItem({ uniqueId })

  return (
    <ExtensionPoint
      id="product-list"
      items={items}
      onQuantityChange={handleQuantityChange}
      onRemove={handleRemove}
    />
  )
}

const EnhancedProductList = () => (
  <OrderItemsProvider>
    <ProductList />
  </OrderItemsProvider>
)

export default EnhancedProductList
