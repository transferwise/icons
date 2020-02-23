import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface BriefcaseIconProps {
  size: IconSize;
}

export const Briefcase: FunctionComponent<BriefcaseIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-briefcase">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M7.5.2A2.8 2.8 0 004.7 3h1.6a1.2 1.2 0 011.2-1.2h1A1.2 1.2 0 019.7 3h1.6A2.8 2.8 0 008.5.2h-1z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8 4.2H.2v11.6h15.6V4.2zm-14 10v-3.525c.044.048.089.095.134.14.953.953 1.942.985 2.066.985h2.5v.8h3v-.8c.844 0 1.69.02 2.534 0a1.506 1.506 0 00.208-.02c.124-.018.289-.051.48-.115a3.446 3.446 0 001.344-.85c.045-.045.09-.091.134-.14V14.2H1.8zm7.7-4h2.484a1.155 1.155 0 00.231-.053 1.85 1.85 0 00.72-.463c.493-.493 1.126-1.567 1.245-3.884H1.82c.12 2.317.752 3.39 1.246 3.884.462.463.899.512.948.516H6.5v-.8h3v.8z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M11 2a4 4 0 00-4 4h2a2 2 0 012-2h2a2 2 0 012 2h2a4 4 0 00-4-4h-2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 8H2v14h20V8zM4 20v-4.29c.108.117.219.226.331.327 1.256 1.128 2.54 1.155 2.669 1.155h3V18h4v-.808h3.04l.022-.001a2.433 2.433 0 00.237-.021c.157-.02.367-.059.613-.132a4.61 4.61 0 001.757-1.001c.112-.101.223-.21.331-.326V20H4zm10-4.808h2.986a1.871 1.871 0 00.352-.07 2.61 2.61 0 00.993-.572c.65-.584 1.476-1.838 1.64-4.55H4.029c.164 2.712.99 3.966 1.64 4.55.661.595 1.3.64 1.344.642H10V14h4v1.192z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Briefcase;
