import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducer/redux/tableDataSlice";
import dayjs from "dayjs";
import ReusableFilterBar from "../../component/ReusableFilterBar";
import ReusableTableMC from "../../component/ReusableTableMC";
import Pagination from "../../component/Pagination";
import { filterTableData } from "../../utils/tableUtilsMC";
import { equipmentfailureregister } from "../../data/tableColumns";
import UniversalExportComponent from "../../components/UniversalExportComponent";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

function removehyphan(slug) {
  return slug.replace("-", "");
}

const EquipmentFailureRegisterList = () => {
  const dispatch = useDispatch();
  const [slug, setSlug] = useState(getLastParameter().trim());
  const attendance = useSelector((state) => state.data);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const delayedFunction = () => {
      dispatch(fetchData({ formType: slug }));
    };
    // Set a timeout to call the function after 2 seconds
    const timeout = setTimeout(delayedFunction, 2000);
    // Clean up the timeout if the component unmounts before the delay
    return () => clearTimeout(timeout);
  }, [dispatch]);

  // Update items and filteredItems when data changes
  useEffect(() => {
    if (attendance.data?.data) {
      setItems(attendance.data.data);
      setFilteredItems(attendance.data.data);
    }
  }, [attendance]);

  // Filter data based on search and date filters
  useEffect(() => {
    const newData = filterTableData(
      items,
      searchValue,
      fromDate,
      toDate,
      equipmentfailureregister
    );
    setFilteredItems(newData);
  }, [items, searchValue, fromDate, toDate]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Pagination change handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Prepare export data using useMemo
  const exportData = useMemo(() => {
    return filteredItems.map((item, index) => ({
      serialNumber: index + 1,
      date: item.date || '',
      time: item.time || '',
      equipmentType: item.equipment_type || '',
      equipmentId: item.equipment_id || '',
      location: item.location || '',
      failureDescription: item.failure_description || '',
      reportedBy: item.reported_by || '',
      actionTaken: item.action_taken || '',
      repairTime: item.repair_time || '',
      repairedBy: item.repaired_by || '',
      testResults: item.test_results || '',
      remarks: item.remarks || '',
      status: item.status || ''
    }));
  }, [filteredItems]);

  // Define export columns
  const exportColumns = useMemo(() => [
    { field: 'serialNumber', headerName: 'S.No.' },
    { field: 'date', headerName: 'Date' },
    { field: 'time', headerName: 'Time' },
    { field: 'equipmentType', headerName: 'Equipment Type' },
    { field: 'equipmentId', headerName: 'Equipment ID' },
    { field: 'location', headerName: 'Location' },
    { field: 'failureDescription', headerName: 'Failure Description' },
    { field: 'reportedBy', headerName: 'Reported By' },
    { field: 'actionTaken', headerName: 'Action Taken' },
    { field: 'repairTime', headerName: 'Repair Time' },
    { field: 'repairedBy', headerName: 'Repaired By' },
    { field: 'testResults', headerName: 'Test Results' },
    { field: 'remarks', headerName: 'Remarks' },
    { field: 'status', headerName: 'Status' }
  ], []);

  return (
    <div className="container mt-5">
      <h1>Equipment Failure Register List</h1>

      {/* Filter Bar */}
      <ReusableFilterBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
      />

      {/* Export Component */}
      <div className="d-flex gap-3 mb-3">
        <UniversalExportComponent
          data={exportData}
          columns={exportColumns}
          exportType="both"
          formName="Equipment Failure Register"
          formId="equipment-failure-register"
          template="incident"
          size="medium"
          showLabel={false}
        />
      </div>

      {/* Table Structure */}
      <ReusableTableMC
        headers={equipmentfailureregister}
        data={currentItems}
        slug={slug}
      />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default EquipmentFailureRegisterList;