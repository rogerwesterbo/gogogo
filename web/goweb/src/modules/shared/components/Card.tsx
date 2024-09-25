import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps) {
  return (
    <div className="bg-blue-400 border-transparent rounded-lg shadow-xl">
      <div className="bg-gradient-to-b from-blue-300 to-gray-100 uppercase text-gray-100 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
        <span className="font-bold uppercase text-gray-600">{title}</span>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

export default Card;
