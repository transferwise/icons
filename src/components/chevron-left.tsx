import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ChevronLeftIconProps {
  size: IconSize;
}

export const ChevronLeft: FunctionComponent<ChevronLeftIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-chevron-left">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M4 8l6.653 6.6 1.147-1.137L6.293 8 11.8 2.537 10.653 1.4 4 8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M7 12l8.603-8.7L17 4.713 9.795 12 17 19.287 15.603 20.7 7 12z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default ChevronLeft;
