import { Sidebar } from "./Sidebar";
import Dashboard from "./Dashboard";

export const V3content = () => {
    return (
        <div className="flex h-screen w-full bg-gray-50 dark:bg-neutral-950">
            <Sidebar />
            <Dashboard />
        </div>
    );
};
