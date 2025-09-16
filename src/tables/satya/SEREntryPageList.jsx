import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducer/satya/SEREntryPageReducer";
import dayjs from "dayjs";
import ReusableFilterBar from "../../component/ReusableFilterBar";
import TableStructure from "../../component/TableStructure";
import Pagination from "../../component/Pagination";
import { filterTableData } from "../../utils/tableUtils";
import { serentryregister } from "../../data/tableColumns";
import UniversalExportComponent from "../../components/UniversalExportComponent";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

function removehyphan(slug) {
  return slug.replace("-", "");
}

const SEREntryPageList = () => {
  const dispatch = useDispatch();
  const [slug, setSlug] = useState(getLastParameter().trim());
  const SERentry = useSelector((state) => state.equipmentregister);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [fromDate, setFromDate] = useState(dayjs().startOf("day"));
  const [toDate, setToDate] = useState(dayjs().endOf("day"));
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
    if (SERentry.data?.data) {
      setItems(SERentry.data.data);
      setFilteredItems(SERentry.data.data);
    }
  }, [SERentry]);

  // Filter data based on search and date filters
  useEffect(() => {
    const newData = filterTableData(
      items,
      searchValue,
      fromDate,
      toDate,
      serentryregister
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
      personName: item.person_name || '',
      designation: item.designation || '',
      organization: item.organization || '',
      purposeOfVisit: item.purpose_of_visit || '',
      equipmentAccessed: item.equipment_accessed || '',
      entryTime: item.entry_time || '',
      exitTime: item.exit_time || '',
      escortedBy: item.escorted_by || '',
      authorizedBy: item.authorized_by || '',
      remarks: item.remarks || ''
    }));
  }, [filteredItems]);

  // Define export columns
  const exportColumns = useMemo(() => [
    { field: 'serialNumber', headerName: 'S.No.' },
    { field: 'date', headerName: 'Date' },
    { field: 'time', headerName: 'Time' },
    { field: 'personName', headerName: 'Person Name' },
    { field: 'designation', headerName: 'Designation' },
    { field: 'organization', headerName: 'Organization' },
    { field: 'purposeOfVisit', headerName: 'Purpose of Visit' },
    { field: 'equipmentAccessed', headerName: 'Equipment Accessed' },
    { field: 'entryTime', headerName: 'Entry Time' },
    { field: 'exitTime', headerName: 'Exit Time' },
    { field: 'escortedBy', headerName: 'Escorted By' },
    { field: 'authorizedBy', headerName: 'Authorized By' },
    { field: 'remarks', headerName: 'Remarks' }
  ], []);

  return (
    <div className="container mt-5">
      <h1>SER Room Entry Register</h1>

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
          formName="SER Room Entry Register"
          formId="ser-room-entry-register"
          template="standard"
          size="medium"
          showLabel={false}
        />
      </div>

      {/* Table Structure */}
      <TableStructure
        columns={serentryregister}
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

export default SEREntryPageList;