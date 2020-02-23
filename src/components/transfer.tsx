import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface TransferIconProps {
  size: IconSize;
}

export const Transfer: FunctionComponent<TransferIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-transfer">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.5 5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-1.6a.9.9 0 100-1.8.9.9 0 000 1.8zM13.5 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-1.6a.9.9 0 100-1.8.9.9 0 000 1.8zM3.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0-1.6a.9.9 0 100-1.8.9.9 0 000 1.8z"
              fill="#37517E"
            />
            <path
              d="M7.816 6.24a4.081 4.081 0 001.56.358L7.278 15.68l-1.559-.36 2.096-9.08zM11.875 12.265l-.657 3.067 1.564.336.658-3.068a4.084 4.084 0 01-1.565-.335zM3.389 8.598a4.082 4.082 0 01-1.56-.353l-1.61 7.078 1.561.354L3.39 8.598z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M16.904 17.54l-.877 3.731 1.947.458.877-3.731a4.976 4.976 0 01-1.947-.457zM11.874 9.527c.593.279 1.25.445 1.944.47l-2.846 11.739-1.944-.471 2.846-11.738zM4.378 11.529a4.976 4.976 0 001.945.468l-2.35 9.738-1.945-.47 2.35-9.736z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 14a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6zM14 6a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6zM6.5 8a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 100-6 3 3 0 000 6z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Transfer;
