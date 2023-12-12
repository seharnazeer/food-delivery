import Image from 'next/image'
import Header from '../components/home/header'
import HeroSection from '../components/home/hero'
import Menu from '../components/home/menu'
export default function Home() {
  return (
  <div>
    <HeroSection />
    <Menu />
  </div>
  )
}
