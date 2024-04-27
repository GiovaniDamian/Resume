import * as THREE from 'three';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

interface BoxWithIconProps {
    icon: string;
}

function BoxWithIcon({ icon }: BoxWithIconProps) {
    const ref = useRef<THREE.Mesh>(null);
    const originalYPosition = useRef<number>(0);
    const [clicked, setClicked] = useState(false);
    const [texture, setTexture] = useState<THREE.Texture | null>(null);
    const [hovered, setHovered] = useState(false);

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
        setClicked(!clicked);
        if (!clicked && ref.current) {
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
        <mesh
            ref={ref}
            scale={hovered && !clicked ? ([1.25, 1.25, 1.25]) :
                (clicked ? [2, 2, 2] : [1, 1, 1])}
            position={[0, clicked ? 2 : originalYPosition.current, 0]}
            onClick={handleClick}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <boxGeometry args={[1, 1, 1]} />
            {texture && <meshStandardMaterial attach="material" map={texture} />}
        </mesh>
    );
}

export default function Cube({ icon }: { icon: string }) {
    return (
        <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <BoxWithIcon icon={icon} />
        </Canvas>
    );
}
