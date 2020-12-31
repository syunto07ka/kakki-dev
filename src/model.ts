import * as React from 'react';

export type Store = {
  activeTab: ActiveTab;
  setActiveTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
}

export type Article = {
  id: number;
  title: string;
  date: string;
  description: React.FC;
  tags?: Tag[];
}

export type Tag = {
  name: string;
  displayName: string;
  labelColor: string;
  letterColor: string;
}

export type Mode = 'white' | 'black';

export type Theme = {
  background: '#fff' | '#333333',
  base: '#333333' | '#fff',
  main: '#f06060'
};

export type ActiveTab = 'blog' | 'profile';
