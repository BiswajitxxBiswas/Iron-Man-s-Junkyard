import React from "react";

const AboutSection = () => {
    return (
        <div className="w-full bg-cover bg-black bg-opacity-80 bg-center bg-fixed bg-hero-pattern" style={{width:"2000px"}}>
            {/* Overlay to darken background slightly */}
            <div className="absolute inset-0   opacity-50"></div>

            <div className="relative z-10">
                {/* Hero Section - Smaller and Transparent */}
                <div className="h-[60vh] flex flex-col justify-center items-center text-center text-white bg-gradient-to-b  via-transparent to-transparent py-8 px-8 rounded-lg shadow-2xl transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl w-full max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wider uppercase hover:text-yellow-400 transition duration-300 ease-in-out">
                        Iron Man's Junkyard Heroes
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-200 italic">
                        Transforming Scrap into Valuable Resources
                    </p>
                </div>

                {/* Mission Section with Transparent Theme */}
                <section className="mt-12 px-6 lg:px-24 py-12 bg-gradient-to-b via-transparent to-transparent rounded-lg shadow-lg transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border border-gray-200 w-full max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-semibold mb-6 text-white tracking-tight hover:text-indigo-300 transition duration-300 ease-in-out">
                        Our Mission
                    </h2>
                    <p className="leading-relaxed text-lg mb-6 text-gray-300">
                        Inspired by Tony Stark’s ability to turn scrap into life-saving technology, Iron Man's Junkyard Heroes
                        is a platform dedicated to transforming waste into valuable resources. By uniting customers and scrap dealers,
                        we create a real impact in recycling, making it easy, accessible, and impactful for all.
                    </p>
                    <p className="leading-relaxed text-lg text-gray-300">
                        Our mission is to elevate the scrap industry—saving resources, reducing waste, and maybe even inspiring
                        the creation of the next technological marvel from what was once seen as mere scrap.
                    </p>
                </section>

                {/* Key Features Section with Transparent Theme */}
                <section className="mt-12 px-6 lg:px-24 py-12 bg-gradient-to-b via-transparent to-transparent rounded-lg shadow-lg transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl border border-gray-200 w-full max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-semibold mb-6 text-white tracking-tight hover:text-indigo-300 transition duration-300 ease-in-out">
                        Key Features
                    </h2>

                    <div className="mt-8">
                        <h3 className="text-3xl font-semibold mb-4 text-indigo-700">Basic Features</h3>

                        <h4 className="text-2xl font-medium mt-6 text-gray-300">For Customers:</h4>
                        <ul className="list-disc list-inside ml-6 text-lg text-gray-300">
                            <li>Quick Registration: Join the scrap revolution effortlessly.</li>
                            <li>Request Pickups: Schedule convenient scrap pickups on your preferred date and time.</li>
                            <li>Rate & Review: Share feedback on scrap dealers to help improve the community.</li>
                        </ul>

                        <h4 className="text-2xl font-medium mt-6 text-gray-300">For Scrap Dealers:</h4>
                        <ul className="list-disc list-inside ml-6 text-lg text-gray-300">
                            <li>Easy Access: Login and start accepting scrap requests from customers.</li>
                            <li>Transparent Billing: Generate detailed bills for customer clarity.</li>
                            <li>Track History: Maintain request history for streamlined service.</li>
                        </ul>

                        <h4 className="text-2xl font-medium mt-6 text-gray-300">For Admins:</h4>
                        <ul className="list-disc list-inside ml-6 text-lg text-gray-300">
                            <li>Control Panel: Manage all aspects of the platform from one place.</li>
                            <li>Pricing Management: Adjust scrap item pricing as needed.</li>
                        </ul>
                    </div>

                    {/* Advanced Features Section with Transparent Theme */}
                    <div className="mt-12">
                        <h3 className="text-3xl font-semibold mb-4 text-indigo-700">Advanced Features</h3>

                        <h4 className="text-2xl font-medium mt-6 text-gray-300">For Customers:</h4>
                        <ul className="list-disc list-inside ml-6 text-lg text-gray-300">
                            <li>Social Signup: Register using your Google or Facebook account.</li>
                            <li>Invite & Share: Spread the word on social media to grow the community.</li>
                            <li>Flexible Scheduling: Choose from multiple pickup times for convenience.</li>
                        </ul>

                        <h4 className="text-2xl font-medium mt-6 text-gray-300">For Scrap Dealers:</h4>
                        <ul className="list-disc list-inside ml-6 text-lg text-gray-300">
                            <li>Geo-Targeting: Set locations to receive requests from nearby customers.</li>
                            <li>Availability Toggle: Switch online or offline based on your current status.</li>
                        </ul>

                        <h4 className="text-2xl font-medium mt-6 text-gray-300">For Admins:</h4>
                        <ul className="list-disc list-inside ml-6 text-lg text-gray-300">
                            <li>Dashboard View: Track purchases, requests, and feedback all in one place.</li>
                            <li>Real-Time Alerts: Send notifications to customers and dealers instantly.</li>
                        </ul>
                    </div>
                </section>

                {/* Join Section with Transparent Theme */}
                <section className="mt-12 px-6 lg:px-24 py-12 bg-gradient-to-b via-transparent to-transparent rounded-lg shadow-lg transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl text-center w-full max-w-screen-lg mx-auto">
                    <h2 className="text-4xl font-semibold mb-6 text-white tracking-tight hover:text-indigo-300 transition duration-300 ease-in-out">
                        Join the Scrap Revolution
                    </h2>
                    <p className="leading-relaxed text-lg text-gray-300">
                        At Iron Man's Junkyard Heroes, we believe every piece of scrap can become something extraordinary. Join us
                        on this journey to create a sustainable future where nothing goes to waste. Together, we can ensure every
                        resource finds a new purpose, driving a better, greener tomorrow.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutSection;
