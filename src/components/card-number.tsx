import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CardNumberIconProps {
  size: IconSize;
  filled: boolean;
}

export const CardNumber: FunctionComponent<CardNumberIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-card-number">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path
              d="M4 7a1 1 0 011-1h1a1 1 0 010 2H5a1 1 0 01-1-1zM4 9.2v1.6h2V9.2H4zM9 10.8H7V9.2h2v1.6zM10 10.8h2V9.2h-2v1.6z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 2a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1H1zm.6 1.6v8.8h12.8V3.6H1.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path
              d="M4 14v2h3v-2H4zM11 16H8v-2h3v2zM12 16h3v-2h-3v2zM19 16h-3v-2h3v2zM5.5 9a1.5 1.5 0 100 3h1a1.5 1.5 0 000-3h-1z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 4a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2H2zm0 2h20v12H2V6z"
              fill="#37517E"
            />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 2a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1H1zm3 5a1 1 0 011-1h1a1 1 0 010 2H5a1 1 0 01-1-1zm0 3.8V9.2h2v1.6H4zm5 0H7V9.2h2v1.6zm3 0h-2V9.2h2v1.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 4a1 1 0 00-1 1v14a1 1 0 001 1h22a1 1 0 001-1V5a1 1 0 00-1-1H1zm3 6.5A1.5 1.5 0 015.5 9h1a1.5 1.5 0 110 3h-1A1.5 1.5 0 014 10.5zM4 14v2h3v-2H4zm7 2H8v-2h3v2zm4 0h-3v-2h3v2zm4 0h-3v-2h3v2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default CardNumber;
