import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import {
  addIncidentregister,
  fetchData,
  saveData,
} from "../../reducer/satya/IncidentRegisterSignalsReducer";
import UniversalExportComponent from "../../components/UniversalExportComponent";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const IncidentRegisterSignalsList = () => {
  const navigate = useNavigate();
  const tableRef = useRef(null);
  const [fromDate, setFromDate] = useState(dayjs().startOf("day"));
  const [toDate, setToDate] = useState(dayjs().endOf("day"));
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const incidentregister = useSelector((state) => state.incidentsignals);
  const [slug, setSlug] = useState(getLastParameter().trim());
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (incidentregister.data && incidentregister.data.data) {
      setItems(incidentregister.data.data);
      setFilteredItems(incidentregister.data.data);
    }
  }, [incidentregister]);

  useEffect(() => {
    handleFilter();
  }, [searchValue, fromDate, toDate]);

  const handleFilter = () => {
    const newData = items.filter((row) => {
      const employee_id = row.employee_id ? row.employee_id.toLowerCase() : "";
      const details = row.details ? row.details.toLowerCase() : "";
      const reportedto = row.reportedto ? row.reportedto.toLowerCase() : "";
      const date = dayjs(row.date);
      const isInDateRange =
        fromDate && toDate
          ? (date.isAfter(fromDate, "day") || date.isSame(fromDate, "day")) &&
            (date.isBefore(toDate, "day") || date.isSame(toDate, "day"))
          : true;
      return (
        (employee_id.includes(searchValue.toLowerCase()) ||
          details.includes(searchValue.toLowerCase()) ||
          reportedto.includes(searchValue.toLowerCase())) &&
        isInDateRange
      );
    });
    setFilteredItems(newData);
  };

  const handleSave = (id) => {
    dispatch(saveData(id));
    navigate(`list/${slug}`);
  };

  // Prepare export data
  const prepareExportData = () => {
    const exportData = filteredItems.map((item, index) => ({
      sNo: index + 1,
      date: item.date || '',
      time: item.time || '',
      detailsOfIncident: item.details || '',
      reportedTo: item.reportedto || '',
      signature: item.sign || '',
      employeeId: item.employee_id || '',
      department: item.department || '',
      remarks: item.remarks || ''
    }));

    const columns = [
      { field: 'sNo', headerName: 'S.No' },
      { field: 'date', headerName: 'Date' },
      { field: 'time', headerName: 'Time' },
      { field: 'detailsOfIncident', headerName: 'Details Of Incident' },
      { field: 'reportedTo', headerName: 'Reported To' },
      { field: 'signature', headerName: 'Signature' },
      { field: 'employeeId', headerName: 'Employee Id' },
      { field: 'department', headerName: 'Department' },
      { field: 'remarks', headerName: 'Remarks' }
    ];

    return { data: exportData, columns };
  };

  const exportMetadata = {
    formName: "Incident Register Signals",
    formId: "INCIDENT-REGISTER-SIGNALS",
    totalRecords: filteredItems.length,
    additionalInfo: `Date Range: ${fromDate?.format('DD-MM-YYYY')} to ${toDate?.format('DD-MM-YYYY')}`
  };

  return (
    <>
      <div className="container">
        <div role="presentation " className="bredcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/equipment">
              Incident Signals
            </Link>
            <Link underline="hover" color="inherit">
              List
            </Link>
          </Breadcrumbs>
        </div>
        <h3>Incident Register Signals</h3>
        <span className="line-box"></span>
        <div className="d-flex justify-content-between">
          <input
            type="search"
            name="search"
            placeholder="Search Here."
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="d-flex align-items-center gap-3">
            <div className="date-box">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label=" From Date"
                  value={fromDate}
                  onChange={(newValue) =>
                    setFromDate(newValue ? newValue.startOf("day") : null)
                  }
                  sx={{
                    ".MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#00b3a1",
                      },
                      "&:hover fieldset": {
                        borderColor: "#00b3a1",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#00b3a1",
                      },
                    },
                  }}
                />
                <DatePicker
                  label="To Date"
                  value={toDate}
                  onChange={(newValue) =>
                    setToDate(newValue ? newValue.endOf("day") : null)
                  }
                  sx={{
                    ".MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#00b3a1",
                      },
                      "&:hover fieldset": {
                        borderColor: "#00b3a1",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#00b3a1",
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            {/* Universal Export Component */}
            <UniversalExportComponent
              data={prepareExportData().data}
              columns={prepareExportData().columns}
              metadata={exportMetadata}
              filename="incident_register_signals"
            />
          </div>
        </div>

        <div ref={tableRef}>
          <table
            className="table"
            style={{ width: "100%", overflowX: "scroll" }}
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>Date</th>
                <th>Time</th>
                <th>Details Of Incident</th>
                <th>Reported To</th>
                <th>Signature</th>
                <th>Employee Id</th>
                <th>Department</th>
                <th>Remarks</th>
                <th style={{ width: "150px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>{item.details}</td>
                  <td>{item.reportedto}</td>
                  <td>{item.sign}</td>
                  <td>{item.employee_id}</td>
                  <td>{item.department}</td>
                  <td>{item.remarks}</td>
                  <td className=" ">
                    {item.status === "0" ? (
                      <div className="d-flex">
                        <Link
                          to={`/edit/${slug}`}
                          state={{ id: item.id }}
                          className="btn btn-primary align-content-center"
                        >
                          Edit
                        </Link>
                        <button
                          type="submit"
                          onClick={() => {
                            handleSave(item.id);
                          }}
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default IncidentRegisterSignalsList;