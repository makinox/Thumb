import {FluidContainer, Footer, HeroCard, LargeNotification, Navbar, SubmitInvitation} from '../components';

export default function Index() {
  return (
    <FluidContainer>
      <Navbar />
      <HeroCard />
      <div>
        <span>Closing</span>
        <span>20 days</span>
      </div>
      <LargeNotification />
      <div>
        <h2>Votes</h2>
      </div>
      <SubmitInvitation />
      <Footer />
    </FluidContainer>
  );
}
