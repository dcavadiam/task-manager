import { EditTaskCard } from "@/components/editTaskCard"
import { TaskCard } from "@/components/taskCard"
import { Task } from "@/types/task"

interface TasksListProps {
    tasks: Task[];
    filter: string;
    editingID: string | null;
    setEditingID: (id: string | null) => void;
    handleDeleteTask: (id: string) => void;
    handleChangeStatus: (id: string, status: Task["status"]) => void;
    handleSaveEdit: (id: string) => void;
    editTitleRef: React.RefObject<HTMLInputElement>;
    editDescriptionRef: React.RefObject<HTMLInputElement>;
}

export const TasksList = ({ tasks, filter, editingID, setEditingID, handleDeleteTask, handleChangeStatus, handleSaveEdit, editTitleRef, editDescriptionRef }: TasksListProps) => {
    return (
        <section>
            <ul className="flex gap-4 flex-wrap mt-8 ">
                {
                    tasks && tasks.map(
                        (task: Task) => filter === "all" || task.status === filter
                            ? editingID !== task.id
                                ? <TaskCard key={task.id} task={task} handleDeleteTask={handleDeleteTask} setEditingID={setEditingID} handleChangeStatus={handleChangeStatus} />

                                : <EditTaskCard key={task.id} task={task} editTitleRef={editTitleRef} editDescriptionRef={editDescriptionRef} setEditingID={setEditingID} handleSaveEdit={handleSaveEdit} />
                            : null
                    )
                }
            </ul>
        </section>
    )
}