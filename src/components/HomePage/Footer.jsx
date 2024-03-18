import React from 'react'
import logo from "../../Images/Logo.png";
import {
    Footer,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from 'flowbite-react';
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
  

export default function 
() {
    return (
        <Footer container id='contact-us'>
          <div className="footer w-full h-80 bg-beige flex flex-col justify-center items-center pt-8">
            <div className="grid w-3/4 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className='w-44 h-44'>
                <a href="#"><img src={logo} alt="Website logo" /></a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <FooterTitle title="About" className='text-dark-purple'/>
                  <FooterLinkGroup col className='text-light-purple'>
                    <FooterLink href="#">Flowbite</FooterLink>
                    <FooterLink href="#">Tailwind CSS</FooterLink>
                  </FooterLinkGroup>
                </div>
                <div>
                  <FooterTitle title="Follow us"  className='text-dark-purple'/>
                  <FooterLinkGroup col className='text-light-purple'>
                    <FooterLink href="#">Github</FooterLink>
                    <FooterLink href="#">Discord</FooterLink>
                  </FooterLinkGroup>
                </div>
                <div>
                  <FooterTitle title="Legal"  className='text-dark-purple'/>
                  <FooterLinkGroup col className='text-light-purple'>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                  </FooterLinkGroup>
                </div>
              </div>
            </div>
            <FooterDivider />
            <div className="w-3/4 sm:flex sm:items-center sm:justify-between ">
              <FooterCopyright href="#" by="ZenVibe™" year={2024} className='text-light-purple'/>
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
                <FooterIcon href="#" icon={BsFacebook} className='text-light-purple'/>
                <FooterIcon href="#" icon={BsInstagram} className='text-light-purple'/>
                <FooterIcon href="#" icon={BsTwitter} className='text-light-purple'/>
                <FooterIcon href="#" icon={BsGithub} className='text-light-purple'/>
                <FooterIcon href="#" icon={BsDribbble} className='text-light-purple'/>
              </div>
            </div>
          </div>
        </Footer>
      );
}
