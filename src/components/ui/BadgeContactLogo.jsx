export default function BadgeContactLogo({logoClassName}) {

    return (
        <>
            <div className='backdrop-blur-xl bg-white/10 shadow-2xl border border-white/20 rounded-lg flex items-center justify-center w-10 h-10 cursor-pointer hover:scale-105 hover:bg-white/15 transition'>
                <i className={`${logoClassName} text-2xl`}></i>
            </div>
        </>
    )

}