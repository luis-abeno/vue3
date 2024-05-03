import { defineStore } from 'pinia'

type Product = {
  id: number
  name: string
}

export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Product[],
    product: {} as Product | undefined
  }),
  actions: {
    addProduct(product: Product) {
      this.products.push(product)
    },
    getById(id: number) {
      this.product = this.products.find((product) => product.id === id)
    }
  }
})
