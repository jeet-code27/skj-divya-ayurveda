import React from 'react';

const GoogleMapComponent = () => {
  return (
    <div className="w-full h-102 bg-gray-100 rounded-lg overflow-hidden shadow-lg ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.6864717011345!2d74.62704637488069!3d26.498037977789014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be7ab98ebe4a1%3A0xe6b8a0a889dbfdd8!2sSKJ%20Divya%20Ayurveda%20Hospital!5e0!3m2!1sen!2sin!4v1758699770208!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
  );
};

export default GoogleMapComponent;