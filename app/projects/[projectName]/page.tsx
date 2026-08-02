import { notFound } from "next/navigation";

export default async function ProjectCanvas({ params }: { params: Promise<{ projectName: string }> }) {
  const { projectName } = await params;
  
  // In a real application, you might dynamically import a component based on the projectName
  // For now, this serves as the isolated canvas for the given project.
  return (
    <div className="w-full min-h-screen bg-background relative isolate">
      {/* 
        This is where the pixel-perfect UI will be built for the project. 
        It has zero margins/padding from the root layout.
      */}
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
        Canvas for Project: {projectName}
      </div>
    </div>
  );
}
