export interface Badge {
  color: string;
}

export const generateBadges = ({
  oldName,
  svgFiles,
}: {
  oldName?: string;
  svgFiles: { fill: string; outline: string };
}): Badge[] => {
  const badges = [];
  const hasFilledVariant = Object.keys(svgFiles).includes('fill');

  if (oldName) {
    badges.push({ color: '#f53636' });
  }

  if (hasFilledVariant) {
    badges.push({ color: '#00b9ff' });
  }

  return badges;
};
