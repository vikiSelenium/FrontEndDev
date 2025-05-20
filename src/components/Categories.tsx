import React from 'react';
import { Code, Globe, Server, Database, Webhook, Cpu } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  courseCount: number;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Selenium Basics',
    icon: <Code className="h-8 w-8" />,
    courseCount: 12
  },
  {
    id: '2',
    name: 'Web Automation',
    icon: <Globe className="h-8 w-8" />,
    courseCount: 8
  },
  {
    id: '3',
    name: 'API Testing',
    icon: <Server className="h-8 w-8" />,
    courseCount: 6
  },
  {
    id: '4',
    name: 'Database Testing',
    icon: <Database className="h-8 w-8" />,
    courseCount: 4
  },
  {
    id: '5',
    name: 'CI/CD Integration',
    icon: <Webhook className="h-8 w-8" />,
    courseCount: 5
  },
  {
    id: '6',
    name: 'Advanced Frameworks',
    icon: <Cpu className="h-8 w-8" />,
    courseCount: 7
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Browse Categories</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Find the perfect course from our diverse range of Selenium topics
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a 
              key={category.id}
              href="#"
              className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center space-x-4 border border-gray-100"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {category.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.courseCount} courses</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;