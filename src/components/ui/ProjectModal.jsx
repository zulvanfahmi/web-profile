import { IconContext } from "react-icons";
import { FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6";
import BadgeIconText from "./BadgeIconText";

export default function ProjectModal({ projectData, isAnimating, closeModal }) {

    return (
        <>
            <div onClick={closeModal} className={`fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}>

                <div onClick={(e) => e.stopPropagation()} className={`p-4 sm:p-6 rounded-2xl w-7/8 max-h-3/4 sm:w-2/4 sm:max-h-2/3 transition-all duration-300 ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"} backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white flex flex-col`}>

                    <div className="pb-2 sticky top-0 z-10 flex justify-between items-start border-b">
                        <h2 className="text-3xl font-bold">{projectData.title}</h2>
                        <button
                            onClick={closeModal}
                            className="backdrop-blur-lg cursor-pointer bg-red-400 sm:bg-white/20 border sm:border-2 border-white hover:bg-red-500 p-2 rounded-full text-white text-xs flex justify-center items-center w-8 h-8">
                            <FaXmark />
                        </button>
                    </div>

                    <div data-lenis-prevent className="pt-2 overflow-y-auto scroll-smooth custom-scrollbar-hide grow flex flex-col gap-y-6 sm:gap-y-2">

                        <div className="flex flex-row items-center sm:gap-x-8">

                            {
                                projectData.documentationLink && (
                                    <a
                                        href={projectData.documentationLink}
                                        target="_blank"
                                        className="text-sm relative flex items-center cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100">
                                        Documentation&nbsp;
                                        <IconContext.Provider value={{ className: "text-xs" }}>
                                            <FaArrowUpRightFromSquare />
                                        </IconContext.Provider>
                                    </a>
                                )
                            }

                            {
                                projectData.codeLink && (
                                    <a
                                        href={projectData.codeLink}
                                        target="_blank"
                                        className="text-sm relative flex items-center cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100">
                                        Code&nbsp;
                                        <IconContext.Provider value={{ className: "text-xs" }}>
                                            <FaArrowUpRightFromSquare />
                                        </IconContext.Provider>
                                    </a>
                                )
                            }
                        </div>

                        <div className="flex flex-col items-center gap-y-4">
                            <img className="rounded max-w-76 max-h-48 object-contain" src={projectData.imageLink} alt={projectData.title} />

                            <div className="flex flex-row flex-wrap gap-2 justify-center">

                                {
                                    projectData.techStacks.map((techStack, index) => (
                                        <BadgeIconText key={index} {...techStack} />
                                    ))
                                }

                            </div>
                        </div>

                        <p className="text-sm leading-6 text-justify whitespace-pre-line">{projectData.description}</p>

                    </div>

                </div>

            </div>

        </>
    )
}