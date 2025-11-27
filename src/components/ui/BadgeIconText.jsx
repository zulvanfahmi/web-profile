import { IconContext } from "react-icons";

export default function BadgeIconText({ otherClass, text, iconComponent }) {
    return (
        <>
            <div className={`${otherClass} border inline-flex items-center whitespace-nowrap py-2 px-3 gap-x-1 rounded-full dark:bg-white dark:border-0`}>
                <IconContext.Provider value={{ className: "dark:text-black" }}>
                    {iconComponent}
                </IconContext.Provider>
                <span className="text-xs ml-0.5 dark:text-black">{text}</span>
            </div>
        </>
    )
}