import { CourseProps } from '../components/CourseCard';

export const allCourses: CourseProps[] = [
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
  },
  {
    id: '5',
    title: 'Mobile Testing with Appium',
    description: 'Learn how to automate mobile applications using Appium and Selenium WebDriver.',
    instructor: 'Alex Turner',
    rating: 4.5,
    reviewCount: 178,
    duration: '7 weeks',
    level: 'Intermediate',
    price: 109.99,
    discountPrice: 69.99,
    imageUrl: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 632
  },
  {
    id: '6',
    title: 'BDD with Selenium and Cucumber',
    description: 'Implement Behavior-Driven Development using Selenium WebDriver and Cucumber.',
    instructor: 'Lisa Brown',
    rating: 4.8,
    reviewCount: 210,
    duration: '6 weeks',
    level: 'Advanced',
    price: 119.99,
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 845
  },
  {
    id: '7',
    title: 'Performance Testing with Selenium',
    description: 'Learn how to combine Selenium with JMeter for comprehensive performance testing.',
    instructor: 'Robert Garcia',
    rating: 4.6,
    reviewCount: 132,
    duration: '5 weeks',
    level: 'Advanced',
    price: 99.99,
    discountPrice: 79.99,
    imageUrl: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 528
  },
  {
    id: '8',
    title: 'Selenium with Python',
    description: 'Master Selenium WebDriver using Python and PyTest for efficient test automation.',
    instructor: 'Jennifer Kim',
    rating: 4.9,
    reviewCount: 287,
    duration: '6 weeks',
    level: 'Beginner',
    price: 89.99,
    discountPrice: 59.99,
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    students: 1032
  }
];

export const featuredCourses = allCourses.slice(0, 4);