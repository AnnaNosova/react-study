import { useContext } from 'react';
import { AuthContext } from '.';

export const useAuthorization = () => useContext(AuthContext);