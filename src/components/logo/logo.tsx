import Image from 'next/image'
import LogoSVG from '../../../public/videoshops-logo.svg'

export default function Logo() {
  return <Image src={LogoSVG} alt="videoshops logo" />
}
