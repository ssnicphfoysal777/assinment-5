
// import Footer from "./Components/Footer"
import { Suspense } from "react"
import Herosectio from "./Components/Herosectio"
import Navbar from "./Components/Navbar"
import Tech from "./Components/Techsection/Tech"
import Stack from "./Components/Techsection/Stack";

const fetchtech = async () => {
  const res = await fetch('/Tec.json')
  const data = await res.json()
  return data
}

const TechPromise = fetchtech()

const App = () => {
  return (
    <div>

      <Navbar></Navbar>
      <Herosectio />


      <main>

        <section className="container mx-auto my-10">

          <div className="grid grid-cols-4 gap-4 items-start">

            {/* Tech compionents */}
            <Suspense fallback={<div>Loading..</div>}>
              <Tech TechPromise={TechPromise} />
            </Suspense>

            {/*Stuch compionents */}
             <Stack />

          </div>

        </section>

      </main>




      {/* <Footer></Footer> */}

    </div>
  )
}

export default App