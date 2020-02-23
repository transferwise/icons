import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface DoIconProps {
  size: IconSize;
}

export const Do: FunctionComponent<DoIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-do">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M10.784 9.142c-1.205 2.41-4.363 2.41-5.568 0l-1.432.716c1.795 3.59 6.637 3.59 8.432 0l-1.432-.716zM7 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM10.2 7.4a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
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
              d="M9.1 11a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2zM16.7 9.4a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zM15.606 13.553C14.764 15.236 13.346 16 12 16c-1.347 0-2.764-.764-3.606-2.447l-1.788.894C7.764 16.764 9.846 18 12 18c2.153 0 4.236-1.236 5.394-3.553l-1.788-.894z"
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

export default Do;
