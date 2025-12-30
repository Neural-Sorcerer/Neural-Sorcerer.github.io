import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function LatentSpace({ count = 2000 }) {
    const mesh = useRef()

    const particles = useMemo(() => {
        const temp = []
        for (let i = 0; i < count; i++) {
            // Distribution: Sphere-like but stretched
            const r = Math.random() * 30 + 10
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)

            const x = r * Math.sin(phi) * Math.cos(theta)
            const y = r * Math.sin(phi) * Math.sin(theta)
            const z = (r * Math.cos(phi)) * 0.5 // Flattened slightly

            temp.push({
                x, y, z,
                initialX: x, initialY: y, initialZ: z,
                speed: 0.2 + Math.random() * 0.5,
                offset: Math.random() * 100
            })
        }
        return temp
    }, [count])

    const dummy = useMemo(() => new THREE.Object3D(), [])
    const color1 = new THREE.Color("#45A29E") // Neon Cyan
    const color2 = new THREE.Color("#66FCF1") // Neon Teal
    const color3 = new THREE.Color("#C5C6C7") // Dim White

    useFrame((state) => {
        if (!mesh.current) return
        const time = state.clock.getElapsedTime()

        particles.forEach((particle, i) => {
            // Gentle floating motion around initial position
            const { initialX, initialY, initialZ, speed, offset } = particle

            const movedX = initialX + Math.sin(time * speed * 0.2 + offset) * 2
            const movedY = initialY + Math.cos(time * speed * 0.2 + offset) * 2
            const movedZ = initialZ + Math.sin(time * speed * 0.1 + offset) * 2

            dummy.position.set(movedX, movedY, movedZ)

            // Pulse scale
            const s = (Math.sin(time * 2 + offset) + 2) * 0.08 // Much smaller particles
            dummy.scale.set(s, s, s)
            dummy.rotation.set(s, s, s)

            dummy.updateMatrix()
            mesh.current.setMatrixAt(i, dummy.matrix)

            // Color variation based on position
            const color = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3
            mesh.current.setColorAt(i, color)
        })

        mesh.current.instanceMatrix.needsUpdate = true
        if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true
    })

    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#66FCF1" />
            <instancedMesh ref={mesh} args={[null, null, count]}>
                <icosahedronGeometry args={[1, 0]} /> {/* Clean geometry */}
                <meshBasicMaterial transparent opacity={0.8} toneMapped={false} />
            </instancedMesh>
        </>
    )
}
