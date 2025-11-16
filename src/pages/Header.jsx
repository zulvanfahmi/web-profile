import NavBarButton from "../components/animations/NavbarButton";
import NeonLampFire from "../components/animations/NeonLampFire";

export default function Header() {

    return (
        <>
            <div className="flex flex-row justify-between">
                <div>
                    <NeonLampFire />
                </div>
                <div className="flex flex-row items-center gap-4">
                    <NavBarButton text={'About'} />
                    <NavBarButton text={'Project'} />
                    <NavBarButton text={'Contact'} />
                </div>
            </div>
            <div className="flex flex-row text-white items-center content-center">
                <div className="flex-1">
                    <h1 className="text-5xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, omnis!</h1>
                </div>
                <div className="flex-1">
                    <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dolorum voluptate architecto id magni sapiente voluptates?</h3>
                </div>
            </div>
        </>
    )

}