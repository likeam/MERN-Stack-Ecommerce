import {MdOutlineLocalOffer} from 'react-icons/md'
import {NavLink} from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
const Hero = () => {
  return (
    <section className=" relative bg-hero bg-center bg-cover bg-no-repeat h-screen w-full pb-12">
        <div className=" max_padd_container relative top-32 xs:top-52">
            <h1 className=" h1 capitalize max-w-[37rem]">Digital Shopping Hub Junction</h1>
            <p className=" text-gray-50 regular-16 mt-6 max-w-[33rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur obcaecati adipisci quae! Natus eos pariatur doloribus tempore autem! Cupiditate perspiciatis dolores, placeat, eligendi alias ab, error consequatur sint velit beatae excepturi! Veniam?</p>
            <div className=" flexStart !items-center gap-x-4 my-10">
                <div className="!regular-24 flexCenter gap-x-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className=" bold-16 sm:bold-20">176k <span className=' regular-16 sm:regular-20'>Excellent Review</span></div>
            </div>
            <div className=" max-xs:flex-col flex gap-2">
                <NavLink to={''} className=" btn_dark_rounded flexCenter">Shop now</NavLink>
                <NavLink to={''} className=" btn_dark_rounded flexCenter gap-x-2"><MdOutlineLocalOffer className=' text-2xl' />Offers</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Hero