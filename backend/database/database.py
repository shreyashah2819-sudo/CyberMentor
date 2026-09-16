import sqlite3
from pathlib import Path


DATABASE_PATH = Path(__file__).parent / "cybermentor.db"


def get_connection():
    connection = sqlite3.connect(DATABASE_PATH)
    connection.row_factory = sqlite3.Row
    return connection


def create_tables():
    connection = get_connection()
    cursor = connection.cursor()

    # Users
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # User progress
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS progress (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER UNIQUE NOT NULL,
            xp INTEGER DEFAULT 0,
            level INTEGER DEFAULT 1,
            streak INTEGER DEFAULT 0,
            cyber_health_score INTEGER DEFAULT 0,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    """)

    # Missions
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS missions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            mission_key TEXT UNIQUE NOT NULL,
            title TEXT NOT NULL,
            difficulty TEXT NOT NULL,
            xp_reward INTEGER DEFAULT 0
        )
    """)

    # Mission attempts
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS mission_attempts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            mission_id INTEGER NOT NULL,
            completed INTEGER DEFAULT 0,
            attempts INTEGER DEFAULT 0,
            completed_at TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (mission_id) REFERENCES missions(id)
        )
    """)

    # Badges
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS badges (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE NOT NULL,
            description TEXT,
            xp_reward INTEGER DEFAULT 0
        )
    """)

    # User badges
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS user_badges (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            badge_id INTEGER NOT NULL,
            earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (badge_id) REFERENCES badges(id)
        )
    """)

    connection.commit()
    connection.close()

    if __name__ == "__main__":
        create_tables()
        print("CyberMentor database created successfully!")