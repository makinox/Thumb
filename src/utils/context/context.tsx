import React, {createContext, useState, useEffect} from 'react';
import EntityI from '../interfaces/Entity';

export const ARMcontext = createContext({
  entity: {} as EntityI,
  HandleEntity: (entity: EntityI) => {},
});

export const ARMprovider = ({children}: {children: any}) => {
  const [entity, setEntity] = useState<EntityI>({});

  function HandleEntity(param: EntityI): void {
    setEntity(param);
    localStorage.setItem('entity', JSON.stringify(param));
  }

  function CheckStorageState(): void {
    try {
      const entityResult = localStorage.getItem('entity');
      if (entityResult !== null) {
        setEntity(JSON.parse(entityResult));
      }
    } catch (error) {
      return console.error({error: true, message: error});
    }
  }

  useEffect(CheckStorageState, []);

  return (
    <ARMcontext.Provider
      value={{
        entity,
        HandleEntity,
      }}>
      {children}
    </ARMcontext.Provider>
  );
};
