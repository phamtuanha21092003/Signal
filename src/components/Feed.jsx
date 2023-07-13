export default function Feed({ image, title, description }) {
    return (
        <div className="flex flex-col px-[1.5rem] py-[3rem] bg-[#ffffff] items-center justify-start rounded-[16px] shadow-box sm:basis-[46%] basis-4/5 h-[585px]">
            <img src={image} alt="" className="sm:w-[370px] w-[280px]" />
            <h1 className="text-[#1b1b1b] font-[800] text-[28px] leading-[32px]">
                {title}
            </h1>
            <p className="font-[400] text-[16px] leading-[22px] mt-3">
                {description}
            </p>
        </div>
    )
}
