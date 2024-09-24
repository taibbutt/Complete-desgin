import React, { useState, useEffect } from "react";

const RangeSlider = ({ min = 0, max = 0 }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  useEffect(() => {
    const trackFill = document.getElementById("track-fill");
    const minPercent = (minValue / 4500) * 100;
    const maxPercent = (maxValue / 4500) * 100;

    trackFill.style.left = `${minPercent}%`;
    trackFill.style.right = `${100 - maxPercent}%`;
  }, [minValue, maxValue]);

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= maxValue) {
      setMinValue(maxValue - 1);
    } else {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= minValue) {
      setMaxValue(minValue + 1);
    } else {
      setMaxValue(value);
    }
  };

  return (
  <>
    <div className="price-range w-full py-6">
      <div className="relative">
        {/* Min range slider */}
        <input
          id="min-range"
          type="range"
          min="0"
          max="4500"
          value={minValue}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none z-20 range-slider range-slider-min"
          onChange={handleMinChange}
        />
        {/* Max range slider */}
        <input
          id="max-range"
          type="range"
          min="0"
          max="4500"
          value={maxValue}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none z-20 range-slider range-slider-max"
          onChange={handleMaxChange}
        />

        {/* Track background */}
        <div className="h-1 bg-gray-300 rounded absolute inset-0 z-10"></div>

        {/* Track fill between sliders */}
        <div
          id="track-fill"
          className="h-1 bg-green-500 rounded absolute z-10"
        ></div>
      </div>
    </div>
     <div className="flex gap-2 mt-2 pb-4">
     <p>Price:</p>
     <span className="font-medium pb-2 text-sm">$ {minValue} - ${maxValue}</span>
   </div>
  </>
  );
};

export default RangeSlider;
