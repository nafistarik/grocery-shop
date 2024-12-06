let products = [];

export async function GET() {
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  const newProduct = await req.json();
  newProduct.id = Date.now();
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), { status: 201 });
}
