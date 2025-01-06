import React from 'react'
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="m-auto flex w-[460px] h-[64px] pt-36">
        <div className="flex w-[306px] h-[48px] justify-between m-auto">
            <div><Image className="w-auto h-auto" height={48} width={130} src={"/Frame 9.png"} alt="footer image"/></div>
            <div className="text-fontWhite opacity-70 w-[160px] h-[38px]">
                <p>Join over 2M global 
                pro player and teams</p>
            </div>
        </div>
        <div className="h-[40px] my-2 border opacity-70 border-fontWhite"></div>
        <div className="m-auto justify-center">
            <Image className="align-middle" width={106} height={64} alt="legends image" src={"/pngegg 1.png"}/>
        </div>
    </footer>
  )
}

export default Footer