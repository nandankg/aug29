import React, { useEffect, useState, useRef, useMemo } from "react";
import { FaFilter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  fetchData,
  saveData,
} from "../../reducer/satya/BoxCleaningRecordReducer";
import UniversalExportComponent from "../../components/UniversalExportComponent";

const user = JSON.parse(localStorage.getItem("userdata"));

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const BoxCleaningRecordList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const dispatch = useDispatch();
  const tableRef = useRef(null);
  const boxcleaning = useSelector((state) => state.boxindoor);
  const [slug, setSlug] = useState(getLastParameter().trim());
  const itmm = boxcleaning.data.data;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  let filteredItems;
  if (itmm) {
    filteredItems = itmm.filter((itm) => {
      return itm.id === id;
    });
  }

  // Prepare export data using useMemo
  const exportData = useMemo(() => {
    if (!filteredItems || filteredItems.length === 0) return [];

    const data = [];

    filteredItems.forEach((item) => {
      // Basic information
      data.push({
        type: 'Header',
        schedule: item.maintenanceschedule || '',
        station: item.station || '',
        dateOfMaintenance: item.dateofmaintenance || '',
        cabinet: item.cabinet || '',
        serialNumber: '',
        activityDescription: '',
        doneOrNot: '',
        activityRemark: '',
        remarks: '',
        name: '',
        designation: '',
        empId: ''
      });

      // Cleaning activities
      const activities = [
        {
          serial: 1,
          description: 'Cleaning of Boxes/Cubical',
          status: item.checklist1 || '',
          remark: item.blank1 || ''
        },
        {
          serial: 2,
          description: 'Checking of proper dressing of cubical',
          status: item.checklist2 || '',
          remark: item.blank2 || ''
        },
        {
          serial: 3,
          description: 'Verification of terminal condition',
          status: item.checklist3 || '',
          remark: item.blank3 || ''
        }
      ];

      activities.forEach((activity) => {
        data.push({
          type: 'Activity',
          schedule: item.maintenanceschedule || '',
          station: item.station || '',
          dateOfMaintenance: item.dateofmaintenance || '',
          cabinet: item.cabinet || '',
          serialNumber: activity.serial,
          activityDescription: activity.description,
          doneOrNot: activity.status,
          activityRemark: activity.remark,
          remarks: '',
          name: '',
          designation: '',
          empId: ''
        });
      });

      // General remarks
      data.push({
        type: 'General Remarks',
        schedule: item.maintenanceschedule || '',
        station: item.station || '',
        dateOfMaintenance: item.dateofmaintenance || '',
        cabinet: item.cabinet || '',
        serialNumber: '',
        activityDescription: '',
        doneOrNot: '',
        activityRemark: '',
        remarks: item.remarks || '',
        name: '',
        designation: '',
        empId: ''
      });

      // Personnel information
      data.push({
        type: 'Personnel',
        schedule: item.maintenanceschedule || '',
        station: item.station || '',
        dateOfMaintenance: item.dateofmaintenance || '',
        cabinet: item.cabinet || '',
        serialNumber: '',
        activityDescription: '',
        doneOrNot: '',
        activityRemark: '',
        remarks: '',
        name: item.name || '',
        designation: item.designation || '',
        empId: item.countersign || ''
      });
    });

    return data;
  }, [filteredItems]);

  // Define export columns
  const exportColumns = useMemo(() => [
    { field: 'type', headerName: 'Type' },
    { field: 'schedule', headerName: 'Schedule' },
    { field: 'station', headerName: 'Station' },
    { field: 'dateOfMaintenance', headerName: 'Date of Maintenance' },
    { field: 'cabinet', headerName: 'Cabinet' },
    { field: 'serialNumber', headerName: 'S.No.' },
    { field: 'activityDescription', headerName: 'Cleaning Activity-Indoor' },
    { field: 'doneOrNot', headerName: 'Done or Not' },
    { field: 'activityRemark', headerName: 'Activity Remark' },
    { field: 'remarks', headerName: 'General Remarks' },
    { field: 'name', headerName: 'Name' },
    { field: 'designation', headerName: 'Designation' },
    { field: 'empId', headerName: 'Emp ID' }
  ], []);

  const handleSave = (id) => {
    dispatch(saveData(id));
    const timeout = setTimeout(() => {
      window.location.reload(); // Refresh the page
    }, 500);
  };

  return (
    <>
      <div className="container">
        <div role="presentation" className="bredcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit">
              Cleaning Activity-Indoor
            </Link>
            <Link underline="hover" color="inherit">
              View
            </Link>
          </Breadcrumbs>
        </div>
        <h3>BOX CLEANING QUATERLY MAINTENANCE RECORD</h3>
        <span className="line-box"></span>
        <div className="d-flex gap-3">
          <UniversalExportComponent
            data={exportData}
            columns={exportColumns}
            exportType="both"
            formName="Box Cleaning Quarterly Maintenance Record"
            formId="box-cleaning-record"
            template="maintenance"
            size="medium"
            showLabel={false}
          />
        </div>
        <div>
          <table className="table" ref={tableRef}>
            {filteredItems?.map((item, index) => (
              <div key={item.id}>
                <thead>
                  {filteredItems.map((item, index) => (
                    <tr key={item.id}>
                      <th colSpan={1} style={{ textAlign: "left" }}>
                        Schedule: {item.maintenanceschedule}
                      </th>
                      <th colSpan={1} style={{ textAlign: "left" }}>
                        Station: {item.station}
                      </th>
                      <th colSpan={1} style={{ textAlign: "left" }}>
                        Date of Maintenance: {item.dateofmaintenance}
                      </th>
                      <th colSpan={1} style={{ textAlign: "left" }}>
                        Cabinet: {item.cabinet}
                      </th>
                    </tr>
                  ))}
                  <tr>
                    <th rowSpan="2">S.No.</th>
                    <th rowSpan="2">Cleaning Activity-Indoor</th>
                    <th rowSpan="2">Done or Not</th>
                    <th rowSpan="2">Activity Remark</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>1</td>
                      <td className="text-start">Cleaning of Boxes/Cubical</td>
                      <td>{item.checklist1}</td>
                      <td>{item.blank1}</td>
                    </tr>
                  ))}
                  {filteredItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>2</td>
                      <td className="text-start">
                        Checking of proper dressing of cubical
                      </td>
                      <td>{item.checklist2}</td>
                      <td>{item.blank2}</td>
                    </tr>
                  ))}
                  {filteredItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>3</td>
                      <td className="text-start">
                        Verification of terminal condition
                      </td>
                      <td>{item.checklist3}</td>
                      <td>{item.blank3}</td>
                    </tr>
                  ))}
                </tbody>
                <thead>
                  <tr>
                    <th colSpan={4}>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr key={item.id}>
                      <td colSpan={4}>{item.remarks}</td>
                    </tr>
                  ))}
                </tbody>
                <thead>
                  <tr>
                    <th colSpan={2}>Name</th>
                    <th>Designation</th>
                    <th>Emp ID</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item, index) => (
                    <tr key={item.id}>
                      <td colSpan={2}>{item.name}</td>
                      <td>{item.designation}</td>
                      <td>{item.countersign}</td>
                    </tr>
                  ))}
                </tbody>
                <td className="">
                  {item.status === "0" && user.role !== "Admin" ? (
                    <div className="d-flex gap-2 align-items-center">
                      <Link
                        to={`/edit/indoor-box-cleaning`}
                        state={{ id: item.id }}
                        className="btn align-content-center"
                        style={{
                          width: "100px",
                          height: "50px",
                          textAlign: "center",
                          backgroundColor: "#FF7900",
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
                  ) : (
                    ""
                  )}
                </td>
              </div>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default BoxCleaningRecordList;