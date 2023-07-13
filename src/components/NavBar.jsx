import signal from "../assets/signal.png"
import { navBar } from "../constants"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function NavBar() {
    const [toggle, setToggle] = useState(true)
    //     const refMenuNavBar = useRef(null)

    function handleToggle() {
        setToggle(!toggle)
    }

    return (
        <nav
            className={`sticky right-0 left-0 bg-[#ffffff] flex pl-4  md:px-16  top-0 items-center z-20 py-4 md:py-12`}
        >
            <img src={signal} alt="signal" className="md:h-[50px] h-[30px]" />
            <ul className="list-none items-center flex-1 justify-end md:flex hidden">
                {navBar.map((nav, index) => (
                    <li
                        key={`nav${nav.id}`}
                        className={`${
                            index !== navBar.length - 1 ? "mr-[20px]" : "mr-0"
                        } cursor-pointer`}
                    >
                        <Link>{nav.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="md:hidden flex-1 justify-end flex items-center">
                <i
                    className={`${
                        toggle ? "fa-solid fa-bars" : "fa-solid fa-x"
                    } fa-solid fa-bars h-[3.25rem] w-[3.25rem] flex items-center justify-center cursor-pointer bg-[#0000000d]`}
                    onClick={handleToggle}
                ></i>
                <ul
                    className={`${
                        !toggle ? "flex" : "hidden"
                    } absolute top-full flex-col bg-[#ffffff] w-full left-0 justify-center`}
                >
                    {navBar.map((nav, index) => (
                        <li
                            key={`nav${nav.id}`}
                            className={`${
                                index !== navBar.length - 1
                                    ? "mb-[20px]"
                                    : "mb-0"
                            } cursor-pointer ml-4`}
                        >
                            <Link>{nav.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* {!toggle && ( */}

            {/* )} */}
        </nav>
    )
}
