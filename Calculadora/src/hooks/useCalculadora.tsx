import React, { useRef, useState } from 'react'

enum Operadores{
    suma,restar,multi,divi
}

export const useCalculadora = () => {

    
    const [numero, setNumero] = useState('0');
    const [lastnumero, setLastNumero] = useState('0');

    const LastOperacion = useRef<Operadores>();

    const limpiar = () =>{
        setNumero('0');
        setLastNumero('0');
    }

    const armarNumero = (numeroTexto: string)=>{

        if(numero.includes('.') && numeroTexto === '.') return;
        if(numero.startsWith('0') || numero.startsWith('-0'))
        {
            if(numeroTexto === '.')
            {
                setNumero(numero + numeroTexto);
            }
            else if( numeroTexto === '0' && numero.includes('.'))
            {
                setNumero(numero + numeroTexto);
            }
            else if(numeroTexto !== '0' && numero.includes('.')){
                setNumero(numero + numeroTexto);
            }else if(numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto);
            }
        }
        else
        {
            setNumero(numero + numeroTexto);
        }

    }

    const CambiarNumero = () =>{
        if(numero.endsWith('.')){
            setLastNumero(numero.slice(0,-1));
        }
        else{
            setLastNumero(numero);
        }
        setNumero('0');
    }

    const btnDelete = () => {
        let nega = '';
        let numtem = numero;

        if(numero.includes('-'))
        {
            nega = '-';
            numtem = numero.substr(1);
        }
        if (numtem.length > 1) {
            setNumero(nega + numtem.slice(0,-1));
        }
        else
        {
            setNumero('0')
        }
    }

    const posiNega = () => {
        if( numero.includes('-')){
            setNumero(numero.replace('-',''));
        }
        else{
            setNumero('-' + numero)
        }
    }

    const btnSumar = () => {
        CambiarNumero()
        LastOperacion.current = Operadores.suma;

    }
    const btnRestar = () => {
        CambiarNumero()
        LastOperacion.current = Operadores.restar;

    }
    const btnMulti = () => {
        CambiarNumero()
        LastOperacion.current = Operadores.multi;

    }
    const btnDivi = () => {
        CambiarNumero()
        LastOperacion.current = Operadores.divi;

    }
    const btnResul = () => {
       const num1 = Number(numero);
       const num2 = Number(lastnumero);

       switch (LastOperacion.current) {
        
        case Operadores.suma:

            setNumero( `${ num1 + num2 }` );
            break;
        case Operadores.restar:
                setNumero(`${ num2 - num1}`);            
                break;
        case Operadores.divi:
                setNumero(`${ num2 / num1 }`);            
                break;
        case Operadores.multi:
                setNumero(`${ num1 * num2}`);            
                break;
       
        default:
            break;
       }

       setLastNumero('0');

    }
  return {

    numero,
    lastnumero,
    limpiar,
    posiNega,
    btnDelete,
    btnDivi,
    armarNumero,
    btnMulti,
    btnRestar,
    btnSumar,
    btnResul,
    }
  
}
