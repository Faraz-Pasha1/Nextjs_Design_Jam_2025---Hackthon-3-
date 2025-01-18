import { sanityfetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";


type Product = {
    _id : string;  
    productName : string;
    price : string;
    category : string;
    inventory : number;
    colors : string;
    status : string;
    description : string;
    imageUrl:string;
}

export default async function Home () {
  const products : Product[] = await sanityfetch({query : allproducts})
  return (
    <div>
      <h1 className = "text-center text-bold text-4xl">Products</h1>
      <h1 className = "text-center text-bold text-4xl">Data Fetch From API TO SANITY & THEN DISPLAY</h1>
      <h1 className = "text-center text-bold text-4xl">HACKATHON 3 - DAY 3</h1>

      <div className = "grid grid-cols-4 gap-4">
        {
            products.map((product) => (
              <div className = "border p-4 rounded-lg shadow-sm flex  flex-col items-center" key = {product._id}>
                <Image src={product.imageUrl} alt={product.productName} className = "w-60" width = {300} height={500}/>
                <h2 className = "text-xl font-bold text-center" >
                  {product.productName}
                </h2>
                <p className = "text-left">
                <span className = "font-bold">Catergory :  </span>
                  
                  {product.category}
                </p>
                <p className = "text-left">
                  <span className = "font-bold">Price : </span>
                  {product.price}
                </p>
                
                <p className = "text-left">
                <span className = "font-bold text-left">Stock Level : </span>
                   
                  {product.inventory}
                </p>
                <p className = "text-left">
                <span className = "font-bold">Colors : </span>
                  
                  {product.colors}
                </p>
                <p className = "text-left">
                <span className = "font-bold">Status : </span>
                   
                  {product.status}
                </p>
                <p className = "text-left">
                <span className = "font-bold">Details : </span>
                   
                  {product.description}
                </p>
                

              </div>
            ))
        }
      </div>
    </div>
  )
}