import {BsFacebook,BsInstagram,BsLinkedin,BsTwitter} from 'react-icons/bs'

function Footer(){
    const currentDate=new Date();
    const year=currentDate.getFullYear();
    return(
        <>
        <footer className='relative left-0 bottom-0 h-[10vh] flex flex-col sm:flex-row justify-between items-center text-white py-5 bg-gray-800 sm:px-20 px-5'>
            <section className='text-lg'>
                Copyright {year} All rights reserved
            </section>
            <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                <a className='hover:text-yellow-500 transition-all ease-in-out diraction-300'>
                    <BsFacebook />
                </a>
                <a className='hover:text-yellow-500 transition-all ease-in-out diraction-300'>
                    <BsInstagram />
                </a>
                <a className='hover:text-yellow-500 transition-all ease-in-out diraction-300'>
                    <BsLinkedin />
                </a>
                <a className='hover:text-yellow-500 transition-all ease-in-out diraction-300'>
                    <BsTwitter />
                </a>
            </section>
        </footer>
        </>
    )

}
export default Footer;