import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CheckCircleIconProps {
  size: IconSize;
  filled: boolean;
}

export const CheckCircle: FunctionComponent<CheckCircleIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-check-circle">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path d="M4.566 7.434L3.434 8.566 6.5 11.63l6.066-6.065-1.132-1.132L6.5 9.37 4.566 7.434z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.6 0A6.4 6.4 0 111.6 8a6.4 6.4 0 0112.8 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path d="M7.707 11.293l-1.414 1.414 4.207 4.207 7.707-7.707-1.414-1.414-6.293 6.293-2.793-2.793z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-2 0a8 8 0 11-16 0 8 8 0 0116 0z"
              fill="#37517E"
            />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16A8 8 0 108 0a8 8 0 000 16zM4.566 7.434L3.434 8.566 6.5 11.63l6.066-6.065-1.132-1.132L6.5 9.37 4.566 7.434z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM7.707 11.293l-1.414 1.414 4.207 4.207 7.707-7.707-1.414-1.414-6.293 6.293-2.793-2.793z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default CheckCircle;
