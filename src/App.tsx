
// import Footer from "./Components/Footer"
import { Suspense, useState } from "react";
import Herosectio from "./Components/Herosectio"
import Navbar from "./Components/Navbar"
import Tech from "./Components/Techsection/Tech"
import Stack from "./Components/Techsection/Stack";
import type { Technology } from "./Components/Typs/Technologies";
import Footer from "./Components/Footer";

const fetchtech = async () => {
  const res = await fetch('/Tec.json')
  const data = await res.json()
  return data
}

const TechPromise = fetchtech()


const App = () => {
  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);
  return (
    <div>

      <Navbar></Navbar>
      <Herosectio />


      <main>

        <section className="container mx-auto my-10">

          <div className="grid grid-cols-4 gap-4 items-start">

            {/* Tech compionents */}
            <Suspense fallback={<div>Loading..</div>}>
              <Tech
                TechPromise={TechPromise}
                setSelectedTech={setSelectedTech}
              />
            </Suspense>

            {/*Stuch compionents */}
            <Stack
              selectedTech={selectedTech}
              setSelectedTech={setSelectedTech}
            />

          </div>

        </section>

      </main>




      <Footer/>

    </div>
  )
}

export default App