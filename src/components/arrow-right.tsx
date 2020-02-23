import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ArrowRightIconProps {
  size: IconSize;
}

export const ArrowRight: FunctionComponent<ArrowRightIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-arrow-right">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M12.988 7.2L7.43 1.562 8.57.438 16 8l-7.43 7.562-1.14-1.123L12.988 8.8H0V7.2h12.988z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M18.186 13H2v-2h16.186l-6.893-6.893L12.707 2.7 22 12l-9.293 9.3-1.414-1.407L18.186 13z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default ArrowRight;
