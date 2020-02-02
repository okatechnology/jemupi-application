interface BaseButtonProps {
  to: string;
  color: string;
  background: string;
  bgImage?: string;
  fontSize: string;
  height: string;
  width: string;
  children?: string | JSX.Element;
  useable: boolean;
}

interface ToppageLink
  extends Omit<BaseButtonProps, 'children' | 'color' | 'height' | 'width' | 'fontSize'> {
  name: string;
}

interface ItemData {
  type: 'clothes';
  name: string;
  imagePath: string;
}

interface GlobalState {
  setChosenItemData: React.Dispatch<React.SetStateAction<number[]>>;
  chosenItemData: number[];
  hundleMinus: (index: number) => (e: React.MouseEvent) => void;
  hundlePlus: (index: number) => (e: React.MouseEvent) => void;
  resetCart: () => void;
}
