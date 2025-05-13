import React, { useState } from "react";
import useQuery from "./useQuery";
import GuestList from "../components/GuestList";
import GuestDetails from "../components/GuestDetails";

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const {
    data: guests,
    loading: loadingGuests,
    error: errorGuests,
  } = useQuery("/guests");
  const {
    data: selectedGuest,
    loading: loadingDetails,
    error: errorDetails,
  } = useQuery(selectedGuestId ? `/guests/${selectedGuestId}` : null);

  const handleSelectGuest = (id) => {
    setSelectedGuestId(id);
  };

  const handleBack = () => {
    setSelectedGuestId(null);
  };

  if (loadingGuests) return <p>Loading guests...</p>;
  if (errorGuests) return <p>Error loading guests: {errorGuests.message}</p>;
  if (!guests) return <p>No guests found.</p>;

  return (
    <>
      <h1>Guest List</h1>
      {selectedGuest ? (
        <>
          <h2>Guest Details</h2>
          {loadingDetails && <p>Loading guest details...</p>}
          {errorDetails && (
            <p>Error loading guest details: {errorDetails.message}</p>
          )}
          {selectedGuest && (
            <GuestDetails guest={selectedGuest} onBack={handleBack} />
          )}
        </>
      ) : (
        <GuestList guests={guests} onSelectGuest={handleSelectGuest} />
      )}
    </>
  );
}
