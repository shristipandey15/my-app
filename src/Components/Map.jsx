import React from 'react'

const Map = () => {
  return (
    <div className="App">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.871909870715!2d83.46792817387012!3d27.62848347622779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968432be835a0b%3A0x9050d582cdb10658!2sNepathya%20College!5e0!3m2!1sen!2snp!4v1748166912679!5m2!1sen!2snp"
        style={{ width: '100%', height: '60vh', border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map
