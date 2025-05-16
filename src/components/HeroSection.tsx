import { cn } from '../lib/utils';
import monlyBgVideo from '../assets/monlybg.mp4';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className }: HeroSectionProps = {}) => {

  return (
    <section id="hero" className={cn(
      "relative flex flex-col items-center justify-center min-h-[100vh] overflow-hidden",
      className
    )}>
      {/* Main background Video - Fully Responsive */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full md:w-auto md:min-w-full lg:min-w-full xl:min-w-full"
            style={{ 
              opacity: 1,
              objectFit: 'contain',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              maxHeight: '100vh',
              maxWidth: '100vw'
            }}
        >
          <source src={monlyBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
      
      {/* Content container for any future content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
        {/* Hero content can be added here if needed */}
      </div>


    </section>
  );
}

export default HeroSection;