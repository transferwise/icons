import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface AchIconProps {
  size: IconSize;
}

export const Ach: FunctionComponent<AchIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-ach">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M0 6.375l7-5.6v2.05l-6 4.8-1-1.25zM8.8 14.2h2.9V9h1.6v5.2H15v1.6H1v-1.6h1.7V9h1.6v5.2h2.9V7h1.6v7.2zM14.2 7A5.2 5.2 0 009 1.8V.2A6.8 6.8 0 0115.8 7h-1.6z"
              fill="#37517E"
            />
            <path d="M9 4.8A2.2 2.2 0 0111.2 7h1.6A3.8 3.8 0 009 3.2v1.6z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M20 11a7 7 0 00-7-7V2a9 9 0 019 9h-2zM1.907 9.695L11 2.995v2.484l-7.907 5.826-1.186-1.61zM13 20V10h-2v10H7v-7H5v7H3v2h18v-2h-2v-7h-2v7h-4z"
              fill="#37517E"
            />
            <path d="M13 8a3 3 0 013 3h2a5 5 0 00-5-5v2z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Ach;
