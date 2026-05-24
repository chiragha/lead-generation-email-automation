import { Parser } from "json2csv";

export const exportCSV = async (req, res) => {
  try {
    const leads = [
      {
        website: "https://soundtherapyshop.com",

        email: "hello@soundtherapyshop.com",
      },
      {
        website: "https://soundtherapyshop.com",

        email: "katie.mccoy@soundtherapyshop.com",
      },
    ];

    const json2csvParser = new Parser();

    const csv = json2csvParser.parse(leads);

    res.header("Content-Type", "text/csv");

    res.attachment("leads.csv");

    return res.send(csv);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
