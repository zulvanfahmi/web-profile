import { IconContext } from "react-icons";

export default function BadgeContactLogo({ iconComponent }) {

    return (
        <>
            <div className='backdrop-blur-xl bg-white/10 shadow-2xl border border-white/20 rounded-lg flex items-center justify-center p-1.5 cursor-pointer hover:scale-105 hover:-translate-y-0.5 hover:bg-white/15 transition'>
                <IconContext.Provider value={{ className: 'text-2xl' }}>
                    {iconComponent}
                </IconContext.Provider>
            </div>
        </>
    )

}