import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { reservationSchema } from "@/lib/validation";

export async function GET() {
  const reservations = await prisma.reservation.findMany({
    orderBy: { createdAt: "desc" }
  });
  return NextResponse.json(
    reservations.map((r) => ({
      ...r,
      date: r.date.toISOString(),
      createdAt: r.createdAt.toISOString()
    }))
  );
}

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = reservationSchema.parse({
      ...json,
      date: json.date ? new Date(json.date) : undefined
    });

    const reservation = await prisma.reservation.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        phone: parsed.phone,
        date: parsed.date,
        time: parsed.time,
        guests: parsed.guests,
        requests: parsed.requests
      }
    });

    return NextResponse.json(
      { id: reservation.id },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Invalid data or failed to save reservation" },
      { status: 400 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const id = Number(new URL(req.url).searchParams.get("id"));
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const body = await req.json();

  try {
    await prisma.reservation.update({
      where: { id },
      data: {
        confirmed: body.confirmed ?? undefined
      }
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const id = Number(new URL(req.url).searchParams.get("id"));
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  try {
    await prisma.reservation.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
