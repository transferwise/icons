import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface StarIconProps {
  size: IconSize;
}

export const Star: FunctionComponent<StarIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-star">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.769 4.996L8 .4 5.231 4.996 0 6.206l3.52 4.05-.464 5.344L8 13.508l4.944 2.092-.464-5.344L16 6.206l-5.231-1.21zm2.278 2.169l-3.299-.763L8 3.5 6.252 6.402l-3.299.763 2.22 2.554-.293 3.372L8 11.77l3.12 1.32-.293-3.372 2.22-2.554z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.461 8.245L12 2.5 8.539 8.245 2 9.757l4.4 5.063-.58 6.68L12 18.885l6.18 2.615-.58-6.68L22 9.758l-6.539-1.512zm2.847 2.711l-4.123-.954L12 6.376l-2.185 3.626-4.123.954 2.774 3.193-.366 4.214 3.9-1.65 3.9 1.65-.366-4.214 2.774-3.193z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Star;
