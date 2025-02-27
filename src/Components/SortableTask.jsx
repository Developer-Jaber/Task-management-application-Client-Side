import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const SortableTask = ({ task, onDelete }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: task._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="hover:bg-gray-50 mb-4 p-4 rounded-lg transition-colors"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800 text-lg">{task.title}</h3>
          <p className="mt-1 text-gray-600 text-sm">{task.description}</p>
          <div className="flex items-center mt-2">
            <span
              className={`text-sm font-semibold ${
                task.status === 'Completed'
                  ? 'text-green-500'
                  : task.status === 'In Progress'
                  ? 'text-blue-500'
                  : 'text-yellow-500'
              }`}
            >
              {task.status}
            </span>
          </div>
        </div>
        <button
          onClick={() => onDelete(task._id)}
          className="focus:outline-none text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};