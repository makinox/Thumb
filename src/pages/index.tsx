import {FluidContainer, Footer, HeroCard, LargeNotification, Navbar, SubmitInvitation} from '../components';
import {Banner} from './styles';

export default function Index() {
  return (
    <>
      <Banner image="https://picsum.photos/id/1033/1460/700">
        <FluidContainer>
          <Navbar />
          <HeroCard />
          <div>
            <span>Closing</span>
            <span>20 days</span>
          </div>
        </FluidContainer>
      </Banner>
      <FluidContainer>
        <LargeNotification />
        <div>
          <h2>Votes</h2>
        </div>
        <SubmitInvitation />
        <Footer />
      </FluidContainer>
    </>
  );
}
