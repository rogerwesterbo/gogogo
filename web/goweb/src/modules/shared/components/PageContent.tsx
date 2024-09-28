import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
}

function PageContent({ title, children }: CardProps) {
  return (
    <div className="main-content flex-1 bg-gray-100 text-gray-800 dark:text-gray-100 dark:bg-slate-700 mt-12 md:mt-2 pb-24 md:pb-5">
      <div className="bg-gray-800 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 dark:from-gray-900 to-gray-800 dark:to-gray-600 p-4 shadow text-2xl text-white">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="m-4">{children}</div>
    </div>
  );
}

export default PageContent;
