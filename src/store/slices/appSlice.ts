import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faComment,
  faGem,
  faThumbsUp,
} from '@fortawesome/free-regular-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
interface StateProp {
  title: string;
  subtitle: string;
  icon: IconProp;
  number: number;
}
const initValue: StateProp[] = [
  {
    title: 'Like',
    subtitle: 'Likes',
    icon: faThumbsUp,
    number: 0,
  },
  {
    title: 'Comment',
    subtitle: 'Comments',
    icon: faComment,
    number: 0,
  },
  {
    title: 'Point',
    subtitle: 'Points',
    icon: faGift,
    number: 0,
  },
  {
    title: 'Diamond',
    subtitle: 'Diamonds',
    icon: faGem,
    number: 0,
  },
];
const maxRandom = 1000;
const appSlice = createSlice({
  name: 'app',
  initialState: initValue,
  reducers: {
    random: (state) => {
      state.map((s) => {
        s.number = Math.floor(Math.random() * maxRandom);
      });
    },
  },
});
export const appSelector = (state: RootState) => state.appSlice;
export const { random } = appSlice.actions;
export default appSlice.reducer;
