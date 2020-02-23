import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface MenuIconProps {
  size: IconSize;
}

export const Menu: FunctionComponent<MenuIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-menu">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M0 3.8h16V2.2H0v1.6zm0 5h16V7.2H0v1.6zm0 5h16v-1.6H0v1.6z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M2 5h20v2H2V5zM2 11h20v2H2v-2zM22 17H2v2h20v-2z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Menu;
