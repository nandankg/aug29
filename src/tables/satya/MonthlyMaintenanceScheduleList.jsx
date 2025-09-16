import React, { useEffect, useState, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import {
  addMonthly,
  fetchData,
  saveData,
} from "../../reducer/satya/MonthlyMaintenanceScheduleReducer";
import UniversalExportComponent from "../../components/UniversalExportComponent";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const MonthlyMaintenanceScheduleList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const dispatch = useDispatch();
  const monthlymaintenance = useSelector((state) => state.schedule);
  const [slug, setSlug] = useState(getLastParameter().trim());
  const tableRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("userdata"));
  const itmm = monthlymaintenance.data.data;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  let filteredItems;
  if (itmm) {
    filteredItems = itmm.filter((itm) => {
      return itm.id === id;
    });
  }

  const handleSave = (id) => {
    dispatch(saveData(id));
    navigate(`list/${slug}`);
  };

  // Prepare export data
  const prepareExportData = () => {
    if (!filteredItems || filteredItems.length === 0) return { data: [], columns: [] };

    const item = filteredItems[0];
    const exportData = [];

    // Process systems data
    if (item.systems) {
      item.systems.forEach((system, systemIndex) => {
        if (system.activities) {
          system.activities.forEach((activity, activityIndex) => {
            exportData.push({
              system: systemIndex === 0 ? 'PAS-PIDS' : systemIndex === 1 ? 'TELEPHONE' : 'CCTV',
              activityNo: activityIndex + 1,
              activityDescription: activity.description || `Activity ${activityIndex + 1}`,
              checked: activity.checked || 'No',
              remark: activity.remark || '',
              station: item.station || '',
              date: item.date || '',
              employeeId: item.employee_id || '',
              department: item.department || ''
            });
          });
        }
      });
    }

    const columns = [
      { field: 'system', headerName: 'System' },
      { field: 'activityNo', headerName: 'Activity No.' },
      { field: 'activityDescription', headerName: 'Activity Description' },
      { field: 'checked', headerName: 'Completed' },
      { field: 'remark', headerName: 'Remark' },
      { field: 'station', headerName: 'Station' },
      { field: 'date', headerName: 'Date' },
      { field: 'employeeId', headerName: 'Employee ID' },
      { field: 'department', headerName: 'Department' }
    ];

    return { data: exportData, columns };
  };

  const exportMetadata = {
    formName: "PM Sheet (OCC & BCC) Monthly",
    formId: "PM-OCC-BCC-MONTHLY",
    totalRecords: filteredItems?.[0]?.systems?.reduce((total, system) => total + (system.activities?.length || 0), 0) || 0,
    additionalInfo: filteredItems?.[0] ? `Station: ${filteredItems[0].station}, Date: ${filteredItems[0].date}` : ''
  };

  return (
    <>
      <div className="container">
        <div role="presentation " className="bredcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit">
              Monthly Maintenance Schedule
            </Link>
            <Link underline="hover" color="inherit">
              List
            </Link>
          </Breadcrumbs>
        </div>
        <h3>PM Sheet (OCC & BCC) Monthly</h3>
        <span className="line-box"></span>

        {/* Universal Export Component */}
        <UniversalExportComponent
          data={prepareExportData().data}
          columns={prepareExportData().columns}
          metadata={exportMetadata}
          filename="pm_occ_bcc_monthly"
        />

        <div ref={tableRef}>
          {filteredItems?.toReversed().map((item, index) => {
            return (
              <div key={item.id}>
                <table style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th colSpan={2} className="text-start">
                        Station: {item.station}
                      </th>
                      <th className="text-start">Date: {item.date}</th>
                      <th className="text-start" style={{ width: "250px" }}>
                        DOC Annexure-II, version 1.0
                      </th>
                    </tr>
                    <tr>
                      <th colSpan={2} className="text-start">
                        Emp. Id: {item.employee_id}
                      </th>
                      <th colSpan={3} className="text-start">
                        Department: {item.department}
                      </th>
                    </tr>
                    <tr>
                      <th>System</th>
                      <th colSpan={2}>Activity</th>
                      <th>Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Simplified table structure for maintainability */}
                    {item.systems?.map((system, systemIndex) =>
                      system.activities?.map((activity, activityIndex) => (
                        <tr key={`${systemIndex}-${activityIndex}`}>
                          {activityIndex === 0 && (
                            <td rowSpan={system.activities.length}>
                              {systemIndex === 0 ? 'PAS-PIDS' : systemIndex === 1 ? 'TELEPHONE' : 'CCTV'}
                            </td>
                          )}
                          <td className="text-start" colSpan={2}>
                            {activity.description || `Activity ${activityIndex + 1}`}
                            <input
                              type="checkbox"
                              checked={activity.checked === "yes"}
                              disabled
                            />
                          </td>
                          <td>{activity.remark}</td>
                        </tr>
                      ))
                    )}
                    <tr>
                      <td className="text-start" colSpan={4}>
                        Supervisor Name: {item.SName} | EMP ID: {item.SempId} | Date & Time: {item.SdateTime}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-start" colSpan={4}>
                        Manager Name: {item.MName} | EMP ID: {item.MempId} | Date & Time: {item.MdateTime}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {item.status === "0" && (
                  <div className="d-flex gap-2 mt-2">
                    <Link
                      to={`/edit/pm-occ-bcc-monthly`}
                      state={{ id: item.id }}
                      className="btn btn-primary align-content-center"
                    >
                      Edit
                    </Link>
                    <button
                      type="submit"
                      onClick={() => {
                        handleSave(id);
                      }}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MonthlyMaintenanceScheduleList;