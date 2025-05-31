// src/components/AlliesShowcaseSection.tsx
"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

// --- Iconos (sin cambios) ---
const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

interface AllyItem {
  id: number;
  name: string;
  details: string;
  imageUrl: string;
  logoIcon?: string;
}

interface AlliesShowcaseSectionProps {
  info: {
    items: AllyItem[];
  };
  title?: string;
  autoScrollSpeed?: number;
}

const AlliesShowcaseSection: React.FC<AlliesShowcaseSectionProps> = ({
  info,
  title,
  autoScrollSpeed = 30,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isManuallyInteracting, setIsManuallyInteracting] = useState(false);
  // ***** NUEVO ESTADO *****
  const [isReadyForScroll, setIsReadyForScroll] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const interactionTimeoutId = useRef<NodeJS.Timeout | null>(null);
  const singleSetWidthRef = useRef<number>(0);

  const originalItems = info.items;
  const displayItems = originalItems.length > 0 ? [...originalItems, ...originalItems, ...originalItems] : [];

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, displayItems.length);
  }, [displayItems.length]);

  const calculateSingleSetWidth = useCallback(() => {
    // ... (sin cambios en esta función)
    if (originalItems.length === 0 || !stripRef.current) return 0;
    let width = 0;
    for (let i = 0; i < originalItems.length; i++) {
      const itemElement = itemRefs.current[i];
      if (itemElement) {
        const style = window.getComputedStyle(itemElement);
        width += itemElement.offsetWidth + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
      }
    }
    return width;
  }, [originalItems]);

  // Efecto para calcular anchos y establecer la posición inicial
  useEffect(() => {
    const updateWidthsAndPosition = () => {
      const newSetWidth = calculateSingleSetWidth();
      singleSetWidthRef.current = newSetWidth;

      if (stripRef.current && newSetWidth > 0) {
        const initialTargetX = getTargetTranslateX(0, 0, newSetWidth);
        if (initialTargetX !== null) {
          setTranslateX(initialTargetX);
          stripRef.current.style.transform = `translateX(${initialTargetX}px)`;
          stripRef.current.style.transition = 'none';
        }
        // ***** MARCAR COMO LISTO PARA SCROLL *****
        setIsReadyForScroll(true);
      } else {
        // ***** MARCAR COMO NO LISTO SI NO HAY ANCHO *****
        setIsReadyForScroll(false);
      }
    };
    
    const timeoutId = setTimeout(updateWidthsAndPosition, 100);
    window.addEventListener('resize', updateWidthsAndPosition);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateWidthsAndPosition);
      setIsReadyForScroll(false); // Resetear al desmontar o recalcular
    };
  }, [calculateSingleSetWidth, originalItems.length]); // Dependencias sin cambios


  const getTargetTranslateX = useCallback((
    targetItemOriginalIndex: number,
    currentStripTranslateX: number,
    setWidth: number
  ): number | null => {
    // ... (sin cambios en esta función)
    if (!viewportRef.current || originalItems.length === 0 || setWidth === 0) return null;
    const targetDisplayIndex = originalItems.length + targetItemOriginalIndex;
    const targetItemElement = itemRefs.current[targetDisplayIndex];
    if (!targetItemElement) return null;
    const viewportWidth = viewportRef.current.offsetWidth;
    const itemOffsetLeftInStrip = targetItemElement.offsetLeft;
    const itemWidth = targetItemElement.offsetWidth;
    const targetX = -(itemOffsetLeftInStrip - (viewportWidth / 2) + (itemWidth / 2));
    return targetX;
  }, [originalItems.length]);


  // Efecto para animar el scroll manual (clic en botones)
  useEffect(() => {
    // ... (sin cambios en este efecto, excepto asegurarse de que isReadyForScroll no lo afecte negativamente)
    if (!isManuallyInteracting || stripRef.current === null) return; // isReadyForScroll no es estrictamente necesario aquí
    // ... resto del efecto sin cambios
    const targetX = getTargetTranslateX(currentIndex, translateX, singleSetWidthRef.current);
    if (targetX === null) return;

    const currentActualTranslateX = parseFloat(window.getComputedStyle(stripRef.current).transform.split(',')[4]) || translateX;
    let startX = currentActualTranslateX;
    const duration = 500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsedTime = now - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = progress * (2 - progress);

      const newX = startX + (targetX - startX) * easedProgress;
      if (stripRef.current) {
        stripRef.current.style.transform = `translateX(${newX}px)`;
        stripRef.current.style.transition = 'none';
      }
      setTranslateX(newX);

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        if (stripRef.current) stripRef.current.style.transform = `translateX(${targetX}px)`;
        setTranslateX(targetX);
      }
    };
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [currentIndex, isManuallyInteracting, getTargetTranslateX, translateX]);


  // Efecto para el auto-scroll
  useEffect(() => {
    // ***** CONDICIÓN ACTUALIZADA *****
    if (!isReadyForScroll || isHovering || isManuallyInteracting || originalItems.length <= 1 ) {
      // singleSetWidthRef.current === 0 está implícitamente cubierto por !isReadyForScroll
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      return;
    }

    let lastTime = performance.now();
    const scroll = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      setTranslateX(prevTranslateX => {
        let newTranslateX = prevTranslateX - (autoScrollSpeed / 1000) * deltaTime;
        const offsetToMiddleSetStart = itemRefs.current[originalItems.length]?.offsetLeft || 0;
        
        // Asegurarse de que singleSetWidthRef.current > 0 para evitar división por cero o bucles incorrectos
        if (singleSetWidthRef.current > 0 && (newTranslateX + offsetToMiddleSetStart < -singleSetWidthRef.current)) {
             newTranslateX += singleSetWidthRef.current;
        }

        if (stripRef.current) {
          stripRef.current.style.transform = `translateX(${newTranslateX}px)`;
          stripRef.current.style.transition = 'none';
        }
        return newTranslateX;
      });
      animationFrameId.current = requestAnimationFrame(scroll);
    };

    animationFrameId.current = requestAnimationFrame(scroll);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
    // ***** AÑADIR isReadyForScroll A LAS DEPENDENCIAS *****
  }, [isReadyForScroll, isHovering, isManuallyInteracting, autoScrollSpeed, originalItems.length]);


  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!interactionTimeoutId.current) {
        setIsManuallyInteracting(false);
    }
  };

  const clearInteractionTimeout = () => {
    if (interactionTimeoutId.current) clearTimeout(interactionTimeoutId.current);
  };

  const startInteractionTimeout = () => {
    clearInteractionTimeout();
    interactionTimeoutId.current = setTimeout(() => {
      setIsManuallyInteracting(false);
      interactionTimeoutId.current = null;
    }, 3000);
  };

  const navigate = (direction: 'next' | 'prev') => {
    // ... (sin cambios en esta función)
    if (originalItems.length === 0) return;
    setIsManuallyInteracting(true);
    clearInteractionTimeout();
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

    setCurrentIndex(prev => {
      const newIndex = direction === 'next' ? prev + 1 : prev - 1;
      return (newIndex + originalItems.length) % originalItems.length;
    });
    startInteractionTimeout();
  };

  // Renderizado (sin cambios significativos, solo el estado inicial)
  if (!originalItems || originalItems.length === 0) {
    return (
      <section className="py-12 bg-slate-50">
        {/* ... contenido de placeholder ... */}
        <div className="container mx-auto px-4 text-center">
            {title && <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">{title}</h2>}
            <p className="text-gray-600">No hay aliados para mostrar en este momento.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-sky-50 to-indigo-100">
      {/* ... resto del JSX sin cambios ... */}
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 relative">
        {title && (
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-700 px-4">
            {title}
          </h2>
        )}

        {originalItems.length > 1 && (
          <>
            <button
              onClick={() => navigate('prev')}
              className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Aliado anterior"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-700" />
            </button>
            <button
              onClick={() => navigate('next')}
              className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label="Siguiente aliado"
            >
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-sky-700" />
            </button>
          </>
        )}

        <div
          ref={viewportRef}
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={stripRef}
            className="flex flex-nowrap w-max py-8"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                ref={el => { itemRefs.current[index] = el; }}
                className="
                  flex-shrink-0
                  w-[280px] sm:w-[320px]
                  mx-2 sm:mx-3
                  group/card
                  bg-white rounded-xl shadow-xl
                  transition-shadow,transform duration-300 ease-in-out
                  overflow-hidden flex flex-col
                  hover:shadow-2xl 
                  hover:-translate-y-1
                  hover:scale-[1.02]
                "
              >
                <div className="relative w-full h-48 bg-gray-200 group-hover/card:bg-gray-300 transition-colors duration-300">
                  <Image
                    src={item.imageUrl} alt={item.name} layout="fill" objectFit="contain"
                    className="p-6 transition-transform duration-300 group-hover/card:scale-105"
                    draggable="false" priority={index < originalItems.length * 2}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold text-sky-700 mb-2 group-hover/card:text-indigo-700 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">{item.details}</p>
                </div>
                <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
                  <a
                    href="#" onClick={(e) => e.preventDefault()} draggable="false"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-300 group-hover/card:underline"
                  >
                    Saber más
                    <span aria-hidden="true" className="ml-1 group-hover/card:ml-2 transition-all duration-300"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlliesShowcaseSection;