import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

export function RobotModel({ color = '#00f0ff', position = [0, 0, 0], scale = 1 }) {
  const groupRef = useRef()
  const headRef = useRef()
  const leftArmRef = useRef()
  const rightArmRef = useRef()
  const leftLegRef = useRef()
  const rightLegRef = useRef()
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(t * 1.5) * 0.15
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.15
    }
    
    if (headRef.current) {
      headRef.current.rotation.z = Math.sin(t * 2) * 0.05
      headRef.current.rotation.x = Math.sin(t * 1.5) * 0.03
    }
    
    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(t * 1.2) * 0.2 + 0.3
    }
    
    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -Math.sin(t * 1.2) * 0.2 - 0.3
    }
    
    if (leftLegRef.current) {
      leftLegRef.current.rotation.x = Math.sin(t * 2) * 0.1
    }
    
    if (rightLegRef.current) {
      rightLegRef.current.rotation.x = -Math.sin(t * 2) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Head */}
        <group ref={headRef} position={[0, 2.2, 0]}>
          <mesh>
            <boxGeometry args={[0.7, 0.65, 0.6]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
          </mesh>
          
          {/* Eye/Visor */}
          <mesh position={[0, 0.05, 0.31]}>
            <boxGeometry args={[0.5, 0.12, 0.02]} />
            <meshBasicMaterial color={color} />
          </mesh>
          
          {/* Antenna */}
          <mesh position={[0, 0.45, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.3, 8]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[0, 0.65, 0]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
          
          {/* Side Panels */}
          <mesh position={[-0.4, 0, 0]}>
            <boxGeometry args={[0.15, 0.4, 0.5]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0.4, 0, 0]}>
            <boxGeometry args={[0.15, 0.4, 0.5]} />
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Neck */}
        <mesh position={[0, 1.8, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 0.3, 8]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Torso */}
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[1, 1.2, 0.6]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
        </mesh>
        
        {/* Chest Plate */}
        <mesh position={[0, 1.3, 0.32]}>
          <boxGeometry args={[0.6, 0.5, 0.05]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} emissive={color} emissiveIntensity={0.6} />
        </mesh>
        
        {/* Core Glow */}
        <mesh position={[0, 1.1, 0.35]}>
          <circleGeometry args={[0.15, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>

        {/* Shoulder Joints */}
        <mesh position={[-0.65, 1.5, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0.65, 1.5, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Left Arm */}
        <group ref={leftArmRef} position={[-0.85, 1.5, 0]}>
          <mesh>
            <boxGeometry args={[0.2, 0.7, 0.18]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -0.5, 0]}>
            <boxGeometry args={[0.18, 0.6, 0.15]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -0.9, 0]}>
            <boxGeometry args={[0.15, 0.25, 0.12]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
          </mesh>
        </group>

        {/* Right Arm */}
        <group ref={rightArmRef} position={[0.85, 1.5, 0]}>
          <mesh>
            <boxGeometry args={[0.2, 0.7, 0.18]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -0.5, 0]}>
            <boxGeometry args={[0.18, 0.6, 0.15]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -0.9, 0]}>
            <boxGeometry args={[0.15, 0.25, 0.12]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
          </mesh>
        </group>

        {/* Hip Joints */}
        <mesh position={[-0.25, 0.4, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0.25, 0.4, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Left Leg */}
        <group ref={leftLegRef} position={[-0.25, 0.2, 0]}>
          <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[0.25, 0.7, 0.22]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -0.75, 0]}>
            <boxGeometry args={[0.22, 0.6, 0.2]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -1.1, 0.1]}>
            <boxGeometry args={[0.25, 0.12, 0.35]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
          </mesh>
        </group>

        {/* Right Leg */}
        <group ref={rightLegRef} position={[0.25, 0.2, 0]}>
          <mesh position={[0, -0.3, 0]}>
            <boxGeometry args={[0.25, 0.7, 0.22]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -0.75, 0]}>
            <boxGeometry args={[0.22, 0.6, 0.2]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
          </mesh>
          <mesh position={[0, -1.1, 0.1]}>
            <boxGeometry args={[0.25, 0.12, 0.35]} />
            <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
          </mesh>
        </group>

        {/* Ground Glow */}
        <mesh position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.8, 1.5, 32]} />
          <meshBasicMaterial color={color} transparent opacity={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

export default RobotModel