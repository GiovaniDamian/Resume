import Next from "../../../public/next.svg"
import Image from 'next/image'

export default function Contact(props: any) {

    const svgUrls = [
        "https://cdn.worldvectorlogo.com/logos/next-js.svg",
        "https://cdn.worldvectorlogo.com/logos/react-2.svg",
        "https://cdn.worldvectorlogo.com/logos/threejs-1.svg",
        "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
        "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
        "https://cdn.worldvectorlogo.com/logos/typescript.svg",
        "https://cdn.worldvectorlogo.com/logos/github-2.svg"
    ];

    return (
        <footer className="flex justify-center bg-mainBlueDark">
            <div className='mt-8 mb-4 flex justify-around text-center text-mainBlueLight font-bold font-raleway'>
                <p className="m-4">
                    Created by Giovani Damian using:
                </p>
                <div className="flex justify-around items-center">
                    {svgUrls.map((url, index) => (
                        <div key={index} className="mr-4">
                            <Image
                                src={url}
                                width={index === 6 ? 40 : 32}
                                height={32}
                                alt={`Icon ${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </footer>)
}