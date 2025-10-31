// import { V1content } from "@/components/v1/content";
import { V2content } from "@/components/v2/content";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            {/* <V1content /> */}
            <V2content />
        </div>
    );
}
