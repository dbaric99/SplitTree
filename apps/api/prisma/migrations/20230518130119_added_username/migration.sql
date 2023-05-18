/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Admin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_username_key" ON "Employee"("username");
