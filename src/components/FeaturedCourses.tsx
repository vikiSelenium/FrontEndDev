import React from 'react';
import CourseCard, { CourseProps } from './CourseCard';

interface FeaturedCoursesProps {
  courses: CourseProps[];
  onAddToCart: (id: string) => void;
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ courses, onAddToCart }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Our most popular courses chosen by thousands of students
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard 
              key={course.id} 
              {...course} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 text-blue-600 font-medium hover:text-blue-800 transition-colors focus:outline-none">
            View All Courses →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;