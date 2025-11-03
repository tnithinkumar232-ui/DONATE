import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Package, Search, User, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg text-center"
    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
  >
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Step = ({ icon, title, description, stepNumber }: { icon: React.ReactNode, title: string, description: string, stepNumber: number }) => (
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-4">
      <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white shadow-md">
        {icon}
      </div>
      <div className="absolute -top-2 -right-2 flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-white font-bold">
        {stepNumber}
      </div>
    </div>
    <h3 className="font-semibold text-lg mb-1">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const LandingPage: React.FC = () => {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Connecting Givers and Receivers
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            A seamless platform to donate and receive items, fostering a community of kindness and support.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-transform duration-300 hover:scale-105"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How DOCARE Helps</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We make the process of giving and receiving simple, transparent, and impactful.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Package size={32} className="text-primary" />}
              title="Donate Items"
              description="Easily post items you wish to donate, from electronics to clothes, and connect with someone in need."
            />
            <FeatureCard
              icon={<Heart size={32} className="text-secondary" />}
              title="Request Needs"
              description="Post a request for items you need. The community is here to help you find what you're looking for."
            />
            <FeatureCard
              icon={<Search size={32} className="text-accent" />}
              title="Find & Filter"
              description="Quickly search for available donations by category or item name to find exactly what you need."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Simple Process</h2>
            <p className="mt-4 text-lg text-gray-600">Four easy steps to make a difference.</p>
          </div>
          <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
              <div className="grid md:grid-cols-4 gap-12 relative">
                <Step stepNumber={1} icon={<User size={36} className="text-primary"/>} title="Create Profile" description="Sign up and create your unified profile in minutes." />
                <Step stepNumber={2} icon={<Package size={36} className="text-primary"/>} title="Post or Request" description="Post an item to donate or create a request for a need." />
                <Step stepNumber={3} icon={<Bell size={36} className="text-primary"/>} title="Get Notified" description="Donors review requests and you get notified on acceptance." />
                <Step stepNumber={4} icon={<Heart size={36} className="text-primary"/>} title="Complete Donation" description="Arrange collection and make a positive impact." />
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the DOCARE Community Today!</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Be a part of a movement that fosters generosity and support. Your small act of kindness can make a big difference.
          </p>
          <Link
            to="/register"
            className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
