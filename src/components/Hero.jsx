import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import LatentSpace from './three/LatentSpace'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-space-black overflow-hidden m-0 p-0">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 50], fov: 75 }} gl={{ antialias: true, alpha: true }}>
                    <color attach="background" args={['#030305']} />
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={null}>
                        <LatentSpace />
                    </Suspense>
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue via-white to-purple-500 mb-4 tracking-tight drop-shadow-2xl">
                        NEURAL SORCERER
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-400 font-mono tracking-widest uppercase">
                        Computer Vision Engineer & Researcher
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10"
                >
                    <div className="text-sm text-gray-500 font-mono animate-bounce">
                        ↓ SCROLL TO EXPLORE ↓
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
