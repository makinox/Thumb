import {FluidContainer, Footer, HeroCard, LargeNotification, Navbar, SubmitInvitation} from '../components';
import {Banner, BannerFooter, VoteHeader} from './styles';

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
        <SubmitInvitation />
        <Footer />
      </FluidContainer>
    </>
  );
}
