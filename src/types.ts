/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum AppRoute {
  HOME = "home",
  HOW_TO_USE = "how-to-use",
  WHERE_TO_BUY = "where-to-buy",
  PRICE = "price",
  BUY_ONLINE = "buy-online",
  BEST_SUPPLY = "best",
  CURRENT_SERIES = "current-series",
  PROGRAMMABLE = "programmable",
  LAB_USE = "lab",
  APPLICATION = "application",
  INTRO_800V = "intro-800v",
  ABOUT_ETM = "about-faq"
}

export interface PowerModel {
  id: string;
  name: string;
  voltage: number; // always 800
  current: number; // 1, 2, 3, 5, 6
  power: number; // V * I
  rackSize: string; // "2U", "3U"
  ripple: string; // "< 60mVrms"
  transient: string; // "< 1.2ms"
  basePrice: number;
  description: string;
  features: string[];
  buyUrl?: string;
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  application: string;
  selectedModel: string;
  quantity: number;
  customRequirements: string;
  isSubmitted: boolean;
}

export interface OrderCartItem {
  modelId: string;
  quantity: number;
  lanInterface: boolean;
  gpibInterface: boolean;
  warrantyExtension: boolean; // 3 years instead of 1 year
}
