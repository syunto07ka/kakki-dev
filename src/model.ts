import * as React from 'react';

export type Article = {
  id: number;
  title: string;
  date: string;
  description: React.FC;
}

export type Mode = 'white' | 'black';

export type Theme = {
  background: '#fff' | '#333333',
  base: '#333333' | '#fff',
  main: '#f06060'
};
