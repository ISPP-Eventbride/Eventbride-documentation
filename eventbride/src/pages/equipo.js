import React from 'react';
import Layout from '@theme/Layout';

const teamData = [
  {
    role: 'Equipo de Marketing',
    members: [
      { name: 'Natalia Olmo Villegas', roles: ['Project Manager', 'Jefa de Marketing'] },
      { name: 'Daniel Benito Hidalgo', roles: [] },
      { name: 'Fernando José de Celis Hurtado', roles: [] },
      { name: 'Manuel Pérez Velez', roles: [] },
    ],
  },
  {
    role: 'Equipo de Documentación',
    members: [
      { name: 'María de la Salud Carrera Talaverón', roles: ['Jefa de Código', 'Coordinadora de tiempos'] },
      { name: 'Ignacio Blanquero Blanco', roles: [] },
      { name: 'Antonio Montero López', roles: [] },
      { name: 'Sergio Pons López', roles: [] },
    ],
  },
  {
    role: 'Equipo de Código',
    members: [
      { name: 'Adrián Cabello Martín', roles: ['Jefe de Desarrollo'] },
      { name: 'Andrés Pizzano Cerrillos', roles: [] },
      { name: 'Lorenzo Torralba Lanzas', roles: [] },
      { name: 'Héctor Noguera González', roles: [] },
      { name: 'Gonzalo Navas Remmers', roles: [] },
      { name: 'Miguel Hernández Sánchez', roles: [] },
      { name: 'David Godoy Fernández', roles: [] },
    ],
  },
  {
    role: 'Equipo de Revisión',
    members: [
      { name: 'Francisco Avilés Carrera', roles: ['Jefe de Revisión'] },
      { name: 'Pablo Jesús Castellanos Compaña', roles: ['Jefe de Revisión'] },
    ],
  },
];

export default function EquipoPage() {
  return (
    <Layout>
      <h1>Equipo de Desarrollo</h1>

      {/* Mostrar equipos */}
      {teamData.map((team, index) => (
        <div key={index} style={{ marginBottom: '2rem' }}>
          <h2>{team.role}</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {team.members.map((member, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <img
                  src="https://via.placeholder.com/150"
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