import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { useAppStore } from '../../../shared/store/app-store'

// Floating geometric shapes component
const FloatingShapes: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null)
  const { theme } = useAppStore()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  const shapes = useMemo(() => {
    const isDark = theme === 'dark'
    return [
      {
        position: [-2, 1, -1] as [number, number, number],
        geometry: 'icosahedron',
        color: isDark ? '#3b82f6' : '#1d4ed8',
        scale: 0.5,
      },
      {
        position: [2, -1, -2] as [number, number, number],
        geometry: 'octahedron',
        color: isDark ? '#8b5cf6' : '#7c3aed',
        scale: 0.7,
      },
      {
        position: [0, 2, -3] as [number, number, number],
        geometry: 'tetrahedron',
        color: isDark ? '#06b6d4' : '#0891b2',
        scale: 0.4,
      },
    ]
  }, [theme])

  return (
    <group ref={meshRef}>
      {shapes.map((shape, index) => (
        <Float
          key={index}
          speed={1 + index * 0.2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh position={shape.position} scale={shape.scale}>
            {shape.geometry === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
            {shape.geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
            {shape.geometry === 'tetrahedron' && <tetrahedronGeometry args={[1, 0]} />}
            <meshStandardMaterial
              color={shape.color}
              metalness={0.8}
              roughness={0.2}
              emissive={shape.color}
              emissiveIntensity={0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Interactive particles system
const ParticleSystem: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null)
  const { theme } = useAppStore()
  
  const particleCount = 100
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={theme === 'dark' ? '#ffffff' : '#000000'}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Mouse interaction handler
const MouseInteraction: React.FC = () => {
  const { camera, gl } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    gl.domElement.addEventListener('mousemove', handleMouseMove)
    return () => gl.domElement.removeEventListener('mousemove', handleMouseMove)
  }, [gl])

  useFrame(() => {
    if (camera) {
      camera.position.x += (mouseRef.current.x * 0.5 - camera.position.x) * 0.05
      camera.position.y += (mouseRef.current.y * 0.5 - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)
    }
  })

  return null
}

// Loading fallback component
const Hero3DFallback: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

// Main Hero 3D component
interface Hero3DProps {
  enableInteraction?: boolean
  enableParticles?: boolean
  className?: string
}

export const Hero3D: React.FC<Hero3DProps> = ({
  enableInteraction = true,
  enableParticles = true,
  className = '',
}) => {
  const { theme } = useAppStore()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`relative w-full h-full ${className}`}
    >
      <Suspense fallback={<Hero3DFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: 'high-performance'
          }}
          dpr={[1, 2]}
        >
          {/* Lighting */}
          <ambientLight intensity={theme === 'dark' ? 0.3 : 0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={theme === 'dark' ? 0.8 : 1}
            color={theme === 'dark' ? '#ffffff' : '#fbbf24'}
          />
          <pointLight
            position={[-10, -10, -10]}
            intensity={0.5}
            color={theme === 'dark' ? '#3b82f6' : '#8b5cf6'}
          />

          {/* Environment */}
          <Environment preset={theme === 'dark' ? 'night' : 'dawn'} />

          {/* 3D Content */}
          <FloatingShapes />
          {enableParticles && <ParticleSystem />}
          
          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={enableInteraction}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          {/* Mouse interaction */}
          {enableInteraction && <MouseInteraction />}
        </Canvas>
      </Suspense>
    </motion.div>
  )
}

// Static fallback for mobile/low-end devices
export const Hero3DStatic: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme } = useAppStore()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      <div className="relative">
        {/* Animated gradient background */}
        <div 
          className={`absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500' 
              : 'bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400'
          }`}
          style={{ width: '300px', height: '300px' }}
        />
        
        {/* Geometric shapes with CSS animations */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
            }}
            className={`absolute w-20 h-20 border-2 rounded-lg ${
              theme === 'dark' ? 'border-blue-400' : 'border-blue-600'
            }`}
            style={{ transform: 'rotate(45deg)' }}
          />
          
          <motion.div
            animate={{ 
              rotate: -360,
              y: [-10, 10, -10]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
            className={`absolute w-16 h-16 rounded-full border-2 ${
              theme === 'dark' ? 'border-purple-400' : 'border-purple-600'
            }`}
            style={{ top: '20%', right: '20%' }}
          />
          
          <motion.div
            animate={{ 
              rotate: 360,
              x: [-5, 5, -5]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
              x: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className={`absolute w-12 h-12 ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'
            }`}
            style={{ 
              bottom: '20%', 
              left: '20%',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}
