'use client'
import React from 'react'
import Link from 'next/link'
import './style/navbar.css';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <div className='navbar-head'>
        <div>
          <Image src="/Untitled design(1).png" width={50}
            height={50}
            alt="logo" />
        </div>
        <div className='navbar-right'>
          <Link href='/'>Home</Link>
          <Link href="/Movie">Movie</Link>
          <Link href="/Contact">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Header