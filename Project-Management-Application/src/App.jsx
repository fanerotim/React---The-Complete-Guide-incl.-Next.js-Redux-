import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import { useState } from "react";

function App() {

    const [isFormOpen, setIsFormOpen] = useState(true);

    return (
        <div className="flex grow gap-6 w-full min-h-dvh items-end mt-auto">
            <Sidebar />
            {isFormOpen
                ? <Form />
                : <NoProjects />
            }
        </div>
    );
}

export default App;
