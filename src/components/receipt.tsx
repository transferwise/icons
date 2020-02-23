import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ReceiptIconProps {
  size: IconSize;
}

export const Receipt: FunctionComponent<ReceiptIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-receipt">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M10.976 5.591H5.025V4.004h5.95v1.587zM5.025 9.559h3.967V7.972H5.025v1.587z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.751 0H14.25v16l-3.735-1.867L8 15.642l-2.514-1.51L1.75 16V0zm1.587 1.587v11.845l2.217-1.108L8 13.79l2.445-1.467 2.217 1.108V1.587H3.338z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M8 8h8V6H8v2zM16 12H8v-2h8v2zM8 16h5v-2H8v2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 2H4v19.943l4.943-1.854L12 21.618l3.057-1.529L20 21.943V2zM6 19.057V4h12v15.057l-3.057-1.146L12 19.382l-2.943-1.471L6 19.057z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Receipt;
