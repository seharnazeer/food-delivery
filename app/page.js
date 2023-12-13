"use client"
import Image from 'next/image'
import Header from '../components/home/header'
import HeroSection from '../components/home/hero'
import Menu from '../components/home/menu'
import About from "../components/home/about"
import { useSession } from 'next-auth/react'
export default function Home() {
  const session=useSession()
  console.log(session)
  return (
  <div>
    <HeroSection />
    <Menu />
    <About />
  </div>
  )
}
