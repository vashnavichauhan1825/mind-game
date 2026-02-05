export interface TileProps {
  id: number;
  iconId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface WelcomeScreenProps {
  onStart: () => void;
}
