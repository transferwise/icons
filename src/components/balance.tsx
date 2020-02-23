import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface BalanceIconProps {
  size: IconSize;
  filled: boolean;
}

export const Balance: FunctionComponent<BalanceIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-balance">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path d="M14.8 16V0h-1.6v16h1.6zM9.2 7v9h1.6V7H9.2zM6.8 4v12H5.2V4h1.6zM2.8 16v-5H1.2v5h1.6z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path d="M20 22V2h-2v20h2zM10 22V7H8v15h2zM5 22v-6H3v6h2zM15 11v11h-2V11h2z" fill="#37517E" />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path d="M15.2 16V0h-2.4v16h2.4zM8.8 7v9h2.4V7H8.8zM7.2 4v12H4.8V4h2.4zM3.2 16v-5H.8v5h2.4z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path d="M22.6 22V2h-3.2v20h3.2zM10.6 22V7H7.4v15h3.2zM4.6 22v-6H1.4v6h3.2zM16.6 11v11h-3.2V11h3.2z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Balance;
