import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface NewIconProps {
  size: IconSize;
}

export const New: FunctionComponent<NewIconProps> = ({ size = 16 }) => {
  return (
    <span className="tw-icon tw-icon-new">
      <svg width={String(size)} height={String(size)}>
        {Number(size) === 16 && (
          <>
            <path
              d="M11.863 1.63a.52.52 0 01-.233.233l-1.342.671a.52.52 0 000 .932l1.342.67c.101.051.183.133.233.234l.671 1.342a.52.52 0 00.931 0l.672-1.342a.52.52 0 01.233-.233l1.342-.671a.52.52 0 000-.932l-1.342-.67a.52.52 0 01-.233-.234L13.466.288a.52.52 0 00-.931 0l-.672 1.342z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.238 3.456a.825.825 0 00-1.476 0L3.993 6.993.456 8.762a.825.825 0 000 1.476l3.537 1.769 1.769 3.537a.825.825 0 001.476 0l1.769-3.537 3.537-1.769a.825.825 0 000-1.476L9.007 6.993 7.238 3.456zM5.347 7.978L6.5 5.67l1.153 2.307c.08.16.21.289.37.369L10.328 9.5l-2.307 1.153c-.16.08-.289.21-.369.37L6.5 13.328l-1.153-2.307a.825.825 0 00-.37-.369L2.672 9.5l2.307-1.153c.16-.08.289-.21.369-.37z"
              fill="#37517E"
            />
          </>
        )}
        {Number(size) === 24 && (
          <>
            <path
              d="M17.197 3.966a.518.518 0 01-.231.231l-1.68.84a.517.517 0 000 .926l1.68.84c.1.05.181.131.231.231l.84 1.68c.19.381.735.381.926 0l.84-1.68c.05-.1.131-.181.231-.231l1.68-.84a.517.517 0 000-.926l-1.68-.84a.518.518 0 01-.231-.231l-.84-1.68a.517.517 0 00-.926 0l-.84 1.68z"
              fill="#37517E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.894 6.553a1 1 0 00-1.788 0L6.92 10.92l-4.368 2.185a1 1 0 000 1.788L6.92 17.08l2.185 4.368a1 1 0 001.788 0l2.185-4.368 4.368-2.185a1 1 0 000-1.788L13.08 10.92l-2.185-4.368zm-2.333 5.56L10 9.237l1.439 2.878a1 1 0 00.447.447L14.764 14l-2.878 1.439a1 1 0 00-.447.447L10 18.764l-1.439-2.878a1 1 0 00-.447-.447L5.236 14l2.878-1.439a1 1 0 00.447-.447z"
              fill="#37517E"
            />
          </>
        )}
      </svg>
    </span>
  );
};

export default New;
