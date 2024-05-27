import React from 'react'
import useAppData from '../../data/hook/useAppData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact(props: any) {
    const { language } = useAppData()

    return <>
        <div id="contact" className='bg-mainBlueDark flex flex-col justify-center content-center text-center text-mainBlueLight h-full p-4'>
            <h1 className="text-5xl font-extrabold mt-12 m-8 font-raleway ">{language == 'pt' ? 'Vamos trabalhar juntos?' : "Let's work together?"}</h1>
            <h2 className="italic text-xl ">{language == 'pt' ? 'Entre em contato:' : "Get in touch:"}</h2>

            <div className="flex h-full justify-center content-center text-center mt-8 ">
                <a href="https://www.linkedin.com/in/giovanidamian/"
                    target="_blank"
                    className="p-4 hover:translate-y-6"><FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                </a>
                <a href="https://www.instagram.com/d_giovani_/"
                    target="_blank"
                    className="p-4 hover:translate-y-6"><FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://wa.me/5548991503304"
                    target="_blank"
                    className="p-4 hover:translate-y-6"><FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a><a href="https://github.com/GiovaniDamian"
                    target="_blank"
                    className="p-4 hover:translate-y-6"><FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhnsTTpNgtbVPxTttKqrKlsNgqjZmGkSTcNLQtztfXQwDbFtCZVGblLFrZSkCkzWztFTg"
                    target="_blank"
                    className="p-4 hover:translate-y-6"><FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </div>
            <div>
                <a href={language == 'pt' ? "https://drive.google.com/file/d/1UyP2KCllhG9S3jHxP2TQwXsXevnoqDKf/view?usp=drive_link" : "https://drive.google.com/file/d/1qkYlgbS7di7WGquIgsuP-I2xYOXgXQVb/view?usp=sharing"} target="_blank">
                    <button className="bg-mainBlueDark font-bold h-24 w-36 mt-20 m-8 300:m-4 rounded-xl border-2 border-mainBlueLight underline shadow-xl shadow-blue-900  hover:text-mainBlueLight hover:border-4  hover:border-mainBlueLight">Dowload CV</button>
                    </a>
            </div>
        </div>
    </>
}
