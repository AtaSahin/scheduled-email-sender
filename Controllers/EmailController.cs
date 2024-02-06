using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace react_asp_mail.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmailController : ControllerBase
    {
        [HttpPost("send-email")]
        public async Task<IActionResult> SendEmail([FromBody] EmailRequest request)
        {
            try
            {
                MailMessage mail = new MailMessage();
                mail.From = new MailAddress("emailata8@gmail.com");
                mail.To.Add(request.ReceiverEmail);
                mail.Subject = "Message from Your Application";
                mail.Body = request.Message;

                SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);
                smtpClient.Credentials = new NetworkCredential("emailata8@gmail.com", "hcom fcbt cijz ecxt");
                smtpClient.EnableSsl = true;

                await smtpClient.SendMailAsync(mail);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Failed to send email: {ex.Message}");
            }
        }
    }

    public class EmailRequest
    {
        public string ReceiverEmail { get; set; }
        public string Message { get; set; }
    }
}
