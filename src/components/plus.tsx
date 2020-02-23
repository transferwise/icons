import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface PlusIconProps {
  size: IconSize;
}

export const Plus: FunctionComponent<PlusIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-plus">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.2 16V0h1.6v16H7.2z" fill="#37517E" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16 8.8H0V7.2h16v1.6z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M11 22V2h2v20h-2z" fill="#37517E" />
            <path fillRule="evenodd" clipRule="evenodd" d="M22 13H2v-2h20v2z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Plus;
