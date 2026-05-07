import React, { useState } from "react";
import ButtonWelcome from "./ButtonWelcome";
import CardWelcome from "./CardWelcome";
import Section from "./Section";
import Cube from "./Cube";
import useAppData from "../../data/hook/useAppData";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import t from "../../data/i18n/translations";

export default function TemplatesWelcome() {
  const [showSkills, setShowSkills] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [buttonClicked, setButtonClicked] = useState("");
  const { language } = useAppData();
  const handleButtonClick = (section: string) => {
    if (buttonClicked === section) {
      setButtonClicked("");
      setShowSkills(false);
      setShowExperience(false);
      setShowEducation(false);
    } else {
      setButtonClicked(section);
      setShowSkills(section === "skills");
      setShowExperience(section === "experience");
      setShowEducation(section === "education");
    }
  };
  return (
    <>
      <div className="flex flex-row h-32">
        <Section
          classNameItems="flex w-full max-w-[980px] gap-4 items-start"
          classNameTop="mt-10"
          items={[
            <>
              <Cube
              text="C#"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                }
              />
              <Cube
              text=".NET"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"
                }
              />
              <Cube
                text="JS"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                }
              />
              <Cube
              text="TS"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                }
              />
              <Cube
              text="Docker"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                }
              />
              <Cube
                text="HTML"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                }
              />
              <Cube
              text="CSS"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                }
              />
              <Cube
              text="React"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                }
              />
              <Cube
              text="Vue"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                }
              />
              <Cube
              text="Node"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                }
              />
              <Cube
              text="Python"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                }
              />
              <Cube
              text="Java"
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                }
              />
              <Cube
              text="Flutter"  
                icon={
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
                }
              />
              <Cube
              text="Tailwind"
              textSide={7} 
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                }
              />
               <Cube
              text="Material UI"
              textSide={7}  
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg"
                }
              />
              <Cube
              text="Bootstrap"
              textSide={7}  
                icon={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                }
              />
            </>,
          ]}
        />
        
      </div>
      <div className="grid grid-cols-4 m-3 p-2 mt-6">
        <div className="mr-8 self-start 300:absolute top-40 left-0 w-full">
          <CardWelcome
            key="skills"
            title={t("card.skills.title", language)}
            content={[
              <div key={`skills0`}>
                <p>{t("card.skills.text.1", language)}</p>
                <p>{t("card.skills.text.2", language)}</p>
                <p>{t("card.skills.text.3", language)}</p>
              </div>,
            ]}
            isVisible={showSkills}
          />
          <div className="mr-8 300:absolute top-20 left-0 w-full mt-4">
            <CardWelcome
              key="languages"
              title={t("card.languages.title", language)}
              content={[
                <div key={`languages0`}>
                  <p>
                    <span className="fi fi-br"></span>{" "}
                    {t("card.languages.portuguese", language)}
                  </p>
                  <p>
                    <span className="fi fi-us"></span>
                    {t("card.languages.english", language)}
                  </p>
                  <p>
                    <span className="fi fi-it"></span>{" "}
                    {t("card.languages.italian", language)}
                  </p>
                  <p>
                    <span className="fi fi-es"></span>{" "}
                    {t("card.languages.spanish", language)}
                  </p>
                </div>,
              ]}
              isVisible={showSkills}
            />
          </div>
        </div>

        <div className="justify-self-end w-3/4 300:mt-60">
          <ButtonWelcome
            onClick={() => handleButtonClick("experience")}
            label={t("button.experience", language)}
            isActive={buttonClicked === "experience"}
          />

          <div className="ml-24">
            <ButtonWelcome
              onClick={() => handleButtonClick("education")}
              label={t("button.education", language)}
              isActive={buttonClicked === "education"}
            />
          </div>
          <ButtonWelcome
            onClick={() => handleButtonClick("skills")}
            label={t("button.skills", language)}
            isActive={buttonClicked === "skills"}
          />
        </div>

        <div className="col-span-2 p-2">
          <CardWelcome
            key="education"
            title={t("card.education.title", language)}
            content={[
              <div key={`education0`} className="p-1">
                <article className="mb-2 pb-2 border-b-2">
                  <h4 className="underline font-bold">
                    {t("education.1.title", language)}
                  </h4>
                  <p style={{ margin: "2px 0px" }}>
                    <strong>Front-End: </strong>
                    {t("education.1.item.1", language)}
                  </p>
                  <p>
                    <strong>Back-End: </strong>
                    {t("education.1.item.2", language)}
                  </p>
                </article>

                <article className="mb-2 pb-2 border-b-2">
                  <h4 className="underline font-bold">
                    {t("education.2.title", language)}
                  </h4>
                  <p>
                    {t("education.2.description", language)}{" "}
                    <strong>{t("education.2.note", language)}</strong>
                  </p>
                  <p>{t("education.2.activities", language)}</p>
                  <ul className="list-disc list-inside">
                    <li>{t("education.2.item.1", language)}</li>
                    <li>{t("education.2.item.2", language)}</li>
                    <li>{t("education.2.item.3", language)}</li>
                    <li>{t("education.2.item.4", language)}</li>
                  </ul>
                </article>

                <article>
                  <h4 className="underline font-bold">
                    {t("education.3.title", language)}
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>{t("education.3.item.1", language)}</li>
                    <li>{t("education.3.item.2", language)}</li>
                    <li>{t("education.3.item.3", language)}</li>
                  </ul>
                </article>
              </div>,
            ]}
            isVisible={showEducation}
          />
          
          <CardWelcome
            key="experience"
            title={t("card.experience.title", language)}
            content={[
              <div key={`experience0`} className="p-1">
                <article className="mb-2 pb-2 border-b-2">
                  <h4 className="underline font-bold mb-1">
                    {t("experience.5.title", language)}
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>{t("experience.5.item.1", language)} </li>
                    <li>{t("experience.5.item.2", language)} </li>
                    <li>{t("experience.5.item.3", language)} </li>
                  </ul>
                </article>

                <article className="mb-2 pb-2 border-b-2">
                  <h4 className="underline font-bold mb-1">
                    {t("experience.4.title", language)}
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>{t("experience.4.item.1", language)} </li>
                    <li>{t("experience.4.item.2", language)} </li>
                    <li>{t("experience.4.item.3", language)} </li>
                  </ul>
                </article>

                <article className="mb-2 pb-2 border-b-2">
                  <h4 className="underline font-bold mb-1">
                    {t("experience.3.title", language)}
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>{t("experience.3.item.1", language)} </li>
                    <li>{t("experience.3.item.2", language)} </li>
                    <li>{t("experience.3.item.3", language)} </li>
                  </ul>
                </article>

                <article className="mb-2 pb-2 border-b-2">
                  <h4 className="underline font-bold mb-1">
                    {t("experience.2.title", language)}
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>{t("experience.2.item.1", language)} </li>
                    <li>{t("experience.2.item.2", language)} </li>
                    <li>{t("experience.2.item.3", language)} </li>
                  </ul>
                </article>

                <article>
                  <h4 className="underline font-bold mb-1">
                    {t("experience.1.title", language)}
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>{t("experience.1.item.1", language)} </li>
                    <li>{t("experience.1.item.2", language)} </li>
                    <li>{t("experience.1.item.3", language)} </li>
                  </ul>
                </article>
              </div>,
            ]}
            isVisible={showExperience}
          />
        </div>
        
      </div>
    </>
  );
}
