export const handleErrorForm = (title: string, description: string): string => {
  if (!(title && description)) {
    return 'Missing Fields to Fill';
  }
  if (!(title?.trim() !== '' && description?.trim() !== '')) {
    return 'Missing Fields to Fill'
  }
  if (!(title?.length > 3)) {
    return 'The Title field requires a minimum characters: 5'
  }
  return '';
}
