interface NavItemProps {
    text: string
    href: string
}
export default function NavItem(props: NavItemProps) {
    return <>
        <li className='hover:bg-mainBlue p-4 px-6 cursor-pointer text-xl 300:text-sm content overscroll-contain 300:text-xl 300:px-0.5 p-0.5'>
            <a href={props.href}>{props.text}</a>
        </li>
    </>
}