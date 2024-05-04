import NavItem from "./NavItem";

interface NavBarProps {
    language?: string
    changeLanguage?: () => void
}
export default function Navbar(props: NavBarProps) {

    return (
        <nav className='bg-mainGrayBlue shadow-md border-b-2 border-gray-500 text-mainBlueLight fixed w-full z-10'>
            <ul className='flex mx-3'>
                <li className='grow justify-center p-4 300:grow-0 300:p-0'>
                    <label className="inline-flex 300:flex-col items-center cursor-pointer 300:absolute top-20 left-0">
                    <input type="checkbox" value={props.language} className="sr-only peer" onChange={props.changeLanguage} checked={props.language === 'en'} />
                        <div className="relative w-11 h-6 bg-mainBlue peer-focus:ring-blue-300 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mainBlueLight"></div>
                        <span className="ms-3">PT / EN</span>
                    </label>
                </li>
                <NavItem text={props.language === 'pt' ? 'Sobre' : 'About'} href='#welcome-section' />
                <NavItem text={props.language === 'pt' ? 'Cursos' : 'Courses'} href='#courses' />
                <NavItem text={props.language === 'pt' ? 'Projetos' : 'Projects'} href='#projects' />
                <NavItem text={props.language === 'pt' ? 'Contatos' : 'Contact'} href='#contact' />
            </ul>
        </nav>
    )
}