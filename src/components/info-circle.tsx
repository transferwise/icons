import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface InfoCircleIconProps {
  size: IconSize;
}

export const InfoCircle: FunctionComponent<InfoCircleIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-info-circle">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M8.8 12V7.6H7.2V12h1.6zM8 4a1 1 0 110 2 1 1 0 010-2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0a8 8 0 110 16A8 8 0 018 0zm0 1.6a6.4 6.4 0 110 12.8A6.4 6.4 0 018 1.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M13 17v-6h-2v6h2zM12 6.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default InfoCircle;
