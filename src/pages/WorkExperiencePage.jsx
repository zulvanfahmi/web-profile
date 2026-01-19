import { workExperienceListData } from "../data/Data"

export default function WorkExperiencePage({idPage}) {

    const workExperienceList = workExperienceListData;

    return (
        <>
            <div id={idPage} className="max-w-2xl sm:my-10 self-center w-full text-white">
                <h1 className="text-white text-2xl sm:text-4xl sm:mb-6 py-4 flex justify-baseline sm:justify-center">Work Experience</h1>

                <div className="flex flex-col gap-4 mb-6">

                    {workExperienceList.map((workExperience, index) => (

                        <div key={index} className="group flex flex-col sm:flex-row gap-2 rounded-2xl p-4 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl">

                            <p className="text-sm pt-1 whitespace-nowrap min-w-1/3">{workExperience.startEndDate}</p>

                            <div className="flex flex-col">
                                <p className="text-lg font-bold mb-3"><span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-600 group-hover:after:scale-x-100">{workExperience.title}</span></p>
                                <p className="text-sm mb-1">{workExperience.company} &bull; {workExperience.location}</p>
                                <p className="text-xs leading-5 text-justify">{workExperience.description}</p>
                            </div>

                        </div>

                    ))}

                </div>

                <h1 className="group text-white relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100">
                    <a href="https://drive.google.com/drive/folders/1Zr0fjEMxd8mLXtH2-yMqj6vDFThyS8xH?usp=sharing" target="_blank">
                        View Full Résumé<i className="fa-solid fa-arrow-up text-xs ml-0.5 mb-1 rotate-45 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                    </a>
                </h1>

            </div>

        </>
    )

}