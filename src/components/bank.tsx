import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface BankIconProps {
  size: IconSize;
}

export const Bank: FunctionComponent<BankIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-bank">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M16 6.4L8 0 0 6.4l1 1.25 7-5.601 7 5.6 1-1.25z" fill="#37517E" />
            <path d="M11.7 14.2H8.8V7H7.2v7.2H4.3V9H2.7v5.2H1v1.6h14v-1.6h-1.7V9h-1.6v5.2z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M22.003 9.408l-10-7.405-10 7.405 1.195 1.595 8.805-6.52 8.805 6.52 1.195-1.595z" fill="#37517E" />
            <path d="M13 10v10h4v-7h2v7h2v2H3v-2h2v-7h2v7h4V10h2z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Bank;
