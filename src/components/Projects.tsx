import { PROJECTS } from "../assets/constants/index";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const Projects = () => {
    return (
        <div className="my-24">
            <motion.h2 
                 whileInView={{opacity: 1, y: 0}}
                 initial={{opacity: 0, y: -100}}
                 transition={{duration: 1}} 
                 className="text-4xl font-semibold text-white text-center my-12">Projects</motion.h2>
            <div className="flex flex-col gap-3 ">
            {PROJECTS && PROJECTS.map((project) => (
                <div className="lg:flex block mx-8 border-b border-neutral-700 pb-2">
                    <motion.div
                         whileInView={{opacity: 1, x: 0}}
                         initial={{opacity: 0, x: -100}}
                         transition={{duration: 1}}  
                         className=" lg:w-2/5">
                         <div className="flex items-center justify-start lg:justify-center lg:px-14 px-4 py-2">
                             <img src={project.image} alt="" className="w-90 h-64 rounded-2xl"/>
                         </div>
                    </motion.div>
                    <motion.div 
                         whileInView={{opacity: 1, x: 0}}
                         initial={{opacity: 0, x: 100}}
                         transition={{duration: 1}} 
                         className=" lg:w-3/5 text-white space-y-3 lg:px-14 px-4 lg:px-0 mt-4 mb-8 lg:mt-0 lg:mb-0">
                         <h3 className="text-white font-semibold text-xl">{project.title}</h3>
                         <div className="text-neutral-400 max-w-xl">{project.description}</div>
                         <div className="flex flex-wrap items-center justify-start gap-4">
                            {project.technologies.map((tech) => (
                                <div className="text-purple-900 bg-neutral-900 px-2">{tech}</div>
                            ))}
                         </div>
                         <div className=""><a href={project.github} className=""><FaGithub className="text-white bg-black w-8 h-8"/></a></div>
                    
                    </motion.div>
                </div>
            ))}
            </div>
        </div>
    )
}