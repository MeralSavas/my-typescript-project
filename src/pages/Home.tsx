import axios from "axios";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const url = "https://6352dcdca9f3f34c374a7bbe.mockapi.io/todos";

interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<TodoType[]>(url);
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="main">
      <InputForm />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
