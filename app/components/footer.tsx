import React from 'react'
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="m-auto flex flex-wrap w-[70vw] h-[10vh] md:w-[460px] md:h-[64px] pt-16 md:pt-36">
        <div className="flex sm:w-[306px] sm:h-[48px] justify-between m-auto">
            <div><Image className="w-[130px] h-[48]" height={48} width={130} src={"/Frame 9.png"} alt="footer image"/></div>
            <div className="text-fontWhite opacity-70 w-full h-[50px] sm:w-[160px] sm:h-[38px]">
                <p>Join over 2M global 
                pro player and teams</p>
            </div>
        </div>
        <div className="sm:h-[40px] sm:my-2 sm:border opacity-70 sm:border-fontWhite"></div>
        <div className="m-auto justify-center">
            <Image className="align-middle w-2/3 md:w-[106px] h-[64px] " width={106} height={64} alt="legends image" src={"/pngegg 1.png"}/>
        </div>
    </footer>
  )
}

export default Footer