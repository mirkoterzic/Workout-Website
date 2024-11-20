import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import "./TrainingPlanPage.css";

const TrainingPlanPage = () => {
  const [selectedImageOneOnOne, setSelectedImageOneOnOne] = useState(
    "/src/assets/images/ryan_with_client_1.jpg"
  );
  const [selectedImageGroup, setSelectedImageGroup] = useState(
    "/src/assets/images/group_workout_4.jpg"
  );
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentGallery, setCurrentGallery] = useState([]);

  const imagesOneOnOne = [
    "/src/assets/images/ryan_with_client_1.jpg",
    "/src/assets/images/ryan_with_client_2.jpg",
    "/src/assets/images/ryan_with_client_3.jpg",
    "/src/assets/images/ryan_with_client_4.jpg",
  ];

  const imagesGroup = [
    "/src/assets/images/group_workout_1.jpg",
    "/src/assets/images/group_workout_2.jpg",
    "/src/assets/images/group_workout_3.jpg",
    "/src/assets/images/group_workout_4.jpg",
  ];

  const openLightbox = (image, gallery) => {
    setLightboxOpen(true);
    setLightboxImage(image);
    setCurrentGallery(gallery);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  const navigateLightbox = (direction) => {
    const currentIndex = currentGallery.indexOf(lightboxImage);
    const newIndex =
      (currentIndex + direction + currentGallery.length) %
      currentGallery.length;
    setLightboxImage(currentGallery[newIndex]);
  };

  const navigateImageOneOnOne = (direction) => {
    const currentIndex = imagesOneOnOne.indexOf(selectedImageOneOnOne);
    const newIndex =
      (currentIndex + direction + imagesOneOnOne.length) %
      imagesOneOnOne.length;
    setSelectedImageOneOnOne(imagesOneOnOne[newIndex]);
  };

  const navigateImageGroup = (direction) => {
    const currentIndex = imagesGroup.indexOf(selectedImageGroup);
    const newIndex =
      (currentIndex + direction + imagesGroup.length) % imagesGroup.length;
    setSelectedImageGroup(imagesGroup[newIndex]);
  };

  return (
    <div className="training-plan-page bg-dark-gray text-white">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">
          Training Programs
        </h1>

        {/* One-on-One Personal Training Section */}
        <section className="training-program mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="program-info">
              <h2 className="text-4xl font-bold text-orange-500 mb-4">
                One-on-One Personal Training
              </h2>
              <p className="text-xl mb-4">
                Our one-on-one training sessions provide a comprehensive,
                personalized approach to fitness, focusing on your unique goals,
                limitations, and strengths. Work directly with our experienced
                trainers who will be with you every step of the way.
              </p>
              <p className="leading-relaxed mb-4">
                During these sessions, you'll receive real-time feedback,
                progress tracking, and personalized nutrition guidance, ensuring
                that every aspect of your fitness journey is optimized.
              </p>
              <p className="text-xl font-bold mb-2">Key Benefits:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Customized workout plans tailored to your goals.</li>
                <li>Personalized nutrition and dietary guidance.</li>
                <li>In-depth form correction and injury prevention.</li>
                <li>Regular performance assessments and goal adjustments.</li>
                <li>
                  Dedicated support for physical and mental fitness growth.
                </li>
              </ul>
              <p className="text-orange-500 font-semibold">
                Perfect for individuals looking to maximize results with
                focused, expert-led training sessions.
              </p>
            </div>

            <div className="program-gallery">
              <div className="main-image-container mb-4 relative">
                <img
                  src={selectedImageOneOnOne}
                  alt="Selected workout"
                  className="rounded-lg shadow-lg main-image cursor-pointer"
                  onClick={() =>
                    openLightbox(selectedImageOneOnOne, imagesOneOnOne)
                  }
                />
                <FaArrowLeft
                  className="gallery-nav-left"
                  onClick={() => navigateImageOneOnOne(-1)}
                />
                <FaArrowRight
                  className="gallery-nav-right"
                  onClick={() => navigateImageOneOnOne(1)}
                />
              </div>
              <div className="thumbnail-gallery grid grid-cols-4 gap-2 overflow-auto">
                {imagesOneOnOne.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail ${
                      image === selectedImageOneOnOne ? "selected" : ""
                    } rounded-lg cursor-pointer`}
                    onClick={() => setSelectedImageOneOnOne(image)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Group Workouts Section */}
        <section className="training-program mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="program-gallery order-2 lg:order-1">
              <div className="main-image-container mb-4 relative">
                <img
                  src={selectedImageGroup}
                  alt="Selected group workout"
                  className="rounded-lg shadow-lg main-image cursor-pointer"
                  onClick={() => openLightbox(selectedImageGroup, imagesGroup)}
                />
                <FaArrowLeft
                  className="gallery-nav-left"
                  onClick={() => navigateImageGroup(-1)}
                />
                <FaArrowRight
                  className="gallery-nav-right"
                  onClick={() => navigateImageGroup(1)}
                />
              </div>
              <div className="thumbnail-gallery grid grid-cols-4 gap-2 overflow-auto">
                {imagesGroup.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail ${
                      image === selectedImageGroup ? "selected" : ""
                    } rounded-lg cursor-pointer`}
                    onClick={() => setSelectedImageGroup(image)}
                  />
                ))}
              </div>
            </div>

            <div className="program-info order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-orange-500 mb-4">
                Group Workouts
              </h2>
              <p className="text-xl mb-4">
                Group workouts provide a lively, motivating atmosphere with
                structured sessions designed for all fitness levels.
              </p>
              <p className="leading-relaxed mb-4">
                Our group workouts are crafted to build strength, endurance, and
                cardiovascular health, while also fostering camaraderie.
              </p>
              <p className="text-xl font-bold mb-2">Highlights:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Motivating group environment and accountability.</li>
                <li>Scalable exercises to fit every fitness level.</li>
                <li>Fun, energetic sessions to keep you engaged.</li>
              </ul>
              <p className="text-orange-500 font-semibold">
                Perfect for those who thrive on social interaction and group
                energy during workouts.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox for image viewing */}
      {lightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <FaTimes className="close-icon" onClick={closeLightbox} />
            <img
              src={lightboxImage}
              alt="Lightbox"
              className="lightbox-image"
            />
            <FaArrowLeft
              className="lightbox-nav-left"
              onClick={() => navigateLightbox(-1)}
            />
            <FaArrowRight
              className="lightbox-nav-right"
              onClick={() => navigateLightbox(1)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingPlanPage;
