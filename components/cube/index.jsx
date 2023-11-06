'use client';
import React, { useEffect, useRef } from 'react'
import { Canvas, useLoader,useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import styles from './style.module.scss';
import { OrbitControls} from '@react-three/drei';
import { useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

export default function index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
    const smoothProgress = useSpring(progress, {damping: 20});

    return (
        <div ref={container} className={styles.main}>
            <div className={styles.cube}>
                <Canvas>
                    <OrbitControls enableZoom={true} enablePan={true}/>
                    <ambientLight intensity={1}/>
                    <directionalLight position={[3, 1, 1]}/>
                    <Cube progress={smoothProgress}/>
                </Canvas>
            </div>
        </div>
    )
}

function Cube({progress}) {

    const mesh = useRef(null);

    useFrame((state,delta)=>{
        mesh.current.rotation.x +=delta*0.3;
        mesh.current.rotation.y +=delta*0.5;
        mesh.current.rotation.z +=delta*0.5;
    })
   
    const options = {
        damping: 20
    }
    
    const mouse = {
        x: useSpring(useMotionValue(0), options),
        y: useSpring(useMotionValue(0), options)
    }

    const manageMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e; 
        const x =4 + (clientX / innerWidth)
        const y = 4 + (clientY / innerHeight)
        mouse.x.set(x);
        mouse.y.set(y);
    }

    useEffect( () => {
        window.addEventListener("mousemove", manageMouseMove)

        return () => window.removeEventListener("mouse", manageMouseMove);
    }, [])

    const texture_1 = useLoader(TextureLoader, "1.PNG")
    const texture_2 = useLoader(TextureLoader, "2.PNG")
    const texture_3 = useLoader(TextureLoader, "3.PNG")
    const texture_4 = useLoader(TextureLoader, "4.PNG")
    const texture_5 = useLoader(TextureLoader, "5.PNG")
    const texture_6 = useLoader(TextureLoader, "6.PNG")

    return (
        <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
            <boxGeometry args={[2.5, 2.5, 2.5]}/>
            <meshStandardMaterial map={texture_1} attach="material-0"/>
            <meshStandardMaterial map={texture_2} attach="material-1"/>
            <meshStandardMaterial map={texture_3} attach="material-2"/>
            <meshStandardMaterial map={texture_4} attach="material-3"/>
            <meshStandardMaterial map={texture_5} attach="material-4"/>
            <meshStandardMaterial map={texture_6} attach="material-5"/>
        </motion.mesh>
    )
}