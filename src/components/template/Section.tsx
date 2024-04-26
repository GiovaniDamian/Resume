import React from 'react';
import useAppData from '../../data/hook/useAppData';

interface SectionProps {
    title: string
    enTitle: string
    classNameTop?: string
    classNameItems?: string
    items: any
    children?: any
}
export default function Section ({ title, enTitle, classNameTop, classNameItems, items }: SectionProps) {
    const { language } = useAppData()

    return (
        <div className={classNameTop}>
            {
                language == 'pt' ?
                    <h2>{title}</h2> :
                    <h2>{enTitle}</h2>
            }
            {items.map((item: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                <div key={index} className={classNameItems}>
                    {item}
                </div>
            ))}
        </div>
    );
};