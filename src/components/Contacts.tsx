import { CONTACT } from "../assets/constants/index";
import { motion } from "framer-motion";

export const Contacts = () => {
    return  (
        <div className="my-24 flex flex-col items-center justify-center space-y-3">
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1}}  
                className="text-center font-semibold text-4xl text-white mb-8">Get in Touch</motion.h2>
            <motion.h2 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}} 
                className="text-semibold font-xl text-neutral-400">{CONTACT.address}</motion.h2>
            <motion.h2
               whileInView={{opacity: 1, x: 0}}
               initial={{opacity: 0, x: 100}}
               transition={{duration: 1}}  
               className="text-semibold font-xl text-neutral-400">{CONTACT.phoneNo}</motion.h2>
            <motion.a 
               whileInView={{opacity: 1, x: 0}}
               initial={{opacity: 0, x: -100}}
               transition={{duration: 1}} 
               href="#" className="text-semibold font-xl text-neutral-400 border-b">{CONTACT.email}</motion.a>
        </div>
    )
}