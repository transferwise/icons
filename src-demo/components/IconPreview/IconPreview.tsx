import React, { FunctionComponent } from 'react';
import { Badge } from '../utils';
import styles from './IconPreview.module.css';

interface IconPreviewProps {
  name: string;
  oldName: string;
  color: string;
  icon: React.ReactElement;
  badges: Badge[];
}

const RADIUS = 4;

interface BadgesProps {
  badges: Badge[];
}

const Badges = ({ badges }: BadgesProps) => {
  const count = badges.length;
  const width = count * RADIUS * 2 + count * RADIUS;

  return (
    <svg viewBox={`0 0 ${width} ${2*RADIUS}`} width={width} height={2*RADIUS}>
      {badges.map((badge, i) => (
        <circle key={i} cx={RADIUS + i * 12} cy={RADIUS} r={RADIUS} fill={badge.color} />
      ))}
    </svg>
  );
};

export const IconPreview: FunctionComponent<IconPreviewProps> = ({
  icon,
  name,
  oldName,
  color,
  badges,
}) => {
  return (
    <div className={styles.preview} style={{ color }}>
      {badges && badges.length > 0 && (
        <div className={styles.circles}>
          <Badges badges={badges} />
        </div>
      )}
      <div className={styles.icon}>{icon}</div>
      <div className={styles.labels}>
        <label>
          <span>{name}</span>
          {oldName && (
            <>
              <br />
              <span className={styles['label-old-icon-name']}>{` \n ${oldName}`}</span>
            </>
          )}
        </label>
      </div>
    </div>
  );
};
