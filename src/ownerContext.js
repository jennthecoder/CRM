import { createContext } from 'react';

const OwnerContext = createContext({
  owners: null,
  setOwners: () => {}
});

export default OwnerContext;
