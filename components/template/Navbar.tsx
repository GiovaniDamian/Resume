import NavItem from "./NavItem";

interface NavBarProps {
    language?: string
    changeLanguage?: () => void
}
export default function Navbar(props: NavBarProps) {

    return (
        <nav className='bg-mainGrayBlue shadow-md border-b-2 border-gray-500 text-mainBlueLight fixed w-full z-10 300:h-12'>
            <ul className='flex mx-3 300:items-stretch 300:justify-between 300:mx-0 300:mr-2'>
                <li className='grow justify-center p-4 300:grow-0 300:p-0'>
                    <label className="inline-flex 300:flex-col items-center cursor-pointer">
                    <input type="checkbox" value={props.language} className="sr-only peer" onChange={props.changeLanguage} checked={props.language === 'en'} />
                        <div className="relative w-11 h-6 bg-mainBlue peer-focus:ring-blue-300 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mainBlueLight"></div>
                        <span className="ms-3">PT / EN</span>
                    </label>
                </li>
                <NavItem className={`300:border-mainGrayBlue border-r-1`} text={props.language === 'pt' ? 'Sobre' : 'About'} href='#welcome-section' />
                <NavItem text={props.language === 'pt' ? 'Cursos' : 'Courses'} href='#courses' />
                <NavItem text={props.language === 'pt' ? 'Projetos' : 'Projects'} href='#projects' />
                <NavItem text={props.language === 'pt' ? 'Contatos' : 'Contact'} href='#contact' />
            </ul>
        </nav>
    )
}