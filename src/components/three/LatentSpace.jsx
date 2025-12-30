import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function LatentSpace({ count = 3000 }) {
    const mesh = useRef()
    const light = useRef()

    // Generate random particles resembling a high-dim latent space projected to 3D
    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp
    }, [count])

    // Dummy object for efficient instanced mesh updates
    const dummy = useMemo(() => new THREE.Object3D(), [])

    useFrame((state) => {
        if (!mesh.current) return

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle

            // Update time
            t = particle.t += speed / 2
            const time = state.clock.getElapsedTime()

            // Organic movement: Lisajous-like curves + noise
            const x = Math.cos(t) + Math.sin(t * 1) / 10 + xFactor + Math.cos(time / 10) * (i % 10)
            const y = Math.sin(t) + Math.cos(t * 2) / 10 + yFactor + Math.sin(time / 10) * (i % 10)
            const z = Math.cos(t) + Math.sin(t * 3) / 10 + zFactor + Math.cos(time / 20)

            // Mouse interaction (repulsion/attraction)
            // Convert normalized mouse coords (-1 to 1) to world space approximation if needed
            // detailed interaction logic can go here

            dummy.position.set(x, y, z)

            // Scale based on distance or arbitrary factor
            const s = Math.cos(t)
            dummy.scale.set(s, s, s)
            dummy.rotation.set(s * 5, s * 5, s * 5)

            dummy.updateMatrix()

            mesh.current.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <>
            <pointLight ref={light} distance={40} intensity={8} color="#4c1d95" />
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <dodecahedronGeometry args={[0.2, 0]} />
                <meshPhongMaterial color="#06b6d4" transparent opacity={0.6} />
            </instancedMesh>
        </>
    )
}
