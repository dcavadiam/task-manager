'use client';

import { Task } from "@/types/task";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type TaskCardProps = {
    task: Task;
    editTitleRef: React.RefObject<HTMLInputElement>;
    editDescriptionRef: React.RefObject<HTMLInputElement>;
    setEditingID: (id: string | null) => void;
    handleSaveEdit: (id: string) => void;
}

export const EditTaskCard = ({ task, editTitleRef, editDescriptionRef, setEditingID, handleSaveEdit }: TaskCardProps) => {

    return (

        <Card key={task.id} className="w-full md:max-w-[300px] flex flex-col gap-2 p-4">
            <CardContent className="flex flex-col gap-2 p-4">
                <Input type="text" placeholder="Enter title" id="title" className="mb-4" ref={editTitleRef} required />
                <Input type="text" placeholder="Enter description" id="description" ref={editDescriptionRef} required />
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4">
                <Button variant="outline" className="flex-1" onClick={() => {
                    handleSaveEdit(task.id)
                }}>
                    Save
                </Button>
                <Button variant="outline" className="flex-1" onClick={() =>
                    setEditingID(null)
                }>
                    Cancel
                </Button>
            </CardFooter>
        </Card>
    )
}

