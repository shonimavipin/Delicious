import React from 'react';
import chefs6 from '../asstes/chefs6.jpeg';
import chefs5 from '../asstes/chefs5.jpeg';
import chefs4 from '../asstes/chefs4.jpeg';
import chefs3 from '../asstes/chefs3.jpeg';
import teamBanner from '../asstes/bg2.jpg';

const chefs = [
  {
    name: 'Mike Doe',
    title: 'Master Chef',
    img: chefs6,
    socials: [
      { icon: 'fab fa-facebook-f', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
      { icon: 'fab fa-instagram', url: '#' },
    ],
  },
  {
    name: 'John Smith',
    title: 'Soup Chef',
    img: chefs5,
    socials: [
      { icon: 'fab fa-facebook-f', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
      { icon: 'fab fa-instagram', url: '#' },
    ],
  },
  {
    name: 'Ana Soley',
    title: 'Grill Chef',
    img: chefs4,
    socials: [
      { icon: 'fab fa-facebook-f', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
      { icon: 'fab fa-instagram', url: '#' },
    ],
  },
  {
    name: 'Jenna Sue',
    title: 'Pizza Chef',
    img: chefs3,
    socials: [
      { icon: 'fab fa-facebook-f', url: '#' },
      { icon: 'fab fa-twitter', url: '#' },
      { icon: 'fab fa-instagram', url: '#' },
    ],
  },
];

export default function TeamService() {
  return (
    <div>
      {/* Banner */}
      <div style={{
        width: '100%',
        height: 180,
        background: `url(${teamBanner}) center center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        position: 'relative',
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.4)',
          position: 'absolute',
          top: 0,
          left: 0,
        }} />
        <h2 style={{
          color: 'white',
          zIndex: 1,
          position: 'relative',
          fontWeight: 600,
          fontSize: '2.5rem',
        }}>Awesome chefs</h2>
      </div>
      {/* Chefs Grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {chefs.map((chef, idx) => (
            <div key={idx} style={{ width: 220, marginBottom: 32 }}>
              <div style={{
                width: 180,
                height: 180,
                margin: '0 auto 16px auto',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '6px solid #f6f6f6',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img src={chef.img} alt={chef.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ fontWeight: 600, fontSize: 20 }}>{chef.name}</div>
              <div style={{ color: '#888', fontSize: 15, marginBottom: 10 }}>{chef.title}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 18 }}>
                {chef.socials.map((s, i) => (
                  <a key={i} href={s.url} style={{ color: '#222', fontSize: 18 }}>
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
