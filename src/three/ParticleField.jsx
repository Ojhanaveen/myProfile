import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Particles() {
  const pointsRef = useRef()
  const count = 500

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 7
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.6
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = t * 0.04
    pointsRef.current.rotation.x = Math.sin(t * 0.08) * 0.12
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        sizeAttenuation
        transparent
        opacity={0.7}
        color="#C15F3C"
        depthWrite={false}
      />
    </points>
  )
}

function CoreOrb({ position, radius, opacity, speed }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * speed
    meshRef.current.rotation.z = t * speed * 0.5
  })

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[radius, 1]} />
      <meshBasicMaterial color="#78392A" wireframe transparent opacity={opacity} />
    </mesh>
  )
}

const ParticleField = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <CoreOrb position={[4, 1.6, -1.5]} radius={1.9} opacity={0.4} speed={0.12} />
        <CoreOrb position={[-4.2, -1.8, -3]} radius={1.1} opacity={0.3} speed={-0.09} />
        <Particles />
      </Canvas>
    </div>
  )
}

export default ParticleField
