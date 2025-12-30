import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            className="group relative bg-[#13151A] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-neon-cyan/10 transition-all duration-500 flex flex-col h-full ring-1 ring-white/5 hover:ring-neon-teal/30"
        >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-obsidian-dark/30 group-hover:bg-transparent transition-colors z-10 duration-500" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out filter brightness-90 group-hover:brightness-110"
                />
                {/* Corner Accent */}
                <div className="absolute top-4 right-4 z-20 bg-obsidian-dark/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 border border-white/10">
                    <ArrowUpRight className="w-4 h-4 text-neon-teal" />
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-teal transition-colors tracking-tight">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-light">
                    {project.description}
                </p>

                {/* Footer / Tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] font-mono tracking-wider font-medium px-2 py-1 bg-white/5 rounded text-gray-400 border border-transparent group-hover:border-white/10 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
