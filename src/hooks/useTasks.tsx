'use client';
import { Task, TaskStatus } from "@/types/task";
import { useRef, useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState<Task[]>(() => localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")?.toString() ?? "[]") : []);
    const [editingID, setEditingID] = useState<string | null>(null);


    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    const editTitleRef = useRef<HTMLInputElement>(null);
    const editDescriptionRef = useRef<HTMLInputElement>(null);

    const handleFormSubmit = (): void => {
        if (titleRef.current && descriptionRef.current) {
            const newTask: Task = {
                id: crypto.randomUUID(),
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                status: "pending"
            }
            const updatedTasks = [
                ...tasks,
                newTask
            ]
            setTasks(updatedTasks)
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            titleRef.current.value = "";
            descriptionRef.current.value = "";
        }
    }

    const handleDeleteTask = (id: string): void => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        console.log(tasks);
    }

    const handleSaveEdit = (id: string): void => {
        if (editTitleRef.current?.value && editDescriptionRef.current?.value) {
            const currentTask = tasks.find(task => task.id === id);
            if (currentTask) {
                const updatedTask: Task = {
                    ...currentTask,
                    title: editTitleRef.current.value,
                    description: editDescriptionRef.current.value
                }
                console.log(updatedTask);
                const updatedTasks = tasks.map(task => task.id === id ? updatedTask : task);
                setTasks(updatedTasks);
                localStorage.setItem("tasks", JSON.stringify(updatedTasks));
                editTitleRef.current.value = "";
                editDescriptionRef.current.value = "";
                setEditingID(null)
            }
        } else {
            alert("Please fill in all fields");
        }
    }

    const handleChangeStatus = (id: string, status: TaskStatus): void => {
        const currentTask = tasks.find(task => task.id === id);
        if (currentTask) {
            const updatedTask: Task = {
                ...currentTask,
                status
            }
            const updatedTasks = tasks.map(task => task.id === id ? updatedTask : task);
            setTasks(updatedTasks);
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        }
    }

    return {
        tasks,
        titleRef,
        descriptionRef,
        editTitleRef,
        editDescriptionRef,
        handleFormSubmit,
        handleDeleteTask,
        handleSaveEdit,
        handleChangeStatus,
        editingID,
        setEditingID,
    }
}
