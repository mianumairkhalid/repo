import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bg-white shadow-lg bottom-8 right-8 z-[99]">
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    aria-label="scroll to top"
                    className="flex h-10 w-10 p-3 cursor-pointer items-center justify-center bg-primary text-black transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>

                </div>
            )}
        </div>
    );
}
