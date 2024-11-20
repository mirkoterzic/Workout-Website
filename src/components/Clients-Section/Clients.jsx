import React from "react";
import "./Clients.css"; // Import your CSS file for additional styling

const testimonialsWithImages = [
  {
    clientName: "Jane Doe",
    quote:
      "I never thought I could achieve this level of fitness. Ryan's program changed my life!",
    stars: 5,
    clientImage: "/src/assets/images/jane_after.jpg",
  },
  {
    clientName: "John Smith",
    quote:
      "The personalized attention I received was incredible. I feel stronger and more confident!",
    stars: 5,
    clientImage: "/src/assets/images/john_after.jpg",
  },
];

const testimonialsWithoutImages = [
  {
    clientName: "Emily Johnson",
    quote:
      "I loved every session! The group workouts kept me motivated, and I’ve seen amazing results.",
    stars: 4,
  },
  {
    clientName: "Michael Brown",
    quote: "Ryan's guidance was exactly what I needed to reach my goals.",
    stars: 5,
  },
  {
    clientName: "Sarah Davis",
    quote: "The best fitness experience I’ve ever had!",
    stars: 5,
  },
  {
    clientName: "David Wilson",
    quote: "I achieved my weight loss goals thanks to the fantastic support.",
    stars: 4,
  },
];

const Clients = () => {
  return (
    <div className="clients-section py-12  text-white">
      <div className="max-w-6xl  mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-orange-500">
          Client Testimonials
        </h2>

        {/* Testimonials with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonialsWithImages.map((client, index) => (
            <div
              key={index}
              className="testimonial-card rounded-lg bg-gray-800 shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-4">{client.clientName}</h3>
              <div className="flex mb-4">
                {Array.from({ length: client.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-500 mr-1">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-4">"{client.quote}"</p>
              <div className="after-image-container flex justify-center">
                <img
                  src={client.clientImage}
                  alt={`${client.clientName} After`}
                  className="before-after-image" // Removed width to make it responsive
                />
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials without Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsWithoutImages.map((client, index) => (
            <div
              key={index}
              className="testimonial-card rounded-lg bg-gray-800 shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold mb-4">{client.clientName}</h3>
              <div className="flex mb-4">
                {Array.from({ length: client.stars }).map((_, i) => (
                  <span key={i} className="text-yellow-500 mr-1">
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-4">"{client.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
