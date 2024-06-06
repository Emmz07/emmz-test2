import React from 'react';
import pic2 from '../assets/pic2.jpg'

const cardContainerClasses = "bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center";
const titleClasses = "text-lg font-semibold text-zinc-800 dark:text-zinc-200";
const valueClasses = "text-4xl font-bold text-zinc-900 dark:text-zinc-100";
const descriptionClasses = "text-sm font-medium text-zinc-500 dark:text-zinc-400";
const textClasses = "text-zinc-600 dark:text-zinc-300";
const linkClasses = "text-zinc-500 dark:text-zinc-400 hover:underline";

const BatteryInfoCard = () => {
  return (
    <div className={cardContainerClasses}>
      <div className="md:w-1/2 ">
        <h2 className={titleClasses}>OPTIMIZED BATTERY EFFICIENCY</h2>
        <div className="mt-4">
          <p className={valueClasses}>223 Mi</p>
          <p className={descriptionClasses}>Electric Range</p>
        </div>
        <div className="mt-4">
          <p className={valueClasses}>30 Min</p>
          <p className={descriptionClasses}>to Fully Charge</p>
        </div>
        <div className="mt-4">
          <p className={textClasses}>
            This is a space to share more about the business: who's behind it, what it does and what this site has to offer. It's an opportunity to tell the story behind the business or describe a special service or product it offers. You can use this section to share the company history or highlight a particular feature that sets it apart from competitors.
          </p>
        </div>
        <div className="mt-4 flex items-center">
          <a href="#" className={linkClasses}>READ MORE</a>
          <span className="ml-2 text-zinc-500 dark:text-zinc-400">→</span>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <img src={pic2} alt="Battery Image" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default BatteryInfoCard;
