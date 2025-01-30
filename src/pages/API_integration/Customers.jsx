import React, { useState, useEffect } from 'react';
import { Search, Edit2, ChevronRight, Upload, Download } from 'lucide-react';
import styles from './Customers.module.css';
import Notifications from "/Notifications.png";
import Search1 from "/Search1.png";
import Language from "/Language.png";
import Contacts from "/Contacts.png";
import Profile from "/Profile.png";
import a1 from "/a1.png";
import a2 from "/a2.png";
import a3 from "/a3.png";
import a4 from "/a4.png";
import a5 from "/a5.png";

const Customers = ({ customers }) => {
  const [customerList, setCustomerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('lastUpdated');
  const [sortOrder, setSortOrder] = useState('desc');

  const getAvatarIcon = (index) => {
    const icons = [a1, a2, a3, a4, a5];
    return icons[index % icons.length];
  };

  useEffect(() => {
    if (customers && customers.length > 0) {
      setCustomerList(customers);
      setLoading(false);
    } else {
      fetchCustomers();
    }
  }, [customers]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setCustomerList(data);
    } catch (err) {
      setError('Failed to fetch customers. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (value) => {
    setSortBy(value);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Sort customers based on selected criteria
  const sortCustomers = (customers) => {
    return [...customers].sort((a, b) => {
      let compareA, compareB;
      
      switch (sortBy) {
        case 'name':
          compareA = a.name.toLowerCase();
          compareB = b.name.toLowerCase();
          break;
        case 'company':
          compareA = a.company.name.toLowerCase();
          compareB = b.company.name.toLowerCase();
          break;
        case 'phone':
          compareA = a.phone;
          compareB = b.phone;
          break;
        case 'lastUpdated':
        default:
          // Simulate last updated timestamp (you may want to use actual timestamps)
          compareA = a.id;
          compareB = b.id;
          break;
      }

      if (sortOrder === 'asc') {
        return compareA > compareB ? 1 : -1;
      } else {
        return compareA < compareB ? 1 : -1;
      }
    });
  };

  const filteredCustomers = customerList
    .filter(customer =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortedCustomers = sortCustomers(filteredCustomers);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedCustomers = sortedCustomers.slice(startIndex, startIndex + rowsPerPage);
  const totalPages = Math.ceil(sortedCustomers.length / rowsPerPage);

  if (loading) return <div className={styles.loading}>Loading customers...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}></div>
      <div className={styles.mainContent}>
        <div className={styles.pageContainer}>
          <div className={styles.page1Header}>
            <div className={styles.headerLeft}>
              <img src={Search1} alt="Search1" />
            </div>
            <div className={styles.headerRight}>
              <img src={Language} alt="Language" />
              <img src={Notifications} alt="Notifications" />
              <img src={Contacts} alt="Contacts" />
              <img src={Profile} alt="Profile" />
            </div>
          </div>

          <div className={styles.pageHeader}>
            <div className={styles.importexport}>
              <h1>Customers</h1>
              <div className={styles.buttonsContainer}>
                <button className={styles.iconButton}><Upload size={18} /> Import</button>
                <button className={styles.iconButton}><Download size={18} /> Export</button>
              </div>
            </div>
            <div className={styles.headerActions}>
              <button className={styles.addButton}>+ Add</button>
            </div>
          </div>

          <div className={styles.filtersContainer}>
        <div className={styles.allBox}>
          <span>All</span>
        </div>
        


          <div className={styles.filters}>
            <div className={styles.searchBox}>
              <Search size={18} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className={styles.sortBy}>
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className={styles.sortSelect}
              >
                <option value="lastUpdated">Last updated (newest)</option>
                <option value="name">Name</option>
                <option value="company">Company</option>
                <option value="phone">Phone</option>
              </select>
            </div>
          </div>
</div>
          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>NAME</th>
                  <th>COMPANY</th>
                  <th>PHONE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCustomers.map((customer, index) => (
                  <tr key={customer.id}>
                    <td><input type="checkbox" /></td>
                    <td>
                      <div className={styles.customerInfo}>
                        <div className={styles.avatar}>
                          <img
                            src={getAvatarIcon(index)}
                            alt="Avatar"
                            style={{ width: '40px', height: '40px' }}
                          />
                        </div>
                        <div>
                          <div className={styles.name}>{customer.name}</div>
                          <div className={styles.email}>{customer.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{customer.company.name}</td>
                    <td>{customer.phone}</td>
                    <td>
                      <div className={styles.rowActions}>
                        <button className={styles.iconBtn}><Edit2 size={16} /></button>
                        <button className={styles.iconBtn}><ChevronRight size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.pagination}>
              <div className={styles.rowsSelect}>
                <span>Rows per page:</span>
                <select value={rowsPerPage} onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>
              <div>
                {startIndex + 1}-{Math.min(startIndex + rowsPerPage, sortedCustomers.length)} of {sortedCustomers.length}
              </div>
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;