
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
    const {
        threshold = 0.1,
        rootMargin = '0px 0px -100px 0px',
        triggerOnce = true,
    } = options;

    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(entry.target);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { elementRef, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, delay: number = 100) => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const { elementRef, isVisible } = useScrollAnimation();

    useEffect(() => {
        if (isVisible) {
            const timeouts: NodeJS.Timeout[] = [];

            for (let i = 0; i < itemCount; i++) {
                const timeout = setTimeout(() => {
                    setVisibleItems(prev => [...prev, i]);
                }, i * delay);
                timeouts.push(timeout);
            }

            return () => {
                timeouts.forEach(clearTimeout);
            };
        }
    }, [isVisible, itemCount, delay]);

    return { elementRef, visibleItems };
};
