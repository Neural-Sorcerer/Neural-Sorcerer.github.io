import { Mail, Linkedin, Github, FileText } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden bg-obsidian-light">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-neon-teal/50 to-transparent" />

            <div className="absolute inset-0 bg-subtle-grid opacity-10 pointer-events-none" />

            <h2 className="text-sm font-mono text-neon-cyan tracking-widest mb-6 uppercase">
                03. Connection // Let's Talk
            </h2>

            <h3 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white drop-shadow-lg">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-teal to-blue-500">Collaborate?</span>
            </h3>

            <p className="text-dim-white text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
                I'm always open to discussing new research opportunities, complex vision problems, or just chatting about the future of AI.
            </p>

            <div className="flex flex-wrap gap-6 justify-center relative z-10 w-full max-w-4xl">
                <a
                    href="mailto:maksym.labs@gmail.com"
                    className="flex items-center gap-3 px-8 py-4 bg-white text-obsidian-dark font-bold rounded-full hover:bg-neon-teal transition-all duration-300 hover:scale-105 shadow-lg group"
                >
                    <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Send Email
                </a>

                <a
                    href="https://linkedin.com/in/Max-AI-Vision"
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/50 transition-all duration-300 hover:scale-105"
                >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </a>

                <a
                    href="https://github.com/Neural-Sorcerer"
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/50 transition-all duration-300 hover:scale-105"
                >
                    <Github className="w-5 h-5" />
                    GitHub
                </a>

                <a
                    href="/assets/docs/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/50 transition-all duration-300 hover:scale-105"
                >
                    <FileText className="w-5 h-5" />
                    Resume
                </a>
            </div>

            <footer className="absolute bottom-6 text-gray-600 text-xs font-mono tracking-widest uppercase">
                &copy; {new Date().getFullYear()} Neural Sorcerer // Built with React & Three.js
            </footer>
        </section>
    )
}
