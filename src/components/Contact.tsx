import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import emailjs from "@emailjs/browser";
import "../assets/styles/Contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ open: false, ok: true, msg: "" });

  const validate = () => {
    const nameErr = name.trim() === "";
    const emailErr = email.trim() === "";
    const msgErr = message.trim() === "";
    setNameError(nameErr);
    setEmailError(emailErr);
    setMessageError(msgErr);
    return !(nameErr || emailErr || msgErr);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    // CRA / Webpack env vars
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setToast({
        open: true,
        ok: false,
        msg: "Email service is not configured. Add REACT_APP_* vars to .env.local and restart the dev server.",
      });
      return;
    }

    try {
      setSubmitting(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: name, reply_to: email, message },
        { publicKey: PUBLIC_KEY }
      );

      setToast({
        open: true,
        ok: true,
        msg: "Message sent! I'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setToast({
        open: true,
        ok: false,
        msg: "Something went wrong. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  // MUI input safety (visible text/caret, above overlays)
  const fieldSx = (theme: any) => ({
    "& .MuiOutlinedInput-root": {
      bgcolor: "background.paper",
      position: "relative",
      zIndex: 1,
    },
    "& .MuiOutlinedInput-input, & .MuiInputBase-inputMultiline, & textarea": {
      color: "text.primary",
      caretColor: theme.palette.text.primary,
    },
  });

  return (
    <div id="contact">
      <Box
        sx={{ mx: "auto", maxWidth: 720, width: "100%", px: { xs: 2, md: 0 } }}
      >
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Let's keep in touch!</p>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={sendEmail}
            sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 2,
              }}
            >
              <TextField
                required
                fullWidth
                variant="outlined"
                //label="Your Name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                sx={fieldSx}
              />
              <TextField
                required
                fullWidth
                variant="outlined"
                //label="Email / Phone"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError ? "Please enter your email or phone number" : ""
                }
                sx={fieldSx}
              />
            </Box>

            <TextField
              required
              fullWidth
              variant="outlined"
              //label="Message"
              placeholder="Your message!"
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              sx={fieldSx}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send"}
              </Button>
            </Box>
          </Box>

          <Snackbar
            open={toast.open}
            autoHideDuration={4000}
            onClose={() => setToast({ ...toast, open: false })}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert
              severity={toast.ok ? "success" : "error"}
              onClose={() => setToast({ ...toast, open: false })}
              variant="filled"
            >
              {toast.msg}
            </Alert>
          </Snackbar>
        </div>
      </Box>
    </div>
  );
}

export default Contact;
