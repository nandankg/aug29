import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducer/satya/SwUpdateRegisterReducer";
import dayjs from "dayjs";
import ReusableFilterBar from "../../component/ReusableFilterBar";
import TableStructure from "../../component/TableStructure";
import Pagination from "../../component/Pagination";
import { filterTableData } from "../../utils/tableUtils";
import { swupdateregister } from "../../data/tableColumns";
import UniversalExportComponent from "../../components/UniversalExportComponent";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

function removehyphan(slug) {
  return slug.replace("-", "");
}

const SwUpdateRegisterList = () => {
  const dispatch = useDispatch();
  const [slug, setSlug] = useState(getLastParameter().trim());
  const swupdate = useSelector((state) => state.swregister);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [fromDate, setFromDate] = useState(dayjs().startOf("day"));
  const [toDate, setToDate] = useState(dayjs().endOf("day"));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch data when the component mounts
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
    if (swupdate.data?.data) {
      setItems(swupdate.data.data);
      setFilteredItems(swupdate.data.data);
    }
  }, [swupdate]);

  // Filter data based on search and date filters
  useEffect(() => {
    const newData = filterTableData(
      items,
      searchValue,
      fromDate,
      toDate,
      swupdateregister
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
      deviceName: item.device_name || '',
      deviceId: item.device_id || '',
      currentVersion: item.current_version || '',
      updateVersion: item.update_version || '',
      updateType: item.update_type || '',
      updateReason: item.update_reason || '',
      updatedBy: item.updated_by || '',
      updateTime: item.update_time || '',
      testResults: item.test_results || '',
      remarks: item.remarks || '',
      status: item.status || ''
    }));
  }, [filteredItems]);

  // Define export columns
  const exportColumns = useMemo(() => [
    { field: 'serialNumber', headerName: 'S.No.' },
    { field: 'date', headerName: 'Date' },
    { field: 'deviceName', headerName: 'Device Name' },
    { field: 'deviceId', headerName: 'Device ID' },
    { field: 'currentVersion', headerName: 'Current Version' },
    { field: 'updateVersion', headerName: 'Update Version' },
    { field: 'updateType', headerName: 'Update Type' },
    { field: 'updateReason', headerName: 'Update Reason' },
    { field: 'updatedBy', headerName: 'Updated By' },
    { field: 'updateTime', headerName: 'Update Time' },
    { field: 'testResults', headerName: 'Test Results' },
    { field: 'remarks', headerName: 'Remarks' },
    { field: 'status', headerName: 'Status' }
  ], []);

  return (
    <div className="container mt-5">
      <h1>DEVICE APPLICATION SOFTWARE</h1>

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
          formName="Software Update Register"
          formId="software-update-register"
          template="maintenance"
          size="medium"
          showLabel={false}
        />
      </div>

      {/* Table Structure */}
      <TableStructure
        columns={swupdateregister}
        currentItems={currentItems}
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

export default SwUpdateRegisterList;