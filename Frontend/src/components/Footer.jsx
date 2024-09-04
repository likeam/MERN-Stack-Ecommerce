import {Link} from 'react-router-dom'
import SOCIALS from '../assets/socials';

 const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Categories",
      "Exchange Policy",
      "Order Now",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: [
      "Terms and Conditions",
      "Special Offers",
      "Customer Reviews",
    ],
  },
];


 const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7890" },
    { label: "Email Address", value: "info@shoppee.com" },
  ],
};






const Footer = () => {
  return (
    <footer className=" flexCenter pb-24 pt-20">
      <div className=" max_padd_container flex w-full flex-col gap-14">
        <div className=" flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link to="/" className=' mb-10 bold-20 '>Shoppee</Link>
          <div className=" flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col) => (
              <FooterColum title={col.title} key={col.title}>
                <ul className=" flex flex-col gap-4 regular-14 text-gray-20">
                  {col.links.map((link) => (                  
                      <Link to="/" key={link}>{link}</Link>                  
                  ))}
                </ul>
              </FooterColum>
            ))}
            <div className=" flex flex-col gap-5">
              <FooterColum title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link to="/" key={link.label} className=' flex gap-4 md:flex-col lg:flex-row'>
                    <p className="">{link.label}:</p>
                    <p className=" medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColum>
            </div>
            <div className=" flex">
              <FooterColum>
                <ul className=" flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link to="/" key={link} >
                      <img src={link} alt={link} height={22} width={22} />
                    </Link>
                  ))}
                </ul>
              </FooterColum>
            </div>
          </div>
        </div>
        <div className=" border bg-gray-20"></div>
        <p className=" text-center regular-14 text-gray-30">2024 A.Rehman | All rights reserved.</p>
      </div>
    </footer>
  )
}

const FooterColum = ({title, children}) => {
  return (
    <div className=" flex flex-col gap-5">
      <h4 className=" bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer