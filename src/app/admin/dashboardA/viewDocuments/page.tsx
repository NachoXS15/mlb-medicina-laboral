import docs from "@/app/config/SampleDocs"

export default function page() {
  return (
    <>
        <main className="w-3/5 h-fit flex flex-wrap items-center m-auto bg-slate-100 justify-center mt-20">
            {
                docs.map((doc, i) => (
                    <div key={i}>
                        <div className="w-10 h-20 bg-slate-300"></div>
                        <h2>{doc}</h2>
                    </div>
                ))    
            }
        </main>
    </>
  )
}