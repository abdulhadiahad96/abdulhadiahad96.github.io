
import { useEffect } from 'react';

function Preloader () {
  useEffect(() => {
    const handleLoad = () => {
      // preloader start
      let preloader = document.querySelector("#preloader");
      preloader.classList.add("preloaded");
      setTimeout(function () {
        preloader.remove();
      }, 1500);
      // preloader end
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <div id="preloader">
      <div className="loader_line"></div>
    </div>
  )
}

export default Preloader