import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface SwitchIconProps {
  size: IconSize;
}

export const Switch: FunctionComponent<SwitchIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-switch">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M12 8.065l4-4.032L12 0l-1.113 1.122 2.1 2.117H4.065v1.587h8.922l-2.1 2.117L12 8.065zM0 11.967l4-4.032 1.113 1.122-2.1 2.117h8.922v1.587H3.013l2.1 2.117L4 16l-4-4.033z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M16.582 12.332L21.914 7l-5.332-5.332-1.414 1.414L18.086 6H7v2h11.086l-2.918 2.918 1.414 1.414zM2.086 17l5.332-5.332 1.414 1.414L5.914 16H17v2H5.914l2.918 2.918-1.414 1.414L2.086 17z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Switch;
