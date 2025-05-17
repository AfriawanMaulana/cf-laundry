import Marquee from "react-fast-marquee";
import ReviewsJSON from "../data/reviews.json";

const MarqueeComponent = () => {
    const filteredReviews = ReviewsJSON.filter((review) => review?.text?.trim());

    return (
        <div className="overflow-hidden my-14 px-4">
            <Marquee speed={40} pauseOnHover gradient={true} gradientWidth={50}>
                {filteredReviews.map((review, index) => (
                    <div
                        key={index}
                        className="mx-3 flex-shrink-0 flex flex-col justify-between text-left p-4 w-[220px] md:w-[300px] h-[180px] bg-white border border-green-200 rounded-xl shadow-md shadow-green-100 hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Stars */}
                        <div className="flex gap-1 text-yellow-400 text-sm mb-2">
                            {Array.from({ length: review.stars }).map((_, i) => (
                                <span key={i}>⭐</span>
                            ))}
                            ({review.stars})
                        </div>

                        {/* Text */}
                        <p className="text-gray-700 text-sm italic mb-4 line-clamp-4">
                            {`"${review.text}"`}
                        </p>

                        {/* Name */}
                        <h1 className="text-sm font-semibold text-dark-green text-right">
                            ~ {review.name}
                        </h1>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeComponent;
