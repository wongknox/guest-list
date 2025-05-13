import React from "react";
import GuestInfo from "./GuestInfo";

export default function GuestList({ guests, onSelectGuest }) {
  return (
    <article className="guests">
      <div style={{ display: "flex", fontWeight: "bold", marginBottom: "5px" }}>
        <span style={{ flex: 2 }}>Name</span>
        <span style={{ flex: 3 }}>Email</span>
        <span style={{ flex: 2 }}>Phone</span>
      </div>
      {guests.map((guest) => (
        <GuestInfo key={guest.id} guest={guest} onSelectGuest={onSelectGuest} />
      ))}
      <p style={{ marginTop: "10px", fontSize: "0.9em" }}>
        Select a guest to see more details.
      </p>
    </article>
  );
}
