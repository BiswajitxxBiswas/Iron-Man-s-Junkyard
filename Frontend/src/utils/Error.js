import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#33210f] to-[#e9c896]">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-md">
                <h1 className="text-5xl font-serif text-[#b32d2e] mb-4">Our Apologies!</h1>
                <p className="text-lg font-light text-gray-700 mb-6">
                    It seems something went wrong with your experience...
                </p>
                <p className="text-md text-gray-600 mb-4 italic">
                    {err.status} : {err.statusText}
                </p>
                <a href="/" className="inline-block bg-[#b32d2e] text-white py-3 px-6 rounded-full hover:bg-[#9c2527] transition">
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default Error;
