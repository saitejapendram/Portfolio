import profilePic from "../assets/profile1.jpeg";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../assets/constants/index";

export const Hero = () => {
    return (
        <div className="lg:flex  mx-16 my-24">
            <div className=" text-white w-full lg:w-1/2 flex flex-col pb-20 lg:items-start items-center lg:pl-8">
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay: 0}}
                     className="text-5xl font-semibold text-center lg:text-start ">Sai Teja Pendram</motion.div>
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay:0.5}}
                      
                    className="text-3xl text-purple-400 font-semibold mt-12 mb-4">Full Stack Developer</motion.div>
                <motion.div 
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, delay:1}}
                    
                    className="max-w-lg text-neutral-400 text-lg font-semibold  px-2 lg:px-0">
                        {HERO_CONTENT}
                    
                </motion.div>
            </div>
            <motion.div
                 initial={{opacity: 0, x: 100}}
                 animate={{opacity: 1, x: 0}}
                 transition={{duration: 1, delay:1.2}} 
                 className=" w-full lg:w-1/2 mt-12 lg:mt-0">
                 <div className="flex justify-center">
                    <img src={profilePic} alt="" className="h-80 w-80 rounded-2xl"/>
                 </div>
            </motion.div>

        </div>
    )
}