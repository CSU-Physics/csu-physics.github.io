import Image from "next/image";
import photo from "./photo.png"
import photo_1 from "./Convection-Diffusion.jpg"
import header from "./header.jpeg"
// import StatCounter from 'statcounter'
import photo1 from "./Binding_energy_calculator.jpeg"
export default function Home() {
  return (
    <main className=" bg-white px-10 md:px-20 lg:px-40">
      {/* <StatCounter sc_project={13006461} sc_security="3ab8d0c3" /> */}
      <section className="">
        <nav className="py-6 mb-4 flex justify-between items-start">
          {/* <h1 className=" text-xl" >CSU-Physics</h1> */}
          <Image src={photo} layout="" objectFit="" className="h-22 w-40" />
          <ul className="flex items-center">
            <li></li>
            {/* <li>
              <a className=" bg-[#6f263d] px-4 text-white py-2 rounded-md ml-8" href="#">Projects</a>
            </li> */}
            <li>
              <a className=" bg-gradient-to-r from-[#6f263d] to-[#9a6777] px-4 text-white py-2 rounded-md ml-8" href="#Projects">Projects</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-0" >
          {/* <h2 className="text-5xl py-2 text-[#6f263d] font-medium  md:text-6xl" >Central State University</h2> */}
          {/* <div className=" relative mx-90  w-80 h-60 mt-0 overflow-hidden md:h-96 md:w-96" >
            
          </div> */}
          {/* <Image src={photo} layout="" objectFit="" /> */}
          <Image src={header} className=" my-6" />

          <h3 className="text-2xl py-2 md:text-3xl" >Computational Physics Projects</h3>
          <p className=" text-md py-2 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto" >
            Welcome to the Computational Physics Interactive Projects Portal at Central State University!
            This platform showcases a diverse range of projects that demonstrate the innovative applications of computational physics.
            <br />Each project is designed to be interactive, serving both educational purposes and enhancing public knowledge.
            For more detailed information and to engage with these interactive projects, please click on the name of each project listed below.
            Explore, learn, and discover the exciting world of computational physics with us at Central State University!
          </p>
        </div>

      </section>

      <section className="h-screen mt-0 " id="Projects" >
        <div>
          <h3 className="text-3xl py-1" >Projects</h3>
          <p className="text-md py-2 leading-0 text-gray-800 " >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut!
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap" >
          <div className=" basis-1/4 flex-1 " >
            {/* <Image src={photo1} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout=" responsive"/>/ */}
            <div className="flex flex-col justify-center  bg-white h-[380px] w-full border-black rounded-md border-2" >
              <a href="https://csu-physics.github.io/binding-energy/" target="_blank" className="text-center" >
                <Image src={photo1} className=" w-44 h-35 my-4 rounded-xl mx-auto" />
                <h1>Nuclear Binding Energy Calculator</h1>
              </a>
            </div>
          </div>

          <div className=" basis-1/4 flex-1 " >
            <div className="bg-white h-[380px] w-full" >
              <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
                <a href="https://csu-physics.github.io/Transport-Equation/" target="_blank" className="text-center text-pretty" >
                  <Image src={photo_1} className=" w-44 h-35 my-4 rounded-xl mx-auto" />
                  Numerical Simulations of Convection-Diffusion Equation in 1D, 2D, and 3D.
                </a>
                {/* <h3 className="text-center text-pretty  " >Numerical Simulations of Convection-Diffusion Equation in 1D, 2D, and 3D.</h3> */}
              </div>
            </div>
          </div>
          {/* s */}
          {/* <div className=" flex flex-row justify-center w-full h-full bg-red-500 " >
              <h1 className=" text-white" >Footer</h1>
          </div> */}
          {/* Nuclear Binding Energy Calculator
Numerical Simulations of Convection-Diffusion Equation in 1D, 2D, and 3D. */}

          {/* <div className=" basis-1/4 flex-1 " >
            <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
              <h3 className="text-center " >Project 3</h3>
            </div>
          </div>


          <div className=" basis-1/4 flex-1 " >
            <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
              <h3 className="text-center " >Project 4</h3>
            </div>
          </div>


          <div className=" basis-1/4 flex-1 " >
            <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
              <h3 className="text-center " >Project 5</h3>
            </div>
          </div>

          <div className=" basis-1/4 flex-1 " >
            <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
              <h3 className="text-center " >Project 6</h3>
            </div>
          </div>
           */}
        </div>
      </section>
    </main>
  );
}

