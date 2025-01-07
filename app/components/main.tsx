"use client"
import Image from "next/image"
import Header from "./header"
import Footer from "./footer"
import { useEffect, useState } from 'react'
// import { MdOutlineArrowOutward } from "react-icons/md";
import { Exo_2 } from 'next/font/google'

export const exo = Exo_2({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
  })

const Main: React.FC = () => {

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
            const day = String(now.getDate()).padStart(2, "0");
            setDate(day);
            



        }, 1000)

        return () => clearInterval(timer)
    }, [])


    // if (!isHydrated) {
    //     // Render nothing or a placeholder on the server
    //     return null;
    // }






    return (
        <div className="md:pt-[70px] pt-[40px] bg-image1 bg-background bg-center m-auto w-full min-h-[900px] max-w-[1600px] ">
            <Header />

            <div className="flex flex-col gap-8 ">

                <div className="pt-1 text-fontWhite w-[164px] h-[38px] rounded-[8px] m-auto bg-white/10 backdrop-blur-sm ">
                    <p className={`${exo.className} font-extralight w-[128px] text-center h-[22px] text-[18px] m-auto`}>Stay Connected</p>
                </div>
                <div className="text-fontWhite w-[80vw] md:w-[640px] m-auto text-center">
                    <p className={`${exo.className} md:font-bold md:text-[56px] font-medium text-[30px]`}>COMING SOON</p>
                </div>
                <div className="text-fontWhite justify-center md:h-[44px] md:w-[478px] h-[15vh] w-[80vw] m-auto text-center opacity-70">
                    <p className={`${exo.className} font-medium text-[18px]`}>Assemble your team, elevate your game.  A new era in team management is on the horizon.</p>
                </div>
                
                <div className="mx-auto w-2/3 md:w-[640px] md:h-[88px] gap-4 flex flex-wrap">
                    <div className="bg-background md:w-[148px] md:h-[88px] pl-3 pr-1 w-1/3 m-auto text-center rounded-lg">
                        <div className="flex text-fontWhite md:w-[89px] md:h-[88px] justify-between m-auto">
                            <div>
                                <p className={`${exo.className} text-[48px] font-semibold`}>{date}</p>
                            </div>
                            <div className="md:h-[58px] flex items-end">
                                <p className={`${exo.className}text-[16px] leading-none`}>D</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background md:w-[148px] md:h-[88px] pl-3 pr-1 w-1/3 m-auto text-center rounded-lg">
                        <div className="flex text-fontWhite md:w-[89px] md:h-[88px] justify-between m-auto">
                            <div>
                                <p className={`${exo.className} text-[48px] font-semibold`}>{hours}</p>
                            </div>
                            <div className="md:h-[58px] flex items-end">
                                <p className={`${exo.className}text-[16px] leading-none`}>H</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background md:w-[148px] md:h-[88px] pl-3 pr-1 w-1/3 m-auto text-center rounded-lg">
                        <div className="flex text-fontWhite md:w-[89px] md:h-[88px] justify-between m-auto">
                            <div>
                                <p className={`${exo.className} text-[48px] font-semibold`}>{minutes}</p>
                            </div>
                            <div className="md:h-[58px] flex items-end">
                                <p className={`${exo.className}text-[16px] leading-none`}>M</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background md:w-[148px] md:h-[88px] pl-3 pr-1 w-1/3 m-auto text-center rounded-lg">
                        <div className="flex text-fontWhite md:w-[89px] md:h-[88px] justify-between m-auto">
                            <div>
                                <p className={`${exo.className} text-[48px] font-semibold`}>{seconds}</p>
                            </div>
                            <div className="md:h-[58px] flex items-end">
                                <p className={`${exo.className} text-[16px] leading-none`}>S</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="flex flex-wrap m-auto items-center justify-between w-2/3 h-[100px] md:w-[416px] md:h-[80px] bg-white/10 backdrop-blur-sm border-l border-fontWhite rounded-full opacity-100">
                    <input className={`${exo.className} w-full md:h-[22px] md:w-[233px] m-auto ml-7 placeholder:text-fontWhite text-[14px] sm:text-[18px] font-light bg-transparent`} type="text" placeholder="Enter your email for updates" />

                    <button className="w-[50px] h-[50px] md:w-[64px] md:h-[64px] rounded-full m-auto md:m-2 bg-fontGreen hover:cursor-pointer"><Image className="m-auto" alt="vector" height={24} width={24} src={"/Vector 35.png"}></Image></button>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Main

