// components/Hero.tsx
import Image from 'next/image';

export const Hero = () => {
    return (
        <div className="bg-primary rounded-lg p-8 md:p-12 my-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-text-dark">
                <h1 className="text-4xl md:text-6xl font-extrabold">WE SOCIAL WORKERS UK</h1>
                <ul className="mt-6 space-y-2 text-lg text-text-light">
                    <li>Social Workers Community</li>
                    <li>UK Social Workers</li>
                    <li>Overseas/International Social Workers</li>
                    <li>Social Work England Registration, Jobs, and more</li>
                    <li>Social Work News</li>
                </ul>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                <Image src="/logo.png" alt="We Social Workers UK Logo" width={250} height={250} />
            </div>
        </div>
    );
};
