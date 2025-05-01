import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './contacto.module.css';

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        tipoUsuario: 'Cliente',
        telefono: '',
        motivo: '',
        comentario: '',
        aceptaCondiciones: false
    });

    const [showDropdown, setShowDropdown] = useState(false);
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleTipoUsuarioClick = (tipo) => {
        setFormData({
            ...formData,
            tipoUsuario: tipo,
            // Reset motivo cuando es Empresa
            // Reset telefono cuando es Cliente
            motivo: tipo === 'Empresa' ? '' : formData.motivo,
            telefono: tipo === 'Cliente' ? '' : formData.telefono
        });
    };

    const handleMotivoClick = (motivo) => {
        setFormData({
            ...formData,
            motivo: motivo
        });
        setShowDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Formateo de datos para el email
        const subject = formData.tipoUsuario === 'Cliente' 
            ? `Contacto Eventbride: ${formData.motivo || 'Consulta general'}`
            : `Contacto Eventbride: Empresa - ${formData.nombre}`;
        
        let body = `Nombre: ${formData.nombre}
Email: ${formData.email}
Tipo de Usuario: ${formData.tipoUsuario}
`;

        // Añadir campos específicos según el tipo de usuario
        if (formData.tipoUsuario === 'Empresa') {
            body += `Teléfono: ${formData.telefono}
`;
        } else {
            body += `Motivo: ${formData.motivo || 'No especificado'}
`;
        }

        body += `
Comentario:
${formData.comentario}`;
        
        // Mailto correo empresa
        const mailtoLink = `mailto:soporte@eventbride.fun?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Abrir correo electrónico del cliente
        window.location.href = mailtoLink;
        
        // Mensaje confirmación
        console.log('Formulario enviado:', formData);
        alert('Preparando email para enviar a soporte@eventbride.fun. Se abrirá tu cliente de correo electrónico.');
    };

    // Validación del formulario cuando el usuario es una empresa
    const isPhoneRequired = formData.tipoUsuario === 'Empresa';

    return (
        <Layout title="Contacto" description="Información de contacto de Eventbride">
            <div className={styles.contactContainer}>
                <h1 className={styles.title}>Contacta con nosotros</h1>
                <div className={styles.separator}></div>
                
                <p className={styles.description}>
                    Rellena los datos del formulario de solicitud de contacto, te responderemos con la mayor brevedad posible.
                </p>
                <p className={styles.description}>
                    Atención al usuario en días laborables.
                </p>

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={styles.formInput}
                        required
                    />
                    
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.formInput}
                        required
                    />
                    
                    <div className={styles.tipoUsuarioContainer}>
                        <div 
                            className={`${styles.tipoUsuario} ${formData.tipoUsuario === 'Cliente' ? styles.active : ''}`}
                            onClick={() => handleTipoUsuarioClick('Cliente')}
                        >
                            Cliente
                        </div>
                        <div 
                            className={`${styles.tipoUsuario} ${formData.tipoUsuario === 'Empresa' ? styles.active : ''}`}
                            onClick={() => handleTipoUsuarioClick('Empresa')}
                        >
                            Empresa
                        </div>
                    </div>
                    
                    {formData.tipoUsuario === 'Empresa' ? (
                        <input
                            type="tel"
                            name="telefono"
                            placeholder="Teléfono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className={styles.formInput}
                            required
                        />
                    ) : (
                        <div className={styles.selectContainer}>
                            <div 
                                className={styles.customSelect}
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                {formData.motivo || 'Selecciona un motivo'}
                            </div>
                            {showDropdown && (
                                <div className={styles.dropdown}>
                                    <div className={styles.dropdownItem} onClick={() => handleMotivoClick('Selecciona un motivo')}>
                                        Selecciona un motivo
                                    </div>
                                    <div className={styles.dropdownItem} onClick={() => handleMotivoClick('Herramientas del organizador de eventos')}>
                                        Herramientas del organizador de eventos
                                    </div>
                                    <div className={styles.dropdownItem} onClick={() => handleMotivoClick('Otros motivos')}>
                                        Otros motivos
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    
                    <textarea
                        name="comentario"
                        placeholder="Comentario"
                        value={formData.comentario}
                        onChange={handleChange}
                        className={styles.formTextarea}
                        rows="6"
                    ></textarea>
                    
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            name="aceptaCondiciones"
                            id="aceptaCondiciones"
                            checked={formData.aceptaCondiciones}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="aceptaCondiciones">
                            He leído y acepto las <a href="#" className={styles.link}>condiciones de uso</a> y de <a href="#" className={styles.link}>Privacidad</a>
                        </label>
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </Layout>
    );
}