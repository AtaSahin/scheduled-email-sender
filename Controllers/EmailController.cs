using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;

namespace react_asp_mail.Controllers
{
    [Route("api/email")]
    [ApiController]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public IActionResult SendEmail(string body)
        {
            try
            {
                var email = new MimeMessage();
                email.From.Add(MailboxAddress.Parse("emailata8@gmail.com"));
                email.To.Add(MailboxAddress.Parse("emailata8@gmail.com"));
                email.Subject = "Test Email";
                email.Body = new TextPart(TextFormat.Html) { Text = body };


                using var smtp = new SmtpClient();

                    smtp.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                smtp.Authenticate("emailata8@gmail.com", "hcom fcbt cijz ecxt");
                smtp.Send(email);
                smtp.Disconnect(true);
                return Ok();
               
            }
            catch (System.Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
