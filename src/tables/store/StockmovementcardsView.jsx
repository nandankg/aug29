import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UniversalExportComponent from "../../components/UniversalExportComponent";
import {
  fetchData,
  saveData,
} from "../../reducer/redux/tableDataSlice";

function getLastParameter() {
  const pathname = window.location.pathname;
  const pathSegments = pathname.split("/").filter(Boolean);
  return pathSegments[pathSegments.length - 1];
}

const StockmovementcardsView = () => {
  const [slug, setSlug] = useState(getLastParameter().trim());
  const loanregister = useSelector((state) => state.data);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state;
  const [stockData, setStockData] = useState([]);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("userdata"));
  const [formData, setFormData] = useState({});

  // Define columns for export
  const transactionColumns = [
    { field: 'sno', headerName: 'S.No' },
    { field: 'issueCardId', headerName: 'ISSUE CARD ID' },
    { field: 'cardType', headerName: 'Card Type' },
    { field: 'sold', headerName: 'Tick if sold' },
    { field: 'status', headerName: 'Status' },
    { field: 'cscId', headerName: 'CSC ID' },
    { field: 'afcAmt', headerName: 'AFC Amt' },
    { field: 'actual', headerName: 'Refended CSC Details' },
    { field: 'diff', headerName: 'Diff (If any)' }
  ];

  const stockColumns = [
    { field: 'type', headerName: 'Stock Type' },
    { field: 'sv', headerName: 'SV' },
    { field: 'ssc', headerName: 'SSC' },
    { field: 'bl', headerName: 'BL' },
    { field: 't1', headerName: 'T1' },
    { field: 't3', headerName: 'T3' }
  ];

  // Fetch data on mount
  useEffect(() => {
    dispatch(fetchData({ formType: slug }));
  }, [dispatch]);

  const itmm = loanregister.data.data;
  let filteredData;

  if (itmm) {
    filteredData = itmm.filter((itm) => {
      return itm.id === id;
    });
  }

  // Prepare export data
  const transactionExportData = filteredData?.[0]?.transactions?.map((item, index) => ({
    sno: index + 1,
    issueCardId: item.issueCardId,
    cardType: item.cardType,
    sold: item.sold ? 'Yes' : 'No',
    status: item.status,
    cscId: item.cscId,
    afcAmt: item.afcAmt,
    actual: item.actual,
    diff: item.diff
  })) || [];

  // Prepare stock data for export
  const stockExportData = [];
  if (filteredData?.[0]?.openingStock && filteredData?.[0]?.closingStock) {
    const stockTypes = ['Fresh', 'Deface', 'Defective'];
    stockTypes.forEach((type, index) => {
      stockExportData.push({
        type: `Opening ${type}`,
        sv: filteredData[0].openingStock[index]?.SV || '',
        ssc: filteredData[0].openingStock[index]?.SSC || '',
        bl: filteredData[0].openingStock[index]?.BL || '',
        t1: filteredData[0].openingStock[index]?.T1 || '',
        t3: filteredData[0].openingStock[index]?.T3 || ''
      });
      stockExportData.push({
        type: `Closing ${type}`,
        sv: filteredData[0].closingStock[index]?.SV || '',
        ssc: filteredData[0].closingStock[index]?.SSC || '',
        bl: filteredData[0].closingStock[index]?.BL || '',
        t1: filteredData[0].closingStock[index]?.T1 || '',
        t3: filteredData[0].closingStock[index]?.T3 || ''
      });
    });
  }

  const handleSave = () => {
    dispatch(saveData({ slug, id }));
    alert(slug);
    navigate(`list/${slug}`);
  };

  return (
    <div className="container mt-4">
      {/* Universal Export Component */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <UniversalExportComponent
          data={transactionExportData}
          columns={transactionColumns}
          exportType="excel"
          formName="Stock Movement Cards - Transactions"
          formId="stock-movement-cards-transactions"
          template="standard"
          includeSerialNumber={false}
          size="medium"
          showLabel={true}
          metadata={{
            date: filteredData?.[0]?.date,
            station: filteredData?.[0]?.station,
            scEmp: filteredData?.[0]?.scEmp,
            craEmp: filteredData?.[0]?.craEmp
          }}
        />
        <UniversalExportComponent
          data={stockExportData}
          columns={stockColumns}
          exportType="pdf"
          formName="Stock Movement Cards - Stock Details"
          formId="stock-movement-cards-stock"
          template="standard"
          includeSerialNumber={false}
          size="medium"
          showLabel={false}
        />
      </div>

      <h4>Stock Movement Cards</h4>

      {/* Use a Bootstrap container for centering */}
      {filteredData?.map((item, index) => (
        <React.Fragment key={index}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Station</th>
                <th>SC Emp</th>
                <th>SC Name</th>
                <th>CRA Emp</th>
                <th>CRA Name</th>
                <th>Shift Timming</th>
              </tr>
              <tr>
                <td>{item.date}</td>
                <td>{item.station}</td>
                <td>{item.scEmp}</td>
                <td>{item.scName}</td>
                <td>{item.craEmp}</td>
                <td>{item.craName}</td>
                <td>{item.shiftTiming}</td>
              </tr>
            </thead>
          </table>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th colSpan="5">Opening Stock</th>
                <th colSpan="2"></th>
                <th colSpan="5">Closing Stock</th>
              </tr>
              <tr>
                <th>SV</th>
                <th>SSC</th>
                <th>BL</th>
                <th>T1</th>
                <th>T3</th>
                <th colSpan="2"></th>
                <th>SV</th>
                <th>SSC</th>
                <th>BL</th>
                <th>T1</th>
                <th>T3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.openingStock?.[0]?.SV}</td>
                <td>{item.openingStock?.[0]?.SSC}</td>
                <td>{item.openingStock?.[0]?.BL}</td>
                <td>{item.openingStock?.[0]?.T1}</td>
                <td>{item.openingStock?.[0]?.T3}</td>
                <th colSpan="2">Fresh</th>
                <td>{item.closingStock?.[0]?.SV}</td>
                <td>{item.closingStock?.[0]?.SSC}</td>
                <td>{item.closingStock?.[0]?.BL}</td>
                <td>{item.closingStock?.[0]?.T1}</td>
                <td>{item.closingStock?.[0]?.T3}</td>
              </tr>
              <tr>
                <td>{item.openingStock?.[1]?.SV}</td>
                <td>{item.openingStock?.[1]?.SSC}</td>
                <td>{item.openingStock?.[1]?.BL}</td>
                <td>{item.openingStock?.[1]?.T1}</td>
                <td>{item.openingStock?.[1]?.T3}</td>
                <th colSpan="2">Deface</th>
                <td>{item.closingStock?.[1]?.SV}</td>
                <td>{item.closingStock?.[1]?.SSC}</td>
                <td>{item.closingStock?.[1]?.BL}</td>
                <td>{item.closingStock?.[1]?.T1}</td>
                <td>{item.closingStock?.[1]?.T3}</td>
              </tr>
              <tr>
                <td>{item.openingStock?.[2]?.SV}</td>
                <td>{item.openingStock?.[2]?.SSC}</td>
                <td>{item.openingStock?.[2]?.BL}</td>
                <td>{item.openingStock?.[2]?.T1}</td>
                <td>{item.openingStock?.[2]?.T3}</td>
                <th colSpan="2">Defective</th>
                <td>{item.closingStock?.[2]?.SV}</td>
                <td>{item.closingStock?.[2]?.SSC}</td>
                <td>{item.closingStock?.[2]?.BL}</td>
                <td>{item.closingStock?.[2]?.T1}</td>
                <td>{item.closingStock?.[2]?.T3}</td>
              </tr>
            </tbody>
          </table>
        </React.Fragment>
      ))}

      <table className="table table-bordered">
        <thead>
          <tr>
            <th rowSpan="2">S.No</th>
            <th rowSpan="2">ISSUE CARD ID</th>
            <th rowSpan="2">Card Type</th>
            <th rowSpan="2">Tick if sold</th>
            <th rowSpan="2">Status</th>
            <th rowSpan="2">CSC ID</th>
            <th rowSpan="2">AFC Amt</th>
            <th rowSpan="2">Refended CSC Details</th>
            <th rowSpan="2">Diff (If any)</th>
          </tr>
        </thead>
        <tbody>
          {filteredData?.[0]?.transactions?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.issueCardId}</td>
              <td>{item.cardType}</td>
              <td>
                <input
                  type="checkbox"
                  checked={item.sold}
                  onChange={(e) => {
                    const updatedStockData = [...stockData];
                    updatedStockData[index] = { ...updatedStockData[index], sold: e.target.checked };
                    setStockData(updatedStockData);
                  }}
                />
              </td>
              <td>{item.status}</td>
              <td>{item.cscId}</td>
              <td>{item.afcAmt}</td>
              <td>{item.actual}</td>
              <td>{item.diff}</td>
            </tr>
          ))}
          <tr>
            <td className="d-flex gap-3 mt-3 justify-content-end" colSpan="9">
              {filteredData?.[0]?.status === "0" || user?.role === "Admin" ? (
                <div className="d-flex">
                  <Link
                    to={`/edit/${slug}`}
                    state={{ id: filteredData?.[0]?.id }}
                    className="btn btn-primary align-content-center mx-3"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-success"
                    onClick={handleSave}
                  >
                    Submit
                  </button>
                </div>
              ) : (
                ""
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StockmovementcardsView;