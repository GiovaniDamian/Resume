import { createContext, useEffect, useState } from "react";

interface AppContextProps {
  language: "pt" | "en" | "nl" | "it" | "es";
  changeLanguage: (lang: "pt" | "en" | "nl" | "it" | "es") => void;
}

const AppContext = createContext<AppContextProps>({
  language: "en",
  changeLanguage: () => {},
});

export function AppProvider(props: any) {
  const [language, setLanguage] = useState<"pt" | "en" | "nl" | "it" | "es">("en");

  function changeLanguage(lang: "pt" | "en" | "nl" | "it" | "es") {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  }

  useEffect(() => {
    const languageSave =
      (localStorage.getItem("language") as "pt" | "en" | "nl" | "it" | "es") ?? "en";
    setLanguage(languageSave);
  }, []);

  return (
    <AppContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
