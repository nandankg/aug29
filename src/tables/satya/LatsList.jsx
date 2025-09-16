import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducer/redux/tableDataSlice";
import dayjs from "dayjs";
import ReusableFilterBar from "../../component/ReusableFilterBar";
import TableStructure from "../../component/TableStructure";
import Pagination from "../../component/Pagination";
import { filterTableData } from "../../utils/tableUtils";
import { latsvdu } from "../../data/tableColumns";
import UniversalExportComponent from "../../components/UniversalExportComponent";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

function removehyphan(slug) {
  return slug.replace("-", "");
}

const LatsList = () => {
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
      latsvdu
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
      deviceType: item.device_type || '',
      deviceId: item.device_id || '',
      testType: item.test_type || '',
      testParameters: item.test_parameters || '',
      expectedResult: item.expected_result || '',
      actualResult: item.actual_result || '',
      status: item.status || '',
      testedBy: item.tested_by || '',
      verifiedBy: item.verified_by || '',
      remarks: item.remarks || ''
    }));
  }, [filteredItems]);

  // Define export columns
  const exportColumns = useMemo(() => [
    { field: 'serialNumber', headerName: 'S.No.' },
    { field: 'date', headerName: 'Date' },
    { field: 'time', headerName: 'Time' },
    { field: 'deviceType', headerName: 'Device Type' },
    { field: 'deviceId', headerName: 'Device ID' },
    { field: 'testType', headerName: 'Test Type' },
    { field: 'testParameters', headerName: 'Test Parameters' },
    { field: 'expectedResult', headerName: 'Expected Result' },
    { field: 'actualResult', headerName: 'Actual Result' },
    { field: 'status', headerName: 'Status' },
    { field: 'testedBy', headerName: 'Tested By' },
    { field: 'verifiedBy', headerName: 'Verified By' },
    { field: 'remarks', headerName: 'Remarks' }
  ], []);

  return (
    <div className="container mt-5">
      <h1>LATS/VDU</h1>

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
          formName="LATS/VDU Register"
          formId="lats-vdu-register"
          template="maintenance"
          size="medium"
          showLabel={false}
        />
      </div>

      {/* Table Structure */}
      <TableStructure
        columns={latsvdu}
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

export default LatsList;