/*
  Warnings:

  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` FLOAT NOT NULL,
    ADD COLUMN `purchased` BOOLEAN NOT NULL DEFAULT false;
