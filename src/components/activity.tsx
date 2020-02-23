import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ActivityIconProps {
  size: IconSize;
  filled: boolean;
}

export const Activity: FunctionComponent<ActivityIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-activity">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path
              d="M.05 2a1.6 1.6 0 103.2 0 1.6 1.6 0 00-3.2 0zM.05 8a1.6 1.6 0 103.2 0 1.6 1.6 0 00-3.2 0zM1.6 15.6a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zM6 2.8h10V1.2H6v1.6zM16 8.8H6V7.2h10v1.6zM6 14.8h10v-1.6H6v1.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path
              d="M6 5a2 2 0 11-4 0 2 2 0 014 0zM4 14a2 2 0 100-4 2 2 0 000 4zM4 21a2 2 0 100-4 2 2 0 000 4zM9 13h13v-2H9v2zM22 6H9V4h13v2zM9 20h13v-2H9v2z"
              fill="#37517E"
            />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path
              d="M.05 2a1.6 1.6 0 103.2 0 1.6 1.6 0 00-3.2 0zM.05 8a1.6 1.6 0 103.2 0 1.6 1.6 0 00-3.2 0zM1.6 15.6a1.6 1.6 0 110-3.2 1.6 1.6 0 010 3.2zM6 3.2h10V.8H6v2.4zM16 9.2H6V6.8h10v2.4zM6 15.2h10v-2.4H6v2.4z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              d="M6 5a2 2 0 11-4 0 2 2 0 014 0zM4 14a2 2 0 100-4 2 2 0 000 4zM4 21a2 2 0 100-4 2 2 0 000 4zM9 13.6h13v-3.2H9v3.2zM22 6.6H9V3.4h13v3.2zM9 20.6h13v-3.2H9v3.2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Activity;
