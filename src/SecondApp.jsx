import PropTypes from 'prop-types';
import React from 'react';

export const SecondApp = ({title, subtitle, name}) => {
  //si title no existe
  // if(!title){
  //   throw new Error('El title no existe')
    
  // }

  return (
    <>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h4>{name}</h4>
    </>
  )
}

// Validación de props
SecondApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired, // Requerido y debe ser un número
  name: PropTypes.string, // Opcional, tipo string
};

// Valores predeterminados de los props
SecondApp.defaultProps = {
  title: 'NO hay titulo',
  subtitle: 0, // Cambiado a un número para coincidir con propTypes
  name: 'Ariana Alisson',
};
