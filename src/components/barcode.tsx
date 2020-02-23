import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface BarcodeIconProps {
  size: IconSize;
}

export const Barcode: FunctionComponent<BarcodeIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-barcode">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M1.8 14V2H.2v12h1.6zM4.6 12V2H3v10h1.6zM7.4 12V2H5.8v10h1.6zM10.2 2v10H8.6V2h1.6zM13 12V2h-1.6v10H13zM15.8 2v12h-1.6V2h1.6z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M4 20V4H2v16h2zM11.2 17V4h-2v13h2zM7.6 4v13h-2V4h2zM14.8 17V4h-2v13h2zM18.4 4v13h-2V4h2zM22 20V4h-2v16h2z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Barcode;
