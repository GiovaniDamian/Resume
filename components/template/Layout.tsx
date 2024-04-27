import Welcome from './Welcome'
import Navbar from './Navbar'
import Courses from './Courses'
import Projects from './Projects'
import useAppData from '../../data/hook/useAppData'
import Contact from './Contact'
import Footer from './Footer'

export default function Layout(props: any) {
    const { language, changeLanguage } = useAppData()
    return (
        <div className="overflow-auto">
            <Navbar language={language} changeLanguage={changeLanguage} />
            <Welcome />
            <Courses />
            <Projects />
            <Contact />
            <Footer />
        </div>)
}