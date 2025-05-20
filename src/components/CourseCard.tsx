import React from 'react';
import { Star, Clock, Award, Users } from 'lucide-react';
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from './ui/Card';
import Button from './ui/Button';

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  duration: string;
  level: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  students: number;
  onAddToCart?: (id: string) => void;
}

const CourseCard: React.FC<CourseProps> = ({
  id,
  title,
  description,
  instructor,
  rating,
  reviewCount,
  duration,
  level,
  price,
  discountPrice,
  imageUrl,
  students,
  onAddToCart
}) => {
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Card hoverable className="h-full flex flex-col">
      <CardImage 
        src={imageUrl} 
        alt={title}
        className="h-40 md:h-48"
      />
      <CardContent className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className={`text-xs font-medium px-2 py-1 rounded ${
            level === 'Beginner' ? 'bg-green-100 text-green-800' : 
            level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'
          }`}>
            {level}
          </span>
          <div className="flex items-center">
            <span className="text-sm font-bold text-yellow-500 mr-1">{rating}</span>
            <div className="flex">
              {renderStars(rating)}
            </div>
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-gray-600 mb-1">By {instructor}</p>
        <CardDescription className="line-clamp-2 mb-3">{description}</CardDescription>
        
        <div className="flex flex-wrap gap-3 text-xs text-gray-600 mb-3">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Award className="h-3.5 w-3.5 mr-1" />
            Certificate
          </div>
          <div className="flex items-center">
            <Users className="h-3.5 w-3.5 mr-1" />
            {students} students
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center">
          {discountPrice ? (
            <>
              <span className="text-lg font-bold text-gray-900">${discountPrice}</span>
              <span className="text-sm text-gray-500 line-through ml-2">${price}</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">${price}</span>
          )}
        </div>
        <Button 
          variant="primary" 
          size="sm"
          onClick={() => onAddToCart && onAddToCart(id)}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;