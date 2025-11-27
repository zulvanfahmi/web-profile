import { useEffect, useMemo, useState } from "react";
import ProjectCard from "../components/ui/ProjectCard";
import BadgeIconText from "../components/ui/BadgeIconText";
import { FaLaptop, FaMobileAlt, FaServer } from "react-icons/fa";
import { projectListData } from "../data/Data";
import { RiApps2Line } from "react-icons/ri";
import ProjectModal from "../components/ui/ProjectModal";

export default function Project({idPage}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [targetFilter, setTargetFilter] = useState('all');
    const [targetModal, setTargetModal] = useState([]);

    const inactiveClass = 'backdrop-blur-lg bg-white/10 border-white/20 shadow-xl cursor-pointer hover:bg-white/30 hover:scale-105 transition active:translate-y-0.5 dark:hover:bg-white/90';
    const activeClass = 'backdrop-blur-lg border-white outline-white/20 outline-1 shadow-xl transition translate-y-0.5 dark:!bg-transparent dark:outline-white dark:[&>svg]:!text-white dark:[&>span]:!text-white transition';

    const projectList = useMemo(() => {
        if (targetFilter === 'all') {
            return projectListData;
        }
        return projectListData.filter(project =>
            project.category.includes(targetFilter)
        );
    }, [targetFilter]);

    function openModal(idProject) {
        setTargetModal(projectListData.find(project => project.id === idProject))
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
        <div id={idPage}>
            <div className="flex flex-col sm:mt-12">
                <div className="self-start sm:self-center">
                    <h1 className="text-white text-2xl sm:text-4xl my-4 sm:mb-8 sm:mt-4">Project</h1>
                </div>
                <div className="flex flex-row text-white flex-wrap gap-2 sm:gap-4 justify-center mb-4 sm:mb-8">
                    <a onClick={() => setTargetFilter('all')}>
                        <BadgeIconText
                            otherClass={ targetFilter === 'all' ? activeClass : inactiveClass}
                            text={'All Projects'}
                            iconComponent={<RiApps2Line />}
                        />
                    </a>
                    <a onClick={() => setTargetFilter('backend')}>
                        <BadgeIconText
                            otherClass={ targetFilter === 'backend' ? activeClass : inactiveClass}
                            text={'Backend'}
                            iconComponent={<FaServer />}
                        />
                    </a>
                    <a onClick={() => setTargetFilter('web')}>
                        <BadgeIconText
                            otherClass={ targetFilter === 'web' ? activeClass : inactiveClass}
                            text={'Web'}
                            iconComponent={<FaLaptop />}
                        />
                    </a>
                    <a onClick={() => setTargetFilter('mobile')}>
                        <BadgeIconText
                            otherClass={ targetFilter === 'mobile' ? activeClass : inactiveClass}
                            text={'Mobile'}
                            iconComponent={<FaMobileAlt />}
                        />
                    </a>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-4 sm:gap-8">
                    {
                        projectList.map((project) => (
                            <ProjectCard key={project.id} handleClickCard={() => openModal(project.id)} {...project} />
                        ))
                    }
                </div>
            </div>

            {/* Modal */}
            {isOpen && (<ProjectModal projectData={targetModal} isAnimating={isAnimating} closeModal={closeModal} />)}
        </div>
    )
}