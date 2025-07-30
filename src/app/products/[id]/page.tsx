// app/products/[id]/page.tsx
import React from 'react'

type Props = {
  params: {
    id: string
  }
}

export default function ProductDetail({ params }: Props) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Detail Produk</h1>
      <p>ID Produk: {params.id}</p>
      <p>Ini adalah halaman detail produk dengan ID {params.id}</p>
    </div>
  )
}
