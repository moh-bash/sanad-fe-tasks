import { Lottie } from "lottie-react";
import plantAnimation from "../assets/plant.json";
import { useTodo } from "../stores/useTodo";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function PlantUI() {
    const tasks = useTodo((state) => state.tasks);
    const lottieRef = useRef(null);
    const fullFramesRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const progress = useMemo(() => {
        if (tasks.length === 0) return 0;
        return tasks.filter((task) => task.completed).length / tasks.length;
    }, [tasks]);

    const updateGrowth = useCallback(() => {
        const animation = lottieRef.current?.animationItem;
        if (!animation) return;

        if (fullFramesRef.current === null) {
            fullFramesRef.current = animation.totalFrames;
        }

        const totalFrames = fullFramesRef.current;
        if (totalFrames <= 1) return;

        const targetFrame = Math.min(
            totalFrames - 1,
            Math.round(progress * (totalFrames - 1))
        );

        const currentFrame = Math.round(
            animation.currentFrame + animation.firstFrame
        );

        if (targetFrame === currentFrame) return;

        const endFrame =
            targetFrame > currentFrame ? targetFrame + 1 : targetFrame;

        animation.playSegments([currentFrame, endFrame], true);
    }, [progress]);

    const handleReady = useCallback(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) updateGrowth();
    }, [isLoaded, updateGrowth]);

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Lottie
                lottieRef={lottieRef}
                src={plantAnimation}
                autoplay={false}
                loop={false}
                subscriptions={{ ready: handleReady }}
                className="max-w-1/2"
            />
            <p>{Math.round(progress * 100)}% complete</p>
        </div>
    );
}
