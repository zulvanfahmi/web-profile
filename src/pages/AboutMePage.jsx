import NavBarButton from "../components/ui/NavbarButton";
import NeonLampFire from "../components/animations/NeonLampFire";
import SwitcherThemeMode from "../components/ui/SwitcherThemeMode";
import BadgeIconText from "../components/ui/BadgeIconText"
import { keySkillListData } from "../data/Data";

export default function AboutMePage({otherComponent, idPage, pageSections}) {

    const keySkillList = keySkillListData;

    return (
        <div id={idPage}>
            <div className="flex flex-col gap-4 sm:min-h-screen sm:gap-16">
                <div className="hidden sm:flex flex-row justify-between">
                    <div>
                        <NeonLampFire />
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <NavBarButton text={'Work Experience'} pageId={pageSections[1].idPage} />
                        <NavBarButton text={'Certificate'} pageId={pageSections[2].idPage} />
                        <NavBarButton text={'Project'} pageId={pageSections[3].idPage} />
                        <NavBarButton text={'Contact'} pageId={pageSections[4].idPage} />
                        <div className="scale-60">
                            {(otherComponent)}
                        </div>
                    </div>
                </div>
                <div className="grow flex flex-col sm:flex-row text-white gap-8">
                    <div className="sm:flex-1 flex flex-col gap-4">
                        <div className="sm:flex-1">
                            <p className="text-5xl leading-18">Zulvan Fahmi</p>
                            <p className="text-2xl">Fullstack Software Developer</p>
                        </div>
                        <div className="sm:flex-1">
                            <p className="mb-2">Key Skills:</p>
                            <div className="flex flex-row flex-wrap gap-1 justify-center">
                                {keySkillList.map((keySkill, index) => (
                                    <BadgeIconText key={index} text={`${keySkill.text}`} iconComponent={keySkill.iconComponent} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="sm:flex-1 text-sm leading-8 text-justify sm:text-left">
                        <p className="text-2xl sm:text-xl pb-2">About Me</p>
                        <p className="mb-4 indent-8">
                            Java Developer with one year of hands-on experience in backend development. Skilled in designing scalable systems, integrating REST APIs, and writing clean, maintainable Java code using modern frameworks like Spring Boot.
                        </p>
                        <p className="mb-4 indent-8">
                            Experienced in working with MySQL, PostgreSQL, NoSQL databases, and web development technologies including Spring Web, Spring Security and Bootstrap. Proficient in writing unit and integration tests using Spring Testing tools. Familiar with Agile methodologies and effective team collaboration using Git. Strong in cross-functional teamwork to enhance application performance and user experience. Continuously learning and committed to delivering impactful software solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}