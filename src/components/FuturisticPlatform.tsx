import { Canvas, useFrame } from '@react-three/fiber';
import { Plane, MeshReflectorMaterial, OrbitControls, Box, Sphere, Grid, Cylinder } from '@react-three/drei';
import { useState, useRef } from 'react';
import * as THREE from 'three'; // <--- ADD THIS IMPORT BACK

// === DEFINE CONSTANTS OUTSIDE THE COMPONENT ===
const TABLET_WIDTH = 6;
const TABLET_HEIGHT = 0.1;
const TABLET_DEPTH = 4;
const TABLET_Y_POS = -0.55;
const EDGE_THICKNESS = 0.05;
const FLANK_X_OFFSET = 5;
const FLANK_Y_POS = -0.3;
const FLANK_SPHERE_RADIUS = 0.8;
const FLANK_PEDESTAL_HEIGHT = 0.6;
const FLANK_PEDESTAL_RADIUS = 0.15;
const TABLET_TOP_Y = TABLET_Y_POS + TABLET_HEIGHT / 2; // Define derived constant here
// === END CONSTANTS ===

function PlatformSceneContent() {
    // State for globe hover effect
    const [isGlobeHovered, setIsGlobeHovered] = useState(false);
    // Ref to access the globe mesh for animation
    const globeRef = useRef<THREE.Mesh>(null!);

    // Animation hook runs every frame
    useFrame((_, delta) => {
      if (globeRef.current) {
        // Continuous Rotation
        globeRef.current.rotation.y += delta * 0.1;

        // Hover Scale Animation
        const targetScale = isGlobeHovered ? 1.15 : 1.0;
        // Use THREE.Vector3 here
        globeRef.current.scale.lerp(
          new THREE.Vector3(targetScale, targetScale, targetScale),
          0.1
        );
      }
    });

    return (
      <>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.0} color="#00bfff" />
        <pointLight position={[0, 1, 3]} intensity={0.6} color="#ffa500" />

        {/* Grid Helper (Now TABLET_TOP_Y is defined) */}
        <Grid
          position={[0, TABLET_TOP_Y + 0.02, 0]}
          args={[TABLET_WIDTH, TABLET_DEPTH]}
          cellSize={0.5}
          cellThickness={1}
          cellColor="#505060"
          sectionSize={2}
          sectionThickness={1.2}
          sectionColor="#00aaff"
          followCamera={false}
          infiniteGrid={false}
        />

        {/* Reflective Floor */}
        <Plane
          args={[100, 100]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.6, 0]}
        >
          <MeshReflectorMaterial
            resolution={1024} mixBlur={0.8} mixStrength={1.5} roughness={1}
            depthScale={1.2} minDepthThreshold={0.4} maxDepthThreshold={1.4}
            color="#050509" metalness={0.8} mirror={1}
          />
        </Plane>

        {/* Tablet Base (Now TABLET_TOP_Y is defined) */}
        <Box
          args={[TABLET_WIDTH, TABLET_HEIGHT, TABLET_DEPTH]}
          position={[0, TABLET_TOP_Y, 0]}
        >
          <meshStandardMaterial
            color="#101018" metalness={0.5} roughness={0.5}
          />
        </Box>

        {/* Glowing Edges (All constants now defined) */}
        {/* Front Edge */}
        <Box
          args={[TABLET_WIDTH + EDGE_THICKNESS * 2, EDGE_THICKNESS, EDGE_THICKNESS]}
          position={[0, TABLET_Y_POS + EDGE_THICKNESS / 2, TABLET_DEPTH / 2 + EDGE_THICKNESS / 2]}
        >
          <meshBasicMaterial color="#00ffff" toneMapped={false} />
        </Box>
        {/* Back Edge */}
        <Box
          args={[TABLET_WIDTH + EDGE_THICKNESS * 2, EDGE_THICKNESS, EDGE_THICKNESS]}
          position={[0, TABLET_Y_POS + EDGE_THICKNESS / 2, -TABLET_DEPTH / 2 - EDGE_THICKNESS / 2]}
        >
          <meshBasicMaterial color="#00ffff" toneMapped={false} />
        </Box>
        {/* Left Edge */}
        <Box
          args={[EDGE_THICKNESS, EDGE_THICKNESS, TABLET_DEPTH]}
          position={[-TABLET_WIDTH / 2 - EDGE_THICKNESS / 2, TABLET_Y_POS + EDGE_THICKNESS / 2, 0]}
        >
          <meshBasicMaterial color="#00ffff" toneMapped={false} />
        </Box>
        {/* Right Edge */}
        <Box
          args={[EDGE_THICKNESS, EDGE_THICKNESS, TABLET_DEPTH]}
          position={[TABLET_WIDTH / 2 + EDGE_THICKNESS / 2, TABLET_Y_POS + EDGE_THICKNESS / 2, 0]}
        >
          <meshBasicMaterial color="#00ffff" toneMapped={false} />
        </Box>

        {/* Holographic Globe (Now TABLET_TOP_Y is defined) */}
        <Sphere
          ref={globeRef}
          args={[1.5, 48, 48]}
          position={[0, TABLET_TOP_Y + 1.5 + TABLET_HEIGHT / 2, 0]}
          onPointerOver={(event) => { event.stopPropagation(); setIsGlobeHovered(true); }}
          onPointerOut={() => setIsGlobeHovered(false)}
        >
          <meshStandardMaterial
            color={isGlobeHovered ? '#40ffff' : '#00bfff'}
            emissive="#0088cc" emissiveIntensity={0.4} metalness={0.3}
            roughness={0.6} transparent={true} opacity={0.7}
            wireframe={true}
          />
        </Sphere>

        {/* Flanking Elements (All constants now defined) */}
        {/* Left Flank - Pedestal */}
        <Cylinder
          args={[FLANK_PEDESTAL_RADIUS, FLANK_PEDESTAL_RADIUS, FLANK_PEDESTAL_HEIGHT]}
          position={[-FLANK_X_OFFSET, FLANK_Y_POS - FLANK_PEDESTAL_HEIGHT / 2, 0]}
        >
          <meshStandardMaterial
            color="#ffa500" emissive="#ff8c00" emissiveIntensity={1.2}
            toneMapped={false} metalness={0.4} roughness={0.5}
          />
        </Cylinder>
        {/* Left Flank - Sphere */}
        <Sphere
          args={[FLANK_SPHERE_RADIUS, 32, 32]}
          position={[-FLANK_X_OFFSET, FLANK_Y_POS + FLANK_SPHERE_RADIUS, 0]}
        >
          <meshStandardMaterial
            color="#00dddd" emissive="#009999" emissiveIntensity={0.3}
            metalness={0.3} roughness={0.6} transparent={true}
            opacity={0.6} wireframe={true}
          />
        </Sphere>

        {/* Right Flank - Pedestal */}
        <Cylinder
          args={[FLANK_PEDESTAL_RADIUS, FLANK_PEDESTAL_RADIUS, FLANK_PEDESTAL_HEIGHT]}
          position={[FLANK_X_OFFSET, FLANK_Y_POS - FLANK_PEDESTAL_HEIGHT / 2, 0]}
        >
          <meshStandardMaterial
            color="#ffa500" emissive="#ff8c00" emissiveIntensity={1.2}
            toneMapped={false} metalness={0.4} roughness={0.5}
          />
        </Cylinder>
        {/* Right Flank - Sphere */}
        <Sphere
          args={[FLANK_SPHERE_RADIUS, 32, 32]}
          position={[FLANK_X_OFFSET, FLANK_Y_POS + FLANK_SPHERE_RADIUS, 0]}
        >
          <meshStandardMaterial
            color="#00dddd" emissive="#009999" emissiveIntensity={0.3}
            metalness={0.3} roughness={0.6} transparent={true}
            opacity={0.6} wireframe={true}
          />
        </Sphere>

        <OrbitControls />
      </>
    );
}

// FuturisticPlatform component export remains the same
export default function FuturisticPlatform() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 3.5, 9], fov: 55 }}
        gl={{ antialias: true }}
      >
        <PlatformSceneContent />
      </Canvas>
    </div>
  );
}