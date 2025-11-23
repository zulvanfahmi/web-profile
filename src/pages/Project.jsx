import { useEffect, useState } from "react";
import ProjectCard from "../components/ui/ProjectCard";
import BadgeIconText from "../components/ui/BadgeIconText";
import { FaLaptop, FaMobileAlt, FaServer } from "react-icons/fa";

export default function Project() {

    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function openModal() {
        setIsOpen(true);
        setTimeout(() => setIsAnimating(true), 10);
    }

    function closeModal() {
        setIsAnimating(false);
        setTimeout(() => setIsOpen(false), 250);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <>
            <div className="flex flex-col">
                <div>
                    <h1 className="text-white text-4xl mb-6">Project!</h1>
                </div>
                <div className="flex flex-row text-white flex-wrap gap-4 justify-center mb-8">
                    <BadgeIconText otherClass={'backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl cursor-pointer hover:bg-white/15 hover:-translate-y-0.5 transition active:translate-y-0.5 dark:hover:bg-white/90'} text={'Backend'} iconComponent={<FaServer />} />
                    <BadgeIconText otherClass={'backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl cursor-pointer hover:bg-white/15 hover:-translate-y-0.5 transition active:translate-y-0.5 dark:hover:bg-white/90'} text={'Web'} iconComponent={<FaLaptop />} />
                    <BadgeIconText otherClass={'backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl cursor-pointer hover:bg-white/15 hover:-translate-y-0.5 transition active:translate-y-0.5 dark:hover:bg-white/90'} text={'Mobile'} iconComponent={<FaMobileAlt />} />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-12">
                    <ProjectCard handleClickCard={openModal} />
                    <ProjectCard handleClickCard={openModal} />
                    <ProjectCard handleClickCard={openModal} />
                    <ProjectCard handleClickCard={openModal} />
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}>

                    <div className={`p-6 rounded-2xl w-2/4 h-max-3/4 transition-all duration-300 ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"} backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl text-white overflow-y-auto scrollbar-thin scroll-smooth`}>

                        <h2 className="text-4xl font-bold mb-2">Glass Modal</h2>

                        <div className="flex flex-row items-center gap-x-4 mb-4">

                            <a className="relative inline-block cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100" href="#">Documentation <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i></a>

                            <a className="relative inline-block cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100" href="#">Code <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i></a>

                        </div>

                        <div className="flex flex-col items-center mb-4">
                            <img className="rounded w-sm mb-4" src="/images/project/dummyimage.webp" alt="dummyimage" />

                            <div className="flex flex-row flex-wrap gap-2 justify-center">

                                <BadgeIconText text={'React JS'} iconName={'fa-brands fa-react'} />
                                <BadgeIconText text={'Java-Spring Boot'} iconName={'fa-brands fa-java'} />

                            </div>
                        </div>

                        <p className="mb-4">Modal dengan efek glassmorphism. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptates, ea expedita laudantium maiores amet accusamus voluptate, tenetur cumque veniam facilis nulla accusantium perferendis sit, magni deleniti delectus itaque dignissimos dolore. Adipisci laboriosam optio voluptatibus, sunt enim facilis assumenda quam sit.</p>

                        <button onClick={closeModal} className="bg-red-500/70 hover:bg-red-500 px-4 py-2 rounded text-white"><i class="fa-solid fa-xmark fa-xs"></i>  Close</button>
                    </div>
                </div>
            )}
        </>
    )
}