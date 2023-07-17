import prisma from "../../lib/db";
import { getAllMembers } from "../../lib/helpers/prisma-helpers";

export default async function handle(req, res) {
  try {
    const members = await getAllMembers();

    res.status(200).json(members);
  } catch (e) {
    res.status(500).json({ error: e.message });
  } finally {
    await prisma.$disconnect();
  }
}
