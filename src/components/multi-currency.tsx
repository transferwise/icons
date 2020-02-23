import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface MultiCurrencyIconProps {
  size: IconSize;
}

export const MultiCurrency: FunctionComponent<MultiCurrencyIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-multi-currency">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 .2a2.8 2.8 0 102.426 4.2 5.213 5.213 0 012.583 3.2 4.386 4.386 0 011.71.349 6.809 6.809 0 00-3.926-5.151A2.8 2.8 0 008 .2zM6.8 3a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0zM2.8 9c0 .07.001.138.004.207a2.8 2.8 0 11-1.556.609A6.786 6.786 0 013.665 3.76c.101.58.316 1.12.621 1.6A5.183 5.183 0 002.8 9zm.2 1.8a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zM10.628 13.488a2.8 2.8 0 111.268 1.086A6.77 6.77 0 018 15.8a6.79 6.79 0 01-2.236-.376 4.42 4.42 0 001.115-1.345 5.214 5.214 0 003.749-.591zM11.8 12a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a3.5 3.5 0 103.251 4.799 7.018 7.018 0 013.46 4.205c.776.03 1.51.22 2.171.537A9.013 9.013 0 0015.4 4.664 3.502 3.502 0 0012 2zm-1.5 3.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM5.5 13c-.17 0-.337.012-.5.035V13c0-1.958.804-3.729 2.1-5a5.467 5.467 0 01-.588-2.134 8.985 8.985 0 00-3.457 8.13A3.5 3.5 0 105.5 13zM4 16.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.883 18.825a3.5 3.5 0 111.87 1.096A8.963 8.963 0 0112.001 22a8.968 8.968 0 01-3.673-.781 5.528 5.528 0 001.645-1.517A6.996 6.996 0 0012 20a6.967 6.967 0 003.883-1.175zM17 16.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default MultiCurrency;
