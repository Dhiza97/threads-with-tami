import User from "@/lib/models/user.model";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    // check if password is correct
    const comparedPassword = await user?.comparePassword(password);

    if (!user || !comparedPassword) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    return new Response(JSON.stringify({ message: "Login successful" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(JSON.stringify({ error: "Login failed" }), {
      status: 500,
    });
  }
}
