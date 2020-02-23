import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ReceiveIconProps {
  size: IconSize;
}

export const Receive: FunctionComponent<ReceiveIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-receive">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M4.176 6.693L6.933 7.98 4.233.78 5.733.219 8.45 7.467l1.308-2.805 1.45.676-2.451 5.256L3.5 8.145l.676-1.45z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.483 13.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zm1.6 0a.9.9 0 101.8 0 .9.9 0 00-1.8 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M6.684 10.008l3.467 1.262-3.59-8.376 1.838-.788 3.505 8.179 1.189-3.265 1.879.684-2.394 6.578L6 11.888l.684-1.88z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.98 18.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm2 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Receive;
