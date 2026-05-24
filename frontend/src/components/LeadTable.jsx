const LeadTable = ({ leads }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">
        Buyer Leads
      </h2>

      {leads.length === 0 ? (
        <div className="text-center py-14">
          <p className="text-2xl text-gray-500">
            No Leads Found
          </p>

          <p className="text-gray-400 mt-2">
            Search for keywords like
            “sound healing”
            or “wellness center”
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full">

            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">
                  Website
                </th>

                <th className="p-4 text-left">
                  Email
                </th>
              </tr>
            </thead>

            <tbody>
              {leads.map((lead, index) => {

                if (
                  lead.emails.length === 0
                ) {
                  return (
                    <tr
                      key={index}
                      className="border-t"
                    >
                      <td className="p-4">
                        {lead.website}
                      </td>

                      <td className="p-4 text-red-500">
                        No Email Found
                      </td>
                    </tr>
                  );
                }

                return lead.emails.map(
                  (
                    email,
                    emailIndex
                  ) => (
                    <tr
                      key={`${index}-${emailIndex}`}
                      className="border-t hover:bg-slate-50 transition"
                    >
                      <td className="p-4">
                        {lead.website}
                      </td>

                      <td className="p-4 text-blue-600">
                        {email}
                      </td>
                    </tr>
                  )
                );
              })}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default LeadTable;