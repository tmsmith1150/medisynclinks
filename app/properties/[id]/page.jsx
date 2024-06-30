'use client';
import React from 'react'
import { useRouter, useParams, useSearchParams, usePathname } from "next/navigation"

const PropertyPage = () => {
const router = useRouter();
const searchParams = useSearchParams();
const { id } = useParams();
const name = searchParams.get('name');
const pathname = usePathname(); 

console.log("hey")

  return (
    <div>
      <h1>PropertyPage</h1>
      <button onClick={() => router.push('/')} className='bg-blue-500' p-2>Go Home {pathname}</button>
      </div>
  )
}

export default PropertyPage