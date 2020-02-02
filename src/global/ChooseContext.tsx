import React, { useContext, FC, useState } from 'react';
import { itemData } from '../data/itemdata';

const useGlobalState = () => useContext(useGlobalState.context);
useGlobalState.context = React.createContext<GlobalState>(null as any);

const initialData = Array.from<number>({ length: itemData.length }).fill(0);

export const GlobalStateProvider: FC = ({ children }) => {
  const [chosenItemData, setChosenItemData] = useState<number[]>(initialData);

  const resetCart = () => {
    setChosenItemData(initialData);
  };

  const hundleMinus = (index: number) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setChosenItemData((curr) => {
        const currData = curr[index];
        const currDatas = [...curr];
        if (currData <= 0) {
          return curr;
        } else {
          currDatas.splice(index, 1, currData - 1);
          return currDatas;
        }
      });
    };
  };

  const hundlePlus = (index: number) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      setChosenItemData((curr) => {
        const currData = curr[index];
        const currDatas = [...curr];
        currDatas.splice(index, 1, currData + 1);
        return currDatas;
      });
    };
  };

  return (
    <useGlobalState.context.Provider
      value={{ chosenItemData, setChosenItemData, resetCart, hundleMinus, hundlePlus }}
      children={children}
    />
  );
};

export default useGlobalState;
