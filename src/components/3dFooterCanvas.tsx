import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const string_path_to_model_calendar = `${import.meta.env.BASE_URL}3d_models/Calendar_forget_me_not.glb`;

export const ModelViewer = () => {
  const canvas_reference = useRef<HTMLCanvasElement>(null);
  const container_reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvas_reference.current || !container_reference.current) return;

    const container = container_reference.current;
    
    // group of models here.
    let model_calendar: THREE.Group;

    // end here.

    const width = container.clientWidth || 300;
    const height = container.clientHeight || 200;

    const scene = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas_reference.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height); // one time set the initial size
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(2, 2, 5);
    scene.add(dirLight);

    // Model loader
    
    const loader = new GLTFLoader();
    loader.load(
      string_path_to_model_calendar,
      (gltf) => {
        const container_calendar_model = gltf.scene;
        model_calendar = container_calendar_model;
        container_calendar_model.rotation.set(1.5, 0.2, 0.2); // model rotation x y z.

        scene.add(container_calendar_model);
      },
      undefined,
      (error) => {
        console.error('Failed to load GLTF model: ' + string_path_to_model_calendar + '\n\nFailed to load:', error);
      }
    );

    const handle_resize= () => { // 
      if (!container) return;
      const new_width = container.clientWidth || 300;
      const new_height = container.clientWidth || 300;

      // Update Camera Aspect Ratio
      camera.aspect = new_width / new_height;
      camera.updateProjectionMatrix();

      // Update Renderer Size
      renderer.setSize(new_width, new_height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    const resizeObserver = new ResizeObserver(() => handle_resize());
    resizeObserver.observe(container);

    // Animation 
    let animationFrameId: number;

    const timer = new THREE.Timer();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      timer.update();
      const elapsed_time = timer.getElapsed();

      if (model_calendar) {
        model_calendar.position.y = Math.sin(elapsed_time * 0.4) * 0.3;
      } // animation on the calendar model with sin
      
      // if (model_calendar) {
      //   model_calendar.position.y = Math.sin(elapsed_time * 3) * 0.5;
      //   model_calendar.rotation.z = elapsed_time * 1.3;
      // }  // minecraft drop animation.


      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={container_reference} className="w-full h-full relative min-h-[300px]">
      <canvas ref={canvas_reference} className="w-full h-full block" />
    </div>
  );
};