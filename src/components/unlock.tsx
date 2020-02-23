import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface UnlockIconProps {
  size: IconSize;
}

export const Unlock: FunctionComponent<UnlockIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-unlock">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M7.2 12v-2h1.6v2H7.2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.2 6.2V5C3.2 2.625 4.994.2 8 .2c2.496 0 4.157 1.673 4.648 3.6h-1.673c-.436-1.122-1.486-2-2.975-2-1.994 0-3.2 1.575-3.2 3.2v1.2h10V13a2.8 2.8 0 01-2.8 2.8H4A2.8 2.8 0 011.2 13V6.2h2zM2.8 13V7.8h10.4V13a1.2 1.2 0 01-1.2 1.2H4A1.2 1.2 0 012.8 13z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M11 14.5v3h2v-3h-2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 8.5A6.5 6.5 0 0118.002 6h-2.26A4.5 4.5 0 007.5 8.5V10H21v9a3 3 0 01-3 3H6a3 3 0 01-3-3v-9h2.5V8.5zM5 19v-7h14v7a1 1 0 01-1 1H6a1 1 0 01-1-1z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Unlock;
