import commercial1 from "../assets/commercial1.png"
import commercial2 from "../assets/commercial2.png"

export default function Commercial() {
    return (
        <div className="bg-white md:pl-0 pl-8">
            <div className="flex md:flex-row-reverse flex-col mt-[3rem]">
                <img
                    src={commercial1}
                    alt="lỗi ảnh"
                    className="w-[384px] sm:w-[680px] rounded-[16px] md:mr-28"
                />
                <div className="md:pr-8 w-1/3 md:mt-0 mt-4">
                    <h1 className="text-[40px] font-[800] leading-[44px]">
                        Không quảng cáo. Không theo dõi. Không đùa
                    </h1>
                    <p className="text-[20px] font-normal leading-[28px] mt-[2rem]">
                        Signal không hề có bất kì mục quảng caó, bên quảng cáo
                        thứ ba nào, và không theo dõi người dùng. Vì vậy, hãy cứ
                        tập trung cho những khoảnh khắc quan trọng với bạn với
                        những người quan trọng.
                    </p>
                </div>
            </div>

            <div className="mt-20 flex md:flex-row flex-col">
                <img
                    src={commercial2}
                    alt="lỗi ảnh"
                    className="w-[384px] sm:w-[680px] rounded-[16px] md:ml-28"
                />
                <div className="w-1/3 md:ml-4 md:mt-0 mt-4">
                    <h1 className="text-[40px] font-[800] leading-[44px]">
                        Miễn phí cho tất cả mọi người
                    </h1>
                    <p className="text-[20px] font-normal leading-[28px] mt-[2rem]">
                        Signal là một tổ chức phi lợi nhuận độc lập. Chúng tôi
                        không liên lạc với các công ty lớn, và chúng tôi sẽ
                        không bao giờ bị mua bởi công ty này. Việc phát triển
                        Signal được hỗ trợ bởi các khoản trợ cấp và khoản ủng hộ
                        từ những cá nhân như bạn.
                    </p>
                    <div className="inline-flex mt-12">
                        <p className="rounded-[8px] px-[20px] py-[9px] border-[2px] text-[20px] leading-[28px] text-[#2c6bed] border-[#2c6bed] hover:text-[#1851B4] hover:border-[#1851B4] font-semibold">
                            Ủng hộ Signal
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
