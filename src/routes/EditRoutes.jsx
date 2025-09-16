/**
 * Edit Routes Module
 * 
 * Contains all edit form routes for the UPMRC application.
 * This module handles data modification forms organized by developer/feature area.
 */

import { lazy } from 'react';

// Core system edit components
const ColorLightSignalMainlineEdit = lazy(() => import("../edit/ColorLightSignalMainlineEdit"));
const EditAfcAnnexureA = lazy(() => import("../edit/EditAfcAnnexureA"));
const EditAfcAnnexureB = lazy(() => import("../edit/EditAfcAnnexureB"));
const EditCentComputer = lazy(() => import("../edit/EditCentComputer"));
const EditDeportyearly = lazy(() => import("../edit/EditDeportyearly"));
const EditFirstAidReg = lazy(() => import("../edit/EditFirstAidReg"));
const EditFoundReceive = lazy(() => import("../edit/EditFoundReceive"));
const EditGatePass = lazy(() => import("../edit/EditGatePass"));
const EditHonorariumReg = lazy(() => import("../edit/EditHonorariumReg"));
const EditIncident = lazy(() => import("../edit/EditIncident"));
const EditIncidentAccidentReg = lazy(() => import("../edit/EditIncidentAccidentReg"));
const EditLatsVduDrill = lazy(() => import("../edit/EditLatsVduDrill"));
const EditListHonorarium = lazy(() => import("../edit/EditListHonorarium"));
const EditLoanRegister = lazy(() => import("../edit/EditLoanRegister"));
const EditOutstandRecReg = lazy(() => import("../edit/EditOutstandRecReg"));
const EditPMSheetQuaterly = lazy(() => import("../edit/EditPMSheetQuaterly"));
const EditPolicectdreg = lazy(() => import("../edit/EditPolicectdreg"));
const EditTerEntryReg = lazy(() => import("../edit/EditTerEntryReg"));
const EditUPSRoomEntryReg = lazy(() => import("../edit/EditUPSRoomEntryReg"));
const EditUpdate_PM_Occ_BCC = lazy(() => import("../edit/EditUpdate_PM_Occ_BCC"));
const ESPQuarterlySignalEdit = lazy(() => import("../edit/ESPQuarterlySignalEdit"));

// Akshra's edit components - Telecom and DTR related
const EditAgentissue = lazy(() => import("../edit/akshra/EditAgentissue"));
const EditBioocc = lazy(() => import("../edit/akshra/EditBioocc."));
const EditBioreg = lazy(() => import("../edit/akshra/EditBioreg"));
const EditChecklist = lazy(() => import("../edit/akshra/EditChecklist"));
const EditDtrleftside = lazy(() => import("../edit/akshra/EditDtrleftside"));
const EditDtrreg = lazy(() => import("../edit/akshra/EditDtrreg"));
const EditDtrsignalsissue = lazy(() => import("../edit/akshra/EditDtrsignalsissue"));
const EditDtrsignalsreceipts = lazy(() => import("../edit/akshra/EditDtrsignalsreceipts"));
const EditEmefire = lazy(() => import("../edit/akshra/EditEmefire"));
const EditFalsefloor = lazy(() => import("../edit/akshra/EditFalsefloor"));
const EditInout = lazy(() => import("../edit/akshra/EditInout"));
const EditLoanregAkshra = lazy(() => import("../edit/akshra/EditLoanreg"));
const EditPmloogbook = lazy(() => import("../edit/akshra/EditPmloogbook"));
const EditPmsheet = lazy(() => import("../edit/akshra/EditPmsheet"));
const EditTraininduction = lazy(() => import("../edit/akshra/EditTraininduction"));
const EditTsrreg = lazy(() => import("../edit/akshra/EditTsrreg"));

// Chanchal's edit components - Preventive maintenance and operational drills
const AfcGateDrillEdit = lazy(() => import("../edit/chanchal/AfcGateDrillEdit"));
const AssuRegEdit = lazy(() => import("../edit/chanchal/AssuRegEdit"));
const ClaimRegEdit = lazy(() => import("../edit/chanchal/ClaimRegEdit"));
const ComRecRegEdit = lazy(() => import("../edit/chanchal/ComRecRegEdit"));
const CSCInitRegEdit = lazy(() => import("../edit/chanchal/CSCInitRegEdit"));
const DailyWorkEdit = lazy(() => import("../edit/chanchal/DailyWorkEdit"));
const EquFaiRegEdit = lazy(() => import("../edit/chanchal/EquFaiRegEdit"));
const FailureReportEdit = lazy(() => import("../edit/chanchal/FailureReportEdit"));
const GateEdit = lazy(() => import("../edit/chanchal/GateEdit"));
const LineDefectEdit = lazy(() => import("../edit/chanchal/LineDefectEdit"));
const ManPoiOpeDrillEdit = lazy(() => import("../edit/chanchal/ManPoiOpeDrillEdit"));
const MeasurementVoltageMCBinPDCEdit = lazy(() => import("../edit/chanchal/MeasurementVoltageMCBinPDCEdit"));
const PASDrillEdit = lazy(() => import("../edit/chanchal/PASDrillEdit"));
const PmFolUpEdit = lazy(() => import("../edit/chanchal/PmFolUpEdit"));
const Pm_logbook_half_yearly_other_mainline_Edit = lazy(() => import("../edit/chanchal/Pm_logbook_half_yearly_other_mainline_Edit"));
const PreMainWorkEdit = lazy(() => import("../edit/chanchal/PreMainWorkEdit"));
const StationDiaryEdit = lazy(() => import("../edit/chanchal/StationDiaryEdit"));

// Isha's edit components - Equipment maintenance and technical forms
const EditAFCPREVENTIVEMAINTENANCECHECKLISTtvmhalfyearly = lazy(() => import("../edit/isha/EditAFCPREVENTIVEMAINTENANCECHECKLISTtvmhalfyearly"));
const EditAttendanceRegister = lazy(() => import("../edit/isha/EditAttendanceRegister"));
const EditAxleCounter = lazy(() => import("../edit/isha/EditAxleCounter"));
const EditContractualSpareTesting = lazy(() => import("../edit/isha/EditContractualSpareTesting"));
const EditControlTakenOver = lazy(() => import("../edit/isha/EditControlTakenOver"));
const EditCSCInitializationRegister = lazy(() => import("../edit/isha/EditCSCInitializationRegister"));
const EditDAR = lazy(() => import("../edit/isha/EditDAR"));
const EditDailyTransactionRegister_RECEIPTS = lazy(() => import("../edit/isha/EditDailyTransactionRegister_RECEIPTS"));
const EditDeviceApplicationSoftware = lazy(() => import("../edit/isha/EditDeviceApplicationSoftware"));
const EditEsp = lazy(() => import("../edit/isha/EditEsp"));
const EditEstimateLOA = lazy(() => import("../edit/isha/EditEstimateLOA"));
const EditFanRack = lazy(() => import("../edit/isha/EditFanRack"));
const EditFilterReplacement = lazy(() => import("../edit/isha/EditFilterReplacement"));
const EditFoundForeignCurrency = lazy(() => import("../edit/isha/EditFoundForeignCurrency"));
const EditGrivance = lazy(() => import("../edit/isha/EditGrivance"));
const EditIncidentAccidentRegIsha = lazy(() => import("../edit/isha/EditIncidentAccidentReg"));
const EditLATSVDU = lazy(() => import("../edit/isha/EditLATSVDU"));
const EditLoanregIsha = lazy(() => import("../edit/isha/EditLoanreg"));
const EditPMSheetoccYearlyTable = lazy(() => import("../edit/isha/EditPMSheetoccYearlyTable"));
const EditSMPSSYSTEMMAINTENANCERECORD = lazy(() => import("../edit/isha/EditSMPSSYSTEMMAINTENANCERECORD"));
const EditAfcPreventiveHalfYearly = lazy(() => import("../edit/isha/EditAfcPreventiveHalfYearly"));
const EditPMLOGBOOKMAAINLINE9 = lazy(() => import("../edit/isha/EditPMLOGBOOKMAAINLINE9"));
const Edit_PREVENTIVEMAINTENACE_CC_CCHS = lazy(() => import("../edit/isha/Edit PREVENTIVEMAINTENACE_CC_CCHS"));

// Manshi's edit components - Material management and contractor forms  
const EditContractor = lazy(() => import("../edit/manshi/EditContractor"));
const EditConsume = lazy(() => import("../edit/manshi/EditConsume"));
const EditDailyTelecom = lazy(() => import("../edit/manshi/EditDailyTelecom"));
const EditEarth = lazy(() => import("../edit/manshi/EditEarth"));
const EditOsUrc = lazy(() => import("../edit/manshi/EditOsUrc"));
const Editafc = lazy(() => import("../edit/manshi/Editafc"));

// Monika's edit components - Officer records and inspection forms
const PeetyEdit = lazy(() => import("../edit/monika/PeetyEdit"));

// Pinki's edit components - Asset management and inventory forms
const EditAxleCounter = lazy(() => import("../edit/pinki/EditAxleCounter"));

// Rajiv's edit components - Operational logs and maintenance schedules
const CardInitializationEdit = lazy(() => import("../edit/rajiv/CardInitializationEdit"));
const EditAFCMonthly = lazy(() => import("../edit/rajiv/EditAFCMonthly"));
const EditCbtTraining = lazy(() => import("../edit/rajiv/EditCbtTraining"));
const EditDailyTelecomCheckList = lazy(() => import("../edit/rajiv/EditDailyTelecomCheckList"));
const EditFacp = lazy(() => import("../edit/rajiv/EditFacp"));
const EditFoundReceivedCash = lazy(() => import("../edit/rajiv/EditFoundReceivedCash"));
const EditJobCard = lazy(() => import("../edit/rajiv/EditJobCard"));
const EditLoanRegisterRajiv = lazy(() => import("../edit/rajiv/EditLoanRegister"));
const EditPMlogBookmainline3 = lazy(() => import("../edit/rajiv/EditPMlogBookmainline3"));
const EditPMLogBook3 = lazy(() => import("../edit/rajiv/EditPMLogBook3"));
const EditPMSheetMonthlyDepot = lazy(() => import("../edit/rajiv/EditPMSheetMonthlyDepot"));
const EditPoliceCustody = lazy(() => import("../edit/rajiv/EditPoliceCustody"));
const EditQTrainInspection = lazy(() => import("../edit/rajiv/EditQTrainInspection"));
const EditSDCEntryExit = lazy(() => import("../edit/rajiv/EditSDCEntryExit"));
const EditSMPS = lazy(() => import("../edit/rajiv/EditSMPS"));
const EditStaionDiary = lazy(() => import("../edit/rajiv/EditStaionDiary"));
const OperationLiftRescueEdit = lazy(() => import("../edit/rajiv/OperationLiftRescueEdit"));

// Satya's edit components - System maintenance and technical records
const EditAfcPreventive = lazy(() => import("../edit/satya/EditAfcPreventive"));
const EditCabinetRecord = lazy(() => import("../edit/satya/EditCabinetRecord"));
const EditPMList = lazy(() => import("../edit/satya/EditPMList"));
const EditPMMainline = lazy(() => import("../edit/satya/EditPMMainline"));
const NightAfcGateDrilEdit = lazy(() => import("../edit/satya/NightAfcGateDrilEdit"));

// Store edit components
const QuarterlyMaintenanceOccBccEdit = lazy(() => import("../edit/store/QuarterlyMaintenanceOccBccEdit"));
const StationEarningEdit = lazy(() => import("../edit/store/StationEarningEdit"));

/**
 * Edit routes configuration
 * Organized by category and developer area
 */
export const editRoutes = [
  // Core System Edit Forms
  {
    path: "/edit/color-light-signal-mainline",
    component: ColorLightSignalMainlineEdit,
    name: "Edit Color Light Signal Mainline",
    category: "signals",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/afc-annexure-a",
    component: EditAfcAnnexureA,
    name: "Edit AFC Annexure A",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/afc-annexure-b",
    component: EditAfcAnnexureB,
    name: "Edit AFC Annexure B",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/cent-computer",
    component: EditCentComputer,
    name: "Edit Central Computer",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/deport-yearly",
    component: EditDeportyearly,
    name: "Edit Depot Yearly",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/first-aid-reg",
    component: EditFirstAidReg,
    name: "Edit First Aid Register",
    category: "safety",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/found-receive",
    component: EditFoundReceive,
    name: "Edit Found & Received",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/gate-pass",
    component: EditGatePass,
    name: "Edit Gate Pass",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/honorarium-reg",
    component: EditHonorariumReg,
    name: "Edit Honorarium Register",
    category: "hr",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/incident",
    component: EditIncident,
    name: "Edit Incident",
    category: "safety",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/incident-accident-reg",
    component: EditIncidentAccidentReg,
    name: "Edit Incident & Accident Register",
    category: "safety",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/lats-vdu-drill",
    component: EditLatsVduDrill,
    name: "Edit LATS VDU Drill",
    category: "training",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/list-honorarium",
    component: EditListHonorarium,
    name: "Edit List Honorarium",
    category: "hr",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/loan-register",
    component: EditLoanRegister,
    name: "Edit Loan Register",
    category: "finance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/outstand-rec-reg",
    component: EditOutstandRecReg,
    name: "Edit Outstanding Record Register",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/pm-sheet-quarterly",
    component: EditPMSheetQuaterly,
    name: "Edit PM Sheet Quarterly",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/police-ctd-reg",
    component: EditPolicectdreg,
    name: "Edit Police CTD Register",
    category: "safety",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/ter-entry-reg",
    component: EditTerEntryReg,
    name: "Edit TER Entry Register",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/ups-room-entry-reg",
    component: EditUPSRoomEntryReg,
    name: "Edit UPS Room Entry Register",
    category: "operations",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/update-pm-occ-bcc",
    component: EditUpdate_PM_Occ_BCC,
    name: "Edit Update PM OCC BCC",
    category: "maintenance",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/esp-quarterly-signal",
    component: ESPQuarterlySignalEdit,
    name: "Edit ESP Quarterly Signal",
    category: "signals",
    requiredRole: ["Employee", "Admin"]
  },

  // Akshra's Edit Forms - Telecom & DTR
  {
    path: "/edit/agent-issue",
    component: EditAgentissue,
    name: "Edit Agent Issue",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/bio-occ",
    component: EditBioocc,
    name: "Edit Bio OCC",
    category: "hr",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/bio-reg",
    component: EditBioreg,
    name: "Edit Bio Register",
    category: "hr",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/checklist",
    component: EditChecklist,
    name: "Edit Checklist",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/dtr-leftside",
    component: EditDtrleftside,
    name: "Edit DTR Left Side",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/dtr-reg",
    component: EditDtrreg,
    name: "Edit DTR Register",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/dtr-signals-issue",
    component: EditDtrsignalsissue,
    name: "Edit DTR Signals Issue",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/dtr-signals-receipts",
    component: EditDtrsignalsreceipts,
    name: "Edit DTR Signals Receipts",
    category: "telecom",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/eme-fire",
    component: EditEmefire,
    name: "Edit Emergency Fire",
    category: "safety",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/false-floor",
    component: EditFalsefloor,
    name: "Edit False Floor",
    category: "infrastructure",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/in-out",
    component: EditInout,
    name: "Edit In/Out",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/loan-reg-akshra",
    component: EditLoanregAkshra,
    name: "Edit Loan Register",
    category: "finance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/pm-log-book",
    component: EditPmloogbook,
    name: "Edit PM Log Book",
    category: "maintenance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/pm-sheet",
    component: EditPmsheet,
    name: "Edit PM Sheet",
    category: "maintenance",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/train-induction",
    component: EditTraininduction,
    name: "Edit Train Induction",
    category: "training",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/tsr-reg",
    component: EditTsrreg,
    name: "Edit TSR Register",
    category: "operations",
    developer: "akshra",
    requiredRole: ["Employee", "Admin"]
  },

  // Isha's Edit Forms - Equipment maintenance and technical forms
  {
    path: "/edit/afc-preventive-half-yearly",
    component: EditAfcPreventiveHalfYearly,
    name: "Edit AFC Preventive Half Yearly",
    category: "maintenance",
    developer: "isha",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/axle-counter",
    component: EditAxleCounter,
    name: "Edit Axle Counter",
    category: "signals",
    developer: "isha",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/pm-logbook-mainline-9",
    component: EditPMLOGBOOKMAAINLINE9,
    name: "Edit PM Logbook Mainline 9",
    category: "maintenance",
    developer: "isha",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/preventive-maintenance-cc-cchs",
    component: Edit_PREVENTIVEMAINTENACE_CC_CCHS,
    name: "Edit Preventive Maintenance CC CCHS",
    category: "maintenance",
    developer: "isha",
    requiredRole: ["Employee", "Admin"]
  },

  // Satya's Edit Forms - System maintenance and technical records
  {
    path: "/edit/afc-preventive",
    component: EditAfcPreventive,
    name: "Edit AFC Preventive",
    category: "maintenance",
    developer: "satya",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/cabinet-record",
    component: EditCabinetRecord,
    name: "Edit Cabinet Record",
    category: "maintenance",
    developer: "satya",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/pm-list",
    component: EditPMList,
    name: "Edit PM List",
    category: "maintenance",
    developer: "satya",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/pm-mainline",
    component: EditPMMainline,
    name: "Edit PM Mainline",
    category: "maintenance",
    developer: "satya",
    requiredRole: ["Employee", "Admin"]
  },

  // Store Edit Forms
  {
    path: "/edit/quarterly-maintenance-occ-bcc",
    component: QuarterlyMaintenanceOccBccEdit,
    name: "Edit Quarterly Maintenance OCC BCC",
    category: "store",
    requiredRole: ["Employee", "Admin"]
  },
  {
    path: "/edit/station-earning",
    component: StationEarningEdit,
    name: "Edit Station Earning",
    category: "store",
    requiredRole: ["Employee", "Admin"]
  }
];

/**
 * Get edit routes by category
 */
export const getEditRoutesByCategory = (category) => {
  return editRoutes.filter(route => route.category === category);
};

/**
 * Get edit routes by developer
 */
export const getEditRoutesByDeveloper = (developer) => {
  return editRoutes.filter(route => route.developer === developer);
};

/**
 * Get all edit categories
 */
export const getEditCategories = () => {
  const categories = [...new Set(editRoutes.map(route => route.category))];
  return categories.map(cat => ({
    key: cat,
    label: cat.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }));
};

/**
 * Get all developers who have edit forms
 */
export const getEditDevelopers = () => {
  const developers = [...new Set(editRoutes.filter(route => route.developer).map(route => route.developer))];
  return developers.map(dev => ({
    key: dev,
    label: dev.charAt(0).toUpperCase() + dev.slice(1)
  }));
};

export default editRoutes;