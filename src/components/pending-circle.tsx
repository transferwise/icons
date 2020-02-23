import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface PendingCircleIconProps {
  size: IconSize;
}

export const PendingCircle: FunctionComponent<PendingCircleIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-pending-circle">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M8.8 4V7.67l2.766 2.765-1.132 1.132L7.2 8.33v-4.33h1.6z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.6 0A6.4 6.4 0 111.6 8a6.4 6.4 0 0112.8 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M13 7v4.586l3.207 3.207-1.414 1.414L11 12.414V7h2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default PendingCircle;
