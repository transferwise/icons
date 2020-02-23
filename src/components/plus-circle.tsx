import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface PlusCircleIconProps {
  size: IconSize;
  filled: boolean;
}

export const PlusCircle: FunctionComponent<PlusCircleIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-plus-circle">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path d="M4 8.8V7.2h3.2V4h1.6v3.2H12v1.6H8.8V12H7.2V8.8H4z" fill="#37517E" />
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
            <path d="M17 11v2h-4v4h-2v-4H7v-2h4V7h2v4h4z" fill="#37517E" />
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
              d="M8 16A8 8 0 108 0a8 8 0 000 16zm.8-12v3.2H12v1.6H8.8V12H7.2V8.8H4V7.2h3.2V4h1.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1-15v4h4v2h-4v4h-2v-4H7v-2h4V7h2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default PlusCircle;
