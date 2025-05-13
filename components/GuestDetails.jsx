import React from "react";

export default function GuestDetails({ guest, onBack }) {
  if (!guest) {
    return <p>No guest details available.</p>;
  }

  return (
    <article className="guest-details">
      <h3>{guest.name}</h3>
      <p>Email: {guest.email}</p>
      <p>Phone: {guest.phone}</p>
      <p>Bio: {guest.bio}</p>
      <p>Job: {guest.job}</p>
      <button onClick={onBack}>Back</button>
    </article>
  );
}
