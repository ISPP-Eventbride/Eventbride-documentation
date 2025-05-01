import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from '../css/equipo.module.css';

const teamData = [
  {
    team: 'Equipo de Marketing',
    members: [
      { name: 'Natalia Olmo Villegas', roles: ['Project Manager', 'Jefa de Marketing'], photo: '/img/olmo-natalia.png', url: 'https://github.com/nataliaaolmo' },
      { name: 'Daniel Benito Hidalgo', roles: ['Encargado de Diseño', 'Gestor de Usuarios Piloto', 'Community Manager'], photo: '/img/benito-daniel.png', url: 'https://github.com/d4niel980' },
      { name: 'Fernando José de Celis Hurtado', roles: ['Gestor de Usuarios Piloto', 'Encargado de GDPR'], photo: '/img/de-celis-fernando.png', url: 'https://github.com/ferdehur' },
      { name: 'Manuel Pérez Velez', roles: ['Community Manager'], photo: '/img/perez-manuel.png', url: 'https://github.com/manpervel2' },
    ],
  },
  {
    team: 'Equipo de Documentación',
    members: [
      { name: 'María de la Salud Carrera Talaverón', roles: ['Jefa de Documentación', 'Coordinadora de tiempos'], photo: '/img/carrera-maria.png', url: 'https://github.com/maryycarrera' },
      { name: 'Ignacio Blanquero Blanco', roles: ['Secretario'], photo: '/img/blanquero-ignacio.png', url: 'https://github.com/ignblabla' },
      { name: 'Antonio Montero López', roles: [], photo: '/img/montero-antonio.png', url: 'https://github.com/antonio-mz' },
      { name: 'Sergio Pons López', roles: ['Secretario'], photo: '/img/pons-sergio.png', url: 'https://github.com/sergiopons-1' },
    ],
  },
  {
    team: 'Equipo de Código',
    members: [
      { name: 'Adrián Cabello Martín', roles: ['Jefe de Desarrollo'], photo: '/img/cabello-adrian.png', url: 'https://github.com/Adrcabmar' },
      { name: 'Andrés Pizzano Cerrillos', roles: [], photo: '/img/pizzano-andres.png', url: 'https://github.com/andpizcer' },
      { name: 'Lorenzo Torralba Lanzas', roles: [], photo: '/img/torralba-lorenzo.png', url: 'https://github.com/lorenx16' },
      { name: 'Héctor Noguera González', roles: ['Policy Manager'], photo: '/img/noguera-hector.png', url: 'https://github.com/HectorNG840' },
      { name: 'Gonzalo Navas Remmers', roles: ['Gestor de Usuarios Piloto'], photo: '/img/navas-gonzalo.png', url: 'https://github.com/gonnavrem' },
      { name: 'Miguel Hernández Sánchez', roles: [], photo: '/img/hernandez-miguel.png', url: 'https://github.com/Yato03' },
      { name: 'David Godoy Fernández', roles: ['Gestor de Usuarios Piloto'], photo: '/img/godoy-david.png', url: 'https://github.com/Davgodfer' },
    ],
  },
  {
    team: 'Equipo de Revisión/Control de Calidad',
    members: [
      { name: 'Francisco Avilés Carrera', roles: ['Jefe de Revisión'], photo: '/img/aviles-francisco.png', url: 'https://github.com/franavi' },
      { name: 'Pablo Jesús Castellanos Compaña', roles: ['Jefe de Revisión'], photo: '/img/castellanos-pablo.png', url: 'https://github.com/Pablo-J-Castellanos' },
    ],
  },
];

export default function EquipoPage() {
  return (
    <Layout title="Equipo" description="Conoce al equipo detrás de EventBride">
      <div className="container">
        <h1 className={styles.centeredTitle}>Equipo de Desarrollo</h1>

        {teamData.map((team, index) => {
          if (team.team === 'Equipo de Código') {
            // Dividir el equipo de código en dos filas
            const firstRow = team.members.slice(0, 4);
            const secondRow = team.members.slice(4);

            return (
              <div key={index}>
                <h2 className={styles.centeredTitle}>{team.team}</h2>
                <div className={styles.teamGrid2rows}>
                  {/* Primera fila */}
                  <div className={styles.teamGrid}>
                    {firstRow.map((member, idx) => (
                      <div key={idx} className={clsx(styles.cardMember)}>
                        <a href={member.url} target="_blank" rel="noopener noreferrer">
                          <img src={member.photo} alt={member.name} />
                        </a>
                        <h6>{member.name}</h6>
                        <div>
                          {member.roles.map((role, roleIdx) => (
                            <span key={roleIdx} className={clsx(styles.tag)}>
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Segunda fila */}
                  <div className={styles.teamGrid3People}>
                    {secondRow.map((member, idx) => (
                      <div key={idx} className={clsx(styles.cardMember)}>
                        <a href={member.url} target="_blank" rel="noopener noreferrer">
                          <img src={member.photo} alt={member.name} />
                        </a>
                        <h6>{member.name}</h6>
                        <div>
                          {member.roles.map((role, roleIdx) => (
                            <span key={roleIdx} className={clsx(styles.tag)}>
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          // Renderizar el equipo de revisión
          if (team.team === 'Equipo de Revisión/Control de Calidad') {
            return (
              <div key={index}>
                <h2 className={styles.centeredTitle}>{team.team}</h2>
                <div className={styles.teamGrid2People}>
                  {team.members.map((member, idx) => (
                    <div key={idx} className={clsx(styles.cardMember)}>
                      <a href={member.url} target="_blank" rel="noopener noreferrer">
                        <img src={member.photo} alt={member.name} />
                      </a>
                      <h6>{member.name}</h6>
                      <div>
                        {member.roles.map((role, roleIdx) => (
                          <span key={roleIdx} className={clsx(styles.tag)}>
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // Renderizar otros equipos normalmente
          return (
            <div key={index}>
              <h2 className={styles.centeredTitle}>{team.team}</h2>
              <div className={styles.teamGrid}>
                {team.members.map((member, idx) => (
                  <div key={idx} className={clsx(styles.cardMember)}>
                    <a href={member.url} target="_blank" rel="noopener noreferrer">
                      <img src={member.photo} alt={member.name} />
                    </a>
                    <h6>{member.name}</h6>
                    <div>
                      {member.roles.map((role, roleIdx) => (
                        <span key={roleIdx} className={clsx(styles.tag)}>
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}