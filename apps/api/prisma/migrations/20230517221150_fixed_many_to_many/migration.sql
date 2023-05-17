/*
  Warnings:

  - You are about to drop the `_CourseToFlag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CourseToFlag" DROP CONSTRAINT "_CourseToFlag_A_fkey";

-- DropForeignKey
ALTER TABLE "_CourseToFlag" DROP CONSTRAINT "_CourseToFlag_B_fkey";

-- DropTable
DROP TABLE "_CourseToFlag";

-- CreateTable
CREATE TABLE "CourseFlag" (
    "id" SERIAL NOT NULL,
    "courseId" INTEGER NOT NULL,
    "flagId" INTEGER NOT NULL,

    CONSTRAINT "CourseFlag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseFlag" ADD CONSTRAINT "CourseFlag_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseFlag" ADD CONSTRAINT "CourseFlag_flagId_fkey" FOREIGN KEY ("flagId") REFERENCES "Flag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
