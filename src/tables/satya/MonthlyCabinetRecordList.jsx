import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import { fetchData, saveData } from "../../reducer/redux/tableDataSlice";
import UniversalExportComponent from "../../components/UniversalExportComponent";

const user = JSON.parse(localStorage.getItem("userdata"));

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const MonthlyCabinetRecordList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const dispatch = useDispatch();
  const tableRef = useRef(null);
  const cabinetrecord = useSelector((state) => state.data);
  const [slug, setSlug] = useState(getLastParameter().trim());
  const itmm = cabinetrecord.data.data;

  useEffect(() => {
    dispatch(fetchData({ formType: slug }));
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
    const exportData = [
      { activity: 'Visual Inspection', type: 'Maintenance Activity', done: item.done1 || 'No' },
      { activity: 'Dust Cleaning', type: 'Maintenance Activity', done: item.done2 || 'No' },
      { activity: 'Electrical Connection', type: 'Maintenance Activity', done: item.done3 || 'No' },
      { activity: 'Fan', type: 'Maintenance Activity', done: item.done4 || 'No' },
      { activity: 'Earthing Connection', type: 'Maintenance Activity', done: item.done5 || 'No' },
      {
        activity: 'Verify system status from system view',
        type: 'Checks After Maintenance',
        done: item.done6 || 'No'
      },
      {
        activity: 'Check ping status of central router, server, central work stations',
        type: 'Checks After Maintenance',
        done: item.done7 || 'No'
      }
    ];

    // Add metadata to each row
    exportData.forEach(row => {
      row.date = item.date || '';
      row.cabinet = item.cabinet || '';
      row.year = item.year || '';
      row.station = item.station || '';
      row.month = item.month || '';
      row.employeeId = item.employee_id || '';
      row.department = item.department || '';
      row.remarks = item.remarks || '';
    });

    const columns = [
      { field: 'activity', headerName: 'Activity' },
      { field: 'type', headerName: 'Type' },
      { field: 'done', headerName: 'Completed' },
      { field: 'date', headerName: 'Date' },
      { field: 'cabinet', headerName: 'Cabinet' },
      { field: 'year', headerName: 'Year' },
      { field: 'station', headerName: 'Station' },
      { field: 'month', headerName: 'Month' },
      { field: 'employeeId', headerName: 'Employee ID' },
      { field: 'department', headerName: 'Department' },
      { field: 'remarks', headerName: 'Remarks' }
    ];

    return { data: exportData, columns };
  };

  const exportMetadata = {
    formName: "ATS Cabinet Maintenance Records",
    formId: "ATS-CABINET-MONTHLY",
    totalRecords: 7, // Fixed number of activities
    additionalInfo: filteredItems?.[0] ? `Cabinet: ${filteredItems[0].cabinet}, Date: ${filteredItems[0].date}` : ''
  };

  return (
    <>
      <div className="container">
        <div role="presentation " className="bredcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit">
              ATS Cabinet Record
            </Link>
            <Link underline="hover" color="inherit">
              List
            </Link>
          </Breadcrumbs>
        </div>
        <h3>ATS Cabinet Maintenance Records</h3>
        <span className="line-box"></span>

        {/* Universal Export Component */}
        <UniversalExportComponent
          data={prepareExportData().data}
          columns={prepareExportData().columns}
          metadata={exportMetadata}
          filename="ats_cabinet_maintenance_monthly"
        />

        <div ref={tableRef}>
          <table className="table">
            <thead>
              {filteredItems?.map((item, index) => (
                <React.Fragment key={item.id}>
                  <tr>
                    <th className="text-start">Date: {item.date}</th>
                    <th className="text-start">Cabinet: {item.cabinet}</th>
                    <th className="text-start">Year: {item.year}</th>
                    <th className="text-start">Station: {item.station}</th>
                  </tr>
                  <tr>
                    <th className="text-start">Month: {item.month}</th>
                    <th className="text-start">Emp. Id: {item.employee_id}</th>
                    <th className="text-start" colSpan={2}>Department: {item.department}</th>
                  </tr>
                </React.Fragment>
              ))}
              <tr>
                <th rowSpan="2">S.No.</th>
                <th rowSpan="2">Maintenance Activity</th>
                <th colSpan={2}>Done or Not</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item, index) => (
                <React.Fragment key={item.id}>
                  <tr><td>1</td><td className="text-start">Visual Inspection</td><td colSpan={2}>{item.done1}</td></tr>
                  <tr><td>2</td><td className="text-start">Dust Cleaning</td><td colSpan={2}>{item.done2}</td></tr>
                  <tr><td>3</td><td className="text-start">Electrical Connection</td><td colSpan={2}>{item.done3}</td></tr>
                  <tr><td>4</td><td className="text-start">Fan</td><td colSpan={2}>{item.done4}</td></tr>
                  <tr><td>5</td><td className="text-start">Earthing Connection</td><td colSpan={2}>{item.done5}</td></tr>
                </React.Fragment>
              ))}
            </tbody>
            <thead>
              <tr>
                <th rowSpan="2">S.No.</th>
                <th rowSpan="2">Checks After Maintenance</th>
                <th colSpan={2}>Done or Not</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item, index) => (
                <React.Fragment key={item.id}>
                  <tr>
                    <td>1</td>
                    <td className="text-start">Verify system status from system view</td>
                    <td colSpan={2}>{item.done6}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td className="text-start">Check ping status of central router, server, central work stations</td>
                    <td colSpan={2}>{item.done7}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
            <thead>
              <tr><th colSpan={4}>Remarks</th></tr>
            </thead>
            <tbody>
              {filteredItems?.map((item, index) => (
                <tr key={item.id}>
                  <td colSpan={4}>{item.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredItems?.map((item) => (
            <div key={item.id}>
              {item.status === "0" && user.role !== "Admin" && (
                <div className="d-flex gap-2 align-items-center mt-2">
                  <Link
                    to={`/edit/ats-cabinet-maintenance-monthly`}
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
                    onClick={() => handleSave(item.id)}
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
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MonthlyCabinetRecordList;