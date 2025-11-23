import { BiLogoSpringBoot } from "react-icons/bi";
import BadgeIconText from "./BadgeIconText";
import { FaReact } from "react-icons/fa";

export default function ProjectCard({ handleClickCard }) {

    return (
        <>
            <div
                className="rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-4 text-white inline-flex flex-col w-fit cursor-pointer hover:scale-103 hover:bg-white/15 transition" onClick={handleClickCard}>

                <img className="min-w-2xs rounded" src="/images/project/dummyimage.webp" alt="dummy image" />

                <h1 className="my-4">Lorem ipsum dolor sit amet.</h1>

                <div className="flex flex-row flex-wrap gap-2 justify-center">

                    <BadgeIconText text={'React JS'} iconComponent={<FaReact />} />
                    <BadgeIconText text={'Java-Spring Boot'} iconComponent={<BiLogoSpringBoot />} />

                </div>
            </div>
        </>
    )

}