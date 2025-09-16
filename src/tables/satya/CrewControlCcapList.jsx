import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducer/redux/tableDataSlice";
import ReusableFilterBar from "../../component/ReusableFilterBar";
import TableStructure from "../../component/TableStructure";
import Pagination from "../../component/Pagination";
import { filterTableData } from "../../utils/tableUtils";
import { crewcontrolccap } from "../../data/tableColumns";
import UniversalExportComponent from "../../components/UniversalExportComponent";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

function removehyphan(slug) {
  return slug.replace("-", "");
}

const CrewControlCcapList = () => {
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

    // Set a timeout to call the function after 3 seconds
    const timeout = setTimeout(delayedFunction, 2000); // 2000ms = 2 seconds

    // Clean up the timeout if the component unmounts before the delay
    return () => clearTimeout(timeout); // Cleanup interval on unmount
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
      crewcontrolccap
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
      shift: item.shift || '',
      trainOperatorDemand: item.train_operator_demand || '',
      reasonForDemand: item.reason_for_demand || '',
      trainOperatorReported: item.train_operator_reported || '',
      timeOfReporting: item.time_of_reporting || '',
      dutyAssigned: item.duty_assigned || '',
      dutyLocation: item.duty_location || '',
      remarks: item.remarks || ''
    }));
  }, [filteredItems]);

  // Define export columns
  const exportColumns = useMemo(() => [
    { field: 'serialNumber', headerName: 'S.No.' },
    { field: 'date', headerName: 'Date' },
    { field: 'shift', headerName: 'Shift' },
    { field: 'trainOperatorDemand', headerName: 'Train Operator Demand' },
    { field: 'reasonForDemand', headerName: 'Reason for Demand' },
    { field: 'trainOperatorReported', headerName: 'Train Operator Reported' },
    { field: 'timeOfReporting', headerName: 'Time of Reporting' },
    { field: 'dutyAssigned', headerName: 'Duty Assigned' },
    { field: 'dutyLocation', headerName: 'Duty Location' },
    { field: 'remarks', headerName: 'Remarks' }
  ], []);

  return (
    <div className="container mt-5">
      <h1>UNPLANNED TRAIN OPERATOR DEMAND RECORD</h1>

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
          formName="Unplanned Train Operator Demand Record"
          formId="crew-control-ccap"
          template="standard"
          size="medium"
          showLabel={false}
        />
      </div>

      {/* Table Structure */}
      <TableStructure
        columns={crewcontrolccap}
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

export default CrewControlCcapList;