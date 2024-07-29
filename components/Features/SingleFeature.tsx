import React from 'react';
import { Feature } from '@/types/feature';

type SingleFeatureProps = {
  feature: Feature;
};

const SingleFeature: React.FC<SingleFeatureProps> = ({ feature }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-lg hover:transform hover:scale-105 transition-transform">
      <div className="mb-4">
        {feature.icon}
      </div>
      <div className="font-bold text-xl mb-2"style={{ fontSize: '1.80rem' }}>{feature.title}</div>
      <div className="text-gray-600" style={{ fontSize: '1.50rem' }}>{feature.paragraph}</div> {/* Added inline style */}
    </div>
  );
};

export default SingleFeature;
