import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai';

const generateFakeMembers = () => {
  const names = ['Nitish', 'Pradhuman', 'Nivansh', 'Arti', 'Pooja M'];
  const plans = ['1-Month membership', '3-Month membership', '6-Month membership'];
  const fake = [];
  for (let i = 1; i <= 30; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const phone = '+91-' + Math.floor(Math.random() * 9000000000 + 1000000000);
    const plan = plans[Math.floor(Math.random() * plans.length)];
    fake.push({ id: i, name, phone, plan });
  }
  return fake;
};

const Members = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [members, setMembers] = useState(generateFakeMembers());
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', phone: '', plan: 'Monthly' });

  const pageSize = 6;
  const navigate = useNavigate(); // 👈 for back navigation

  const filtered = members.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.phone.includes(searchTerm)
  );
  const paginatedMembers = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  const handleAddMember = () => {
    setMembers([{ ...newMember, id: Date.now() }, ...members]);
    setShowModal(false);
    setNewMember({ name: '', phone: '', plan: 'Monthly' });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-54' : 'w-0'} bg-black text-white flex flex-col p-4 transition-all duration-300 overflow-hidden`}>
        <div className="flex items-center gap-4 mb-6">
          <img src="" alt="profile" className="w-16 h-16 rounded-full" />
          <div>
            <p className="text-sm">Good Evening</p>
            <p className="text-lg font-bold">admin</p>
          </div>
        </div>
        <div className="space-y-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700">
            <FaUsers /> Members
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-700">
            <FiLogOut /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-6">
        <div className="flex justify-between bg-blue-600 text-white p-4 rounded items-center mb-6">
          <button onClick={() => setSidebarOpen(!sidebarOpen)}><AiOutlineMenu size={24} /></button>
          <button className="bg-white text-black px-4 py-2 rounded flex items-center gap-2" onClick={() => setShowModal(true)}>
            <AiOutlinePlus /> Add Member
          </button>
        </div>

        {/*Back to Dashboard */}
        <div className="mb-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
          >
            - Back to Dashboard
          </button>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          className="w-full border px-4 py-2 rounded mb-4"
          placeholder="Search by Name or Mobile No"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {paginatedMembers.map(member => (
            <div key={member.id} className="bg-gray-100 h-40 w-90 p-4 hover:border flex flex-col justify-between rounded shadow">
              <div className="font-bold text-lg">{member.name}</div>
              <div>{member.phone}</div>
              <div className="text-sm text-gray-600">Plan: {member.plan}</div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-2 mt-4">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)} className="px-3 py-1 border rounded">Prev</button>
          <span className="px-3 py-1">Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)} className="px-3 py-1 border rounded">Next</button>
        </div>

        {/* Add Member Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-96">
              <h2 className="text-lg font-bold mb-4">Add New Member</h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full border px-3 py-2 mb-2 rounded"
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border px-3 py-2 mb-2 rounded"
                value={newMember.phone}
                onChange={(e) => setNewMember({ ...newMember, phone: e.target.value })}
              />
              <select
                className="w-full border px-3 py-2 mb-4 rounded"
                value={newMember.plan}
                onChange={(e) => setNewMember({ ...newMember, plan: e.target.value })}
              >
                <option value="1-Month Membership">1-Month Membership</option>
                <option value="3-Month membership">3-month membership</option>
                <option value="6 Month Membership">6 Month Membership</option>
              </select>
              <div className="flex justify-end gap-2">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button onClick={handleAddMember} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;
