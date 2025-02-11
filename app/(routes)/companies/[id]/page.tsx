'use client'
 
import { FinalCard } from "@/app/components/FinalCard"
import { data } from "@/lib/data"
import { useParams, useRouter } from "next/navigation"

 
 

export default function Home() {
  
  const {id} = useParams()
  // @ts-ignore
  const numericId = id ? parseInt(id, 10) : NaN; 
  const findData = data.find(item=>item.id===numericId)

  if(!findData){
    return <div className="flex justify-center items-center mt-10">
      No comapny found with the above id
    </div>
  }
  return (
    <main className="container mx-auto py-8">
       {/* <Filter /> */}
      <FinalCard data={findData} />
    </main>
  )
}

