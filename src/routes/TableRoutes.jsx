/**
 * Table Routes Module
 * 
 * Contains all table/list view routes for the UPMRC application.
 * This module handles data display tables organized by developer/feature area.
 */

import { lazy } from 'react';

// Core system table components
const AfcAnnexureBList = lazy(() => import("../tables/AfcAnnexureBList"));
const AfcPreventformList = lazy(() => import("../tables/AfcPreventformList"));
const CentCompPreList = lazy(() => import("../tables/CentCompPreList"));
const ColorLightSignalMainlineList = lazy(() => import("../tables/ColorLightSignalMainlineList"));
const DeportFormList = lazy(() => import("../tables/DeportFormList"));
const EspQuarterlySignalList = lazy(() => import("../tables/EspQuarterlySignalList"));
const FirstAidRegisterList = lazy(() => import("../tables/FirstAidRegisterList"));
const FoundReceiveArtList = lazy(() => import("../tables/FoundReceiveArtList"));
const GatePassList = lazy(() => import("../tables/GatePassList"));
const HonoriumRegList = lazy(() => import("../tables/HonoriumRegList"));
const IncidentAccidentRegList = lazy(() => import("../tables/IncidentAccidentRegList"));
const IncidentRegisterSignalsList = lazy(() => import("../tables/IncidentRegisterSignalsList"));
const LatsVduDrillList = lazy(() => import("../tables/LatsVduDrillList"));
const ListHonorariumList = lazy(() => import("../tables/ListHonorariumList"));
const LoanRegisterList = lazy(() => import("../tables/LoanRegisterList"));

// Akshra's tables - Telecom and DTR related
const AfcgatedrillList = lazy(() => import("../tables/akshra/AfcgatedrillList"));
const AgentissueList = lazy(() => import("../tables/akshra/AgentissueList"));
const BiodataRegList = lazy(() => import("../tables/akshra/BiodataRegList"));
const BiodataoccList = lazy(() => import("../tables/akshra/BiodataoccList"));
const ChecklistList = lazy(() => import("../tables/akshra/ChecklistList"));
const DtrleftsideList = lazy(() => import("../tables/akshra/DtrleftsideList"));
const DtrregList = lazy(() => import("../tables/akshra/DtrregList"));
const DtrsignalsissueList = lazy(() => import("../tables/akshra/DtrsignalsissueList"));
const DtrsignalsreceiptsList = lazy(() => import("../tables/akshra/DtrsignalsreceiptsList"));
const EmefiremandrillList = lazy(() => import("../tables/akshra/EmefiremandrillList"));
const Esplist = lazy(() => import("../tables/akshra/esplist"));
const FalsefloorList = lazy(() => import("../tables/akshra/FalsefloorList"));
const IncidentRegisterSignalsListAkshra = lazy(() => import("../tables/akshra/IncidentRegisterSignalsList"));
const InoutList = lazy(() => import("../tables/akshra/InoutList"));
const LoanregListAkshra = lazy(() => import("../tables/akshra/LoanregList"));
const PmloogbookList = lazy(() => import("../tables/akshra/PmloogbookList"));
const PmsheetList = lazy(() => import("../tables/akshra/PmsheetList"));
const TsrregList = lazy(() => import("../tables/akshra/TsrregList"));

// Chanchal's tables - Preventive maintenance and operational drills
const AfcGateDrillList = lazy(() => import("../tables/chanchal/AfcGateDrillList"));
const AssuRegList = lazy(() => import("../tables/chanchal/AssuRegList"));
const ClaimRegList = lazy(() => import("../tables/chanchal/ClaimRegList"));
const ComRecRegList = lazy(() => import("../tables/chanchal/ComRecRegList"));
const CSCInitRegList = lazy(() => import("../tables/chanchal/CSCInitRegList"));
const DailyWorkList = lazy(() => import("../tables/chanchal/DailyWorkList"));
const EquFaiRegList = lazy(() => import("../tables/chanchal/EquFaiRegList"));
const FailureReportList = lazy(() => import("../tables/chanchal/FailureReportList"));
const GateList = lazy(() => import("../tables/chanchal/GateList"));
const LineDefectList = lazy(() => import("../tables/chanchal/LineDefectList"));
const ManPoiOpeDrillList = lazy(() => import("../tables/chanchal/ManPoiOpeDrillList"));
const MeasurementVoltageMCBinPDCList = lazy(() => import("../tables/chanchal/MeasurementVoltageMCBinPDCList"));
const PASDrillList = lazy(() => import("../tables/chanchal/PASDrillList"));
const PmFolUpList = lazy(() => import("../tables/chanchal/PmFolUpList"));
const Pm_logbook_half_yearly_other_mainline_List = lazy(() => import("../tables/chanchal/Pm_logbook_half_yearly_other_mainline_List"));
const PreMainWorkList = lazy(() => import("../tables/chanchal/PreMainWorkList"));
const StationDiaryList = lazy(() => import("../tables/chanchal/StationDiaryList"));

// Isha's tables - Equipment maintenance and technical forms
const AfcPreventiveMaintenanceTable = lazy(() => import("../tables/isha/AfcPreventiveMaintenanceTable"));
const AFCPREVENTIVEMAINTENANCECHECKLISTtvmhalfyearlyTable = lazy(() => import("../tables/isha/AFCPREVENTIVEMAINTENANCECHECKLISTtvmhalfyearlyTable"));
const AttendanceRegisterList = lazy(() => import("../tables/isha/AttendanceRegisterList"));
const AxleCounterTable = lazy(() => import("../tables/isha/AxleCounterTable"));
const ContractualSpareTestingTable = lazy(() => import("../tables/isha/ContractualSpareTestingTable"));
const ControltakenOverList = lazy(() => import("../tables/isha/ControltakenOverList"));
const CSCInitializationDetailRegisterList = lazy(() => import("../tables/isha/CSCInitializationDetailRegisterList"));
const DailyTransactionRegisterList_RECEIPTS = lazy(() => import("../tables/isha/DailyTransactionRegisterList_RECEIPTS"));
const DARList = lazy(() => import("../tables/isha/DARList"));
const DeviceApplicationSoftwareLIST = lazy(() => import("../tables/isha/DeviceApplicationSoftwareLIST"));
const ESPListIsha = lazy(() => import("../tables/isha/ESPList"));
const EstimateLOAList = lazy(() => import("../tables/isha/EstimateLOAList"));
const FanRackTable = lazy(() => import("../tables/isha/FanRackTable"));
const FilterReplacementTable = lazy(() => import("../tables/isha/FilterReplacementTable"));
const FoundForeignCurrencyList = lazy(() => import("../tables/isha/FoundForeignCurrencyList"));
const GrievanceList = lazy(() => import("../tables/isha/GrievanceList"));
const IncidentAccidentRegListIsha = lazy(() => import("../tables/isha/IncidentAccidentRegList"));
const LMRCTable = lazy(() => import("../tables/isha/LMRCTable"));
const LoanregListIsha = lazy(() => import("../tables/isha/LoanregList"));
const PMLOGBOOKMAINLINE9Table = lazy(() => import("../tables/isha/PMLOGBOOKMAINLINE9Table"));
const PMSheetOCCYearlyTable = lazy(() => import("../tables/isha/PMSheetOCCYearlyTable"));
const PREVENTIVEMAINTENACE_CC_CCHSTable = lazy(() => import("../tables/isha/PREVENTIVEMAINTENACE_CC_CCHSTable"));
const SMPSSYSTEMMAINTENANCERECORDTable = lazy(() => import("../tables/isha/SMPSSYSTEMMAINTENANCERECORDTable"));

// Manshi's tables - Material management and contractor forms
const Afc_preventionList = lazy(() => import("../tables/manshi/Afc_preventionList"));
const FinanceDept3List = lazy(() => import("../tables/manshi/FinanceDept3List"));
const HonorariumList = lazy(() => import("../tables/manshi/HonorariumList"));
const LabFaultyList = lazy(() => import("../tables/manshi/LabFaultyList"));
const LiftRescue1list = lazy(() => import("../tables/manshi/LiftRescue1list"));
const LiftRescue2list = lazy(() => import("../tables/manshi/LiftRescue2list"));
const LiftRescue3list = lazy(() => import("../tables/manshi/LiftRescue3list"));
const Pmlog6List = lazy(() => import("../tables/manshi/Pmlog6List"));
const PmlogMaintainList = lazy(() => import("../tables/manshi/PmlogMaintainList"));
const Pmsheetoccbcchalfyearlytable = lazy(() => import("../tables/manshi/Pmsheetoccbcchalfyearlytable"));
const PossessionRegisterList = lazy(() => import("../tables/manshi/PossessionRegisterList"));
const ReplacementList = lazy(() => import("../tables/manshi/ReplacementList"));
const SerEntryList = lazy(() => import("../tables/manshi/SerEntryList"));
const ShuntList = lazy(() => import("../tables/manshi/ShuntList"));

// Monika's tables - Officer records and inspection forms
const DailycheckRegisterList = lazy(() => import("../tables/monika/DailycheckRegisterList"));
const DailyTelecomMainList = lazy(() => import("../tables/monika/DailyTelecomMainList"));
const DCSList = lazy(() => import("../tables/monika/DCSList"));
const DocumentManagementList = lazy(() => import("../tables/monika/DocumentManagementList"));

// Pinki's tables - Asset management and inventory forms
const BudgetAllotmentList = lazy(() => import("../tables/pinki/BudgetAllotmentList"));

// Rajiv's tables - Operational logs and maintenance schedules
const AFCMonthlyList = lazy(() => import("../tables/rajiv/AFCMonthlyList"));
const OperationLiftRescueList = lazy(() => import("../tables/rajiv/OperationLiftRescueList"));
const PMLogBookMainLine3List = lazy(() => import("../tables/rajiv/PMLogBookMainLine3List"));

// Store tables
const ActivityLog = lazy(() => import("../tables/store/ActivityLog"));
const ActivityLogDetail = lazy(() => import("../tables/store/ActivityLogDetail"));
const NightAfcGateDrilList = lazy(() => import("../tables/store/NightAfcGateDrilList"));
const PMLogBookMonthly = lazy(() => import("../tables/store/PMLogBookMonthly"));
const TableFilter = lazy(() => import("../tables/store/TableFilter"));

/**
 * Table routes configuration
 * Organized by category and developer area
 */
export const tableRoutes = [
  // Core System Tables
  {
    path: "/list/afc-annexureb",
    component: AfcAnnexureBList,
    name: "AFC Annexure B List",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/afc-prevent-form",
    component: AfcPreventformList,
    name: "AFC Prevent Form List",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/cent-comp-pre",
    component: CentCompPreList,
    name: "Central Component Pre List",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/color-light-signal-mainline",
    component: ColorLightSignalMainlineList,
    name: "Color Light Signal Mainline List",
    category: "signals",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/deport-form",
    component: DeportFormList,
    name: "Depot Form List",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/esp-quarterly-signal",
    component: EspQuarterlySignalList,
    name: "ESP Quarterly Signal List",
    category: "signals",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/first-aid-register",
    component: FirstAidRegisterList,
    name: "First Aid Register List",
    category: "safety",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/found-receive-art",
    component: FoundReceiveArtList,
    name: "Found & Received Article List",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/gate-pass",
    component: GatePassList,
    name: "Gate Pass List",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/honorium-reg",
    component: HonoriumRegList,
    name: "Honorarium Register List",
    category: "hr",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/incident-accident-reg",
    component: IncidentAccidentRegList,
    name: "Incident & Accident Register List",
    category: "safety",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/incident-register-signals",
    component: IncidentRegisterSignalsList,
    name: "Incident Register Signals List",
    category: "signals",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/lats-vdu-drill",
    component: LatsVduDrillList,
    name: "LATS VDU Drill List",
    category: "training",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/list-honorarium",
    component: ListHonorariumList,
    name: "List Honorarium List",
    category: "hr",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/loan-register",
    component: LoanRegisterList,
    name: "Loan Register List",
    category: "finance",
    requiredRole: ["Employee", "Admin"]
  },

  // Akshra's Tables - Telecom & DTR
  {
    path: "/list/afc-gate-drill",
    component: AfcgatedrillList,
    name: "AFC Gate Drill List",
    category: "maintenance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/agent-issue",
    component: AgentissueList,
    name: "Agent Issue List",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/biodata-reg",
    component: BiodataRegList,
    name: "Biodata Register List",
    category: "hr",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/biodata-occ",
    component: BiodataoccList,
    name: "Biodata OCC List",
    category: "hr",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/checklist",
    component: ChecklistList,
    name: "Checklist List",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/dtr-leftside",
    component: DtrleftsideList,
    name: "DTR Left Side List",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/dtr-reg",
    component: DtrregList,
    name: "DTR Register List",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/dtr-signals-issue",
    component: DtrsignalsissueList,
    name: "DTR Signals Issue List",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/dtr-signals-receipts",
    component: DtrsignalsreceiptsList,
    name: "DTR Signals Receipts List",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/emergency-fire-drill",
    component: EmefiremandrillList,
    name: "Emergency Fire & Man Drill List",
    category: "safety",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/esp",
    component: Esplist,
    name: "ESP List",
    category: "electrical",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/false-floor",
    component: FalsefloorList,
    name: "False Floor List",
    category: "infrastructure",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/incident-register-signals-akshra",
    component: IncidentRegisterSignalsListAkshra,
    name: "Incident Register Signals List",
    category: "signals",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/in-out",
    component: InoutList,
    name: "In/Out List",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/loan-reg-akshra",
    component: LoanregListAkshra,
    name: "Loan Register List",
    category: "finance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/pm-log-book",
    component: PmloogbookList,
    name: "PM Log Book List",
    category: "maintenance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/pm-sheet",
    component: PmsheetList,
    name: "PM Sheet List",
    category: "maintenance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/tsr-reg",
    component: TsrregList,
    name: "TSR Register List",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },

  // Store Tables
  {
    path: "/list/activity-log",
    component: ActivityLog,
    name: "Activity Log",
    category: "store",
    requiredRole: ["Admin"]
  },
  {
    path: "/list/activity-log-detail",
    component: ActivityLogDetail,
    name: "Activity Log Detail",
    category: "store",
    requiredRole: ["Admin"]
  },
  {
    path: "/list/night-afc-gate-drill",
    component: NightAfcGateDrilList,
    name: "Night AFC Gate Drill List",
    category: "store",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/pm-logbook-monthly",
    component: PMLogBookMonthly,
    name: "PM LogBook Monthly",
    category: "store",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/list/table-filter",
    component: TableFilter,
    name: "Table Filter",
    category: "store",
    requiredRole: ["Employee", "Admin"]
  }
];

/**
 * Get table routes by category
 */
export const getTableRoutesByCategory = (category) => {
  return tableRoutes.filter(route => route.category === category);
};

/**
 * Get table routes by developer
 */
export const getTableRoutesByDeveloper = (developer) => {
  return tableRoutes.filter(route => route.developer === developer);
};

/**
 * Get all table categories
 */
export const getTableCategories = () => {
  const categories = [...new Set(tableRoutes.map(route => route.category))];
  return categories.map(cat => ({
    key: cat,
    label: cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));
};

/**
 * Get all developers who have tables
 */
export const getTableDevelopers = () => {
  const developers = [...new Set(tableRoutes.filter(route => route.developer).map(route => route.developer))];
  return developers.map(dev => ({
    key: dev,
    label: dev.charAt(0).toUpperCase() + dev.slice(1)
  }));
};

export default tableRoutes;