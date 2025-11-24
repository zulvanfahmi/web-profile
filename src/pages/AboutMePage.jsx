import NavBarButton from "../components/ui/NavbarButton";
import NeonLampFire from "../components/animations/NeonLampFire";
import SwitcherThemeMode from "../components/ui/SwitcherThemeMode";
import BadgeIconText from "../components/ui/BadgeIconText"
import { keySkillListData } from "../data/Data";

export default function AboutMePage() {

    const keySkillList = keySkillListData;

    return (
        <>
            <div className="flex flex-col min-h-screen gap-16">
                <div className="flex flex-row justify-between">
                    <div>
                        <NeonLampFire />
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <NavBarButton text={'Work Experience'} pageId={'workExperiencePage'} />
                        <NavBarButton text={'Certificate'} pageId={'certificatePage'}/>
                        <NavBarButton text={'Project'} pageId={'projectPage'}/>
                        <NavBarButton text={'Contact'} pageId={'contactPage'} />
                        <div className="scale-60">
                            <SwitcherThemeMode />
                        </div>
                    </div>
                </div>
                <div className="grow flex flex-row text-white gap-8">
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="flex-1">
                            <p className="text-5xl leading-18">Zulvan Fahmi</p>
                            <p className="text-2xl">Fullstack Software Developer</p>
                            {/* <p className="text-sm">Lorem ipsum dolor, sit amet consectetur</p>
                            <p className="text-sm">adipisicing elit. Sint, ipsum.</p> */}
                        </div>
                        <div className="flex-1">
                            <p className="mb-2">Key Skills:</p>
                            <div className="flex flex-row flex-wrap gap-1 justify-center">
                                {keySkillList.map((keySkill, index) => (
                                    <BadgeIconText key={index} text={`${keySkill.text}`} iconComponent={keySkill.iconComponent} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 text-sm leading-8">
                        <p className="mb-4">
                            Java Developer with one year of hands-on experience in backend development. Skilled in designing scalable systems, integrating REST APIs, and writing clean, maintainable Java code using modern frameworks like Spring Boot.
                        </p>
                        <p className="mb-4">
                            Experienced in working with MySQL, PostgreSQL, NoSQL databases, and web development technologies including Spring Web, Spring Security and Bootstrap. Proficient in writing unit and integration tests using Spring Testing tools. Familiar with Agile methodologies and effective team collaboration using Git. Strong in cross-functional teamwork to enhance application performance and user experience. Continuously learning and committed to delivering impactful software solutions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}