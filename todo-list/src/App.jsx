
import { LayoutList } from "lucide-react";
import AddTodo from "./components/add-todo";
import Card from "./components/card";
import Container from "./components/UI/container";
import { useTodo } from "./stores/useTodo";
import PlantUI from "./components/plant-ui";
import ListLoaderUi from "./components/list-loader";

function App() {
  const tasks = useTodo((state) => state.tasks) || [];
  console.log(tasks)

  return (
    <div className="container bg-green-100 h-screen overflow-hidden min-w-full p-4">
      <div className="w-full md:max-w-7xl mx-auto flex flex-3 gap-4 h-full">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4 w-full">
          <Container>
            <div className="flex items-center justify-between h-full w-full">
              <p>{tasks.length} tasks</p>
              <p>completed {tasks.filter((task) => task.completed).length}</p>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full mt-2">
              <div
                className="h-full bg-green-700 rounded-full transition-all"
                style={{
                  width: `${tasks.length
                    ? (tasks.filter((task) => task.completed).length / tasks.length) * 100
                    : 0}%`,
                }}
              ></div>
            </div>
          </Container>
          {tasks.length === 0 ?
            (
              <>
              </>
            ) : (
              <Container>
                <PlantUI />
              </Container>
            )
          }
        </div>
          
        <Container>
          <h2 className="text-xl font-bold my-2 shrink-0">
            Todo List
          </h2>

          <AddTodo />

          <div className="flex-1 min-h-0 overflow-y-auto scrollbar-none">
            {
              tasks.length === 0 ?
                (
                  <div className="flex flex-col items-center justify-center h-full py-10">
                    <ListLoaderUi />
                    <p className="text-gray-400 font-bold text-xl">Add New Task</p>
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
    </div>
  );
}

export default App;
