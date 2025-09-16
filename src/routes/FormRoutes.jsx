/**
 * Form Routes Module
 * 
 * Contains all form-related routes for the UPMRC application.
 * This module handles data entry forms organized by developer/feature area.
 */

import { lazy } from 'react';

// Form components organized by developer/feature area
const AfcPreventChkform = lazy(() => import("../forms/AfcPreventChkform"));
const AfcAnnexureBForm = lazy(() => import("../forms/AfcAnnexureBForm"));
const CentCompPreForm = lazy(() => import("../forms/CentCompPreForm"));
const ColorLightSignalMainline = lazy(() => import("../forms/ColorLightSignalMainline"));
const DeportForm = lazy(() => import("../forms/DeportForm"));
const ESPQuarterlySignalRegister = lazy(() => import("../forms/ESPQuarterlySignalRegister"));
const FirstAidRegister = lazy(() => import("../forms/FirstAidRegister"));
const FoundReceiveArticle = lazy(() => import("../forms/FoundReceiveArticle"));
const GatePass = lazy(() => import("../forms/GatePass"));
const HonorariumReg = lazy(() => import("../forms/HonorariumReg"));
const IncidentAccidentReg = lazy(() => import("../forms/IncidentAccidentReg"));
const IncidentRegisterSignals = lazy(() => import("../forms/IncidentRegisterSignals"));
const LatsVduDrill = lazy(() => import("../forms/LatsVduDrill"));
const ListHonorariumReg = lazy(() => import("../forms/ListHonorariumReg"));
const LoanRegister = lazy(() => import("../forms/LoanRegister"));

// Akshra's forms - Telecom and DTR related
const Afcgatedrill = lazy(() => import("../forms/akshra/Afcgatedrill"));
const Agentissue = lazy(() => import("../forms/akshra/Agentissue"));
const BiodataReg = lazy(() => import("../forms/akshra/BiodataReg"));
const Biodataocc = lazy(() => import("../forms/akshra/Biodataocc"));
const Checklist = lazy(() => import("../forms/akshra/Checklist"));
const Dtrleftside = lazy(() => import("../forms/akshra/Dtrleftside"));
const Dtrreg = lazy(() => import("../forms/akshra/Dtrreg"));
const Dtrsignalsissue = lazy(() => import("../forms/akshra/Dtrsignalsissue"));
const Dtrsignalsreceipts = lazy(() => import("../forms/akshra/Dtrsignalsreceipts"));
const Emefiremandrill = lazy(() => import("../forms/akshra/Emefiremandrill"));
const Falsefloor = lazy(() => import("../forms/akshra/Falsefloor"));
const IncidentRegisterSignalsAkshra = lazy(() => import("../forms/akshra/IncidentRegisterSignals"));
const Inout = lazy(() => import("../forms/akshra/Inout"));
const Loanreg = lazy(() => import("../forms/akshra/Loanreg"));
const Pmloogbook = lazy(() => import("../forms/akshra/Pmloogbook"));
const Pmsheet = lazy(() => import("../forms/akshra/Pmsheet"));
const Tsrreg = lazy(() => import("../forms/akshra/Tsrreg"));

// Chanchal's forms - Preventive maintenance and operational drills
const AfcGateDrillReg = lazy(() => import("../forms/chanchal/AfcGateDrillReg"));
const AssuRegReg = lazy(() => import("../forms/chanchal/AssuRegReg"));
const ClaimReg = lazy(() => import("../forms/chanchal/ClaimReg"));
const ComRecReg = lazy(() => import("../forms/chanchal/ComRecReg"));
const CSCInitReg = lazy(() => import("../forms/chanchal/CSCInitReg"));
const DailyWork = lazy(() => import("../forms/chanchal/DailyWork"));
const EquFaiReg = lazy(() => import("../forms/chanchal/EquFaiReg"));
const FailureReport = lazy(() => import("../forms/chanchal/FailureReport"));
const Gate = lazy(() => import("../forms/chanchal/Gate"));
const LineDefect = lazy(() => import("../forms/chanchal/LineDefect"));
const ManPoiOpeDrill = lazy(() => import("../forms/chanchal/ManPoiOpeDrill"));
const MeasurementVoltageMCBinPDC = lazy(() => import("../forms/chanchal/MeasurementVoltageMCBinPDC"));
const PASDrill = lazy(() => import("../forms/chanchal/PASDrill"));
const PmFolUp = lazy(() => import("../forms/chanchal/PmFolUp"));
const Pm_logbook_half_yearly_other_mainline = lazy(() => import("../forms/chanchal/Pm_logbook_half_yearly_other_mainline"));
const PreMainWork = lazy(() => import("../forms/chanchal/PreMainWork"));
const StationDiary = lazy(() => import("../forms/chanchal/StationDiary"));

// Isha's forms - Equipment maintenance and technical forms
const AfcPreventiveMaintenanceCheckListHalfYearly = lazy(() => import("../forms/isha/AfcPreventiveMaintenanceCheckListHalfYearly"));
const AttendanceRegister = lazy(() => import("../forms/isha/AttendanceRegister"));
const AxleCounter = lazy(() => import("../forms/isha/AxleCounter"));
const ContractualSpareTesting = lazy(() => import("../forms/isha/ContractualSpareTesting"));
const ControlTakenOver = lazy(() => import("../forms/isha/ControlTakenOver"));
const CSCInitializationDetailRegister = lazy(() => import("../forms/isha/CSCInitializationDetailRegister"));
const DAR = lazy(() => import("../forms/isha/DAR"));
const DailyTransactionRegister_RECEIPTS = lazy(() => import("../forms/isha/DailyTransactionRegister_RECEIPTS"));
const DeviceApplicationSoftware = lazy(() => import("../forms/isha/DeviceApplicationSoftware"));
const ESP = lazy(() => import("../forms/isha/ESP"));
const EstimateLOA = lazy(() => import("../forms/isha/EstimateLOA"));
const FanRack = lazy(() => import("../forms/isha/FanRack"));
const FilterReplacement = lazy(() => import("../forms/isha/FilterReplacement"));
const FoundForeignCurrency = lazy(() => import("../forms/isha/FoundForeignCurrency"));
const Grievance = lazy(() => import("../forms/isha/Grievance"));
const IncidentAccidentRegIsha = lazy(() => import("../forms/isha/IncidentAccidentReg"));
const LMRC = lazy(() => import("../forms/isha/LMRC"));
const LoanregIsha = lazy(() => import("../forms/isha/Loanreg"));
const PMLOGBOOKMAINLINE9 = lazy(() => import("../forms/isha/PMLOGBOOKMAINLINE9"));
const PMSheetOCCYearly = lazy(() => import("../forms/isha/PMSheetOCCYearly"));
const PREVENTIVEMAINTENACE_CC_CCHS = lazy(() => import("../forms/isha/PREVENTIVEMAINTENACE_CC_CCHS"));
const SMPSSYSTEMMAINTENANCERECORD = lazy(() => import("../forms/isha/SMPSSYSTEMMAINTENANCERECORD"));

// Manshi's forms - Material management and contractor forms
const Afc_prevention = lazy(() => import("../forms/manshi/Afc_prevention"));
const LiftRescue3 = lazy(() => import("../forms/manshi/LiftRescue3"));
const MaterialDistribution = lazy(() => import("../forms/manshi/MaterialDistribution"));
const Os_Urc_In_Out = lazy(() => import("../forms/manshi/Os_Urc_In_Out"));
const PmlogMaintain = lazy(() => import("../forms/manshi/PmlogMaintain"));
const Pmlog6 = lazy(() => import("../forms/manshi/Pmlog6"));
const Pmsheetoccbcchalfyearlyform = lazy(() => import("../forms/manshi/Pmsheetoccbcchalfyearlyform"));
const SerEntry = lazy(() => import("../forms/manshi/SerEntry"));

// Monika's forms - Officer records and inspection forms
const InspactionRegister = lazy(() => import("../forms/monika/InspactionRegister"));
const Officers = lazy(() => import("../forms/monika/Officers"));

// Pinki's forms - Asset management and inventory forms
const IncidentEx = lazy(() => import("../forms/pinki/IncidentEx"));

// Rajiv's forms - Operational logs and maintenance schedules
const CardInitializationReg = lazy(() => import("../forms/rajiv/CardInitializationReg"));
const CBTTrainingReg = lazy(() => import("../forms/rajiv/CBTTrainingReg"));
const DailTelecomMainCheckListReg = lazy(() => import("../forms/rajiv/DailTelecomMainCheckListReg"));
const FoundReceivedCashReg = lazy(() => import("../forms/rajiv/FoundReceivedCashReg"));
const ImprestReg = lazy(() => import("../forms/rajiv/ImprestReg"));
const JobCard = lazy(() => import("../forms/rajiv/JobCard"));
const LoanRegisterRajiv = lazy(() => import("../forms/rajiv/LoanRegister"));
const MJL11 = lazy(() => import("../forms/rajiv/MJL11"));
const PMLogBook3Reg = lazy(() => import("../forms/rajiv/PMLogBook3Reg"));
const PMLogBookMainLine3Reg = lazy(() => import("../forms/rajiv/PMLogBookMainLine3Reg"));
const PMSheetDepotQuartForm2Reg = lazy(() => import("../forms/rajiv/PMSheetDepotQuartForm2Reg"));
const PMSheetDepotQuartForm22Reg = lazy(() => import("../forms/rajiv/PMSheetDepotQuartForm22Reg"));
const PmsheetMontlyDepotReg = lazy(() => import("../forms/rajiv/PmsheetMontlyDepotReg"));
const SDCEntryExitReg = lazy(() => import("../forms/rajiv/SDCEntryExitReg"));

// Store forms
const AssetregisterS = lazy(() => import("../forms/store/AssetregisterS"));
const BudgetAllotmentForm = lazy(() => import("../forms/store/BudgetAllotmentForm"));
const NightAfcGateDrill = lazy(() => import("../forms/store/NightAfcGateDrill"));

/**
 * Form routes configuration
 * Organized by category and developer area
 */
export const formRoutes = [
  // Core System Forms
  {
    path: "/afc-prevent-chkform",
    component: AfcPreventChkform,
    name: "AFC Preventive Check Form",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/afc-annexureb-form",
    component: AfcAnnexureBForm,
    name: "AFC Annexure B Form",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/cent-comp-pre-form",
    component: CentCompPreForm,
    name: "Central Component Pre Form",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/color-light-signal-mainline",
    component: ColorLightSignalMainline,
    name: "Color Light Signal Mainline",
    category: "signals",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/deport-form",
    component: DeportForm,
    name: "Depot Form",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/esp-quarterly-signal-register",
    component: ESPQuarterlySignalRegister,
    name: "ESP Quarterly Signal Register",
    category: "signals",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/first-aid-register",
    component: FirstAidRegister,
    name: "First Aid Register",
    category: "safety",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/found-receive-article",
    component: FoundReceiveArticle,
    name: "Found & Received Article",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/gate-pass",
    component: GatePass,
    name: "Gate Pass",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/honorarium-reg",
    component: HonorariumReg,
    name: "Honorarium Register",
    category: "hr",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/incident-accident-reg",
    component: IncidentAccidentReg,
    name: "Incident & Accident Register",
    category: "safety",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/incident-register-signals",
    component: IncidentRegisterSignals,
    name: "Incident Register Signals",
    category: "signals",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/lats-vdu-drill",
    component: LatsVduDrill,
    name: "LATS VDU Drill",
    category: "training",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list-honorarium-reg",
    component: ListHonorariumReg,
    name: "List Honorarium Register",
    category: "hr",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/loan-register",
    component: LoanRegister,
    name: "Loan Register",
    category: "finance",
    requiredRole: ["Employee", "Admin"]
  },

  // Akshra's Forms - Telecom & DTR
  {
    path: "/afc-gate-drill",
    component: Afcgatedrill,
    name: "AFC Gate Drill",
    category: "maintenance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/agent-issue",
    component: Agentissue,
    name: "Agent Issue",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/biodata-reg",
    component: BiodataReg,
    name: "Biodata Register",
    category: "hr",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/biodata-occ",
    component: Biodataocc,
    name: "Biodata OCC",
    category: "hr",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/checklist",
    component: Checklist,
    name: "Checklist",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/dtr-leftside",
    component: Dtrleftside,
    name: "DTR Left Side",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/dtr-reg",
    component: Dtrreg,
    name: "DTR Register",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/dtr-signals-issue",
    component: Dtrsignalsissue,
    name: "DTR Signals Issue",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/dtr-signals-receipts",
    component: Dtrsignalsreceipts,
    name: "DTR Signals Receipts",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/emergency-fire-drill",
    component: Emefiremandrill,
    name: "Emergency Fire & Man Drill",
    category: "safety",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/false-floor",
    component: Falsefloor,
    name: "False Floor",
    category: "infrastructure",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/incident-register-signals-akshra",
    component: IncidentRegisterSignalsAkshra,
    name: "Incident Register Signals",
    category: "signals",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/in-out",
    component: Inout,
    name: "In/Out Register",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/loan-reg-akshra",
    component: Loanreg,
    name: "Loan Register",
    category: "finance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/pm-log-book",
    component: Pmloogbook,
    name: "PM Log Book",
    category: "maintenance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/pm-sheet",
    component: Pmsheet,
    name: "PM Sheet",
    category: "maintenance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/tsr-reg",
    component: Tsrreg,
    name: "TSR Register",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },

  // Store Forms
  {
    path: "/asset-register-s",
    component: AssetregisterS,
    name: "Asset Register (Store)",
    category: "store",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/budget-allotment-form",
    component: BudgetAllotmentForm,
    name: "Budget Allotment Form",
    category: "store",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/night-afc-gate-drill",
    component: NightAfcGateDrill,
    name: "Night AFC Gate Drill",
    category: "store",
    requiredRole: ["Employee", "Admin"]
  }
];

/**
 * Get form routes by category
 */
export const getFormRoutesByCategory = (category) => {
  return formRoutes.filter(route => route.category === category);
};

/**
 * Get form routes by developer
 */
export const getFormRoutesByDeveloper = (developer) => {
  return formRoutes.filter(route => route.developer === developer);
};

/**
 * Get all form categories
 */
export const getFormCategories = () => {
  const categories = [...new Set(formRoutes.map(route => route.category))];
  return categories.map(cat => ({
    key: cat,
    label: cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));
};

/**
 * Get all developers who have forms
 */
export const getFormDevelopers = () => {
  const developers = [...new Set(formRoutes.filter(route => route.developer).map(route => route.developer))];
  return developers.map(dev => ({
    key: dev,
    label: dev.charAt(0).toUpperCase() + dev.slice(1)
  }));
};

export default formRoutes;