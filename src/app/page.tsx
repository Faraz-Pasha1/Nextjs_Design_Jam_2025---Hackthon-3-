import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import ProductDetails from '@/components/productListing'

import React from 'react'

const page = () => {
  return (
    <div>
      <Container className = "py-10">
         <HomeBanner/>
         <ProductDetails/>
        
      </Container>
    </div>
  )
}

export default page
