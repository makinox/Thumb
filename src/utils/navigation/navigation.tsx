import {Home, ContactUs, HowItWorks, LogIn, PastTrials, PrivacyPolicy, TermAndConditions} from '../../pages';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/TermAndConditions" component={TermAndConditions} />
        <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route path="/PastTrials" component={PastTrials} />
        <Route path="/HowItWorks" component={HowItWorks} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
