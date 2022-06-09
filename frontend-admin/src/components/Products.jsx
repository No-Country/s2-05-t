import React, { useState, useEffect } from 'react'

import { getProducts, createProduct } from '../services/productos.services'
import FormProduct from './form/ProductsForm'

export default function Products () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const handleCreateProduct = (product, TOKEN) => {
    setLoading(true)
    createProduct(product, TOKEN)
      .then(res => {
        console.log(res)
        getProducts()
          .then(res => {
            setProducts(res.data)
            setLoading(false)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getProducts()
      .then(res => {
        console.log(res)
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  console.log(products)
  return (
    <div>
        <FormProduct handleCreateProduct={handleCreateProduct} loading={loading} />
      <h1>products</h1>
    </div>
  )
}
