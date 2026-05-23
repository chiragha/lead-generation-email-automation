import nodemailer from "nodemailer";

const sendEmail = async ({
  to,
  subject,
  text,
  attachmentPath,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,

      attachments: [
        {
          filename: "presentation.pdf",
          path: attachmentPath,
        },
      ],
    });

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export default sendEmail;