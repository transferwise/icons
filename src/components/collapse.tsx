import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CollapseIconProps {
  size: IconSize;
}

export const Collapse: FunctionComponent<CollapseIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-collapse">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 9.4l5.6 5.463L12.462 16 8 11.673 3.538 16 2.4 14.864 8 9.4zM8 6.6L2.4 1.137 3.538 0 8 4.327 12.462 0 13.6 1.137 8 6.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M5.3 3.412l6.7 6.696 6.7-6.696L17.287 2 12 7.284 6.713 2 5.3 3.412zM18.45 20.588L12 14.141l-6.45 6.447L6.962 22 12 16.965 17.038 22l1.412-1.412z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Collapse;
