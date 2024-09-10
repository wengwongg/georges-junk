-- DropForeignKey
ALTER TABLE `ProductImage` DROP FOREIGN KEY `ProductImage_productId_fkey`;

-- AlterTable
ALTER TABLE `ProductImage` MODIFY `productId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ProductImage` ADD CONSTRAINT `ProductImage_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
