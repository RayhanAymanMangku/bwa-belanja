/*
  Warnings:

  - You are about to drop the column `productId` on the `OrderDetail` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `OrderProduct` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `OrderProduct` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotal` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `OrderProduct` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_productId_fkey";

-- AlterTable
ALTER TABLE "OrderDetail" DROP COLUMN "productId";

-- AlterTable
ALTER TABLE "OrderProduct" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "subtotal" BIGINT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
