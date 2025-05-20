import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedCourses from '../components/FeaturedCourses';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { CourseProps } from '../components/CourseCard';

interface HomePageProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const courses: CourseProps[] = [
  {
    id: '1',
    title: 'Selenium WebDriver Fundamentals',
    description: 'Learn the basics of Selenium WebDriver and start automating web applications with confidence.',
    instructor: 'John Smith',
    rating: 4.8,
    reviewCount: 324,
    duration: '6 weeks',
    level: 'Beginner',
    price: 89.99,
    discountPrice: 49.99,
    imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
    students: 1245
  },
  {
    id: '2',
    title: 'Advanced Selenium Framework',
    description: 'Build a robust, maintainable test automation framework using Selenium WebDriver, TestNG, and design patterns.',
    instructor: 'Emily Johnson',
    rating: 4.9,
    reviewCount: 256,
    duration: '8 weeks',
    level: 'Advanced',
    price: 129.99,
    discountPrice: 79.99,
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 985
  },
  {
    id: '3',
    title: 'Selenium for JavaScript Developers',
    description: 'Master Selenium WebDriver using JavaScript and Node.js. Integrate with popular JS testing frameworks.',
    instructor: 'David Lee',
    rating: 4.7,
    reviewCount: 189,
    duration: '5 weeks',
    level: 'Intermediate',
    price: 99.99,
    imageUrl: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 723
  },
  {
    id: '4',
    title: 'Selenium Grid for Distributed Testing',
    description: 'Scale your test execution with Selenium Grid. Run tests in parallel across multiple browsers and platforms.',
    instructor: 'Sarah Williams',
    rating: 4.6,
    reviewCount: 145,
    duration: '4 weeks',
    level: 'Intermediate',
    price: 79.99,
    discountPrice: 59.99,
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 512
  }
];

const HomePage: React.FC<HomePageProps> = ({ isLoggedIn, onLoginClick, onSignupClick }) => {
  const [cartItems, setCartItems] = useState<string[]>([]);
  
  const handleAddToCart = (courseId: string) => {
    if (!cartItems.includes(courseId)) {
      setCartItems([...cartItems, courseId]);
    }
  };
  
  const handleCart = () => {
    // Handle cart navigation
  };
  
  const handleProfile = () => {
    // Handle profile navigation
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation 
        isLoggedIn={isLoggedIn} 
        cartItemCount={cartItems.length}
        onLogin={onLoginClick}
        onSignup={onSignupClick}
        onCart={handleCart}
        onProfile={handleProfile}
      />
      <main className="flex-grow">
        <Hero />
        <FeaturedCourses 
          courses={courses} 
          onAddToCart={handleAddToCart} 
        />
        <Categories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;