import React from 'react';
import myPhoto from '../../assets/UjjwalDP.jpeg';

const About = ({ isActive }) => {
    if (!isActive) return null;

    return (
        <section className="section-content fade-in py-12">
            <div className="text-center mb-12 relative">
                {/* Profile Wrapper (Photo + Rings + Floating Dots) */}


                <div className="relative w-40 h-40 mx-auto mb-6">
                    {/* Spinning Rings */}
                    <div
                        className="absolute inset-0 border-2 border-blue-400/30 rounded-full animate-spin"
                        style={{ animationDuration: '10s' }}
                    ></div>
                    <div
                        className="absolute inset-2 border border-purple-400/20 rounded-full animate-spin"
                        style={{ animationDuration: '15s', animationDirection: 'reverse' }}
                    ></div>

                    {/* Gradient Circle + Photo */}
                    <div className="absolute w-40 h-40 rounded-full overflow-hidden animate-fade-in scale-95 hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500  opacity-75">
                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-4 border-white/20">
                                <img
                                    src={myPhoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                                />

                                {/* Floating small circles */}
                                <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full float-animation"></div>
                                <div
                                    className="absolute bottom-4 right-6 w-1 h-1 bg-white rounded-full float-animation"
                                    style={{ animationDelay: '1s' }}
                                ></div>
                                <div
                                    className="absolute top-8 right-2 w-1.5 h-1.5 bg-white rounded-full float-animation"
                                    style={{ animationDelay: '2s' }}
                                ></div>

                            </div>
                        </div>
                    </div>
                </div>



                {/* Animated Name and Title */}
                <h2 class="text-5xl font-bold mb-4 gradient-text">Full Stack Developer</h2>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Passionate about creating innovative web applications with modern technologies.
                    Experienced in React.js, Node.js, and database integration.
                </p>

                {/* Animated code snippet */}
                <div className="bg-black/40 backdrop-blur-lg rounded-lg p-4 max-w-md mx-auto mb-8 border border-green-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-left text-sm font-mono">
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-400">developer</span>{" "}
                        <span className="text-white">= {"{"}</span>
                        <br />
                        <span className="text-green-400 ml-4">name:</span>{" "}
                        <span className="text-yellow-400">'Ujjwal'</span>
                        <span className="text-white">,</span>
                        <br />
                        <span className="text-green-400 ml-4">skills:</span>{" "}
                        <span className="text-yellow-400">['React', 'Node.js']</span>
                        <br />
                        <span className="text-white">{"};"}</span>
                    </div>
                </div>
                </div>


                {/* Cards with hover animation */}
                <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 project-card">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-blue-400">Experience</h3>
                    </div>
                    <div class="space-y-4">
                        <div class="border-l-4 border-blue-500 pl-4">
                            <h4 class="font-semibold flex items-center">
                                <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                Senior Full Stack Developer
                            </h4>
                            <p class="text-gray-300">TechCorp Inc. • 2022 - Present</p>
                            <p class="text-sm text-gray-400 mt-2">Leading development of scalable web applications using React.js and Node.js</p>
                        </div>
                        <div class="border-l-4 border-purple-500 pl-4">
                            <h4 class="font-semibold flex items-center">
                                <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                Frontend Developer
                            </h4>
                            <p class="text-gray-300">StartupXYZ • 2020 - 2022</p>
                            <p class="text-sm text-gray-400 mt-2">Built responsive user interfaces and improved user experience</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 project-card">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold text-blue-400">Education</h3>
                    </div>
                    <div class="space-y-4">
                        <div class="border-l-4 border-green-500 pl-4">
                            <h4 class="font-semibold flex items-center">
                                <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                Bachelor of Technology
                            </h4>
                            <p class="text-gray-300">A.K.T.U University • 2020 - 2024</p>
                            <p class="text-sm text-gray-400 mt-2">Graduated </p>
                        </div>
                        <div class="border-l-4 border-yellow-500 pl-4">
                            <h4 class="font-semibold flex items-center">
                                <span class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                Certifications
                            </h4>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span class="bg-orange-600/20 text-orange-300 px-2 py-1 rounded text-sm border border-orange-500/30">AWS Certified</span>
                                <span class="bg-green-600/20 text-green-300 px-2 py-1 rounded text-sm border border-green-500/30">MongoDB Certified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;