import lastCourses from "../../data/courses.json";
import useAppData from "../../data/hook/useAppData";
import CardCourses from "./CardCourses";
import t from "../../data/i18n/translations";

export default function Courses(props: any) {
  const { language } = useAppData();

  return (
    <div
      id="courses"
      className="flex flex-row bg-gradient-to-b from-mainBlueGray to-mainBlue w-full justify-center"
    >
      <div className="flex flex-col justify-center mb-8">
        <h1 className="flex justify-center font-raleway text-mainBlueDark text-5xl m-2 mt-8 font-extrabold">
          {t("courses.sectionTitle", language)}
        </h1>
        <div className="flex self-center w-3/4 border-t-2 border-mainBlue"></div>
        <div className="flex flex-wrap justify-center m-4 grid grid-cols-4 overflow-auto">
          {lastCourses.map((course) => (
            <CardCourses
              key={course.id}
              id={course.id}
              title={t(`courses.${course.id}.title`, language)}
              content={[
                <div key={course.id}>
                  <p>{t(`courses.${course.id}.description`, language)}</p>
                  <p className="font-bold">
                    {t(`courses.${course.id}.duration`, language)}
                  </p>
                </div>,
              ]}
              href={course.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
