import { useState } from "react"
export default function Home() {

  const [name, setName] = useState(1)

  
  return (
    
    <div className="h-screen flex justify-center items-center text-6xl text-blue-700  w-screen">
      <div className="flex h-[30vh] flex-col-reverse bg-slate-800 justify-center items-center w-[30vw]">
      Hi {name}
      </div>

      <button onClick={
        (e) => {
          e.preventDefault();
          setName(name + 1);
          console.log('eh');
        }
      }>
        
        Change Name !
      </button>
    
    
    </div>  )
}
