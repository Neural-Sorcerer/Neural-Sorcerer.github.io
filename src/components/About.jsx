import { motion } from 'framer-motion'
import { Brain, Cpu, Database, Eye } from 'lucide-react'

export default function About() {
    const stats = [
        { icon: <Brain className="w-6 h-6" />, label: "Deep Learning", value: "5+ Years" },
        { icon: <Eye className="w-6 h-6" />, label: "Computer Vision", value: "Expert" },
        { icon: <Cpu className="w-6 h-6" />, label: "Model Optimization", value: "SOTA" },
        { icon: <Database className="w-6 h-6" />, label: "Data Pipelines", value: "Scale" },
    ]

    return (
        <section id="about" className="py-32 px-6 bg-[#0E1015] border-y border-white/5 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
                <div className="w-[500px] h-[500px] bg-neon-teal blur-[150px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8">
                        <h2 className="text-sm font-mono text-neon-cyan tracking-widest mb-4 uppercase">
                            02. Profile // Background
                        </h2>
                        <h3 className="text-4xl font-bold mb-4 text-white">
                            Architecture of a <span className="text-neon-teal">Neural Engineer</span>
                        </h3>
                    </div>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I am a <strong className="text-white">Team Leader & Senior AI Researcher</strong> at DeltaX, specializing in deploying state-of-the-art Computer Vision solutions to real-world edge devices. My work bridges the gap between theoretical deep learning and practical, high-performance inference.
                        </p>
                        <p>
                            From <strong className="text-white">Autonomous Driving</strong> perception pipelines to efficient <strong className="text-white">Super-Resolution</strong> challenges, I focus on optimizing neural networks for speed without sacrificing accuracy. I have engineered solutions that improved system accuracy by 18% and reduced model size by 4x.
                        </p>
                        <p>
                            My background includes a Master's in Computer Science from Soongsil University and a track record of successful projects involving Deepfake Detection, Gaze Estimation, and large-scale Data Engineering.
                        </p>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-obsidian-dark p-8 rounded-2xl border border-white/5 hover:border-neon-teal/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-neon-teal/5"
                        >
                            <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center text-neon-teal mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-neon-teal/10">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</h3>
                            <p className="text-gray-500 font-mono text-xs uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}
