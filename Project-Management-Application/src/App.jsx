import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import { useState } from "react";

function App() {

    const [isFormOpen, setIsFormOpen] = useState(true);

    return (
        <div className="flex gap-6 justify-between w-full h-dvh items-end">
            <Sidebar />
            {isFormOpen
                ? <Form />
                : <NoProjects />
            }
        </div>
    );
}

export default App;
