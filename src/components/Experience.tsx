
import { ExperienceComponent } from "./ExperienceComp";
import { motion } from "framer-motion";

export const Experience = () => {
    const EXPERIENCES:any = [];
    return (
        <div className="my-24">
            <motion.h2
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: -100}}
                transition={{duration: 1}} 
                className="text-center font-semibold text-4xl text-white mb-12">Experience</motion.h2>
            {EXPERIENCES && EXPERIENCES.map((exp:any) => (
                <ExperienceComponent year={exp.year} company={exp.company} role={exp.role} description={exp.description} technologies={exp.technologies}/>
            ))}
        </div>
    )
}