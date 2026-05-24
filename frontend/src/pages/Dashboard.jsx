import { useState } from "react";
import SearchForm from "../components/SearchForm";
import LeadTable from "../components/LeadTable";
import API from "../services/api";

const Dashboard = () => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = async () => {
    try {
      setLoading(true);

      const response = await API.get(`/leads/search?keyword=${keyword}`);

      setLeads(response.data.leads);
    } catch (error) {
      console.log(error);

      alert("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  const [leads, setLeads] = useState([]);

  const handleExportCSV = () => {
    window.open(`${import.meta.env.VITE_API_URL}/leads/export`, "_blank");
  };

  const [campaignResult, setCampaignResult] = useState(null);
  const handleCampaign = async () => {
    try {
      const emails = leads.flatMap((lead) => lead.emails);

      const response = await API.post("/campaign/start", {
        keyword,
        emails,
      });

      setCampaignResult(response.data.emailResult);
    } catch (error) {
      console.log(error);

      alert("Campaign failed");
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <div
      className="min-h-screen bg-gradient-to-br
from-slate-100 to-slate-200"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-slate-800">
          Lead Generation Dashboard
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Find buyer leads and automate outreach campaigns
        </p>

        {/* Search Form */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <SearchForm
            keyword={keyword}
            setKeyword={setKeyword}
            handleSearch={handleSearch}
            loading={loading}
          />
        </div>

        {/* Leads Table */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <LeadTable leads={leads} />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={handleExportCSV}
            className="bg-green-600 text-white px-5 py-2 rounded-lg"
          >
            Export CSV
          </button>

          <button
            onClick={handleCampaign}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Send Campaign
          </button>
        </div>

        {/* Campaign Result */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Campaign Result</h2>
          {campaignResult ? (
            <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-lg">
              <p className="font-medium">Campaign Successful</p>

              <p>{campaignResult.totalSent} emails sent successfully</p>
            </div>
          ) : (
            <p className="text-gray-500">No campaign started</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
