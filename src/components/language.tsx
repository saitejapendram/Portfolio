import { LanguageComponent } from "./LanguageComp"

export const Language = ({technologies} : {technologies : string[]}) => {
    return (
        <div className="flex flex-wrap items-center justify-start gap-4">
            {technologies && technologies.map((tech) => (
                <LanguageComponent tech={tech}/>
            ))}

        </div>
    )
}