/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PowerModel } from "./types";

export const POWER_MODELS: PowerModel[] = [
  {
    id: "eTM-8001",
    name: "eTommens eTM-8001",
    voltage: 800,
    current: 1,
    power: 800,
    rackSize: "2U Bench & Rackmount",
    ripple: "≤ 50mVrms / ≤ 120mVp-p",
    transient: "≤ 1.0 ms (50% to 100% Load Change)",
    basePrice: 539,
    description: "Compact high-precision 800V programmable DC power supply designed for engineering workbenches, academic research and low-current high-voltage hardware testing.",
    features: [
      "Ultra-low ripple and noise suitable for sensitive laboratory circuits",
      "Support for serial & parallel combinations with automatic load balancing",
      "Standard USB & RS232 programming ports, with optional Ethernet/SCPI"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8001-4-kob-0-800v-0-1a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/"
  },
  {
    id: "eTM-8002",
    name: "eTommens eTM-8002",
    voltage: 800,
    current: 2,
    power: 1600,
    rackSize: "2U Standard Rackmount",
    ripple: "≤ 60mVrms / ≤ 150mVp-p",
    transient: "≤ 1.2 ms (50% to 100% Load Change)",
    basePrice: 699,
    description: "Automated test equipment (ATE) optimization model. Ideal for manufacturing burn-in chambers, battery cell simulation clusters, and capacitor performance tests.",
    features: [
      "Built-in list mode programming for automated test cycles without host PC latency",
      "Over-voltage (OVP), Over-current (OCP) and Over-temperature (OTP) auto-cutoff",
      "Dual active cooling cooling system with smart temperature-based speed control"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8002-4-kob-0-800v-0-2a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/"
  },
  {
    id: "eTM-8003",
    name: "eTommens eTM-8003C-2-KOB",
    voltage: 800,
    current: 3,
    power: 2400,
    rackSize: "3U Rugged Rackmount",
    ripple: "≤ 70mVrms / ≤ 180mVp-p",
    transient: "≤ 1.2 ms (50% to 100% Load Change)",
    basePrice: 899,
    description: "Designed for continuous duty cycles in factory automation. Excellent isolation parameters permit safe operation adjacent to high-speed electrical machinery. Complete with output switch control, 5 powerful protections, and low noise design.",
    features: [
      "Complete galvanic isolation rating up to 3000VAC between chassis and electrical lines",
      "Advanced PFC circuit (Power Factor Correction > 0.98 at full load)",
      "Vibration-isolated mechanical structure optimized for shop-floor server racks"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8003c-2-kob-high-power-dc-bench-power-supply-adjustable-800v-3a-with-5-powerful-protections-output-switch-control-low-noise/"
  },
  {
    id: "eTM-8005",
    name: "eTommens eTM-8005",
    voltage: 800,
    current: 5,
    power: 4000,
    rackSize: "3U Rugged Rackmount",
    ripple: "≤ 85mVrms / ≤ 200mVp-p",
    transient: "≤ 1.5 ms (50% to 100% Load Change)",
    basePrice: 1120,
    description: "High-power density 4.0 kW model built for EV battery pack charge/discharge cycling, onboard charger validation schemes, and solar PV array tracking simulation.",
    features: [
      "Integrated PV simulation mode (creates typical I-V curves for solar panel testing)",
      "High capacity current control with rapid discharge circuit for speedy voltage ramps down",
      "Standard Ethernet LAN interface with full web-based setup dashboard panel"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8005-4-kob-0-800v-0-5a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/"
  },
  {
    id: "eTM-8006",
    name: "eTommens eTM-8006",
    voltage: 800,
    current: 6,
    power: 4800,
    rackSize: "3U Heavy Industrial Rack",
    ripple: "≤ 95mVrms / ≤ 220mVp-p",
    transient: "≤ 1.5 ms (50% to 100% Load Change)",
    basePrice: 1260,
    description: "Our flagship heavy-duty 4.8 kW 800V DC power supply. Tailored for testing electric drivetrains, heavy high-voltage servo motors, and direct replacement of high-voltage generator arrays.",
    features: [
      "Rugged continuous 100% capacity operations at up to 50°C ambient temperatures",
      "Redundant safety relays with external interlock loop connector",
      "Direct digital monitoring and sequence control software license bundle included"
    ],
    buyUrl: "https://variabledcpowersupply.com/etm-8006-4-kob-0-800v-0-6a-high-power-bench-dc-power-supply-variable-with-4-digits-led-display-encoder-coarse-fine-adjustments-knob-short-circuit-protection/"
  }
];

export const TECHNICAL_COMPARISONS = [
  {
    feature: "Input Voltage Range",
    ellsenSpec: "190–240VAC 1-Phase (1A/2A) or 340–460VAC 3-Phase 3-Wire (3A/5A/6A)",
    cheaperSpec: "Fixed 110VAC/220VAC ±10% Only",
    importance: "Avoids high-voltage harmonic distortion and handles industrial facility grid fluctuations."
  },
  {
    feature: "RMS Voltage Ripple",
    ellsenSpec: "≤ 50mVrms (eTM-8001) or ≤ 85mVrms (eTM-8005)",
    cheaperSpec: "≥ 300mVrms (Typically causes load noise)",
    importance: "Crucial for semiconductor development and laboratory measurements where noise distorts signals."
  },
  {
    feature: "Programming Interfaces",
    ellsenSpec: "RS232, RS485, USB, Ethernet LAN & SCPI Control protocols",
    cheaperSpec: "Manual Knobs Only or Non-Isolated USB Card",
    importance: "Galvanic PC isolation prevents ground-loop currents from destroying connected computers."
  },
  {
    feature: "Transient Recovery Speed",
    ellsenSpec: "≤ 1.0 ms to 1.5 ms to return within 1% of rated set-point",
    cheaperSpec: "≥ 12.0 ms (Prone to severe voltage dip)",
    importance: "Prevents high voltage under-shoot and over-shoot when active loads switch on/off."
  },
  {
    feature: "Safety Protections",
    ellsenSpec: "LOTO interlock, active low-impedance discharge circuits (<2s bleed), isolated remote sense",
    cheaperSpec: "Basic fuse only, passive bleeder resistors (takes minutes to discharge 800V)",
    importance: "Absolute safeguard against touch-hazard high-voltage retained energy."
  },
  {
    feature: "Cabinet Integration",
    ellsenSpec: "Standard 19-inch rack unit dimensions (Slide-rail ready, optimal spacing)",
    cheaperSpec: "Custom bulky bench shape with vertical vents",
    importance: "Allows easy cabinet installation in standard cleanroom or laboratory data racks."
  }
];

export const APPLICATION_CASES = [
  {
    id: "ev-charging-battery",
    title: "Electric Vehicle (EV) Powertrain & Battery Testing",
    subtitle: "800V High-Voltage EV Arch Support",
    problem: "Modern EVs (e.g., Porsche Taycan, Hyundai Ioniq 5/6, Audi e-tron) leverage 800V class battery systems to enable ultra-fast charging. Testing motor controllers, Battery Management Systems (BMS), and onboard chargers (OBC) requires stable continuous 800V DC excitation.",
    solution: "By utilizing the eTommens eTM-8005 or eTM-8006 in a rack setup, testing teams can emulate different battery pack states-of-charge (SoC), internal resistance, and active transient loading, verifying high-voltage component safety.",
    specDemanded: "High power density, quick transient recovery (<1.5ms), programmable voltage ramps to test high-voltage relays.",
    icon: "BatteryCharging"
  },
  {
    id: "solar-photovoltaics",
    title: "Solar Photovoltaic Inverter MPPT Testing",
    subtitle: "Renewable Grid Tie Validation",
    problem: "Commercial PV string inverters operate close to open-circuit voltages of up to 1000V. Research and production test beds need to supply controlled currents modeling dynamic solar conditions (sunrise, cloud cover, shadow drop).",
    solution: "The programmable list-and-curve software on eTommens eTM 800V systems acts as an I-V Curve Solar Array Simulator. By setting multiple operating coordinates, engineers test maximum power point tracking efficiency with realistic input.",
    specDemanded: "Programmable list mode, high voltage stability, high power efficiency (>90%).",
    icon: "Sun"
  },
  {
    id: "lab-materials",
    title: "Electrode Deposition & Semiconductor Material Stress",
    subtitle: "Precision Scientific Research",
    problem: "High-voltage electrostatic coating, ceramic breakdown verification, and crystal growing labs need extremely precise voltage increments without high starting surges or spikes.",
    solution: "The eTommens eTM-8001 has a 16-bit DAC converter offering a precise resolution of 12mV. This high resolution, coupled with safety interlocking mechanisms, protects researchers and test samples.",
    specDemanded: "Ultra-low ripple (<50mVrms), high-precision remote sense, interlock loop.",
    icon: "FlaskConical"
  },
  {
    id: "factory-automation",
    title: "Industrial Robotic Motor & Servo Drive Aging",
    subtitle: "continuous Duty Cycle Quality Control",
    problem: "Servo and AC variable frequency drives operating on high-voltage DC buses need hundreds of hours of dynamic loading to prove reliability, requiring robust continuous power under high EMI feedback.",
    solution: "eTommens eTM-8003 devices operate comfortably on high-voltage production test lines 24/7. Standard galvanic isolation prevents feedback electrical EMI from tampering with PLC or analog instrumentation data lines.",
    specDemanded: "Galvanic isolation up to 3000VAC, 24/7 peak output endurance, RS485 Modbus remote control.",
    icon: "Cpu"
  }
];
