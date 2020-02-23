import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CardIconProps {
  size: IconSize;
}

export const Card: FunctionComponent<CardIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-card">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V3zm1.6 2V3.6h12.8V5H1.6zm0 2v5.4h12.8V7H1.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 4a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2H2zm0 2h20v2H2V6zm0 5v7h20v-7H2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Card;
