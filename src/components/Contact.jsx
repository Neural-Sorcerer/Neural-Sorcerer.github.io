import { Mail, Linkedin, Github, FileText } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-t from-cyber-blue/10 to-transparent blur-3xl pointer-events-none" />

            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-purple-500">Collaborate?</span>
            </h2>

            <p className="text-gray-400 text-xl max-w-2xl mb-12">
                I'm always open to discussing new research opportunities, complex vision problems, or just chatting about the future of AI.
            </p>

            <div className="flex flex-wrap gap-6 justify-center relative z-10">
                <a
                    href="mailto:maksym.labs@gmail.com"
                    className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors"
                >
                    <Mail className="w-5 h-5" />
                    Send Email
                </a>

                <a
                    href="https://linkedin.com/in/Max-AI-Vision"
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
                >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </a>

                <a
                    href="https://github.com/Neural-Sorcerer"
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
                >
                    <Github className="w-5 h-5" />
                    GitHub
                </a>

                <a
                    href="/assets/docs/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
                >
                    <FileText className="w-5 h-5" />
                    Resume
                </a>
            </div>

            <footer className="absolute bottom-6 text-gray-700 text-sm font-mono">
                &copy; {new Date().getFullYear()} Neural Sorcerer. Built with React & Three.js.
            </footer>
        </section>
    )
}
