import InfiniteScrollCarousel from "../components/ui/InfiniteScrollCarousel";
import { certificateList1, certificateList2 } from "../data/CertificateList";

export default function About() {

    const certificateList_1 = certificateList1;
    const certificateList_2 = certificateList2;

    return (
        <>
            <div className="flex flex-col">
                <div className="max-w-2xl self-center mb-12 w-full text-white">
                    <h1 className="text-white text-4xl mb-6 flex justify-center">Work Experience</h1>

                    <div className="flex flex-col gap-4 mb-6">

                        <div className="group flex flex-row gap-8 rounded-2xl p-4 backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl">

                            <p className="text-sm pt-1 whitespace-nowrap">Januari 2024 - Agustus 2025</p>

                            <div className="flex flex-col">
                                <p className="text-lg font-bold mb-3"><span className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-600 group-hover:after:scale-x-100">Java Software Developer</span></p>
                                <p className="text-sm mb-1">PT. XSIS Mitra Utama &bull; Central Jakarta, DKI Jakarta</p>
                                <p className="text-xs leading-5 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam culpa ratione soluta voluptas et modi impedit reiciendis vero id at, facere nesciunt, non amet dolor aut, dicta commodi nobis nihil!</p>
                            </div>

                        </div>

                    </div>

                    <h1 className="group text-white relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-600 hover:after:scale-x-100">
                        <a href="#" target="_blank">
                            View Full Résumé<i className="fa-solid fa-arrow-up text-xs ml-0.5 mb-1 rotate-45 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"></i>
                        </a>
                    </h1>

                </div>
                <div>
                    <h1 className="text-white text-4xl mb-6 flex justify-center">Certificate</h1>
                    <InfiniteScrollCarousel isReverse={'false'} certificateList={certificateList_2} />
                    <div className="mb-6"></div>
                    <InfiniteScrollCarousel isReverse={'true'} certificateList={certificateList_1} />
                </div>
            </div>
        </>
    )

}