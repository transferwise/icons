import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CameraIconProps {
  size: IconSize;
}

export const Camera: FunctionComponent<CameraIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-camera">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M6 1.8H2V.2h4v1.6z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 13a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-1.6a1.9 1.9 0 100-3.8 1.9 1.9 0 000 3.8z"
              fill="#37517E"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 15.5v-12h16v12H0zM1.6 5.1h12.8v8.8H1.6V5.1z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M9.5 4h-6V2h6v2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 14a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              fill="#37517E"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M1 6h22v16H1V6zm2 2v12h18V8H3z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Camera;
