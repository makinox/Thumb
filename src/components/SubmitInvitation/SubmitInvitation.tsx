import {SubmitContainer} from './styles';

export default function SubmitInvitation({HandleClick}: {HandleClick: () => void}) {
  return (
    <SubmitContainer>
      <div>
        <span>Is there anyone else you wouldwant us to add?</span>
        <button onClick={HandleClick}>Submit a name</button>
      </div>
    </SubmitContainer>
  );
}
