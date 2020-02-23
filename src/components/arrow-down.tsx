import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ArrowDownIconProps {
  size: IconSize;
}

export const ArrowDown: FunctionComponent<ArrowDownIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-arrow-down">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M8.8 12.988l5.638-5.558 1.124 1.14L8 16 .438 8.57l1.124-1.14L7.2 12.988V0h1.6v12.988z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M13 18.186V2h-2v16.186l-6.893-6.893L2.7 12.707 12 22l9.3-9.293-1.407-1.414L13 18.186z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default ArrowDown;
