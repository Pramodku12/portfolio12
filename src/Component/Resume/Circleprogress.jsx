import React, { useEffect, useState } from "react";
import { Circle } from "rc-progress";
import { useInView } from "react-intersection-observer";

function AnimatedCircle({ percent, label, id }) {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        if (current <= percent) {
          setProgress(current);
        } else {
          clearInterval(interval);
        }
      }, 10);
      return () => clearInterval(interval);
    }
  }, [inView, percent]);

  return (
    <div className="circle-skill" ref={ref}>
      <div className={`innerCircle${id}`}>
        <div id="number">{progress}%</div>
        <div id="skill">{label}</div>
      </div>
      <Circle
        percent={progress}
        strokeWidth={10}
        strokeColor="#17cf73"
        trailColor="#e6e6e6"
      />
    </div>
  );
}

function Circleprogress() {
  return (
    <div className="circle-sec">
      <h3>Other Skills</h3>
      <div className="skill-par">
        <AnimatedCircle percent={80} label="Communication" id="" />
        <AnimatedCircle percent={80} label="Logic" id="2" />
        <AnimatedCircle percent={75} label="Problem Solving" id="3" />
      </div>
    </div>
  );
}

export default Circleprogress;
