import { createContext } from 'react';

export const QrContext = createContext(
  {
  qr1: null,

  qr2: null,

  setQr1: () => {},
  setQr2: () => {},
});
