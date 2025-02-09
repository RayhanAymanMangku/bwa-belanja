"use client";

import FormDelete from "@/components/(index)/category/form-delete";
import { Button } from "@/components/ui/button";
import { Category } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Category>[] = [
	{
		accessorKey: "name",
		header: "Category name",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const category = row.original;

			return (
				<div className="space-x-4 inline-flex">
					<Button size="sm" asChild>
						<Link
							href={`/dashboard/categories/edit/${category.id}`}
						>
							<Edit className="w-4 h-4 mr-2" /> Edit
						</Link>
					</Button>
					<FormDelete id={category.id} />
				</div>
			);
		},
	},
];
