interface BaseButtonProps {
  to: string;
  color: string;
  background: string;
  fontSize: string;
  height: string;
  width: string;
  children: string | JSX.Element;
  useAble: boolean;
}

interface ToppageLink
  extends Omit<BaseButtonProps, 'children' | 'color' | 'height' | 'width' | 'fontSize'> {
  name: string;
}
