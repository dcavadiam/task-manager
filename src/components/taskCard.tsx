'use client';

import { Task, TaskStatus } from "@/types/task";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Status } from "./status";

type TaskCardProps = {
    task: Task;
    setEditingID: (id: string) => void;
    handleDeleteTask: (id: string) => void;
    handleChangeStatus: (id: string, status: TaskStatus) => void;
}

export const TaskCard = ({ task, setEditingID, handleDeleteTask, handleChangeStatus }: TaskCardProps) => {
    return (
        <Card key={task.id} className="w-full md:max-w-[300px] flex flex-col gap-2 p-4">
            <CardContent className="flex flex-col gap-2 p-4">
                <Status status={task.status} />
                <h2 className="text-lg font-bold">{task.title}</h2>
                <p className="text-sm">{task.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 gap-3
            ">
                {
                    task.status !== "completed" &&
                    <Button variant="outline" className="flex-1" onClick={() => handleChangeStatus(task.id, "completed")}>
                        Complete
                    </Button>
                }
                <Button variant="outline" className="flex-1" onClick={() => setEditingID(task.id)}>
                    Edit
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => {
                    handleDeleteTask(task.id)
                }}>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    )
}

