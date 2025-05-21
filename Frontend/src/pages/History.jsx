

import { FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';

const transactions = [
  {
    reference: '12547896325624158',
    service: 'MTH 101',
    amount: '5000',
    date: 'Mar 20, 2025 15:23',
    status: 'Successful',
  },
  // Repeat for demo
  {
    reference: '12547896325624158',
    service: 'MTH 101',
    amount: '5000',
    date: 'Mar 20, 2025 15:23',
    status: 'Successful',
  },
  {
    reference: '12547896325624158',
    service: 'MTH 101',
    amount: '5000',
    date: 'Mar 20, 2025 15:23',
    status: 'Successful',
  },
  {
    reference: '12547896325624158',
    service: 'MTH 101',
    amount: '5000',
    date: 'Mar 20, 2025 15:23',
    status: 'Successful',

  },
];

export const TransactionTable = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-[#012A59] text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-[#F7931E]">TRUPAY</h1>
        <nav className="flex space-x-10 text-md bg-[#F7931E] rounded-full px-8 py-4">
          <li className="list-none cursor-pointer hover:text-[#F7931E]">HOME</li>
          <li className="list-none cursor-pointer hover:text-[#F7931E]">DASHBOARD</li>
          <li className="list-none cursor-pointer hover:text-[#F7931E]">PAYMENT</li>
          <li className="list-none cursor-pointer hover:text-[#F7931E]">HISTORY</li>
        </nav>
        <div className="flex space-x-3">
          <li className="list-none text-[#F7931E] bg-[#10375C] rounded-full border border-[#F7931E] px-6 py-1 hover:bg-[#1a4b7d] transition">Login</li>
          <li className="list-none text-white bg-[#F7931E] rounded-full px-6 py-1 text-black hover:bg-[#F7931E] transition">Sign Up</li>
        </div>
      </header>

      {/* Search and Actions */}
      <div className="max-w-6xl mx-auto">
        <div className="flex space-x-8 mb-6">
          <input
            type="text"
            placeholder="Search"
            className="px-5 py-2 rounded-lg bg-[#F7931E] text-black placeholder:text-black"
          />
        </div>

        <div className="flex space-x-4 mb-6">
          <button className="bg-[#10375C] px-6 py-2 rounded-lg hover:bg-[#1a4b7d] transition">FILTERS</button>
          <button className="bg-[#F44336] px-6 py-2 rounded-lg hover:bg-red-600 transition">EXPORT</button>
        </div>

        {/* Table */}
        <div className="bg-[#F7931E] rounded-2xl overflow-hidden text-black shadow-lg">
          <div className="grid grid-cols-7 gap-4 p-5 font-bold border-b border-white bg-[#ff9f1e] text-white">
            <div>Reference Number</div>
            <div>Service</div>
            <div>Amount</div>
            <div>Date</div>
            <div>Status</div>
            <div>Receipt</div>
            <div>Options</div>
          </div>

          {transactions.map((txn, index) => (
            <div
              key={index}
              className="grid grid-cols-7 gap-4 p-5 items-center border-b border-white hover:bg-[#ffae3d] transition"
            >
              <div>{txn.reference}</div>
              <div>{txn.service}</div>
              <div>{txn.amount}</div>
              <div>{txn.date}</div>
              <div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">{txn.status}</span>
              </div>
              <div className="flex justify-end gap-20">
              <div>
                <FaDownload className="cursor-pointer text-black hover:text-white" size={18} />
              </div>
                <button className="bg-[#10375C] ml-4 text-white px-4 py-1 rounded hover:bg-[#0b2d4d] transition text-sm">
                  Validate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 px-2">
          <p className="text-sm text-white">Showing 1 of 7 entries</p>
          <div className="flex space-x-2">
            <button className="bg-[#FFA833] p-2 rounded-full hover:bg-[#ffc069] transition">
              <FaChevronLeft size={16} />
            </button>
            <button className="bg-[#FFA833] px-3 py-1 rounded hover:bg-[#ffc069] transition">1</button>
            <button className="bg-[#FFA833] p-2 rounded-full hover:bg-[#ffc069] transition">
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};