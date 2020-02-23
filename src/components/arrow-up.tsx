import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ArrowUpIconProps {
  size: IconSize;
}

export const ArrowUp: FunctionComponent<ArrowUpIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-arrow-up">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M8.8 3.012l5.638 5.558 1.124-1.14L8 0 .438 7.43l1.124 1.14L7.2 3.012V16h1.6V3.012z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M13 5.814V22h-2V5.814l-6.893 6.893L2.7 11.293 12 2l9.3 9.293-1.407 1.414L13 5.814z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default ArrowUp;
