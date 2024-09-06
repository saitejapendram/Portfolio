
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Navbar = () => {
    return (
        <div className=" flex justify-between items-center mx-16 py-8 ">
            <div className="text-3xl font-semibold text-white hover:text-cyan-300">SP</div>
            <div className="flex items-center space-x-4 text-white">
                <a href={`https://github.com/saitejapendram`} className="hover:text-cyan-300 "><FaGithub size={32}/></a>
                <a href={`https://www.linkedin.com/in/saiteja-pendram-978011324/`} className="hover:text-cyan-300 "><FaLinkedin size={32}/></a>
                <a href={`https://www.instagram.com/_saitejapendram_/`} className="hover:text-cyan-300 "><FaInstagramSquare size={32}/></a>
                <a href={`https://x.com/saitejapendram`} className="hover:text-cyan-300 "><FaXTwitter size={32}/></a>
            </div>
        </div>
    )
}