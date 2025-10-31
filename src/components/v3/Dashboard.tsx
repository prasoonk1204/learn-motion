export default function Dashboard() {
    return (
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Overview
            </h1>

            {/* Top Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Total Users", value: "2,543", change: "+12%" },
                    { title: "Revenue", value: "$45,257", change: "+8%" },
                    { title: "Active Sessions", value: "1,325", change: "+5%" },
                    { title: "Conversion Rate", value: "12.3%", change: "-2%" },
                ].map((stat, i) => (
                    <div
                        key={i}
                        className="bg-white dark:bg-neutral-900 shadow-sm border border-gray-100 dark:border-neutral-800 rounded-xl p-5"
                    >
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {stat.title}
                        </h3>
                        <p className="text-2xl font-semibold mt-1 text-gray-800 dark:text-white">
                            {stat.value}
                        </p>
                        <p
                            className={`text-xs mt-1 ${
                                stat.change.startsWith("+")
                                    ? "text-green-500"
                                    : "text-red-500"
                            }`}
                        >
                            {stat.change} since last month
                        </p>
                    </div>
                ))}
            </div>

            {/* Placeholder charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-5 h-64 flex items-center justify-center text-gray-400">
                    Chart Placeholder (User Activity)
                </div>
                <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-5 h-64 flex items-center justify-center text-gray-400">
                    Chart Placeholder (Revenue Overview)
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-xl p-5">
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">
                    Recent Activity
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    User #1 performed an action · 2 hours ago
                </p>
            </div>
        </div>
    );
}
