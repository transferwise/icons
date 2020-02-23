import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CardTransferwiseIconProps {
  size: IconSize;
}

export const CardTransferwise: FunctionComponent<CardTransferwiseIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-card-transferwise">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M3 7a1 1 0 011-1h1a1 1 0 010 2H4a1 1 0 01-1-1zM3 10.8h7V9.2H3v1.6z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 3a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1H1a1 1 0 01-1-1V3zm1.6 9.4V3.6h12.8v2.472A2.495 2.495 0 0012.5 8.5a2.495 2.495 0 001.9 2.428V12.4H1.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M16 16H4v-2h12v2zM5.5 9a1.5 1.5 0 100 3h1a1.5 1.5 0 000-3h-1z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 4a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2H2zm0 2h20v3.157a3.251 3.251 0 000 6.186V18H2V6z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default CardTransferwise;
