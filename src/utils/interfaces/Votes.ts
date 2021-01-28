export default interface VoteI {
  id?: number;
  userId?: number;
  vote?: 'Like' | 'Dislike';
}
