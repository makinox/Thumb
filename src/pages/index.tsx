import {useContext, Fragment} from 'react';
import {ARMcontext} from '../utils/context/context';
import {Banner, BannerFooter, VoteHeader, VoteSection} from './styles';
import {FluidContainer, Footer, HeroCard, LargeNotification, Navbar, SubmitInvitation, VoteCard} from '../components';

export default function Index() {
  const {entity} = useContext(ARMcontext);

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
        <LargeNotification />
        <VoteHeader>
          <h2>Votes</h2>
        </VoteHeader>
        <VoteSection>
          {entity.map((el, idx) => {
            if (idx === 0) {
              return <Fragment key={idx} />;
            } else {
              return <VoteCard key={idx} entity={el} />;
            }
          })}
        </VoteSection>
        <SubmitInvitation />
        <Footer />
      </FluidContainer>
    </>
  );
}
