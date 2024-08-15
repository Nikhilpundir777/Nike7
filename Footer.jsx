
import React from 'react';

const Footer = () => {
  // Sample data for demonstration purposes
  const socialMedia = [
    { name: 'Facebook', src: 'https://img.icons8.com/ios-filled/50/ffffff/facebook.png', link: 'https://facebook.com' },
    { name: 'Twitter', src: 'https://img.icons8.com/ios-filled/50/ffffff/twitter.png', link: 'https://twitter.com' },
    { name: 'Instagram', src: 'https://img.icons8.com/ios-filled/50/ffffff/instagram.png', link: 'https://instagram.com' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', link: '/about' },
        { name: 'Careers', link: '/careers' },
        { name: 'Press', link: '/press' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', link: '/contact' },
        { name: 'Returns', link: '/returns' },
        { name: 'FAQ', link: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', link: '/privacy-policy' },
        { name: 'Terms of Service', link: '/terms-of-service' },
      ],
    },
  ];

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-container'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
          {/* Logo and Description */}
          <div className='flex flex-col items-start max-w-xs'>
            <a href='/'>
              <img
                src='data:image/jpeg;base64,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'
                alt='Nike logo'
                width={150}
                height={46}
                className='mb-6'
              />
            </a>
            <p className='text-base leading-7 font-montserrat text-white-400 mb-8'>
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards.
            </p>
            <div className='flex items-center gap-5'>
              {socialMedia.map((icon) => (
                <a href={icon.link} key={icon.name} className='text-white hover:text-coral-red transition duration-300'>
                  <img src={icon.src} alt={icon.name} width={24} height={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {footerLinks.map((section) => (
              <div key={section.title} className='flex flex-col'>
                <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-coral-red transition duration-300'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='flex flex-col lg:flex-row justify-between items-center text-white-400 mt-12'>
          <div className='flex items-center gap-2 font-montserrat'>
            <img
              src='https://img.icons8.com/ios-filled/50/ffffff/copyright.png'
              alt='Copyright sign'
              width={20}
              height={20}
            />
            <span>&copy; {new Date().getFullYear()} Nike, Inc. All rights reserved.</span>
          </div>
          <div className='mt-4 lg:mt-0'>
            <a href='/privacy-policy' className='text-white hover:text-coral-red transition duration-300 mr-4'>Privacy Policy</a>
            <a href='/terms-of-service' className='text-white hover:text-coral-red transition duration-300'>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
