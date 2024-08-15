"use server";
import { Resend } from "resend";
import EmailTemplate from "@/app/components/EmailTemplate";
import { render } from "@react-email/render";

const resend = new Resend("re_Vv2kakJG_AvhSNdanLS9pcJoo6o1EoaHN"); // Create the Resend instance outside of the function

export const sendEmail = async (prevState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "cholidafiddrusw <cholidafiddrusw@gmail.com>", // Ganti dengan email pengirim yang valid
      to: email,
      subject: "Form Submission",
      html: render(EmailTemplate({ name, email, message }))
    });
    return { error: null, success: true };
  } catch (error) {
    console.log(error);
    return { error: error.message, success: false };
  }
};