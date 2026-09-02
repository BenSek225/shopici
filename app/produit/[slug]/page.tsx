import { notFound } from 'next/navigation'
import { ProductPage } from '@/components/shopici-store'
import { findProduct, products } from '@/lib/shopici-data'
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const product=findProduct(slug);if(!product)notFound();return <ProductPage product={product}/>} 
