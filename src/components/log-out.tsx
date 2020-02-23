import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface LogOutIconProps {
  size: IconSize;
  filled: boolean;
}

export const LogOut: FunctionComponent<LogOutIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-log-out">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path d="M4 1.8h10.2v12.4H4v1.6h11.8V.2H4v1.6z" fill="#37517E" />
            <path d="M0 8l3.566 3.566 1.131-1.132L3.063 8.8H11V7.2H3.063l1.634-1.634-1.131-1.132L0 8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path d="M7 4h13v16H7v2h15V2H7v2z" fill="#37517E" />
            <path d="M2 12l4.957 4.957 1.414-1.414L5.828 13H16v-2H5.828l2.543-2.543-1.414-1.414L2 12z" fill="#37517E" />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path d="M16 0H4.15v1.641h9.44v12.718H4.15V16H16V0z" fill="#37517E" />
            <path d="M11.18 8.82V7.18H3.075l1.641-1.677-1.136-1.16L0 8l3.581 3.657 1.136-1.16L3.076 8.82h8.103z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path d="M18.8 4H7V2h15v20H7v-2h11.8V4z" fill="#37517E" />
            <path d="M16 11H5.828l2.543-2.543-1.414-1.414L2 12l4.957 4.957 1.414-1.414L5.828 13H16v-2z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default LogOut;
