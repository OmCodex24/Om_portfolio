import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/send", methods=["POST"])
def send_email():
    data = request.get_json()
    user_email = data.get("user_email")
    user_name = data.get("user_name")
    subject = data.get("subject")
    message = data.get("message")

    try:
        msg = Mail(
            from_email=os.getenv("SENDER_EMAIL"),
            to_emails=os.getenv("RECEIVER_EMAIL"),
            subject=subject,
            plain_text_content=f"Name: {user_name}\nEmail: {user_email}\n\nMessage:\n{message}"
        )
        sg = SendGridAPIClient(os.getenv("SENDGRID_API_KEY"))
        response = sg.send(msg)
        print(response.status_code)
        return "Email sent successfully!", 200
    except Exception as e:
        print(e)
        return str(e), 500

if __name__ == "__main__":
    app.run(port=5000, debug=True)
