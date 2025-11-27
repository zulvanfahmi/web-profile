import { IconContext } from "react-icons";

export default function BadgeContactLogo({ iconComponent, urlLink }) {

    return (
        <>
            <a href={urlLink} target="_blank">
                <div className='backdrop-blur-xl bg-white/10 shadow-2xl border border-white/20 rounded-lg flex items-center justify-center p-1.5 cursor-pointer hover:scale-110 hover:bg-white/20 transition'>
                    <IconContext.Provider value={{ className: 'text-2xl' }}>
                        {iconComponent}
                    </IconContext.Provider>
                </div>
            </a>
        </>
    )

}