import Link from "next/link";
import fs from "fs";
import path from "path";

export default function Home() {
  const projectsDir = path.join(process.cwd(), "app/projects");
  let projects: string[] = [];
  
  if (fs.existsSync(projectsDir)) {
    projects = fs.readdirSync(projectsDir).filter((file) => {
      return fs.statSync(path.join(projectsDir, file)).isDirectory() && !file.startsWith('[');
    });
  }

  return (
    <div className="min-h-screen p-8 bg-zinc-50 text-zinc-900 font-sans">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-2">UI Design Canvas</h1>
        <p className="text-zinc-500">Your local Figma alternative for coded UI designs.</p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <div className="col-span-full p-12 border-2 border-dashed border-zinc-200 rounded-xl text-center">
              <p className="text-zinc-500 mb-4">No projects found yet.</p>
              <p className="text-sm text-zinc-400">Create a new project by requesting one in the AI chat.</p>
            </div>
          ) : (
            projects.map((project) => (
              <Link 
                key={project} 
                href={`/projects/${project}`}
                className="group p-6 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md hover:border-zinc-300 transition-all"
              >
                <h2 className="font-semibold text-lg capitalize mb-2 group-hover:text-blue-600 transition-colors">
                  {project.replace(/-/g, ' ')}
                </h2>
                <span className="text-sm text-zinc-500">View Canvas &rarr;</span>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
