import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

export const useMatterHero = (containerRef, techIcons) => {
  const engineRef = useRef(Matter.Engine.create({ gravity: { x: 0, y: 0 } }));
  const [bodies, setBodies] = useState([]);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const engine = engineRef.current;
    const world = engine.world;
    
    // Clear previous if any (for HMR)
    Matter.World.clear(world);
    Matter.Engine.clear(engine);

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Boundaries with massive thickness
    const thick = 1000;
    const walls = {
      top: Matter.Bodies.rectangle(width / 2, -thick / 2, width * 5, thick, { isStatic: true, restitution: 1 }),
      bottom: Matter.Bodies.rectangle(width / 2, height + thick / 2, width * 5, thick, { isStatic: true, restitution: 1 }),
      left: Matter.Bodies.rectangle(-thick / 2, height / 2, thick, height * 5, { isStatic: true, restitution: 1 }),
      right: Matter.Bodies.rectangle(width + thick / 2, height / 2, thick, height * 5, { isStatic: true, restitution: 1 }),
    };
    
    Matter.World.add(world, Object.values(walls));

    // Initial tech bodies
    const newItems = techIcons.map((t) => {
      const body = Matter.Bodies.circle(width * t.x, height * t.y, t.size / 2, {
        restitution: 0.95,
        frictionAir: 0.015,
        friction: 0.1,
        mass: 1,
      });
      Matter.World.add(world, body);
      return { body, ...t };
    });

    setBodies(newItems);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    let frameId;
    const update = () => {
      // Force a re-render to update positions
      setBodies(prev => [...prev]); 
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);

    // Precise Resize handling
    const ro = new ResizeObserver((entries) => {
      if (!entries[0]) return;
      const { width: w, height: h } = entries[0].contentRect;
      Matter.Body.setPosition(walls.top, { x: w / 2, y: -thick / 2 });
      Matter.Body.setPosition(walls.bottom, { x: w / 2, y: h + thick / 2 });
      Matter.Body.setPosition(walls.left, { x: -thick / 2, y: h / 2 });
      Matter.Body.setPosition(walls.right, { x: w + thick / 2, y: h / 2 });
    });
    ro.observe(containerRef.current);

    return () => {
      cancelAnimationFrame(frameId);
      Matter.Runner.stop(runner);
      ro.disconnect();
    };
  }, [containerRef, techIcons]);

  return { bodies };
};
