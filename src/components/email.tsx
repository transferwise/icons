import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface EmailIconProps {
  size: IconSize;
}

export const Email: FunctionComponent<EmailIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-email">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.2 2.2h15.6v1.159L8 10.054.2 3.359v-1.16zm2.962 1.6L8 7.946 12.838 3.8H3.162z"
              fill="#37517E"
            />
            <path d="M14.2 6.775l1.6-1.334V13.8H.2V5.441l1.6 1.334V12.2h12.4V6.775z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 5h20v1.404l-10 7.863L2 6.509V5zm3.915 2L12 11.733 18.085 7H5.915z"
              fill="#37517E"
            />
            <path d="M20 10.509l2-1.565V19H2V9.037l2 1.545V17h16V10.51z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Email;
