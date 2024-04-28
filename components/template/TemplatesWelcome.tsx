import React, { useState } from 'react';
import ButtonWelcome from './ButtonWelcome';
import CardWelcome from './CardWelcome';
import Section from './Section';
import Cube from './Cube';
import useAppData from '../../data/hook/useAppData';
import "/node_modules/flag-icons/css/flag-icons.min.css";


export default function TemplatesWelcome() {
    const [showSkills, setShowSkills] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [buttonClicked, setButtonClicked] = useState('');
    const { language } = useAppData()

    const handleButtonClick = (section: string) => {
        if (buttonClicked === section) {
            setButtonClicked('');
            setShowSkills(false);
            setShowExperience(false);
            setShowEducation(false);
        } else {
            setButtonClicked(section);
            setShowSkills(section === 'skills');
            setShowExperience(section === 'experience');
            setShowEducation(section === 'education');
        }
    };
    return (
        <>
            <div className="flex flex-row h-32">
                <Section classNameItems="flex w-60 " classNameTop="mt-10" title="" enTitle="" items={[
                    <>
                        <Cube icon={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"} />
                        <Cube icon={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg"} />
                        <Cube icon={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"} />
                        <Cube icon={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"} />
                        <Cube icon={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"} />
                        <Cube icon={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"} />
                    </>

                ]} />
                <div className={`ml-24 justify-end w-full 300:container overscroll-contain`} >
                    <CardWelcome
                        key="experience"
                        title="Experiência"
                        enTitle="Experience"
                        content={[
                            <div key={`experience0`} className="flex">
                                <article className="w-2/3 border-r-2 mr-4 flex flex-col" >
                                    <h4 className="underline font-bold mb-2">DESENVOLVEDOR FULL STACK JR • MULTILOG • 03/23 – 10/23</h4>
                                    <p>Desenvolvimento e sustentação de sistemas. Atuação em equipe ágil, metodologia SCRUM, MicroServiços e amplo desenvolvimento de sistemas para clientes internos e externos da organização.</p>
                                </article>

                                <article className="border-r-2 w-1/2 flex flex-col">
                                    <h4 className="underline font-bold mb-2">TRAINEE FULL STACK • FAPESC • 03/22 – 03/23</h4>
                                    <p>Desenvolvimento de soluções e novos recursos para automatizar processos logísticos utilizando diversas linguagens de programação.</p>
                                </article>

                                <article className="ml-4 flex flex-col">
                                    <h4 className="underline font-bold mb-2">SUPERVISOR ADMINISTRATIVO • PANFACIL ALIMENTOS S/A • 09/15 – 05/19</h4>
                                    <ul className="list-disc list-inside">
                                        <li>Gestão operacional e funções administrativas na área comercial;</li>
                                        <li>Negociações com fornecedores e clientes;</li>
                                        <li>Controle de pedidos,entregas, estoque e veículos.</li>
                                    </ul>
                                </article>
                            </div>
                        ]}
                        enContent={[
                            <div key={`experience1`} className="flex flex column">
                                <article className="w-2/3 border-r-2 mr-4">
                                    <h4 className="underline font-bold">FULL STACK DEVELOPER JR • MULTILOG • 03/23 – 10/23</h4>
                                    <p>Full stack developer supporting systems. Working in an agile team, SCRUM methodology, Micro-Services, and broad development of systems for internal and external customers of the organization.</p>
                                </article>

                                <article className="pr-2 border-r-2 w-1/2">
                                    <h4 className="underline font-bold">TRAINEE FULL STACK • FAPESC • 03/22 – 03/23</h4>
                                    <p>Deliver new features to automate logistical processes. Development of solutions using several programming languages and frameworks.</p>
                                </article>

                                <article className="ml-2">
                                    <h4 className="underline font-bold">ADMINISTRATIVE SUPERVISOR • PANFACIL ALIMENTOS S/A • 09/15 – 05/19</h4>
                                    <ul className="list-disc list-inside">
                                        <li>Managing functions in the operational area and administrative functions in the commercial area;</li>
                                        <li>Negotiations with suppliers and customers;</li>
                                        <li>Control of orders and Administration of resources, equipment, vehicles and structures.</li>
                                    </ul>
                                </article>
                            </div>
                        ]}
                        isVisible={showExperience}
                    />
                </div>
            </div>
            <div className="grid grid-cols-4 m-3 p-2 ">
                <div className="mr-8 self-start 300:absolute top-40 left-0 w-full">
                    <CardWelcome
                        key="skills"
                        title="Habilidades"
                        enTitle="Skills"
                        content={[
                            <div key={`skills0`}>
                                <p>Comunicação em diversos níveis;</p>
                                <p>Lógica, matemática, dinamismo e organização;</p>
                                <p>Proatividade, determinação e ética.</p>
                            </div>
                        ]}
                        enContent={[
                            <div key={`skills1`}>
                                <p>Communication at various levels;</p>
                                <p>Logic, mathematics, dynamism, and organization;</p>
                                <p>Proactivity, determination, and ethics.</p>
                            </div>
                        ]}
                        isVisible={showSkills}
                    />
                    <div className="mr-8 300:absolute top-20 left-0 w-full mt-4">
                        <CardWelcome
                            key="languages"
                            title="Idiomas"
                            enTitle="Languages"
                            content={[
                                <div key={`languages0`}>
                                    <p><span className="fi fi-br"></span> Português: Nativo</p>
                                    <p><span className="fi fi-us"></span> Inglês: Avançado</p>
                                    <p><span className="fi fi-it"></span> Italiano:  Intermediário (quarto nível)</p>
                                    <p><span className="fi fi-es"></span> Espanhol:  Iniciante</p>
                                </div>
                            ]}
                            enContent={[
                                <div key={`languages1`}>
                                    <p><span className="fi fi-br"></span> Portuguese: Native</p>
                                    <p><span className="fi fi-us"></span> English: Advanced</p>
                                    <p><span className="fi fi-it"></span> Italian: Intermediate (fourth level) </p>
                                    <p><span className="fi fi-es"></span> Spanish: Beginner</p>
                                </div>
                            ]}
                            isVisible={showSkills}
                        />
                    </div>
                </div>

                <div className="justify-self-end w-3/4 300:mt-60">
                    <ButtonWelcome onClick={() => handleButtonClick('experience')} label={language == 'pt' ? "Experiência" : "Experience"} isActive={buttonClicked === 'experience'} />

                    <div className='ml-24'>
                        <ButtonWelcome onClick={() => handleButtonClick('education')} label={language == 'pt' ? "Educação" : "Education"} isActive={buttonClicked === 'education'} />
                    </div>
                    <ButtonWelcome onClick={() => handleButtonClick('skills')} label={language == 'pt' ? "Habilidades" : "Skills"} isActive={buttonClicked === 'skills'} />

                </div>

                <div className="col-span-2 p-2">
                    <CardWelcome
                        key="education"
                        title="Educação"
                        enTitle="Education"
                        content={[
                            <div key={`education0`} className="p-1">
                                <article className="mb-2 pb-2 border-b-2">
                                    <h4 className="underline font-bold">ESPECIALIZAÇÃO EM INFRAESTRUTURA DE SOFTWARES • 2021 • UNIVERSIDAD EUROPEA DEL ATLÂNTICO</h4>
                                    <p>Arquiteturas, redes e sistemas distribuídos; segurança e gerenciamento de rede; gerenciamento de banco de dados e recursos de informação; linguagens e paradigmas de programação; tecnologia web e engenharia web(380 hrs).</p>
                                    <p>Atividades complementares:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Cursos onlines Complementares;</li>
                                        <li>Projetos de Designer Web e Database;</li>
                                        <li>Website</li>
                                        <li>Participação em TDC’s -2022/2023/2024</li>
                                    </ul>
                                </article>

                                <article>
                                    <h4 className="underline font-bold">ADMINISTRAÇÃO DE EMPRESAS • 2018 • UNIVERSIDADE DO ESTADO DE SANTA CATARINA</h4>
                                    <ul className="list-disc list-inside">
                                        <li>Graduação (3600 horas);</li>
                                        <li>Projetos sociais;</li>
                                        <li>Participações nos eventos: Exposuper, Expoagas e Agile Challenges.</li>
                                    </ul>
                                </article>
                            </div>
                        ]}
                        enContent={[
                            <div key={`education1`} className="p-1">
                                <article className="mb-2 pb-2 border-b-2">
                                    <h4 className="underline font-bold">SPECIALIZATION IN TECHNOLOGICAL SOFTWARE INFRASTRUCTURE•2021 • UNIVERSIDAD EUROPEA DEL ATLÂNTICO</h4>
                                    <p>Architectures, networks and distributed systems; network security and management; database management and information resources; programming languages and paradigms; web technology and web engineering.</p>
                                    <p>Additional activities:</p>
                                    <ul className="list-disc list-inside">
                                        <li>Online courses </li>
                                        <li>Project web page design and Database;</li>
                                        <li>Website and Database design;</li>
                                        <li>Participation in the TDC 2022/2023/2024.</li>
                                    </ul>
                                </article>
                                <article>
                                    <h4 className="underline font-bold">BUSINESS ADMINISTRATION • 2018 • UNIVERSIDADE DO ESTADO DE SANTA CATARINA</h4>
                                    <ul className="list-disc list-inside">
                                        <li>University Degree (3600 hrs);</li>
                                        <li>Social projects;</li>
                                        <li>Exposuper, Expoagas and Agile Challenges.</li>
                                    </ul>
                                </article>
                            </div>
                        ]}
                        isVisible={showEducation}
                    />
                </div>

            </div>

        </>
    );
}
