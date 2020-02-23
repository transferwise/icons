import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ExpandIconProps {
  size: IconSize;
}

export const Expand: FunctionComponent<ExpandIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-expand">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0l5.6 5.464L12.462 6.6 8 2.273 3.538 6.6 2.4 5.464 8 0zM8 16l-5.6-5.463L3.538 9.4 8 13.727 12.462 9.4l1.138 1.136L8 16z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M5.3 15.288L12 22l6.7-6.712-1.413-1.415L12 19.17l-5.287-5.297L5.3 15.288zM5.3 8.712L12 2l6.7 6.712-1.413 1.415L12 4.83l-5.287 5.297L5.3 8.712z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Expand;
