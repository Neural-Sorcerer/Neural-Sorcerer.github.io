import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 relative bg-obsidian-dark">
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 bg-subtle-grid opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20">
                    <h2 className="text-sm font-mono text-neon-cyan tracking-widest mb-4 uppercase">
                        01. Portfolio // Selected Works
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Research & Engineering
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
