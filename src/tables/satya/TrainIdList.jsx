import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducer/redux/tableDataSlice";
import ReusableFilterBar from "../../component/ReusableFilterBar";
import TableStructure from "../../component/TableStructure";
import Pagination from "../../component/Pagination";
import { filterTableData } from "../../utils/tableUtils";
import { trainidchange } from "../../data/tableColumns";
import UniversalExportComponent from "../../components/UniversalExportComponent";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

function removehyphan(slug) {
  return slug.replace("-", "");
}

const TrainIdList = () => {
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
      trainidchange
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
      oldTrainId: item.old_train_id || '',
      newTrainId: item.new_train_id || '',
      reasonForChange: item.reason_for_change || '',
      changedBy: item.changed_by || '',
      authorizedBy: item.authorized_by || '',
      verificationStatus: item.verification_status || '',
      remarks: item.remarks || ''
    }));
  }, [filteredItems]);

  // Define export columns
  const exportColumns = useMemo(() => [
    { field: 'serialNumber', headerName: 'S.No.' },
    { field: 'date', headerName: 'Date' },
    { field: 'time', headerName: 'Time' },
    { field: 'oldTrainId', headerName: 'Old Train ID' },
    { field: 'newTrainId', headerName: 'New Train ID' },
    { field: 'reasonForChange', headerName: 'Reason for Change' },
    { field: 'changedBy', headerName: 'Changed By' },
    { field: 'authorizedBy', headerName: 'Authorized By' },
    { field: 'verificationStatus', headerName: 'Verification Status' },
    { field: 'remarks', headerName: 'Remarks' }
  ], []);

  return (
    <div className="container mt-5">
      <h1>TRAIN ID CHANGE RECORD</h1>

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
          formName="Train ID Change Record"
          formId="train-id-change-record"
          template="standard"
          size="medium"
          showLabel={false}
        />
      </div>

      {/* Table Structure */}
      <TableStructure
        columns={trainidchange}
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

export default TrainIdList;