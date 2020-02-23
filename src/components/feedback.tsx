import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface FeedbackIconProps {
  size: IconSize;
}

export const Feedback: FunctionComponent<FeedbackIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-feedback">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path d="M4 4.2h8v1.6H4V4.2zM12 7.2H4v1.6h8V7.2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.846 0C.826 0 0 .819 0 1.83v9.146c0 1.01.827 1.83 1.846 1.83h2.257V16l5.158-3.195h4.893c1.02 0 1.846-.819 1.846-1.829V1.829C16 .82 15.173 0 14.154 0H1.846zm-.205 1.83c0-.113.092-.204.205-.204h12.308c.113 0 .205.091.205.203v9.147a.204.204 0 01-.205.203H8.79l-3.046 1.887V11.18H1.846a.204.204 0 01-.205-.203V1.829z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path d="M7 9h10V7H7v2zM17 13H7v-2h10v2z" fill="#37517E" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 2a3 3 0 00-3 3v10a3 3 0 003 3h2v4l7.236-4H19a3 3 0 003-3V5a3 3 0 00-3-3H5zM4 5a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1h-5.236L9 18.764V16H5a1 1 0 01-1-1V5z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Feedback;
