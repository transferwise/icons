import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ChevronDownIconProps {
  size: IconSize;
}

export const ChevronDown: FunctionComponent<ChevronDownIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-chevron-down">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 11.8L1.4 5.147 2.537 4 8 9.507 13.463 4 14.6 5.146 8 11.8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17.2L3.3 8.425 4.713 7 12 14.35 19.287 7 20.7 8.425 12 17.2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default ChevronDown;
