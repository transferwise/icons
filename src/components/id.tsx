import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface IdIconProps {
  size: IconSize;
}

export const Id: FunctionComponent<IdIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-id">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 5.7a2.3 2.3 0 100 4.6 2.3 2.3 0 000-4.6zM4.8 8a.7.7 0 111.4 0 .7.7 0 01-1.4 0z"
              fill="#37517E"
            />
            <path d="M13 7.3H9V5.7h4v1.6zM9 10.3h4V8.7H9v1.6z" fill="#37517E" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15.8 2.2H.2v11.6h15.6V2.2zm-14 10V3.8h12.4v8.4H1.8z" fill="#37517E" />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path fillRule="evenodd" clipRule="evenodd" d="M5 10a3 3 0 116 0 3 3 0 01-6 0zm3-1a1 1 0 100 2 1 1 0 000-2z" fill="#37517E" />
            <path
              d="M11.191 14.473C10.41 14.24 9.291 14 8 14c-1.29 0-2.409.24-3.191.473C3.629 14.823 3 15.923 3 17h2c0-.35.19-.554.378-.61A9.322 9.322 0 018 16c1.049 0 1.97.196 2.622.39.188.056.378.26.378.61h2c0-1.077-.629-2.177-1.809-2.527zM14 11h6V9h-6v2zM20 15h-6v-2h6v2z"
              fill="#37517E"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M24 3H0v18h24V3zM2 19V5h20v14H2z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default Id;
