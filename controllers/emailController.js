import sendEmail from "../services/emailService.js";

export const sendMailController = async (req, res) => {
  try {
    const { to, subject, text } = req.body;

    const result = await sendEmail({
      to,
      subject,
      text,
      attachmentPath: "./uploads/presentation.pdf",
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};