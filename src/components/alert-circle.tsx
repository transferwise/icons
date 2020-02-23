import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface AlertCircleIconProps {
  size: IconSize;
  filled: boolean;
}

export const AlertCircle: FunctionComponent<AlertCircleIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-alert-circle">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path d="M8.8 4v4.4H7.2V4h1.6zM8 12a1 1 0 100-2 1 1 0 000 2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.6A6.4 6.4 0 108 1.6a6.4 6.4 0 000 12.8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path d="M13 7v6h-2V7h2zM12 17.2a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
              fill="#37517E"
            />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16A8 8 0 108 0a8 8 0 000 16zm.8-12v5H7.2V4h1.6zm.2 7a1 1 0 11-2 0 1 1 0 012 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1-15v6h-2V7h2zm.2 9a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default AlertCircle;
