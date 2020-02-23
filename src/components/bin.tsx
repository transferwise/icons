import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface BinIconProps {
  size: IconSize;
}

export const Bin: FunctionComponent<BinIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-bin">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.2 3v.2H1v1.6h14V3.2h-4.2V3a2.8 2.8 0 00-5.6 0zM8 1.8A1.2 1.2 0 006.8 3v.2h2.4V3A1.2 1.2 0 008 1.8z"
              fill="#37517E"
            />
            <path d="M3.802 15.8L2.602 7h1.614l.982 7.2h6.071l.655-7.2h1.607l-.8 8.8H3.8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 3.286C8.323 4.054 8 5.048 8 6H3v2h18V6h-5c0-.952-.322-1.946-1-2.714C14.302 2.498 13.276 2 12 2s-2.303.498-3 1.286zm1.5 1.324c-.322.363-.5.87-.5 1.39h4c0-.52-.178-1.027-.5-1.39-.303-.344-.777-.61-1.5-.61s-1.197.266-1.5.61z"
              fill="#37517E"
            />
            <path d="M6.102 22L4.816 10h2.011L7.9 20h8.203l1.07-10h2.012L17.9 22H6.102z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Bin;
