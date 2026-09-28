


import { FlipWords } from './ui/flip.words';
import { useTranslation } from 'react-i18next';
import { SocialLinks } from './SocialLinks';

function Presentation() {

    const { t } = useTranslation();

    const words = t('accueil.words', { returnObjects: true }) as string[];

    return (
        <div id='accueil' className="w-full m-auto h-screen bg-stars">
            <div className="flex md:flex-row ml-6 md:ml-12 h-screen max-w-1/2 items-center ">
                <div className="w-full  flex flex-col md:p-4 text-text-blue-service z-20">
                    <p className=" text-3xl md:text-6xl  pb-4 md:pb-6">
                        {t('accueil.jesuis')} <span className="text-customPurple">{t('accueil.paulleclercq')}</span>
                    </p>
                    {/* <p className='pb-4 md:pb-8'><ScanFace className='sm:size-[60px] size-[30px] inline text-customPurple' style={{ color: 'var(--color-customPurple)' }} /></p> */}
                    <p className="text-3xl md:text-5xl pb-8 md:pb-8">{t('accueil.developpeur')}
                        <FlipWords className={"text-text-blue-service-p p-0"} duration={1200} words={words} />
                    </p>
                    <div className='flex flex-row space-x-2 md:space-x-4 '>
                        <SocialLinks />
                    </div>

                   
                </div>
            </div>
        </div>
    );
}

export default Presentation;
