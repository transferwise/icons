import React, { FunctionComponent } from 'react';
import styles from './Legend.module.css';

export interface Legend {
  color: string;
  label: string;
}

interface LegendProps {
  items: Legend[];
}

export const Legend: FunctionComponent<LegendProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      { items.map(item => (
        <div className={styles['legend-container']}>
          <div className={styles.circle}>
            <svg viewBox={'0 0 10 10'} width={10} height={10}>
              <circle cx={5} cy={5} r={5} fill={item.color} />
            </svg>
          </div>
          <div className={styles.label}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
