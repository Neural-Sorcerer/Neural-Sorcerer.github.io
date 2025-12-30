import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-deep-void rounded-xl overflow-hidden border border-white/5 hover:border-cyber-blue/50 transition-colors duration-500"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-purple-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Image Container with "Distortion" effect simulation via CSS scale/blur */}
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-space-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out filter grayscale group-hover:grayscale-0"
                />
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors">
                        {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-cyber-blue transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
