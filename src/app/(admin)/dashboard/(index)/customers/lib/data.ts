import prisma from "../../../../../../../lib/prisma";
import { TColumn } from "../columns";

export async function getCustomers() {
  try {
    const customer = await prisma.user.findMany({
      where: {
        role: 'customer'
      },
      include: {
        _count: {
          select: {
            orders: true
          }
        }
      }
    })

    const response: TColumn[] = customer.map((user) => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        total_transaction: user._count.orders
      }
    })

    return response
  } catch (error) {
    console.error('Error fetching customers:', error);
    return []
  }
}