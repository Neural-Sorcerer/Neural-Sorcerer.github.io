import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import LatentSpace from './three/LatentSpace'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden m-0 p-0 bg-obsidian-dark flex items-center justify-center">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas camera={{ position: [0, 0, 40], fov: 60 }} gl={{ antialias: true, alpha: true }}>
                    <fog attach="fog" args={['#0B0C10', 20, 60]} /> {/* Depth fog */}
                    <Suspense fallback={null}>
                        <LatentSpace />
                    </Suspense>
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="text-center"
                >
                    <h2 className="text-neon-cyan font-mono text-sm md:text-base tracking-[0.2em] mb-4">
                        SYSTEM_ONLINE // V.2.0
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-2xl">
                        NEURAL<span className="text-transparent bg-clip-text bg-gradient-to-br from-neon-teal to-blue-600">SORCERER</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-dim-white max-w-2xl mx-auto font-light leading-relaxed">
                        Architecting <span className="text-neon-teal font-medium">Vision Systems</span> & <span className="text-neon-teal font-medium">Latent Geometries</span>
                        <br className="hidden md:block" /> for the physical world.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute bottom-12"
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Explore</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan/0 via-neon-cyan to-neon-cyan/0 animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
