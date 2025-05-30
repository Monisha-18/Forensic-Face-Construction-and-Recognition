import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sidebar from './elements/Sidebar';
import Canvas from './elements/Canvas';

function Dashboard() {
  return (
    <div >
      <DndProvider backend={HTML5Backend}>
        <div className="dashboard">
          <Sidebar />
          <Canvas />
        </div>
      </DndProvider>
    </div>
  );
}

export default Dashboard;
