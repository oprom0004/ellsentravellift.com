/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Shield, HelpCircle, ToggleLeft, Zap, Wrench, CheckSquare, RefreshCw } from "lucide-react";

export default function HowToUseView() {
  // Simulator state:
  const [wiresConnected, setWiresConnected] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState({
    loto: false,
    ground: false,
    gloves: false,
    isolation: false,
    discharge: false
  });
  const [isPowerOn, setIsPowerOn] = useState<boolean>(false);
  const [voltageSetting, setVoltageSetting] = useState<number>(400); // starts at 400V
  const [currentDisplay, setCurrentDisplay] = useState<number>(0);
  const [rippleFactor, setRippleFactor] = useState<number>(0.02);

  // Safety checklist validation
  const allSafetyChecked = Object.values(checkedItems).every(v => v);

  // Simulate current reading with minor electric noise
  useEffect(() => {
    let interval: any;
    if (isPowerOn && wiresConnected) {
      interval = setInterval(() => {
        // Mock current draw based on Ohm's law assuming a 150 Ohm resistive thermal test load
        const rawCurrent = voltageSetting / 150;
        // add small random noise
        const noise = (Math.random() - 0.5) * 0.04;
        setCurrentDisplay(Math.min(6.0, parseFloat((rawCurrent + noise).toFixed(3))));
        // slightly adjust ripple based on current
        setRippleFactor(parseFloat((0.01 + (rawCurrent / 100)).toFixed(4)));
      }, 350);
    } else {
      setCurrentDisplay(0);
      setRippleFactor(0);
    }
    return () => clearInterval(interval);
  }, [isPowerOn, wiresConnected, voltageSetting]);

  const toggleCheck = (key: keyof typeof checkedItems) => {
    if (isPowerOn) return; // cannot change safety checks while live!
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePowerSwitch = () => {
    if (!wiresConnected) {
      alert("Error: High Voltage terminal routing is disconnected! Connect high-voltage cabling first.");
      return;
    }
    if (!allSafetyChecked) {
      alert("WARNING: Safety checkpoints must be completed to prevent hazardous arc discharge! Check all safety parameters first.");
      return;
    }
    setIsPowerOn(!isPowerOn);
  };

  const resetAll = () => {
    setIsPowerOn(false);
    setWiresConnected(false);
    setCheckedItems({
      loto: false,
      ground: false,
      gloves: false,
      isolation: false,
      discharge: false
    });
    setVoltageSetting(400);
    setCurrentDisplay(0);
  };

  return (
    <div id="how-to-use-view" className="space-y-10">
      {/* Editorial Content Heading */}
      <section id="usage-intro-content" className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <Wrench size={13} className="text-yellow-500" />
          <span className="text-xs font-mono font-medium text-yellow-500 uppercase tracking-wider">Operational Guide</span>
        </div>
        <h1 className="text-3xl font-sans font-bold text-gray-100 tracking-tight">
          How to Use an 800V DC Power Supply Correctly
        </h1>
        <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
          Deploying an <a href="https://variabledcpowersupply.com/800v-dc-power-supplies" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 underline font-semibold transition-colors">800V DC Power Supply</a> requires extreme caution and meticulous safety procedures. Due to the severe hazard associated with <span className="text-red-400 font-bold">800V DC (High Voltage Electrical Class B)</span>, operation is fundamentally different from typical 12V or 24V bench power blocks. Retained capacitance thermal energy can induce terminal shocks even several minutes after shutting off the device. This deployment document presents physical steps and standard compliance sequences.
        </p>
      </section>

      {/* Safety Protocol Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left side: Guide steps */}
        <section id="guide-steps-list" className="bg-[#121214] border border-gray-800 rounded-xl p-6 space-y-6">
          <h3 className="text-sm font-mono uppercase text-yellow-500 tracking-widest flex items-center gap-2">
            <Shield size={16} /> Standard 5-Step Operation Protocol
          </h3>

          <ol className="space-y-4 text-xs">
            <li className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-gray-800 text-yellow-500 shrink-0 flex items-center justify-center font-mono font-bold font-xs">1</span>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-gray-200">Enforce Lock-Out Tag-Out (LOTO)</h4>
                <p className="text-gray-400 leading-normal">Confirm the primary high-voltage breaker panel feeding the setup is shut off and LOTO locks apply before terminal installation.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-gray-800 text-yellow-500 shrink-0 flex items-center justify-center font-mono font-bold font-xs">2</span>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-gray-200">Attach Redundant Protection Grounds</h4>
                <p className="text-gray-400 leading-normal">Secure the heavy copper grounding lug on the rear of the eTommens 19" chassis frame. Never rely solely on the AC plug grounding pin.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-gray-800 text-yellow-500 shrink-0 flex items-center justify-center font-mono font-bold font-xs">3</span>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-gray-200">Connect Load Cables with Remote Sense Loop</h4>
                <p className="text-gray-400 leading-normal">Wire high-voltage shielded terminals to prevent EMF EMI feedback. Loop the <code className="text-yellow-500">S+</code> and <code className="text-yellow-500">S-</code> pins directly to the load terminal posts to automate fine voltage offsets.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-gray-800 text-yellow-500 shrink-0 flex items-center justify-center font-mono font-bold font-xs">4</span>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-gray-200">Execute Pre-Power Safety Interlocks Check</h4>
                <p className="text-gray-400 leading-normal">Check that the external safety interlock latch loop connection on the back partition is closed. Open loop triggers absolute solid state shutoff.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="w-5 h-5 rounded-full bg-gray-800 text-yellow-500 shrink-0 flex items-center justify-center font-mono font-bold font-xs">5</span>
              <div className="space-y-1">
                <h4 className="font-sans font-bold text-gray-200">Perform Active Safe Discharge Monitoring</h4>
                <p className="text-gray-400 leading-normal">Upon test termination, ensure the internal bleed-down resistor indicator drops past 40V threshold before handling terminals manually.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* Right side: INTERACTIVE RIG SIMULATOR */}
        <section id="interactive-rig-simulator" className="bg-[#121214] border border-gray-800 rounded-xl p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-gray-800">
              <h3 className="text-xs font-mono uppercase text-gray-300 font-bold tracking-wider">
                Interactive High Voltage Test Bench
              </h3>
              <button
                id="btn-simulator-reset"
                onClick={resetAll}
                className="text-[10px] text-gray-400 hover:text-white font-mono flex items-center gap-1 border border-gray-800 px-2 py-0.5 rounded bg-gray-800/30 cursor-pointer"
              >
                <RefreshCw size={10} /> Reset Setup
              </button>
            </div>

            {/* Simulated Cabinet Circuit Graphic using raw clean CSS & SVG */}
            <div className="bg-black/40 border border-gray-900 rounded-lg p-4 font-mono text-[9px] text-gray-400 space-y-4">
              <div className="grid grid-cols-3 items-center gap-2 text-center">
                {/* PSU Box */}
                <div className={`p-2 border rounded-lg transition-colors duration-300 ${
                  isPowerOn ? "border-yellow-500/80 bg-yellow-500/5 text-yellow-500" : "border-gray-800 bg-[#161619]"
                }`}>
                  <div className="font-bold">eTM PSU</div>
                  <div className="text-[7px] text-gray-500 mt-1">VOLT CARD</div>
                  <div className="text-[10px] font-bold mt-1 text-gray-200">{isPowerOn ? `${voltageSetting}V` : "0V"}</div>
                </div>

                {/* Cable Connector Wire */}
                <div className="relative h-10 flex flex-col justify-center items-center">
                  <span className="text-[7px] text-gray-500 select-none">DC FEED</span>
                  {wiresConnected ? (
                    <div className="w-full h-1 bg-yellow-600 rounded relative overflow-hidden">
                      {isPowerOn && (
                        <div className="absolute inset-0 bg-yellow-400" style={{ width: "100%" }}></div>
                      )}
                    </div>
                  ) : (
                    <button
                      id="btn-connect-cabling"
                      onClick={() => setWiresConnected(true)}
                      className="py-1 px-2 bg-yellow-500 text-gray-950 font-bold font-mono text-[8px] rounded uppercase hover:bg-yellow-400 cursor-pointer transition"
                    >
                      Plug Cabling
                    </button>
                  )}
                  {wiresConnected && (
                    <span className="text-[7px] text-emerald-500 font-bold mt-1 uppercase">CONNECTED</span>
                  )}
                </div>

                {/* Simulated Load device */}
                <div className={`p-2 border rounded-lg transition-colors ${
                  wiresConnected && isPowerOn ? "border-cyan-500/80 bg-cyan-500/5 text-cyan-400" : "border-gray-800 bg-[#161619]"
                }`}>
                  <div className="font-bold">THERMAL LOAD</div>
                  <div className="text-[7px] text-gray-500 mt-1">TEST RIG</div>
                  <div className="text-[10px] font-bold mt-1 text-gray-200">
                    {wiresConnected && isPowerOn ? `${currentDisplay}A` : "0.0A"}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Safety Checklist boxes */}
            <div className="space-y-2 bg-[#18181b] p-3 border border-gray-800 rounded-lg">
              <span className="block text-[10px] font-mono uppercase text-gray-400 tracking-wider">Pre-power Safety Interlocks Check:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <button
                  id="chk-loto"
                  onClick={() => toggleCheck("loto")}
                  className="flex items-center gap-2 p-2 rounded border border-gray-800 hover:border-gray-700 bg-black/20 text-left text-gray-300 disabled:opacity-50 cursor-pointer"
                  disabled={isPowerOn}
                >
                  <input type="checkbox" checked={checkedItems.loto} onChange={() => {}} className="accent-yellow-500 shrink-0 pointer-events-none" />
                  <span>1. LOTO isolation confirmed</span>
                </button>
                <button
                  id="chk-ground"
                  onClick={() => toggleCheck("ground")}
                  className="flex items-center gap-2 p-2 rounded border border-gray-800 hover:border-gray-700 bg-black/20 text-left text-gray-300 disabled:opacity-50 cursor-pointer"
                  disabled={isPowerOn}
                >
                  <input type="checkbox" checked={checkedItems.ground} onChange={() => {}} className="accent-yellow-500 shrink-0 pointer-events-none" />
                  <span>2. Shield Earth Ground bolted</span>
                </button>
                <button
                  id="chk-gloves"
                  onClick={() => toggleCheck("gloves")}
                  className="flex items-center gap-2 p-2 rounded border border-gray-800 hover:border-gray-700 bg-black/20 text-left text-gray-300 disabled:opacity-50 cursor-pointer"
                  disabled={isPowerOn}
                >
                  <input type="checkbox" checked={checkedItems.gloves} onChange={() => {}} className="accent-yellow-500 shrink-0 pointer-events-none" />
                  <span>3. High Voltage insulated gloves</span>
                </button>
                <button
                  id="chk-isolation"
                  onClick={() => toggleCheck("isolation")}
                  className="flex items-center gap-2 p-2 rounded border border-gray-800 hover:border-gray-700 bg-black/20 text-left text-gray-300 disabled:opacity-50 cursor-pointer"
                  disabled={isPowerOn}
                >
                  <input type="checkbox" checked={checkedItems.isolation} onChange={() => {}} className="accent-yellow-500 shrink-0 pointer-events-none" />
                  <span>4. Gate barrier isolated interlock</span>
                </button>
              </div>
            </div>

            {/* Active Output Controls */}
            <div className="space-y-3 bg-[#18181b] p-3 border border-gray-800 rounded-lg">
              <div className="flex justify-between items-center text-[10px]">
                <span className="font-mono uppercase text-gray-400">Direct Voltage Adjust:</span>
                <span className="text-yellow-500 font-bold font-mono text-sm">{voltageSetting} Volts</span>
              </div>
              <input
                id="range-voltage-adjust"
                type="range"
                min={10}
                max={800}
                value={voltageSetting}
                onChange={e => setVoltageSetting(parseInt(e.target.value))}
                className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-yellow-500"
              />
              <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                <span>10 V</span>
                <span>400 V</span>
                <span>800 V</span>
              </div>
            </div>
          </div>

          {/* Trigger button and metrics */}
          <div className="pt-4 border-t border-gray-800 space-y-4">
            <div className="flex justify-between items-center">
              <button
                id="btn-rig-powerswitch"
                onClick={handlePowerSwitch}
                className={`py-2 px-5 font-bold font-mono text-xs rounded-lg uppercase cursor-pointer transition ${
                  isPowerOn
                    ? "bg-red-600 hover:bg-red-500 text-white"
                    : "bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-50"
                }`}
              >
                {isPowerOn ? "OUTPUT OFF" : "OUTPUT ON"}
              </button>

              <div className="text-right font-mono text-[10px]">
                <span className="text-gray-500">MEASUREMENTS:</span>
                <div className="space-y-0.5">
                  <div className="text-gray-300"><span className="text-cyan-400 font-bold">{currentDisplay}</span> Amps</div>
                  <div className="text-gray-300"><span className="text-yellow-500 font-bold">{((voltageSetting * currentDisplay)/1000).toFixed(2)}</span> kW Load</div>
                  <div className="text-gray-500">Ripple: {isPowerOn ? `${(rippleFactor * 1000).toFixed(1)}mV` : "0mV"}</div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </div>

      {/* Bottom direct link button */}
      <div className="pt-8 border-t border-gray-800 flex flex-col items-center text-center space-y-4">
        <h4 className="text-sm font-sans font-semibold text-gray-200">Need immediate official high-voltage hardware provisioning?</h4>
        <a
          href="https://variabledcpowersupply.com/800v-dc-power-supplies"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-extrabold uppercase text-xs tracking-wider rounded-lg transition-all shadow-lg shadow-yellow-500/10 hover:scale-[1.02] cursor-pointer"
        >
          Buy 800V Units Directly from Official Store ↗
        </a>
      </div>
    </div>
  );
}
