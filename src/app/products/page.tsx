import { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Продукты - DevStudio',
  description: 'Мерч и продукты от DevStudio. Скоро запуск!',
}

export default function ProductsPage() {
  return <ProductsClient />
}
