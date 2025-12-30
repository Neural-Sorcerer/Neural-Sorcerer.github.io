import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Code2, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-space-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Code2 className="text-cyber-blue w-6 h-6" />
                    <span className="font-mono font-bold text-lg tracking-wider text-white">
                        NEURAL<span className="text-gray-500">_SORCERER</span>
                    </span>
                </div>

                <ul className="hidden md:flex items-center gap-8">
                    {['Research', 'Projects', 'About', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-sm uppercase tracking-widest text-gray-400 hover:text-cyber-blue transition-colors"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <a href="https://github.com/Neural-Sorcerer" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/Max-AI-Vision" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </motion.nav>
    )
}
