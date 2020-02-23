import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface SearchIconProps {
  size: IconSize;
}

export const Search: FunctionComponent<SearchIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-search">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.35 12.484a7 7 0 111.133-1.133l3.517 3.508L14.86 16l-3.51-3.515zM12.4 7A5.4 5.4 0 111.6 7a5.4 5.4 0 0110.8 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.76 17.178a8.5 8.5 0 111.418-1.418L22 20.543 20.543 22l-4.783-4.822zM17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Search;
