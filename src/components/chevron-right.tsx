import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ChevronRightIconProps {
  size: IconSize;
}

export const ChevronRight: FunctionComponent<ChevronRightIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-chevron-right">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 8L5.347 1.4 4.2 2.537 9.707 8 4.2 13.463 5.347 14.6 12 8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 12L8.225 3.3 6.8 4.713 14.15 12 6.8 19.287 8.225 20.7 17 12z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default ChevronRight;
