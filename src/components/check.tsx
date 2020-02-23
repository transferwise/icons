import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CheckIconProps {
  size: IconSize;
}

export const Check: FunctionComponent<CheckIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-check">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 8.571L1.122 7.44l3.902 3.934 9.854-9.934L16 2.57 5.024 13.637 0 8.571z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.3 12.35l1.413-1.402 5.29 5.248L20.286 5 21.7 6.402 9.002 19 2.3 12.35z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Check;
