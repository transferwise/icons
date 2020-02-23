import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface DontIconProps {
  size: IconSize;
}

export const Dont: FunctionComponent<DontIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-dont">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M5.066 12.066c1.687-1.688 4.18-1.688 5.868 0l1.132-1.132c-2.313-2.312-5.82-2.312-8.132 0l1.132 1.132zM7 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM10.2 7.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
              fill="#37517E"
            />
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
            <path
              d="M9.1 11a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM16.7 9.4a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM8.207 17.207a5.337 5.337 0 017.586 0l1.414-1.414a7.338 7.338 0 00-10.414 0l1.414 1.414z"
              fill="#37517E"
            />
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

export default Dont;
