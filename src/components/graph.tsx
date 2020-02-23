import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface GraphIconProps {
  size: IconSize;
}

export const Graph: FunctionComponent<GraphIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-graph">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M1.62 0v14.38h14.172V16H0V0h1.62z" fill="#37517E" />
            <path
              d="M6.884 4.93L2.262 9.554l1.145 1.145 3.477-3.477 2.53 2.531L16 3.165 14.855 2.02l-5.44 5.442L6.883 4.93z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M4 2v18h18v2H2V2h2z" fill="#37517E" />
            <path d="M11 8.086l-5.707 5.707 1.414 1.414L11 10.914l3 3 8.007-8.007-1.414-1.414L14 11.086l-3-3z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Graph;
