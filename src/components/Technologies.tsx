import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandPrisma } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { FaAws } from "react-icons/fa";
import { SiGrafana } from "react-icons/si";
import { motion, Variants } from "framer-motion";

const iconsVariants = (duration: number): Variants => ({
      initial:{y: -10},
      animate:{
            y: [10, -10],
            transition : {
                  duration: duration,
                  ease:"linear",
                  repeat: Infinity,
                  repeatType: "reverse",

            }
      }
})

export const Technologies = () => {
    return (
        <div className="my-24">
            <motion.div
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1}}  
                className="font-semibold text-white text-4xl text-center mb-12">Technologies</motion.div>
            <div className="flex flex-wrap justify-center items-center gap-4 lg:px-8">
                <motion.div 
                      variants={iconsVariants(2.5)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <DiReact className=" text-5xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(4)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <DiNodejsSmall className=" text-5xl text-green-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(6)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <DiMongodb className=" text-5xl text-green-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(2)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <SiExpress className=" text-5xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(3.5)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <IoLogoJavascript className=" text-5xl text-yellow-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(7)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <BiLogoTypescript className=" text-5xl text-blue-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(1)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <TbBrandCpp className="text-5xl text-blue-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(2)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <BiLogoPostgresql className="text-5xl text-blue-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(6)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <TbBrandPrisma className="text-5xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(1)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <RiNextjsFill className="text-5xl text-white"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(5)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <FaDocker className="text-5xl text-blue-400"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(9)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <AiOutlineKubernetes className="text-5xl text-white"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(3)}
                      initial="initial"
                      animate="animate" 
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <FaAws className="text-5xl text-white"/>
                </motion.div>
                <motion.div 
                      variants={iconsVariants(2.5)}
                      initial="initial"
                      animate="animate"  
                      className="rounded-2xl border-4 border-neutral-700 p-4">
                      <SiGrafana className="text-5xl text-orange-500"/>
                </motion.div>
                    
            </div>
        </div>
    )
}