import Image from "next/image";
import photo from "./photo.png"
export default function Home() {
  return (
    <main className=" bg-white px-10 md:px-20 lg:px-40">
      <section className="">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className=" text-xl" >CSU-Physics</h1>
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
        <div className="text-center p-10" >
          <h2 className="text-5xl py-2 text-[#6f263d] font-medium  md:text-6xl" >Central State University</h2>
          <h3 className="text-2xl py-2 md:text-3xl" >Physics's Department</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam
          </p>
        </div>
        <div className=" relative mx-auto  w-80 h-60 mt-4 overflow-hidde md:h-96 md:w-96" >
          <Image src={photo} layout="" objectFit="" />
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
            {/* <Image src={} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout=" responsive"/>/ */}
            <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
              <a href="https://csu-physics.github.io/binding-energy/" target="new" className="text-center " >Binding Energy Calculator</a>
            </div>
          </div>

          <div className=" basis-1/4 flex-1 " >
            {/* <Image src={} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout=" responsive"/>/ */}
            <div className="bg-red-500 h-[380px] w-full" >
              <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
                <h3 className="text-center " >Project 2</h3>
              </div>
            </div>
          </div>

          <div className=" basis-1/4 flex-1 " >
            {/* <Image src={} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout=" responsive"/>/ */}
            <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
              <h3 className="text-center " >Project 3</h3>
            </div>
          </div>


          <div className=" basis-1/4 flex-1 " >
            {/* <Image src={} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout=" responsive"/>/ */}
            <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
              <h3 className="text-center " >Project 4</h3>
            </div>
          </div>

          
          <div className=" basis-1/4 flex-1 " >
            {/* <Image src={} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout=" responsive"/>/ */}
            <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
              <h3 className="text-center " >Project 4</h3>
            </div>
          </div>
          
          <div className=" basis-1/4 flex-1 " >
            {/* <Image src={} className=" rounded-lg object-cover" width={'100%'} height={"100%"} layout=" responsive"/>/ */}
            <div className="flex flex-col justify-center bg-white h-[380px] w-full border-black rounded-md border-2" >
              <h3 className="text-center " >Project 4</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

