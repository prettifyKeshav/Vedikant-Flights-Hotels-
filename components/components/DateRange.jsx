'use client'
import { useState, useRef, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function DateRangeFilter() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const ref = useRef(null);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (item) => {
    setRange([item.selection]);
    setSelected(true);
    setOpen(false); // optional: close on select
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div className='date_select' style={{ position: 'relative', display: 'inline-block' }} ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          border: '1px solid #666',
          borderRadius: "5px",
          width:"200px",
          backgroundColor: "#fff",
          color: "#666",
          padding: '4px 10px',
          fontSize: '14px',
          height: '30px',
          lineHeight: '17px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {selected
          ? `${format(range[0].startDate, 'dd/MM/yyyy')} - ${format(range[0].endDate, 'dd/MM/yyyy')}`
          : 'Date'}
        <span style={{ fontSize: '12px', marginTop: '1px' }}></span>
      </button>

      {open && (
        <div
          className='date_select_dropdown'
          style={{
            position: 'absolute',
            zIndex: 1000,
            left: "-50%",
            top: '100%',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <DateRange
            editableDateInputs={true}
            onChange={handleSelect}
            moveRangeOnFirstSelection={false}
            ranges={range}
          />
        </div>
      )}
    </div>
  );
}
