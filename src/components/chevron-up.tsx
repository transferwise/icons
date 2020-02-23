import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ChevronUpIconProps {
  size: IconSize;
}

export const ChevronUp: FunctionComponent<ChevronUpIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-chevron-up">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4l-6.6 6.653L2.537 11.8 8 6.293l5.463 5.507 1.137-1.147L8 4z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 7l-8.7 8.775L4.713 17.2 12 9.85l7.287 7.35 1.413-1.425L12 7z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default ChevronUp;
