import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface MinusCircleIconProps {
  size: IconSize;
  filled: boolean;
}

export const MinusCircle: FunctionComponent<MinusCircleIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-minus-circle">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path d="M4 7.2v1.6h8V7.2H4z" fill="#37517E" />
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
            <path d="M7 13h10v-2H7v2z" fill="#37517E" />
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
            <path fillRule="evenodd" clipRule="evenodd" d="M8 16A8 8 0 108 0a8 8 0 000 16zM4 7.2v1.6h8V7.2H4z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-5-9h10v-2H7v2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default MinusCircle;
