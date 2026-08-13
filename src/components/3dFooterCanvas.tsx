import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Paths can remain outside
const PATH_CALENDAR = `${import.meta.env.BASE_URL}3d_models/Calendar_forget_me_not.glb`;
const PATH_KEYBOARD = `${import.meta.env.BASE_URL}3d_models/Keyboard_purple.glb`;
const PATH_CHECKLIST = `${import.meta.env.BASE_URL}3d_models/Checklist_purple.glb`;

var calendarPositionY: GLfloat;
var keyboardPositionY: GLfloat;
var checklistPositionY: GLfloat;

// Helper type definition for options
interface LoadModelOptions {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  onLoad?: (model: THREE.Group) => void;
}

export const ModelViewer = () => {
  const canvas_reference = useRef<HTMLCanvasElement>(null);
  const container_reference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvas_reference.current || !container_reference.current) return;

    const container = container_reference.current;

    // model reference
    let model_calendar: THREE.Group | null = null;
    let model_keyboard: THREE.Group | null = null;
    let model_checklist: THREE.Group | null = null;

    // Container size
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 200;

    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas_reference.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(2, 2, 5);
    scene.add(dirLight);

    const loader = new GLTFLoader();

    // loader function
    const load3dModel = (path: string, options: LoadModelOptions = {}) => {
      const {
        position = [0, 0, 0],
        rotation = [0, 0, 0],
        scale = [1, 1, 1],
        onLoad,
      } = options;

      loader.load(
        path,
        (gltf) => {
          const model = gltf.scene;

          model.position.set(...position);
          model.rotation.set(...rotation);
          model.scale.set(...scale);

          scene.add(model);

          if (onLoad) onLoad(model);
        },
        undefined,
        (error) => {
          console.error(`Failed to load model at: ${path}`, error);
        }
      );
    };

    load3dModel(PATH_CALENDAR, {
      rotation: [1.5, -0.1, -0.67],
      position: [-2, calendarPositionY = 0.8, 1],
      scale: [0.8, 0.8, 0.8],
      onLoad: (loadedModel) => {
        model_calendar = loadedModel;
      },
    });

    load3dModel(PATH_KEYBOARD, {
      position: [0, keyboardPositionY = -0.7, 1.5],
      rotation: [0.5, -0.8, 0],
      scale: [0.8, 0.8, 0.8],
      onLoad: (loadedModel) => {
        model_keyboard = loadedModel;
      },
    });

    load3dModel(PATH_CHECKLIST, {
      position: [2.45, checklistPositionY = 1.3, 0.8],
      rotation: [-0.2, 0, -0.2],
      scale: [0.5, 0.5, 0.5],
      onLoad: (loadedModel) => {
        model_checklist = loadedModel;
      },
    });

    // Resize Handler
    const handle_resize = () => {
      if (!container) return;
      const new_width = container.clientWidth || 300;
      const new_height = container.clientHeight || 300;

      camera.aspect = new_width / new_height;
      camera.updateProjectionMatrix();

      renderer.setSize(new_width, new_height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(() => handle_resize());
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock(); // standard fallback if Timer gives types issues

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed_time = clock.getElapsedTime();

      // Animate models when ready
      if (model_calendar) {
        model_calendar.position.y = calendarPositionY + Math.sin(elapsed_time * 0.4) * 0.3;
      }
      if (model_keyboard) {
        model_keyboard.position.y =  keyboardPositionY + Math.sin(elapsed_time * 0.4) * 0.3;
      }
      if (model_checklist) {
        model_checklist.position.y = checklistPositionY + Math.sin(elapsed_time * 0.4) * 0.3;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={container_reference} className="w-full h-full relative min-h-[300px]">
      <canvas ref={canvas_reference} className="w-full h-full block" />
    </div>
  );
};