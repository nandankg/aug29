import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducer/satya/FacpDrillReducer";
import dayjs from "dayjs";
import ReusableFilterBar from "../../component/ReusableFilterBar";
import TableStructure from "../../component/TableStructure";
import Pagination from "../../component/Pagination";
import { filterTableData } from "../../utils/tableUtils";
import { facpdrillregister } from "../../data/tableColumns";
import UniversalExportComponent from "../../components/UniversalExportComponent";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

function removehyphan(slug) {
  return slug.replace("-", "");
}

const FacpDrillList = () => {
  const dispatch = useDispatch();
  const [slug, setSlug] = useState(getLastParameter().trim());
  const FacpdrillList = useSelector((state) => state.facp);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [fromDate, setFromDate] = useState(dayjs().startOf("day"));
  const [toDate, setToDate] = useState(dayjs().endOf("day"));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Fetch data when the component mounts
  useEffect(() => {
    dispatch(fetchData({ formType: slug }));
  }, [dispatch]);

  // Update items and filteredItems when data changes
  useEffect(() => {
    if (FacpdrillList.data?.data) {
      setItems(FacpdrillList.data.data);
      setFilteredItems(FacpdrillList.data.data);
    }
  }, [FacpdrillList]);

  // Filter data based on search and date filters
  useEffect(() => {
    const newData = filterTableData(
      items,
      searchValue,
      fromDate,
      toDate,
      facpdrillregister
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
      drillType: item.drill_type || '',
      location: item.location || '',
      participantsCount: item.participants_count || '',
      drillDuration: item.drill_duration || '',
      evacuationTime: item.evacuation_time || '',
      observedDeficiencies: item.observed_deficiencies || '',
      correctiveActions: item.corrective_actions || '',
      conductedBy: item.conducted_by || '',
      verifiedBy: item.verified_by || '',
      remarks: item.remarks || ''
    }));
  }, [filteredItems]);

  // Define export columns
  const exportColumns = useMemo(() => [
    { field: 'serialNumber', headerName: 'S.No.' },
    { field: 'date', headerName: 'Date' },
    { field: 'time', headerName: 'Time' },
    { field: 'drillType', headerName: 'Drill Type' },
    { field: 'location', headerName: 'Location' },
    { field: 'participantsCount', headerName: 'Participants Count' },
    { field: 'drillDuration', headerName: 'Drill Duration' },
    { field: 'evacuationTime', headerName: 'Evacuation Time' },
    { field: 'observedDeficiencies', headerName: 'Observed Deficiencies' },
    { field: 'correctiveActions', headerName: 'Corrective Actions' },
    { field: 'conductedBy', headerName: 'Conducted By' },
    { field: 'verifiedBy', headerName: 'Verified By' },
    { field: 'remarks', headerName: 'Remarks' }
  ], []);

  return (
    <div className="container mt-5">
      <h1>FACP DRILL REGISTER</h1>

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
          formName="FACP Drill Register"
          formId="facp-drill-register"
          template="standard"
          size="medium"
          showLabel={false}
        />
      </div>

      {/* Table Structure */}
      <TableStructure
        columns={facpdrillregister}
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

export default FacpDrillList;