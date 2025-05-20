import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-white text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                Master Selenium Automation
              </span>
              <span className="mt-3 block text-blue-200 text-xl sm:text-2xl">
                Learn from industry experts and advance your testing career
              </span>
            </h1>
            <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Join thousands of students who have transformed their careers with our comprehensive Selenium courses. From beginners to advanced automation engineers.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  fullWidth
                >
                  Browse Courses
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  fullWidth
                  className="bg-white bg-opacity-20 text-white border-white border-opacity-20 hover:bg-opacity-30"
                >
                  Start Free Trial
                </Button>
              </div>
              <p className="mt-3 text-sm text-blue-200">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <img 
                  className="w-full" 
                  src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Person coding" 
                />
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <svg className="h-20 w-20 text-blue-500" fill="currentColor" viewBox="0 0 84 84">
                    <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                    <path d="M55 42L35 55V29L55 42Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;