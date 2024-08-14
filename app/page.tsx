import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-dark-300 text-white py-20 flex flex-col lg:flex-row">
      <div className="container mx-auto px-6 flex flex-col space-y-5 text-start justify-center remove-scrollbar h-[100vh] lg:w-1/2">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
          Welcome to DoctorHub
        </h1>
        <p className="text-sm md:text-md lg:text-lg mb-8">Your health matters. Book appointments effortlessly</p>
        <Link href="/patient-form" className="mt-8">
          <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Schedule an Appointment
          </span>
        </Link>
      </div>
      <div className="container mx-auto px-6 flex flex-col items-center text-start justify-center remove-scrollbar h-[100vh] lg:w-1/2">
        <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] mb-[-50px] bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 flex items-center justify-center text-2xl lg:text-4xl">
          Quick
        </div>
        <Image
          src="/my_img/frontpage.png"
          alt="hero"
          width={400}
          height={900}
          className="mx-auto mb-8"
        />
        <div className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] mt-[-70px] lg:ml-[70%] bg-gray-400 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100 flex items-center justify-center text-2xl lg:text-4xl">
          Quick
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    { title: "General Consultation", description: "Get professional medical advice from our experts." },
    { title: "Specialist Appointment", description: "Book an appointment with a specialist." },
    { title: "Emergency Services", description: "24/7 emergency care available." },
  ];

  return (
    <section className="bg-dark-300 text-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg glowing-gradient">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div className="bg-dark-300 min-h-screen overflow-hidden">
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default Page;
