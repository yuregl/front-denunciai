import jwtDecode from 'jwt-decode';

interface Token {
  exp: number
}

export function isJwtExpired(token: string): boolean {
  console.log(token);
  if (typeof(token) !== 'string' || !token) throw new Error('Invalid token provided');

  const { exp } = <Token>jwtDecode(token);

  const currentTime = new Date().getTime() / 1000;

  if (currentTime > exp) return true;

  return false;
}
