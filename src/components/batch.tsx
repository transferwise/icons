import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface BatchIconProps {
  size: IconSize;
}

export const Batch: FunctionComponent<BatchIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-batch">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.863 4.974a2.5 2.5 0 10-1.574-.286L2.505 9a4.49 4.49 0 011.574.285l.784-4.311zM4.5 3.4a.9.9 0 100-1.8.9.9 0 000 1.8zM2.5 16a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-1.6a.9.9 0 100-1.8.9.9 0 000 1.8zM13.5 14a2.5 2.5 0 10-2.476-2.85l.002-.013-4.311.784c.184.49.284 1.02.285 1.574l4.312-.784A2.5 2.5 0 0013.5 14zm0-1.6a.9.9 0 100-1.8.9.9 0 000 1.8zM12.5 6a2.5 2.5 0 10-2.24-1.39L5.065 9.802c.44.306.825.69 1.131 1.131l5.193-5.193c.335.166.711.259 1.11.259zm0-1.6a.9.9 0 100-1.8.9.9 0 000 1.8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 5a3 3 0 01-2.615 2.975L7.09 14.02a5.377 5.377 0 00-1.956-.417L6.43 7.557A3 3 0 1111 5zM9 5a1 1 0 11-2 0 1 1 0 012 0zM21 6a3 3 0 01-4.293 2.708L9.46 15.954a5.432 5.432 0 00-1.414-1.414l7.246-7.247A3 3 0 1121 6zm-2 0a1 1 0 11-2 0 1 1 0 012 0zM19 19a3 3 0 10-2.976-3.385L9.982 16.91c.253.604.4 1.264.417 1.956l6.046-1.296A2.998 2.998 0 0019 19zm0-2a1 1 0 100-2 1 1 0 000 2zM8 19a3 3 0 11-6 0 3 3 0 016 0zm-3 1a1 1 0 100-2 1 1 0 000 2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Batch;
