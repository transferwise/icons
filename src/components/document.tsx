import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface DocumentIconProps {
  size: IconSize;
}

export const Document: FunctionComponent<DocumentIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-document">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 .2h7.031L14 5.169V15.8H2V.2zm5.4 6.6h5v7.4H3.6V1.8h3.8v5zm4.369-1.6H9V2.431L11.769 5.2z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 2h9v.002L19.997 9H20v13H4V2zm2 2h5v7h7v9H6V4zm7 5V4.83L17.17 9H13z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Document;
