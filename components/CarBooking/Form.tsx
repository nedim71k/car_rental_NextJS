import { createBooking, getStoreLocations } from "@/services";
import { useUser, SignInButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

function Form({ car }: any) {
  const { user, isSignedIn } = useUser(); 
  const [storeLocation, setStoreLocation] = useState<any>([]);
  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    userName: "",
    carId: "",
  });

  const today = new Date().toISOString().split("T")[0];
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    getStoreLocations_();

    if (user?.emailAddresses?.[0]?.emailAddress) {
      setFormValue((prev) => ({
        ...prev,
        userName: user.emailAddresses[0].emailAddress,
      }));
    }
    if (car?.id) {
      setFormValue((prev) => ({
        ...prev,
        carId: car.id,
      }));
    }
  }, [user, car]);

  const getStoreLocations_ = async () => {
    const resp: any = await getStoreLocations();
    setStoreLocation(resp?.storesLocations || []);
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    const { location, pickUpDate, dropOffDate, pickUpTime, dropOffTime, contactNumber, carId } = formValue;

    if (!location || !pickUpDate || !dropOffDate || !pickUpTime || !dropOffTime || !contactNumber || !carId) {
      return false;
    }
    if (new Date(dropOffDate) < new Date(pickUpDate)) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (isFormValid()) {
      console.log("Form Data:", formValue);
      const resp = await createBooking(formValue);
      console.log("Booking Response:", resp);
    } else {
      console.error("Form is invalid. Please fill all fields correctly.");
    }
  };

  if (!isClient) {
    return null;
  }

  if (!isSignedIn) {
    return (
      <div className="text-center mt-5">
        <p className="text-lg text-red-600 font-semibold mb-3">
          You need to sign in to book a car.
        </p>
        <SignInButton mode="modal">
          <button className="btn bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600 text-white">
            Sign In
          </button>
        </SignInButton>
        <button className="btn bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600 text-white">
          Close
        </button>
      </div>
    );
  }

  return (
    <div suppressHydrationWarning>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Pick-up Location</label>
        <select
          className="select select-bordered w-full max-w-lg"
          name="location"
          onChange={handleChange}
          value={formValue.location}
        >
          <option disabled value="">
            Pick-Up Location?
          </option>
          {storeLocation.map((loc: any, index: number) => (
            <option key={index} value={loc?.address}>
              {loc?.address}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick-Up Date</label>
          <input
            type="date"
            min={today}
            name="pickUpDate"
            value={formValue.pickUpDate}
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
            min={formValue.pickUpDate || today}
            name="dropOffDate"
            value={formValue.dropOffDate}
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick-Up Time</label>
          <input
            type="time"
            name="pickUpTime"
            value={formValue.pickUpTime}
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            value={formValue.dropOffTime}
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={formValue.contactNumber}
          onChange={handleChange}
          className="input input-bordered w-full max-w-lg"
        />
      </div>

      <div className="modal-action">
      <button
    className="btn bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600 text-white"
    onClick={handleSubmit}
    disabled={!isFormValid()} 
  >
    Submit
  </button>
        <button className="btn bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600">
          Close
        </button>
      </div>
    </div>
  );
}

export default Form;
