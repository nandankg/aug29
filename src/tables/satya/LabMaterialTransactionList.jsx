import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  saveData,
} from "../../reducer/satya/LabMaterialTransactionReducer";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { Breadcrumbs } from "@mui/material";
import UniversalExportComponent from "../../components/UniversalExportComponent";

const user = JSON.parse(localStorage.getItem("userdata"));

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const LabMaterialTransactionList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const dispatch = useDispatch();
  const tableRef = useRef(null);
  const LabRegister = useSelector((state) => state.labmaterial);
  const [slug, setSlug] = useState(getLastParameter().trim());
  const itmm = LabRegister.data.data;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  let filteredItems;
  if (itmm) {
    filteredItems = itmm.filter((itm) => {
      return itm.id === id;
    });
  }

  const handleSave = (id) => {
    dispatch(saveData(id));
    navigate(`list/${slug}`);
  };

  // Prepare export data
  const prepareExportData = () => {
    if (!filteredItems || filteredItems.length === 0) return { data: [], columns: [] };

    const exportData = [];

    // Add receipts data
    filteredItems.forEach((item, index) => {
      exportData.push({
        type: 'RECEIPT',
        srNo: index + 1,
        failureDate: item.failuredate || '',
        description: item.description || '',
        quantity: item.quantity || '',
        efrNo: item.efr_no || '',
        receiveDate: item.receivedate || '',
        receivedBy: `${item.name || ''} | ${item.desig || ''}`,
        gearLocation: item.gearidLocation || '',
        issueDate: '',
        invoiceDetails: '',
        workLocation: ''
      });
    });

    // Add issues data
    filteredItems.forEach((item, index) => {
      exportData.push({
        type: 'ISSUE',
        srNo: index + 1,
        failureDate: '',
        description: item.mdescription || '',
        quantity: item.quant || '',
        efrNo: item.efrNo || '',
        receiveDate: '',
        receivedBy: `${item.name1 || ''} | ${item.desig1 || ''}`,
        gearLocation: '',
        issueDate: item.issuedate || '',
        invoiceDetails: `${item.invoiceno || ''} | ${item.invoiceDate || ''}`,
        workLocation: item.workLocation || ''
      });
    });

    const columns = [
      { field: 'type', headerName: 'Type' },
      { field: 'srNo', headerName: 'Sr. No.' },
      { field: 'failureDate', headerName: 'Date of Failure' },
      { field: 'description', headerName: 'Description of Material' },
      { field: 'quantity', headerName: 'Qty.' },
      { field: 'efrNo', headerName: 'EFR No.' },
      { field: 'receiveDate', headerName: 'Date of Receiving' },
      { field: 'receivedBy', headerName: 'To Whom Received' },
      { field: 'gearLocation', headerName: 'Gear Id & Location' },
      { field: 'issueDate', headerName: 'Date of Issue' },
      { field: 'invoiceDetails', headerName: 'Invoice/Challan No. & Date' },
      { field: 'workLocation', headerName: 'For What Work And Location' }
    ];

    return { data: exportData, columns };
  };

  const exportMetadata = {
    formName: "LAB Material Transaction Register",
    formId: "LAB-MATERIAL-TRANSACTION",
    totalRecords: (filteredItems?.length || 0) * 2, // Receipts + Issues
    additionalInfo: "Unit: Signal"
  };

  return (
    <>
      <div className="container">
        <div role="presentation " className="bredcrumbs">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit">
              LAB Material Transaction
            </Link>
            <Link underline="hover" color="inherit">
              View
            </Link>
          </Breadcrumbs>
        </div>
        <h3>LAB Material Transaction Register</h3>
        <span className="line-box"></span>

        {/* Universal Export Component */}
        <UniversalExportComponent
          data={prepareExportData().data}
          columns={prepareExportData().columns}
          metadata={exportMetadata}
          filename="lab_material_transaction"
        />

        <div ref={tableRef}>
          <table className="table" style={{ overflowX: "scroll" }}>
            <thead>
              {filteredItems?.map((item, index) => (
                <tr key={item.id}>
                  <th colSpan={6}>
                    LAB Material Transaction Register
                  </th>
                  <th colSpan={2}>Unit: Signal</th>
                </tr>
              ))}
              <tr>
                <th colSpan={9}>RECEIPTS</th>
              </tr>
              <tr>
                <th>Date of Failure</th>
                <th>Description of Material</th>
                <th>Sr. No.</th>
                <th>Qty.</th>
                <th>EFR No.</th>
                <th>Date of Receiving</th>
                <th>To Whom Received</th>
                <th colSpan={2}>Gear Id & Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.failuredate}</td>
                  <td>{item.description}</td>
                  <td>{index + 1}</td>
                  <td>{item.quantity}</td>
                  <td>{item.efr_no}</td>
                  <td>{item.receivedate}</td>
                  <td>
                    {item.name}&nbsp;|&nbsp;{item.desig}
                  </td>
                  <td>{item.gearidLocation}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th colSpan={9}>ISSUES</th>
              </tr>
              <tr>
                <th>Date of Issue</th>
                <th>Description of Material</th>
                <th>Sr. No.</th>
                <th>Qty.</th>
                <th>EFR No.</th>
                <th>Invoice/Challan No. & Date</th>
                <th>To Whom Received</th>
                <th>For What Work And Location</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.issuedate}</td>
                  <td>{item.mdescription}</td>
                  <td>{index + 1}</td>
                  <td>{item.quant}</td>
                  <td>{item.efrNo}</td>
                  <td>
                    {item.invoiceno}&nbsp;|&nbsp;{item.invoiceDate}
                  </td>
                  <td>
                    {item.name1}&nbsp;|&nbsp;{item.desig1}
                  </td>
                  <td>{item.workLocation}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredItems?.map((item, index) => (
            <div key={item.id}>
              {(item.status === "0" || user?.role === "Admin") && (
                <div className="d-flex gap-2 mt-2">
                  <Link
                    to={`/edit/${slug}`}
                    state={{ id: item.id }}
                    className="btn btn-primary"
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
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LabMaterialTransactionList;