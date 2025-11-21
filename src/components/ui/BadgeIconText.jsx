export default function BadgeIconText({otherClass, text, iconName}) {
    return (
        <>
            <div className={`border inline-flex items-center whitespace-nowrap py-2 px-3 gap-x-1 rounded-full ${otherClass}`}>
                <i className={`${iconName} text-sm`}></i>
                <span className="text-xs">{text}</span>
            </div>
        </>
    )
}