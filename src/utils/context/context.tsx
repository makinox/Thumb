import React, {createContext, useState, useEffect} from 'react';
import EntityI from '../interfaces/Entity';

const DefaultEntities: Array<EntityI> = [
  {
    id: 0,
    name: 'Pope Francis',
    description:
      'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) ',
    time: '1 month ago',
    category: 'Religion',
    url: 'https://wikipedia.org/',
    votes: [],
  },
  {
    id: 1,
    name: 'Kanye West',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est mollitia at quibusdam iure repellendus',
    time: '1 month ago',
    category: 'Entertainment',
    url: 'https://wikipedia.org/',
    votes: [],
  },
  {
    id: 2,
    name: 'Mark Zuckerberg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est mollitia at quibusdam iure repellendus',
    time: '1 month ago',
    category: 'Business',
    url: 'https://wikipedia.org/',
    votes: [],
  },
  {
    id: 3,
    name: 'Cristina Fernández de Kirchner',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est mollitia at quibusdam iure repellendus',
    time: '1 month ago',
    category: 'Business',
    url: 'https://wikipedia.org/',
    votes: [],
  },
  {
    id: 4,
    name: 'Malala Yousafzai',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est mollitia at quibusdam iure repellendus',
    time: '1 month ago',
    category: 'Business',
    url: 'https://wikipedia.org/',
    votes: [],
  },
];

export const ARMcontext = createContext({
  entity: [{}] as Array<EntityI>,
  HandleEntity: (entity: Array<EntityI>) => {},
});

export const ARMprovider = ({children}: {children: any}) => {
  const [entity, setEntity] = useState<Array<EntityI>>(DefaultEntities);

  function HandleEntity(param: Array<EntityI>): void {
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
