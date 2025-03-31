import React from 'react';
import Layout from '@theme/Layout';

const teamData = [
  {
    role: 'Equipo de Marketing',
    members: [
      { name: 'Natalia Olmo Villegas', roles: ['Project Manager', 'Jefa de Marketing'], photo: '../static/img/olmo-natalia.png' },
      { name: 'Daniel Benito Hidalgo', roles: ['Encargado de Diseño', 'Gestor de Usuarios Piloto'], photo: '../static/img/benito-daniel.png' },
      { name: 'Fernando José de Celis Hurtado', roles: ['Gestor de Usuarios Piloto', 'Encargado de GDPR'], photo: '../static/img/de-celis-fernando.png' },
      { name: 'Manuel Pérez Velez', roles: [], photo: '../static/img/perez-manuel' },
    ],
  },
  {
    role: 'Equipo de Documentación',
    members: [
      { name: 'María de la Salud Carrera Talaverón', roles: ['Jefa de Código', 'Coordinadora de tiempos'], photo: '../static/img/carrera-maria.png' },
      { name: 'Ignacio Blanquero Blanco', roles: ['Secretario'], photo: '../static/img/blanquero-ignacio.png' },
      { name: 'Antonio Montero López', roles: [], photo: '../static/img/montero-antonio.png' },
      { name: 'Sergio Pons López', roles: ['Secretario'], photo: '../static/img/pons-sergio.png' },
    ],
  },
  {
    role: 'Equipo de Código',
    members: [
      { name: 'Adrián Cabello Martín', roles: ['Jefe de Desarrollo'], photo: '../static/img/cabello-adrian.png' },
      { name: 'Andrés Pizzano Cerrillos', roles: [], photo: '../static/img/pizzano-andres.png' },
      { name: 'Lorenzo Torralba Lanzas', roles: [], photo: '../static/img/torralba-lorenzo.png' },
      { name: 'Héctor Noguera González', roles: ['Policy Manager'], photo: '../static/img/noguera-hector.png' },
      { name: 'Gonzalo Navas Remmers', roles: ['Gestor de Usuarios Piloto'], photo: '../static/img/navas-gonzalo.png' },
      { name: 'Miguel Hernández Sánchez', roles: [], photo: '../static/img/hernandez-miguel.png' },
      { name: 'David Godoy Fernández', roles: ['Gestor de Usuarios Piloto'], photo: '../static/img/godoy-david.png' },
    ],
  },
  {
    role: 'Equipo de Revisión/Control de Calidad',
    members: [
      { name: 'Francisco Avilés Carrera', roles: ['Jefe de Revisión'], photo: '../static/img/aviles-francisco.png' },
      { name: 'Pablo Jesús Castellanos Compaña', roles: ['Jefe de Revisión'], photo: '../static/img/castellanos-pablo.png' },
    ],
  },
];

export default function EquipoPage() {
  return (
    <Layout title="Equipo" description="Conoce al equipo detrás de EventBride">
      <h1>Equipo de Desarrollo</h1>

      {/* Mostrar equipos */}
      {teamData.map((team, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h2>{team.role}</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {team.members.map((member, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ borderRadius: '50%', width: '150px', height: '150px' }}
                />
                <p>{member.name}</p>
                {member.roles.map((role, roleIdx) => (
                  <p key={roleIdx} style={{ fontSize: '0.9rem', color: 'gray' }}>
                    {role}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
}