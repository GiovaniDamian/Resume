import t from "../../data/i18n/translations";
import useAppData from "../../data/hook/useAppData";
import TemplatesWelcome from "./TemplatesWelcome";

export default function Welcome(props: any) {
  const { language } = useAppData();

  return (
    <div id="welcome-section" className="bg-mainBlue pt-12 w-full">
      <div className="bg-cover bg-welcome h-full opacity-50 mt-4 p-2">
        <div className=" mt-2 font-bold text-center text-mainBlueDark opacity-100 font-raleway 300:mt-12 ">
          <h1 className="text-black text-6xl m-2">
            {t("welcome.name", language)}
          </h1>
          <h2 className="text-lg">{t("welcome.role", language)}</h2>
        </div>
        <TemplatesWelcome />
      </div>
    </div>
  );
}
