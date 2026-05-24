import nodemailer from "nodemailer";

const sendEmail = async ({
  emails,
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

    const sendPromises = emails.map(
      async (email) => {
        return transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: email,
          subject,
          text,

          attachments: [
            {
              filename: "presentation.pdf",
              path: attachmentPath,
            },
          ],
        });
      }
    );

    const results =
      await Promise.all(sendPromises);

    return {
      success: true,
      totalSent: results.length,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export default sendEmail;