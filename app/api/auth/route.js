export async function POST(req) {
    const { email, password } = await req.json();
    if (email === "admin@gmail.com" && password === "12345678") {
      return new Response(
        JSON.stringify({
          success: true,
          data: { token: "your_jwt_token_here" },
        }),
        { status: 200 }
      );
    }
    return new Response(
      JSON.stringify({ success: false, message: "Invalid credentials" }),
      { status: 401 }
    );
  }
  