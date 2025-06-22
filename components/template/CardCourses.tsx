import React from "react";
import useAppData from "../../data/hook/useAppData";

interface CardCoursesProps {
  id: number;
  title: string;
  content: any;
  href: string;
}

export default function CardCourses({
  id,
  title,
  content,
  href,
}: CardCoursesProps) {
  const { language } = useAppData();

  return (
    <div
      key={`${id}_${title}`}
      className="bg-mainBlueDark text-mainBlueLight rounded-lg h-56 w-48 p-3 m-2 font-raleway hover:scale-105"
    >
      <>
        <a href={href} target="_blank">
          <h2 className="text-sm underline mb-2 font-bold">{title}</h2>
          <div className="text-xs h-28">{content}</div>
        </a>
      </>
    </div>
  );
}
