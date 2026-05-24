import searchLeads from "../services/leadService.js";
import sendEmail from "../services/emailService.js";

export const startCampaignController =
  async (req, res) => {
    try {
      const {
        keyword,
        subject,
        text,
      } = req.body;

      if (!keyword) {
        return res.status(400).json({
          success: false,
          message:
            "Keyword is required",
        });
      }

      const leads =
        await searchLeads(keyword);

      const emails = leads.flatMap(
        (lead) => lead.emails
      );

      const uniqueEmails = [
        ...new Set(emails),
      ];

      const emailResult =
        await sendEmail({
          emails: uniqueEmails,
          subject,
          text,
          attachmentPath:
            "./uploads/presentation.pdf",
        });

      res.status(200).json({
        success: true,
        keyword,
        totalLeads:
          uniqueEmails.length,
        emails: uniqueEmails,
        emailResult,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };