import React, { useEffect, useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  addCssshift,
  fetchData,
  saveData,
} from "../../reducer/satya/CSSShiftLogReducer";
import UniversalExportComponent from "../../components/UniversalExportComponent";

const user = JSON.parse(localStorage.getItem("userdata"));

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const CSSShiftLogList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const tableRef = useRef(null);
  const dispatch = useDispatch();
  const cssshift = useSelector((state) => state.csslog);
  const itmm = cssshift.data.data;
  const [slug, setSlug] = useState(getLastParameter().trim());

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
      // CSS Staff data
      const cssStaff = item?.css_staff || [];
      cssStaff.forEach((staff, index) => {
        if (staff?.cssstaffonduty || staff?.designation1) {
          data.push({
            type: 'CSS Staff',
            date: item?.date,
            shift: item?.shift,
            section: item?.section,
            serial: index + 1,
            staffOnDuty: staff?.cssstaffonduty || '',
            designation: staff?.designation1 || '',
            sectionName: '',
            failureDetails: '',
            time1: '',
            remarks: '',
            time2: '',
            attendedBy: '',
            instructionRemarks: '',
            shiftActivities: '',
            chargeHandedOverBy: '',
            chargeTakenOverBy: ''
          });
        }
      });

      // Section Staff data
      const sectionStaff = item?.section_staff || [];
      sectionStaff.forEach((staff, index) => {
        if (staff?.sstaffonduty || staff?.designation2) {
          data.push({
            type: 'Section Staff',
            date: item?.date,
            shift: item?.shift,
            section: item?.section,
            serial: index + 1,
            staffOnDuty: staff?.sstaffonduty || '',
            designation: staff?.designation2 || '',
            sectionName: staff?.section1 || '',
            failureDetails: '',
            time1: '',
            remarks: '',
            time2: '',
            attendedBy: '',
            instructionRemarks: '',
            shiftActivities: '',
            chargeHandedOverBy: '',
            chargeTakenOverBy: ''
          });
        }
      });

      // Failure data
      const failures = item?.failures || [];
      failures.forEach((failure, index) => {
        if (failure?.failuredetails || failure?.remarks) {
          data.push({
            type: 'Failure',
            date: item?.date,
            shift: item?.shift,
            section: item?.section,
            serial: index + 1,
            staffOnDuty: '',
            designation: '',
            sectionName: '',
            failureDetails: failure?.failuredetails || '',
            time1: failure?.time1 || '',
            remarks: failure?.remarks || '',
            time2: failure?.time2 || '',
            attendedBy: failure?.attendedby || '',
            instructionRemarks: '',
            shiftActivities: '',
            chargeHandedOverBy: '',
            chargeTakenOverBy: ''
          });
        }
      });

      // Summary data
      data.push({
        type: 'Summary',
        date: item?.date,
        shift: item?.shift,
        section: item?.section,
        serial: '',
        staffOnDuty: '',
        designation: '',
        sectionName: '',
        failureDetails: '',
        time1: '',
        remarks: '',
        time2: '',
        attendedBy: '',
        instructionRemarks: item?.instruction_remarks || '',
        shiftActivities: item?.shiftactivities || '',
        chargeHandedOverBy: item?.chargehandedoverby || '',
        chargeTakenOverBy: item?.chargetakenoverby || ''
      });
    });

    return data;
  }, [filteredItems]);

  // Define export columns
  const exportColumns = useMemo(() => [
    { field: 'type', headerName: 'Type' },
    { field: 'date', headerName: 'Date' },
    { field: 'shift', headerName: 'Shift' },
    { field: 'section', headerName: 'Section' },
    { field: 'serial', headerName: 'Serial' },
    { field: 'staffOnDuty', headerName: 'Staff On Duty' },
    { field: 'designation', headerName: 'Designation' },
    { field: 'sectionName', headerName: 'Section Name' },
    { field: 'failureDetails', headerName: 'Failure Details' },
    { field: 'time1', headerName: 'Time (Start)' },
    { field: 'remarks', headerName: 'Rectification/Remarks' },
    { field: 'time2', headerName: 'Time (End)' },
    { field: 'attendedBy', headerName: 'Attended By' },
    { field: 'instructionRemarks', headerName: 'Instruction Remarks' },
    { field: 'shiftActivities', headerName: 'Shift Activities' },
    { field: 'chargeHandedOverBy', headerName: 'Charge Handed Over By' },
    { field: 'chargeTakenOverBy', headerName: 'Charge Taken Over By' }
  ], []);

  const handleSave = (id) => {
    dispatch(saveData(id));
    navigate(`list/${slug}`);
  };

  return (
    <>
      <div className="container">
        <div role="presentation" className="bredcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/cssshift">
              CSS Shift Logbook
            </Link>
            <Link underline="hover" color="inherit">
              List
            </Link>
          </Breadcrumbs>
        </div>
        <h3>CSS Shift Logbook</h3>
        <span className="line-box"></span>
        <div className="d-flex gap-3">
          <UniversalExportComponent
            data={exportData}
            columns={exportColumns}
            exportType="both"
            formName="CSS Shift Logbook"
            formId="css-shift-logbook"
            template="standard"
            size="medium"
            showLabel={false}
          />
        </div>
        <div>
          <table ref={tableRef}>
            {filteredItems?.map((item, index) => {
              const value = item?.css_staff;
              const values = item?.section_staff;
              return (
                <div key={item.id}>
                  <thead>
                    <tr>
                      <th colSpan={1}>Date : {item?.date}</th>
                      <th colSpan={2}></th>
                    </tr>
                    <tr>
                      <th colSpan={1}>Shift: {item?.shift}</th>
                      <th colSpan={2}>Section: {item?.section}</th>
                    </tr>
                    <tr>
                      <th colSpan="3">CSS Staff</th>
                    </tr>
                    <tr>
                      <th style={{ width: "150px" }}>Serial</th>
                      <th style={{ width: "204px" }}>Staff On Duty</th>
                      <th style={{ width: "150px" }}>Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>{value?.[0]?.cssstaffonduty}</td>
                      <td>{value?.[0]?.designation1}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>{value?.[1]?.cssstaffonduty}</td>
                      <td>{value?.[1]?.designation1}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>{value?.[2]?.cssstaffonduty}</td>
                      <td>{value?.[2]?.designation1}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th colSpan="3"> Section Staff</th>
                    </tr>
                    <tr>
                      <th style={{ width: "150px" }}>Serial</th>
                      <th style={{ width: "204px" }}>Staff On Duty</th>
                      <th style={{ width: "150px" }}>Designation</th>
                      <th style={{ width: "150px" }}>Section</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>{values?.[0]?.sstaffonduty}</td>
                      <td>{values?.[0]?.designation2}</td>
                      <td colSpan={2}>{values?.[0]?.section1}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>{values?.[1]?.sstaffonduty}</td>
                      <td>{values?.[1]?.designation2}</td>
                      <td colSpan={2}>{values?.[1]?.section1}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>{values?.[2]?.sstaffonduty}</td>
                      <td>{values?.[2]?.designation2}</td>
                      <td colSpan={2}>{values?.[2]?.section1}</td>
                    </tr>
                  </thead>
                </div>
              );
            })}
            {filteredItems?.map((item, indexss) => {
              const value = item?.failures;
              return (
                <div key={item.id}>
                  <thead>
                    <tr>
                      <th>S. No.</th>
                      <th>Failure Details</th>
                      <th style={{ width: "100px" }}>Time</th>
                      <th style={{ width: "246px" }}>Rectification/Remarks</th>
                      <th style={{ width: "100px" }}>Time</th>
                      <th style={{ width: "186px" }}>Attended By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>{value?.[0]?.failuredetails}</td>
                      <td>{value?.[0]?.time1}</td>
                      <td>{value?.[0]?.remarks}</td>
                      <td>{value?.[0]?.time2}</td>
                      <td>{value?.[0]?.attendedby}</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>{value?.[1]?.failuredetails}</td>
                      <td>{value?.[1]?.time1}</td>
                      <td>{value?.[1]?.remarks}</td>
                      <td>{value?.[1]?.time2}</td>
                      <td>{value?.[1]?.attendedby}</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>{value?.[2]?.failuredetails}</td>
                      <td>{value?.[2]?.time1}</td>
                      <td>{value?.[2]?.remarks}</td>
                      <td>{value?.[2]?.time2}</td>
                      <td>{value?.[2]?.attendedby}</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th>Instruction Remarks</th>
                      <th colSpan={2}>Shift Activities</th>
                      <th>Charge Handed Over By</th>
                      <th colSpan={2}>Charge Taken Over By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.instruction_remarks}</td>
                      <td colSpan={2}>{item.shiftactivities}</td>
                      <td>{item.chargehandedoverby}</td>
                      <td colSpan={2}>{item.chargetakenoverby}</td>
                    </tr>
                  </tbody>
                  <td className="">
                    {item.status === "0" || user.role === "Admin" ? (
                      <div className="d-flex gap-2 align-items-center">
                        <Link
                          to={`/edit/css-shift-logbook`}
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
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default CSSShiftLogList;