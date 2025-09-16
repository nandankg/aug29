import { FaFilter } from "react-icons/fa";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import {
  addLogbook,
  fetchData,
  saveData,
} from "../../reducer/satya/PMLogBookTVMReducer";
import UniversalExportComponent from "../../components/UniversalExportComponent";

const user = JSON.parse(localStorage.getItem("userdata"));

const PMLogBookList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const dispatch = useDispatch();
  const tableRef = useRef(null);
  const pmlogbook = useSelector((state) => state.book);
  const [slug, setSlug] = useState("");
  const itmm = pmlogbook.data.data;

  useEffect(() => {
    dispatch(fetchData());
    setSlug(pmlogbook.slug);
  }, [dispatch]);

  let filteredItems;
  if (itmm) {
    filteredItems = itmm.filter((itm) => {
      return itm.id === id;
    });
  }

  const handleSave = (id) => {
    dispatch(saveData(id));
    navigate(`/list/${slug}`);
  };

  // Prepare export data
  const prepareExportData = () => {
    if (!filteredItems || filteredItems.length === 0) return { data: [], columns: [] };

    const item = filteredItems[0];
    const exportData = [];

    // Process activities
    if (item.activities) {
      item.activities.forEach((activity, index) => {
        exportData.push({
          srNo: index + 1,
          activity: index < 9 ? 'Visual Inspection' : index < 19 ? 'Cleaning' : 'Module Test',
          description: `Activity ${index + 1}`, // This would need to match your actual activity descriptions
          tpnrTvm: activity.TPNR1 || '',
          mwyaRctm: activity.TPNR2 || '',
          tpnrAvm: activity.TPNR3 || '',
          remarks: activity.remark || '',
          actionTaken: activity.action || '',
          deficiency: activity.deficiency || '',
          station: item.station || '',
          date: item.date || '',
          userId: item.user_id || '',
          department: item.department || ''
        });
      });
    }

    const columns = [
      { field: 'srNo', headerName: 'Sr. No.' },
      { field: 'activity', headerName: 'Activity' },
      { field: 'description', headerName: 'Description of Work' },
      { field: 'tpnrTvm', headerName: 'TPNR TVM' },
      { field: 'mwyaRctm', headerName: 'MWYA RCTM' },
      { field: 'tpnrAvm', headerName: 'TPNR AVM' },
      { field: 'remarks', headerName: 'Remarks/Deficiencies' },
      { field: 'actionTaken', headerName: 'Action Taken' },
      { field: 'deficiency', headerName: 'Why Deficiency Could Not Be Rectified' },
      { field: 'station', headerName: 'Station' },
      { field: 'date', headerName: 'Date' },
      { field: 'userId', headerName: 'User ID' },
      { field: 'department', headerName: 'Department' }
    ];

    return { data: exportData, columns };
  };

  const exportMetadata = {
    formName: "PREVENTIVE MAINTENANCE WORKSHEET OF TVM, RCTM & AVM (HALF YEARLY)",
    formId: "PM-TVM-RCTM-AVM-HALF-YEARLY",
    totalRecords: filteredItems?.[0]?.activities?.length || 0,
    additionalInfo: filteredItems?.[0] ? `Station: ${filteredItems[0].station}, Date: ${filteredItems[0].date}` : ''
  };

  return (
    <>
      <div className="container">
        <div role="presentation " className="bredcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit">
              Preventive Maintenance Worksheet
            </Link>
            <Link underline="hover" color="inherit">
              List
            </Link>
          </Breadcrumbs>
        </div>
        <h3>
          PREVENTIVE MAINTENANCE WORKSHEET OF TVM, RCTM & AVM (HALF YEARLY)
        </h3>
        <span className="line-box"></span>

        {/* Universal Export Component */}
        <UniversalExportComponent
          data={prepareExportData().data}
          columns={prepareExportData().columns}
          metadata={exportMetadata}
          filename="pm_tvm_rctm_avm_half_yearly"
        />

        <div ref={tableRef}>
          {filteredItems?.toReversed().map((item, index) => {
            const value = item?.activities;
            return (
              <div key={item.id}>
                <table>
                  <thead>
                    <tr>
                      <th className="text-start" colSpan="2">
                        FREQUENCY: HALF YEARLY
                      </th>
                      <th className="text-start" colSpan="5">
                        Station: {item?.station}
                      </th>
                      <th className="text-start" colSpan="2">
                        Annexure: B
                      </th>
                    </tr>
                    <tr>
                      <th className="text-start" colSpan="2">
                        DATE: {item?.date}
                      </th>
                      <th className="text-start" colSpan={2}>
                        Emp. ID: {item?.user_id}
                      </th>
                      <th className="text-start" colSpan={3}>
                        Department: {item?.department}
                      </th>
                      <th className="text-start" colSpan="2">
                        DOCUMENT: O&M/AFC/OCC/SDC/CH02
                      </th>
                    </tr>
                    <tr>
                      <th rowSpan="2">Sr. No.</th>
                      <th rowSpan="2">Activity</th>
                      <th rowSpan="2">DESCRIPTION OF WORK</th>
                      <th rowSpan="2">TPNR TVM</th>
                      <th rowSpan="2">MWYA RCTM</th>
                      <th rowSpan="2">TPNR AVM</th>
                      <th rowSpan="2">REMARKS/DEFICIENCIES</th>
                      <th rowSpan="2">ACTION TAKEN</th>
                      <th rowSpan="2">WHY DEFICIENCY COULD NOT BE RECTIFIED</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Simplified activity display - would need full implementation */}
                    {value?.slice(0, 5).map((activity, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>Visual Inspection</td>
                        <td className="text-start">Activity {idx + 1}</td>
                        <td>{activity?.TPNR1}</td>
                        <td>{activity?.TPNR2}</td>
                        <td>{activity?.TPNR3}</td>
                        <td>{activity?.remark}</td>
                        <td>{activity?.action}</td>
                        <td>{activity?.deficiency}</td>
                      </tr>
                    ))}
                    <tr>
                      <th rowSpan={4} colSpan={3}>
                        Staff on Duty
                      </th>
                      <th className="text-start" colSpan={3}>
                        Name
                      </th>
                      <th className="text-start" colSpan={2}>
                        Designation
                      </th>
                      <th className="text-start" colSpan={1}>
                        Employee No.
                      </th>
                    </tr>
                    <tr>
                      <td colSpan={3}>{item.staff1_name}</td>
                      <td colSpan={2}>{item.staff1_desg}</td>
                      <td colSpan={1}>{item.staff1_employee}</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>{item.staff2_name}</td>
                      <td colSpan={2}>{item.staff2_desg}</td>
                      <td colSpan={1}>{item.staff2_employee}</td>
                    </tr>
                    <tr>
                      <td colSpan={3}>{item.staff3_name}</td>
                      <td colSpan={2}>{item.staff3_desg}</td>
                      <td colSpan={1}>{item.staff3_employee}</td>
                    </tr>
                  </tbody>
                </table>
                {item.status === "0" && user.role === "Admin" && (
                  <div className="d-flex gap-2 align-items-center mt-2">
                    <Link
                      to={`/edit/pm-logbook-tvm-half-yearly-sdc`}
                      state={{ id: item.id }}
                      className="btn align-content-center"
                      style={{
                        width: "100px",
                        height: "50px",
                        textAlign: "center",
                        backgroundColor: "#FF7900 ",
                        color: "white",
                        fontSize: "20px"
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
                        fontSize: "18px"
                      }}
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

export default PMLogBookList;