import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface DocumentsIconProps {
  size: IconSize;
}

export const Documents: FunctionComponent<DocumentsIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-documents">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M14.2 4.831L9.369 0h2.262L15.8 4.169V14.2h-1.6V4.831z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.2.2h7.031L12.2 5.169V15.8H.2V.2zm5.4 6.6h5v7.4H1.8V1.8h3.8v5zm4.369-1.6H7.2V2.431L9.969 5.2z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 2h9v.002L17.997 9H18v13H2V2zm2 2h5v7h7v9H4V4zm7 5V4.83L15.17 9H11z"
              fill="#37517E"
            />
            <path d="M20 8.414L13.586 2h2.828L22 7.586V20h-2V8.414z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Documents;
