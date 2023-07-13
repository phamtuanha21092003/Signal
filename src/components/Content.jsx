import Feed from "./Feed"
import cat from "../assets/cat.png"
import freedom from "../assets/freedom.png"
import protect from "../assets/private.png"
import group from "../assets/group.png"

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
        </section>
    )
}
