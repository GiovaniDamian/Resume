import React from "react";
import useAppData from "../../data/hook/useAppData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import t from "../../data/i18n/translations";

export default function Contact(props: any) {
  const { language } = useAppData();
  const whatsApp = t("contact.whatsapp", language);
  const cvLink = t("contact.cvLink", language);

  return (
    <>
      <div
        id="contact"
        className="bg-mainBlueDark flex flex-col justify-center content-center text-center text-mainBlueLight h-full p-4"
      >
        <h1 className="text-5xl font-extrabold mt-12 m-8 font-raleway ">
          {t("contact.title", language)}
        </h1>
        <h2 className="italic text-xl ">{t("contact.subtitle", language)}</h2>

        <div className="flex h-full justify-center content-center text-center mt-8 ">
          <a
            href="https://www.linkedin.com/in/giovanidamian/"
            target="_blank"
            className="p-4 hover:translate-y-6"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/d_giovani_/"
            target="_blank"
            className="p-4 hover:translate-y-6"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href={whatsApp}
            target="_blank"
            className="p-4 hover:translate-y-6"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a
            href="https://github.com/GiovaniDamian"
            target="_blank"
            className="p-4 hover:translate-y-6"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhnsTTpNgtbVPxTttKqrKlsNgqjZmGkSTcNLQtztfXQwDbFtCZVGblLFrZSkCkzWztFTg"
            target="_blank"
            className="p-4 hover:translate-y-6"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <div>
          <a href={cvLink} target="_blank">
            <button className="bg-mainBlueDark font-bold h-24 w-36 mt-20 m-8 300:m-4 rounded-xl border-2 border-mainBlueLight underline shadow-xl shadow-blue-900  hover:text-mainBlueLight hover:border-4  hover:border-mainBlueLight">
              {t("contact.downloadButton", language)}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
