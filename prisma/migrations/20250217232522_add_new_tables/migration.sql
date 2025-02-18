/*
  Warnings:

  - You are about to drop the `Icon` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `icons` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Icon" DROP CONSTRAINT "Icon_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "icons" JSONB NOT NULL;

-- DropTable
DROP TABLE "Icon";
