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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-obsidian-dark/90 backdrop-blur-lg border-b border-white/5 py-4 shadow-2xl'
                    : 'bg-transparent py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    <div className="p-2 bg-gradient-to-tr from-neon-teal/20 to-neon-cyan/20 rounded-lg border border-neon-teal/20 group-hover:border-neon-teal/50 transition-colors">
                        <Code2 className="text-neon-teal w-5 h-5" />
                    </div>
                    <span className="font-mono font-bold text-lg tracking-wider text-white group-hover:text-neon-cyan transition-colors">
                        NEURAL<span className="text-gray-600">_SORCERER</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-10">
                    {['Research', 'Projects', 'About', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="text-xs font-medium uppercase tracking-[0.15em] text-dim-white hover:text-neon-teal transition-all duration-300 relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-teal transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    {[
                        { icon: Github, href: "https://github.com/Neural-Sorcerer" },
                        { icon: Linkedin, href: "https://linkedin.com/in/Max-AI-Vision" }
                    ].map((Social, i) => (
                        <a
                            key={i}
                            href={Social.href}
                            target="_blank"
                            className="text-gray-500 hover:text-white hover:scale-110 transition-all duration-300"
                        >
                            <Social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    )
}
