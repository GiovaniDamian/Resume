import React from "react";
import useAppData from "../../data/hook/useAppData";
import t from "../../data/i18n/translations";

interface SectionProps {
  classNameTop?: string;
  classNameItems?: string;
  items: any;
  children?: any;
}
export default function Section({
  classNameTop,
  classNameItems,
  items,
  children,
}: SectionProps) {
  const { language } = useAppData();

  return (
    <div className={classNameTop}>
      <h2 style={{ color: "#000", fontSize: 12 }}>
        {t("section.title", language)}
      </h2>
      {children}
      {items.map(
        (
          item:
            | string
            | number
            | bigint
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | Promise<React.AwaitedReactNode>
            | null
            | undefined,
          index: React.Key | null | undefined
        ) => (
          <div key={index} className={classNameItems}>
            {item}
          </div>
        )
      )}
    </div>
  );
}
