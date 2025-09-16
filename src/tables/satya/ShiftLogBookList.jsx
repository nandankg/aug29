import { FaFilter } from "react-icons/fa";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  addShiftlog,
  fetchData,
  saveData,
} from "../../reducer/satya/ShiftLogBookReducer";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import UniversalExportComponent from "../../components/UniversalExportComponent";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const ShiftLogBookList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const dispatch = useDispatch();
  const tableRef = useRef(null);
  const user = JSON.parse(localStorage.getItem("userdata"));
  const shiftlog = useSelector((state) => state.shiftbook);
  const [slug, setSlug] = useState(getLastParameter().trim());
  const [fshift, setFshift] = useState([]);
  const [failures, setFailures] = useState([]);

  const itmm = shiftlog.data.data;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  let filteredItems;
  if (itmm) {
    filteredItems = itmm.filter((itm) => {
      return itm.id === id;
    });
  }

  useEffect(() => {
    // Filter out rows where all fields are null
    if (filteredItems) {
      const filtItem = filteredItems[0].staff.filter(
        (item) => Object.values(item).some((value) => value !== null)
      );
      setFshift(filtItem);
    }
  }, [filteredItems]);

  useEffect(() => {
    if (filteredItems) {
      const filtItem = filteredItems[0]?.failures.filter((item) =>
        Object.values(item).some((value) => value !== null)
      );
      setFailures(filtItem);
    }
  }, [filteredItems]);

  const handleSave = (id) => {
    dispatch(saveData(id));
    const timeout = setTimeout(() => {
      window.location.reload(); // Refresh the page
    }, 1000);
  };

  // Prepare export data
  const prepareExportData = () => {
    if (!filteredItems || filteredItems.length === 0) return { data: [], columns: [] };

    const item = filteredItems[0];
    const exportData = [];

    // Add staff data
    fshift.forEach((staff, index) => {
      exportData.push({
        type: 'Staff',
        srNo: index + 1,
        staffOnDuty: staff.cssstaffonduty || '',
        designation: staff.designation1 || '',
        failureDetails: '',
        failureTime: '',
        remarks: '',
        rectificationTime: '',
        attendedBy: ''
      });
    });

    // Add failure data
    failures.forEach((failure, index) => {
      exportData.push({
        type: 'Failure',
        srNo: index + 1,
        staffOnDuty: '',
        designation: '',
        failureDetails: failure.failuredetails || '',
        failureTime: failure.time1 || '',
        remarks: failure.remarks || '',
        rectificationTime: failure.time2 || '',
        attendedBy: failure.attendedby || ''
      });
    });

    const columns = [
      { field: 'type', headerName: 'Type' },
      { field: 'srNo', headerName: 'Sr. No.' },
      { field: 'staffOnDuty', headerName: 'Staff On Duty' },
      { field: 'designation', headerName: 'Designation' },
      { field: 'failureDetails', headerName: 'Failure Details' },
      { field: 'failureTime', headerName: 'Failure Time' },
      { field: 'remarks', headerName: 'Remarks' },
      { field: 'rectificationTime', headerName: 'Rectification Time' },
      { field: 'attendedBy', headerName: 'Attended By' }
    ];

    return { data: exportData, columns };
  };

  const exportMetadata = {
    formName: "SHIFT LOG BOOK",
    formId: "SHIFT-LOG-BOOK",
    totalRecords: (fshift.length + failures.length),
    additionalInfo: filteredItems?.[0] ? `Date: ${filteredItems[0].date}, Shift: ${filteredItems[0].shift}, Section: ${filteredItems[0].section}` : ''
  };

  return (
    <>
      <div className="container">
        <div role="presentation " className="bredcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to={`/form/${slug}`}>
              Shift Log Book
            </Link>
            <Link underline="hover" color="inherit">
              List
            </Link>
          </Breadcrumbs>
        </div>
        <h3>SHIFT LOG BOOK</h3>
        <span className="line-box"></span>

        {/* Universal Export Component */}
        <UniversalExportComponent
          data={prepareExportData().data}
          columns={prepareExportData().columns}
          metadata={exportMetadata}
          filename="shift_logbook"
        />

        <div ref={tableRef}>
          <h4>Shift Log Book</h4>
          {filteredItems?.map((item, index) => {
            const value = item?.staff;
            const values = item?.failures;
            return (
              <div key={item.id}>
                <table
                  className="table"
                  style={{ width: "100%" }}
                >
                  <thead>
                    <tr>
                      <th colSpan={2}>Date: {item?.date}</th>
                      <th colSpan={1}>Shift: {item?.shift}</th>
                      <th colSpan={5}>Section: {item?.section}</th>
                    </tr>
                    <tr>
                      <th>Sr. No.</th>
                      <th> Staff On Duty</th>
                      <th>Designation</th>
                    </tr>
                    {fshift.map((stf, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{stf.cssstaffonduty}</td>
                        <td>{stf.designation1}</td>
                      </tr>
                    ))}
                    <tr>
                      <th>Sr. No.</th>
                      <th colSpan={2}>Failure Details</th>
                      <th>Failure Time</th>
                      <th colSpan={2}>Remarks</th>
                      <th>Rectification Time</th>
                      <th>Attended By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {failures.map((vl, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td colSpan={2}>{vl?.failuredetails}</td>
                        <td>{vl?.time1}</td>
                        <td colSpan={2}>{vl?.remarks}</td>
                        <td>{vl?.time2}</td>
                        <td>{vl?.attendedby}</td>
                      </tr>
                    ))}
                  </tbody>
                  <thead>
                    <tr>
                      <th colSpan={2}>Any Specific Instruction/PTW Remarks</th>
                      <th colSpan={2}>Any Extra Detail/Remarks</th>
                      <th>Charge Handed Over By</th>
                      <th>Employee Id</th>
                      <th>Charge Taken Over By</th>
                      <th>Employee Id</th>
                      <th>Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2}>{item.instruction_remarks}</td>
                      <td colSpan={2}>{item.extra_remarks}</td>
                      <td>{item.chargehandedoverby}</td>
                      <td>{item.sign1}</td>
                      <td>{item.chargetakenoverby}</td>
                      <td>{item.sign2}</td>
                      <td>{item.department}</td>
                    </tr>
                  </tbody>
                </table>
                <td className=" ">
                  {item.status === "0" && user.role == "Admin" ? (
                    <div className="d-flex gap-2 align-items-center">
                      <Link
                        to={`/edit/shift-log-book-sdc`}
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
                  ) : (
                    ""
                  )}
                </td>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShiftLogBookList;