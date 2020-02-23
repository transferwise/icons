import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface DownloadIconProps {
  size: IconSize;
}

export const Download: FunctionComponent<DownloadIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-download">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M12.44 4.429L8.8 7.996V0H7.2v7.996L3.56 4.429 2.44 5.57 8 11.021l5.56-5.45-1.12-1.142zM15 15.8v-1.6H1v1.6h14z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M17.788 8.298L13 13.16V2h-2v11.16L6.212 8.297 4.788 9.702 12 17.025l7.212-7.323-1.424-1.404zM21 22v-2H3v2h18z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Download;
