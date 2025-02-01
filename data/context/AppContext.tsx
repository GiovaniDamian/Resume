
import { createContext, useEffect, useState } from "react";


interface AppContextProps {
    language?: string
    changeLanguage?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any) {
    const [language, setLanguage] = useState('en')

    function changeLanguage() {
        const newLangague = language === 'pt' ? 'en' : 'pt'
        setLanguage(newLangague)
        localStorage.setItem('language', newLangague)
    }

    useEffect(() => {
        const languageSave = localStorage.getItem('language') ?? 'en'
        setLanguage(languageSave)
    }, [])

    return (
        <AppContext.Provider value={{
            language,
            changeLanguage
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext
