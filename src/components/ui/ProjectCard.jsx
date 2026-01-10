import BadgeIconText from "./BadgeIconText";

export default function ProjectCard({ handleClickCard, title, imageLink, techStacks }) {

    return (
        <>
            <div
                className="rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl p-4 text-white inline-flex flex-col w-full sm:w-76 cursor-pointer hover:scale-103 hover:bg-white/15 transition" onClick={handleClickCard}>

                <img className="w-full h-auto object-cover mx-auto rounded" src={imageLink} alt={`${title} image`} />

                <h1 className="my-3 text-lg">{title}</h1>

                <div className="flex flex-row flex-wrap gap-1 justify-center">

                    {
                        techStacks.map((techStack, index) => (
                            <BadgeIconText key={index} {...techStack} />
                        ))
                    }

                </div>
            </div>
        </>
    )

}