import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CrossIconProps {
  size: IconSize;
}

export const Cross: FunctionComponent<CrossIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-cross">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M9.131 8l5.435-5.434-1.132-1.132L8 6.87 2.566 1.434 1.434 2.566 6.87 8l-5.435 5.434 1.132 1.132L8 9.13l5.434 5.435 1.132-1.132L9.13 8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M12 13.414l7.293 7.293 1.414-1.414L13.414 12l7.293-7.293-1.414-1.414L12 10.586 4.707 3.293 3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Cross;
