export const emailNotValid = (email: string) => {
  if (!email) {
    return 'Email Required, Please try again';
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    return 'Email Not Valid, Please try again';
  }
  return '';
}