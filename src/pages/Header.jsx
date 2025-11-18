import NavBarButton from "../components/ui/NavbarButton";
import NeonLampFire from "../components/animations/NeonLampFire";

export default function Header() {

    return (
        <>
            <div className="flex flex-col min-h-screen">
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
                <div className="grow flex flex-row items-center text-white justify-between gap-8">
                    <div className="flex-1">
                        <h1 className="text-6xl leading-18">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, omnis!</h1>
                    </div>
                    <div className="flex-1 text-lg">
                        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dolorum voluptate architecto id magni sapiente voluptates?</h1>
                    </div>
                </div>
            </div>
        </>
    )

}