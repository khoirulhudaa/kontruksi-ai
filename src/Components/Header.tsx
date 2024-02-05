import { Logo2 } from "../Assets"
import Button from "./Button"

const Header = ({title}: {title: string}) => {
  return (
    <div className="w-full flex justify-between md:justify-center items-center">
        <img src={Logo2} alt="logo" className="absolute md:inline hidden top-3 left-2" />
        <p className="text-mainColor1 w-full relative top-[30px] md:text-center md:left-0 left-10 mx-auto">{title}</p>
        <Button text="Keluar" color="orange" style="absolute top-[30px] right-10" />
    </div>
  )
}

export default Header
