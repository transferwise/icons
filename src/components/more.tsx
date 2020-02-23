import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface MoreIconProps {
  size: IconSize;
}

export const More: FunctionComponent<MoreIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-more">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.58 9.58a1.58 1.58 0 100-3.16 1.58 1.58 0 000 3.16zM16 8a1.58 1.58 0 11-3.16 0A1.58 1.58 0 0116 8zM8 9.58a1.58 1.58 0 100-3.16 1.58 1.58 0 000 3.16z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M14 12a2 2 0 11-4 0 2 2 0 014 0zM6 12a2 2 0 11-4 0 2 2 0 014 0zM22 12a2 2 0 11-4 0 2 2 0 014 0z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default More;
