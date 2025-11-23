import { IconContext } from 'react-icons';
import { CgLaptop } from 'react-icons/cg';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import styled from 'styled-components';

export default function InfiniteScrollCarousel({ certificateList, isReverse }) {

    const loopedCardData = [...certificateList, ...certificateList];

    const sliderVars = {
        '--width': '260px',
        '--quantity': certificateList.length
    };

    return (
        <StyledWrapper>
            <div
                className="slider w-full h-fit overflow-hidden"
                style={{
                    ...sliderVars,
                    maskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)'
                }}
                reverse={`${isReverse}`}
            >
                <div className="list">
                    {loopedCardData.map((card, index) => (

                        <a key={`${index}`} href={`${card.url}`} target='_blank'>
                            <div className="group item h-fit text-white border-y-white/20 border-y" style={{ width: sliderVars['--width'] }} >

                                <div className="w-full h-56 text-white flex flex-col justify-center items-center text-sm pt-4 px-4 backdrop-blur-lg bg-white/10 shadow-xl cursor-pointer group-hover:bg-white/20">

                                    <img className='grow group-hover:scale-105 transition' src={`${card.linkImage}`} alt={`${card.text}`} />
                                    <p className='my-2 flex items-center'>
                                        {card.text}&nbsp;<span
                                            className='opacity-0 transition-all duration-300 ease-in-out transform -translate-x-3 group-hover:inline-block group-hover:opacity-100 group-hover:translate-x-0'>
                                            <IconContext.Provider value={{ className: 'text-xs' }}>
                                                <FaArrowUpRightFromSquare />
                                            </IconContext.Provider>
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </a>

                    ))}
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    
    .slider:hover .list {
        animation-play-state: paused !important;
    }

    .slider .list {
        display: flex;
        flex-direction: row;
        width: fit-content;
        animation: autoRun 40s linear infinite; 
    }
    
    .slider .list .item {
        flex-shrink: 0;
    }
    
    @keyframes autoRun {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(var(--width) * var(--quantity) * -1)); 
        }
    }

    .slider[reverse="true"] .list {
        animation: reversePlay 40s linear infinite;
    }
    
    @keyframes reversePlay {
        from {
            transform: translateX(calc(var(--width) * var(--quantity) * -1));
        }
        to {
            transform: translateX(0);
        }
    }
`;