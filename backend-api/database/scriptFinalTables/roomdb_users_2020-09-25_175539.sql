/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE DATABASE /*!32312 IF NOT EXISTS*/ `roomdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `roomdb`;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `gender` enum('M','F') NOT NULL,
  `bio` varchar(999) DEFAULT NULL,
  `birthday` timestamp NULL DEFAULT NULL,
  `role` varchar(5) DEFAULT NULL,
  `picture` blob,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

INSERT INTO `users` (`id`,`email`,`username`,`first_name`,`last_name`,`gender`,`bio`,`birthday`,`role`,`picture`,`email_verified_at`,`password`,`remember_token`,`created_at`,`updated_at`) VALUES (1,'maildedani9@gmail.com','danilito','Dani','Andrés','M',NULL,NULL,'HOST',NULL,NULL,'$2y$10$SVtGQb9mFS2SD6Ld5GYlxuvuPyjn/DgdnkCKZ0ey87tBoIpXVQSPG',NULL,'2020-09-14 16:44:06','2020-09-14 16:44:06'),(2,'daniandres82@gmail.com','paquito','Paco','Andrés','M',NULL,NULL,'HOST',NULL,NULL,'$2y$10$VwOcXrf7ujsvLRuJ6fWcFel09RKyc3SVINq3u/UXsGmQK0K05BBnu',NULL,'2020-09-22 15:42:31','2020-09-22 15:42:31');

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
