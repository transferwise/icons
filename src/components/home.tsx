import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface HomeIconProps {
  size: IconSize;
}

export const Home: FunctionComponent<HomeIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-home">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M16 6.4L8 0 0 6.4l1 1.25 7-5.601 7 5.6 1-1.25zM3.8 9v5.2h8.4V9h1.6v6.8H2.2V9h1.6z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M23 11L12 2 .895 11l1.224 1.551L12 4.518l9.775 8.033L23 11zM6 14v6h12v-6h2v8H4v-8h2z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Home;
