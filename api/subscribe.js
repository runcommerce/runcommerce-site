export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const response = await fetch("https://app.loops.so/api/v1/contacts/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.LOOPS_API_KEY}`,
      },
      body: JSON.stringify({ email, source: "coming-soon" }),
    });

    const data = await response.json();

    if (response.ok || response.status === 409) {
      return res.status(200).json({ success: true });
    }

    return res.status(response.status).json({ error: data.message || "Failed to subscribe" });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
