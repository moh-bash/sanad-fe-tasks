
import { LayoutList } from "lucide-react";
import AddTodo from "./components/add-todo";
import Card from "./components/card";
import Container from "./components/UI/container";
import { useTodo } from "./stores/useTodo";

function App() {
  const tasks = useTodo((state) => state.tasks) || [];
  console.log(tasks)

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-green-100 h-screen overflow-hidden min-w-full">
       <div>
        <Container>
          jj
        </Container>
      </div>
      
      <Container>
        <h2 className="text-xl font-bold my-2 shrink-0">
          Todo List
        </h2>

        <AddTodo />

        <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none">
          {
            tasks.length === 0  ?
              (
                <div className="flex flex-col items-center justify-center h-full">
                  <LayoutList className="text-gray-400 text-9xl" size={50}/>
                  <p className="text-gray-500">No tasks.</p>
                </div>
              )
              :
              (
                tasks.map((task) => (
                  <Card key={task.id} task={task} />
                ))
              )
          }

        </div>
      </Container>
    </div>
  );
}

export default App;
