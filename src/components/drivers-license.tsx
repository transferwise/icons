import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface DriversLicenseIconProps {
  size: IconSize;
}

export const DriversLicense: FunctionComponent<DriversLicenseIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-drivers-license">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M5 9.2a1 1 0 11-2 0 1 1 0 012 0zM12 10.2a1 1 0 100-2 1 1 0 000 2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.22 0a1.8 1.8 0 00-1.707 1.23L1.657 3.8H1a1 1 0 00-.27 1.963l-.228.341a1.8 1.8 0 00-.302.999V14.5a1.5 1.5 0 003 0v-1.2h9.6v1.2a1.5 1.5 0 003 0V7.103a1.8 1.8 0 00-.302-.999l-.228-.34A1 1 0 0015 3.8h-.657l-.856-2.57A1.8 1.8 0 0011.779 0H4.221zm-.189 1.737a.2.2 0 01.19-.137h7.558a.2.2 0 01.19.137L13.223 5.5H2.777L4.03 1.737zM1.8 7.1V11.7h12.4V7.1H1.8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M8 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM17.5 15a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.969 2a2 2 0 00-1.923 1.45L4.174 6.5H3a1.5 1.5 0 00-.29 2.972l-.184.202A2 2 0 002 11.025V20a2 2 0 104 0v-1.5h12V20a2 2 0 104 0v-8.975a2 2 0 00-.526-1.351l-.185-.202A1.5 1.5 0 0021 6.5h-1.174l-.872-3.05A2 2 0 0017.032 2H6.97zm0 2H17.03l1.429 5H5.54l1.429-5zm-2.946 7L4 11.025V16.5h16v-5.475L19.977 11H4.023z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default DriversLicense;
