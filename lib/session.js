// Simple in-memory session storage (replace with database in production)
const sessions = new Map();

export async function createSession(email) {
  const token = crypto.randomUUID();
  const session = {
    token,
    email,
    createdAt: new Date(),
  };

  sessions.set(token, session);
  return session;
}

export async function getSession(token) {
  if (!token) return null;
  return sessions.get(token) || null;
}

export async function deleteSession(token) {
  sessions.delete(token);
}
