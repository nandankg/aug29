import { FaFilter } from "react-icons/fa";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import {
  addPM,
  fetchData,
  saveData,
} from "../../reducer/satya/PMMainlineReducer";
import UniversalExportComponent from "../../components/UniversalExportComponent";

const user = JSON.parse(localStorage.getItem("userdata"));

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const PMMainlineList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const dispatch = useDispatch();
  const tableRef = useRef(null);
  const pmmainline = useSelector((state) => state.mainline);
  const [slug, setSlug] = useState(getLastParameter().trim());
  const itmm = pmmainline.data.data;

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

    // Process SC activities
    if (item.activities1) {
      item.activities1.forEach((activity, index) => {
        exportData.push({
          equipment: 'SC',
          srNo: index + 1,
          activity: index < 3 ? 'Visual Inspection' : index < 6 ? 'Cleaning' : 'Module Test',
          description: `SC Activity ${index + 1}`,
          sc1: activity.SC1 || '',
          sc2: activity.SC2 || '',
          sc3: activity.SC3 || '',
          sc4: activity.SC4 || '',
          sc5: activity.SC5 || '',
          sc6: activity.SC6 || '',
          remarks: activity.remark || '',
          actionTaken: activity.action || '',
          deficiency: activity.deficiency || '',
          stationName: item.stn_name || '',
          date: item.date || '',
          month: item.month || '',
          employeeId: item.employee_id || '',
          department: item.department || ''
        });
      });
    }

    // Process AVM activities
    if (item.activities2) {
      item.activities2.forEach((activity, index) => {
        exportData.push({
          equipment: 'AVM',
          srNo: index + 1,
          activity: index < 6 ? 'Visual Inspection' : 'Module Test',
          description: `AVM Activity ${index + 1}`,
          avm1: activity.AVM1 || '',
          avm2: activity.AVM2 || '',
          avm3: activity.AVM3 || '',
          avm4: activity.AVM4 || '',
          avm5: activity.AVM5 || '',
          avm6: activity.AVM6 || '',
          remarks: activity.remark1 || '',
          actionTaken: activity.action1 || '',
          deficiency: activity.deficiency1 || '',
          stationName: item.stn_name || '',
          date: item.date || '',
          month: item.month || '',
          employeeId: item.employee_id || '',
          department: item.department || ''
        });
      });
    }

    // Process Switch activities
    if (item.activities3) {
      item.activities3.forEach((activity, index) => {
        exportData.push({
          equipment: 'Switch',
          srNo: index + 1,
          activity: index < 3 ? 'Visual Inspection' : index < 5 ? 'Cleaning' : 'Module Test',
          description: `Switch Activity ${index + 1}`,
          s1: activity.S1 || '',
          s2: activity.S2 || '',
          s3: activity.S3 || '',
          s4: activity.S4 || '',
          s5: activity.S5 || '',
          s6: activity.S6 || '',
          remarks: activity.remark2 || '',
          actionTaken: activity.action2 || '',
          deficiency: activity.deficiency2 || '',
          stationName: item.stn_name || '',
          date: item.date || '',
          month: item.month || '',
          employeeId: item.employee_id || '',
          department: item.department || ''
        });
      });
    }

    const columns = [
      { field: 'equipment', headerName: 'Equipment' },
      { field: 'srNo', headerName: 'Sr. No.' },
      { field: 'activity', headerName: 'Activity' },
      { field: 'description', headerName: 'Description of Work' },
      { field: 'remarks', headerName: 'Remarks/Deficiencies' },
      { field: 'actionTaken', headerName: 'Action Taken' },
      { field: 'deficiency', headerName: 'Why Deficiency Could Not Be Rectified' },
      { field: 'stationName', headerName: 'Station Name' },
      { field: 'date', headerName: 'Date' },
      { field: 'month', headerName: 'Month' },
      { field: 'employeeId', headerName: 'Employee ID' },
      { field: 'department', headerName: 'Department' }
    ];

    return { data: exportData, columns };
  };

  const exportMetadata = {
    formName: "AFC PREVENTIVE MAINTENANCE CHECKLIST (MONTHLY) (ANNEXURE-A)",
    formId: "AFC-PM-MONTHLY-ANNEXURE-A",
    totalRecords: ((filteredItems?.[0]?.activities1?.length || 0) +
                   (filteredItems?.[0]?.activities2?.length || 0) +
                   (filteredItems?.[0]?.activities3?.length || 0)),
    additionalInfo: filteredItems?.[0] ? `Station: ${filteredItems[0].stn_name}, Date: ${filteredItems[0].date}` : ''
  };

  return (
    <>
      <div className="container">
        <div role="presentation " className="bredcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit">
              AFC Preventive Maintenance (Monthly)
            </Link>
            <Link underline="hover" color="inherit">
              List
            </Link>
          </Breadcrumbs>
        </div>
        <h3>AFC PREVENTIVE MAINTENANCE CHECKLIST (MONTHLY) (ANNEXURE-A)</h3>
        <span className="line-box"></span>

        {/* Universal Export Component */}
        <UniversalExportComponent
          data={prepareExportData().data}
          columns={prepareExportData().columns}
          metadata={exportMetadata}
          filename="afc_pm_monthly_annexure_a"
        />

        <div ref={tableRef}>
          <table>
            {filteredItems?.toReversed().map((item, index) => {
              return (
                <div key={item.id}>
                  <thead>
                    <tr>
                      <th className="text-start" colSpan="3">
                        STN. NAME: {item?.stn_name}
                      </th>
                      <th className="text-start" colSpan="1">
                        FREQUENCY: MONTHLY
                      </th>
                      <th className="text-start" colSpan="4">
                        DATE: {item?.date}
                      </th>
                      <th className="text-start" colSpan="2">
                        MONTH: {item?.month}
                      </th>
                      <th className="text-start" colSpan="1">
                        Emp. Id: {item?.employee_id}
                      </th>
                      <th className="text-start" colSpan="2">
                        Department: {item?.department}
                      </th>
                    </tr>
                    <tr>
                      <th rowSpan="6">Equipment</th>
                      <th rowSpan="2">Sr. No.</th>
                      <th rowSpan="2">Activity</th>
                      <th rowSpan="2">DESCRIPTION OF WORK</th>
                      <th colSpan="6">SC</th>
                      <th rowSpan="2">REMARKS/ DEFICIENCIES</th>
                      <th rowSpan="2">ACTION TAKEN</th>
                      <th rowSpan="2">WHY DEFICIENCY COULD NOT BE RECTIFIED</th>
                    </tr>
                    <tr>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Simplified display - showing first few activities */}
                    {item.activities1?.slice(0, 3).map((activity, idx) => (
                      <tr key={idx}>
                        {idx === 0 && (
                          <td rowSpan={3} style={{ writingMode: "vertical-lr", textAlign: "center" }}>
                            SC Equipment
                          </td>
                        )}
                        <td>{idx + 1}</td>
                        <td>{idx < 3 ? 'Visual Inspection' : 'Cleaning'}</td>
                        <td className="text-start">Activity {idx + 1}</td>
                        <td>{activity?.SC1}</td>
                        <td>{activity?.SC2}</td>
                        <td>{activity?.SC3}</td>
                        <td>{activity?.SC4}</td>
                        <td>{activity?.SC5}</td>
                        <td>{activity?.SC6}</td>
                        <td>{activity?.remark}</td>
                        <td>{activity?.action}</td>
                        <td>{activity?.deficiency}</td>
                      </tr>
                    ))}

                    {/* Staff section */}
                    <tr>
                      <th rowSpan={4} colSpan={4}>
                        Staff on Duty
                      </th>
                      <th colSpan={7}>Name</th>
                      <th colSpan={2}>Designation</th>
                    </tr>
                    <tr>
                      <td colSpan={7}>{item.staff1_name}</td>
                      <td colSpan={2}>{item.staff1_desg}</td>
                    </tr>
                    <tr>
                      <td colSpan={7}>{item.staff2_name}</td>
                      <td colSpan={2}>{item.staff2_desg}</td>
                    </tr>
                    <tr>
                      <td colSpan={7}>{item.staff3_name}</td>
                      <td colSpan={2}>{item.staff3_desg}</td>
                    </tr>
                  </tbody>

                  {item.status === "0" && user.role === "Admin" && (
                    <tr>
                      <td colSpan={13}>
                        <div className="d-flex gap-2 align-items-center mt-2">
                          <Link
                            to={`/edit/pm-logbook-monthly-other-mainline`}
                            state={{ id: item.id }}
                            className="btn align-content-center"
                            style={{
                              width: "100px",
                              height: "50px",
                              textAlign: "center",
                              backgroundColor: "#FF7900 ",
                              color: "white",
                              fontSize: "20px",
                            }}
                          >
                            Edit
                          </Link>
                          <button
                            type="submit"
                            onClick={() => {
                              handleSave(id);
                            }}
                            className="btn btn-primary"
                            style={{
                              width: "100px",
                              height: "50px",
                              textAlign: "center",
                              fontSize: "18px",
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </div>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default PMMainlineList;