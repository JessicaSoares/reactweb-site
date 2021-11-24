import {
    createContext,
    useCallback,
    useContext,
    useState,
    useEffect,
  } from 'react';
  
  interface SizeState {
    width: number;
    height: number;
  }
  
  interface WindowSizeContextData {
    windowSize: SizeState;
  }
  
  const AppContext = createContext<WindowSizeContextData>(
    {} as WindowSizeContextData,
  );
  
  export function GetWindowSize({ children }) {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState<SizeState>({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // only execute all the code below in client side
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      if (typeof window !== 'undefined') {
        // Handler to call on window resize
  
        // Add event listener
        window.addEventListener('resize', handleResize);
  
        // Call handler right away so state gets updated with initial window size
        handleResize();
  
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return (
      <AppContext.Provider value={{ windowSize }}>{children}</AppContext.Provider>
    );
  }
  
  export const useWindowSize = () => {
    return useContext(AppContext);
  };