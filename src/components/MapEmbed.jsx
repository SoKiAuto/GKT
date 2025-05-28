const MapEmbed = ({ lat = 23.076062, lng = 70.121391 }) => {
  const src = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="rounded-xl overflow-hidden shadow-lg mt-6">
      <iframe
        title="Gurukrupa Travels Location"
        src={src}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
