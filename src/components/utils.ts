const andtIconAdapter = (icon: string) => {
  if (!icon) {
    return undefined;
  }

  if (icon?.includes('Outlined')) {
    return icon;
  }

  let updatedIcon = icon
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join('');

  updatedIcon += 'Outlined';

  return updatedIcon;
};

export { andtIconAdapter };
