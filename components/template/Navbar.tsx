import NavItem from "./NavItem";
import t from "./../../data/i18n/translations";

interface NavBarProps {
  language?: "pt" | "en" | "nl";
  changeLanguage?: (lang: "pt" | "en" | "nl") => void;
}

export default function Navbar(props: NavBarProps) {
  const lang = props.language || "en";

  return (
    <nav className="bg-mainGrayBlue shadow-md border-b-2 border-gray-500 text-mainBlueLight fixed w-full z-10 300:h-12">
      <ul className="flex mx-3 300:items-stretch 300:justify-between 300:mx-0 300:mr-2">
        <li className="grow justify-center p-4 300:grow-0 300:p-0">
          <label className="inline-flex 300:flex-col items-center cursor-pointer">
            <select
              value={lang}
              onChange={(e) =>
                props.changeLanguage?.(e.target.value as "pt" | "en" | "nl")
              }
              className="rounded-md text-black px-2 py-1 text-sm"
            >
              <option value="pt">🇧🇷 Português</option>
              <option value="en">🇺🇸 English</option>
              <option value="nl">🇳🇱 Nederlands</option>
            </select>
          </label>
        </li>
        <NavItem
          className={`300:border-mainGrayBlue border-r-1`}
          text={t("about", lang)}
          href="#welcome-section"
        />
        <NavItem text={t("courses", lang)} href="#courses" />
        <NavItem text={t("projects", lang)} href="#projects" />
        <NavItem text={t("contact", lang)} href="#contact" />
      </ul>
    </nav>
  );
}
