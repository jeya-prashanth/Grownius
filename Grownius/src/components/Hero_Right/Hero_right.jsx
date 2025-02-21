import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroRight = () => {
  const [inputs, setInputs] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    pH_Level: "",
    rainfall: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const validateFields = () => {
    const newErrors = {};

    if (!inputs.nitrogen || isNaN(inputs.nitrogen) || inputs.nitrogen < 0) {
      newErrors.nitrogen = "Enter a valid nitrogen level (≥ 0)";
    }
    if (!inputs.phosphorus || isNaN(inputs.phosphorus) || inputs.phosphorus < 0) {
      newErrors.phosphorus = "Enter a valid phosphorus level (≥ 0)";
    }
    if (!inputs.potassium || isNaN(inputs.potassium) || inputs.potassium < 0) {
      newErrors.potassium = "Enter a valid potassium level (≥ 0)";
    }
    if (!inputs.temperature || isNaN(inputs.temperature)) {
      newErrors.temperature = "Enter a valid temperature";
    }
    if (!inputs.humidity || isNaN(inputs.humidity) || inputs.humidity < 0 || inputs.humidity > 100) {
      newErrors.humidity = "Enter humidity between 0 - 100%";
    }
    if (!inputs.pH_Level || isNaN(inputs.pH_Level) || inputs.pH_Level < 0 || inputs.pH_Level > 14) {
      newErrors.pH_Level = "Enter pH level between 0 - 14";
    }
    if (!inputs.rainfall || isNaN(inputs.rainfall) || inputs.rainfall < 0) {
      newErrors.rainfall = "Enter a valid rainfall amount (≥ 0)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = () => {
    if (validateFields()) {
      navigate("/ask-grownius", { state: { ...inputs } });
    }
  };

  return (
    <div className="flex justify-between">
      <div className="br-30 bt-30.5">
        <div className="w-[580px] h-auto bg-white rounded-[25px] p-10">
          <h1 className="text-cyan-950 text-[25px] font-bold">Know Your Land</h1>

          <div className="flex gap-6 pt-7.5 justify-between items-end ">
            {["nitrogen", "phosphorus", "potassium"].map((field) => (
              <div key={field}>
                <h1 className="text-[15px] text-cyan-950 font-bold">
                  {field.charAt(0).toUpperCase() + field.slice(1)} level
                </h1>
                <div className="flex items-center relative w-fit pt-[10px] text-[15px] font-medium">
                  <input
                    name={field}
                    value={inputs[field]}
                    onChange={handleChange}
                    className={`border-[1.5px] ${
                      errors[field] ? "border-red-500" : inputs[field] ? "border-[#04364A]" : "border-[#04364A4A]"
                    } rounded-[8px] text-cyan-950 w-[151px] h-[50px] pl-[15px] font-medium outline-none bg-transparent placeholder-[#04364A4A]`}
                    type="text"
                    placeholder="_ _ _"
                  />
                  <span className="absolute right-3 top-[60%] transform -translate-y-1/2 text-[#04364A4A]">mg/kg</span>
                </div>
                {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
              </div>
            ))}
          </div>

          {[
            { name: "temperature", placeholder: "Enter environment temperature", unit: "e.g. 25°C" },
            { name: "humidity", placeholder: "Enter humidity level", unit: "e.g. 60%" },
            { name: "pH_Level", placeholder: "Enter soil pH", unit: "e.g. 6.5" },
            { name: "rainfall", placeholder: "Enter rainfall", unit: "e.g. 120mm/year" },
          ].map(({ name, placeholder, unit }) => (
            <div key={name} className="flex flex-col mt-4">
              <h1 className="text-[15px] text-cyan-950 font-bold">{name.replace("_", " ")}</h1>
              <div className="flex items-center relative w-fit pt-[10px] text-[15px] font-medium">
                <input
                  name={name}
                  value={inputs[name]}
                  onChange={handleChange}
                  type="text"
                  placeholder={placeholder}
                  className={`border-[1.5px] ${
                    errors[name] ? "border-red-500" : inputs[name] ? "border-[#04364A]" : "border-[#04364A4A]"
                  } text-[#04364A] p-2 rounded-[8px] w-[500px] h-[50px] outline-none bg-transparent placeholder-[#04364A4A]`}
                />
                <span className="absolute right-3 top-[60%] transform -translate-y-1/2 text-[#04364A4A]">{unit}</span>
              </div>
              {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
            </div>
          ))}

          <div>
            <button
              onClick={handleSubmit}
              className="flex items-center justify-center w-[500px] h-[60px] bg-cyan-700 rounded-[100px] text-[15px] font-bold text-white mt-[20px] transition duration-300 hover:bg-cyan-800"
            >
              Ask Grownius
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
