import { certificateList1, certificateList2 } from "../data/Data";
import InfiniteScrollCarousel from "../components/ui/InfiniteScrollCarousel";


export default function CertificatePage({idPage}) {

    const certificateList_1 = certificateList1;
    const certificateList_2 = certificateList2;

    return (
        <>
            <div id={idPage}>
                <h1 className="text-white text-2xl sm:text-4xl my-4 sm:my-10 flex justify-baseline sm:justify-center">Certificate</h1>
                <InfiniteScrollCarousel isReverse={'false'} certificateList={certificateList_2} />
                <div className="mb-6"></div>
                <InfiniteScrollCarousel isReverse={'true'} certificateList={certificateList_1} />
            </div>
        </>
    )

}