import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ArrowLeftIconProps {
  size: IconSize;
}

export const ArrowLeft: FunctionComponent<ArrowLeftIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-arrow-left">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M3.012 7.2L8.57 1.562 7.43.438 0 8l7.43 7.562 1.14-1.123L3.012 8.8H16V7.2H3.012z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M5.814 13H22v-2H5.814l6.893-6.893L11.293 2.7 2 12l9.293 9.3 1.414-1.407L5.814 13z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default ArrowLeft;
