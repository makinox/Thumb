import VoteI from '../../utils/interfaces/Votes';
import EntityI from '../../utils/interfaces/Entity';
import {useContext, Fragment, useState} from 'react';
import {ARMcontext} from '../../utils/context/context';
import {Banner, BannerFooter, VoteHeader, VoteSection} from './styles';
import {FluidContainer, Footer, HeroCard, LargeNotification, Navbar, SubmitInvitation, VoteCard} from '../../components';

export default function Index() {
  const {entity, HandleEntity} = useContext(ARMcontext);
  const [notification, useNotification] = useState(true);

  function HandleAction(): void {
    useNotification(false);
  }

  function HandleCase(id: EntityI['id'], type: VoteI['vote']) {
    const mutedEntity = entity.map(el => {
      if (el.id === id) {
        el.votes?.push({id, vote: type, userId: 99});
      }
      return el;
    });
    HandleEntity(mutedEntity);
  }

  return (
    <>
      <Banner image="https://picsum.photos/id/1033/1460/700">
        <FluidContainer>
          <Navbar />
          <HeroCard entity={entity[0]} />
        </FluidContainer>
        <BannerFooter>
          <span>CLOSING IN</span>
          <span>
            <strong>22</strong> days
          </span>
        </BannerFooter>
      </Banner>
      <FluidContainer>
        {notification && <LargeNotification HandleAction={HandleAction} />}
        <VoteHeader>
          <h2>Votes</h2>
        </VoteHeader>
        <VoteSection data-cy="vote-section">
          {entity.map((el, idx) => {
            if (idx === 0) {
              return <Fragment key={idx} />;
            } else {
              return <VoteCard key={idx} entity={el} HandleCase={HandleCase} />;
            }
          })}
        </VoteSection>
        <SubmitInvitation />
        <Footer />
      </FluidContainer>
    </>
  );
}
