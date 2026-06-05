"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function LearningConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const count = 95;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const radius = 1.4 + Math.random() * 3.2;
      const angle = (i / count) * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 0.85;
      positions[i * 3 + 1] = Math.sin(angle * 1.8) * 1.35 + (Math.random() - 0.5) * 1.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2.6;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0x9ddcff,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const ringGeometry = new THREE.TorusGeometry(2.85, 0.006, 8, 120);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x74f7cf,
      transparent: true,
      opacity: 0.3,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI * 0.62;
    scene.add(ring);

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    let animationId = 0;
    const animate = () => {
      points.rotation.y += 0.0019;
      points.rotation.x = Math.sin(Date.now() * 0.00025) * 0.08;
      ring.rotation.z -= 0.0022;
      renderer.render(scene, camera);
      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 opacity-85 [mask-image:radial-gradient(circle_at_center,black_0%,black_42%,transparent_78%)]"
    />
  );
}
