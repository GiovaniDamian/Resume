
import { createContext, useEffect, useState } from "react";


interface AppContextProps {
    language?: string
    changeLanguage?: () => void
}

const AppContext = createContext<AppContextProps>({})

export function AppProvider(props: any) {
    const [language, setLanguage] = useState('pt')

    function changeLanguage() {
        const newLangague = language === 'pt' ? 'en' : 'pt'
        setLanguage(newLangague)
        localStorage.setItem('language', newLangague)
    }

    useEffect(() => {
        const languageSave = localStorage.getItem('language') ?? 'pt'
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