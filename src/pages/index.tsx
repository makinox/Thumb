import {FluidContainer, Footer, HeroCard, LargeNotification, Navbar, SubmitInvitation, VoteCard} from '../components';
import {Banner, BannerFooter, VoteHeader, VoteSection} from './styles';

export default function Index() {
  return (
    <>
      <Banner image="https://picsum.photos/id/1033/1460/700">
        <FluidContainer>
          <Navbar />
          <HeroCard />
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
          {[...new Array(4)].map((el, idx) => (
            <VoteCard key={idx} />
          ))}
        </VoteSection>
        <SubmitInvitation />
        <Footer />
      </FluidContainer>
    </>
  );
}
