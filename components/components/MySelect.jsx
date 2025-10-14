'use client'
import React from "react";
import Select from "react-select";
import { useEffect, useState } from 'react'

const customStyles = {
    control: (base, state) => ({
      ...base,
      width: "100%",
      height: "100%",
      color: "#fff",
      backgroundColor: "none",
      border: "none",
      borderRadius: "none",
      borderBottom: state.isFocused ? "1px solid #000" : "1px solid #666666",
      boxShadow: state.isFocused ? "none" : "none",
      '&:hover': {
        borderColor: '#000'
      }
    }),
    label: (base, state) => ({
        ...base,
        display: "none"
    }),
    valueContainer: (base, state) => ({
      ...base,
      height: "100%",
      color: state.isFocused ? "#000" : "#000",
      padding: 0,
    }),
    input: (base, state) => ({
        ...base,
        width: "100%",
        height: "32px",
        color: "#000",
        padding: 0,
        minHeight: "100%",
        minWidth: "100%"
    }),
    placeholder: (base, state) => ({
        ...base,
        color: "#666",
        fontFamily: 'Lato'
    }),
    option: (base, state) => ({
      ...base,
      width: "100%",
      background: state.isFocused ? "#fff" : "#fff",
      marginBottom: "5px",
      fontSize: "16px",
      padding: "4px 10px",
      color: state.isFocused ? "#000" : "#000",
      "&:hover": {
        background: "#000",
        color: "#fff"
      }
    }),
    singleValue: (base, state) => ({
    ...base,
    color: "#000",
    }),
    menu: (base) => ({
    ...base,
    zIndex: 10,
    })
}

export default function MySelect({
  id,
  placeholder,
  options,
  selectedValue,
  onValueChange, 
  styles: overrideStyles
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const mergedStyles = {
    ...customStyles,
    ...(overrideStyles || {})
  };

  if (!isClient) return null
  return (
    <Select
      inputId={id}
      placeholder={placeholder}
      options={options}
      value={selectedValue}
      onChange={onValueChange}
      styles={mergedStyles}
      components={{ IndicatorSeparator: () => null }}
    />
  );
}