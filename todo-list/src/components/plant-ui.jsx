import { Lottie } from "lottie-react";
import plantAnimation from "../assets/plant.json";
import { useTodo } from "../stores/useTodo";
import { useCallback, useEffect, useRef } from "react";

export default function PlantUI() {
    const tasks = useTodo((state) => state.tasks) || [];
    const lottieRef = useRef(null);

    const progress = Math.round((tasks.filter((task) => task.completed).length / tasks.length) * 100)

    const updateGrowth = useCallback(() => {
       const animation = lottieRef.current?.animationItem;

       if (!animation || !animation.isLoaded) return;

       const totalTasks = tasks.length;
       const completedTasks = tasks.filter(
           (task) => task.completed
       ).length;

       const progress =
           totalTasks === 0 ? 0 : completedTasks / totalTasks;

       const totalFrames = animation.totalFrames;

       if (totalFrames <= 1) return;

       const targetFrame = Math.min(
           totalFrames - 1,
           Math.round(progress * (totalFrames - 1))
       );

       const currentFrame = Math.round(animation.currentFrame);

       if (Math.abs(targetFrame - currentFrame) < 2) return;

       animation.playSegments(
           [currentFrame, targetFrame],
           true
       );
   }, [tasks]);

    useEffect(() => {
        updateGrowth(tasks);
    }, [updateGrowth]);



    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Lottie
                lottieRef={lottieRef}
                src={plantAnimation}
                autoplay={false}
                loop={false}
                onDOMLoaded={() => updateGrowth(tasks)}
                className="max-w-1/2"
            />
            <p>{progress}% complete</p>
        </div>
    );
}