import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface CrossCircleIconProps {
  size: IconSize;
  filled: boolean;
}

export const CrossCircle: FunctionComponent<CrossCircleIconProps> = ({ size = 16, filled = false }) => {
  return (
    <span className="tw-icon tw-icon-cross-circle">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && filled === false && (
          <>
            <path
              d="M6.869 8L4.434 5.566l1.132-1.132L8 6.87l2.434-2.435 1.132 1.132L9.13 8l2.435 2.434-1.132 1.132L8 9.13l-2.434 2.435-1.132-1.132L6.87 8z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.6A6.4 6.4 0 108 1.6a6.4 6.4 0 000 12.8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled === false && (
          <>
            <path
              d="M10.586 12L7.293 8.707l1.414-1.414L12 10.586l3.293-3.293 1.414 1.414L13.414 12l3.293 3.293-1.414 1.414L12 13.414l-3.293 3.293-1.414-1.414L10.586 12z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
              fill="#37517E"
            />
          </>
        )}

        {Number(size) === 16 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 16A8 8 0 108 0a8 8 0 000 16zm2.434-4.434L8 9.13l-2.434 2.435-1.132-1.132L6.87 8 4.434 5.566l1.132-1.132L8 6.87l2.434-2.435 1.132 1.132L9.13 8l2.435 2.434-1.132 1.132z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && filled && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm3.293-5.293L12 13.414l-3.293 3.293-1.414-1.414L10.586 12 7.293 8.707l1.414-1.414L12 10.586l3.293-3.293 1.414 1.414L13.414 12l3.293 3.293-1.414 1.414z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default CrossCircle;
