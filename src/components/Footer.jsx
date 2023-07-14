import { footerLinks } from "../constants"

export default function Footer() {
    return (
        <section className="bg-[#3c3744] text-[#E9E9E9] text-[16px] leading-[22px] mt-12 flex flex-col sm:flex-row sm:justify-around sm:gap-x-4 gap-y-2 pt-12 pb-16 pl-7">
            <div className="basis-[30%]">
                <p>@ 2013-2023 Signal, a 501c3 nonprofit</p>
                <p>
                    Signal is a registered trademark in the United States and
                    other countries
                </p>
                <br />
                <p>For media inquires, contact press@signal.org</p>
            </div>
            {footerLinks.map((footerLink) => (
                <div key={footerLink.title} className={``}>
                    <h3 className="font-semibold">{footerLink.title}</h3>
                    {footerLink.links.map((link) => (
                        <div key={link.name} className="cursor-pointer">
                            {link.name}
                        </div>
                    ))}
                </div>
            ))}
        </section>
    )
}
