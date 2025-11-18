import Contact from '../../pages/Contact';
import Header from '../../pages/Header';
import Project from '../../pages/Project';

export default function MainLayout() {
    return (

        <>
            <div className='mx-24 flex flex-col'>
                <Header/>
                <Project/>
                <Contact/>
            </div>
        </>
        
    );
};