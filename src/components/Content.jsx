import Feed from "./Feed"
import cat from "../assets/cat.png"
import freedom from "../assets/freedom.png"
import protect from "../assets/private.png"
import group from "../assets/group.png"
import Commercial from "./Commercial"

export default function Content() {
    return (
        <section>
            <div className="flex justify-center mt-[120px]">
                <div className="flex flex-col items-center">
                    <h1 className="font-[800] text-[40px] leading-[44px]">
                        Vì sao lại dùng Signal?
                    </h1>
                    <p className="font-[400] text-[20px] leading-[48px] mt-5">
                        Tìm hiều phía dưới đây để biết vì sao Signal là một nền
                        tảng nhắn tin đơn giản, mạnh mễ, và an toàn
                    </p>
                </div>
            </div>

            <div className="flex md:flex-row-reverse flex-col  mt-16 pb-12 md:justify-center md:gap-x-4 lg:gap-x-8">
                <div className="bg-[#a5cad5] w-[648px] h-[648px] md:mr-2 md:ml-6 ml-24  rounded-2xl"></div>
                <div className="basis-1/3 md:ml-0 ml-12">
                    <h1 className="text-[40px] font-[800] leading-[44px]">
                        Chia sẻ không ngại lỗ hổng
                    </h1>
                    <p className="text-[20px] font-normal leading-[28px] mt-12">
                        Phương thức mã hoá hai dai đoạn dầu cuối tân tiến (được
                        hỗ trợ bởi Giao thức Signal mã nguồn mở) để giữ các cuộc
                        trò chuyện của bạn được an toàn. Chúng tôi không tin
                        nhắn của bạn hoặc nghe được cuộc gọi của bạn, và cũng
                        không ai khác có thể. Quyền riêng tư không ai khác có
                        thể.
                    </p>
                </div>
            </div>

            <div className="bg-[#f6f6f6] w-full flex flex-wrap justify-center items-center gap-6 py-24">
                <Feed
                    image={cat}
                    title="Nói bất cứ điều gì"
                    description="Chia sẻ miễn phí, văn bản và tin nhắn, hình ảnh, video, ảnh động và tập tin. Signal sử dụng kết nối dữ liệu di động của bạn để có thể tránh các phí SMS và MMS"
                />
                <Feed
                    image={freedom}
                    title="Nói chuyện tự do"
                    description="Thực hiện các cuộc gọi thoại và video cực rõ với bất kì ai sống bên kia thành phố, hoặc bên kia bờ đại dương, mà không tốn phí gọi đường dài."
                />
                <Feed
                    image={protect}
                    title="Quyền riêng tư & Nhãn dán"
                    description="Thêm một lớp biểu cảm cho các cuộc trò chuyện của bạn nhãn dán được mã hoá. Bạn cũng có thể tạo và chia sẻ các bộ nhãn dán của riêng mình."
                />
                <Feed
                    image={group}
                    title="Gặp nhau qua nhóm"
                    description="Trò chuyện nhóm giúp bạn giữ liên lạc với gia đình, bạn bè, đồng nghiệp một cách dễ dàng"
                />
            </div>

            <Commercial />
        </section>
    )
}
