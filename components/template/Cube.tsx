import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
interface BoxWithIconProps {
    icon: string;
    text?: string;
    textSide?: number | string;
}

function BoxWithIcon({ icon, text, textSide }: BoxWithIconProps) {
    const ref = useRef<THREE.Mesh>(null);
    const originalYPosition = useRef<number>(0);
    const [clicked, setClicked] = useState(false);
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const [hovered, setHovered] = useState(false);
    const closedScale: [number, number, number] = hovered && !clicked ? [1.25, 1.25, 1.25] : [1, 1, 1];
    const openedScale: [number, number, number] = [2.2, 2.2, 2.2];

    useEffect(() => {
        const loadTexture = async () => {
            try {
                const response = await fetch(icon);
                if (!response.ok) {
                    throw new Error('Failed to load texture');
                }
                const blob = await response.blob();
                const objectURL = URL.createObjectURL(blob);
                const texture = new THREE.TextureLoader().load(objectURL);
                setTexture(texture);
            } catch (error) {
                console.error('Error loading texture:', error);
            }
        };

        loadTexture();

        return () => {
            if (texture) {
                texture.dispose();
            }
        };
    }, [icon]);

    useEffect(() => {
        if (ref.current) {
            originalYPosition.current = ref.current.position.y;
        }
    }, []);

    useFrame(() => {
        if (!clicked && ref.current) {
            ref.current.rotation.x += 0.01;
            ref.current.rotation.y += 0.01;
        }
    });

    const handleClick = () => {
        const next = !clicked;
        setClicked(next);
        if (next && ref.current) {
            ref.current.position.y = originalYPosition.current;
            ref.current.rotation.x = 0;
            ref.current.rotation.y = 0;
        }
    };

    const handlePointerEnter = () => {
        setHovered(true);
    };

    const handlePointerLeave = () => {
        setHovered(false);
    };

    return (
        <group>
            <mesh
                ref={ref}
                scale={clicked ? openedScale : closedScale}
                position={[0, clicked ? 2 : originalYPosition.current, 0]}
                onClick={handleClick}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
            >
                <boxGeometry args={[1, 1, 1]} />
                {texture && <meshStandardMaterial wireframe={!clicked} attach="material" map={texture} />}
            </mesh>
            {clicked && text && (
                <Html position={[0, -0.5, 0]} center style={{ pointerEvents: 'none', width: 'max-content', textAlign: 'center' }}>
                    <div style={{ marginTop: 16, color: '#fff', background: 'rgba(0,0,0,0.7)', padding: '8px 16px', borderRadius: 8, fontSize: textSide ? textSide : 10, fontWeight: 500 }}>
                        {text}
                    </div>
                </Html>
            )}
        </group>
    );
}


export default function Cube({ icon, text, textSide }: { icon: string; text?: string; textSide?: number | string }) {
    return (
        <div style={{ width: 46, height: 112, marginRight: 4 }}>
            <Canvas camera={{ position: [0, 0, 5] }} style={{ width: 72, height: 112 }}>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <BoxWithIcon icon={icon} text={text} textSide={textSide} />
            </Canvas>
        </div>
    );
}
