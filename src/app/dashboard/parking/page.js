"use client";

import React, { useState } from "react";
import Image from "next/image";
import parkingImage1 from "./images/img1.png";
import parkingImage2 from "./images/img2.png";
import parkingImage3 from "./images/img3.png";

const Page = () => {
  const [selectedParking, setSelectedParking] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBookNow = (parking) => {
    setSelectedParking(parking);
  };

  const handleConfirmBooking = () => {
    // Implement your booking logic here
    setBookingConfirmed(true);
    setTimeout(() => {
      setSelectedParking(null);
      setBookingConfirmed(false);
    }, 2000); // Close popup after 2 seconds
  };

  const handleCloseModal = () => {
    setSelectedParking(null);
  };

  const parkingData = [
    {
      id: 1,
      image: parkingImage1,
      title: "Parking Space 1",
      name: "Back Side of Kalamandir, Unit-2",
      description:
        "Safe and secure parking facility near Mumbai Central Station.",
      pricePerHour: 100, // Sample price per hour
    },
    {
      id: 2,
      image: parkingImage2,
      title: "Parking Space 2",
      name: "Lingaraj Parking lot",
      description:
        "Safe and secure parking facility near Mumbai Central Station.",
      pricePerHour: 120, // Sample price per hour
    },
    {
      id: 3,
      image: parkingImage3,
      title: "Parking Space 3",
      name: "Big Bazar (Satya Nagar)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel quam vel tortor interdum aliquet.",
      pricePerHour: 150, // Sample price per hour
    },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Available Parking Spaces</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {parkingData.map((parking) => (
          <div
            key={parking.id}
            className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md  p-4"
          >
            <div className="relative h-40">
              <Image
                src={parking.image}
                alt={parking.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-md"
              />
            </div>
            <div className="p-4">
              <h3 className="text-sm text-gray-400 mb-3">{parking.title}</h3>
              <p className="text-xl font-semibold mb-2 ">{parking.name}</p>
              <p className="text-gray-600">{parking.description}</p>
              <p className="mt-2">Price per hour: ₹{parking.pricePerHour}</p>
              <button
                onClick={() => handleBookNow(parking)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Book Parking
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedParking && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white/5 backdrop-blur-md  border border-white/10 rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">
              Confirm Booking for {selectedParking.title}
            </h2>
            <p className="text-gray-600 mb-4">
              Price per hour: ₹{selectedParking.pricePerHour}
            </p>
            <div className="flex justify-end ">
              {!bookingConfirmed ? (
                <>
                  <button
                    onClick={handleCloseModal}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmBooking}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Confirm Booking
                  </button>
                </>
              ) : (
                <p>Booking successful!</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
