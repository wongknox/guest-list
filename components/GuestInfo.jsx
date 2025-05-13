import React from "react";

export default function GuestInfo({ guest, onSelectGuest }) {
  return (
    <div
      className="guest-info"
      onClick={() => onSelectGuest(guest.id)}
      style={{
        display: "flex",
        padding: "8px 0",
        borderBottom: "1px solid #eee",
        cursor: "pointer",
      }}
    >
      <span style={{ flex: 2 }}>{guest.name}</span>
      <span style={{ flex: 3 }}>{guest.email}</span>
      <span style={{ flex: 2 }}>{guest.phone}</span>
    </div>
  );
}
