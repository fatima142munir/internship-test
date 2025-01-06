"use client"
import Image from "next/image"
import Header from "./header"
import Footer from "./footer"
import { useEffect, useState } from 'react'
// import { MdOutlineArrowOutward } from "react-icons/md";

const Hero: React.FC = () => {
    // const now = new Date()
    // const [isHydrated, setIsHydrated] = useState(false);
    // const [time, setTime] = useState<string>("");
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("")
    const [seconds, setSeconds] = useState("")
    const [date, setDate] = useState("00")


    useEffect(() => {
        // setIsHydrated(true);
        const timer = setInterval(() => {
            const now = new Date()
            
            setSeconds(String(now.getSeconds()).padStart(2, "0"));
            setMinutes(String(now.getMinutes()).padStart(2, "0"));
            setHours(String(now.getHours()).padStart(2, "0"));
            const day = String(now.getDate()).padStart(2, "0"); // Ensures two digits
            setDate(day);
            // setDate(now.getDate());
            // setDate(formattedDate);



        }, 1000)

        return () => clearInterval(timer)
    }, [])

    // console.log(date)

    // if (!isHydrated) {
    //     // Render nothing or a placeholder on the server
    //     return null;
    // }






    return (
        <div className="pt-[70px] bg-image1 bg-background bg-center m-auto w-[100vw] h-[100vh] lg:w-[1600px] lg:h-[900px]">
            <Header />

            <div className="flex flex-col gap-8 ">

                <div className="pt-1 text-fontWhite w-[164px] h-[38px] rounded-[8px] m-auto bg-white/10 backdrop-blur-sm ">
                    <p className="font-medium w-[128px] text-center h-[22px] text-[18px] m-auto">Stay Connected</p>
                </div>
                <div className="text-fontWhite w-[80vw] md:w-[640px] m-auto text-center">
                    <p className="md:font-bold md:text-[56px] font-medium text-[30px]">COMING SOON</p>
                </div>
                <div className="text-fontWhite justify-center md:h-[44px] md:w-[478px] h-[10vh] w-[80vw] m-auto text-center opacity-70">
                    <p className="font-medium text-[18px]">Assemble your team, elevate your game.  A new era in team management is on the horizon.</p>
                </div>
                <div className="m-auto w-[640px] h-[88px] gap-5 flex">
                    <div className=" bg-background w-1/4 text-center">
                        <div className="flex text-fontWhite bg-background">
                            <div>
                                <p className="text-[48px] font-semibold">{date}</p>
                            </div>
                            <div className="bg-yellow-300 m-auto  "><p className="text-[16px] text-end">H</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-background w-1/4">
                        <div className="flex text-fontWhite bg-background">
                            <div>
                                <p className="text-[48px] font-semibold">{hours}</p>
                            </div>
                            <div className="bg-yellow-300 m-auto  "><p className="text-[16px] text-end">H</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-background w-1/4">
                        <div className="flex text-fontWhite bg-background">
                            <div>
                                <p className="text-[48px] font-semibold">{minutes}</p>
                            </div>
                            <div className="bg-yellow-300 m-auto  "><p className="text-[16px] text-end">H</p>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-background w-1/4">
                        <div className="flex text-fontWhite bg-background">
                            <div>
                                <p className="text-[48px] font-semibold">{seconds}</p>
                            </div>
                            <div className="bg-yellow-300 m-auto  "><p className="text-[16px] text-end">H</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex m-auto items-center w-[416px] h-[80px] bg-white/10 backdrop-blur-sm border-l border-fontWhite rounded-full opacity-70">
                    <input className="h-[22px] w-[233px] m-auto ml-7 text-[18px] font-medium bg-transparent" type="text" placeholder="Enter your email for updates" />

                    <button className="w-[64px] h-[64px] rounded-full m-2 bg-fontGreen hover:cursor-pointer"><Image className="m-auto" alt="vector" height={24} width={24} src={"/Vector 35.png"}></Image></button>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Hero

