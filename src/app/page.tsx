'use client'

import { useState } from "react";
import { useTasks } from "@/hooks/useTasks";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Filters } from "@/containers/filters";
import { TasksList } from "@/containers/tasks-list";

export default function Home() {
  const { tasks, titleRef, descriptionRef, editTitleRef, editDescriptionRef, handleFormSubmit, handleDeleteTask, handleSaveEdit, handleChangeStatus, editingID, setEditingID } = useTasks();

  const [filter, setFilter] = useState<string>("all");


  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-8 sm:px-8">
      <Card className="w-full max-w-[750px] p-3">
        <CardHeader >
          <CardTitle className="text-2xl font-bold">Task Manager</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleFormSubmit()
            }}
          >
            <Label htmlFor="title" className="text-base">Title</Label>
            <Input type="text" placeholder="Enter title" id="title" className="mb-4" ref={titleRef} required />
            <Label htmlFor="description" className="text-base">Description</Label>
            <Input type="text" placeholder="Enter description" id="description" ref={descriptionRef} required />
            <Button className="mt-4" type="submit">
              Add Task
            </Button>
          </form>
          <Filters setFilter={setFilter} />
          <TasksList 
            tasks={tasks} 
            filter={filter} 
            editingID={editingID} 
            setEditingID={setEditingID} 
            handleDeleteTask={handleDeleteTask} 
            handleChangeStatus={handleChangeStatus} 
            handleSaveEdit={handleSaveEdit} 
            editTitleRef={editTitleRef} 
            editDescriptionRef={editDescriptionRef} />
        </CardContent>
      </Card>
    </main>
  );
}