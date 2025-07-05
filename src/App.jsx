import React from 'react';
import Background from './component/Background';
import MenuSelect from './component/MenuSelect';

const App = () => {
  const charSelect = [
    {start: 0, end: 20, src: './src/assets/trailer/nice(linlin)-trailer.mp4' },
    {start: 0, end: 27, src: './src/assets/trailer/e-soul-trailer.mp4' },
    {start: 0, end: 20, src: './src/assets/trailer/ahu-trailer.mp4' },
    {start: 0, end: 30, src: './src/assets/trailer/cyan-trailer.mp4' },
    {start: 0, end: 27, src: './src/assets/trailer/loli-trailer.mp4' },
    {start: 0, end: 26, src: './src/assets/trailer/the-jonniees-trailer.mp4' },
    {start: 0, end: 28, src: './src/assets/trailer/ghostblade-trailer.mp4' },
    {start: 0, end: 14, src: './src/assets/trailer/dragon-boy-trailer.mp4' },
    {start: 0, end: 28, src: './src/assets/trailer/queen-trailer.mp4' },
    {start: 0, end: 28, src: './src/assets/trailer/x-trailer.mp4' },
  ]
  return (
    <div className="relative min-h-[100vh] text-white overflow-hidden">
      <Background data={charSelect[10 - 1]} />
      <MenuSelect/>
    </div>
  );
};

export default App;
