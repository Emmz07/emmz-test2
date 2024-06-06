import React from "react";
import robvid22 from "../assets/robvid22.mp4"
import Carousel from "./carousel1";
import BatteryInfoCard from "./properties";


function Homevid () {
    return(
        
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="vid1">
                <div className="overlay"></div>
                <div>
                <header className="flex  justify-between mx-20 py-10 relative ">
                <h3 className="text-4xl font-bold ">VOLASO</h3>
                <div className="">
                    <ul className="flex font-medium text-xl flex flex-wrap">
                        <li className="px-5">Technology</li>
                        <li className="px-5">About</li>
                        <li className="px-5 rounded-lg border-white">Contact Us</li>
                    </ul>
                </div>
                </header>

                <div className="relative mx-20 my-10">
                    <h2 className="text-center md:text-left lg:text-left text-4xl md:text-5xl lg:text-7xl font-medium">
                    THE FUTURE OF <br />DELIVERY IS HERE
                    </h2>

                    <p className="my-16 text-xl font-medium">
                    DISCOVER A GREENER, FASTER SELF-DRIVING <br />
                    DELIVERY SOLUTION WITH VOLASO.
                    </p>
                </div>
                </div>

                <section className="my-[25rem]  mx-20">
                    <div>
                        <div className="mb-6">
                            <span className="font-medium text-2xl">VISION</span> 
                             <p className="text-7xl font-medium mt-7">Were Here to Revolutionize the <br /> World of Local Shipping </p>
                        </div>

                        <div className="flex justify-between">
                            <p className="w-[30%] font-medium flex flex-col justify-end pb-12">This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does and what makes it unique. Share its core values and what this site has to offer.</p>
                            <video  src={robvid22} autoPlay loop muted></video>
                        </div>
                    </div>
                </section>

                <section className="my-[25rem]  mx-10">
                    <div>
                        <div className="mb-6">
                            <span className="font-medium text-2xl">OUR PRODUCT</span> 
                             <p className="text-8xl font-light mt-7">Fully Autonomous, <br /> Uncompromisingly Sustainable </p>
                        </div>

                        <div className="flex justify-between">
                            
                        </div>
                    </div>
                </section>
                <BatteryInfoCard /> <br />
                <Carousel />

            </div>
        </div>
    )
}

export default Homevid;



