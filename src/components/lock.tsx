import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface LockIconProps {
  size: IconSize;
}

export const Lock: FunctionComponent<LockIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-lock">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M7.2 10v2h1.6v-2H7.2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.2 5v1.2h-2V14A1.8 1.8 0 003 15.8h10a1.8 1.8 0 001.8-1.8V6.2h-2V5C12.8 2.625 11.006.2 8 .2S3.2 2.625 3.2 5zM8 1.8C6.006 1.8 4.8 3.375 4.8 5v1.2h6.4V5c0-1.625-1.206-3.2-3.2-3.2zm-5.2 6V14c0 .11.09.2.2.2h10a.2.2 0 00.2-.2V7.8H2.8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M11 17v-3h2v3h-2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 1a6.5 6.5 0 00-6.5 6.5V9H3v10a3 3 0 003 3h12a3 3 0 003-3V9h-2.5V7.5A6.5 6.5 0 0012 1zm4.5 8V7.5a4.5 4.5 0 10-9 0V9h9zM5 11v8a1 1 0 001 1h12a1 1 0 001-1v-8H5z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Lock;
