import sendEmail from "../services/emailService.js";

export const sendMailController = async (req, res) => {
  try {
    const { emails, subject, text } = req.body;

    if (!emails || emails.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Emails are required",
      });
    }

    if (!subject || !text) {
      return res.status(400).json({
        success: false,
        message: "Subject and text required",
      });
    }

    const result = await sendEmail({
      emails,
      subject,
      text,
      attachmentPath: "./uploads/presentation.pdf",
    });

    res.status(200).json({
      success: true,
      message: "Bulk email sent successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
