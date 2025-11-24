import { certificateList1, certificateList2 } from "../data/Data";
import InfiniteScrollCarousel from "../components/ui/InfiniteScrollCarousel";


export default function CertificatePage() {

    const certificateList_1 = certificateList1;
    const certificateList_2 = certificateList2;

    return (
        <>
            <div id="certificatePage">
                <h1 className="text-white text-4xl my-10 flex justify-center">Certificate</h1>
                <InfiniteScrollCarousel isReverse={'false'} certificateList={certificateList_2} />
                <div className="mb-6"></div>
                <InfiniteScrollCarousel isReverse={'true'} certificateList={certificateList_1} />
            </div>
        </>
    )

}