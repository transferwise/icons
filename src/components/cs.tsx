import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CsIconProps {
  size: IconSize;
}

export const Cs: FunctionComponent<CsIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-cs">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M8.005 1.588A5.038 5.038 0 003 6.054v5.691A3.768 3.768 0 006.531 14.2H9v1.6H6.531a5.367 5.367 0 01-5.27-4.355A2.996 2.996 0 010 9c0-1.06.55-1.993 1.382-2.527a6.625 6.625 0 0113.247.007A3 3 0 0113 12V6h.004a5.038 5.038 0 00-4.999-4.412z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M6 10a6 6 0 1112 0v6a4 4 0 001.85-7.547 8.003 8.003 0 00-15.7 0 4 4 0 00-.088 7.047H4a6.5 6.5 0 006.5 6.5H15v-2h-4.5A4.5 4.5 0 016 15.5V10z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Cs;
