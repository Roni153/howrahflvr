import { NextRequest, NextResponse } from "next/server";
import { readMenu, writeMenu } from "@/lib/menu";
import { MenuItem } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function GET() {
  const menu = readMenu();
  return NextResponse.json(menu);
}

export async function PUT(req: NextRequest) {
  try {
    const body = (await req.json()) as MenuItem[];

    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // Basic validation
    const sanitized = body.map((item) => ({
      ...item,
      id: item.id || `${item.name}-${Math.random().toString(36).slice(2, 8)}`,
      price: Number(item.price) || 0
    }));

    writeMenu(sanitized);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to save menu" },
      { status: 500 }
    );
  }
}
