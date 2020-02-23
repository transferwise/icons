import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ExchangeRateIconProps {
  size: IconSize;
}

export const ExchangeRate: FunctionComponent<ExchangeRateIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-exchange-rate">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M16 10.07V3.2H9.13v1.616h4.11L8.626 9.432l-2.499-2.5L0 12.503l1.087 1.196 4.986-4.533 2.552 2.553 5.759-5.759v4.11H16z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M18.586 7L13 12.586l-3-3-7.707 7.707 1.414 1.414L10 12.414l3 3 7-7V13h2V5h-8v2h4.586z" fill="#37517E" />
          </>
        )}
      </svg>
    </span>
  );
};

export default ExchangeRate;
