-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Aug 09, 2023 at 09:39 AM
-- Server version: 5.6.51
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_register`
--

-- --------------------------------------------------------

--
-- Table structure for table `employment_statuses`
--

DROP TABLE IF EXISTS `employment_statuses`;
CREATE TABLE IF NOT EXISTS `employment_statuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `employment_status_name` varchar(255) NOT NULL,
  `isRegular` int(11) NOT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employment_statuses`
--

INSERT INTO `employment_statuses` (`id`, `employment_status_name`, `isRegular`, `created_at`, `updated_at`) VALUES
(1, 'Part-time', 0, '2023-01-16 04:03:24', '2023-01-16 04:03:24'),
(2, 'Regular', 1, '2023-01-16 04:03:24', '2023-01-16 04:03:24'),
(3, 'Contractual', 0, '2023-01-16 04:03:57', '2023-01-16 04:03:57'),
(4, 'OJT', 0, '2023-01-16 04:03:57', '2023-01-16 04:03:57'),
(5, 'Probationary', 0, '2023-03-01 03:34:08', '2023-03-01 03:34:08');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_08_05_033411_create_tbl_contact_table', 2),
(6, '2023_08_05_033859_create_tbl_government_table', 3),
(7, '2023_08_05_034212_create_tbl_employee_info_table', 4),
(8, '2023_08_05_034555_create_tbl_logs_table', 5),
(11, '2023_08_08_052601_create_tbl__time_monitor_table', 8),
(12, '2023_08_08_065849_create_tbl_workschedule_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(22, 'App\\Models\\User', 5, 'artamay11@gmail.com_employee', 'e551f4a2fb1e1d06a45f0bbdc52d9dade788ea71230dccb5332388b3b897d0be', '[\"server:employee\"]', '2023-08-09 01:38:47', '2023-08-08 21:34:21', '2023-08-09 01:38:47'),
(23, 'App\\Models\\User', 1, 'artamay1@gmail.com_Admin', 'fa32223d511678e362982c0a47c41a908c5f51d7e28b1f47d168ebb8d25ca9e6', '[\"server:admin\"]', '2023-08-08 23:07:22', '2023-08-08 23:04:31', '2023-08-08 23:07:22');

-- --------------------------------------------------------

--
-- Table structure for table `sites`
--

DROP TABLE IF EXISTS `sites`;
CREATE TABLE IF NOT EXISTS `sites` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `site_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status_id` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sites`
--

INSERT INTO `sites` (`id`, `site_name`, `status_id`, `created_at`, `updated_at`) VALUES
(1, 'SST Team', 1, '2022-12-27 19:02:22', '2023-01-22 06:02:58'),
(2, 'FTDH - TECH SUPPORT (TISA)', 1, '2022-12-27 16:00:00', '2022-12-27 16:00:00'),
(3, 'FTDH - TECH SUPPORT (TIPOLO)', 1, '2022-12-27 16:00:00', '2022-12-27 16:00:00'),
(4, 'BASELINE CENTER', 1, '2022-12-27 16:00:00', '2023-01-22 06:02:52');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

DROP TABLE IF EXISTS `tbl_contact`;
CREATE TABLE IF NOT EXISTS `tbl_contact` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `current_adr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `perma_adr` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_fk` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_fk` (`user_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_contact`
--

INSERT INTO `tbl_contact` (`id`, `current_adr`, `perma_adr`, `contact_number`, `user_fk`, `created_at`, `updated_at`) VALUES
(4, 'P-27 Baan Km Butuan City', 'Banawa', '09123123123', 5, '2023-08-06 23:13:23', '2023-08-06 23:13:23'),
(5, 'P-27 Baan Kme Butuan City', 'Banawa', '09123123123', 6, '2023-08-07 00:56:30', '2023-08-07 00:56:30'),
(6, 'P-231 Bad', 'Cebu', '09123123213', 7, '2023-08-07 19:42:02', '2023-08-07 19:42:02'),
(7, 'P-231 Bad', 'Cebu', '09123123213', 8, '2023-08-08 01:23:15', '2023-08-08 01:23:15');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_employee_info`
--

DROP TABLE IF EXISTS `tbl_employee_info`;
CREATE TABLE IF NOT EXISTS `tbl_employee_info` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `department` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Monthly` double(10,2) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `date_hired` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_resigned` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employee_info_fk` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employee_info_fk` (`employee_info_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_employee_info`
--

INSERT INTO `tbl_employee_info` (`id`, `department`, `position`, `Monthly`, `status`, `date_hired`, `date_resigned`, `employee_info_fk`, `created_at`, `updated_at`) VALUES
(2, 'BASELINE CENTER', 'Web Dev', 18000.00, 1, 'Aug 8 2023', NULL, 5, '2023-08-06 23:13:23', '2023-08-06 23:13:23'),
(3, 'SST Team', 'Web Dev', 18000.00, 1, 'Aug 17 2023', NULL, 6, '2023-08-07 00:56:30', '2023-08-07 00:56:30'),
(4, 'BASELINE CENTER', 'Maintian', 18000.00, 2, 'Aug 9 2023', NULL, 7, '2023-08-07 19:42:02', '2023-08-07 19:42:02'),
(5, 'FTDH - TECH SUPPORT (TISA)', 'Maintian', 18000.00, 2, 'Aug 10 2023', NULL, 8, '2023-08-08 01:23:15', '2023-08-08 01:23:15');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_government`
--

DROP TABLE IF EXISTS `tbl_government`;
CREATE TABLE IF NOT EXISTS `tbl_government` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `SSS` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Pagibig` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TIN` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Philhealth` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `government_user_fk` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `government_user_fk` (`government_user_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_government`
--

INSERT INTO `tbl_government` (`id`, `SSS`, `Pagibig`, `TIN`, `Philhealth`, `government_user_fk`, `created_at`, `updated_at`) VALUES
(4, NULL, NULL, NULL, NULL, 5, '2023-08-06 23:13:23', '2023-08-06 23:13:23'),
(5, NULL, NULL, NULL, NULL, 6, '2023-08-07 00:56:30', '2023-08-07 00:56:30'),
(6, '26372762137', '86217836217', '21376217836', '12367825721', 7, '2023-08-07 19:42:02', '2023-08-07 19:42:02'),
(7, NULL, NULL, NULL, NULL, 8, '2023-08-08 01:23:15', '2023-08-08 01:23:15');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_logs`
--

DROP TABLE IF EXISTS `tbl_logs`;
CREATE TABLE IF NOT EXISTS `tbl_logs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `activity` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_logs_fk` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_logs_fk` (`user_logs_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_logs`
--

INSERT INTO `tbl_logs` (`id`, `activity`, `user_logs_fk`, `created_at`, `updated_at`) VALUES
(1, 'Creatting Account Georgie  Recabo', 1, '2023-08-07 00:56:30', '2023-08-07 00:56:30'),
(2, 'Creatting Account John Jih kaw', 1, '2023-08-07 19:42:02', '2023-08-07 19:42:02'),
(3, 'Time In4:45:22:pm', 5, '2023-08-08 00:45:22', '2023-08-08 00:45:22'),
(4, 'Time In2023-08-08 05:17:14', 5, '2023-08-08 01:17:14', '2023-08-08 01:17:14'),
(5, 'Time In2023-08-08 05:18:54', 5, '2023-08-08 01:18:54', '2023-08-08 01:18:54'),
(6, 'Creatting Account John Jih Kaw', 1, '2023-08-08 01:23:15', '2023-08-08 01:23:15'),
(7, 'Time In2023-08-08 05:28:34', 5, '2023-08-08 01:28:35', '2023-08-08 01:28:35'),
(8, 'Time In2023-08-08 05:30:37', 5, '2023-08-08 01:30:37', '2023-08-08 01:30:37'),
(9, 'Time In2023-08-08 05:31:05', 5, '2023-08-08 01:31:05', '2023-08-08 01:31:05'),
(10, 'Time In', 5, '2023-08-08 01:40:50', '2023-08-08 01:40:50'),
(11, 'Time In', 5, '2023-08-08 01:43:23', '2023-08-08 01:43:23'),
(12, 'Time In', 5, '2023-08-08 18:34:37', '2023-08-08 18:34:37'),
(13, 'Time In', 5, '2023-08-08 21:53:57', '2023-08-08 21:53:57'),
(14, 'Time In', 5, '2023-08-08 21:54:28', '2023-08-08 21:54:28'),
(15, 'Time In', 5, '2023-08-08 22:01:23', '2023-08-08 22:01:23'),
(16, 'Time In', 5, '2023-08-08 22:02:57', '2023-08-08 22:02:57'),
(17, 'Time In', 5, '2023-08-08 22:03:50', '2023-08-08 22:03:50'),
(18, 'Time In', 5, '2023-08-08 22:03:58', '2023-08-08 22:03:58'),
(19, 'Time In', 5, '2023-08-08 22:10:52', '2023-08-08 22:10:52'),
(20, 'Time In', 5, '2023-08-08 22:11:53', '2023-08-08 22:11:53'),
(21, 'Time In', 5, '2023-08-08 22:12:00', '2023-08-08 22:12:00'),
(22, 'Time In', 5, '2023-08-08 22:12:19', '2023-08-08 22:12:19'),
(23, 'Time In', 5, '2023-08-08 22:13:06', '2023-08-08 22:13:06'),
(24, 'Time In', 5, '2023-08-08 22:13:12', '2023-08-08 22:13:12'),
(25, 'Time In', 5, '2023-08-08 22:22:52', '2023-08-08 22:22:52'),
(26, 'Time In', 5, '2023-08-08 22:23:00', '2023-08-08 22:23:00'),
(27, 'Time In', 5, '2023-08-08 22:23:33', '2023-08-08 22:23:33'),
(28, 'Time In', 5, '2023-08-08 22:23:39', '2023-08-08 22:23:39'),
(29, 'Time In', 5, '2023-08-08 22:34:48', '2023-08-08 22:34:48'),
(30, 'Time In', 5, '2023-08-08 22:39:46', '2023-08-08 22:39:46'),
(31, 'Time In', 5, '2023-08-08 22:40:40', '2023-08-08 22:40:40'),
(32, 'Time In', 5, '2023-08-08 22:40:40', '2023-08-08 22:40:40'),
(33, 'Time In', 5, '2023-08-08 22:45:27', '2023-08-08 22:45:27'),
(34, 'Time In', 5, '2023-08-08 23:17:00', '2023-08-08 23:17:00'),
(35, 'Time In', 5, '2023-08-08 23:33:54', '2023-08-08 23:33:54'),
(36, 'Time In', 5, '2023-08-09 00:01:47', '2023-08-09 00:01:47'),
(37, 'Time In', 5, '2023-08-09 00:04:52', '2023-08-09 00:04:52'),
(38, 'Time In', 5, '2023-08-09 00:11:57', '2023-08-09 00:11:57'),
(39, 'Time In', 5, '2023-08-09 00:16:25', '2023-08-09 00:16:25'),
(40, 'Time In', 5, '2023-08-09 00:21:59', '2023-08-09 00:21:59'),
(41, 'Time In', 5, '2023-08-09 00:22:29', '2023-08-09 00:22:29'),
(42, 'Time In', 5, '2023-08-09 00:38:13', '2023-08-09 00:38:13'),
(43, 'Time In', 5, '2023-08-09 00:40:06', '2023-08-09 00:40:06'),
(44, 'Time In', 5, '2023-08-09 00:41:07', '2023-08-09 00:41:07'),
(45, 'Time In', 5, '2023-08-09 00:41:36', '2023-08-09 00:41:36'),
(46, 'Time In', 5, '2023-08-09 00:41:42', '2023-08-09 00:41:42'),
(47, 'Time In', 5, '2023-08-09 00:43:44', '2023-08-09 00:43:44'),
(48, 'Time In', 5, '2023-08-09 00:45:16', '2023-08-09 00:45:16'),
(49, 'Time In', 5, '2023-08-09 00:45:49', '2023-08-09 00:45:49'),
(50, 'Time In', 5, '2023-08-09 00:46:03', '2023-08-09 00:46:03'),
(51, 'Time In', 5, '2023-08-09 00:49:09', '2023-08-09 00:49:09'),
(52, 'Time In', 5, '2023-08-09 00:59:13', '2023-08-09 00:59:13'),
(53, 'Time In', 5, '2023-08-09 01:01:16', '2023-08-09 01:01:16'),
(54, 'Time In', 5, '2023-08-09 01:01:40', '2023-08-09 01:01:40'),
(55, 'Time In', 5, '2023-08-09 01:05:25', '2023-08-09 01:05:25'),
(56, 'Time In', 5, '2023-08-09 01:06:49', '2023-08-09 01:06:49'),
(57, 'Time In', 5, '2023-08-09 01:07:47', '2023-08-09 01:07:47'),
(58, 'Time In', 5, '2023-08-09 01:08:39', '2023-08-09 01:08:39'),
(59, 'Time In', 5, '2023-08-09 01:12:15', '2023-08-09 01:12:15'),
(60, 'Time In', 5, '2023-08-09 01:14:16', '2023-08-09 01:14:16'),
(61, 'Time In', 5, '2023-08-09 01:14:23', '2023-08-09 01:14:23'),
(62, 'Time In', 5, '2023-08-09 01:28:34', '2023-08-09 01:28:34'),
(63, 'Time In', 5, '2023-08-09 01:30:41', '2023-08-09 01:30:41');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_workschedule`
--

DROP TABLE IF EXISTS `tbl_workschedule`;
CREATE TABLE IF NOT EXISTS `tbl_workschedule` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `start_shift` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_shift` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hours_rendered` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl__time_monitor`
--

DROP TABLE IF EXISTS `tbl__time_monitor`;
CREATE TABLE IF NOT EXISTS `tbl__time_monitor` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `TimeIn` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `TimeOut` text COLLATE utf8mb4_unicode_ci,
  `TimeInPM` text COLLATE utf8mb4_unicode_ci,
  `TimeOutPM` text COLLATE utf8mb4_unicode_ci,
  `isBreak` tinyint(4) NOT NULL DEFAULT '0',
  `isOut` tinyint(11) DEFAULT '0' COMMENT '1=AM, 2=PM',
  `isIn` tinyint(11) DEFAULT '0' COMMENT '1=AM, 2 = PM',
  `isLeave` tinyint(4) NOT NULL DEFAULT '0',
  `isAbsent` tinyint(4) NOT NULL DEFAULT '0',
  `hours_render` bigint(20) DEFAULT NULL,
  `minutes_render` bigint(20) DEFAULT NULL,
  `time_user_fk` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `time_user_fk` (`time_user_fk`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl__time_monitor`
--

INSERT INTO `tbl__time_monitor` (`id`, `TimeIn`, `TimeOut`, `TimeInPM`, `TimeOutPM`, `isBreak`, `isOut`, `isIn`, `isLeave`, `isAbsent`, `hours_render`, `minutes_render`, `time_user_fk`, `created_at`, `updated_at`) VALUES
(1, '2023-08-09T15:17:00+08:00', '2023-08-09T16:01:47+08:00', NULL, '2023-08-09T17:28:33+08:00', 1, 0, 2, 0, 0, NULL, NULL, 5, '2023-08-08 23:17:00', '2023-08-08 23:17:00'),
(2, '2023-08-09T16:04:52+08:00', '2023-08-09T16:16:25+08:00', NULL, NULL, 1, 0, 1, 0, 0, NULL, NULL, 5, '2023-08-09 00:04:52', '2023-08-09 00:04:52'),
(3, '2023-08-09T16:21:59+08:00', '2023-08-09T16:22:29+08:00', NULL, NULL, 1, 0, 1, 0, 0, NULL, NULL, 5, '2023-08-09 00:21:59', '2023-08-09 00:21:59'),
(4, '2023-08-09T16:38:13+08:00', '2023-08-09T16:40:06+08:00', NULL, NULL, 1, 0, 2, 0, 0, NULL, NULL, 5, '2023-08-09 00:38:13', '2023-08-09 00:38:13'),
(5, '2023-08-09T16:41:07+08:00', '2023-08-09T16:41:36+08:00', NULL, NULL, 1, 0, 2, 0, 0, NULL, NULL, 5, '2023-08-09 00:41:07', '2023-08-09 00:41:07'),
(6, '2023-08-09T16:41:42+08:00', '2023-08-09T16:43:44+08:00', NULL, NULL, 1, 0, 2, 0, 0, NULL, NULL, 5, '2023-08-09 00:41:42', '2023-08-09 00:41:42'),
(7, '2023-08-09T16:45:16+08:00', '2023-08-09T16:45:49+08:00', NULL, NULL, 1, 0, 2, 0, 0, NULL, NULL, 5, '2023-08-09 00:45:16', '2023-08-09 00:45:16'),
(8, '2023-08-09T16:46:02+08:00', '2023-08-09T16:49:09+08:00', '2023-08-09T17:12:15+08:00', '2023-08-09T17:30:41+08:00', 1, 0, 2, 0, 0, NULL, NULL, 5, '2023-08-09 00:46:03', '2023-08-09 00:46:03');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `suffix` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` tinyint(4) DEFAULT NULL,
  `marital_status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password_text` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` tinyint(4) NOT NULL COMMENT '1=admin, 2=HR, 3= employee',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) UNSIGNED NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `user_code`, `suffix`, `birthday`, `age`, `marital_status`, `password_text`, `role`, `email`, `gender`, `status`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'ITECH-0000', NULL, NULL, NULL, NULL, 'hackfb123', 1, 'artamay1@gmail.com', 'Female', 1, NULL, '$2y$10$pjlM3QJZSQjNLRRlp.8kVe0LkOfhHklgh43KgZFaWiBp4jh/6VLSa', NULL, '2023-08-04 20:03:01', '2023-08-04 20:03:01'),
(5, 'Georgie Mordeno Recabo', 'ITECH-0001', 'Jr', 'Aug 7 2023', 27, NULL, 'Recabo', 3, 'artamay11@gmail.com', 'Male', 2, NULL, '$2y$10$XS1560V7D5ctwWi6MFTPNOac/NEWmGow48K6nh6Z209zwJeEwfJFO', NULL, '2023-08-06 23:13:23', '2023-08-06 23:13:23'),
(6, 'Georgie  Recabo', 'ITECT-556', 'Jr', 'Aug 8 2023', 27, NULL, 'Recabo', 2, 'artamay142141@gmail.com', 'Female', 1, NULL, '$2y$10$mwFuhNU3TvxXKX8f1vS2y.RItx0StoiamSZ06RpqhWgzM43683.yC', NULL, '2023-08-07 00:56:30', '2023-08-07 00:56:30'),
(7, 'John Jih kaw', 'ITECT-918', 'Jr', 'Nov 18 1996', 41, NULL, 'kaw', 2, 'artamay@gmail.com', 'Male', 2, NULL, '$2y$10$fCxqC41V6v4KIU5TKVHeRuAJLUzwo36U0oYJKUjiqNoOPnbkTFahi', NULL, '2023-08-07 19:42:02', '2023-08-07 19:42:02'),
(8, 'John Jih Kaw', 'ITECT-173', 'Jr', 'Aug 22 2023', 41, NULL, 'Kaw', 2, 'artamay1313@gmail.com', 'Female', 1, NULL, '$2y$10$kqe5RY6HEmaJHHvnIdQFlu.I4PnN5gkJEbai01FlDit5q2rR62V72', NULL, '2023-08-08 01:23:15', '2023-08-08 01:23:15');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD CONSTRAINT `tbl_contact_ibfk_1` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_employee_info`
--
ALTER TABLE `tbl_employee_info`
  ADD CONSTRAINT `tbl_employee_info_ibfk_1` FOREIGN KEY (`employee_info_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_government`
--
ALTER TABLE `tbl_government`
  ADD CONSTRAINT `tbl_government_ibfk_1` FOREIGN KEY (`government_user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_logs`
--
ALTER TABLE `tbl_logs`
  ADD CONSTRAINT `tbl_logs_ibfk_1` FOREIGN KEY (`user_logs_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl__time_monitor`
--
ALTER TABLE `tbl__time_monitor`
  ADD CONSTRAINT `tbl__time_monitor_ibfk_1` FOREIGN KEY (`time_user_fk`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
