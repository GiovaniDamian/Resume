import lastCourses from "../../data/courses.json";
import useAppData from "../../data/hook/useAppData";
import CardCourses from "./CardCourses";


export default function Courses(props: any) {
    const { language } = useAppData()

    return (
        <div id="courses" className="flex flex-row bg-gradient-to-b from-mainBlueGray to-mainBlue w-full justify-center">
            <div className="flex flex-col justify-center mb-8">
                <h1 className="flex justify-center font-raleway text-mainBlueDark text-5xl m-2 mt-8 font-extrabold">{language == 'pt' ? 'Últimos Cursos Realizados' : 'Last Courses'}</h1>
                <div className="flex self-center w-3/4 border-t-2 border-mainBlue"></div>
                <div className="flex flex-wrap justify-center m-4 grid grid-cols-4 overflow-auto">
                    {lastCourses.map((course) => (
                        <CardCourses
                            key={course.id}
                            id={course.id}
                            title={course.title}
                            enTitle={course.entitle}
                            content={[
                                <div key={course.id}>
                                    <p>{course.text}</p>
                                    <p className="font-bold">{course.duration}</p>
                                </div>
                            ]}
                            enContent={[
                                <div key={course.id}>
                                    <p>{course.enText}</p>
                                    <p className="font-bold">{course.enDuration}</p>
                                </div>
                            ] }
                            href={course.href}
                        />
                    )
                    )}
                </div>
            </div>
        </div>
    )
}