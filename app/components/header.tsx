import Image from "next/image"

const Header = () => {
    return (
        <header>
            <div className="md:w-[229px] md:h-[40px] w-[150px] flex flex-wrap justify-center pb-14 md:pb-[90px] items-center m-auto">
                <div className="w-[76px] h-[40px]">
                    <Image alt="Logo Image" width={76} height={40} src={"/Frame 1167873021.png"} />
                </div>
                <div className="w-[136px] h-[26px] m-auto">
                    <span className="font-bold text-2xl/[29.9px] text-fontWhite">PRO</span>
                    <span className="font-bold text-2xl/[29.9px] text-fontGreen">RO</span>
                    <span className="font-bold text-2xl/[29.9px] text-fontWhite">STER</span>
                </div>
            </div>
        </header>
    )
}

export default Header