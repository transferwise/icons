import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface LogInIconProps {
  size: IconSize;
}

export const LogIn: FunctionComponent<LogInIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-log-in">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M4 1.6h10.2V14H4v1.6h11.8V0H4v1.6z" fill="#37517E" />
            <path d="M11 7.8l-3.566 3.566-1.131-1.132L7.937 8.6H0V7h7.937L6.303 5.366l1.131-1.132L11 7.8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M7 4h13v16H7v2h15V2H7v2z" fill="#37517E" />
            <path d="M16 12l-4.957 4.957-1.414-1.414L12.172 13H2v-2h10.172L9.629 8.457l1.414-1.414L16 12z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default LogIn;
