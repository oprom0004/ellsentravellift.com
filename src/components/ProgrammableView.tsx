/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Terminal, 
  Cpu, 
  Play, 
  Code, 
  Copy, 
  Check, 
  ShoppingCart, 
  FileText, 
  FlaskConical, 
  BatteryCharging, 
  Sun, 
  Activity, 
  Zap, 
  ExternalLink,
  ShieldCheck,
  Package
} from "lucide-react";
import { AppRoute } from "../types";
import { POWER_MODELS } from "../data";

interface ProgrammableProps {
  onNavigate?: (route: AppRoute) => void;
}

export default function ProgrammableView({ onNavigate }: ProgrammableProps) {
  const [terminalInput, setTerminalInput] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<Array<{ type: "cmd" | "resp" | "sys"; text: string }>>([
    { type: "sys", text: "eTommens Programmable eTM SCPI Terminal v3.14 initialized." },
    { type: "sys", text: "Ready for remote IEEE-488.2 query commands. Type or click samples below." }
  ]);

  const [simulatedVolt, setSimulatedVolt] = useState<number>(0);
  const [simulatedCurr, setSimulatedCurr] = useState<number>(0);
  const [simulatedOutput, setSimulatedOutput] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Filter models to emphasize programmable power models
  const programmablePsuOptions = POWER_MODELS;

  const commandTemplates = [
    { cmd: "*IDN?", desc: "Query machine name & SN" },
    { cmd: "VOLT 800.0", desc: "Program limit to 800V" },
    { cmd: "CURR 5.0", desc: "Program limit to 5A" },
    { cmd: "VOLT?", desc: "Read programmed voltage" },
    { cmd: "MEAS:VOLT?", desc: "Measure actual terminal Volts" },
    { cmd: "OUTP ON", desc: "Engage HV terminal relays" },
    { cmd: "OUTP OFF", desc: "Disengage output relays" }
  ];

  const handleExecute = (cmdText: string) => {
    if (!cmdText.trim()) return;
    const cleanCmd = cmdText.trim().toUpperCase();
    
    // Log user command
    const newLogs = [...terminalLogs, { type: "cmd" as const, text: `eTM> ${cmdText}` }];

    // SCPI simple parser simulation
    let reply = "";
    if (cleanCmd === "*IDN?") {
      reply = "ETOMMENS POWER CO., eTM-8005, SN2026060411, FW V3.14";
    } else if (cleanCmd.startsWith("VOLT ")) {
      const val = parseFloat(cleanCmd.split(" ")[1]);
      if (isNaN(val) || val < 0 || val > 800) {
        reply = "ERROR -222: Parameter out of range (0.0 to 800.0V)";
      } else {
        setSimulatedVolt(val);
        reply = "OK";
      }
    } else if (cleanCmd.startsWith("CURR ")) {
      const val = parseFloat(cleanCmd.split(" ")[1]);
      if (isNaN(val) || val < 0 || val > 6) {
        reply = "ERROR -222: Parameter out of range (0.0 to 6.0A)";
      } else {
        setSimulatedCurr(val);
        reply = "OK";
      }
    } else if (cleanCmd === "VOLT?") {
      reply = `${simulatedVolt.toFixed(2)} V`;
    } else if (cleanCmd === "MEAS:VOLT?") {
      if (!simulatedOutput) reply = "0.00 V";
      else {
        const dev = (Math.random() - 0.5) * 0.06;
        reply = `${Math.max(0, parseFloat((simulatedVolt + dev).toFixed(3)))} V`;
      }
    } else if (cleanCmd === "MEAS:CURR?") {
      if (!simulatedOutput) reply = "0.000 A";
      else {
        const simulatedLoadAmps = simulatedVolt > 0 ? (simulatedVolt / 150) : 0;
        const bounded = Math.min(simulatedCurr, simulatedLoadAmps);
        const dev = (Math.random() - 0.5) * 0.01;
        reply = `${Math.max(0, parseFloat((bounded + dev).toFixed(3)))} A`;
      }
    } else if (cleanCmd === "OUTP ON") {
      setSimulatedOutput(true);
      reply = "OK (Relay engaged - LIVE HIGH VOLTAGE TERMINALS)";
    } else if (cleanCmd === "OUTP OFF") {
      setSimulatedOutput(false);
      reply = "OK (Relay bypassed)";
    } else {
      reply = "ERROR -113: Undefined SCPI header or syntax mismatch";
    }

    setTerminalLogs([...newLogs, { type: "resp" as const, text: reply }]);
    setTerminalInput("");
  };

  const handleCopyPython = () => {
    const pythonCode = `import serial
import time

# Establish connection to Ellsen 800V DC PSU
ser = serial.Serial(port='COM3', baudrate=9600, timeout=1)

# Initialize and query identification
ser.write(b'*IDN?\\n')
print("Device IDN:", ser.readline().decode().strip())

# Configure safe test parameters
ser.write(b'VOLT 800.0\\n')
ser.write(b'CURR 5.0\\n')

# Turn on high-voltage output link
ser.write(b'OUTP ON\\n')
time.sleep(1) # Allow relay stabilization

# Read output back
ser.write(b'MEAS:VOLT?\\n')
print("Measured Volts:", ser.readline().decode().strip())

# Safe shutdown procedure
ser.write(b'OUTP OFF\\n')
ser.close()
`;
    navigator.clipboard.writeText(pythonCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div id="programmable-view" className="space-y-12">
      
      {/* Narrative Section */}
      <section id="programmable-intro" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <Terminal size={13} className="text-yellow-500" />
          <span className="text-xs font-mono font-medium text-yellow-500 uppercase tracking-wider font-semibold">Automated Lab Sequences</span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          Programmable 800V DC Power Supply Control & Procurement
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
          Designed specifically for automated testing and advanced diagnostic systems, the eTommens eTM 800V series integrates robust programming. Automate complex voltage profiles, simulate dynamic battery behaviors, and script device burn-in runs over stable <span className="text-gray-200">RS232/485 serial interfaces, standard Ethernet links, USB COM ports,</span> or optional <span className="text-gray-200">IEEE-488 GPIB interfaces</span> using industry-standard SCPI syntax.
        </p>
      </section>

      {/* Direct E-Commerce & Quote Section (Satisfying purchase intent) */}
      <section id="programmable-checkout-portal" className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-800 pb-4">
          <div>
            <h2 className="text-lg font-sans font-bold text-gray-150 flex items-center gap-2">
              <Package size={18} className="text-yellow-500" />
              Procure Programmable 800V Power Supplies
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Select standard digital-controlled models for immediate dispatch or custom enterprise integration setup.
            </p>
          </div>
          <button
            onClick={() => onNavigate && onNavigate(AppRoute.BUY_ONLINE)}
            className="text-[11px] font-mono text-yellow-500 hover:underline flex items-center gap-1 shrink-0"
          >
            Check Global Warehouse Stock
            <ExternalLink size={12} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-xs">
          {programmablePsuOptions.map((model) => (
            <div 
              key={model.id} 
              className="bg-[#141417] border border-gray-800 rounded-lg p-5 flex flex-col justify-between hover:border-gray-700/80 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-200 text-sm">{model.name}</h3>
                    <span className="text-[10px] font-mono text-gray-500 block">{model.rackSize}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-yellow-500 bg-yellow-500/10 px-2.5 py-0.5 rounded border border-yellow-500/20">
                    ${model.basePrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 bg-black/30 p-2.5 rounded font-mono text-[10px] text-gray-400">
                  <div>
                    <span className="block text-gray-600 uppercase text-[8px] tracking-wider">Output Voltage</span>
                    <span className="font-bold text-gray-300">0 - {model.voltage}V DC</span>
                  </div>
                  <div>
                    <span className="block text-gray-600 uppercase text-[8px] tracking-wider">Current Limit</span>
                    <span className="font-bold text-gray-300">0 - {model.current}A</span>
                  </div>
                  <div>
                    <span className="block text-gray-600 uppercase text-[8px] tracking-wider">Max Power</span>
                    <span className="font-bold text-gray-300">{(model.power / 1000).toFixed(1)} kW</span>
                  </div>
                  <div>
                    <span className="block text-gray-600 uppercase text-[8px] tracking-wider">Ripple</span>
                    <span className="font-bold text-cyan-400 text-[9px] truncate">{model.ripple.split("/")[0]}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {model.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-800/60">
                {model.buyUrl ? (
                  <a
                    href={model.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold uppercase text-[11px] rounded transition cursor-pointer w-full text-center"
                  >
                    <ShoppingCart size={12} />
                    Direct Buy Online ↗
                  </a>
                ) : (
                  <button
                    onClick={() => onNavigate && onNavigate(AppRoute.BUY_ONLINE)}
                    className="flex items-center justify-center gap-1.5 py-2 bg-yellow-500/85 hover:bg-yellow-500 text-gray-950 font-bold uppercase text-[11px] rounded w-full cursor-pointer"
                  >
                    Check Hub Stock
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Laboratory & Interactive Application Scenarios */}
      <section id="programmable-application-scenes" className="space-y-6">
        <div>
          <h2 className="text-xl font-sans font-bold text-gray-100 flex items-center gap-2">
            <FlaskConical size={18} className="text-cyan-400" />
            Laboratory & Scientific Research Scenarios
          </h2>
          <p className="text-xs text-gray-400 mt-1 max-w-3xl">
            See how programmatic automated voltage sweeps and SCPI remote control enable safety and absolute accuracy across diverse laboratory testing benches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs">
          
          {/* Scenario 1: EV Drivetrain Battery Pack Simulation */}
          <div className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
              <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <BatteryCharging size={16} />
              </div>
              <div>
                <h3 className="font-bold text-gray-200">1. EV BMS & Battery Charging Simulation</h3>
                <span className="text-[10px] text-gray-500 block font-mono">Electric Vehicle Hardware-in-the-Loop (HIL)</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Modern EV components (On-Board Chargers, high-voltage battery management chips, motor controllers) require evaluation profiles ranging between 400V and 800V DC. Using SCPI commands, engineers automate state-of-charge (SoC) profiles, verifying that diagnostic safety fuses, active charge/discharge systems, and heat management units trigger inside specified parameters.
            </p>
            <div className="bg-black/30 p-2.5 rounded font-mono text-[9px] text-[#85858c] space-y-1">
              <div><strong className="text-yellow-500">SAMPLE SCPI FLOW:</strong></div>
              <div>&gt; VOLT 800.0 <span className="text-[#555]">// Set peak protection limit to 800V</span></div>
              <div>&gt; CURR 6.0 <span className="text-[#555]">// Program current cap to 6A</span></div>
              <div>&gt; OUTP ON <span className="text-[#555]">// Safely engage high-voltage relays</span></div>
            </div>
          </div>

          {/* Scenario 2: Solar Array Simulator (MPPT Tracking Checks) */}
          <div className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
              <div className="p-1.5 bg-yellow-500/10 text-yellow-500 rounded-lg">
                <Sun size={16} />
              </div>
              <div>
                <h3 className="font-bold text-gray-200">2. Solar PV MPPT & Inverter Sweeps</h3>
                <span className="text-[10px] text-gray-500 block font-mono">Renewable Photovoltaic Optimization</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              String inverters operating near peak 800V ranges need continuous variable voltage sweeps to calibrate Maximum Power Point Tracking (MPPT) algorithms. The power supply acts as a Solar Array Simulator. By programming a curve array (varying voltage incrementally relative to output current), developers simulate fast weather shifts, cloud shadows, and sunrise ramps seamlessly.
            </p>
            <div className="bg-black/30 p-2.5 rounded font-mono text-[9px] text-[#85858c] space-y-1">
              <div><strong className="text-yellow-500">SAMPLE SCPI FLOW:</strong></div>
              <div>&gt; VOLT:RUMP 20.0 <span className="text-[#555]">// Config solar ramping rate</span></div>
              <div>&gt; CURR 3.5 <span className="text-[#555]">// Limit string simulate currents</span></div>
              <div>&gt; MEAS:POW? <span className="text-[#555]">// Polling active solar feedback</span></div>
            </div>
          </div>

          {/* Scenario 3: Supercapacitor Dynamic Aging Tests */}
          <div className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
              <div className="p-1.5 bg-cyan-500/10 text-cyan-400 rounded-lg">
                <Activity size={16} />
              </div>
              <div>
                <h3 className="font-bold text-gray-200">3. High-Voltage Capacitor Stress Checks</h3>
                <span className="text-[10px] text-gray-500 block font-mono">Continuous Component Lifetime Burn-In</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Capacitor research facilities and manufacturing quality-control desks stress-test film capacitors at elevated voltages. Programmed eTM systems can repeat charging cycles consecutively. The 16-bit high speed programming interface ramps up voltage safely, monitors active leakage current levels, and discharges the device under test safely when complete.
            </p>
            <div className="bg-black/30 p-2.5 rounded font-mono text-[9px] text-[#85858c] space-y-1">
              <div><strong className="text-yellow-500">SAMPLE SCPI FLOW:</strong></div>
              <div>&gt; VOLT 780.0 <span className="text-[#555]">// Test threshold target</span></div>
              <div>&gt; MEAS:CURR? <span className="text-[#555]">// Check leakage current (target &lt; 5mA)</span></div>
              <div>&gt; OUTP OFF <span className="text-[#555]">// Power down and engage active bleeders</span></div>
            </div>
          </div>

          {/* Scenario 4: Material Dielectric Breakdown & Physics Lab */}
          <div className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
              <div className="p-1.5 bg-purple-500/10 text-purple-400 rounded-lg">
                <Zap size={16} />
              </div>
              <div>
                <h3 className="font-bold text-gray-200">4. Scientific Materials & Physics Research</h3>
                <span className="text-[10px] text-gray-500 block font-mono">Electrostatic Fields & Breakdown Testing</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Academic research centers testing plasma containment, high-voltage insulation materials, and electrostatic deposition arrays rely on absolute resolution step controls. The eTM-8001 features standard low ripple (≤ 50mVrms) and micro-fine programming increments. If an avalanche breakdown occurs, active hardware overrides shut down power instantly for laboratory safety.
            </p>
            <div className="bg-black/30 p-2.5 rounded font-mono text-[9px] text-[#85858c] space-y-1">
              <div><strong className="text-yellow-500">SAMPLE SCPI FLOW:</strong></div>
              <div>&gt; VOLT 12.50 <span className="text-[#555]">// Fine-step starting excitation</span></div>
              <div>&gt; TRIP:STAT? <span className="text-[#555]">// Watch for short-circuit safety status</span></div>
              <div>&gt; VOLT:STEP 1.0 <span className="text-[#555]">// Configure resolution increment per loop</span></div>
            </div>
          </div>

        </div>
      </section>

      {/* Terminal and command list simulation */}
      <section id="terminal-simulation" className="space-y-4">
        <div>
          <h2 className="text-lg font-sans font-bold text-gray-150 flex items-center gap-2">
            <Terminal size={18} className="text-yellow-500" />
            Interactive SCPI Terminal Simulator
          </h2>
          <p className="text-xs text-gray-400">
            Interactive diagnostic simulator tool. Click any preset command on the right panel, or type commands manually into the prompt input line to inspect eTommens remote communication responses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Terminal Screen (Left) */}
          <div className="lg:col-span-8 bg-black/80 border border-gray-800 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-between animate-fadeIn" style={{ height: "400px" }}>
            
            {/* Header */}
            <div className="bg-[#121214] px-4 py-2 border-b border-gray-800 flex justify-between items-center text-[11px] font-mono select-none">
              <span className="text-gray-400 flex items-center gap-1.5">
                <Cpu size={12} className="text-yellow-500" />
                SCPI INTERACTIVE CONSOLE
              </span>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-gray-700"></span>
              </div>
            </div>

            {/* Logs */}
            <div className="p-4 overflow-y-auto space-y-2 font-mono text-[11px] flex-grow">
              {terminalLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={
                    log.type === "cmd"
                      ? "text-yellow-500"
                      : log.type === "resp"
                      ? "text-cyan-400"
                      : "text-gray-500 italic"
                  }
                >
                  {log.text}
                </div>
              ))}
            </div>

            {/* Input field */}
            <div className="bg-[#0f0f11] p-2 border-t border-gray-800 flex gap-2">
              <span className="text-gray-500 font-mono text-xs pl-2 shrink-0 py-1.5 select-none">eTM&gt;</span>
              <input
                id="scpi-input"
                type="text"
                value={terminalInput}
                onChange={e => setTerminalInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleExecute(terminalInput)}
                className="flex-grow bg-transparent border-none text-xs text-gray-200 focus:outline-none font-mono py-1"
                placeholder="Type SCPI query (e.g. VOLT 500) and hit Enter..."
              />
              <button
                id="btn-scpi-send"
                type="button"
                onClick={() => handleExecute(terminalInput)}
                className="px-4 bg-yellow-500 text-gray-950 font-bold font-mono text-xs rounded uppercase hover:bg-yellow-400 pointer transition select-none"
              >
                RUN
              </button>
            </div>
          </div>

          {/* Command Cheat Sheet List (Right) */}
          <div className="lg:col-span-4 bg-[#121214] border border-gray-800 rounded-xl p-5 space-y-4">
            <span className="block text-[10px] font-mono text-gray-400 uppercase tracking-widest">SCPI Core Codes</span>
            <p className="text-[11px] text-gray-500 leading-normal">Click any command to load and test in the diagnostic simulator:</p>
            
            <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
              {commandTemplates.map((item, idx) => (
                <button
                  key={idx}
                  id={`scpi-template-btn-${idx}`}
                  type="button"
                  onClick={() => {
                    setTerminalInput(item.cmd);
                    handleExecute(item.cmd);
                  }}
                  className="w-full text-left p-2.5 bg-[#161619] hover:bg-gray-800/40 border border-gray-800 hover:border-gray-700/80 rounded-lg transition flex justify-between items-center font-mono text-[10px] group cursor-pointer"
                >
                  <div>
                    <span className="block font-bold text-yellow-500">{item.cmd}</span>
                    <span className="block text-gray-500 text-[9px] mt-0.5">{item.desc}</span>
                  </div>
                  <Play size={10} className="text-gray-600 group-hover:text-yellow-500 transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Export Script Builder (Python format) */}
      <section id="code-snippet-export" className="bg-[#121214] border border-gray-800 rounded-xl overflow-hidden">
        <div className="bg-[#161619] px-6 py-3 border-b border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code size={16} className="text-yellow-500" />
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-200">Automated Python Script Template</h4>
          </div>
          <button
            id="btn-copy-python-code"
            type="button"
            onClick={handleCopyPython}
            className="text-[10px] text-gray-400 hover:text-white font-mono flex items-center gap-1 bg-[#18181b] border border-gray-800 px-3 py-1 rounded-md transition cursor-pointer"
          >
            {isCopied ? (
              <>
                <Check size={12} className="text-emerald-500" />
                Script Copied
              </>
            ) : (
              <>
                <Copy size={12} />
                Copy to Clipboard
              </>
            )}
          </button>
        </div>
        <pre className="p-6 overflow-x-auto text-xs text-yellow-500/80 font-mono bg-black/40 max-h-[320px] select-all leading-normal">
          {`import serial
import time

# Establish connection to Ellsen 800V DC PSU
ser = serial.Serial(port='COM3', baudrate=9600, timeout=1)

# Initialize and query identification
ser.write(b'*IDN?\\n')
print("Device IDN:", ser.readline().decode().strip())

# Configure safe test parameters
ser.write(b'VOLT 800.0\\n')
ser.write(b'CURR 5.0\\n')

# Turn on high-voltage output link
ser.write(b'OUTP ON\\n')
time.sleep(1) # Allow relay stabilization

# Read output back
ser.write(b'MEAS:VOLT?\\n')
print("Measured Volts:", ser.readline().decode().strip())

# Safe shutdown procedure
ser.write(b'OUTP OFF\\n')
ser.close()`}
        </pre>
      </section>
      
    </div>
  );
}
