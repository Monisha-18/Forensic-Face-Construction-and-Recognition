import React from 'react';
import { useDrag } from 'react-dnd';

function DraggableItem({ id, image, type }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type,
        item: { id, image, type  },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <img
            ref={drag}
            src={image}
            alt={type}
            style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
            width="150"
        />
    );
}

export default DraggableItem;