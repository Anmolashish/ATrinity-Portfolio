import { ArrowUpRight } from "lucide-react";

export default function PageHeader({
  headingText,
  paraText,
  buttonText,
  buttonLink,
  onButtonClick,
  className = "",
  showButton = true,
  headingClassName = "",
  paraClassName = "",
  buttonClassName = "",
}) {
  // Render button content
  const renderButton = () => {
    if (!showButton || !buttonText) return null;

    const buttonContent = (
      <>
        {buttonText}
        <ArrowUpRight size={20} />
      </>
    );

    const buttonClasses = `bg-black text-white px-6 sm:px-8 py-3 sm:py-4 mx-auto mt-3 rounded-full text-base sm:text-lg font-medium flex items-center gap-2 hover:bg-gray-900 transition shrink-0 ${buttonClassName}`;

    if (buttonLink) {
      return (
        <a href={buttonLink} className={buttonClasses} onClick={onButtonClick}>
          {buttonContent}
        </a>
      );
    }

    return (
      <button className={buttonClasses} onClick={onButtonClick}>
        {buttonContent}
      </button>
    );
  };

  return (
    <div className={`text-center my-20 ${className}`}>
      <h1
        className={`font-serif text-[45px] sm:text-5xl lg:text-[64px] leading-[1.1] font-light tracking-tight ${headingClassName}`}
      >
        {headingText}
      </h1>

      {paraText && (
        <p
          className={`text-base m-auto mt-5 font-[var(--font-istok)] max-w-[720px] w-[90%] text-gray-700 animate-fade-up delay-100 ${paraClassName}`}
        >
          {paraText}
        </p>
      )}

      {/* Button - optional */}
      {renderButton()}
    </div>
  );
}
