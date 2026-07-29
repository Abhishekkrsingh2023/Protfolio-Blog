export function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


export function getHtmlString(name: string, email: string, message: string): string {
    return (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
</head>
<body style="margin:0; padding:30px 16px; background:#f2f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f2f5f9;">
  <tr>
    <td align="center">
      <!-- main card: max-width 560px, clean white, subtle shadow -->
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px; background:#ffffff; border-radius:20px; box-shadow:0 8px 24px rgba(0,0,0,0.04); border:1px solid #e9edf4; overflow:hidden;">

        <!-- header: soft blue gradient, compact -->
        <tr>
          <td style="padding:28px 30px 20px; background:linear-gradient(145deg, #2563eb, #3b82f6);">
            <table width="100%" cellspacing="0" cellpadding="0">
              <tr>
                <td style="color:#ffffff; font-size:22px; font-weight:600; letter-spacing:-0.2px;">
                  ✉️ New message
                </td>
                <td align="right" style="color:rgba(255,255,255,0.75); font-size:14px; font-weight:400;">
                  Portfolio
                </td>
              </tr>
            </table>
            <p style="margin:6px 0 0; color:rgba(255,255,255,0.8); font-size:15px; line-height:1.5;">
              Someone reached out via your contact form.
            </p>
          </td>
        </tr>

        <!-- body: clean, spacious, minimal borders -->
        <tr>
          <td style="padding:28px 30px 20px;">

            <!-- NAME block -->
            <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:16px;">
              <tr>
                <td style="background:#f8fafc; border-radius:14px; padding:14px 18px; border:1px solid #eef2f6;">
                  <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#6b7a8f; margin-bottom:4px;">Name</div>
                  <div style="font-size:18px; font-weight:600; color:#0b1a33;">${name}</div>
                </td>
              </tr>
            </table>

            <!-- EMAIL block -->
            <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:20px;">
              <tr>
                <td style="background:#f8fafc; border-radius:14px; padding:14px 18px; border:1px solid #eef2f6;">
                  <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#6b7a8f; margin-bottom:4px;">Email</div>
                  <a href="mailto:${email}" style="font-size:17px; font-weight:600; color:#2563eb; text-decoration:none;">${email}</a>
                </td>
              </tr>
            </table>

            <!-- MESSAGE block: softer background, clean -->
            <table width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:6px;">
              <tr>
                <td style="background:#f8fafc; border-radius:14px; padding:16px 18px; border:1px solid #eef2f6;">
                  <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.5px; color:#6b7a8f; margin-bottom:8px;">Message</div>
                  <div style="font-size:15px; line-height:1.7; color:#1e2a44; white-space:pre-wrap; word-break:break-word;">${message}</div>
                </td>
              </tr>
            </table>

            <!-- REPLY button: subtle, friendly -->
            <table width="100%" cellspacing="0" cellpadding="0" style="margin-top:28px;">
              <tr>
                <td align="center">
                  <a href="mailto:${email}" style="display:inline-block; background:#2563eb; color:#ffffff; text-decoration:none; padding:12px 28px; border-radius:40px; font-size:15px; font-weight:500; letter-spacing:0.2px; box-shadow:0 2px 8px rgba(37,99,235,0.2);">Reply to ${name}</a>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <!-- footer: minimal, light -->
        <tr>
          <td style="padding:18px 30px; background:#fafcff; border-top:1px solid #eef2f6; text-align:center;">
            <p style="margin:0; font-size:12px; color:#8896aa; line-height:1.5;">
              This email was generated from your portfolio contact form.
            </p>
          </td>
        </tr>

      </table>
      <!-- end main card -->
    </td>
  </tr>
</table>

</body>
</html>`);
}