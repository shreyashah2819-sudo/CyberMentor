from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from urllib.parse import urlparse
import re
from database.database import create_tables, get_connection

app = FastAPI()
create_tables()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class URLRequest(BaseModel):
    url: str


@app.get("/")
def home():
    return {"message": "CyberMentor backend is running"}


@app.post("/api/url/check")
def check_url(request: URLRequest):
    url = request.url.strip()

    if not url:
        return {
            "error": "URL is required"
        }

    parsed = urlparse(url)

    domain = parsed.netloc
    https = parsed.scheme.lower() == "https"

    suspicious_keywords = [
        "login",
        "verify",
        "account",
        "urgent",
        "password",
        "secure",
        "update",
        "bank",
        "confirm",
    ]

    found_keywords = [
        word for word in suspicious_keywords
        if word in url.lower()
    ]

    suspicious_factors = []

    if not https:
        suspicious_factors.append("Website does not use HTTPS")

    if re.match(r"^\d+\.\d+\.\d+\.\d+$", domain):
        suspicious_factors.append("URL uses an IP address")

    if len(found_keywords) >= 2:
        suspicious_factors.append("Multiple suspicious keywords detected")

    if "@" in url:
        suspicious_factors.append("URL contains an @ symbol")

    phishing_signals = []

    if "login" in found_keywords:
        phishing_signals.append("Login-related URL")

    if "verify" in found_keywords:
        phishing_signals.append("Verification request")

    if "urgent" in found_keywords:
        phishing_signals.append("Urgency-related wording")

    if "password" in found_keywords:
        phishing_signals.append("Password-related wording")

    score = 100

    if not https:
        score -= 25

    score -= min(len(found_keywords) * 10, 40)

    if re.match(r"^\d+\.\d+\.\d+\.\d+$", domain):
        score -= 20

    if "@" in url:
        score -= 15

    score = max(score, 0)

    if score >= 70:
        risk_level = "Low"
    elif score >= 40:
        risk_level = "Medium"
    else:
        risk_level = "High"

    return {
        "url": url,
        "domain": domain,
        "https": https,
        "securityScore": score,
        "riskLevel": risk_level,
        "suspiciousFactors": suspicious_factors,
        "phishingSignals": phishing_signals,
    }

class PasswordRequest(BaseModel):
    password: str


@app.post("/api/password/check")
def check_password(request: PasswordRequest):
    password = request.password

    score = 0
    feedback = []

    if len(password) >= 8:
        score += 25
    else:
        feedback.append("Use at least 8 characters.")

    if any(c.isupper() for c in password):
        score += 20
    else:
        feedback.append("Add an uppercase letter.")

    if any(c.islower() for c in password):
        score += 20
    else:
        feedback.append("Add a lowercase letter.")

    if any(c.isdigit() for c in password):
        score += 20
    else:
        feedback.append("Add a number.")

    if any(not c.isalnum() for c in password):
        score += 15
    else:
        feedback.append("Add a special character.")

    if score >= 80:
        strength = "Strong"
    elif score >= 50:
        strength = "Medium"
    else:
        strength = "Weak"

    return {
        "score": score,
        "strength": strength,
        "feedback": feedback,
    }

class EmailRequest(BaseModel):
    email_text: str


@app.post("/api/phishing/check")
def check_phishing_email(request: EmailRequest):
    email = request.email_text.lower()

    suspicious_words = [
        "urgent",
        "verify",
        "account",
        "password",
        "click here",
        "login",
        "confirm",
        "winner",
        "prize",
        "otp",
        "immediately",
    ]

    found_signals = [
        word for word in suspicious_words
        if word in email
    ]

    score = min(len(found_signals) * 12, 100)

    if score >= 60:
        risk_level = "High"
    elif score >= 30:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "riskScore": score,
        "riskLevel": risk_level,
        "signals": found_signals,
    }

@app.post("/api/malware/check")
async def check_malware(file: UploadFile = File(...)):
    content = await file.read()

    file_size = len(content)
    file_name = file.filename or ""
    file_type = file.content_type or "Unknown"

    indicators = []

    suspicious_extensions = [
        ".exe",
        ".bat",
        ".cmd",
        ".scr",
        ".vbs",
        ".ps1",
    ]

    if any(file_name.lower().endswith(ext) for ext in suspicious_extensions):
        indicators.append("Potentially executable file type detected")

    if file_size == 0:
        indicators.append("File is empty")

    if indicators:
        risk_score = 70
        risk_level = "High"
    else:
        risk_score = 10
        risk_level = "Low"

    return {
        "riskLevel": risk_level,
        "riskScore": risk_score,
        "fileType": file_type,
        "fileSize": file_size,
        "indicators": indicators,
    }

from pydantic import BaseModel


class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str


@app.post("/api/register")
def register_user(request: RegisterRequest):
    connection = get_connection()
    cursor = connection.cursor()

    # Check if email already exists
    cursor.execute(
        "SELECT id FROM users WHERE email = ?",
        (request.email,),
    )

    existing_user = cursor.fetchone()

    if existing_user:
        connection.close()
        return {"error": "Email already registered"}

    # Create user
    cursor.execute(
        """
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
        """,
        (
            request.name,
            request.email,
            request.password,
        ),
    )

    user_id = cursor.lastrowid

    # Create initial progress for the user
    cursor.execute(
        """
        INSERT INTO progress (user_id, xp, level, streak, cyber_health_score)
        VALUES (?, 0, 1, 0, 0)
        """,
        (user_id,),
    )

    connection.commit()
    connection.close()

    return {
        "message": "Registration successful",
        "user_id": user_id,
    }

def register_user(request: RegisterRequest):
    connection = get_connection()
    cursor = connection.cursor()

    # Check if email already exists
    cursor.execute(
        "SELECT id FROM users WHERE email = ?",
        (request.email,),
    )

    existing_user = cursor.fetchone()

    if existing_user:
        connection.close()
        return {"error": "Email already registered"}

    # Create user
    cursor.execute(
        """
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?)
        """,
        (
            request.name,
            request.email,
            request.password,
        ),
    )

    user_id = cursor.lastrowid

    # Create initial progress for the user
    cursor.execute(
        """
        INSERT INTO progress (user_id, xp, level, streak, cyber_health_score)
        VALUES (?, 0, 1, 0, 0)
        """,
        (user_id,),
    )

    connection.commit()
    connection.close()

    return {
        "message": "Registration successful",
        "user_id": user_id,
    }


@app.post("/api/missions/seed")
def seed_missions():
    connection = get_connection()
    cursor = connection.cursor()

    missions = [
        ("fake-bank-email", "Fake Bank Email", "Beginner", 100),
        ("otp-scam", "OTP Scam", "Beginner", 100),
        ("fake-whatsapp", "Fake WhatsApp", "Beginner", 80),
        ("qr-scam", "QR Scam", "Beginner", 80),
        ("fake-job-offer", "Fake Job Offer", "Intermediate", 80),
        ("usb-attack", "USB Attack", "Beginner", 80),
    ]

    for mission in missions:
        cursor.execute(
            """
            INSERT OR IGNORE INTO missions
            (mission_key, title, difficulty, xp_reward)
            VALUES (?, ?, ?, ?)
            """,
            mission,
        )

    connection.commit()
    connection.close()

    return {"message": "Missions added successfully"}

class MissionCompletionRequest(BaseModel):
    user_id: int
    mission_key: str
    completed: bool


@app.post("/api/missions/complete")
def complete_mission(request: MissionCompletionRequest):
    connection = get_connection()
    cursor = connection.cursor()

    # Find the mission
    cursor.execute(
        "SELECT id, xp_reward FROM missions WHERE mission_key = ?",
        (request.mission_key,),
    )

    mission = cursor.fetchone()

    if not mission:
        connection.close()
        return {"error": "Mission not found"}

    mission_id = mission["id"]

    # Check if this user already completed this mission
    cursor.execute(
        """
        SELECT id, completed, attempts
        FROM mission_attempts
        WHERE user_id = ? AND mission_id = ?
        """,
        (request.user_id, mission_id),
    )

    existing_attempt = cursor.fetchone()

    if existing_attempt:
        new_attempts = existing_attempt["attempts"] + 1

        cursor.execute(
            """
            UPDATE mission_attempts
            SET completed = ?,
                attempts = ?,
                completed_at = CASE
                    WHEN ? = 1 THEN CURRENT_TIMESTAMP
                    ELSE completed_at
                END
            WHERE id = ?
            """,
            (
                1 if request.completed else 0,
                new_attempts,
                1 if request.completed else 0,
                existing_attempt["id"],
            ),
        )

    else:
        cursor.execute(
            """
            INSERT INTO mission_attempts
            (user_id, mission_id, completed, attempts, completed_at)
            VALUES (?, ?, ?, 1, CASE
                WHEN ? = 1 THEN CURRENT_TIMESTAMP
                ELSE NULL
            END)
            """,
            (
                request.user_id,
                mission_id,
                1 if request.completed else 0,
                1 if request.completed else 0,
            ),
        )

    connection.commit()
    connection.close()

    return {
        "message": "Mission completion saved",
        "xpReward": mission["xp_reward"] if request.completed else 0,
    }

class AttackRequest(BaseModel):
    incident: str


@app.post("/api/attack/identify")
def identify_attack(request: AttackRequest):
    incident = request.incident.lower()

    if (
        "fake login" in incident
        or "phishing" in incident
        or "suspicious email" in incident
        or "password" in incident
        or "credential" in incident
    ):
        attack_type = "Phishing Attack"
        severity = "High"
        confidence = 92
        mitre_id = "T1566 - Phishing"
        description = (
            "Attackers impersonate a trusted entity to trick users "
            "into revealing sensitive information or credentials."
        )
        common_goal = (
            "Steal credentials, gain unauthorized access to accounts "
            "or systems."
        )

    elif (
        "ransomware" in incident
        or "encrypted files" in incident
        or "files were encrypted" in incident
    ):
        attack_type = "Ransomware Attack"
        severity = "High"
        confidence = 90
        mitre_id = "T1486 - Data Encrypted for Impact"
        description = (
            "Attackers encrypt files or systems and may demand "
            "payment for recovery."
        )
        common_goal = (
            "Disrupt systems and obtain money from the victim."
        )

    elif (
        "otp" in incident
        or "verification code" in incident
        or "one time password" in incident
    ):
        attack_type = "Credential Theft"
        severity = "High"
        confidence = 85
        mitre_id = "T1056 - Input Capture"
        description = (
            "Attackers attempt to obtain authentication information "
            "such as passwords or one-time codes."
        )
        common_goal = (
            "Gain unauthorized access to an account."
        )

    elif (
        "wifi" in incident
        or "wireless" in incident
        or "network" in incident
    ):
        attack_type = "Network Attack"
        severity = "Medium"
        confidence = 78
        mitre_id = "T1040 - Network Sniffing"
        description = (
            "Attackers attempt to monitor or manipulate network "
            "communications."
        )
        common_goal = (
            "Capture information or gain unauthorized network access."
        )

    else:
        attack_type = "Suspicious Activity"
        severity = "Medium"
        confidence = 60
        mitre_id = "T1595 - Active Scanning"
        description = (
            "The incident contains suspicious security-related "
            "activity that requires further investigation."
        )
        common_goal = (
            "Potentially gain unauthorized access or information."
        )

    return {
        "attackType": attack_type,
        "severity": severity,
        "confidence": confidence,
        "mitreId": mitre_id,
        "description": description,
        "commonGoal": common_goal,
    }