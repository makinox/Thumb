import {Container} from './styles';
import {GiCancel} from 'react-icons/gi';

export default function LargeNotification() {
  return (
    <Container>
      <div>
        <h3>Speak out.Be heard.</h3>
        <h4>Be counted</h4>
      </div>
      <div>
        <p>
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy:
          You share your opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <div>
        <GiCancel />
      </div>
    </Container>
  );
}
