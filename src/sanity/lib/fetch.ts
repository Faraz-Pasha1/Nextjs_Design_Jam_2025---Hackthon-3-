import { createClient } from 'next-sanity'

export const client = createClient({
  projectId : "eijn21hx",
  dataset : "production",
  useCdn: true, 
  
})
export async function sanityfetch({query ,  params = {}}: {query : string, params?: any}) {
    return await client.fetch (query , params)
}