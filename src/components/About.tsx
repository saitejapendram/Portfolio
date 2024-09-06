import about from "../assets/about.jpg";
import {ABOUT_TEXT} from "../assets/constants"
import { motion } from "framer-motion";


export const About = () => {
    return (
        <div className="my-24">
          <motion.p 
               whileInView={{opacity: 1, y: 0}}
               initial={{opacity: 0, y: -100}}
               transition={{duration: 1}}  
               className="text-white text-center my-12 font-semibold text-4xl">About Me</motion.p>  
          <div className="lg:flex">
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}  
                className="flex justify-center w-full lg:w-1/2">
                <div className="flex justify-center">
                     <img src={about} alt="" className="rounded-2xl w-80 h-80"/>
                </div>
            </motion.div>
            <motion.div 
                 whileInView={{opacity: 1, x: 0}}
                 initial={{opacity: 0, x: 100}}
                 transition={{duration: 1}} 
                 className="w-full lg:w-1/2 mt-12 lg:mt-0">
                 <div className="flex justify-center items-center">
                    <p className="my-2 max-w-lg pb-6 pt-0 text-neutral-400 font-semibold text-lg px-8 lg:px-0">{ABOUT_TEXT}</p>

                 </div>

            </motion.div>
          </div>
        </div>
    )
}