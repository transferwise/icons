import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ECommerceIconProps {
  size: IconSize;
}

export const ECommerce: FunctionComponent<ECommerceIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-e-commerce">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 .2a3.3 3.3 0 00-3.3 3.3v.7H2.276l-1.16 11.6h13.768l-1.16-11.6H11.3v-.7A3.3 3.3 0 008 .2zm1.7 5.6V8h1.6V5.8h.976l.84 8.4H2.884l.84-8.4H4.7V8h1.6V5.8h3.4zm0-1.6v-.7a1.7 1.7 0 10-3.4 0v.7h3.4z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a4 4 0 00-4 4v1H4.074L2.92 22h18.16L19.926 7H16V6a4 4 0 00-4-4zm2 7v3h2V9h2.074l.846 11H5.08l.846-11H8v3h2V9h4zm0-2V6a2 2 0 10-4 0v1h4z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default ECommerce;
