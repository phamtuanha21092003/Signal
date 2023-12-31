import phone1 from "../assets/phone1.png"
import phone2 from "../assets/phone2.png"

export default function Introduction() {
    return (
        <section className="bg-[#9dbbf8] flex md:max-h-[680px] max-h-[760px] px-[1.5rem] pb-[3rem] pt-0 md:pt-[8rem]">
            <div className="relative md:pt-10 sm:pb-32 pt-0 pb-[1000px]">
                <div className="flex flex-col md:w-2/5 md:pl-24 pb-28 flex-1">
                    <h1 className="font-[790] text-[60px] leading-[64px] text-[#1b1b1b] mt-[60px]">
                        Nói chuyện Tự do
                    </h1>
                    <p className="font-[400] text-[20px] leading-[28px] mt-[24px] text-[#1b1b1b]">
                        Bắt đầu trải nghiệm nhắn tin khác biệt. Các tính năng hỗ
                        trợ quyền riêng tư ngoài mon đợi, kết hợp các tính năng
                        nhắn tin bạn mong chờ.
                    </p>
                    <p className="mt-[24px] hover:text-[#1851B4] text-[#2C6BED] px-[20px] bg-[#fff] text-[20px] leading-[28px] font-[500] rounded-[8px] h-[50px] flex justify-center items-center w-[133.803px] cursor-pointer">
                        Tải Signal
                    </p>
                </div>
                <div>
                    <img
                        src={phone1}
                        alt="điện thoại"
                        className="md:w-[320px] w-[218px] h-auto max-w-full mt-[46px] rotate-[22.5deg] absolute sm:top-[-55px] sm:left-[40%] top-[380px] left-[-10%]"
                    />
                    <img
                        src={phone2}
                        alt="điện thoại"
                        className="md:w-[320px] w-[218px] h-auto max-w-full rotate-[22.5deg] absolute sm:top-[-100px] sm:left-[62.5%] top-[330px] left-[44.5%]"
                    />
                </div>
            </div>
        </section>
    )
}
