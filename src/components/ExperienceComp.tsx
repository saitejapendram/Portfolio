import { Language } from "./language"
import { motion } from "framer-motion"


interface TechTypes {
    year : string
    role  :string
    company : string
    description :string
    technologies : string[]
}
export const ExperienceComponent = ({year, company, role, description, technologies} : TechTypes) => {
    return (
        <div>
        <div className="lg:flex lg:ml-8 my-4 text-white mx-8 lg:ml-0 block pb-6 border-b border-neutral-700 space-4">
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1}}
                className="lg:w-2/5">
                <h1 className="text-start lg:text-center font-semibold text-lg">{year}</h1>
            </motion.div>
            <motion.div 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: 100}}
                transition={{duration: 1}} 
                
                className="lg:w-3/5 space-y-3">
                <div className="font-semibold text-lg text-white">{role} - {company}</div>
                <div className="font-semibold text-neutral-400">{description}</div>
                <Language technologies={technologies}/>
                
            </motion.div>
        </div>
        </div>
    )
}