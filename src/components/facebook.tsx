import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface FacebookIconProps {
  size: IconSize;
}

export const Facebook: FunctionComponent<FacebookIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-facebook">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M9.416 16V8.671h2.46l.096-.715.088-.715.088-.715.097-.716H9.416V3.986c-.003-.189.016-.378.056-.562a.924.924 0 01.635-.723c.233-.078.478-.114.723-.105h1.511V.041h-.305L11.538 0h-1.399A4.227 4.227 0 008.645.25C8.21.4 7.815.648 7.488.973a3.214 3.214 0 00-.756 1.181 4.58 4.58 0 00-.265 1.607v2.05H4v2.86h2.467V16h2.95z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M13.77 22v-9.161h3.074l.12-.894.111-.894.11-.894.121-.894H13.77v-2.28c-.004-.236.02-.472.07-.703.042-.203.132-.392.262-.553.14-.165.325-.286.532-.351.291-.097.597-.142.904-.13h1.889V2.05h-.382L16.422 2h-1.748a5.283 5.283 0 00-1.868.311 3.847 3.847 0 00-1.446.904c-.42.417-.742.92-.945 1.477a5.725 5.725 0 00-.331 2.009v2.561H7v3.576h3.084V22h3.686z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default Facebook;
