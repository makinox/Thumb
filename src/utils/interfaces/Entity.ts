import VoteI from './Votes';
export default interface EntityI {
  id?: number;
  url?: string;
  name?: string;
  time?: string;
  image?: string;
  category?: string;
  description?: string;
  votes?: Array<VoteI>;
}
