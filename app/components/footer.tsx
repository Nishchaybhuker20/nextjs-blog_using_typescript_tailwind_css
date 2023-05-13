import React from 'react';
import { Envelope, Twitter,Leetcode} from '../icons';
import Link from 'next/link';

type FooterProps = {
  contactMeLinks: string[];
};

export const Footer = ({contactMeLinks}: FooterProps) => {
  return <footer className = 'w-full bg-white shadow-footer mt-12 py-4 fixed bottom-0'>
    <div className = 'flex items-center justify-center gap-1'>
      
    <a href={contactMeLinks[0]} aria-label='Email'> 
    <Envelope className= 'icons_contactme'/></a>

    <a href={contactMeLinks[1]} aria-label='Twitter'> 
    <Envelope className= 'icons_contactme'/></a>

    <a href={contactMeLinks[2]} aria-label='Linkedin'> 
    <Envelope className= 'icons_contactme'/></a>

    <a href={contactMeLinks[3]} aria-label='Leetcode'> 
    <Envelope className= 'icons_contactme'/></a>


    </div>
  </footer>
}


