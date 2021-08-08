-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2021 at 02:16 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smartdealbd_spa`
--

-- --------------------------------------------------------

--
-- Table structure for table `about_and_contacts`
--

CREATE TABLE `about_and_contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `about_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `about_and_contacts`
--

INSERT INTO `about_and_contacts` (`id`, `about_info`, `contact_info`, `created_at`, `updated_at`) VALUES
(1, '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, laoreet sit amet, nunc. Ut sit amet turpis. In est arcu, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Cum sociis natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus. Maecenas eu enim in lorem scelerisque auctor. Ut non erat.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, laoreet sit amet, nunc. Ut sit amet turpis. In est arcu, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Cum sociis natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus. Maecenas eu enim in lorem scelerisque auctor. Ut non erat. Suspendisse fermentum posuere lectus. Fusce vulputate nibh egestas orci. Aliquam lectus. Morbi eget dolor ullamcorper massa pellentesque sagittis. Morbi sit amet quam sed felis. Quisque vest ibulum massa. Nulla ornare. Nulla libero. Donec et mi eu massa ultrices scelerisque. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem.</p><blockquote><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu.</p><p>Ipsum dolor sit</p></blockquote><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec eros tellus, scelerisque nec, rhoncus eget, laoreet sit amet, nunc. Ut sit amet turpis. In est arcu, sollicitudin eu, vehicula venenatis, tempor vitae, est. Praesent vitae dui. Morbi id tellus. Cum sociis natoque penatibus et magnis dis part urient montes, nascetur ridiculus mus. Maecenas eu enim in lorem scelerisque auctor. Morbi sit amet quam sed felis. Quisque vest ibulum massa. Nulla ornare. Nulla libero. Donec et mi eu massa ultrices scelerisque. Nullam ac nisi non eros gravida venenatis. Ut euismod, turpis sollicitudin lobortis pellentesque, libero massa dapibus dui, eu dictum justo urna et mi. Integer dictum est vitae sem.</p>', '<p>Office: House:-36, Lane:6,Block:A, Banaroshi Polli, section-10, Mirpur,Dhaka.</p><p>01886-661149</p><p>Email: madinafasion2017<a href=\"mailto:punokbd@gmail.com\">@gmail.com</a></p>', '2021-01-17 10:35:03', '2021-06-26 06:05:00');

-- --------------------------------------------------------

--
-- Table structure for table `account_purposes`
--

CREATE TABLE `account_purposes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `text` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `account_purposes`
--

INSERT INTO `account_purposes` (`id`, `text`, `created_at`, `updated_at`) VALUES
(1, 'Salary', '2020-11-09 01:22:37', '2020-11-09 01:22:37'),
(2, 'Return Cost (courier)', '2020-11-09 01:22:46', '2020-11-25 13:48:44'),
(7, 'Courier Charge', '2020-11-11 14:54:11', '2020-11-11 14:54:11'),
(8, 'Travel Allowance', '2020-11-11 14:54:23', '2020-11-11 14:54:23'),
(9, 'Supplier Bill', '2020-11-11 14:54:39', '2020-11-11 14:54:39'),
(10, 'Print House Bill', '2020-11-11 14:54:50', '2020-11-28 20:29:38'),
(11, 'Loan Paid', '2020-11-11 14:55:01', '2020-11-11 14:55:01'),
(12, 'Investor Profit', '2020-11-11 14:55:31', '2020-11-18 19:18:38'),
(14, 'Others', '2020-11-11 14:55:54', '2020-11-11 14:55:54'),
(16, 'Office Stationary', '2020-11-13 20:42:06', '2020-11-13 20:42:06'),
(17, 'Reseller Commission', '2020-11-23 14:58:05', '2020-11-23 14:58:05'),
(21, 'Bill Statement', '2021-03-13 04:57:06', '2021-03-13 04:57:06'),
(22, 'Investment Return', '2021-03-15 07:12:27', '2021-03-15 07:12:27');

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `image` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `last_login_time` timestamp NULL DEFAULT NULL,
  `last_logout_time` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `image`, `email`, `password`, `remember_token`, `status`, `last_login_time`, `last_logout_time`, `created_at`, `updated_at`) VALUES
(54, 'Madina Fashion', 'images/admin/tkZzV2skF2pW5RtxZXFZEvXqc2FCLSV05L6sHAWA.png', 's@admin.com', '$2y$10$/3BPsXwWANWgyMSH1rNXv.zEwW017/vwoNDadA.s6f.7zv9Gydp3e', '', 1, '2021-07-13 04:45:03', '2021-07-11 14:07:13', '2020-11-07 10:42:19', '2021-07-13 10:45:03');

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `attributes`
--

INSERT INTO `attributes` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'size', 1, '2020-09-22 10:09:27', '2020-09-22 10:09:27'),
(2, 'color', 1, '2020-10-13 23:26:52', '2020-10-13 23:26:52');

-- --------------------------------------------------------

--
-- Table structure for table `background_and_colors`
--

CREATE TABLE `background_and_colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `primary_color` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `primary_background_color` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu_background_color` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_menu_background_color` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `primary_text_color` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu_text_color` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_menu_text_color` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `background_and_colors`
--

INSERT INTO `background_and_colors` (`id`, `primary_color`, `primary_background_color`, `menu_background_color`, `sub_menu_background_color`, `primary_text_color`, `menu_text_color`, `sub_menu_text_color`, `created_at`, `updated_at`) VALUES
(1, '#4aa316', '#ffffff', '#FCF6F5', '#ffffff', '#000000', '#000000', '#000000', '2021-01-10 05:37:57', '2021-07-04 11:25:28');

-- --------------------------------------------------------

--
-- Table structure for table `balances`
--

CREATE TABLE `balances` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `balances`
--

INSERT INTO `balances` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Bkash Personal', '2021-07-01 10:08:29', '2021-07-01 10:08:29'),
(2, 'Bkash Merchant', '2021-07-01 10:21:54', '2021-07-01 10:21:54'),
(3, 'Nagad Personal', '2021-07-01 10:22:03', '2021-07-01 10:22:03'),
(4, 'Bank Asia', '2021-07-01 10:22:17', '2021-07-01 10:22:17'),
(5, 'Dutch Bangla', '2021-07-01 10:22:31', '2021-07-01 10:22:31'),
(6, 'Axim Bank', '2021-07-01 10:22:39', '2021-07-01 10:22:39'),
(7, 'Nagad Merchant', '2021-07-01 13:22:15', '2021-07-01 13:22:15'),
(8, 'Brack Bank', '2021-07-01 13:22:47', '2021-07-01 13:22:47'),
(9, 'Cash', '2021-07-03 06:43:21', '2021-07-03 06:43:21');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url_1` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner_1` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner_2` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `url_1`, `banner_1`, `url_2`, `banner_2`, `status`, `created_at`, `updated_at`) VALUES
(1, 'https://madinafashion.com.bd', 'images/add_banner/IqZ4RZBOKKZqVSCElpTP8TkTh6nwkW2HvrJTjAop.png', 'https://madinafashion.com.bd', 'images/add_banner/mWBjjmy3WtQ4UjyymMuyfAWle453FGA1apkZsuna.jpg', 1, '2021-03-10 18:00:00', '2021-07-12 11:57:48');

-- --------------------------------------------------------

--
-- Table structure for table `bill_paid_statements`
--

CREATE TABLE `bill_paid_statements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bill_statement_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bill_paid_statements`
--

INSERT INTO `bill_paid_statements` (`id`, `bill_statement_id`, `date`, `comment`, `paid_by`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, '2021-07-03', 'test', '1', 500, '2021-07-03 05:15:26', '2021-07-03 05:15:26');

-- --------------------------------------------------------

--
-- Table structure for table `bill_per_months`
--

CREATE TABLE `bill_per_months` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bill_statement_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `month` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bill_statements`
--

CREATE TABLE `bill_statements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bill_statements`
--

INSERT INTO `bill_statements` (`id`, `name`, `company_name`, `created_at`, `updated_at`) VALUES
(1, 'Internet Bill', 'Mulit-link', '2021-06-26 06:02:48', '2021-06-26 06:02:48');

-- --------------------------------------------------------

--
-- Table structure for table `carriers`
--

CREATE TABLE `carriers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `vacency` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `deadline` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon_image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_selected` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `isSerialize` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `slug`, `icon_image`, `is_selected`, `status`, `isSerialize`, `created_at`, `updated_at`) VALUES
(1, 'Panjabi', '1000-Panjabi', 'images/category/fjhyyULQiTSBcsfiwJ0UXrtL9EdmEVRm6csXAJUO.jpg', 1, 1, NULL, '2020-09-21 19:47:38', '2021-07-07 12:41:57'),
(2, 'T-Shirt', '1001-T-Shirt', 'images/category/7eNYBNs2CSaMKyKHiJF7HKHuu3cx6Vz6vKsEEMze.jpg', 1, 1, NULL, '2020-09-21 19:48:05', '2021-07-07 12:42:26'),
(3, 'Shirt', '1002-Shirt', 'images/category/42V7HvOxFl5RsxzhdXrch1oIBEd12pyVcqWx9tbA.jpg', 1, 1, NULL, '2020-09-21 19:48:15', '2021-07-07 12:41:46'),
(4, 'Pant', '1003-Pant', 'images/category/Epo6QnA1JBinUQxbYXZyhIfkTqUCJrCLtpcp9VnY.jpg', 1, 1, NULL, '2020-09-21 19:48:28', '2021-07-07 12:41:23'),
(5, 'Bed Sheet', '1004-Sheet', 'images/category/ok4d5BxxszRCThyy0FV1G8e4ul3AGKh8BZSUO6YA.jpg', 1, 1, NULL, '2020-09-21 19:48:53', '2021-07-07 12:40:54'),
(6, 'Women\'s Sharee', '1005-Sharee', NULL, 1, 1, NULL, '2020-09-21 19:49:13', '2020-09-21 19:49:13'),
(7, 'Women\'s Three Piece', '1006-Piece', NULL, 1, 1, NULL, '2020-09-21 19:49:30', '2020-09-21 19:49:30'),
(8, 'Women\'s Kurti', '1007-Kurti', 'images/category/K9TbHDY9VlbStUnTZ2C8osNUJuVQ15KPFlPRET14.jpg', 1, 1, NULL, '2020-09-21 19:49:40', '2021-07-07 12:41:37'),
(9, 'Women\'s Two Piece', '1008-Piece', 'images/category/Ox51sIrlw4n9A2zcC9kuDQUxFbMY1UxBvZuHvDL8.jpg', 1, 1, NULL, '2020-09-21 19:49:54', '2021-07-07 12:41:08'),
(10, 'Winter Collection', '1009-Collection', 'images/category/ocVvw5gEGQ5snl0v7mEFrO7GLK8awTqFBp21DcKW.jpg', 1, 1, NULL, '2020-09-21 20:01:28', '2021-07-07 12:40:40'),
(11, 'test', '1010-test', 'images/category/OPAq1ItAH4qPOKg2eAB3ymT6PHbaTsjBGBUX2P6E.png', 0, 0, NULL, '2020-09-21 23:36:04', '2021-07-07 12:02:43'),
(12, 'Couple Dress', '1011-Dress', 'images/category/W3PEcTB7NQHfDE5mNwfjcBT8iAc4mHbzO1v0ohHm.jpg', 1, 1, NULL, '2020-09-28 16:02:34', '2021-07-04 12:40:40');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_charge` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `delivery_charge`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Dhaka', 70, 1, '2020-09-21 20:17:18', '2020-12-01 10:29:45'),
(2, 'Barguna', 120, 1, '2020-09-22 09:25:37', '2020-12-24 01:05:47'),
(3, 'Barisal', 120, 1, '2020-09-22 09:28:14', '2020-12-24 01:05:37'),
(4, 'Bhola', 120, 1, '2020-09-22 09:29:11', '2020-12-24 01:05:28'),
(5, 'Jalokathi', 120, 1, '2020-09-22 09:29:34', '2020-12-24 01:05:18'),
(6, 'Patuakhali', 120, 1, '2020-09-22 09:29:56', '2020-12-24 01:05:02'),
(7, 'Pirojpur', 120, 1, '2020-09-22 09:32:24', '2020-12-24 01:04:50'),
(8, 'Bandorbon', 120, 1, '2020-09-22 09:32:37', '2020-12-24 01:04:42'),
(9, 'Brahmanbaria', 120, 1, '2020-09-22 09:33:21', '2020-12-24 01:04:30'),
(10, 'Chandpur', 120, 1, '2020-09-22 09:53:56', '2020-12-24 01:04:13'),
(11, 'Chottogram', 120, 1, '2020-09-22 09:54:07', '2020-12-24 01:04:03'),
(12, 'Cumilla', 120, 1, '2020-09-22 09:54:23', '2020-12-24 01:03:53'),
(13, 'Cox\'Bazar', 120, 1, '2020-09-22 09:54:36', '2020-12-24 01:03:38'),
(14, 'Feni', 120, 1, '2020-09-22 09:54:43', '2020-12-24 01:03:26'),
(15, 'Khagrachari', 120, 1, '2020-09-22 09:55:16', '2020-12-24 01:03:16'),
(16, 'Lakshmipur', 120, 1, '2020-09-22 09:55:28', '2020-12-24 01:03:04'),
(17, 'Noakhali', 120, 1, '2020-09-22 09:55:44', '2020-12-24 01:02:52'),
(18, 'Rangamati', 120, 1, '2020-09-22 09:55:57', '2020-12-24 01:02:43'),
(19, 'Faridpur', 120, 1, '2020-09-22 09:56:17', '2020-12-24 01:02:32'),
(20, 'Gazipur', 120, 1, '2020-09-22 09:56:28', '2020-12-24 01:02:20'),
(21, 'Gopalgonj', 120, 1, '2020-09-22 09:56:36', '2020-12-24 01:01:58'),
(22, 'Kishorgonj', 120, 1, '2020-09-22 09:57:04', '2020-12-24 01:01:47'),
(23, 'Madaripur', 120, 1, '2020-09-22 09:57:24', '2020-12-24 01:01:39'),
(24, 'Manikgonj', 120, 1, '2020-09-22 09:59:26', '2020-12-24 01:01:27'),
(25, 'Munshigonj', 120, 1, '2020-09-22 09:59:45', '2020-12-24 01:01:20'),
(26, 'Narayangonj', 120, 1, '2020-09-22 10:00:05', '2020-12-24 01:01:14'),
(27, 'Narsingdhi', 120, 1, '2020-09-22 10:00:27', '2020-12-24 00:59:16'),
(28, 'Rajbari', 120, 1, '2020-09-22 10:00:40', '2020-12-24 01:00:59'),
(29, 'Shariatpur', 120, 1, '2020-09-22 10:00:50', '2020-12-24 01:00:51'),
(30, 'Tangail', 120, 1, '2020-09-22 10:01:06', '2020-12-24 01:00:38'),
(31, 'Bagerhat', 120, 1, '2020-09-22 10:01:16', '2020-12-24 01:00:23'),
(32, 'Chuadanga', 120, 1, '2020-09-22 10:01:31', '2020-12-24 01:00:14'),
(33, 'Jessore', 120, 1, '2020-09-22 10:01:49', '2020-12-24 01:00:04'),
(34, 'Jhenaidah', 120, 1, '2020-09-22 10:02:02', '2020-12-24 00:59:52'),
(35, 'Khulna', 120, 1, '2020-09-22 10:02:18', '2020-12-24 00:59:36'),
(36, 'Kusthia', 120, 1, '2020-09-22 10:02:28', '2020-12-24 00:59:24'),
(37, 'Magura', 120, 1, '2020-09-22 10:02:35', '2020-12-24 00:59:00'),
(38, 'Meherpur', 120, 1, '2020-09-22 10:02:52', '2020-12-24 00:58:51'),
(39, 'Narail', 120, 1, '2020-09-22 10:03:03', '2020-12-24 00:58:42'),
(40, 'Satkhira', 120, 1, '2020-09-22 10:03:13', '2020-12-24 00:58:29'),
(41, 'Jamalpur', 120, 1, '2020-09-22 10:03:34', '2020-12-24 00:58:20'),
(42, 'Mymensingh', 120, 1, '2020-09-22 10:03:51', '2020-12-24 00:58:01'),
(43, 'Netrokona', 120, 1, '2020-09-22 10:04:03', '2020-12-24 00:57:48'),
(44, 'Sherpur', 120, 1, '2020-09-22 10:07:38', '2020-12-24 00:57:38'),
(45, 'Bogura', 120, 1, '2020-09-22 10:07:48', '2020-12-24 00:57:30'),
(46, 'Joypurhat', 120, 1, '2020-09-22 10:08:00', '2020-12-24 00:57:18'),
(47, 'Noygaon', 120, 1, '2020-09-22 10:08:18', '2020-12-24 00:57:07'),
(48, 'Natore', 120, 1, '2020-09-22 10:08:25', '2020-12-24 00:56:58'),
(49, 'Chapainawabganj', 120, 1, '2020-09-22 10:08:46', '2020-12-24 00:56:46'),
(50, 'Pabna', 120, 1, '2020-09-22 10:08:54', '2020-12-24 00:56:35'),
(51, 'Rajshahi', 120, 1, '2020-09-22 10:09:01', '2020-12-24 00:56:27'),
(52, 'Sirajgonj', 120, 1, '2020-09-22 10:09:15', '2020-12-24 00:56:05'),
(53, 'Dinajpur', 120, 1, '2020-09-22 10:09:22', '2020-12-24 00:55:49'),
(54, 'Gaibandha', 120, 1, '2020-09-22 10:09:34', '2020-12-24 00:55:38'),
(55, 'Kurigram', 120, 1, '2020-09-22 10:09:49', '2020-12-24 00:55:29'),
(56, 'Lalmonirhat', 120, 1, '2020-09-22 10:09:57', '2020-12-24 00:55:18'),
(57, 'Nilphamari', 120, 1, '2020-09-22 10:10:08', '2020-12-24 00:55:10'),
(58, 'Panchagarh', 120, 1, '2020-09-22 10:10:52', '2020-12-24 00:55:04'),
(59, 'Rangpur', 120, 1, '2020-09-22 10:11:05', '2020-12-24 00:54:58'),
(60, 'Thakurgaon', 120, 1, '2020-09-22 10:11:16', '2020-12-24 00:54:48'),
(61, 'Hobigonj', 120, 1, '2020-09-22 10:11:28', '2020-12-24 00:54:42'),
(62, 'Mowlovibazar', 120, 1, '2020-09-22 10:11:43', '2020-12-24 00:54:37'),
(63, 'Sunamgonj', 120, 1, '2020-09-22 10:12:00', '2020-12-24 00:54:31'),
(64, 'Sylhet', 120, 1, '2020-09-22 10:12:11', '2020-12-24 00:54:09'),
(65, 'savar', 120, 1, '2020-11-29 16:57:55', '2020-12-24 00:54:02'),
(66, 'Outside of Dhaka', 120, 1, '2020-11-29 16:58:19', '2020-12-24 00:53:42');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'কল রিসিভ করেন নাই', 1, '2020-09-21 20:11:19', '2020-12-02 07:33:06'),
(3, 'আবার কল দিতে হবে', 1, '2020-12-02 07:31:12', '2020-12-02 07:31:12'),
(4, 'অফিসে আসবেন', 1, '2020-12-02 07:31:49', '2020-12-02 07:31:49'),
(5, 'পরে জানাবেন', 1, '2020-12-02 07:32:10', '2020-12-02 07:32:10'),
(6, 'এডভান্স করবেন', 1, '2020-12-02 07:33:25', '2020-12-02 07:33:25'),
(7, 'রেডি হয়েছে', 1, '2020-12-03 15:04:17', '2020-12-03 15:04:17'),
(8, 'others', 1, '2020-12-03 15:21:45', '2020-12-03 15:21:45'),
(9, 'Product Received', 1, '2020-12-23 17:45:24', '2020-12-23 17:45:44'),
(10, 'Order Confirmed', 1, '2020-12-23 17:46:04', '2020-12-23 17:46:04');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `phone`, `address`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Daraz.com.bd', '01759416979', 'Dhaka', 1, '2021-06-26 05:37:42', '2021-06-26 05:37:42');

-- --------------------------------------------------------

--
-- Table structure for table `company_assets`
--

CREATE TABLE `company_assets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purchase_date` date NOT NULL,
  `purchase_price` int(11) NOT NULL,
  `present_price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `company_sale_paids`
--

CREATE TABLE `company_sale_paids` (
  `id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `balance_id` int(11) NOT NULL,
  `comment` varchar(250) DEFAULT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company_sale_paids`
--

INSERT INTO `company_sale_paids` (`id`, `company_id`, `date`, `balance_id`, `comment`, `amount`, `created_at`, `updated_at`) VALUES
(4, 3, '2021-06-16', 1, 'test paid', 50, '2021-06-16 09:51:13', '2021-06-16 09:51:13'),
(5, 3, '2021-06-16', 5, 'test paid', 20, '2021-06-16 09:51:51', '2021-06-16 09:51:51'),
(6, 3, '2021-06-16', 1, 'test paid', 20, '2021-06-16 09:53:37', '2021-06-16 09:53:37'),
(7, 3, '2021-06-16', 1, 'test', 20, '2021-06-16 09:53:56', '2021-06-16 09:53:56'),
(8, 1, '2021-06-26', 1, 'paid', 200, '2021-06-26 05:54:59', '2021-06-26 05:54:59'),
(9, 1, '2021-07-11', 1, 'test', 500, '2021-07-11 10:43:34', '2021-07-11 10:43:34'),
(10, 1, '2021-07-11', 6, 'test', 100, '2021-07-11 10:50:17', '2021-07-11 10:50:17');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `message`, `created_at`, `updated_at`) VALUES
(1, 'Katie Conroy', 'info@advicemine.com', 'Hello,\n\nThere’s no denying that starting a business is a huge undertaking. It can be difficult to decide where best to put your dollars to get the biggest ROI.\n\nI thought it might be interesting to do some research on which tech and software investments end up paying for themselves for small business owners, i.e. they’re so beneficial the costs are well worth it!\n\nWould this be a topic you’d be interested in seeing covered in a guest article for your site? \n\nIf so, please let me know, and I’ll start researching and writing.\n\nThanks for considering!\nKatie Conroy\ninfo@advicemine.com\nadvicemine.com', '2020-12-08 08:30:21', '2020-12-08 08:30:21');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `expire_date` date NOT NULL,
  `discount_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_amount` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `code`, `start_date`, `expire_date`, `discount_type`, `discount_amount`, `status`, `created_at`, `updated_at`) VALUES
(1, 'shibbir', '2021-06-17', '2021-06-30', 'percentage', 10, 1, '2021-06-17 08:47:26', '2021-06-17 08:53:36');

-- --------------------------------------------------------

--
-- Table structure for table `couriers`
--

CREATE TABLE `couriers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `couriers`
--

INSERT INTO `couriers` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Sundarban Courier', 1, '2020-09-21 20:09:46', '2020-09-21 20:09:46'),
(2, 'S A Paribahan', 1, '2020-09-21 20:10:02', '2020-09-21 20:10:02'),
(3, 'Kortoa Courier Service (KCS)', 1, '2020-09-21 20:10:16', '2020-11-25 12:31:52'),
(4, 'Janani Courier', 1, '2020-09-21 20:10:31', '2020-09-21 20:10:31'),
(5, 'Mohasagor Express', 1, '2020-09-21 20:10:43', '2020-12-02 09:22:26'),
(6, 'Mr. Peon', 1, '2020-12-02 07:18:07', '2020-12-02 07:18:07'),
(7, 'AJR', 1, '2020-12-02 13:10:39', '2020-12-02 13:10:39'),
(8, 'SR Courier', 1, '2020-12-02 13:10:57', '2020-12-02 13:10:57'),
(9, 'Ahmad Parcel', 1, '2020-12-02 13:13:14', '2020-12-02 13:13:14'),
(10, 'Bangladesh Parcel', 1, '2020-12-14 09:43:43', '2020-12-14 09:43:43'),
(11, 'REDX', 1, '2020-12-24 19:00:14', '2020-12-24 19:00:14');

-- --------------------------------------------------------

--
-- Table structure for table `credits`
--

CREATE TABLE `credits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL COMMENT 'date',
  `purpose` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance_id` int(11) NOT NULL,
  `amount` double(8,2) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `insert_admin_id` int(11) NOT NULL COMMENT 'store_admin_id',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `credits`
--

INSERT INTO `credits` (`id`, `date`, `purpose`, `balance_id`, `amount`, `comment`, `insert_admin_id`, `created_at`, `updated_at`) VALUES
(1, '2021-07-01', 'company sale', 1, 500.00, 'company sale, invoice no  S-3', 54, '2021-07-01 10:41:24', '2021-07-01 10:41:24'),
(2, '2021-07-01', 'Office sale', 2, 400.00, 'Office Sale. Invoice No  S-8', 54, '2021-07-01 10:59:05', '2021-07-01 10:59:05'),
(3, '2021-07-01', 'Order Paid Amount', 3, 900.00, 'Order Paid Amount \'900\' Paid by \'3\'. Order Invoie Number \'41151', 54, '2021-07-01 11:22:23', '2021-07-01 11:22:23'),
(4, '2021-07-01', 'Order Paid Amount', 4, 920.00, 'Order Paid Amount \'920\' Paid by \'4\'. Order Invoie Number \'41152', 54, '2021-07-01 11:54:09', '2021-07-01 11:54:09'),
(5, '2021-07-03', 'test', 6, 1000.00, 'test', 54, '2021-07-03 05:40:07', '2021-07-03 05:49:19'),
(6, '2021-07-03', 'Fund Transfer', 3, 985.00, 'Fund In 1from3. Amount 985. And Transfer Cost 15', 54, '2021-07-03 06:28:05', '2021-07-03 06:28:05'),
(7, '2021-07-03', 'Fund Transfer', 8, 398.00, 'Fund In 3from8. Amount 398. And Transfer Cost 2', 54, '2021-07-03 06:42:44', '2021-07-03 06:42:44'),
(8, '2021-07-03', 'Office sale', 1, 200.00, 'Office Sale. Invoice No  S-9', 54, '2021-07-03 10:35:51', '2021-07-03 10:35:51'),
(9, '2021-07-03', 'Due amount, Paid....', 1, 700.00, 'customer due amount paid.... Extra Hint(Paid Amount: 700 Due Amount: 700', 54, '2021-07-03 12:04:31', '2021-07-03 12:04:31'),
(10, '2021-07-03', 'Office sale', 9, 500.00, 'Office Sale. Invoice No  S-10', 54, '2021-07-03 12:05:12', '2021-07-03 12:05:12'),
(11, '2021-07-03', 'Delievred Order', 9, 170.00, 'Delievred Order. Order Amount BDT 170 Order Invoice number is 41151', 54, '2021-07-03 12:33:17', '2021-07-03 12:33:17'),
(12, '2021-07-03', 'Delievred Order', 7, 970.00, 'Delievred Order. Order Amount BDT 970 Order Invoice number is 41153', 54, '2021-07-03 12:35:22', '2021-07-03 12:35:22'),
(13, '2021-07-03', 'Delievred Order', 2, 1020.00, 'Delievred Order. Order Amount BDT 1020 Order Invoice number is 41154', 54, '2021-07-03 13:23:34', '2021-07-03 13:23:34'),
(14, '2021-07-03', 'Order Paid Amount', 2, 100.00, 'Order Paid Amount \'100\' Paid by \'2\'. Order Invoie Number \'41155', 54, '2021-07-03 13:24:57', '2021-07-03 13:24:57'),
(15, '2021-07-11', 'Daraz.com.bd paid money', 1, 500.00, 'test', 54, '2021-07-11 10:43:34', '2021-07-11 10:43:34'),
(16, '2021-07-11', 'Daraz.com.bd paid money', 6, 100.00, 'test', 54, '2021-07-11 10:50:17', '2021-07-11 10:50:17'),
(17, '2021-07-11', 'Delievred Order', 5, 320.00, 'Delievred Order. Order Amount BDT 320 Order Invoice number is 110', 54, '2021-07-11 12:40:00', '2021-07-11 12:40:00'),
(18, '2021-07-11', 'Delievred Order', 1, 320.00, 'Delievred Order. Order Amount BDT 320 Order Invoice number is 109', 54, '2021-07-11 12:49:06', '2021-07-11 12:49:06'),
(19, '2021-07-11', 'Office sale', 3, 1000.00, 'Office Sale. Invoice No  S-11', 54, '2021-07-11 13:25:54', '2021-07-11 13:25:54'),
(20, '2021-07-11', 'Office sale', 9, 500.00, 'Office Sale. Invoice No  S-12', 54, '2021-07-11 13:29:46', '2021-07-11 13:29:46'),
(21, '2021-07-11', 'Office sale', 9, 500.00, 'Office Sale. Invoice No  S-13', 54, '2021-07-11 13:31:36', '2021-07-11 13:31:36'),
(22, '2021-07-11', 'Office sale', 1, 500.00, 'Office Sale. Invoice No  S-14', 54, '2021-07-11 13:32:44', '2021-07-11 13:32:44'),
(23, '2021-07-11', 'Office sale', 2, 500.00, 'Office Sale. Invoice No  S-15', 54, '2021-07-11 13:34:18', '2021-07-11 13:34:18'),
(24, '2021-07-11', 'Office sale', 4, 100.00, 'Office Sale. Invoice No  S-16', 54, '2021-07-11 13:38:30', '2021-07-11 13:38:30'),
(25, '2021-07-11', 'company sale', 2, 100.00, 'company sale, invoice no  S-17', 54, '2021-07-11 14:05:14', '2021-07-11 14:05:14'),
(26, '2021-07-12', 'Office sale', 3, 500.00, 'Office Sale. Invoice S-18', 54, '2021-07-12 06:40:42', '2021-07-12 06:40:42'),
(27, '2021-07-12', 'Office sale', 2, 100.00, 'Office Sale. Invoice S-19', 54, '2021-07-12 06:46:27', '2021-07-12 06:46:27');

-- --------------------------------------------------------

--
-- Table structure for table `credit_dues`
--

CREATE TABLE `credit_dues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `credit_id` int(11) NOT NULL,
  `due_amount` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT 0,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city_id` int(11) NOT NULL,
  `customer_type` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `user_id`, `name`, `phone`, `address`, `city_id`, `customer_type`, `created_at`, `updated_at`) VALUES
(1, 0, 'Md Bacchu', '01738137213', 'mohammadpur', 1, NULL, '2020-09-22 14:21:49', '2020-09-22 14:21:49'),
(2, 0, 'Fahim', '01795297424', 'Dhaka', 1, NULL, '2020-09-22 15:45:39', '2021-02-16 07:42:42'),
(3, 0, 'A.H.Rashed', '01736667222', 'Mirpur', 1, NULL, '2020-09-23 10:25:13', '2020-09-23 10:25:13'),
(4, 0, 'hmshahadat1994@gmai.com', '01732199992', 'H-36, R-06, Benaroshipoll, Mirpur-10. Dhaka', 1, NULL, '2020-09-23 14:11:58', '2020-09-23 14:11:58'),
(5, 0, 'aliv', '01626592933', 'mirpur 10', 1, NULL, '2020-11-08 09:54:56', '2020-11-08 09:54:56'),
(6, 0, 'atik vai', '01715900066', 'Mirpur -10', 1, NULL, '2020-11-09 18:39:19', '2021-06-13 23:30:50'),
(7, 0, 'alomgir', '01975730185', 'mirpur 12', 1, NULL, '2020-12-01 11:24:31', '2020-12-01 11:24:31'),
(8, 0, 'Anayat', '01837370048', 'Mirpur 10', 1, NULL, '2020-12-01 11:33:57', '2020-12-26 15:15:39'),
(9, 0, 'noman', '01710790397', 'savar', 1, NULL, '2020-12-01 12:11:32', '2020-12-01 12:11:32'),
(10, 0, 'abir', '01638806606', 'cumilla', 12, NULL, '2020-12-01 12:17:55', '2020-12-01 12:17:55'),
(11, 0, 'shoidul islam', '01718712391', 'mirpur 7', 1, NULL, '2020-12-01 12:19:15', '2020-12-01 12:19:15'),
(12, 0, 'bdkroy.com', '01615932477', 'shamoly', 1, NULL, '2020-12-01 13:18:12', '2020-12-01 13:18:12'),
(13, 0, 'mr.masud', '01918635704', 'hajigonj', 10, NULL, '2020-12-02 09:56:50', '2020-12-02 09:56:50'),
(14, 0, 'silvia binta joshim', '01310707492', 'maijdee', 17, NULL, '2020-12-02 10:09:52', '2020-12-02 10:09:52'),
(15, 0, 'md parvej', '01846535585', 'feni', 14, NULL, '2020-12-02 10:12:47', '2020-12-02 10:12:47'),
(16, 0, 'Babu Sir', '01716704014', 'Jashore', 33, NULL, '2020-12-02 10:19:52', '2020-12-02 10:19:52'),
(17, 0, 'এম কামাল উদ্দিন', '01825080111', 'bandorbon', 8, NULL, '2020-12-02 10:23:50', '2020-12-02 10:23:50'),
(18, 0, 'Rifat Habibullah', '01883162147', 'Keraniganj', 1, NULL, '2020-12-02 10:27:03', '2020-12-02 10:27:03'),
(19, 0, 'Imran', '01995927614', 'gazipur', 20, NULL, '2020-12-02 10:29:29', '2020-12-02 10:29:29'),
(20, 0, 'Rafi', '01618535653', 'chakoria', 13, NULL, '2020-12-02 10:33:57', '2020-12-02 10:33:57'),
(21, 0, 'Sujon', '01711428050', 'bogura', 45, NULL, '2020-12-02 10:41:17', '2020-12-02 10:41:17'),
(22, 0, 'rasel', '01867619776', 'mirpur 10', 1, NULL, '2020-12-02 10:49:16', '2020-12-02 10:49:16'),
(23, 0, 'murad', '01836692784', 'feni', 14, NULL, '2020-12-02 11:06:04', '2020-12-02 11:06:04'),
(24, 0, 'M.i. Shamim', '01307220305', 'sunamgonj', 63, NULL, '2020-12-02 11:19:08', '2020-12-02 11:19:08'),
(25, 0, 'Rayhan Islam Nur', '01737091654', 'borishal', 3, NULL, '2020-12-02 11:24:46', '2020-12-02 11:24:46'),
(26, 0, 'alom', '01739195959', 'ishordi', 50, NULL, '2020-12-02 12:13:54', '2020-12-02 12:13:54'),
(27, 0, 'tonu 5768', '01789462187', 'mirpur 10', 1, NULL, '2020-12-02 13:15:28', '2020-12-02 13:15:28'),
(28, 0, 'Tanjijul alalm', '01870612282', 'Kajir deuri', 11, NULL, '2020-12-03 10:05:15', '2020-12-03 10:05:15'),
(29, 0, 'Siam Ahmed', '01747869266', 'pabna Sadar', 50, NULL, '2020-12-03 10:26:01', '2020-12-03 10:26:01'),
(30, 0, 'Ahad', '01992537896', 'Sherpur Sadar', 44, NULL, '2020-12-03 10:36:50', '2020-12-03 10:36:50'),
(31, 0, 'Ahad', '01992537896', 'Sherpur Sadar', 44, NULL, '2020-12-03 10:36:50', '2020-12-03 10:36:50'),
(32, 0, 'Ahosen', '01409191902', 'khatungonj', 11, NULL, '2020-12-03 10:47:36', '2020-12-03 10:47:36'),
(33, 0, 'SHIBLY', '01834131147', 'Chakaria', 13, NULL, '2020-12-03 11:38:46', '2020-12-03 11:38:46'),
(34, 0, 'Shohel tanvir', '01871035319', 'Kurmitola genarel hospital', 1, NULL, '2020-12-03 12:31:06', '2020-12-03 12:31:06'),
(35, 0, 'Md ekramul', '01999257332', 'Santibag 43/1', 1, NULL, '2020-12-03 12:41:29', '2020-12-03 12:41:29'),
(36, 0, 'Md Shamim Hossain', '01906221159', 'Dhaka airport', 1, NULL, '2020-12-03 12:47:31', '2020-12-03 12:47:31'),
(37, 0, 'Rotna', '01409135662', 'Kamrangichor chad moszid', 1, NULL, '2020-12-03 12:52:23', '2020-12-03 12:52:23'),
(38, 0, 'MD Ripon', '01885587710', 'Mawna', 20, NULL, '2020-12-03 14:41:53', '2020-12-03 14:41:53'),
(39, 0, 'নুরুল আজিম', '01708568748', 'চট্রগ্রাম', 11, NULL, '2020-12-03 15:36:30', '2020-12-03 15:36:30'),
(40, 0, 'rajib das', '01704141077', 'narsingdhi', 27, NULL, '2020-12-03 16:08:23', '2020-12-03 16:08:23'),
(41, 0, 'samim', '01772343377', 'bianibazar', 64, NULL, '2020-12-03 18:36:18', '2020-12-03 18:36:18'),
(42, 0, 'Sakil ahamed', '01988319734', 'Dhalpur bou bazar', 1, NULL, '2020-12-03 19:52:12', '2020-12-03 19:52:12'),
(43, 0, 'সুশেন', '01743241766', 'ভৈরব', 3, NULL, '2020-12-05 14:52:10', '2020-12-05 14:52:10'),
(44, 0, 'Johirul Islam Noyon', '01717171323', 'Moymanshing --SUN', 42, NULL, '2020-12-05 15:03:05', '2020-12-05 15:03:05'),
(45, 0, 'Md Abdur sattar', '01831464064', 'keranihat--sun', 11, NULL, '2020-12-05 15:07:08', '2020-12-05 15:07:08'),
(46, 0, 'Jesmin monir', '01817796816', 'আগরাবাদ--sun', 11, NULL, '2020-12-05 15:11:46', '2020-12-05 15:11:46'),
(47, 0, 'nabila', '01757259921', 'companigonj--sun', 17, NULL, '2020-12-05 15:15:51', '2020-12-05 15:15:51'),
(48, 0, 'konika dhar', '01879652819', 'ramu--SUN', 13, NULL, '2020-12-05 15:21:53', '2020-12-05 15:21:53'),
(49, 0, 'আতিকুর ইসলাম', '01705021736', 'mawna --sun', 20, NULL, '2020-12-05 15:27:04', '2020-12-05 15:27:04'),
(50, 0, 'ইলিয়াস', '01611420409', 'ময়মনসিংহ-sun', 42, NULL, '2020-12-05 15:43:50', '2020-12-05 15:43:50'),
(51, 0, 'আমির খান আপন', '01928421864', 'ময়মনসিং--sun', 42, NULL, '2020-12-05 15:46:38', '2020-12-05 15:46:38'),
(52, 0, 'Azmol', '01732058448', 'Zindabazar--sun', 64, NULL, '2020-12-05 15:59:13', '2020-12-05 15:59:13'),
(53, 0, 'Abu raihan Raju', '01717918927', 'Kodomtoli--sa', 64, NULL, '2020-12-05 16:04:31', '2020-12-05 16:04:31'),
(54, 0, 'Mahi', '01302258570', 'mawna--SUN', 20, NULL, '2020-12-05 16:10:26', '2020-12-05 16:10:26'),
(55, 0, 'রাজু', '01755594971', 'খুলনা -sun', 35, NULL, '2020-12-05 16:14:56', '2020-12-05 16:14:56'),
(56, 0, 'Shimu Rahman', '01716229791', 'H. N 36  RN 7 FN. 393 RA Dhanmondi', 1, NULL, '2020-12-05 19:02:46', '2020-12-05 19:02:46'),
(57, 0, 'Tahosin', '01827141896', 'Hazaribagh boro mosjid, Hajaribug, dhaka.', 1, NULL, '2020-12-05 19:04:36', '2020-12-05 19:04:36'),
(58, 0, 'Sumaiya  shakawat', '01971676806', 'Mirpur 12 e block road 8 basa 24 4 tola smne', 1, NULL, '2020-12-05 19:07:59', '2020-12-05 19:07:59'),
(59, 0, 'Riaz', '01747462653', 'Noya polton,mosjid goli,,86/1', 1, NULL, '2020-12-05 19:10:16', '2020-12-05 19:10:16'),
(60, 0, 'Umme Habiba', '01796583030', 'Sk valley,390/B,Opposite of Pallima Sansaad School,Khilgaon.', 1, NULL, '2020-12-05 19:17:51', '2020-12-05 19:17:51'),
(61, 0, 'Abul kashem', '01915413000', 'House no- 90. Tejgaon. Beside SHANTA TOWER. Dhaka.', 1, NULL, '2020-12-05 19:19:36', '2020-12-05 19:19:36'),
(62, 0, 'jorna', '01873821704', 'coxs bazar--sun', 13, NULL, '2020-12-06 15:44:52', '2020-12-06 15:44:52'),
(63, 0, 'Md sujon', '01853999696', 'Amin bazar', 1, NULL, '2020-12-06 16:27:57', '2020-12-06 16:27:57'),
(64, 0, 'ফাহমিদা খানম লিপি', '01746732782', 'Jindabazar --SUN', 64, NULL, '2020-12-06 16:54:06', '2020-12-06 16:54:06'),
(65, 0, 'Jabed omar', '01868340490', 'কামরাঙ্গীরচর থানা জায়গায় নাম আলি নগর চৌরাস্তা', 1, NULL, '2020-12-07 12:05:36', '2020-12-07 12:05:36'),
(66, 0, 'জান্নাত সাইমা', '01719509692', 'চকরিয়া', 13, NULL, '2020-12-07 12:43:22', '2020-12-07 12:43:22'),
(67, 0, 'সোহেল রানা', '01923689058', 'নড়িয়া', 29, NULL, '2020-12-07 12:48:16', '2020-12-07 12:48:16'),
(68, 0, 'আতিকুর রহমান', '01797790474', 'কুড়িগ্রাম', 1, NULL, '2020-12-07 15:24:22', '2020-12-07 15:24:22'),
(69, 0, 'Md Jamil Hossain', '01728067671', 'B-Baria', 9, NULL, '2020-12-07 15:34:45', '2020-12-07 15:34:45'),
(70, 0, 'Rh Rahim', '01849978399', 'sara international Bangla motor o4Link Rood Dhaka1000', 1, NULL, '2020-12-07 19:36:57', '2020-12-07 19:36:57'),
(71, 0, 'Redoy Rehman', '01799362808', '437/B Chirmangoli,noyatola,moghbazar,dhaka,1217', 1, NULL, '2020-12-07 19:58:08', '2020-12-07 19:58:08'),
(72, 0, 'shakil sadid', '01300319347', 'pabna', 50, NULL, '2020-12-08 09:28:39', '2020-12-08 09:28:39'),
(73, 0, 'max fashion', '01798298445', 'debiddar', 12, NULL, '2020-12-08 10:00:40', '2020-12-08 10:00:40'),
(74, 0, 'mamunur rashid', '01739180803', 'shamgram,nobinagor', 9, NULL, '2020-12-08 11:02:01', '2020-12-08 11:02:01'),
(75, 0, 'সালমান মোহাম্মদ', '01760138925', 'মোলভীবাজার', 62, NULL, '2020-12-08 11:15:07', '2020-12-08 11:15:07'),
(76, 0, 'ওয়াসিম আকরাম জয়', '01891494171', 'সুনামগঞ্জ সদর', 63, NULL, '2020-12-08 11:22:08', '2020-12-08 11:22:08'),
(77, 0, 'orpi', '01634610588', 'Sunamganj', 63, NULL, '2020-12-08 11:40:21', '2020-12-08 11:40:21'),
(78, 0, 'Shovo', '01705538537', 'kishorgonj', 22, NULL, '2020-12-08 12:10:40', '2020-12-08 12:10:40'),
(79, 0, 'রহিম শেখ', '01641383695', 'উত্তরা সেক্টর-৬ রোড-৫ হাউস-১৫ !', 1, NULL, '2020-12-08 15:22:21', '2020-12-08 15:22:21'),
(80, 0, 'মোঃ হাসান খান', '01736411193', 'তানোর', 51, NULL, '2020-12-08 16:01:22', '2020-12-08 16:01:22'),
(81, 0, 'Sajjad Hossain', '01714500973', 'Bera', 50, NULL, '2020-12-08 16:08:15', '2020-12-08 16:08:15'),
(82, 0, 'Choya fashion', '01710774508', 'baipel', 1, NULL, '2020-12-08 16:08:23', '2020-12-08 16:08:23'),
(83, 0, '\"Hasi khan \"', '01705571035', 'Bonpara', 48, NULL, '2020-12-08 16:10:57', '2020-12-08 16:10:57'),
(84, 0, 'yousuf munsi', '01767325410', 'Vhola sadaR', 4, NULL, '2020-12-08 16:14:51', '2020-12-08 16:14:51'),
(85, 0, 'HRIDOY', '01301729152', 'MIRPUR 1 MUKTO BANGLA SHOPPING COMPLEX', 1, NULL, '2020-12-08 16:18:28', '2020-12-08 16:18:28'),
(86, 0, 'Azam', '01846231477', 'Cepz', 11, NULL, '2020-12-08 16:23:44', '2020-12-08 16:23:44'),
(87, 0, 'Dbaroaj talukdar', '01762404681', 'olipur', 61, NULL, '2020-12-08 16:30:02', '2020-12-08 16:30:02'),
(88, 0, 'forhed 5469', '01814271229', 'chowmohoni', 17, NULL, '2020-12-08 17:38:47', '2020-12-08 17:38:47'),
(89, 0, 'ওবাইদুল্লাহ', '01683072031', '\"  মার্কেট, তুষার ধারা জিরোপয়েন্ট,পয়েন্ট। রায়েরবাগ থেকে পূর্বদিকে  ঢাকা। \"', 1, NULL, '2020-12-08 18:12:08', '2020-12-08 18:12:08'),
(90, 0, 'forhad', '01878535395', 'Uttar badda satarkul road Jem bary', 1, NULL, '2020-12-08 18:19:37', '2020-12-08 18:19:37'),
(91, 0, 'Aminur Rahman Uzzal', '01878594459', 'jhenaidah', 34, NULL, '2020-12-09 15:56:02', '2020-12-09 15:56:02'),
(92, 0, 'রাজীব', '01811848942', 'খাগড়াছড়ি', 15, NULL, '2020-12-09 16:01:18', '2020-12-09 16:01:18'),
(93, 0, 'Shihab Ahamed', '01832604617', 'Mymensingh--', 42, NULL, '2020-12-09 16:11:16', '2020-12-09 16:11:16'),
(94, 0, '\"Deshapriya Barua  \"', '01878448494', 'CPEZ', 11, NULL, '2020-12-09 16:56:01', '2020-12-09 16:56:01'),
(95, 0, 'Anaya Hossain', '01735293387', 'Zindabaza--', 64, NULL, '2020-12-09 16:58:53', '2020-12-09 16:58:53'),
(96, 0, 'Ronjoy', '01739540023', 'Relief international house#451,3fool Road#8Dosh Baridhara Dhaka', 1, NULL, '2020-12-09 17:47:49', '2020-12-09 17:47:49'),
(97, 0, 'Prof Mohiuddin', '01819214831', '\"House 10 road4 dhanmondi opposite lab aid hospital \"', 1, NULL, '2020-12-09 17:52:08', '2020-12-09 17:52:08'),
(98, 0, 'rafiqul islam', '01319978954', 'আগার-গাও পাসপোর্ট অফিস এর সামনে', 1, NULL, '2020-12-09 17:54:24', '2020-12-09 17:54:24'),
(99, 0, 'Riaz Hasan Raj', '01963518885', 'Shekhertek road 12, Adabor, Mohammadpur.', 1, NULL, '2020-12-09 18:26:15', '2020-12-09 18:26:15'),
(100, 0, 'Md Liton Hossen', '01648315074', 'বঙ্গবাজার আদস্য মারকেট দীতিয় তাল দোকান নাম্বার ৩২. ৩৩', 1, NULL, '2020-12-09 19:38:07', '2020-12-09 19:38:07'),
(101, 0, 'uniq fashion', '01709103828', 'lokkhipur', 16, NULL, '2020-12-10 11:04:42', '2020-12-10 11:04:42'),
(102, 0, 'Hetendro mondal', '01968676819', 'khulna', 35, NULL, '2020-12-10 11:50:17', '2020-12-10 11:50:17'),
(103, 0, 'Md sumon Hawlader', '01710184878', 'Chowrasta', 20, NULL, '2020-12-10 11:52:21', '2020-12-10 11:52:21'),
(104, 0, 'মোঃ ঝন্টু', '01713627672', 'বগুড়া সদর', 45, NULL, '2020-12-10 12:32:41', '2020-12-10 12:32:41'),
(105, 0, 'Hassan', '01704934843', 'রাজশাহী', 51, NULL, '2020-12-10 12:35:02', '2020-12-10 12:35:02'),
(106, 0, 'Fahad', '01787573450', 'Moulvibazar Sadar', 62, NULL, '2020-12-10 12:41:45', '2020-12-10 12:41:45'),
(107, 0, 'Noyon', '01890814941', 'CPEZ --', 11, NULL, '2020-12-10 12:44:56', '2020-12-10 12:44:56'),
(108, 0, 'পিয়াস', '01814990300', 'ফেনী সদর--', 14, NULL, '2020-12-10 12:49:09', '2020-12-10 12:49:09'),
(109, 0, 'Abul Hashem Rasel', '01837816363', 'noakhali sadar--', 17, NULL, '2020-12-10 14:20:20', '2020-12-10 14:20:20'),
(110, 0, 'Ahmed Ashik', '01941189508', 'Darsona -BRANCH', 32, NULL, '2020-12-10 14:47:42', '2020-12-10 14:47:42'),
(111, 0, 'মো নাহিদ হোসেন', '01795353355', 'সিরাজগঞ্জ--', 52, NULL, '2020-12-10 14:50:25', '2020-12-10 14:50:25'),
(112, 0, 'Md Mithun Zaman', '01796836582', 'Rongpur', 59, NULL, '2020-12-10 14:58:46', '2020-12-10 14:58:46'),
(113, 0, 'নাহিদ হাসান', '01793809902', 'লালমনিরহাট সদর', 56, NULL, '2020-12-10 17:32:35', '2020-12-10 17:32:35'),
(114, 0, 'shanto', '01821632285', 'Feni', 14, NULL, '2020-12-10 18:06:46', '2020-12-10 18:06:46'),
(115, 0, 'Vai bon fashion', '01922164270', 'hatikumrul', 52, NULL, '2020-12-10 18:07:51', '2020-12-10 18:07:51'),
(116, 0, 'অনিক হাসান নিরব', '01629142434', '৮১/১ হোসনিদালান রোড চানখারপুল ঢাকা', 1, NULL, '2020-12-10 18:50:53', '2020-12-10 18:50:53'),
(117, 0, 'mehedi hasan', '01891792809', 'Uttor badda, abdullah bag amena fashion', 1, NULL, '2020-12-10 18:52:40', '2020-12-10 18:52:40'),
(118, 0, 'tanvir ahmed', '01847029150', 'navAna toyota 3s center 205-207 tejgon I/A', 1, NULL, '2020-12-10 18:55:53', '2020-12-10 18:55:53'),
(119, 0, 'সাকিব', '01521558158', 'cumilla sador', 12, NULL, '2020-12-12 15:29:29', '2020-12-12 15:29:29'),
(120, 0, 'Irfan hossen', '01641308528', 'Kornelhat-', 11, NULL, '2020-12-12 15:34:42', '2020-12-12 15:34:42'),
(121, 0, 'Afra Tahira', '01717657391', 'Nilphamari --', 57, NULL, '2020-12-12 15:36:35', '2020-12-12 15:36:35'),
(122, 0, 'Nur Hossion', '01723683730', 'narayangonj', 26, NULL, '2020-12-12 15:44:34', '2020-12-12 15:44:34'),
(123, 0, 'মোঃ মোশারফ হোসেন', '01714220934', 'সুনামগঞ্জ-', 63, NULL, '2020-12-12 15:54:02', '2020-12-12 15:54:02'),
(124, 0, 'Shanto', '01814495358', 'kandirpar-', 12, NULL, '2020-12-12 15:57:07', '2020-12-12 15:57:07'),
(125, 0, 'Jinnah', '01822327302', 'Khulna Sadar', 35, NULL, '2020-12-12 16:00:29', '2020-12-12 16:00:29'),
(126, 0, 'Rakib', '01636373928', 'Feni Sador', 14, NULL, '2020-12-12 16:03:46', '2020-12-12 16:03:46'),
(127, 0, 'Alok dhar', '01872377790', 'কেরানীহাট', 11, NULL, '2020-12-12 16:07:33', '2020-12-12 16:07:33'),
(128, 0, 'Biplob Sarkar', '01711903810', 'Netrakona', 43, NULL, '2020-12-12 16:12:20', '2020-12-12 16:12:20'),
(129, 0, 'Fahima', '01642769835', 'khagrachari --', 15, NULL, '2020-12-12 16:20:19', '2020-12-12 16:20:19'),
(130, 0, 'Abu  yusuf Masbah', '01850787615', 'pabna sador-', 50, NULL, '2020-12-12 16:24:57', '2020-12-12 16:24:57'),
(131, 0, 'Munna Talukdar', '01772295468', 'Tangail sodor--', 30, NULL, '2020-12-12 16:33:13', '2020-12-12 16:33:13'),
(132, 0, 'Sawpan Biswas Sawpan', '01723956548', 'গোপাল গঞ্জ-', 21, NULL, '2020-12-12 16:40:13', '2020-12-12 16:40:13'),
(133, 0, 'Mohammad Kashem', '01829270582', 'Chokoria-', 13, NULL, '2020-12-12 16:47:01', '2020-12-12 16:47:01'),
(134, 0, 'Md Tanvir Rayhan Nahid', '01744558353', 'bera-', 50, NULL, '2020-12-12 16:53:40', '2020-12-12 16:53:40'),
(135, 0, 'এ,কে, দেওয়ান', '01828856222', 'রাংগামাটি', 18, NULL, '2020-12-12 18:04:57', '2020-12-12 18:04:57'),
(136, 0, 'Tanvir Ahmad', '01771433497', 'মেহেন্দীগঞ্জ', 3, NULL, '2020-12-12 18:07:11', '2020-12-12 18:07:11'),
(137, 0, 'Md. Zahirul', '01714288351', 'Uttara, jashim uddin mor', 1, NULL, '2020-12-12 18:50:20', '2020-12-12 18:50:20'),
(138, 0, 'sathi khan', '01777982394', 'vashantek baganbari 121/1 a ঢাকা', 1, NULL, '2020-12-12 18:51:31', '2020-12-12 18:51:31'),
(139, 0, 'poresh', '01770390508', 'Gobindogonj', 54, NULL, '2020-12-13 10:12:26', '2020-12-13 10:12:26'),
(140, 0, 'rimon', '01303587206', 'Noagaon sador', 47, NULL, '2020-12-13 16:09:37', '2020-12-13 16:09:37'),
(141, 0, 'Rakibul hasan', '01705070227', 'chowrasta--', 20, NULL, '2020-12-13 16:26:19', '2020-12-13 16:26:19'),
(142, 0, 'Forhad', '01773322022', 'Rangpur sadar', 59, NULL, '2020-12-13 16:39:48', '2020-12-13 16:39:48'),
(143, 0, 'Mahafuz', '01628717908', 'Gaibandha Sador--', 54, NULL, '2020-12-13 16:45:05', '2020-12-13 16:45:05'),
(144, 0, 'Rezvi Hasan', '01846590693', 'Agraba--', 11, NULL, '2020-12-13 16:57:05', '2020-12-13 16:57:05'),
(145, 0, 'Sagor sultan', '01749136708', 'moulovibazar--', 62, NULL, '2020-12-13 17:10:32', '2020-12-13 17:10:32'),
(146, 0, 'Prince shaha', '01988620683', 'Agrabad--', 11, NULL, '2020-12-13 17:15:54', '2020-12-13 17:15:54'),
(147, 0, 'মোজাহের অালম', '01815663168', 'অাগ্রাবাদ', 11, NULL, '2020-12-13 17:18:36', '2020-12-13 17:18:36'),
(148, 0, 'saba  parvez', '01795849700', 'naogan--', 47, NULL, '2020-12-13 17:24:24', '2020-12-13 17:24:24'),
(149, 0, 'Khadiza', '01744767435', 'Lamabazar', 64, NULL, '2020-12-13 17:32:17', '2020-12-13 17:32:17'),
(150, 0, 'Nobab fashion', '01740260806', 'swarupkathi', 7, NULL, '2020-12-13 17:42:48', '2020-12-13 17:42:48'),
(151, 0, 'Rimon das', '01635076210', 'Halishohar', 11, NULL, '2020-12-13 17:53:02', '2020-12-13 17:53:02'),
(152, 0, 'Razib', '01724186169', 'Rajshahi', 51, NULL, '2020-12-13 17:55:06', '2020-12-13 17:55:06'),
(153, 0, 'Rifat ahmed', '01625646446', 'Gabtola mosjid, Moneshwar road, jighatala, Dhanmandi,  Dhaka', 1, NULL, '2020-12-13 19:15:27', '2020-12-13 19:15:27'),
(154, 0, 'Sharmin', '01743957281', 'Mohammad pur nobi nogor housing', 1, NULL, '2020-12-13 19:18:52', '2020-12-13 19:18:52'),
(155, 0, 'Paishiu marma', '01855910596', 'mirpur 11 road 8 line 2 home 4 nannu market', 1, NULL, '2020-12-13 19:22:35', '2020-12-13 19:22:35'),
(156, 0, 'Md Nehal', '01914690107', 'Section-12, Block-Dha, Pallabi, Mirpur, Dhaka-1216', 1, NULL, '2020-12-13 19:24:35', '2020-12-13 19:24:35'),
(157, 0, 'Sabuj', '01996810971', '\"Bashundhara city shopping ,Level-5,Block-B Shop-37\"', 1, NULL, '2020-12-13 19:26:26', '2020-12-13 19:26:26'),
(158, 0, 'জীবন আহমেদ সরকার', '01400786443', 'খিলগাঁও আনসার হেডকোটারের সামনে', 1, NULL, '2020-12-13 19:28:11', '2020-12-13 19:28:11'),
(159, 0, 'Babu', '01608378507', '\"Road ---13,House---46 Uttara --Sector 4,Dhaka \"', 1, NULL, '2020-12-13 19:29:26', '2020-12-13 19:29:26'),
(160, 0, 'মোহাম্মদ রাকিব', '01626791066', 'ধানমন্ডি 27 মোহাম্মদীয়া সুপার মার্কেট,সাথে ইউনিভার্সিটি', 1, NULL, '2020-12-13 19:31:01', '2020-12-13 19:31:01'),
(161, 0, 'Ador', '01303663907', 'mirpur 1 , block D, road 1, sarang bari', 1, NULL, '2020-12-13 19:33:15', '2020-12-13 19:33:15'),
(162, 0, 'আরফিন শুভ', '01940379685', 'ঢাকা লালবাগ শাহী মসজিদের পাশে', 1, NULL, '2020-12-13 19:36:16', '2020-12-13 19:36:16'),
(163, 0, 'monzu', '01611440333', '\"Bosundora residensial aria B-A,H-125,R-02\"', 1, NULL, '2020-12-13 19:42:52', '2020-12-13 19:42:52'),
(164, 0, 'Punam Purna', '01878539901', 'sirajgonj', 52, NULL, '2020-12-14 10:18:23', '2020-12-14 10:18:23'),
(165, 0, 'Mominul', '01712815204', 'rajshahi', 51, NULL, '2020-12-14 10:23:07', '2020-12-14 10:23:07'),
(166, 0, 'Sujon', '01630624405', 'narayongonj', 26, NULL, '2020-12-14 12:12:06', '2020-12-14 12:12:06'),
(167, 0, 'আজমীর', '01765549591', 'নরসিংদি--', 27, NULL, '2020-12-14 14:51:13', '2020-12-14 14:51:13'),
(168, 0, 'নাহিদ', '01842324539', 'আগ্রাবাদ--', 11, NULL, '2020-12-14 14:56:09', '2020-12-14 14:56:09'),
(169, 0, 'Md.Abdullah', '01609239729', 'Bhairab', 22, NULL, '2020-12-14 15:06:10', '2020-12-14 15:06:10'),
(170, 0, 'Hridoy', '01883295142', 'Agrabad,', 11, NULL, '2020-12-14 15:09:35', '2020-12-14 15:09:35'),
(171, 0, 'Aminul Haque Saurav', '01741423529', 'Habiganj sadar', 61, NULL, '2020-12-14 15:12:07', '2020-12-14 15:12:07'),
(172, 0, 'আবু বকর', '01749478892', 'ছাতক--', 64, NULL, '2020-12-14 15:14:43', '2020-12-14 15:14:43'),
(173, 0, 'Md maruf', '01765607342', 'sahajadpur', 52, NULL, '2020-12-14 15:24:01', '2020-12-14 15:24:01'),
(174, 0, 'মুহাম্মদ নেছার উদ্দিন', '01845466446', 'হাজীগঞ্জ--', 10, NULL, '2020-12-14 15:27:19', '2020-12-14 15:27:19'),
(175, 0, 'Farhana Akram', '01717504404', 'Flat-A4, 2/4Shaptak AkaAzim, Lalmatia D ব্লচক', 1, NULL, '2020-12-14 17:46:43', '2020-12-14 17:46:43'),
(176, 0, 'Tuhin', '01630499740', 'In front of Taj Uddin School, 2 no road, Nondipara, Madartek, Dhaka.', 1, NULL, '2020-12-14 18:02:39', '2020-12-14 18:02:39'),
(177, 0, 'গাউছ মিয়া', '01516782589', '৬/১ আব্দুল হাদি লেন,বংশাল,ঢাকা।', 1, NULL, '2020-12-14 18:04:45', '2020-12-14 18:04:45'),
(178, 0, 'Anik khan', '01732957370', 'Dhaka,sodorghat, jogonath University', 1, NULL, '2020-12-14 18:07:38', '2020-12-14 18:07:38'),
(179, 0, 'Sanjida', '01743787652', 'Jatrabari sohid faruk rod', 1, NULL, '2020-12-14 18:12:31', '2020-12-14 18:12:31'),
(180, 0, 'shopna', '01408969515', 'Manik nagor, ওয়াসা রোড  এর ব্রীজ . Dhaka', 1, NULL, '2020-12-14 18:14:18', '2020-12-14 18:14:18'),
(181, 0, 'shadek hossain', '01819508860', 'Konapara ,farmer mour,samsul houque khan school and college,jatrabari', 1, NULL, '2020-12-14 18:35:55', '2020-12-14 18:35:55'),
(182, 0, 'আল আমিন', '01408977134', 'ময়মনসিংহ -', 42, NULL, '2020-12-15 15:24:00', '2020-12-15 15:24:00'),
(183, 0, 'rafiqul auwar', '01817706994', 'nasirabad--', 11, NULL, '2020-12-15 15:27:40', '2020-12-15 15:27:40'),
(184, 0, 'আবির', '01959593067', 'SAVAR', 1, NULL, '2020-12-15 15:30:10', '2020-12-15 15:30:10'),
(185, 0, 'Md sainul Huque mithi', '01782000613', 'Rajshahi--', 51, NULL, '2020-12-15 16:33:51', '2020-12-15 16:33:51'),
(186, 0, 'Rezbi Ahmed', '01893838500', 'coute house sittite razar dauri school ar pasy katoali thana dhak joj coute ar picy', 1, NULL, '2020-12-15 18:34:12', '2020-12-15 18:34:12'),
(187, 0, 'Mr.Hasin', '01711523577', '\"APT 5B ASHALOTA ,9 / 12  Iqbal Rd ,MohammadPur. ,Dhaka\"', 1, NULL, '2020-12-15 19:18:51', '2020-12-15 19:18:51'),
(188, 0, 'সুমন দাস', '01913134436', 'শেরপুর', 44, NULL, '2020-12-17 15:18:40', '2020-12-17 15:18:40'),
(189, 0, 'Shiam', '01874548786', 'Ishwardi --', 50, NULL, '2020-12-17 15:35:20', '2020-12-17 15:35:20'),
(190, 0, 'ashraf   tanvir', '01875468344', 'sonagazi,', 14, NULL, '2020-12-17 15:39:49', '2020-12-17 15:39:49'),
(191, 0, 'Jafor Alom Joy', '01746916313', 'TC Market, Chowmuhona Moulvibazar', 64, NULL, '2020-12-17 15:46:22', '2020-12-17 15:46:22'),
(192, 0, 'Neaz mohammad', '01681385073', 'Faridpur Sadar', 19, NULL, '2020-12-17 15:53:34', '2020-12-17 15:53:34'),
(193, 0, 'Neaz mohammad', '01681385073', 'Faridpur Sadar', 19, NULL, '2020-12-17 15:53:34', '2020-12-17 15:53:34'),
(194, 0, 'Musfika mostafa', '01717713648', '\"House: 16/1/A, Level-3, Primary School Road, Road No-2, Kallyanpur, Dhaka. Note: Shahi Mashjid r Opposite Goli.\"\"\"', 1, NULL, '2020-12-17 17:47:51', '2020-12-17 17:47:51'),
(195, 0, 'sani', '01636666777', 'Nasirabad', 11, NULL, '2020-12-19 16:01:43', '2020-12-19 16:01:43'),
(196, 0, 'RUBEL', '01827047044', 'COX,S BAZR-', 13, NULL, '2020-12-19 16:25:02', '2020-12-19 16:25:02'),
(197, 0, 'Md Kamrul Islam', '01308152108', 'Thakurgaon  -', 60, NULL, '2020-12-19 16:27:57', '2020-12-19 16:27:57'),
(198, 0, 'md sakil Ahmed', '01725383384', 'Bhaluka--', 42, NULL, '2020-12-19 16:31:06', '2020-12-19 16:31:06'),
(199, 0, 'Md abu naeem', '01761081492', 'Munsiganj--', 25, NULL, '2020-12-19 16:34:07', '2020-12-19 16:34:07'),
(200, 0, 'seam ahmed', '01860444472', 'bhairab--', 22, NULL, '2020-12-19 16:37:59', '2020-12-19 16:37:59'),
(201, 0, 'Dr. Pias', '01717450607', 'Rajshahi--', 51, NULL, '2020-12-19 16:41:14', '2020-12-19 16:41:14'),
(202, 0, 'chandana kularathne', '01313037450', 'Ishwardi', 50, NULL, '2020-12-19 16:44:35', '2020-12-19 16:44:35'),
(203, 0, 'adnan', '01733974183', 'maijdee--', 17, NULL, '2020-12-19 16:51:45', '2020-12-19 16:51:45'),
(204, 0, 'সানজিদা ইসলাম', '01941609599', 'কুমিল্লা--', 12, NULL, '2020-12-19 17:07:54', '2020-12-19 17:07:54'),
(205, 0, 'aminul rassel', '01533341631', 'Bonsree rampur, Road # 1 Block # E,  House # 38.  Dhaka', 1, NULL, '2020-12-19 17:55:19', '2020-12-19 17:55:19'),
(206, 0, 'Arif', '01911447273', '\" mohakhai bus terminal,Dhaka Transport\"', 1, NULL, '2020-12-19 17:56:46', '2020-12-19 17:56:46'),
(207, 0, 'sajive moynul', '01624608925', 'shop no:129, Concord Arcadia shopping mall, Road no:4,Dhanmondi, Dhaka.', 1, NULL, '2020-12-19 18:15:19', '2020-12-19 18:15:19'),
(208, 0, 'Atik', '01739925803', 'Dhaka cantonment Dhaka,Matikata Bazar,55/1 Hazi Complex building', 1, NULL, '2020-12-19 18:17:40', '2020-12-19 18:17:40'),
(209, 0, 'Misti', '01878505035', '40/K Satish Sarkar Road,Gandaria,Dhaka- 1204', 1, NULL, '2020-12-19 18:22:40', '2020-12-19 18:22:40'),
(210, 0, 'বুজ কোরবান', '01996730773', 'Madaripur pyran Bajar--', 23, NULL, '2020-12-20 11:12:07', '2020-12-20 11:12:07'),
(211, 0, 'Tayef Ahmed', '01742978893', 'zindabaza--', 64, NULL, '2020-12-20 11:16:11', '2020-12-20 11:16:11'),
(212, 0, 'Al-Amin Hossain', '01641738305', 'haluaghat-', 42, NULL, '2020-12-20 11:28:11', '2020-12-20 11:28:11'),
(213, 0, 'nabi', '01838239880', 'bandorbon sadar', 8, NULL, '2020-12-20 13:08:59', '2020-12-20 13:08:59'),
(214, 0, 'Nipa', '01647805297', 'b-baria', 9, NULL, '2020-12-20 15:40:08', '2020-12-20 15:40:08'),
(215, 0, 'ayesha siddika', '01828124970', 'chandpur', 10, NULL, '2020-12-20 15:43:53', '2020-12-20 15:43:53'),
(216, 0, 'amir', '01703973035', 'faridpur', 19, NULL, '2020-12-20 18:04:05', '2020-12-20 18:04:05'),
(217, 0, 'বিপুল', '01783016807', 'মতিঝিল', 1, NULL, '2020-12-20 18:44:48', '2020-12-20 18:44:48'),
(218, 0, 'মোমিতুর রহমান', '01723065572', 'ময়মনসিংহ', 42, NULL, '2020-12-20 18:49:05', '2020-12-20 18:49:05'),
(219, 0, 'Md Abdus Sobhan', '01780570640', 'thakurgao', 60, NULL, '2020-12-21 14:23:45', '2020-12-21 14:23:45'),
(220, 0, 'Shourav', '01872666531', 'cumilla', 12, NULL, '2020-12-21 14:26:55', '2020-12-21 14:26:55'),
(221, 0, 'Md muin', '01742276184', 'faridpur sadar--', 19, NULL, '2020-12-21 14:59:03', '2020-12-21 14:59:03'),
(222, 0, 'Sujit', '01302930365', 'Narsingdi --', 27, NULL, '2020-12-21 15:26:40', '2020-12-21 15:26:40'),
(223, 0, 'Rimi', '01766066176', 'nayerpull', 64, NULL, '2020-12-21 15:45:41', '2020-12-21 15:45:41'),
(224, 0, 'Masum mia', '01912023907', 'mirpur 12 kolapani 6 tola germents er samne', 1, NULL, '2020-12-22 18:18:03', '2020-12-22 18:18:03'),
(225, 0, 'Lisa Chowdhury', '01306373213', 'পাবনা জেলার বনওয়ারী নগর ফরিদপুর থানা', 50, NULL, '2020-12-23 11:55:24', '2020-12-23 11:55:24'),
(226, 0, 'shamim', '01719438481', 'Potuikhali', 6, NULL, '2020-12-24 16:16:34', '2020-12-24 16:16:34'),
(227, 0, 'nobel', '01690032635', 'kompanigonj', 17, NULL, '2020-12-24 16:19:51', '2020-12-24 16:19:51'),
(228, 0, 'nazmul', '01795632013', 'Srimongal', 64, NULL, '2020-12-24 16:27:51', '2020-12-24 16:27:51'),
(229, 0, 'abu hanif', '01718454069', 'potuiakhali', 6, NULL, '2020-12-24 16:29:35', '2020-12-24 16:29:35'),
(230, 0, 'Megla akash', '01942012932', 'mirpur 2 studium er 2 no gate', 1, NULL, '2020-12-24 17:26:47', '2020-12-24 17:26:47'),
(231, 0, 'Motiur rahman', '01830383671', 'khagrachori', 15, NULL, '2020-12-24 17:38:19', '2020-12-24 17:38:19'),
(232, 0, 'emon', '01756728559', 'Bogura', 45, NULL, '2020-12-24 17:40:18', '2020-12-24 17:40:18'),
(233, 0, 'prince', '01643816379', 'sonir akhra', 1, NULL, '2020-12-24 17:46:22', '2020-12-24 17:46:22'),
(234, 0, 'manos', '01675563886', '\"HOUSE -1005, ROAD - 9,  AVENUE -11. MIRPUR DOHS  MIRPUR 12 ,1st floor \"', 1, NULL, '2020-12-24 17:48:43', '2020-12-24 17:48:43'),
(235, 0, 'sojib', '01764940101', 'kuakata', 40, NULL, '2020-12-24 17:55:33', '2020-12-24 17:55:33'),
(236, 0, 'Afrose Mahmud Bonna', '01768529158', 'খিলগাঁও,গোড়ান বাজার,হাড় ভাঙ্গার মোড়', 1, NULL, '2020-12-24 17:58:07', '2020-12-24 17:58:07'),
(237, 0, 'Janet alom', '01716563948', 'Nayerpul', 64, NULL, '2020-12-26 12:35:59', '2020-12-26 12:35:59'),
(238, 0, 'saddam', '01791430115', 'munsigonj', 1, NULL, '2020-12-26 14:35:41', '2020-12-26 14:35:41'),
(239, 0, 'আরিয়ান', '01646905944', 'মানিকগঞ্জ --', 24, NULL, '2020-12-26 15:41:03', '2020-12-26 15:41:03'),
(240, 0, 'বাবু', '01767747452', 'জামালপুর--', 41, NULL, '2020-12-26 16:34:34', '2020-12-26 16:34:34'),
(241, 0, 'Akash Chowdhury', '01779531517', 'Habiganj --', 64, NULL, '2020-12-26 16:36:12', '2020-12-26 16:36:12'),
(242, 0, 'Sabbir Ahmad', '01789118559', 'Chapai Nawabganj--', 49, NULL, '2020-12-26 17:00:09', '2020-12-26 17:00:09'),
(243, 0, 'Sajid', '01841019307', 'Bahaddarhat-', 11, NULL, '2020-12-26 17:35:18', '2020-12-26 17:35:18'),
(244, 0, 'Tariqul islam', '01521257804', 'h-11,b-f,r-2 kalowalapara Mirpur-1 Dhaka 1216', 1, NULL, '2020-12-26 18:07:15', '2020-12-26 18:07:15'),
(245, 0, 'Nadiya Rahman', '01817234553', 'Narayanganj  rupayan Mozammel Haque school er samne', 1, NULL, '2020-12-26 18:10:12', '2020-12-26 18:10:12'),
(246, 0, 'মুন', '01922914345', 'মগবাজার ওয়ারলেস বেপারি গলির শেষ মাথায়', 1, NULL, '2020-12-26 18:13:40', '2020-12-26 18:13:40'),
(247, 0, 'Rakib hasan', '01630299685', '37no Tejkunipara Tejgaon Dhaka: 1215', 1, NULL, '2020-12-26 18:15:19', '2020-12-26 18:15:19'),
(248, 0, 'Shanto', '01872178541', 'uttor badda, Dhaka', 1, NULL, '2020-12-26 18:17:00', '2020-12-26 18:17:00'),
(249, 0, 'Tania', '01859827141', 'bhairab--rdx', 22, NULL, '2020-12-27 11:38:36', '2020-12-27 11:38:36'),
(250, 0, 'Ridoy', '01859014739', 'Uttara dhaka....Alauddin towershop', 1, NULL, '2020-12-27 12:16:46', '2020-12-27 12:16:46'),
(251, 0, 'Md Musfiqur rahman', '01688138251', 'flat #F6,Building -C2(Protik Ruposree Society), Road #12/4, Block-j,South Banasree,Khilgaon,Dhaka', 1, NULL, '2020-12-27 12:23:16', '2020-12-27 12:23:16'),
(252, 0, 'Lipi', '01714161575', 'Sukanto Mohammad isrial market, 7no jummon bepari len, Midford road, chak bazar, Dhaka', 1, NULL, '2020-12-27 12:25:50', '2020-12-27 12:25:50'),
(253, 0, 'Shubro', '01303192525', 'osmaninogar', 64, NULL, '2020-12-28 10:16:43', '2020-12-28 10:16:43'),
(254, 0, 'Suranjan', '01753518946', 'Gobindogon', 64, NULL, '2020-12-28 10:22:05', '2020-12-28 10:22:05'),
(255, 0, 'Bellal khan', '01612309886', 'Srimongal', 64, NULL, '2020-12-28 10:40:27', '2020-12-28 10:40:27'),
(256, 0, 'jhiku', '01728513002', 'rampura obda road', 1, NULL, '2020-12-28 15:16:50', '2020-12-28 15:16:50'),
(257, 0, 'জুয়েল', '01595513944', 'ময়মনসিংহ--', 42, NULL, '2020-12-28 15:28:47', '2020-12-28 15:28:47'),
(258, 0, 'হিমেল ফারাবি', '01756262467', 'পাবনা--', 50, NULL, '2020-12-28 15:30:24', '2020-12-28 15:30:24'),
(259, 0, 'আফরান আরাব শান্ত', '01311758113', 'ময়মনসিংহ সদর -', 42, NULL, '2020-12-28 15:32:27', '2020-12-28 15:32:27'),
(260, 0, 'korim', '01741015854', 'Agrabad', 11, NULL, '2020-12-28 16:06:28', '2020-12-28 16:06:28'),
(261, 0, 'Naim islam', '01312803630', 'Uttara 12 no sec.nalvog maa international expoter house', 1, NULL, '2020-12-28 17:38:58', '2020-12-28 17:38:58'),
(262, 0, 'Lina', '01716148399', 'Magura', 37, NULL, '2020-12-29 10:48:39', '2020-12-29 10:48:39'),
(263, 0, 'shohel', '01317461408', 'savar', 1, NULL, '2020-12-29 11:27:50', '2020-12-29 11:27:50'),
(264, 0, 'Rahmot', '01814944701', 'Chowmuhani', 17, NULL, '2020-12-29 11:37:03', '2020-12-29 11:37:03'),
(265, 0, 'majedul', '01739186976', 'tangail', 30, NULL, '2020-12-29 11:46:56', '2020-12-29 11:46:56'),
(266, 0, 'Hridoy', '01819673652', 'b-baria', 9, NULL, '2020-12-29 12:18:16', '2020-12-29 12:18:16'),
(267, 0, 'sargent shariar', '01319441116', 'jossore', 33, NULL, '2020-12-29 12:23:02', '2020-12-29 12:23:02'),
(268, 0, 'Abdullah Al Matuf', '01912643849', 'agrabad', 11, NULL, '2020-12-29 14:15:43', '2020-12-29 14:15:43'),
(269, 0, 'sumaiya khanom mim', '01716572023', 'Sonaimuri--', 17, NULL, '2020-12-29 15:16:56', '2020-12-29 15:16:56'),
(270, 0, 'miraj uddin', '01860297827', 'Chokoria', 13, NULL, '2020-12-29 16:16:47', '2020-12-29 16:16:47'),
(271, 0, 'আজমীর হাসান', '01626810308', 'ময়মনসিংহ--', 42, NULL, '2020-12-29 16:30:48', '2020-12-29 16:30:48'),
(272, 0, 'sumon', '01725935000', 'kaliyakor', 20, NULL, '2020-12-29 17:08:25', '2020-12-29 17:08:25'),
(273, 0, 'md Rubel', '01813118516', 'dediddar,cumilla', 12, NULL, '2020-12-30 10:28:48', '2020-12-30 10:28:48'),
(274, 0, 'Tausif', '01772333827', 'kulaura', 62, NULL, '2020-12-30 12:24:22', '2020-12-30 12:24:22'),
(275, 0, 'Mutassir Ahmed Farabi', '01784136236', 'Hobigonj', 61, NULL, '2020-12-30 12:27:38', '2020-12-30 12:27:38'),
(276, 0, 'Arin Jahan', '01868515264', 'shibchar-', 23, NULL, '2020-12-30 14:07:02', '2020-12-30 14:07:02'),
(277, 0, 'Himel hasan', '01917161632', 'gajipur --sun', 20, NULL, '2020-12-30 14:12:02', '2020-12-30 14:12:02'),
(278, 0, 'মোঃ রনি', '01787866790', 'লামাবাজার', 64, NULL, '2020-12-30 14:14:30', '2020-12-30 14:14:30'),
(279, 0, 'Mamun', '01781897331', 'Srimongal', 64, NULL, '2020-12-30 14:55:17', '2020-12-30 14:55:17'),
(280, 0, 'Shohel', '01708625178', 'Uttara mazar road', 1, NULL, '2020-12-30 15:42:49', '2020-12-30 15:42:49'),
(281, 0, 'ramisa', '01882212726', 'keranirhat', 11, NULL, '2020-12-30 15:46:02', '2020-12-30 15:46:02'),
(282, 0, 'shuvo', '01954595990', 'Gaibandha--', 54, NULL, '2020-12-30 15:48:09', '2020-12-30 15:48:09'),
(283, 0, 'prince', '01728835902', 'capaynobabgonj', 49, NULL, '2020-12-30 15:57:15', '2020-12-30 15:57:15'),
(284, 0, 'Rj Shuvo', '01575620308', 'Pokirapul mor', 1, NULL, '2020-12-30 16:27:19', '2020-12-30 16:27:19'),
(285, 0, 'Md Mohammad Ali', '01781840428', 'jatrabari  soniakra  japani bazer', 1, NULL, '2020-12-30 16:34:03', '2020-12-30 16:34:03'),
(286, 0, 'Forhad', '01924873797', 'Uttorbadda,,,,Satarkul road....rohomot ulla garments', 1, NULL, '2020-12-30 16:40:37', '2020-12-30 16:40:37'),
(287, 0, 'Robin ahmed', '01685755781', 'Kosay bari rail gate airport uttara', 1, NULL, '2020-12-30 16:42:29', '2020-12-30 16:42:29'),
(288, 0, 'Zakaria', '01910161835', 'gopalgonj', 21, NULL, '2020-12-31 10:56:25', '2020-12-31 10:56:25'),
(289, 0, 'zakir hossain', '01916029892', 'gazipur', 20, NULL, '2020-12-31 10:58:08', '2020-12-31 10:58:08'),
(290, 0, 'raby', '01889185978', 'Naogaon sadar', 47, NULL, '2020-12-31 11:07:33', '2020-12-31 11:07:33'),
(291, 0, 'Shamim', '01643851509', 'boirab', 22, NULL, '2020-12-31 11:11:03', '2020-12-31 11:11:03'),
(292, 0, 'mojahidul', '01741810856', 'Tazhat,rongpur-', 59, NULL, '2020-12-31 11:13:20', '2020-12-31 11:13:20'),
(293, 0, 'Sourab', '01885268954', 'feni', 14, NULL, '2020-12-31 11:54:35', '2020-12-31 11:54:35'),
(294, 0, 'Arian robin', '01318669857', 'Bongo market', 1, NULL, '2020-12-31 12:19:33', '2020-12-31 12:19:33'),
(295, 0, 'Rj Rakib', '01889043144', 'Sonir akhra donia college', 1, NULL, '2020-12-31 12:21:29', '2020-12-31 12:21:29'),
(296, 0, 'Rudro das', '01831496038', 'Fountain view restourent hatirzheel police plaza', 1, NULL, '2020-12-31 12:23:11', '2020-12-31 12:23:11'),
(297, 0, 'sohel rana', '01767375460', 'ICT divition  ict tower agargao dhaka', 1, NULL, '2020-12-31 12:25:34', '2020-12-31 12:25:34'),
(298, 0, 'Roman', '01611604513', '133/b Shahid faruq road ewst jatrabari', 1, NULL, '2020-12-31 12:27:20', '2020-12-31 12:27:20'),
(299, 0, 'Rupom mozumder', '01712208190', 'jamuna future park', 1, NULL, '2020-12-31 12:29:21', '2020-12-31 12:29:21'),
(300, 0, 'Shakil', '01773370081', '14/2/A,mirbag moghbazar, dhaka 1217', 1, NULL, '2020-12-31 12:38:28', '2020-12-31 12:38:28'),
(301, 0, 'Abir', '01782584105', 'Borisal', 3, NULL, '2020-12-31 13:59:42', '2020-12-31 13:59:42'),
(302, 0, 'Nena wasim', '01875837222', 'Kornelhat', 11, NULL, '2020-12-31 14:35:31', '2020-12-31 14:35:31'),
(303, 0, 'মো রবিউল ইসলাম', '01622434961', 'Coxbazar', 13, NULL, '2020-12-31 14:37:41', '2020-12-31 14:37:41'),
(304, 0, 'Binangkita Chakma', '01533180485', 'Khagrachari', 15, NULL, '2020-12-31 14:39:08', '2020-12-31 14:39:08'),
(305, 0, 'Sanjida Sumee', '01728635423', 'Bogura Sadar', 45, NULL, '2020-12-31 14:44:13', '2020-12-31 14:44:13'),
(306, 0, 'রিগান বিশ্বাস', '01863829948', 'cox,bazar --', 13, NULL, '2020-12-31 14:48:45', '2020-12-31 14:48:45'),
(307, 0, 'Rojina', '01709342148', 'উত্তর  ভাষানটেক  শুনিল পারা ঢাকা  সেনানিবাস 118 বাই 4,', 1, NULL, '2020-12-31 16:20:50', '2020-12-31 16:20:50'),
(308, 0, 'মো: সাগর', '01931924729', 'আবদুলাপুর', 1, NULL, '2020-12-31 16:25:34', '2020-12-31 16:25:34'),
(309, 0, 'Dr. Tanvina Ashraf', '01863111835', '\"Joutho ashiana, ,House no :02, ,Road no :02, ,Rupnagar residential area,,Sheyalbari,  Mirpur 02.,Dhaka 1216\"', 1, NULL, '2020-12-31 16:28:08', '2020-12-31 16:28:08'),
(310, 0, 'Galib', '01713557403', '\"Sam tower  Gulsan 1,Level 3\"', 1, NULL, '2020-12-31 16:39:59', '2020-12-31 16:39:59'),
(311, 0, 'rony', '01826664566', 'sarulia bazar ,demra,dhaka', 1, NULL, '2020-12-31 18:39:04', '2020-12-31 18:39:04'),
(312, 0, 'Rony', '01884696389', 'doinik bangla mor mothijell', 1, NULL, '2021-01-02 13:04:04', '2021-01-02 13:04:04'),
(313, 0, 'Lalon roy', '01852574320', 'Gopalgonj-sun', 21, NULL, '2021-01-02 13:40:55', '2021-01-02 13:40:55'),
(314, 0, 'Sumon', '01736251918', 'Jointapur', 64, NULL, '2021-01-02 13:44:01', '2021-01-02 13:44:01'),
(315, 0, 'Raja islam', '01400942133', 'Rangunia', 11, NULL, '2021-01-02 13:45:21', '2021-01-02 13:45:21'),
(316, 0, 'Rana khan', '01795725910', 'baipel', 1, NULL, '2021-01-02 13:47:49', '2021-01-02 13:47:49'),
(317, 0, 'Arian', '01796480148', 'baipel', 1, NULL, '2021-01-02 14:01:08', '2021-01-02 14:01:08'),
(318, 0, 'Rizvi Ahmed', '01737155039', 'nilfamari', 57, NULL, '2021-01-02 14:02:53', '2021-01-02 14:02:53'),
(319, 0, 'Priyan das', '01880913882', 'feni', 14, NULL, '2021-01-02 14:04:09', '2021-01-02 14:04:09'),
(320, 0, 'মুনিয়া', '01840126832', 'রূপগঞ্জ  ভুলতা গাউছিয়া--kcs', 26, NULL, '2021-01-02 14:49:30', '2021-01-02 14:49:30'),
(321, 0, 'shahriar', '01819618961', 'nasirabad--', 11, NULL, '2021-01-02 14:56:39', '2021-01-02 14:56:39'),
(322, 0, 'Fariha Afroze', '01533474752', 'Narayangonj Sadar--', 26, NULL, '2021-01-02 14:59:00', '2021-01-02 14:59:00'),
(323, 0, 'Rahat', '01799104434', 'Tangail old bus-stand-', 30, NULL, '2021-01-02 15:03:56', '2021-01-02 15:03:56'),
(324, 0, 'Maksuda Begum', '01738375359', 'thakurgaon--', 60, NULL, '2021-01-02 15:08:46', '2021-01-02 15:08:46'),
(325, 0, 'জাহিদ', '01729542974', 'lamabazar--', 64, NULL, '2021-01-02 15:11:27', '2021-01-02 15:11:27'),
(326, 0, 'Shahed', '01711581750', 'kodomtoli--', 64, NULL, '2021-01-02 15:15:50', '2021-01-02 15:15:50'),
(327, 0, 'Munni', '01794899952', 'birganj-', 53, NULL, '2021-01-02 15:20:29', '2021-01-02 15:20:29'),
(328, 0, 'শফিকুল ইসলাম মাসুদ', '01715009203', 'শেরপুর--', 44, NULL, '2021-01-02 15:24:32', '2021-01-02 15:24:32'),
(329, 0, 'মনির', '01872816871', 'bhola sador --sun', 4, NULL, '2021-01-02 15:30:14', '2021-01-02 15:30:14'),
(330, 0, 'Rajib kormokar', '01924616969', 'puran dhaka tatibazar', 1, NULL, '2021-01-02 15:42:20', '2021-01-02 15:42:20'),
(331, 0, 'Shohag', '01985362794', 'Batara nodda shohid abdul haris sorok rainbow school', 1, NULL, '2021-01-02 15:43:56', '2021-01-02 15:43:56'),
(332, 0, 'Saiful Islam', '01712724258', 'Krishi market, Mohammadpur', 1, NULL, '2021-01-02 15:45:38', '2021-01-02 15:45:38'),
(333, 0, 'Bablon Hossian Rasel', '01790586995', 'মতিঝিল থানার সামনে', 1, NULL, '2021-01-02 15:48:01', '2021-01-02 15:48:01'),
(334, 0, 'Mohammad sohag', '01861130102', 'Khuilgao', 1, NULL, '2021-01-02 15:49:39', '2021-01-02 15:49:39'),
(335, 0, 'Milon Ahamed', '01927790046', 'mawna', 20, NULL, '2021-01-02 16:20:46', '2021-01-02 16:20:46'),
(336, 0, 'Nora haybe', '01833729595', 'Uttara sector 10 road 8 house 25,Dhaka', 1, NULL, '2021-01-02 17:31:18', '2021-01-02 17:31:18'),
(337, 0, 'Mahek', '01930216885', 'Dhanmondi 9/a shankar chairman', 1, NULL, '2021-01-02 17:33:33', '2021-01-02 17:33:33'),
(338, 0, 'saidul islam', '01712775621', 'Moulovibazar--', 62, NULL, '2021-01-03 15:38:44', '2021-01-03 15:38:44'),
(339, 0, 'Humayun kabir', '01744756115', 'natore-', 48, NULL, '2021-01-03 15:40:40', '2021-01-03 15:40:40'),
(340, 0, 'Arman Hossain Rakib', '01864387886', 'maijdee--', 17, NULL, '2021-01-03 15:42:38', '2021-01-03 15:42:38'),
(341, 0, 'সুরুজ', '01873400474', 'বরিশাল সদর--', 3, NULL, '2021-01-03 16:02:07', '2021-01-03 16:02:07'),
(342, 0, 'LIMON ROY', '01980139386', 'panchagarh', 58, NULL, '2021-01-03 16:16:53', '2021-01-03 16:16:53'),
(343, 0, 'Md Niloy Jibon', '01876113707', 'chatkhil', 17, NULL, '2021-01-04 11:11:45', '2021-01-04 11:11:45'),
(344, 0, 'Johirul Islam Helal', '01715927060', 'চুনারুঘাট --', 61, NULL, '2021-01-04 11:17:35', '2021-01-04 11:17:35'),
(345, 0, 'ইয়াসিন', '01890265595', 'তাড়াইল--', 22, NULL, '2021-01-04 11:34:53', '2021-01-04 11:34:53'),
(346, 0, 'Md Emran Khan Emran', '01871387547', 'শ্রীরায়েরচর,দাউদকান্দি', 12, NULL, '2021-01-04 11:38:47', '2021-01-04 11:38:47'),
(347, 0, 'Sabrina Islam', '01883778329', 'Satkhira Sadar', 40, NULL, '2021-01-04 15:14:37', '2021-01-04 15:14:37'),
(348, 0, 'afser', '01852656768', 'Moulovibazar --', 62, NULL, '2021-01-04 15:18:05', '2021-01-04 15:18:05'),
(349, 0, 'Saiful Islam', '01827686650', 'FENI --', 14, NULL, '2021-01-04 16:43:16', '2021-01-04 16:43:16'),
(350, 0, 'আব্দল্লাহ বিন মুসলিম', '01738412631', '\"বছিলা গার্ডেন সিটি। (Road 1, Block c, House 3) \"', 1, NULL, '2021-01-04 19:03:53', '2021-01-04 19:03:53'),
(351, 0, 'SH Rone Monshi', '01407542391', '9/E/B,288, lalkuti,Mazar road, Mirpur Dhaka 1216', 1, NULL, '2021-01-04 19:06:32', '2021-01-04 19:06:32'),
(352, 0, 'Monirul', '01771197718', 'rohonpur', 49, NULL, '2021-01-05 16:24:21', '2021-01-05 16:24:21'),
(353, 0, 'Rahad', '01967765698', 'Jamalpur', 41, NULL, '2021-01-05 16:27:17', '2021-01-05 16:27:17'),
(354, 0, 'Sharmin', '01748875034', '\"Kuripara Masjid Road,,Noytola Building  Uttar khan, Dhaka \"', 1, NULL, '2021-01-05 17:38:30', '2021-01-05 17:38:30'),
(355, 0, 'Ahasanul Haque Sizan', '01303562673', 'Chatmohor,pabna--', 50, NULL, '2021-01-06 15:17:17', '2021-01-06 15:17:17'),
(356, 0, 'বিপুল চন্দ্র', '01718863749', 'নীলফামারী--', 57, NULL, '2021-01-06 16:34:58', '2021-01-06 16:34:58'),
(357, 0, 'Rana', '01715729912', 'Cox’s bazar --', 13, NULL, '2021-01-06 16:38:48', '2021-01-06 16:38:48'),
(358, 0, 'MD.FUHADUL KARIM', '01738748535', 'moulovi bazar--', 62, NULL, '2021-01-06 16:46:51', '2021-01-06 16:46:51'),
(359, 0, 'Farabï Khan', '01892506969', 'Thakurgaon  BGp cm--', 60, NULL, '2021-01-07 15:47:22', '2021-01-07 15:47:22'),
(360, 0, 'A.R mostofa', '01871486373', 'Coxbazar--', 13, NULL, '2021-01-07 15:51:48', '2021-01-07 15:51:48'),
(361, 0, 'TAMAL', '01768026218', 'ময়মনসিংহ--', 42, NULL, '2021-01-07 15:55:28', '2021-01-07 15:55:28'),
(362, 0, 'Boby ahmed', '01796360038', 'Kandirpar-', 12, NULL, '2021-01-07 16:03:26', '2021-01-07 16:03:26'),
(363, 0, 'rina', '01787275412', 'khulna biman office--', 35, NULL, '2021-01-10 16:26:13', '2021-01-10 16:26:13'),
(364, 0, 'Mim', '01858747412', '\"Meherpur Sadar --', 38, NULL, '2021-01-10 16:29:52', '2021-01-10 16:29:52'),
(365, 0, 'Arneeb', '01714010795', 'Hs 66, Road 18, block b, Banani 1213', 1, NULL, '2021-01-11 15:36:22', '2021-01-11 15:36:22'),
(366, 0, 'Shila', '01645083890', 'Nasirabad --', 11, NULL, '2021-01-11 15:42:13', '2021-01-11 15:42:13'),
(367, 0, 'summit', '01311970799', 'kurigram', 55, NULL, '2021-01-12 17:30:22', '2021-01-12 17:30:22'),
(368, 0, 'rubel ahmed', '01791455267', 'chatok-', 63, NULL, '2021-01-12 17:32:25', '2021-01-12 17:32:25'),
(369, 0, 'কামরুল হাসান', '01727605853', 'হবিগঞ্জ সদর--', 61, NULL, '2021-01-12 17:39:35', '2021-01-12 17:39:35'),
(370, 0, 'Md Asikur Rhoman', '01902526564', '\"Gudar ghat Bazar, Moddho Badda, Gulshan-1, Dhaka Delivery System: Cash On Delivery \"', 1, NULL, '2021-01-12 17:53:51', '2021-01-12 17:53:51'),
(371, 0, 'Abdur Rajjak Raju', '01750143322', 'CEO/CO-Founder  Chahida.com.bd 51/A/Ka/5 (Six Floor of Premium Sweets) West  Panthapath (Near Square Hospital) Dhaka-1215', 1, NULL, '2021-01-12 18:57:15', '2021-01-12 18:57:15'),
(372, 0, 'rabeya sultana', '01855455565', 'bibirhat sunnia madrasa,green vew scocity,', 11, NULL, '2021-01-13 12:12:54', '2021-01-13 12:12:54'),
(373, 0, 'আহসান', '01717676917', 'নীলফামারীর  সদর -', 57, NULL, '2021-01-13 14:38:13', '2021-01-13 14:38:13'),
(374, 0, 'MONI', '01836781282', '\"Feni Sadar--', 14, NULL, '2021-01-13 14:43:12', '2021-01-13 14:43:12'),
(375, 0, 'Rimu', '01778425499', 'Gopalganj Sadar--', 21, NULL, '2021-01-13 14:46:21', '2021-01-13 14:46:21'),
(376, 0, 'BABU', '01674438237', '\"Sherpur Sadar \"', 44, NULL, '2021-01-13 14:48:36', '2021-01-13 14:48:36'),
(377, 0, 'মনির হোসেন', '01818957621', 'kandirpar-', 12, NULL, '2021-01-13 14:51:01', '2021-01-13 14:51:01'),
(378, 0, 'কামরুল  হাচান', '01643525247', 'লাকসাম--', 12, NULL, '2021-01-13 14:53:38', '2021-01-13 14:53:38'),
(379, 0, 'Saiful', '01715075749', 'FENI SADAR--', 14, NULL, '2021-01-13 15:35:37', '2021-01-13 15:35:37'),
(380, 0, 'Puspa  Paul', '01718377106', 'Green tower flat.2/C,Tilagor,Sylhet', 64, NULL, '2021-01-13 15:46:38', '2021-01-13 15:46:38'),
(381, 0, 'Md.nasir', '01716411675', 'Mirpur 2 panir tanki', 1, NULL, '2021-01-14 10:33:58', '2021-01-14 10:33:58'),
(382, 0, 'Mr. Rupom', '01821596977', 'Thakurgaon--', 60, NULL, '2021-01-14 15:13:24', '2021-01-14 15:13:24'),
(383, 0, 'Omar faruk tuhin', '01312511220', 'maijdee--', 17, NULL, '2021-01-14 15:23:10', '2021-01-14 15:23:10'),
(384, 0, 'মোঃ আজমল হোসেন', '01717019994', 'ইয়ার পোট রোড় বডশালা  সিলেট', 64, NULL, '2021-01-14 15:25:23', '2021-01-14 15:25:23'),
(385, 0, 'JEWEL', '01854907516', '\"shampur boroitola rail station \"', 1, NULL, '2021-01-14 18:25:55', '2021-01-14 18:25:55'),
(386, 0, 'Layli', '01726229124', 'Muslim para Farid Market Bari No: 63 Uttara, Dhaka', 1, NULL, '2021-01-14 18:29:34', '2021-01-14 18:29:34'),
(387, 0, 'মামুন', '01873455708', 'যশোর', 33, NULL, '2021-01-16 16:10:50', '2021-01-16 16:10:50'),
(388, 0, 'Md. Saiful Islam Sumon', '01733036841', 'joypurhat--sun', 46, NULL, '2021-01-16 16:14:18', '2021-01-16 16:14:18'),
(389, 0, 'rahul', '01722463584', 'habiganj--', 61, NULL, '2021-01-16 16:18:52', '2021-01-16 16:18:52'),
(390, 0, 'Mursalin Ahmed', '01727605216', 'Rajshahi sodor--', 51, NULL, '2021-01-16 16:28:20', '2021-01-16 16:28:20'),
(391, 0, 'Apu', '01712363920', 'joypurhat--sun', 46, NULL, '2021-01-16 16:31:11', '2021-01-16 16:31:11'),
(392, 0, 'Sumon', '01315254197', 'Dinajpur Sadar--', 53, NULL, '2021-01-16 16:40:04', '2021-01-16 16:40:04'),
(393, 0, 'Juber Ahmad', '01719579283', 'Jindabazar--', 64, NULL, '2021-01-16 16:43:39', '2021-01-16 16:43:39'),
(394, 0, 'Mehedi alam', '01627772257', 'agrabad', 11, NULL, '2021-01-16 17:05:13', '2021-01-16 17:05:13'),
(395, 0, 'Istiak Ahmed', '01720369769', 'gulsan notuhn bajar', 1, NULL, '2021-01-16 19:11:47', '2021-01-16 19:11:47'),
(396, 0, 'sohel rana', '01957392039', 'Sador daptor,pilkhana,dhaka', 1, NULL, '2021-01-16 19:14:04', '2021-01-16 19:14:04'),
(397, 0, 'Sagor HafiZz', '01978778666', 'Section :11, block-B, road-12, line-7, house-1, mirpur dhaka-1216', 1, NULL, '2021-01-16 19:15:41', '2021-01-16 19:15:41'),
(398, 0, 'Md Alamgir', '01715765809', 'Banani cherman bari', 1, NULL, '2021-01-17 18:25:28', '2021-01-17 18:25:28'),
(399, 0, 'mohon', '01874842099', '\"Rico  14 hazi osman goni  road.alo bazar dhaka\"', 1, NULL, '2021-01-17 18:31:01', '2021-01-17 18:31:01'),
(400, 0, 'Fariha Nusrat Rana', '01740169947', 'Nasirabad--', 11, NULL, '2021-01-18 14:25:14', '2021-01-18 14:25:14'),
(401, 0, 'Golam Kabir', '01719068403', 'Green Road Brance--sun', 1, NULL, '2021-01-18 14:31:05', '2021-01-18 14:31:05'),
(402, 0, 'Ersad Hossain', '01711986327', 'Sylhet  --', 64, NULL, '2021-01-18 14:32:51', '2021-01-18 14:32:51'),
(403, 0, 'Roni', '01758897794', 'নেএকোনা ছোট বাজার--', 43, NULL, '2021-01-18 14:38:54', '2021-01-18 14:38:54'),
(404, 0, 'Ahmed farbej', '01314773189', 'jindabazar', 64, NULL, '2021-01-18 14:58:43', '2021-01-18 14:58:43'),
(405, 0, 'Samsul Haque', '01642111531', 'jossre', 33, NULL, '2021-01-18 15:05:13', '2021-01-18 15:05:13'),
(406, 0, 'Farabi', '01726997352', 'Hobiganj', 61, NULL, '2021-01-18 15:09:37', '2021-01-18 15:09:37'),
(407, 0, 'Rimi Akter', '01312024649', 'nayerfull--', 64, NULL, '2021-01-18 15:23:23', '2021-01-18 15:23:23'),
(408, 0, 'Lisa', '01638674906', '23No.Goalghat len Dholaikhal Dhaka1100.', 1, NULL, '2021-01-18 17:47:28', '2021-01-18 17:47:28'),
(409, 0, 'Md.Mahmud', '01718674567', 'road no 2, house no 1, kollanpur, dhaka', 1, NULL, '2021-01-18 17:51:10', '2021-01-18 17:51:10'),
(410, 0, 'Shafin Rassel', '01908000417', 'Narayanganj-', 26, NULL, '2021-01-19 16:22:03', '2021-01-19 16:22:03'),
(411, 0, 'জাহিদ', '01842159141', 'কক্সবাজার --', 13, NULL, '2021-01-19 16:24:43', '2021-01-19 16:24:43'),
(412, 0, 'Ahsan habib', '01761717536', 'Pirgonj --k', 60, NULL, '2021-01-19 16:27:21', '2021-01-19 16:27:21'),
(413, 0, 'shohan islam', '01710149027', 'bongshal suritola school,house-59/A', 1, NULL, '2021-01-19 17:31:33', '2021-01-19 17:31:33'),
(414, 0, 'MD.Toufiqur Rahman', '01303389146', 'Ramgpur,haragach,', 59, NULL, '2021-01-20 14:14:37', '2021-01-20 14:14:37'),
(415, 0, 'Nahid Ahmed', '01303467638', 'Sherpur, Sylhet', 64, NULL, '2021-01-20 15:52:46', '2021-01-20 15:52:46'),
(416, 0, 'Misty', '01747242268', 'Rajshahi --', 51, NULL, '2021-01-20 16:03:00', '2021-01-20 16:03:00'),
(417, 0, 'Fatehannesa shumi', '01790675132', '58/59/A Dinonath Shen road sheltech grand palace Apartment Gandaria Dhaka-1204.', 1, NULL, '2021-01-20 17:59:48', '2021-01-20 17:59:48'),
(418, 0, 'Mohammad Shahen Shah', '01624928131', 'House no-69/19, Ali Mohammad Khan road. Konapara, Jatrabari, Dhaka-1362', 1, NULL, '2021-01-20 18:02:26', '2021-01-20 18:02:26'),
(419, 0, 'মো আমজাদ হোসেন', '01711313615', 'বাসা ৯১০ রোড ০৫ সেকশন ০৭ মিরপুর পললবী ঢাকা।', 1, NULL, '2021-01-20 18:04:24', '2021-01-20 18:04:24'),
(420, 0, 'Sultana Razia', '01640698086', 'Jaldi, Banshkhali-', 11, NULL, '2021-01-21 15:42:22', '2021-01-21 15:42:22'),
(421, 0, 'mehdi hassan', '01738962653', 'bianibazar--', 64, NULL, '2021-01-21 15:51:07', '2021-01-21 15:51:07'),
(422, 0, 'Motiur Rahman Raz', '01797858701', '\"MR center, House#49, Road#17, (7th floor), Block- E, Banani Bazar, Dhaka- 1213\"', 1, NULL, '2021-01-21 18:29:10', '2021-01-21 18:29:10'),
(423, 0, 'Abdur rahman khan', '01729850260', 'sreemongol', 64, NULL, '2021-01-23 12:06:08', '2021-01-23 12:06:08'),
(424, 0, 'Labib', '01747366406', 'anandopur brack officer samne,savar', 1, NULL, '2021-01-23 12:12:02', '2021-01-23 12:12:02'),
(425, 0, 'helal ahmed', '01764545204', 'north est medical college condipul,sylhet', 64, NULL, '2021-01-23 12:21:03', '2021-01-23 12:21:03'),
(426, 0, 'মোঃ রায়হান আহম্মেদ শুভ', '01830345262', 'নেকরোজবাগ খেলার মাঠ,  কালিন্দী, কেরানীগঞ্জ মডেল ঢাকা-১৩১০', 1, NULL, '2021-01-23 12:52:10', '2021-01-23 12:52:10'),
(427, 0, 'Ahmed Sujat', '01318435808', 'InathGonj Purbo bazar,Nobi Gonj', 61, NULL, '2021-01-23 13:15:28', '2021-01-23 13:15:28'),
(428, 0, 'Akash', '01875999760', 'খাগড়াছড়ি জেলা, গুইমারা উপজেলা', 15, NULL, '2021-01-23 13:17:59', '2021-01-23 13:17:59'),
(429, 0, 'মোঃ মনির  হোসেন খান', '01720920661', 'ফরিদগন্জ--', 10, NULL, '2021-01-23 13:27:27', '2021-01-23 13:27:27');
INSERT INTO `customers` (`id`, `user_id`, `name`, `phone`, `address`, `city_id`, `customer_type`, `created_at`, `updated_at`) VALUES
(430, 0, 'md.suriam', '01617787246', 'dewan bazar,dc road,didar market ,', 11, NULL, '2021-01-23 13:31:49', '2021-01-23 13:31:49'),
(431, 0, 'মেহেদী হাসান', '01740474447', 'পঞ্চগড়  সদর--', 58, NULL, '2021-01-23 14:01:32', '2021-01-23 14:01:32'),
(432, 0, 'Mr.Saidul', '01978153528', 'Netrokona sadar-', 43, NULL, '2021-01-23 14:08:27', '2021-01-23 14:08:27'),
(433, 0, 'Nelufa sairin rekha', '01818724273', 'Cox\'s bazar--', 13, NULL, '2021-01-23 15:38:22', '2021-01-23 15:38:22'),
(434, 0, 'শরীফ ইসলাম', '01767285817', 'নীলফামারী সদর', 57, NULL, '2021-01-23 15:40:32', '2021-01-23 15:40:32'),
(435, 0, 'Md.Humayun Kabir', '01716362685', '101/1,B,Ahmed Nagar,Mirpur 1,Dhaka.', 1, NULL, '2021-01-23 18:13:41', '2021-01-23 18:13:41'),
(436, 0, 'Md Amdadul Haque', '01675557119', '267/5, Mannan Sarani, West Shewrapara. Mirpur', 1, NULL, '2021-01-23 18:26:05', '2021-01-23 18:26:05'),
(437, 0, 'Ahsan ullah', '01681694424', '619/1 boro mogbazar', 1, NULL, '2021-01-23 18:28:19', '2021-01-23 18:28:19'),
(438, 0, 'Jahangir Alom', '01728771279', 'দক্ষিণ পীরের বাগ  আমতলা বাজার, মিরপুর ঢাকা', 1, NULL, '2021-01-23 19:04:05', '2021-01-23 19:04:05'),
(439, 0, 'anik hossain', '01302602459', 'keraniganj,chun kutiya chaudhuri para,dhaka', 1, NULL, '2021-01-23 19:15:10', '2021-01-23 19:15:10'),
(440, 0, 'sumon', '01307661412', 'Sylhet cantonment', 64, NULL, '2021-01-24 13:41:43', '2021-01-24 13:41:43'),
(441, 0, 'হাসান', '01398565795', 'টঙ্গী কালবর্ট, ঢাকা', 1, NULL, '2021-01-24 14:11:20', '2021-01-24 14:11:20'),
(442, 0, 'Kolpona Aktar', '01863718400', 'Pabna sadar--sun', 50, NULL, '2021-01-24 14:23:42', '2021-01-24 14:23:42'),
(443, 0, 'Tuli barua', '01784735533', 'Hathazari', 11, NULL, '2021-01-24 14:25:46', '2021-01-24 14:25:46'),
(444, 0, 'ইকবাল রাফি', '01821383890', 'ছাগলনাইয়া', 14, NULL, '2021-01-24 14:28:44', '2021-01-24 14:28:44'),
(445, 0, 'Nuralam', '01758259671', 'Joypurhat', 46, NULL, '2021-01-24 15:16:53', '2021-01-24 15:16:53'),
(446, 0, 'রাহী', '01773908308', 'নাটোর-', 48, NULL, '2021-01-24 16:18:16', '2021-01-24 16:18:16'),
(447, 0, 'Ms.Ritu', '01301560901', 'Sibgonj, Chapai', 49, NULL, '2021-01-24 16:46:12', '2021-01-24 16:46:12'),
(448, 0, 'Shipon Roy', '01932141632', 'Gaibandha sadar', 54, NULL, '2021-01-24 17:10:40', '2021-01-24 17:10:40'),
(449, 0, 'ফজলে রাব্বী', '01301675243', 'খাতুনগঞ্জ--', 11, NULL, '2021-01-24 17:12:50', '2021-01-24 17:12:50'),
(450, 0, 'Ìftekhar Zaib', '01945933661', '\"Nibo jailkhana road Puran dhaka\"', 1, NULL, '2021-01-24 17:49:08', '2021-01-24 17:49:08'),
(451, 0, 'Md jahangir', '01920934141', 'হোটেল এরাম ইন্টারন্যাশনাল লিমিটেড ১নংশুকরাবাদ মিরপুররোড ঢাকা ১২০৭', 1, NULL, '2021-01-24 17:52:23', '2021-01-24 17:52:23'),
(452, 0, 'Md Yousuf Khan', '01309404385', 'Gaibandha sadar', 54, NULL, '2021-01-25 16:52:01', '2021-01-25 16:52:01'),
(453, 0, 'akash roy', '01312271301', 'dinajpur', 53, NULL, '2021-01-25 18:59:36', '2021-01-25 18:59:36'),
(454, 0, 'sufian', '01753906755', 'sutrapur thanar samne ,dhaka', 1, NULL, '2021-01-25 19:02:02', '2021-01-25 19:02:02'),
(455, 0, 'najma khanom', '01314882920', 'uttara sector-12,priyanka city,road-07,house,2nd flor', 1, NULL, '2021-01-25 19:04:35', '2021-01-25 19:04:35'),
(456, 0, 'rubel khan', '01841241337', 'jiga tola tenari mor', 1, NULL, '2021-01-25 19:06:54', '2021-01-25 19:06:54'),
(457, 0, 'jesika', '01749549381', 'agarga new coloni', 1, NULL, '2021-01-25 19:35:48', '2021-01-25 19:35:48'),
(458, 0, 'SB Kawsar', '01813238624', 'Gopalganj', 21, NULL, '2021-01-26 12:34:52', '2021-01-26 12:34:52'),
(459, 0, 'FA Foysal Ali', '01871418524', 'Horipur.Thakurgaon', 60, NULL, '2021-01-26 12:39:00', '2021-01-26 12:39:00'),
(460, 0, 'Subah Saiyara', '01770608479', 'sylhet', 64, NULL, '2021-01-26 12:49:09', '2021-01-26 12:49:09'),
(461, 0, 'shamima rahman', '01830154124', 'House no.51,ROAD no.1,SOUTH khulshi,ctg.', 11, NULL, '2021-01-26 13:18:24', '2021-01-26 13:18:24'),
(462, 0, 'Mahdi Hasan Rifat', '01910661499', 'Jamalpur Sadar', 41, NULL, '2021-01-26 15:51:46', '2021-01-26 15:51:46'),
(463, 0, 'Kazi Shahinoor Akhter Mili', '01815111836', 'Agrabad', 11, NULL, '2021-01-26 16:32:49', '2021-06-12 17:35:07'),
(464, 0, 'ripon dazi', '01777693339', 'eastern plaza hatirpol', 1, NULL, '2021-01-26 18:46:27', '2021-01-26 18:46:27'),
(465, 0, '\"শাহিন \"', '01632624357', 'Dokkhin bonosry.J block.road 12/4.house 61', 1, NULL, '2021-01-26 18:48:36', '2021-01-26 18:48:36'),
(466, 0, 'Sh Ah Id', '01761311020', 'rangpur--sa', 59, NULL, '2021-01-27 15:50:32', '2021-01-27 15:50:32'),
(467, 0, 'RS Sani', '01856824168', 'kalurghat', 11, NULL, '2021-01-27 15:55:04', '2021-01-27 15:55:04'),
(468, 0, 'Kashem Mahdi', '01790872365', 'Beanibazar,', 64, NULL, '2021-01-27 15:57:02', '2021-01-27 15:57:02'),
(469, 0, 'rasel', '01681890673', 'Gulshan 2', 1, NULL, '2021-01-27 15:58:51', '2021-01-27 15:58:51'),
(470, 0, 'Nibedita', '01716971354', 'Sylhet sadar', 64, NULL, '2021-01-27 16:01:31', '2021-01-27 16:01:31'),
(471, 0, 'Rahena Rahman', '01727332682', 'block-D, House no 04 main road,shahjalal uposhohar sylhet.', 64, NULL, '2021-01-27 16:06:54', '2021-01-27 16:06:54'),
(472, 0, 'Sharmin akter', '01754025826', 'Chandpur sadar', 10, NULL, '2021-01-27 16:10:23', '2021-01-27 16:10:23'),
(473, 0, 'Eva', '01771052666', 'Moulvibazar--sun', 62, NULL, '2021-01-27 16:15:55', '2021-01-27 16:15:55'),
(474, 0, 'Jakia Sultana Kibtia', '01747443231', 'chapainawabgonj--', 49, NULL, '2021-01-27 16:37:05', '2021-01-27 16:37:05'),
(475, 0, 'khadija', '01779700074', 'Gulshan 2 road 96 House 4 B', 1, NULL, '2021-01-27 18:22:31', '2021-01-27 18:22:31'),
(476, 0, 'Md. Mozahid Prodhan', '01708125096', 'Nasir Uddin tower 4th floor, Bir Uttam Samsul Alam road, 104/1 Kakrail, Dhaka-1000', 1, NULL, '2021-01-27 18:24:00', '2021-01-27 18:24:00'),
(477, 0, 'Choppol', '01712096944', 'House-5, Road-৫ , Block B, Nobodoy Housing, Mohammadpur, Dhk-1207.', 1, NULL, '2021-01-27 18:27:23', '2021-01-27 18:27:23'),
(478, 0, 'Shahriar', '01914888750', '173/b, Arambagh,  shahana villa. 1st floor.  Motijheel,  Dhaka-1000', 1, NULL, '2021-01-27 18:30:51', '2021-01-27 18:30:51'),
(479, 0, 'Humayun Farid', '01911660797', 'Munshiganj', 25, NULL, '2021-01-28 17:52:18', '2021-01-28 17:52:18'),
(480, 0, 'Sanjida Akhter', '01829690523', 'jindabazar', 64, NULL, '2021-01-28 17:59:41', '2021-01-28 17:59:41'),
(481, 0, 'Mr. Anwar', '01822260886', 'Cox Bazar', 13, NULL, '2021-01-28 18:10:44', '2021-01-28 18:10:44'),
(482, 0, 'Nadim', '01610001038', '15 /A holy lane shamoly dhaka', 1, NULL, '2021-01-28 19:00:12', '2021-01-28 19:00:12'),
(483, 0, 'SALMAN H Nik', '01721303063', '159/12/c West Shewrapara MirPur Dhaka 1216', 1, NULL, '2021-01-28 19:03:06', '2021-01-28 19:03:06'),
(484, 0, 'Ms Achal', '01791390900', 'House 217, Block D, Road 6, Lift 3B, Bashundhara R/A, Dhaka', 1, NULL, '2021-01-28 19:09:13', '2021-01-28 19:09:13'),
(485, 0, 'RUHUL AMIN', '01717255975', 'Hakimpur', 53, NULL, '2021-01-30 12:25:08', '2021-01-30 12:25:08'),
(486, 0, 'বুলবুল আহমেদ', '01792454330', 'রাণীবন্দর--', 53, NULL, '2021-01-30 14:56:57', '2021-01-30 14:56:57'),
(487, 0, 'Dr.Sumon.Hossin', '01409639884', 'Cox\'s Bazar--', 13, NULL, '2021-01-30 15:13:27', '2021-01-30 15:13:27'),
(488, 0, 'Asad  Khan', '01719800538', 'Rajshahi', 51, NULL, '2021-01-30 15:17:15', '2021-01-30 15:17:15'),
(489, 0, 'sadikur', '01726755424', 'derai,sunamganj', 63, NULL, '2021-01-30 15:37:25', '2021-01-30 15:37:25'),
(490, 0, 'Abir', '01788488794', 'Sylhet Sadore Rikabibazar', 64, NULL, '2021-01-30 15:39:42', '2021-01-30 15:39:42'),
(491, 0, 'Aftab ahmed', '01736710242', 'hazaribagh park er dal', 1, NULL, '2021-01-30 18:16:03', '2021-01-30 18:16:03'),
(492, 0, 'Hasib Amir', '01719366771', '\"Nikunja 2, khilkhet, Dhaka 1229 Dhaka regency hotel and resort.\"', 1, NULL, '2021-01-30 18:18:31', '2021-01-30 18:18:31'),
(493, 0, 'Biplob', '01812227083', '8th floor, ICT OPERATION DIVISION, PUBALI BANK HEAD OFFICE, MOTIJHEEL, DHAKA.', 1, NULL, '2021-01-30 18:20:05', '2021-01-30 18:20:05'),
(494, 0, 'Md Yeasin', '01729908123', '\"Gulshan 2... Dncc kaca bazar\"', 1, NULL, '2021-01-30 18:22:34', '2021-01-30 18:22:34'),
(495, 0, 'Abdul Hafiz', '01735940576', '\"Topader Resedence  Megna 28/A Dariapara sylhet \"', 64, NULL, '2021-01-31 16:37:27', '2021-01-31 16:37:27'),
(496, 0, 'Shamim', '01753814555', 'Chamelibag shantinagar Dhaka', 1, NULL, '2021-01-31 16:41:18', '2021-01-31 16:41:18'),
(497, 0, 'tanvir', '01645371460', 'sherpur sador', 44, NULL, '2021-01-31 17:31:31', '2021-01-31 17:31:31'),
(498, 0, 'আবির', '01719764744', '\"Sylhet Jela Sunamganj Tana Jagannathpur \"', 64, NULL, '2021-02-01 16:07:12', '2021-02-01 16:07:12'),
(499, 0, 'Khaled Ahmed', '01724381167', 'lamabazar', 64, NULL, '2021-02-01 17:17:16', '2021-02-01 17:17:16'),
(500, 0, 'md joshim', '01828789984', 'begumganj', 17, NULL, '2021-02-02 15:20:21', '2021-02-02 15:20:21'),
(501, 0, 'rajib', '01834327172', 'feni sador', 14, NULL, '2021-02-02 15:24:06', '2021-02-02 15:24:06'),
(502, 0, 'সৈয়দ ম ম আসাদুল্লাহ', '01303251879', 'বরিশাল সদর', 3, NULL, '2021-02-02 16:48:03', '2021-02-02 16:48:03'),
(503, 0, 'Shopna Ferdousi', '01953578164', 'Tongi Station Road, Gazipur', 20, NULL, '2021-02-02 16:56:32', '2021-02-02 16:56:32'),
(504, 0, 'mr.Imtiaz', '01768528181', 'Khilkhet ,Nikunja-2 road-17 ,house-18', 1, NULL, '2021-02-02 17:23:19', '2021-02-02 17:23:19'),
(505, 0, 'Md rahim ahmed', '01779979415', 'kanaighat', 64, NULL, '2021-02-03 14:41:49', '2021-02-03 14:41:49'),
(506, 0, 'samsul', '01647034890', 'bishwnath', 64, NULL, '2021-02-03 14:45:25', '2021-02-03 14:45:25'),
(507, 0, 'mr.satiyendra', '01718446298', '\"Cokoriya,--', 13, NULL, '2021-02-03 16:41:29', '2021-02-03 16:41:29'),
(508, 0, 'mr.satiyendra', '01718446298', '\"Cokoriya,--', 13, NULL, '2021-02-03 16:41:29', '2021-02-03 16:41:29'),
(509, 0, 'Rayhan Hossain', '01760007971', 'Nayabazar,Dhaka', 1, NULL, '2021-02-03 18:33:32', '2021-02-03 18:33:32'),
(510, 0, 'Zihadul Islam', '01762301199', '\"Jahangirnagar University main gate Savar\"', 1, NULL, '2021-02-04 15:57:32', '2021-02-04 15:57:32'),
(511, 0, 'Fahim', '01770280894', 'Dhaka', 1, NULL, '2021-02-16 05:40:46', '2021-02-16 05:40:46'),
(512, 0, 'Fahim Munta', '01795297424', 'Test Order', 1, NULL, '2021-02-16 14:44:01', '2021-02-16 14:44:01'),
(513, 0, 'shibbir ahmad', '01759416979', 'Benarosi Polli,Mirpur-10', 13, '2', '2021-02-27 16:27:26', '2021-06-26 07:09:38'),
(514, 0, 'Abdur rahman', '01889999970', 'demra.dhaka', 1, NULL, '2021-03-02 01:01:42', '2021-03-02 01:01:42'),
(515, 0, 'Md parvej', '01725127701', 'Mirpur-10 benarosi polli', 1, NULL, '2021-03-07 18:25:54', '2021-03-07 18:25:54'),
(516, 0, 'Jannat Shovo', '01825163043', 'Rampura bonossre b-c. R-5. H-20.', 1, NULL, '2021-03-08 00:49:42', '2021-03-08 00:49:42'),
(517, 0, 'Kohinur Reza', '01902979053', 'Kuril Bissoroad kuratoli Mosjid -', 1, NULL, '2021-03-08 00:56:46', '2021-03-08 00:56:46'),
(518, 0, 'আব্বাস খান', '01774390887', 'বসুন্ধরা বারিধারা বাসা ৫৭ ব্লক ডি রোড ৪', 1, NULL, '2021-03-08 02:08:00', '2021-03-08 02:08:00'),
(519, 0, 'জাহিদুল ইসলাম', '01778712617', 'কুমিল্লা ক্যান্টনমেন্ট ময়নামতি, গন্ডুর ভুঁইয়া বাড়ি', 12, NULL, '2021-03-09 18:30:23', '2021-03-09 18:30:23'),
(520, 0, 'মোঃ আল আমিন', '01748294805', 'চুয়াডাঙ্গা সদর', 32, NULL, '2021-03-09 22:00:01', '2021-03-09 22:00:01'),
(521, 0, 'Bornagomes', '01799359527', '27siddeswari road Khondoker goli  Dominno garden Alt-a2', 1, NULL, '2021-03-10 00:14:41', '2021-03-10 00:14:41'),
(522, 0, 'tanvir', '01616206020', 'HOUSE- 01, ROAD- 10, BLOCK- A,, BENAROSHI POLLI, DHAKA.', 1, NULL, '2021-03-20 15:08:04', '2021-03-20 15:08:04'),
(523, 0, 'Tahmida', '01785625640', 'Japan Garden city, building 14,flat704,ring road,Dhaka', 1, NULL, '2021-03-21 23:40:31', '2021-03-21 23:40:31'),
(524, 0, 'Shahin khan', '01779362204', 'Uttara azompur... Dawan city', 1, NULL, '2021-03-21 23:44:43', '2021-03-21 23:44:43'),
(525, 0, 'Riyan', '01776692136', '177 bijoynagar dhaka mahtab center 4 ta floor microtech, Dhaka', 1, NULL, '2021-03-23 16:59:04', '2021-03-23 16:59:04'),
(526, 0, 'রাজু আহমেদ', '01614049190', 'মিরপুর ডিও এস এস ১ নাম্বার গেট', 1, NULL, '2021-03-23 17:19:11', '2021-03-23 17:19:11'),
(527, 0, 'Rubel', '01844679074', 'Zinzira family market, Keraniganj,Dhaka', 1, NULL, '2021-03-23 17:35:55', '2021-03-23 17:35:55'),
(528, 0, 'Sahidul Islam', '01722406854', 'Vadail bazar, Epz, Savar, Dhaka', 1, NULL, '2021-03-23 23:30:55', '2021-03-23 23:30:55'),
(529, 0, 'Mamunur Rashid Khokon', '01823323121', 'Armana Fashion Ltd, 232-234 tejgoan I/A, Dhaka', 1, NULL, '2021-03-23 23:34:31', '2021-03-23 23:34:31'),
(530, 0, '\"Mamunur Rashid  \"', '01711070742', 'Basabo Biddut Office, Khilgaon, Dhaka', 1, NULL, '2021-03-23 23:42:35', '2021-03-23 23:42:35'),
(531, 0, 'mithu', '01737350470', 'bogura sodor-', 45, NULL, '2021-03-24 22:23:32', '2021-03-24 22:23:32'),
(532, 0, 'Md.liton Dhali', '01819854930', 'bosondhara Apollo hospital ar aidk Dutch bangla.bank ar pass', 1, NULL, '2021-03-24 23:19:42', '2021-03-24 23:19:42'),
(533, 0, 'ইমরান রিয়াফ', '01909360277', 'jatrabari er Rayerbag (roisnogor) schol road', 1, NULL, '2021-03-24 23:37:07', '2021-03-24 23:37:07'),
(534, 0, 'polash', '01737900611', 'Feni', 2, '3', '2021-03-27 17:41:30', '2021-03-27 17:41:30'),
(535, 0, 'evay', '01736655987', 'mirpur', 2, '3', '2021-03-27 23:01:22', '2021-03-27 23:01:22'),
(536, 0, 'jahid', '01728461126', 'mirpur-12', 2, '3', '2021-03-28 00:23:06', '2021-03-28 00:23:06'),
(537, 0, 'Anik', '01706261562', 'mirpur-10', 2, '3', '2021-03-28 15:48:34', '2021-03-28 15:48:34'),
(538, 0, 'mohabbat patowary', '01789456123', 'mirpur-01', 2, '3', '2021-03-28 16:32:09', '2021-03-28 16:32:09'),
(539, 0, 'nurulamin549@yshoo.com', '01713532549', 'M/s Foysal Enterprise , Delear Quality feeds limited, Busstand,Dhaka-Mymensingh Highway, Trishal, Mymensingh (Near Hotel Shajalal)', 42, NULL, '2021-03-30 06:42:47', '2021-03-30 06:42:47'),
(540, 0, 'mintu', '01626959233', 'mirpur 10', 2, '3', '2021-03-31 15:28:37', '2021-03-31 15:28:37'),
(541, 0, 'rawntage Rana', '01893311495', 'mirpur', 2, '3', '2021-03-31 19:49:10', '2021-03-31 19:49:10'),
(542, 0, 'edom', '01771112563', 'mirpur', 2, '3', '2021-03-31 20:44:02', '2021-03-31 20:44:02'),
(543, 0, 's r sumon', '01934446669', 'HOUSE- 02, ROAD- 11, BLOCK- A,\nBENAROSHI POLLI, DHAKA.', 1, NULL, '2021-04-17 16:50:02', '2021-04-17 16:50:02'),
(544, 0, 'payer ahmed', '01815067702', 'ctg', 2, '3', '2021-05-01 16:58:16', '2021-05-01 16:58:16'),
(545, 0, 'shozly sabbir', '01889061082', 'mirpur-1', 2, '3', '2021-05-01 17:21:36', '2021-05-01 17:21:36'),
(546, 0, 'Khadiza salam', '01323012364', 'Barisal', 3, NULL, '2021-05-01 18:34:35', '2021-05-01 18:34:35'),
(547, 0, 'খায়রুল ইসলাম রানা', '01918083421', 'আগ্রাবাদ', 11, NULL, '2021-05-01 18:38:09', '2021-05-01 18:38:09'),
(548, 0, 'Ashiqur Rahman', '01729136463', 'Ishordi-', 50, NULL, '2021-05-01 18:50:12', '2021-05-01 18:50:12'),
(549, 0, 'target', '01683173784', 'feni', 2, '3', '2021-05-01 18:52:40', '2021-05-01 18:52:40'),
(550, 0, 'Rubel', '01742869097', 'Sylhet sadar', 64, NULL, '2021-05-01 18:53:32', '2021-05-01 18:53:32'),
(551, 0, 'Nurul Amin Kamaly', '01799906780', 'Sylhet sadar', 64, NULL, '2021-05-01 18:56:14', '2021-05-01 18:56:14'),
(552, 0, 'ressallar hub', '01744251179', 'fokirapul', 2, '3', '2021-05-01 18:59:36', '2021-05-01 18:59:36'),
(553, 0, 'Tamim', '01892925497', 'Gaibandha sadar', 54, NULL, '2021-05-01 19:03:48', '2021-05-01 19:03:48'),
(554, 0, 'Md GIASUDDIN mozumder', '01814862481', 'Hajigong --', 10, NULL, '2021-05-01 19:07:54', '2021-05-01 19:07:54'),
(555, 0, 'Manik', '01717426860', 'Sundargonj, Gaibandha', 54, NULL, '2021-05-01 19:15:26', '2021-05-01 19:15:26'),
(556, 0, 'Liton Hossain', '01306223552', 'B baria sadar', 9, NULL, '2021-05-01 19:18:06', '2021-05-01 19:18:06'),
(557, 0, 'Bristy', '01846525316', 'Meherpur --', 38, NULL, '2021-05-01 19:20:16', '2021-05-01 19:20:16'),
(558, 0, 'Sujon kumar', '01888577685', 'Rangpur sadar', 59, NULL, '2021-05-01 19:21:44', '2021-05-01 19:21:44'),
(559, 0, 'nusaiba online', '01928955299', 'mirpur', 2, '3', '2021-05-01 20:02:32', '2021-05-01 20:02:32'),
(560, 0, 'Mozammel Hoque', '01723178088', 'চৌমুহনী নোয়াখালী', 17, NULL, '2021-05-01 20:09:13', '2021-05-01 20:09:13'),
(561, 0, 'Robiul', '01794541290', 'Rajshahi', 51, NULL, '2021-05-01 20:13:13', '2021-05-01 20:13:13'),
(562, 0, 'niyot', '01648857974', 'kazipara', 2, '3', '2021-05-01 20:14:43', '2021-05-01 20:14:43'),
(563, 0, 'romman', '01919113948', 'tolarbag', 2, '3', '2021-05-01 21:06:31', '2021-05-01 21:06:31'),
(564, 0, 'aman sabit', '01746677478', 'basundhara r/a', 2, '3', '2021-05-01 21:12:27', '2021-05-01 21:12:27'),
(565, 0, 'Md Riduan', '01834955017', 'chokoria--', 13, NULL, '2021-05-01 21:17:01', '2021-05-01 21:17:01'),
(566, 0, 'arfan', '01302175509', 'mirpur', 2, '3', '2021-05-01 21:28:40', '2021-05-01 21:28:40'),
(567, 0, 'Nahida farven', '01794227689', 'lalpur', 48, NULL, '2021-05-01 22:03:12', '2021-05-01 22:03:12'),
(568, 0, 'kawser mahmud ali', '01648561941', 'sorail b baria', 2, '3', '2021-05-01 22:22:17', '2021-05-01 22:22:17'),
(569, 0, 'zarin', '01796589389', 'Navana Garden(opposite to Shohrab petrol pump), Kallyanpur,', 1, NULL, '2021-05-01 22:24:21', '2021-05-01 22:24:21'),
(570, 0, 'tonmoy', '01780920868', 'Pagla bazar-josim market sampur', 1, NULL, '2021-05-01 22:49:43', '2021-05-01 22:49:43'),
(571, 0, 'tiger sheroani house', '01713704104', 'modhupur', 30, NULL, '2021-05-01 23:29:54', '2021-05-01 23:29:54'),
(572, 0, 'zaber mahbu', '01531714359', '58/cha, west raza bazar, farmgate behind square hospital', 1, NULL, '2021-05-02 00:09:50', '2021-05-02 00:09:50'),
(573, 0, 'Jahid', '01611113232', '\"House-11,road-6/1,block-B, sec-12, pallabi,mirpur\"', 1, NULL, '2021-05-02 00:37:35', '2021-05-02 00:37:35'),
(574, 0, 'Farhan', '01610108812', 'Gulshan,, nikaton bazer gate,, Dhaka', 1, NULL, '2021-05-02 00:42:06', '2021-05-02 00:42:06'),
(575, 0, 'Durjoy', '01941516748', 'H: 126, R:6, Sangbadik plot, Kalshi, Mirpur, Dhaka', 1, NULL, '2021-05-02 00:43:54', '2021-05-02 00:43:54'),
(576, 0, 'polus', '01743974906', 'shatarkul road, Uttarbadda, Dhaka', 1, NULL, '2021-05-02 00:45:52', '2021-05-02 00:45:52'),
(577, 0, 'Farzana Rumpa', '01642862184', 'Rongpur', 59, NULL, '2021-05-02 01:21:46', '2021-05-02 01:21:46'),
(578, 0, 'nadim', '01633229292', 'mirpur-10', 2, '3', '2021-05-02 17:16:46', '2021-05-02 17:16:46'),
(579, 0, 'Japor', '01689780416', 'feni', 14, NULL, '2021-05-02 17:29:58', '2021-05-02 17:29:58'),
(580, 0, 'prince vi', '01743699698', 'kazipara', 2, '3', '2021-05-02 18:20:30', '2021-05-02 18:20:30'),
(581, 0, 'asad', '01852102702', 'mohammadpur', 2, '3', '2021-05-02 19:06:17', '2021-05-02 19:06:17'),
(582, 0, 'blueage', '01739683322', 'khilket', 2, '3', '2021-05-02 19:29:37', '2021-05-02 19:29:37'),
(583, 0, 'deshishop', '01919999999', 'mirpur', 2, '3', '2021-05-02 19:49:09', '2021-05-02 19:49:09'),
(584, 0, 'cordial galley', '01770182682', 'norsingdi', 2, '3', '2021-05-02 20:02:04', '2021-05-02 20:02:04'),
(585, 0, 'nahid', '01707139870', 'norsingdi', 2, '3', '2021-05-02 20:19:33', '2021-05-02 20:19:33'),
(586, 0, 'nourin', '01680148508', 'tongi', 2, '3', '2021-05-02 20:27:18', '2021-05-02 20:27:18'),
(587, 0, 'Habib vi', '01775995845', 'norshingdi', 2, '3', '2021-05-02 20:30:54', '2021-05-02 20:30:54'),
(588, 0, 'Tinni', '01644666277', 'mirpur-11', 2, '3', '2021-05-02 20:49:21', '2021-05-02 20:49:21'),
(589, 0, 'hahid hossion', '01714279363', 'mirpur', 2, '3', '2021-05-02 21:09:57', '2021-05-02 21:09:57'),
(590, 0, 'Iqbal hossain', '01836420972', 'halishahar--', 11, NULL, '2021-05-02 21:24:26', '2021-05-02 21:24:26'),
(591, 0, 'সাখাওয়াত হোসেন জোসেফ', '01711346882', 'কিশোরগঞ্জ--', 22, NULL, '2021-05-02 22:20:49', '2021-05-02 22:20:49'),
(592, 0, 'Md.Obaidur Rahman', '01718702009', '\"Jhenaidah', 34, NULL, '2021-05-02 22:24:36', '2021-05-02 22:24:36'),
(593, 0, 'Anamika', '01710214205', 'House#09,  Road#02, Block#A, Nobodoy Housing, Adabor', 1, NULL, '2021-05-02 23:38:50', '2021-05-02 23:38:50'),
(594, 0, 'edom', '01743982565', 'mirpur', 2, '3', '2021-05-02 23:45:33', '2021-05-02 23:45:33'),
(595, 0, 'sumon', '01314706817', 'mirpur', 2, '3', '2021-05-02 23:58:22', '2021-05-02 23:58:22'),
(596, 0, 'Rat nijhum', '01968734027', 'Naraynganj--', 26, NULL, '2021-05-03 00:08:46', '2021-05-03 00:08:46'),
(597, 0, 'Shima', '01600294516', 'মিপুর ১২ মুসলিম বাজার ডি ব্লক ২৭ নাম্বার রোড  ৪১ নাম্বার বাসা।।', 1, NULL, '2021-05-03 00:12:07', '2021-05-03 00:12:07'),
(598, 0, 'Safwan', '01977200506', '\"Mirpur original-10, Digilab Diagnostic centre, Dhaka\"', 1, NULL, '2021-05-03 00:27:51', '2021-05-03 00:27:51'),
(599, 0, 'Emran Hossain', '01767732563', '11/3,west nakhalpara tejgaon dhaka 1215', 1, NULL, '2021-05-03 00:38:29', '2021-05-03 00:38:29'),
(600, 0, 'nahid', '01303326060', 'mirpur', 2, '3', '2021-05-03 15:45:31', '2021-05-03 15:45:31'),
(601, 0, 'Md nafiz hasnain', '01913701579', 'Rajbari', 28, NULL, '2021-05-03 16:21:31', '2021-05-03 16:21:31'),
(602, 0, 'আনিসুর রহমান', '01782377867', 'গোয়ালন্দ -', 28, NULL, '2021-05-03 16:58:37', '2021-05-03 16:58:37'),
(603, 0, 'জীবন কৃষ্ণ চক্রবর্তী', '01714641229', 'পাটগ্রাম --', 56, NULL, '2021-05-03 17:35:51', '2021-05-03 17:35:51'),
(604, 0, 'Md.jamal Uddin', '01938858807', 'kazir dewri--', 11, NULL, '2021-05-03 17:44:55', '2021-05-03 17:44:55'),
(605, 0, 'Md Masudul Hassan', '01867677263', 'Sylhet', 64, NULL, '2021-05-03 17:48:03', '2021-05-03 17:48:03'),
(606, 0, 'arman Choudhury', '01913310137', 'চৌমুহনি--', 17, NULL, '2021-05-03 18:15:59', '2021-05-03 18:15:59'),
(607, 0, 'সারিকা', '01774726402', 'সিরাজগঞ্জ সদর', 52, NULL, '2021-05-03 18:25:18', '2021-05-03 18:25:18'),
(608, 0, 'soha khan', '01850188180', 'khalishpur, Khulna', 35, NULL, '2021-05-03 18:27:29', '2021-05-03 18:27:29'),
(609, 0, 'Arif', '01321135415', 'pabna --', 50, NULL, '2021-05-03 18:29:52', '2021-05-03 18:29:52'),
(610, 0, 'sakib vi', '01857770463', 'uttara', 2, '3', '2021-05-03 18:42:33', '2021-05-03 18:42:33'),
(611, 0, 'Asma', '01623360216', 'Nasirabad--', 11, NULL, '2021-05-03 18:44:32', '2021-05-03 18:44:32'),
(612, 0, 'Tanjim Arefin Rudra', '01736416757', 'Kuthibari. Morrelgonj.bagerhat', 31, NULL, '2021-05-03 18:55:20', '2021-05-03 19:22:31'),
(613, 0, 'Kazi Rubel', '01619548272', 'mirpur-01', 2, '3', '2021-05-03 18:55:35', '2021-05-03 18:55:35'),
(614, 0, 'Mizanur Rahman', '01701056343', 'Bogura Sadar--', 45, NULL, '2021-05-03 18:59:28', '2021-05-03 18:59:28'),
(615, 0, 'Manik vi', '01714115118', 'uttara-14', 2, '3', '2021-05-03 19:02:20', '2021-05-03 19:02:20'),
(616, 0, 'Rasel', '01992525489', 'ঝিনাইদহ সদর-', 34, NULL, '2021-05-03 19:29:33', '2021-05-03 19:29:33'),
(617, 0, 'mhahadi hasan', '01623924333', 'mirpur 10', 2, '3', '2021-05-03 19:34:24', '2021-05-03 19:34:24'),
(618, 0, 'tamjid', '01627723982', 'reaz uddin bazar', 11, NULL, '2021-05-03 19:37:46', '2021-05-03 19:37:46'),
(619, 0, 'S M Imran Hossen', '01791908288', 'Satkhira--', 40, NULL, '2021-05-03 20:56:00', '2021-05-03 20:56:00'),
(620, 0, 'habib vi', '01711209446', 'mirpur', 2, '3', '2021-05-03 20:58:00', '2021-05-03 20:58:00'),
(621, 0, 'fahim', '01308426420', 'rongpur', 59, NULL, '2021-05-03 21:34:56', '2021-05-03 21:34:56'),
(622, 0, 'miraz kus', '01870465295', 'mirpur-06', 2, '3', '2021-05-03 21:37:06', '2021-05-03 21:37:06'),
(623, 0, 'orko', '01303145711', 'ranisongkail-', 60, NULL, '2021-05-03 21:43:31', '2021-05-03 21:43:31'),
(624, 0, 'Nor Nor', '01786525669', 'jindabazar --', 64, NULL, '2021-05-03 21:59:43', '2021-05-03 21:59:43'),
(625, 0, 'সাজ্জাদ শেখ', '01723832249', 'নেএকোনা-', 43, NULL, '2021-05-03 22:04:40', '2021-05-03 22:04:40'),
(626, 0, 'jahid', '01683667114', 'মিউচুয়াল ট্রাস্ট ব্যাংক বিল্ডিং ( এ কে এম রহমত উল্লাহ কলেজের বিপরীতে), চান্দেরটেক, বেরাইদ, বাড্ডা,ঢাকা-১২১', 1, NULL, '2021-05-03 22:05:14', '2021-05-03 22:05:14'),
(627, 0, 'alomgir hossaion', '01750511472', 'shylet kanaigat', 2, '3', '2021-05-03 22:18:50', '2021-05-03 22:18:50'),
(628, 0, 'hanif', '01820974142', 'mirpur', 2, '3', '2021-05-04 00:39:06', '2021-05-04 00:39:06'),
(629, 0, 'chahidaeshop.com', '01648162782', 'pantopoth', 2, '3', '2021-05-04 16:53:22', '2021-05-04 16:53:22'),
(630, 0, 'catwalk', '01862381283', 'cox.bazar', 2, '3', '2021-05-04 17:02:22', '2021-05-04 17:02:22'),
(631, 0, 'showon', '01833338441', 'mirpur', 2, '3', '2021-05-04 17:07:59', '2021-05-04 17:07:59'),
(632, 0, 'Rashed', '01737914687', 'pirojpur', 7, NULL, '2021-05-04 17:39:22', '2021-05-04 17:39:22'),
(633, 0, 'jabir siddique', '01521231271', 'forteen village', 2, '3', '2021-05-04 17:39:30', '2021-05-04 17:39:30'),
(634, 0, 'Shayan', '01625780594', 'Pirijpur,Bajitpur,Kishoreganj', 22, NULL, '2021-05-04 17:54:41', '2021-05-04 17:54:41'),
(635, 0, 'shahadat', '01922971407', 'mirpur', 2, '3', '2021-05-04 18:49:43', '2021-05-04 18:49:43'),
(636, 0, 'nazmul khan Rubal', '01756428021', 'Gulshan-01', 2, '3', '2021-05-04 19:02:06', '2021-05-04 19:02:06'),
(637, 0, 'abid', '01624230774', 'mirpur', 2, '3', '2021-05-04 19:22:17', '2021-05-04 19:22:17'),
(638, 0, 'mijanur rahman', '01716152487', 'Pirojpur', 7, NULL, '2021-05-04 19:30:07', '2021-05-04 19:30:07'),
(639, 0, 'Tonu', '01643396062', 'mirpur-10', 2, '3', '2021-05-04 19:36:41', '2021-05-04 19:36:41'),
(640, 0, 'sajergohr', '01954946414', 'gazipur', 2, '3', '2021-05-04 19:56:21', '2021-05-04 19:56:21'),
(641, 0, 'T and Y fashionbd', '01736839810', 'birampur dinajpur', 2, '3', '2021-05-04 20:18:56', '2021-05-04 20:18:56'),
(642, 0, 'Rakib', '01892069029', 'ঢাকা সদরঘাট', 1, NULL, '2021-05-04 20:27:18', '2021-05-04 20:27:18'),
(643, 0, 'Tushar Ornob', '01303190755', '25/29, sher shasuri road, mohammodpur , dhaka', 1, NULL, '2021-05-04 20:29:57', '2021-05-04 20:29:57'),
(644, 0, 'worldfashion', '01716164346', 'Lakssam', 2, '3', '2021-05-04 21:00:26', '2021-05-04 21:00:26'),
(645, 0, 'Polash', '01767066926', 'Rangpur--', 59, NULL, '2021-05-04 21:04:17', '2021-05-04 21:04:17'),
(646, 0, 'mehrab hossen', '01783516769', 'hajigonj-', 10, NULL, '2021-05-04 21:23:39', '2021-05-04 21:23:39'),
(647, 0, 'sayem islam', '01739875503', 'setabganj-', 53, NULL, '2021-05-04 21:46:09', '2021-05-04 21:46:09'),
(648, 0, 'faiza', '01752123558', 'mirpur-10', 2, '3', '2021-05-04 23:28:39', '2021-05-04 23:28:39'),
(649, 0, 'Rakib', '01999898999', 'kusthia', 36, NULL, '2021-05-04 23:54:59', '2021-05-04 23:54:59'),
(650, 0, '3 days', '01730890500', '\"jessore', 33, NULL, '2021-05-05 00:08:36', '2021-05-05 00:08:36'),
(651, 0, 'Sipu', '01707036700', '200/2 A babu docter er bari manikdi ,amtola - dhaka Cantonment', 1, NULL, '2021-05-05 01:30:52', '2021-05-05 01:30:52'),
(652, 0, 'Sabbir jahan sj', '01304346092', 'Dhaka Keraniganj Abdullahpur', 1, NULL, '2021-05-05 01:35:22', '2021-05-05 01:35:22'),
(653, 0, 'Sadia', '01814333607', 'dhanmondi.tenarymor', 1, NULL, '2021-05-05 01:43:17', '2021-05-05 01:43:17'),
(654, 0, 'kazi mahamuda', '01784302127', 'House no-405, W-05, Vill- Middle Faidabad. PO- Faidabad Madrasha, PS- Dakkhinkhan, Dist-Dhaka-1230.', 1, NULL, '2021-05-05 01:45:33', '2021-05-05 01:45:33'),
(655, 0, 'Sabbir Hossain', '01952753278', 'badda notun bazar.bosumoti kacha bazar dhaka', 1, NULL, '2021-05-05 01:49:58', '2021-05-05 01:49:58'),
(656, 0, 'Shakil Ahmed', '01778560750', 'Barlekha -', 62, NULL, '2021-05-05 02:10:45', '2021-05-05 02:10:45'),
(657, 0, 'Sajal Rahman', '01719023847', 'Gaibandha', 54, NULL, '2021-05-05 02:13:19', '2021-05-05 02:13:19'),
(658, 0, 'Shikder Najir', '01915378234', 'Jhinaidah Sadar', 34, NULL, '2021-05-05 02:21:11', '2021-05-05 02:21:11'),
(659, 0, 'Soriful Hoque', '01753977697', 'Mymonshing Sadar', 42, NULL, '2021-05-05 02:30:00', '2021-05-05 02:30:00'),
(660, 0, 'hasnahena', '01787525495', 'sec-18,ponchoboti, uttara', 1, NULL, '2021-05-05 02:41:02', '2021-05-05 02:41:02'),
(661, 0, 'shop mart', '01753118122', 'opojit of mughda hospital', 1, NULL, '2021-05-05 02:44:48', '2021-05-05 02:44:48'),
(662, 0, 'Fashion zone', '01740315486', 'monohordi norsangdi', 2, '3', '2021-05-05 16:22:14', '2021-05-05 16:22:14'),
(663, 0, 'Alo life style', '01739702952', 'mirpur-01', 2, '3', '2021-05-05 16:53:49', '2021-05-05 16:53:49'),
(664, 0, 'Dhaka boss', '01311849291', 'mirpur', 2, '3', '2021-05-05 17:00:40', '2021-05-05 17:00:40'),
(665, 0, 'koka babu', '01771444460', 'uattra', 2, '3', '2021-05-05 17:20:41', '2021-05-05 17:20:41'),
(666, 0, 'alamin', '01648390456', 'badda', 2, '3', '2021-05-05 17:59:13', '2021-05-05 17:59:13'),
(667, 0, 'ajk.live Zulfikar alam', '01681241056', 'Mohakhali DOHS', 2, '3', '2021-05-05 18:19:21', '2021-05-05 18:19:21'),
(668, 0, 'H m Tawhid', '01690169139', 'Chokoria.coxbazar', 13, NULL, '2021-05-05 18:22:23', '2021-05-05 18:22:23'),
(669, 0, 'Ali Ahmed Maruf', '01303095916', 'nayerpull', 64, NULL, '2021-05-05 18:33:31', '2021-06-22 20:58:57'),
(670, 0, 'md shahadat', '01752569486', 'muradnogar.cumilla', 12, NULL, '2021-05-05 18:41:22', '2021-05-05 18:41:22'),
(671, 0, 'Raz shariyar maruf', '01851315942', 'Chandpur Sadar--sa', 10, NULL, '2021-05-05 18:46:31', '2021-05-05 18:46:31'),
(672, 0, 'Alamin', '01308074053', 'Dhunat --', 45, NULL, '2021-05-05 18:53:44', '2021-05-05 18:53:44'),
(673, 0, 'মারিয়া আলম মীম', '01818299532', 'কক্সবাজার সদর--', 13, NULL, '2021-05-05 18:56:03', '2021-05-05 18:56:03'),
(674, 0, 'Hridoy khan', '01830735354', 'Laksham,cumilla', 12, NULL, '2021-05-05 19:26:17', '2021-05-05 19:26:17'),
(675, 0, 'Paran Hossen', '01716529161', 'lakshmipur', 16, NULL, '2021-05-05 19:52:06', '2021-05-05 19:52:06'),
(676, 0, 'nusra', '01601716327', 'C/o, muzammil Hussain, Umme fabiha,2nd floor,house no 10, new I block,halishahor h/s,ctg', 11, NULL, '2021-05-05 20:02:48', '2021-05-05 20:02:48'),
(677, 0, 'Smart Choice', '01868471405', 'bhairab', 4, NULL, '2021-05-05 21:57:57', '2021-05-05 21:57:57'),
(678, 0, 'nayon', '01552716546', 'khagrachari--', 15, NULL, '2021-05-05 22:12:07', '2021-05-05 22:12:07'),
(679, 0, 'Md Farbez', '01820703839', 'নাছিরাবাদ --', 11, NULL, '2021-05-05 23:05:19', '2021-05-05 23:05:19'),
(680, 0, 'noman', '01640736241', 'mirpur', 2, '3', '2021-05-05 23:44:55', '2021-05-05 23:44:55'),
(681, 0, 'jahid', '01714279263', 'mirpur', 2, '3', '2021-05-06 00:07:22', '2021-05-06 00:07:22'),
(682, 0, 'priyozone', '01950730640', 'islampur dhaka', 2, '3', '2021-05-06 00:22:49', '2021-05-06 00:22:49'),
(683, 0, 'Rahi', '01788186098', 'রাজাপুর, বরাইগ্রাম, নাটোর।', 48, NULL, '2021-05-06 00:27:38', '2021-05-06 00:27:38'),
(684, 0, 'sojol vi', '01726867890', 'shamoly', 2, '3', '2021-05-06 01:19:46', '2021-05-06 01:19:46'),
(685, 0, 'Aminur rahman', '01729671180', 'kodomtoli,sylhet', 64, NULL, '2021-05-06 16:15:01', '2021-05-06 16:15:01'),
(686, 0, 'rakib', '01787154440', 'manikgonj', 24, NULL, '2021-05-06 16:19:11', '2021-05-06 16:19:11'),
(687, 0, 'shorif', '01309000460', 'mirpur', 2, '3', '2021-05-06 18:33:16', '2021-05-06 18:33:16'),
(688, 0, 'chahidaeshop', '01780131589', 'panthapath', 2, '3', '2021-05-06 18:38:38', '2021-05-06 18:38:38'),
(689, 0, 'ahad', '01711234566', 'Rangabali', 2, '3', '2021-05-06 19:22:00', '2021-05-06 19:22:00'),
(690, 0, 'osman', '01839717664', 'mohammadpur', 2, '3', '2021-05-06 20:04:37', '2021-05-06 20:04:37'),
(691, 0, 'Rk fashion', '01734979097', 'chorfashion ,vhola', 4, NULL, '2021-05-06 20:15:21', '2021-05-06 20:15:21'),
(692, 0, 'Rajib vi', '01675764746', 'mirpur', 2, '3', '2021-05-06 20:32:27', '2021-05-06 20:32:27'),
(693, 0, 'Sunny kazi', '01869063072', 'Soriyatpur', 29, NULL, '2021-05-06 20:33:16', '2021-05-06 20:33:16'),
(694, 0, 'sumon', '01754323344', 'agergown', 2, '3', '2021-05-06 20:47:12', '2021-05-06 20:47:12'),
(695, 0, 'Freedam fashion', '01840056508', 'feni', 14, NULL, '2021-05-06 21:02:00', '2021-05-06 21:02:00'),
(696, 0, 'VB Fashion', '01811456775', 'dinajpur', 2, '3', '2021-05-06 21:09:40', '2021-05-06 21:09:40'),
(697, 0, 'Nahid', '01312662421', 'mohakhali', 2, '3', '2021-05-06 21:27:31', '2021-05-06 21:27:31'),
(698, 0, 'next', '01884379833', 'gopalgonj', 21, NULL, '2021-05-06 23:16:46', '2021-05-06 23:16:46'),
(699, 0, 'Faruk hossion', '01760942921', 'Tangail', 2, '3', '2021-05-06 23:27:17', '2021-05-06 23:27:17'),
(700, 0, 'Kazi rabbi', '01610287893', 'Tejgown dhaka', 2, '3', '2021-05-06 23:45:14', '2021-05-06 23:45:14'),
(701, 0, 'kazi rabbi', '0161028789', 'tejgown', 2, '3', '2021-05-06 23:55:17', '2021-05-06 23:55:17'),
(702, 0, 'thuhin ahmad', '01724889324', 'Meharpur', 2, '3', '2021-05-07 00:02:13', '2021-05-07 00:02:13'),
(703, 0, 'Md Mohiuddin', '01866232661', 'Feni--', 14, NULL, '2021-05-07 00:03:30', '2021-05-07 00:03:30'),
(704, 0, 'shopno neer', '01749743112', 'shayesta gonj--', 61, NULL, '2021-05-07 00:30:14', '2021-05-07 00:30:14'),
(705, 0, 'hasnahena', '01781525495', 'sec 18,ponhoboti ,uttara,', 1, NULL, '2021-05-07 02:25:15', '2021-05-07 02:25:15'),
(706, 0, 'RIKI', '01776132256', 'LAXMIPUR', 2, '3', '2021-05-07 15:49:37', '2021-05-07 15:49:37'),
(707, 0, 'monjurul islam', '01916435561', 'jossore', 2, '3', '2021-05-07 18:27:28', '2021-05-07 18:27:28'),
(708, 0, 'Roton mia', '01902346091', 'Jamalpur', 2, '3', '2021-05-07 20:25:05', '2021-05-07 20:25:05'),
(709, 0, 'promes bazar', '01797139226', 'sanpara', 2, '3', '2021-05-07 20:34:32', '2021-05-07 20:34:32'),
(710, 0, 'md Rahul', '01771121378', 'sirajgonj', 2, '3', '2021-05-07 21:33:59', '2021-05-07 21:33:59'),
(711, 0, 'deshi shop', '01793961808', 'mirpur', 2, '3', '2021-05-07 21:40:55', '2021-05-07 21:40:55'),
(712, 0, 'emran', '01828070431', 'feni', 14, NULL, '2021-05-07 21:46:33', '2021-05-07 21:46:33'),
(713, 0, 'shonto', '01977934549', 'badda', 2, '3', '2021-05-07 22:06:46', '2021-05-07 22:06:46'),
(714, 0, 'Md nabir hossaion', '01716196512', 'mirpur -13', 2, '3', '2021-05-08 16:14:59', '2021-05-08 16:14:59'),
(715, 0, 'Faisal', '01729446076', 'Laxmipur', 2, '3', '2021-05-08 16:49:33', '2021-05-08 16:49:33'),
(716, 0, 'Roji', '01643396141', 'mirpur', 2, '3', '2021-05-08 16:57:29', '2021-05-08 16:57:29'),
(717, 0, 'toufiq', '01672836913', 'savar nabinagor', 2, '3', '2021-05-08 17:13:19', '2021-05-08 17:13:19'),
(718, 0, 'mamun nm cloth', '01723659877', 'mirpur 10', 2, '3', '2021-05-08 18:41:42', '2021-05-08 18:41:42'),
(719, 0, 'jahidul', '01723060541', 'mirpur', 2, '3', '2021-05-08 19:00:09', '2021-05-08 19:00:09'),
(720, 0, 'abu huraira', '01914539446', 'mirpur', 2, '3', '2021-05-08 19:08:32', '2021-05-08 19:08:32'),
(721, 0, 'Liton khan', '01819474579', 'jatrabari', 2, '3', '2021-05-08 19:26:43', '2021-05-08 19:26:43'),
(722, 0, 'niyot', '01676465194', 'mirpur', 2, '3', '2021-05-08 20:26:12', '2021-05-08 20:26:12'),
(723, 0, 'Rashed', '01717070840', 'badda', 2, '3', '2021-05-09 16:33:28', '2021-05-09 16:33:28'),
(724, 0, 'Abdul kader', '01715026938', 'mirpur 10', 2, '3', '2021-05-09 18:51:41', '2021-05-09 18:51:41'),
(725, 0, 'RASHED KHAN', '01748780666', 'lakshmipur', 16, NULL, '2021-05-09 20:22:07', '2021-05-09 20:22:07'),
(726, 0, 'shown', '01302220663', 'uattara', 2, '3', '2021-05-09 21:38:36', '2021-05-09 21:38:36'),
(727, 0, 'Rejaul', '01710005318', 'চন্দ্রা শাখা, বাড়ইপারা', 1, NULL, '2021-05-09 23:28:11', '2021-05-09 23:28:11'),
(728, 0, 'kamrul hasan', '01714352676', 'murpur 1', 2, '3', '2021-05-10 00:50:47', '2021-05-10 00:50:47'),
(729, 0, 'sakhawat', '01815424828', 'baroihat', 11, NULL, '2021-05-10 01:01:00', '2021-05-10 01:01:00'),
(730, 0, 'faruk', '01672974368', 'mohipal', 14, NULL, '2021-05-10 01:11:48', '2021-05-10 01:11:48'),
(731, 0, 'jaira noor', '01404882355', 'jatrabari ideal school and college', 1, NULL, '2021-05-10 01:56:16', '2021-05-10 01:56:16'),
(732, 0, 'morshed', '01872574158', 'mirpur', 2, '3', '2021-05-10 19:32:55', '2021-05-10 19:32:55'),
(733, 0, 'tamim', '01763738221', 'nobinagor', 2, '3', '2021-05-10 20:55:39', '2021-05-10 20:55:39'),
(734, 0, 'mamun', '01841084111', 'Mirpur-2 post office', 1, NULL, '2021-05-22 21:20:32', '2021-05-22 21:20:32'),
(735, 0, 'Faisal', '01781941126', 'chomuhoni', 17, NULL, '2021-05-25 15:40:35', '2021-05-25 15:40:35'),
(736, 0, 'Sawlin sultana', '01832570893', 'chandpur', 10, NULL, '2021-06-03 16:45:09', '2021-06-03 16:45:09'),
(737, 0, 'Farhana ferdous', '01608831530', 'gonovobon govt quater,NICVD 5 Shohwardi medical college er pisone,gobovobon mosjid er pase,gate number    16-25', 1, NULL, '2021-06-03 17:23:22', '2021-06-03 17:23:22'),
(738, 0, 'faridpur', '01721356484', 'faridpur', 19, NULL, '2021-06-03 17:26:34', '2021-06-03 17:26:34'),
(739, 0, 'Kamrun nahar', '01774663189', 'maizde', 17, NULL, '2021-06-03 17:36:02', '2021-06-03 17:36:02'),
(740, 0, 'Nagesshori,kurigram', '01716474250', 'kurigram', 55, NULL, '2021-06-03 17:49:10', '2021-06-03 17:49:10'),
(741, 0, 'md Solaiman', '01866596914', 'kornelhat', 11, NULL, '2021-06-03 18:12:43', '2021-06-03 18:12:43'),
(742, 0, 'Jamila', '01719206086', 'rongpur', 58, NULL, '2021-06-03 18:20:45', '2021-06-03 18:20:45'),
(743, 0, 'Delower', '01811344133', 'Coxbazar', 13, NULL, '2021-06-03 19:59:41', '2021-06-03 19:59:41'),
(744, 0, 'Shishir islam', '01723430790', 'pabna', 50, NULL, '2021-06-03 20:02:40', '2021-06-03 20:02:40'),
(745, 0, 'sumon', '01777599015', 'satkhira', 40, NULL, '2021-06-03 20:06:09', '2021-06-03 20:06:09'),
(746, 0, 'mohosin', '01789887929', 'bhola', 4, NULL, '2021-06-03 20:11:36', '2021-06-03 20:11:36'),
(747, 0, 'israt jahan', '01902747372', 'mirpur 12,pollobi,esturn housing,block k h 36', 1, NULL, '2021-06-03 20:17:41', '2021-06-03 20:17:41'),
(748, 0, 'Bristy ghus', '01319997131', 'magura', 37, NULL, '2021-06-05 15:34:12', '2021-06-05 15:34:12'),
(749, 0, 'wadud bappa', '01718336866', 'moulovibazar', 62, NULL, '2021-06-05 15:56:00', '2021-06-05 15:56:00'),
(750, 0, 'Shila jamaddar', '01917173149', 'jossor', 33, NULL, '2021-06-05 16:00:09', '2021-06-05 16:00:09'),
(751, 0, 'Sonali diner', '01728623441', 'naoga sador', 48, NULL, '2021-06-05 16:02:34', '2021-06-05 16:02:34'),
(752, 0, 'rubina akter', '01611878341', 'hossainpur,,kisorgonj', 22, NULL, '2021-06-05 16:04:17', '2021-06-05 16:04:17'),
(753, 0, 'tohfatul ambia', '01886332983', 'chuyadanga', 32, NULL, '2021-06-05 16:06:30', '2021-06-05 16:06:30'),
(754, 0, 'Shahmukhdam', '01738092593', 'rajshahi', 51, NULL, '2021-06-05 16:13:27', '2021-06-05 16:13:27'),
(755, 0, 'Sayed istieaq', '01700842527', 'sunamgonj', 63, NULL, '2021-06-05 16:16:16', '2021-06-05 16:16:16'),
(756, 0, 'Amena akter', '01941629846', 'Shajahanpur railway colony building no a/50', 1, NULL, '2021-06-05 17:50:16', '2021-06-05 17:50:16'),
(757, 0, 'Mitu ahmed', '01731778655', 'Dhaka khilkhet nikunjo road 2,house 12', 1, NULL, '2021-06-05 17:53:19', '2021-06-05 17:53:19'),
(758, 0, 'Sabiha nargis', '01718293939', '264/24 manikdi namapara 3 rastar mor dhaka cantonment er pase', 1, NULL, '2021-06-05 18:02:18', '2021-06-05 18:02:18'),
(759, 0, 'Fariha sami', '01624500578', 'kha 35 nadda jaganathpur shahid harej road,nadda bus stand', 1, NULL, '2021-06-05 18:18:24', '2021-06-05 18:18:24'),
(760, 0, 'Sraboni', '01789268216', 'khilkhet uttarpara', 1, NULL, '2021-06-05 18:29:28', '2021-06-05 18:29:28'),
(761, 0, 'polash', '01814559978', 'lalmonirhat', 56, NULL, '2021-06-05 19:29:33', '2021-06-05 19:29:33'),
(762, 0, 'nahida sultana', '01738009479', 'kisorgonj', 22, NULL, '2021-06-05 19:33:07', '2021-06-05 19:33:07'),
(763, 0, 'Nahida islam', '01787023183', 'moulovibazar', 62, NULL, '2021-06-05 19:55:44', '2021-06-05 19:55:44'),
(764, 0, 'reaz mahmud', '01730166789', 'sherpur sador', 29, NULL, '2021-06-05 20:15:32', '2021-06-05 20:15:32'),
(765, 0, 'Saila promi', '01742875210', 'kisorgonj', 22, NULL, '2021-06-06 16:46:10', '2021-06-06 16:46:10'),
(766, 0, 'walidur rahman', '01877365520', '3/3Gukisthan shoping complex 3rd floor', 1, NULL, '2021-06-06 16:48:08', '2021-06-06 16:48:08'),
(767, 0, 'yasin raj', '01864218031', '22/a/1 lal mohon poddar lane farabad gandaria', 1, NULL, '2021-06-06 19:10:56', '2021-06-06 19:10:56'),
(768, 0, 'nipa mondal', '01825892032', 'ghoripur,doaudkandi', 12, NULL, '2021-06-06 19:17:20', '2021-06-06 19:17:20'),
(769, 0, 'shahidul alam', '01776146131', 'sylhet', 64, NULL, '2021-06-06 20:10:39', '2021-06-06 20:10:39'),
(770, 0, 'Ruja', '01726008147', 'meherpur', 38, NULL, '2021-06-06 20:39:33', '2021-06-06 20:39:33'),
(771, 0, 'Tipu sultan', '01811172257', 'mirpur', 2, '3', '2021-06-07 15:44:44', '2021-06-07 15:44:44'),
(772, 0, 'Fouzia rahman', '01401982969', 'mirpur 12 pollabi mazedul islam model school er pase', 1, NULL, '2021-06-07 19:19:37', '2021-06-07 19:19:37'),
(773, 0, 'Afruz', '01703813077', 'bhola', 4, NULL, '2021-06-07 19:21:29', '2021-06-07 19:21:29'),
(774, 0, 'Tanjir ahmed', '01628439640', 'Gawer bazar theke vitore hazi camp theke vitore', 1, NULL, '2021-06-07 21:03:01', '2021-06-07 21:03:01'),
(775, 0, 'Parvej', '01730068040', 'lake driev road h-96 ,sec-07, uttara', 1, NULL, '2021-06-07 21:05:48', '2021-06-07 21:05:48'),
(776, 0, 'Md noman', '01876314674', 'Naolkali', 17, NULL, '2021-06-08 16:38:51', '2021-06-08 16:38:51'),
(777, 0, 'Md safiqur rahman', '01819686329', 'Naokhli', 17, NULL, '2021-06-08 16:41:53', '2021-06-08 16:41:53'),
(778, 0, 'Rakib', '01791077042', 'Chowrasta', 20, NULL, '2021-06-08 16:44:35', '2021-06-08 16:44:35'),
(779, 0, 'Hoichio fashion', '01707509348', 'Gaibanda', 54, NULL, '2021-06-08 19:14:43', '2021-06-08 19:14:43'),
(780, 0, 'Humayun kobir', '01845302521', '\"Shajalal biggan and projukti universty,sylhet', 64, NULL, '2021-06-12 17:15:16', '2021-06-12 17:15:16'),
(781, 0, 'bonni rabbani', '01716290528', 'Joypurhat', 46, NULL, '2021-06-12 17:19:05', '2021-06-12 17:19:05'),
(782, 0, 'shakil ahmed', '01712819452', 'alamdanga', 32, NULL, '2021-06-12 17:21:13', '2021-06-12 17:21:13'),
(783, 0, 'Shati alam', '01864878222', 'agrabad', 11, NULL, '2021-06-12 17:24:20', '2021-06-12 17:24:20'),
(784, 0, 'shajib ak riyad', '01300755858', 'Gazipur, shofipur ansar academy 3 no gate', 20, NULL, '2021-06-12 17:26:38', '2021-06-12 18:05:25'),
(785, 0, 'sobi', '01749155084', 'pabna', 50, NULL, '2021-06-12 17:29:57', '2021-06-12 17:29:57'),
(786, 0, 'lavely', '01731440924', 'hobigonj', 61, NULL, '2021-06-12 17:31:44', '2021-06-12 17:31:44'),
(787, 0, 'sonet', '01721089082', 'dinajpur', 53, NULL, '2021-06-12 17:37:07', '2021-06-12 17:37:07'),
(788, 0, 'mr ayman', '01733369390', 'pabna', 50, NULL, '2021-06-12 17:38:47', '2021-06-12 17:39:07'),
(789, 0, 'Sumaia shimu', '01770037932', 'magura', 37, NULL, '2021-06-12 17:40:55', '2021-06-12 17:40:55'),
(790, 0, 'Adnan hasan', '01988596438', 'rapa plaza shop nbo--13,dhanmondi', 1, NULL, '2021-06-12 19:08:14', '2021-06-12 19:08:14'),
(791, 0, 'kotha busra', '01676030799', '175/1 west rampura wabda road dhaka', 1, NULL, '2021-06-12 19:10:29', '2021-06-12 19:10:29'),
(792, 0, 'Protul', '01306871736', 'kolabagan 2nd lane', 1, NULL, '2021-06-12 19:12:07', '2021-06-12 19:12:07'),
(793, 0, 'saju mahmood', '01717085700', 'azziz vhila 3/a south badda', 1, NULL, '2021-06-12 19:13:08', '2021-06-12 19:13:08'),
(794, 0, 'Minar hossain', '01750745169', 'thakurgaon', 60, NULL, '2021-06-12 19:26:40', '2021-06-12 19:26:40'),
(795, 0, 'Sabbir hsan', '01713381268', 'Valuka bazar,mymensing', 42, NULL, '2021-06-12 19:51:58', '2021-06-12 19:51:58'),
(796, 0, 'Tamim', '01757790956', 'Barlekha bazar,', 62, NULL, '2021-06-12 20:10:49', '2021-06-12 20:10:49'),
(797, 0, 'Ripa', '01827888872', 'konabari', 20, NULL, '2021-06-13 15:26:06', '2021-06-13 15:26:06'),
(798, 0, 'Humayun kobir', '01723306450', 'banessor', 51, NULL, '2021-06-13 15:30:18', '2021-06-22 17:29:19'),
(799, 0, 'Amirul Islam Momen', '01834943326', 'Naokhali', 17, NULL, '2021-06-13 16:04:59', '2021-06-13 16:04:59'),
(800, 0, 'Anamul Hassan', '01642304616', 'Rangamati', 18, NULL, '2021-06-13 16:07:56', '2021-06-13 16:07:56'),
(801, 0, 'Johirul islam', '01926400130', 'cumilla', 12, NULL, '2021-06-13 16:17:28', '2021-06-13 16:17:28'),
(802, 0, 'Md azahrul islam', '01723757770', 'baipel-saver', 45, NULL, '2021-06-13 16:24:15', '2021-06-13 16:24:15'),
(803, 0, 'Sehaly sorker', '01927768125', 'Mymensing', 42, NULL, '2021-06-13 16:26:22', '2021-06-13 16:26:22'),
(804, 0, 'Hr dulal', '01305809509', 'Sayestagonj', 40, NULL, '2021-06-13 16:59:56', '2021-06-13 16:59:56'),
(805, 0, 'Baharaina', '01638790226', 'tangail', 30, NULL, '2021-06-13 17:03:42', '2021-06-13 17:03:42'),
(806, 0, 'Sojib', '01735367872', 'Diray', 63, NULL, '2021-06-13 17:05:38', '2021-06-13 17:05:38'),
(807, 0, 'Sohan', '01894009011', 'Mirpur-02,barek mollar mor 60 fit', 1, NULL, '2021-06-13 20:03:04', '2021-06-13 20:03:04'),
(808, 0, 'Ashiqur rahman', '01584032007', 'Kobita cafe khayrunnesa manson 234/c, new elipanbt road', 1, NULL, '2021-06-13 20:08:25', '2021-06-13 20:08:25'),
(809, 0, 'Borun kumar roy', '01716527196', 'Haji camp askona medical road 01749326118', 1, NULL, '2021-06-13 20:15:10', '2021-06-13 20:15:10'),
(810, 0, 'Abdullah Rayhan', '01645555916', 'panchagar sador', 20, NULL, '2021-06-13 22:28:21', '2021-06-14 17:20:07'),
(811, 0, 'Yousuf Ahmed Ushal', '01907073392', 'Adress 17/e relax tower modhubag moghbazar khejur gas goli Dhaka', 1, NULL, '2021-06-13 23:47:04', '2021-06-13 23:47:04'),
(812, 0, 'Hamid chowdhury', '01862997885', 'nasirabad', 11, NULL, '2021-06-14 17:23:04', '2021-06-14 17:23:04'),
(813, 0, 'Kazi ashequl haider', '01712885258', 'BRTA mirpur 10.house--09,road 06', 1, NULL, '2021-06-14 17:25:06', '2021-06-14 17:25:06'),
(814, 0, 'Rajshahir Raj', '01810536122', 'Manikganj', 24, NULL, '2021-06-14 17:52:23', '2021-06-14 17:52:23'),
(815, 0, 'Msumi Chaity', '01985935068', 'Moulovibazar', 62, NULL, '2021-06-14 17:56:23', '2021-06-14 17:56:23'),
(816, 0, 'jakir hossain', '01789247164', 'damray kamalpur bazar', 1, NULL, '2021-06-14 17:58:44', '2021-06-14 17:58:44'),
(817, 0, 'Sabikun Naher Tonni', '01770609239', '\"10 no whyer street wari .dhaka  Melrose apartment   Floor :-A1\"', 1, NULL, '2021-06-14 18:01:01', '2021-06-14 18:01:01'),
(818, 0, 'Arman Hasan Shuvop', '01794749820', 'Dhanmondi zigtola notun rasta gabtola mosjid', 1, NULL, '2021-06-14 19:09:14', '2021-06-14 19:09:14'),
(819, 0, 'Habiba akter', '01712222598', 'Rongpur-dun', 59, NULL, '2021-06-14 19:13:39', '2021-06-14 19:13:39'),
(820, 0, 'Hasina akter', '01711160154', 'flat-b/4 house -+65,north road (vhuter goli) dhanmondi', 1, NULL, '2021-06-14 19:16:57', '2021-06-14 19:16:57'),
(821, 0, 'Muhammad Tahsan Rajeeb', '01840250806', 'Dokhin khan uttara', 1, NULL, '2021-06-14 19:23:55', '2021-06-14 19:23:55'),
(822, 0, 'Rana', '01775637087', 'Uttara sec 13 H-09,R-7', 1, NULL, '2021-06-14 19:25:51', '2021-06-14 19:25:51'),
(823, 0, 'Shovon', '01723676925', 'companigonj haspatal', 64, NULL, '2021-06-14 19:55:07', '2021-06-14 19:55:07'),
(824, 0, 'Shoul Mazumder', '01533100026', 'মানডা শেষ মাথা, মুগদা থানা, ঢাকা-১২১৪,', 1, NULL, '2021-06-14 20:03:12', '2021-06-14 20:03:12'),
(825, 0, 'md amin', '01701881962', '20 no abdul khairat road ,near armani tola school and tara mosque', 1, NULL, '2021-06-14 20:26:46', '2021-06-14 20:26:46'),
(826, 0, 'khairul', '01753023750', 'dhaka', 1, NULL, '2021-06-14 21:17:36', '2021-06-14 21:17:36'),
(827, 0, 'Anwer Hossain', '01733285777', 'Mymensing', 42, NULL, '2021-06-15 15:47:07', '2021-06-15 15:47:07'),
(828, 0, 'jafor kader', '01818678346', 'sithakundo,chittagong', 11, NULL, '2021-06-15 15:48:39', '2021-06-15 15:48:39'),
(829, 0, 'Habibur Rahman', '01645316503', 'lakhsam', 12, NULL, '2021-06-15 15:51:26', '2021-06-15 15:51:26'),
(830, 0, 'Showrov Hasan', '01827644657', 'Nazipur, Patnitala, Naogaon.', 20, NULL, '2021-06-15 15:57:07', '2021-06-15 15:57:07'),
(831, 0, 'Ruma', '01992930676', 'khulna sader-sa', 35, NULL, '2021-06-15 16:55:00', '2021-06-15 16:55:00'),
(832, 0, 'Mostakim', '01813938936', 'Mohipal', 14, NULL, '2021-06-15 16:56:11', '2021-06-15 16:56:11'),
(833, 0, 'Rashedul alam', '01836542797', 'Khatungonj', 11, NULL, '2021-06-15 17:05:22', '2021-06-15 17:05:22'),
(834, 0, 'mizan', '01721408960', 'tangail-', 30, NULL, '2021-06-15 17:07:39', '2021-06-15 17:07:39'),
(835, 0, 'Md. Tipu sultan', '01971172257', 'mirpur 10', 12, '3', '2021-06-15 17:29:09', '2021-06-16 18:59:00'),
(836, 0, 'Jyoti', '01703551243', 'Ulipur-kurigram--kcs', 55, NULL, '2021-06-15 19:39:18', '2021-06-15 19:39:18'),
(837, 0, '\"Lechin', '01630103603', 'kamar para uttara,10', 1, NULL, '2021-06-15 20:31:28', '2021-06-15 20:31:28'),
(838, 0, 'Roksana', '01738641066', 'Staf quater hazi hossain plaza', 1, NULL, '2021-06-15 20:33:26', '2021-06-15 20:33:26'),
(839, 0, 'ope khanam', '01322956494', 'ঢাকা ( মাটিকাটা)', 1, NULL, '2021-06-15 20:37:48', '2021-06-15 20:37:48'),
(840, 0, 'Sylvia Zohir', '01911294131', '01735430156   H-04,R--08,B-3..MIRPUR 13', 1, NULL, '2021-06-15 20:39:38', '2021-06-15 20:39:38'),
(841, 0, 'Bablu', '01813819086', 'New market gate no 02,shop -237', 1, NULL, '2021-06-15 21:13:38', '2021-06-15 21:13:38'),
(842, 0, 'Sm saikat', '01716122319', 'Joypurhat', 46, NULL, '2021-06-15 21:24:09', '2021-06-15 21:24:09'),
(843, 0, 'Chadni', '01778918979', 'purbo razabazar', 1, NULL, '2021-06-15 21:25:40', '2021-06-15 21:25:40'),
(844, 0, 'Aysha', '01980295011', 'Madaripur', 23, NULL, '2021-06-15 22:05:04', '2021-06-15 22:05:04'),
(845, 0, 'Farhana Rumpa', '01759071377', 'Sector 11,Road 17,House 72, Ground floor, Uttara, Dhaka', 1, NULL, '2021-06-16 01:06:16', '2021-06-16 01:06:16'),
(846, 0, 'Ìsràtë Jãhåñ Sãthì', '01956981532', '\"house no 225/16... uttor manda,anondo nogor..jatravari\"', 1, NULL, '2021-06-16 01:08:37', '2021-06-16 01:08:37'),
(847, 0, 'MdJewel Khan', '01624050218', 'Sodarghat great wal e', 1, NULL, '2021-06-16 01:27:26', '2021-06-16 01:27:26'),
(848, 0, 'MD Munna Islam Rony', '01307037683', 'Dhaka. Uttara  Ramzan market', 1, NULL, '2021-06-16 01:36:58', '2021-06-16 01:36:58'),
(849, 0, 'Muslimah Akter', '01558974084', 'Deobhog Nagbari ( Near DSS club playground), Narayanga', 26, NULL, '2021-06-16 18:41:21', '2021-06-16 18:41:21'),
(850, 0, 'মোঃ জাহাঙ্গীর হোসেন মাহাদি', '01683657039', 'Mymensing--sun', 42, NULL, '2021-06-16 18:42:57', '2021-06-16 18:42:57'),
(851, 0, 'Sabiha Swarna', '01867297631', 'Netrokona--sun', 43, NULL, '2021-06-16 18:44:07', '2021-06-16 18:44:07'),
(852, 0, 'Md Shakil molla', '01728603169', 'faridpur sader-sun', 19, NULL, '2021-06-16 18:45:22', '2021-06-16 18:45:22'),
(853, 0, 'Aysha', '01851572859', 'Feni', 14, NULL, '2021-06-16 18:47:51', '2021-06-16 18:47:51'),
(854, 0, 'Lutfa siddique', '01765435895', 'Khustia', 36, NULL, '2021-06-16 18:49:56', '2021-06-16 18:49:56'),
(855, 0, 'Rasel', '01997815112', 'new bazar vatara 100 fit raod said nogor mohaymid medical', 1, NULL, '2021-06-16 20:26:03', '2021-06-16 20:26:03'),
(856, 0, 'মোঃ ইমরান হোসেন', '01726120859', 'ইঞ্জিনিয়ার ইনস্টিটিউট অব বাংলাদেশ শহীদ প্রকৌশলী ভবন রমনা পার্কের অপজিট পাশে', 1, NULL, '2021-06-16 20:30:03', '2021-06-16 20:30:03'),
(857, 0, 'MD Shahriyar Rafat', '01628198244', 'Khailgao,Shahjahanpur, Dhaka-1217', 1, NULL, '2021-06-16 20:31:34', '2021-06-16 20:31:34'),
(858, 0, 'Md Arif Hossain', '01745550525', 'Mirpur', 2, '3', '2021-06-16 21:20:04', '2021-06-16 21:20:04');
INSERT INTO `customers` (`id`, `user_id`, `name`, `phone`, `address`, `city_id`, `customer_type`, `created_at`, `updated_at`) VALUES
(859, 0, 'Mohasgor.com', '01635555777', 'mirpur10', 1, NULL, '2021-06-17 00:25:39', '2021-06-17 00:25:39'),
(860, 0, 'Zasmin akhter', '01731233560', 'Vheramara', 36, NULL, '2021-06-17 16:24:02', '2021-06-17 16:24:02'),
(861, 0, 'মোঃ আরিফুল ইসলাম', '01303254545', 'feni', 14, NULL, '2021-06-17 16:27:45', '2021-06-17 16:27:45'),
(862, 0, 'Tarek Ahmed', '01719952754', 'uttar bazar, D.C area.  Upozila: Kulaura', 62, NULL, '2021-06-17 16:29:57', '2021-06-17 16:29:57'),
(863, 0, 'Ms tasnuba buri', '01624546020', 'coxbazar', 13, NULL, '2021-06-17 17:16:19', '2021-06-17 17:16:19'),
(864, 0, 'এলিগেন্স ফ্যাশন', '01316209011', '\"Baridhara dohs road 12 house 540/6 1st floor\"', 2, '3', '2021-06-17 17:28:00', '2021-06-17 17:28:00'),
(865, 0, 'md sujon', '01824295564', 'donia boro mousjid,dolaipare,jatravari', 1, NULL, '2021-06-17 17:31:06', '2021-06-17 17:31:06'),
(866, 0, 'Aysha Jannat', '01637958829', 'Moulovibazar', 62, NULL, '2021-06-17 18:40:03', '2021-06-17 18:40:03'),
(867, 0, 'AbuTaher', '01950539926', 'bishwanath', 64, NULL, '2021-06-17 19:01:31', '2021-06-17 19:01:31'),
(868, 0, 'sasroy bd.com', '01843919332', 'mlrpur01', 1, NULL, '2021-06-17 19:33:56', '2021-06-17 19:33:56'),
(869, 0, 'Noman', '01876324674', 'Chomohoni', 17, NULL, '2021-06-17 20:12:55', '2021-06-17 20:12:55'),
(870, 0, 'Saifan Siddique', '01816758068', 'বরিশাল রূপাতলী বাস স্ট্যান্ড থেকে একটু সামনে হাউজিং এস্টেট', 3, NULL, '2021-06-19 19:25:29', '2021-06-19 19:25:29'),
(871, 0, 'তাওহিদ', '01877860817', 'পাথরঘাটা, বরগুনা। --', 2, NULL, '2021-06-19 19:27:30', '2021-06-19 19:27:30'),
(872, 0, 'মোরশেদুল আলম', '01824581353', 'চট্টগ্রাম বাঁশখালী জলদী মিয়ার বাজার', 11, NULL, '2021-06-19 19:30:26', '2021-06-19 19:30:26'),
(873, 0, 'Tamanna', '01741858681', '\"Kalmakanda, Netrakona Redx \"', 43, NULL, '2021-06-19 19:31:45', '2021-06-19 19:31:45'),
(874, 0, 'মোতালেব হোসেন', '01712118511', '\"সিরাজগঞ্জ জেলা শাহজাদপুর থানা Redx\"', 52, NULL, '2021-06-19 19:33:40', '2021-06-19 19:33:40'),
(875, 0, 'Md. Safin Hossain Abid', '01611260215', '\"Gazipur,kashempur,molla  (redx)\"', 20, NULL, '2021-06-19 19:42:25', '2021-06-19 19:42:25'),
(876, 0, 'Eleash sarker', '01717545724', 'Bogura--sun', 45, NULL, '2021-06-19 20:49:04', '2021-06-19 20:49:04'),
(877, 0, 'Foysal mizbandare', '01323675923', 'Kisorgonj--sun', 22, NULL, '2021-06-19 20:50:15', '2021-06-19 20:50:15'),
(878, 0, '\"Asraful Haque \"', '01716173465', 'sayestagonj', 39, NULL, '2021-06-19 20:54:07', '2021-06-19 20:54:07'),
(879, 0, 'Nilufor shimul', '01611698595', 'Laksam--jononi', 12, NULL, '2021-06-19 21:11:33', '2021-06-19 21:11:33'),
(880, 0, 'md Yasin arafat', '01840674914', 'maizdee', 17, NULL, '2021-06-19 21:13:34', '2021-06-19 21:13:34'),
(881, 0, 'tonju', '01721561075', 'Khustia--sun', 36, NULL, '2021-06-19 21:14:50', '2021-06-19 21:14:50'),
(882, 0, 'Nesar ahmed', '01303006423', 'Chandpur---sun', 10, NULL, '2021-06-19 21:15:55', '2021-06-19 21:15:55'),
(883, 0, 'Md bappy khan', '01811187504', 'Chowrasta--sa', 20, NULL, '2021-06-19 21:17:01', '2021-06-19 21:17:01'),
(884, 0, 'Md sobuj mia', '01721853581', 'Hajigonj--sun', 10, NULL, '2021-06-19 21:18:24', '2021-06-19 21:18:24'),
(885, 0, 'Shohel Chowdhury', '01711149256', 'জয়পুরহাট সদর,জয়পুরহাট।', 46, NULL, '2021-06-19 21:25:15', '2021-06-19 21:25:15'),
(886, 0, 'sanzida akter', '01993244869', 'KHulna', 35, NULL, '2021-06-19 21:51:05', '2021-06-19 21:51:05'),
(887, 0, 'Akib shuvo', '01720107056', '169 green road dhanmondi', 1, NULL, '2021-06-19 21:54:02', '2021-06-19 21:54:02'),
(888, 0, 'Rafiya rahman moli', '01945246621', 'B-baria', 9, NULL, '2021-06-19 21:56:31', '2021-06-19 21:56:31'),
(889, 0, 'Zihad hossain', '01909348113', 'Ishwarganj', 42, NULL, '2021-06-19 22:00:24', '2021-06-19 22:00:24'),
(890, 0, 'Flowra rahman', '01953220731', 'dinajpur--sador', 53, NULL, '2021-06-19 22:02:18', '2021-06-19 22:02:18'),
(891, 0, 'md asad', '01868735147', 'tejgaon,7th rastha,kogka tower', 1, NULL, '2021-06-19 22:13:05', '2021-06-19 22:13:05'),
(892, 0, '\"Jahid Islam Sohan \"', '01735155084', '৫৪/১-খ মাইকের গলি, কামালের দোকান, উত্তর পীরেরবাগ,  মিরপুর ৬০ ফিট রোড।।', 1, NULL, '2021-06-19 22:14:44', '2021-06-19 22:14:44'),
(893, 0, 'Imrul Islam', '01737744098', 'সেক্টর 6\'রোড়-13;হাউস -1,ঢাকা উত্তরা', 1, NULL, '2021-06-19 22:15:57', '2021-06-19 22:15:57'),
(894, 0, 'Md Balayet Sarkar', '01715234485', 'লাল মসজিদ, ব্যাংক কলোনি, নন্দীপাড়া, বাসাবো, খিলগাও, ঢাকা।', 1, NULL, '2021-06-19 22:16:59', '2021-06-19 22:16:59'),
(895, 0, 'MD. SHAH ALAM', '01773770501', '\"PLOT#2508 ROAD#08 BLOCK#L   BASHUNDHARA R/A\"', 1, NULL, '2021-06-19 22:18:11', '2021-06-19 22:18:11'),
(896, 0, 'md sumon', '01748613346', 'House#15, Block#E, Main road,Banasree,rampura,,c', 1, NULL, '2021-06-19 22:19:39', '2021-06-19 22:19:39'),
(897, 0, 'Md bappy', '01581086875', 'Tongi station road chompa senema hall', 1, NULL, '2021-06-19 22:21:24', '2021-06-19 22:21:24'),
(898, 0, 'Fakhrul islam', '01682233902', 'Postogula sampur oyasar gate', 1, NULL, '2021-06-19 22:23:52', '2021-06-19 22:23:52'),
(899, 0, 'Thowhidul Rume', '01677270578', 'Jatrabari, konapara', 1, NULL, '2021-06-19 22:24:50', '2021-06-19 22:24:50'),
(900, 0, 'মোঃ জুমার আলী', '01732160623', 'দিয়া বাড়ি, বটতলা  ০১৭৭৭৮৪০৬৫২', 1, NULL, '2021-06-19 22:53:56', '2021-06-19 22:53:56'),
(901, 0, 'Nihan Alam', '01322301386', 'uttara 12 saktor khalpor road 6 c', 1, NULL, '2021-06-20 00:12:42', '2021-06-20 00:12:42'),
(902, 0, 'Md Rabbi Khan', '01874512551', 'মান্ডা প্রথম গলি আল হেরা জামে মসজিদের', 1, NULL, '2021-06-20 00:26:34', '2021-06-20 00:26:34'),
(903, 0, 'Osman Goni', '01885697101', 'লোহাগাড়া চট্টগ্রাম', 11, NULL, '2021-06-20 16:19:08', '2021-06-20 16:19:08'),
(904, 0, 'Ranim Ayza', '01811283518', 'Nhila Teknaf Dhorgah para patrol pump', 13, NULL, '2021-06-20 16:20:52', '2021-06-20 16:20:52'),
(905, 0, 'Md Kamrul Hasan', '01867524281', 'Depz,saver asulia', 1, NULL, '2021-06-20 17:00:42', '2021-06-20 17:00:42'),
(906, 0, 'Md romjan', '01999464633', 'Kisorgonj--sun', 22, NULL, '2021-06-20 19:42:13', '2021-06-20 19:42:13'),
(907, 0, 'Sahriar emon', '01859206336', 'maona--sun', 20, NULL, '2021-06-20 19:44:18', '2021-06-20 19:44:18'),
(908, 0, 'md sazzad', '01716128539', 'Gaibanda', 54, NULL, '2021-06-20 19:46:07', '2021-06-20 19:46:07'),
(909, 0, 'mahedi hassan', '01707407743', 'dinajpur sader-sun', 53, NULL, '2021-06-20 19:48:14', '2021-06-20 19:48:14'),
(910, 0, 'Kamrun Nahar Popy', '01717557698', 'natore', 48, NULL, '2021-06-20 19:50:47', '2021-06-20 19:50:47'),
(911, 0, '\"Koushik Saha (Dipto) \"', '01709750765', 'Boro Dawri Bazar (kajal store), Lalmohon, Bhola', 4, NULL, '2021-06-20 19:54:02', '2021-06-20 19:54:02'),
(912, 0, 'Rakebul Islam', '01701953090', 'নওগাঁ জেলা মান্দা থানা', 47, NULL, '2021-06-20 20:05:11', '2021-06-20 20:05:11'),
(913, 0, 'md shohag', '01788274844', 'madaripur sador', 23, NULL, '2021-06-20 20:07:43', '2021-06-20 20:07:43'),
(914, 0, 'salim buiyan', '01860902069', 'কুমিল্লা কোম্পানীগন্জ', 12, NULL, '2021-06-20 20:12:41', '2021-06-20 20:12:41'),
(915, 0, 'Md Sabbir Hossain', '01792587322', 'khulna sadar-sa', 35, NULL, '2021-06-20 20:14:22', '2021-06-20 20:14:22'),
(916, 0, 'Fahim', '01635694315', 'Moulovibazar--sun', 62, NULL, '2021-06-20 20:15:57', '2021-06-20 20:15:57'),
(917, 0, 'Kamrul Kabir Azad', '01878791850', 'Nasirabad', 11, NULL, '2021-06-20 21:13:56', '2021-06-20 21:13:56'),
(918, 0, 'Mursed alam', '01983501758', 'hajigonj', 10, NULL, '2021-06-20 21:24:00', '2021-06-20 21:24:00'),
(919, 0, 'sujon', '01679834924', 'mirpur', 1, NULL, '2021-06-20 21:26:09', '2021-06-20 21:26:09'),
(920, 0, 'Hf Hridoy Hossain', '01317624536', '\"Khilgaon basabob 10 ar mor ছায়িদিয়া মাদরাসার সামনে\"', 1, NULL, '2021-06-20 22:45:14', '2021-06-20 22:45:14'),
(921, 0, 'Rafeya akter dollu', '01863408568', 'H24, Road-20, Sector-4, Uttara, dhaka. Phone 01863 408568', 1, NULL, '2021-06-20 22:47:51', '2021-06-20 22:47:51'),
(922, 0, 'Mostarin MunMun', '01680403270', '42,rankin street, wari, Dhaka', 1, NULL, '2021-06-20 22:49:59', '2021-06-20 22:49:59'),
(923, 0, 'hafej mahmudul hasan', '01608117260', 'uttara azampur rail crosh al amin jame mosjit', 1, NULL, '2021-06-20 22:51:20', '2021-06-20 22:51:20'),
(924, 0, 'md jahangir alam', '01626455030', 'mirpur 13 baistaki 35/2', 1, NULL, '2021-06-20 22:53:39', '2021-06-20 22:53:39'),
(925, 0, 'MD Akash Khan Bappy', '01640030696', 'হাউস নাম্বার ৪৮,রোড নাম্বার ৫,ধানমন্ডি.', 1, NULL, '2021-06-20 22:55:31', '2021-06-20 22:55:31'),
(926, 0, 'Fj Jannat', '01783975712', '\"Uttara sector#11 Road#16\"', 1, NULL, '2021-06-20 22:56:47', '2021-06-20 22:56:47'),
(927, 0, 'Rj Jannat', '01755968733', '01755968733', 17, NULL, '2021-06-21 16:58:54', '2021-06-21 16:58:54'),
(928, 0, 'মোঃ সোহেল মিয়া', '01757428476', 'বি-বাড়িয়া জেলার সরাইল উপজেলা,', 9, NULL, '2021-06-21 17:00:58', '2021-06-21 17:00:58'),
(929, 0, 'Sonali Hsarker', '01731900647', 'পেপারস,মুন্সিপাড়া,দিনাজপুর। pahato', 53, NULL, '2021-06-21 17:03:12', '2021-06-21 17:03:12'),
(930, 0, 'Nasir uddin', '01883407327', 'Ukhia Cox’sbazar', 13, NULL, '2021-06-21 17:04:20', '2021-06-21 17:04:20'),
(931, 0, 'Muhammad Abu Naser', '01812338844', 'North katotality,City gate,  Mustafa Hakim college road,Akbarsha,Chittagong', 11, NULL, '2021-06-21 17:14:42', '2021-06-21 17:14:42'),
(932, 0, 'Tareq Ahmed', '01751260539', '\"District : Kishoreganj  Thana : Bajitpur  Union /post office : Halimpur\"', 22, NULL, '2021-06-21 17:18:03', '2021-06-21 17:18:03'),
(933, 0, 'Hafiz md najim', '01945324095', 'Lohagora--norail-', 39, NULL, '2021-06-21 17:19:37', '2021-06-21 17:19:37'),
(934, 0, 'Tipu sardar', '01912001183', 'Pansgsha thana-rajbari', 28, NULL, '2021-06-21 17:21:19', '2021-06-21 17:21:19'),
(935, 0, 'Mohammad Robiul Islam', '01828380027', 'Bhavanipur,Raninagar bazar,Raninagar,Naogaon', 47, NULL, '2021-06-21 17:25:52', '2021-06-21 17:25:52'),
(936, 0, 'Shariar munsi', '01975625934', 'Hemayetpur tetuljora vertex RMZ  Divition', 40, NULL, '2021-06-21 18:50:30', '2021-06-21 18:50:30'),
(937, 0, 'Md Abubakor', '01720910212', 'বিশ্বনাথ, সিলেট', 64, NULL, '2021-06-21 19:12:19', '2021-06-21 19:12:19'),
(938, 0, 'MD Shohide', '01858707672', 'চট্টগ্রাম পাহাড়তলী  বাজার', 11, NULL, '2021-06-21 20:02:56', '2021-06-21 20:02:56'),
(939, 0, 'Jahangir alam', '01717462796', 'Netrokona--sun', 43, NULL, '2021-06-21 20:10:51', '2021-06-21 20:10:51'),
(940, 0, 'Al amin', '01768209664', 'Rongpur', 59, NULL, '2021-06-21 20:13:54', '2021-06-21 20:13:54'),
(941, 0, 'Tawheda yesmin', '01712772196', 'Sariakandi--kcs', 45, NULL, '2021-06-21 20:16:19', '2021-06-21 20:16:19'),
(942, 0, 'samiul Islam abir', '01864733104', 'MAWNA', 20, NULL, '2021-06-21 20:17:37', '2021-06-21 20:17:37'),
(943, 0, 'মৌসুমি ,,', '01831566737', '\"দোয়াভাঙ্গা বাজার -- উপজেলা : শাহরাস্তি জেলা: চাঁদপুর \"', 10, NULL, '2021-06-21 20:21:19', '2021-06-21 20:21:19'),
(944, 0, 'Ibtesam Hasan Wasif', '01774398808', 'kurigram  sader-sun', 12, NULL, '2021-06-21 20:25:34', '2021-06-21 20:25:34'),
(945, 0, 'Abu sayed', '01722535124', 'Bogura', 45, NULL, '2021-06-21 20:48:17', '2021-06-21 20:48:17'),
(946, 0, 'Mr raju', '01723071127', 'Mouloviubazar', 62, NULL, '2021-06-21 20:49:37', '2021-06-21 20:49:37'),
(947, 0, 'Aaysha siddika', '01744551666', 'Aaysha siddika', 6, NULL, '2021-06-21 20:52:13', '2021-06-21 20:52:13'),
(948, 0, 'emon', '01760714058', '\"Ta 58/j 1, Modda badda Badda high school  \"', 1, NULL, '2021-06-21 20:54:29', '2021-06-21 21:49:11'),
(949, 0, 'Al Mamun', '01886273605', 'Mohakali Agrani bank Road, Fair Kazi Building, Banani, Dhaka', 1, NULL, '2021-06-21 21:31:22', '2021-06-21 21:31:22'),
(950, 0, 'Islam Shuvo', '01714638285', 'sarulia,demra', 1, NULL, '2021-06-21 21:34:40', '2021-06-21 21:34:40'),
(951, 0, 'Md bablu', '01788579408', 'Kamrangichor rony market', 1, NULL, '2021-06-21 21:38:38', '2021-06-21 21:38:38'),
(952, 0, 'Faruk hossain', '01708814708', 'bawniya madarbari turag uttora', 1, NULL, '2021-06-21 21:41:08', '2021-06-21 21:41:08'),
(953, 0, 'Mímu', '01685073710', 'হযরত নগর ঝাউলাহাটি কামরাঙ্গীরচর মেম্বার বাড়ি মসজিদ।', 1, NULL, '2021-06-21 21:45:47', '2021-06-21 21:45:47'),
(954, 0, 'Pias Qmc', '01863341617', 'address ka 52 jour Shara kruil bisroad', 1, NULL, '2021-06-21 22:00:37', '2021-06-21 22:00:37'),
(955, 0, 'Rownak jahan shapla', '01711302815', 'bogura sador-bow bazar--kcs', 45, NULL, '2021-06-22 16:31:33', '2021-06-22 16:31:33'),
(956, 0, 'Rayhan Rajkomar', '01815177652', 'feni sader-sun', 14, NULL, '2021-06-22 17:07:11', '2021-06-22 17:07:11'),
(957, 0, 'md safiqul islam', '01643596926', 'kusaria,gatail,tangail', 30, NULL, '2021-06-22 17:11:53', '2021-06-22 17:11:53'),
(958, 0, 'S M Ariful Islam Arif', '01760588505', 'Rajshahi, kadirgonj...phatho', 51, NULL, '2021-06-22 17:14:00', '2021-06-22 17:14:00'),
(959, 0, 'Roshid Salim', '01641289534', '\"Sylhet mejortila muhhamdpur  Apon nibash 18 no basa\"', 64, NULL, '2021-06-22 17:15:17', '2021-06-22 17:15:17'),
(960, 0, 'Nazir Hossain Imran', '01997184443', 'Jamuna bank,Jamgora Ashulia,Opposite Fantacy Kingdom.', 20, NULL, '2021-06-22 17:17:37', '2021-06-22 17:17:37'),
(961, 0, 'Jûthî Åhmëd', '01714437753', 'Rohanpur ,Capaynobabgonj', 49, NULL, '2021-06-22 17:49:45', '2021-06-22 17:49:45'),
(962, 0, 'Ripa Faruki', '01723276173', 'netrokona--sun', 43, NULL, '2021-06-22 17:51:43', '2021-06-22 17:51:43'),
(963, 0, 'Tanha Safar', '01764415020', 'cumilla', 12, NULL, '2021-06-22 17:53:33', '2021-06-22 17:53:33'),
(964, 0, 'himo', '01910600212', 'kisorgonj,karimgonj', 22, NULL, '2021-06-22 18:07:06', '2021-06-22 18:07:06'),
(965, 0, 'Md asik shekh', '01790542678', 'jossor--dormotola', 33, NULL, '2021-06-22 18:16:00', '2021-06-22 18:16:00'),
(966, 0, 'hossain hazi', '01878935230', 'chandpur,hajigonj', 10, NULL, '2021-06-22 18:19:59', '2021-06-22 18:19:59'),
(967, 0, 'jalal uddin', '01731689813', 'sylhet sader -sun--01715417748', 64, NULL, '2021-06-22 19:40:33', '2021-06-22 19:40:33'),
(968, 0, 'Farzana Akter', '01836479412', 'Choddogram', 12, NULL, '2021-06-22 19:43:01', '2021-06-22 19:43:01'),
(969, 0, 'Mahmudul Haque Shaown', '01730317486', 'Halishahar, sundhorbon curiar, ctg.', 11, NULL, '2021-06-22 19:44:38', '2021-06-22 19:44:38'),
(970, 0, 'shohag miya', '01910871443', 'lalithavari,serpur', 44, NULL, '2021-06-22 19:51:53', '2021-06-22 19:51:53'),
(971, 0, 'Sadia Soma', '01755200770', 'Jessore new Market sundarbon curior service.', 33, NULL, '2021-06-22 19:55:21', '2021-06-22 19:55:21'),
(972, 0, 'ms farhana', '01746501418', 'sirajgonj  sader', 52, NULL, '2021-06-22 19:56:36', '2021-06-22 19:56:36'),
(973, 0, 'Md jamal', '01311107432', 'Chittagong--amin market', 11, NULL, '2021-06-22 20:26:40', '2021-06-22 20:26:40'),
(974, 0, 'Mintu dutto', '01991948460', 'agrabad cda 17 no raod building 111/b,', 11, NULL, '2021-06-22 20:51:31', '2021-06-22 20:51:31'),
(975, 0, 'Milu', '01819109268', 'nasirabad', 11, NULL, '2021-06-22 22:06:32', '2021-06-22 22:11:37'),
(976, 0, 'Faysal adnan', '01712025590', 'keranigonj', 1, NULL, '2021-06-22 22:24:47', '2021-06-22 22:24:47'),
(977, 0, 'Shanjamul Karim Chowdhury', '01739176789', 'Tikana..Dhaka kilket.. Nikunj 2 Road 5.', 1, NULL, '2021-06-22 23:28:41', '2021-06-22 23:28:41'),
(978, 0, 'shilpi', '01793452844', '\"মিরপুর ১১ রোড ১০ লাইন১৬ বায়তুল ফালা মসজিদের সামনে এসে ফোন দিলে হবে  নাম্বার  \"', 1, NULL, '2021-06-22 23:52:05', '2021-06-22 23:52:05'),
(979, 0, 'Emam Hossain', '01742151100', 'Mia Tower 59 West Agargaon dhaka 1207', 1, NULL, '2021-06-22 23:59:15', '2021-06-22 23:59:15'),
(980, 0, 'Ahmed Hridoy', '01936610784', 'Khilgaon Bashabo  10 ar mor', 1, NULL, '2021-06-23 00:04:47', '2021-06-23 00:04:47'),
(981, 0, 'Tipu Sultan', '01820926770', 'পোঃ রামগতির হাট, থানা রামগতি, জেলা লক্ষ্মীপুর।', 16, NULL, '2021-06-23 14:40:30', '2021-06-23 14:40:30'),
(982, 0, 'Tamima Sraboni', '01515277064', 'pabna sader', 50, NULL, '2021-06-23 14:44:00', '2021-06-23 14:44:00'),
(983, 0, 'Atiqul Islam Nadim', '01776649331', 'Chapainawabgonj sador', 49, NULL, '2021-06-23 14:46:11', '2021-06-23 14:46:11'),
(984, 0, 'মোহা : ইসমাইল', '01865649585', 'cumilla', 12, NULL, '2021-06-23 14:51:05', '2021-06-23 14:51:05'),
(985, 0, 'Md Azaharul Islam', '01717978451', 'Tangail Sadar,Tangail.', 30, NULL, '2021-06-23 14:54:10', '2021-06-23 14:54:10'),
(986, 0, 'Faruk hossain', '01708814704', 'bawniya madarbari turag uttora', 1, NULL, '2021-06-23 15:04:36', '2021-06-23 15:04:36'),
(987, 0, 'alok sarker', '01775989670', 'cumilla', 12, NULL, '2021-06-23 15:07:20', '2021-06-23 15:07:20'),
(988, 0, 'hasna hena', '01978502022', 'jessor', 33, NULL, '2021-06-23 15:11:20', '2021-06-23 15:11:20'),
(989, 0, 'papri dhar', '01301009076', '87 kb abdur sttar road , Rahamatgong ,mitali neer, Chittagong.', 11, NULL, '2021-06-23 16:07:06', '2021-06-23 16:07:06'),
(990, 0, 'Ernest Engel Surovi', '01713187341', 'Joypurhat sader', 46, NULL, '2021-06-23 17:32:13', '2021-06-23 17:32:13'),
(991, 0, 'Mastara Khan Priya', '01731337656', 'Dist.Gopalgonj.upozila. Muksudpur.', 21, NULL, '2021-06-23 19:58:38', '2021-06-23 19:58:38'),
(992, 0, '\"Md mahmudul hasan 001\"', '01780792918', 'Shahjalal housing mohammadpur', 1, NULL, '2021-06-23 20:27:04', '2021-06-23 20:27:04'),
(993, 0, 'Shibbir Ahmad', '01737481778', 'Dhaka', 53, '1', '2021-06-23 20:51:20', '2021-07-03 13:24:55');

-- --------------------------------------------------------

--
-- Table structure for table `customer_dues`
--

CREATE TABLE `customer_dues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sale_id` int(11) NOT NULL,
  `customer_mobile_no` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer_dues`
--

INSERT INTO `customer_dues` (`id`, `sale_id`, `customer_mobile_no`, `customer_name`, `amount`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, '01737481778', 'Shibbir Ahmad', 0, 1, '2021-06-26 05:16:24', '2021-06-26 05:17:55'),
(2, 4, '01759416979', 'Daraz.com.bd', 200, 0, '2021-06-26 05:52:37', NULL),
(3, 3, '01759416979', 'Daraz.com.bd', 400, 0, '2021-07-01 10:41:24', NULL),
(4, 8, '01737481778', 'Shibbir Ahmad', 0, 1, '2021-07-01 10:59:05', '2021-07-03 07:47:13'),
(5, 9, '01737481778', 'Shibbir Ahmad', 0, 1, '2021-07-03 10:35:51', '2021-07-03 12:04:31'),
(6, 10, '01737481778', 'Shibbir Ahmad', 400, 0, '2021-07-03 12:05:12', NULL),
(7, 11, '01737481778', 'Shibbir Ahmad', 150, 0, '2021-07-11 13:25:54', NULL),
(8, 12, '01737481778', 'Shibbir Ahmad', 650, 0, '2021-07-11 13:29:46', NULL),
(9, 13, '01737481778', 'Shibbir Ahmad', 650, 0, '2021-07-11 13:31:36', NULL),
(10, 14, '01759416979', 'shibbir ahmad', 400, 0, '2021-07-11 13:32:44', NULL),
(11, 15, '01737481778', 'Shibbir Ahmad', 400, 0, '2021-07-11 13:34:18', NULL),
(12, 16, '01759416979', 'shibbir ahmad', 800, 0, '2021-07-11 13:38:30', NULL),
(13, 17, '01759416979', 'Daraz.com.bd', 800, 0, '2021-07-11 14:05:14', NULL),
(14, 18, '01737481778', 'Shibbir Ahmad', 400, 0, '2021-07-12 06:40:42', NULL),
(15, 19, '01737481778', 'Shibbir Ahmad', 800, 0, '2021-07-12 06:46:27', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customer_wallets`
--

CREATE TABLE `customer_wallets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customer_wallets`
--

INSERT INTO `customer_wallets` (`id`, `user_id`, `point`, `created_at`, `updated_at`) VALUES
(1, 993, 8, '2021-06-24 12:39:51', '2021-07-03 13:23:34'),
(2, 513, 0, '2021-07-11 12:40:00', '2021-07-11 12:40:00');

-- --------------------------------------------------------

--
-- Table structure for table `debits`
--

CREATE TABLE `debits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL COMMENT 'date',
  `purpose` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance_id` int(11) NOT NULL,
  `amount` double(8,2) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `signature` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `insert_admin_id` int(11) NOT NULL COMMENT 'store_admin_id',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `debits`
--

INSERT INTO `debits` (`id`, `date`, `purpose`, `balance_id`, `amount`, `comment`, `signature`, `insert_admin_id`, `created_at`, `updated_at`) VALUES
(1, '2021-07-03', '21', 1, 500.00, 'test(Internet Bill)', 'images/debitSignature/debit-signature-1625289326.png', 54, '2021-07-03 05:15:26', '2021-07-03 05:15:26'),
(2, '2021-07-03', '9', 1, 1000.00, 'Fund Transfer 1-3. Amount 1000', NULL, 54, '2021-07-03 06:28:05', '2021-07-03 06:28:05'),
(3, '2021-07-03', '9', 3, 400.00, 'Fund Transfer 3-8. Amount 400', NULL, 54, '2021-07-03 06:42:44', '2021-07-03 06:42:44');

-- --------------------------------------------------------

--
-- Table structure for table `discount_memberships`
--

CREATE TABLE `discount_memberships` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` int(11) NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) NOT NULL,
  `name` text NOT NULL,
  `joining_date` text DEFAULT NULL,
  `designation` text NOT NULL,
  `phone` text NOT NULL,
  `phone_office` text DEFAULT NULL,
  `email` text NOT NULL,
  `position` int(11) NOT NULL,
  `avator` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `resume` text DEFAULT NULL,
  `details` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employee_salaries`
--

CREATE TABLE `employee_salaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `employee_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `paid` int(11) NOT NULL DEFAULT 0,
  `date` date NOT NULL,
  `comment` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `factories`
--

CREATE TABLE `factories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fond_transfers`
--

CREATE TABLE `fond_transfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `to` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(8,2) NOT NULL,
  `cost` double(8,2) NOT NULL DEFAULT 0.00,
  `creator_admin` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `fond_transfers`
--

INSERT INTO `fond_transfers` (`id`, `from`, `to`, `amount`, `cost`, `creator_admin`, `created_at`, `updated_at`) VALUES
(1, 'Cash', 'Bkash(personal)', 500.00, 5.00, 'Madina Fashion', '2021-06-24 12:00:29', '2021-06-24 12:00:29'),
(2, 'Cash', 'Bkash(personal)', 200.00, 0.00, 'Madina Fashion', '2021-06-24 12:01:08', '2021-06-24 12:01:08'),
(3, 'Cash', 'Bkash(personal)', 100.00, 0.00, 'Madina Fashion', '2021-06-24 12:03:41', '2021-06-24 12:03:41'),
(4, 'Cash', 'Bkash(personal)', 100.00, 0.00, 'Madina Fashion', '2021-06-24 12:16:41', '2021-06-24 12:16:41'),
(5, '1', '3', 1000.00, 1.50, 'Madina Fashion', '2021-07-03 06:28:05', '2021-07-03 06:28:05'),
(6, '3', '8', 400.00, 0.50, 'Madina Fashion', '2021-07-03 06:42:44', '2021-07-03 06:42:44');

-- --------------------------------------------------------

--
-- Table structure for table `footer_settings`
--

CREATE TABLE `footer_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `facebook_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin_url` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `copyright_info` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footer_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footer_settings`
--

INSERT INTO `footer_settings` (`id`, `facebook_url`, `twitter_url`, `youtube_url`, `linkedin_url`, `copyright_info`, `footer_description`, `created_at`, `updated_at`) VALUES
(1, 'https://www.facebook.com/madinafashin', 'https://madinafashio.com.bd', 'https://madinafashio.com.bd', 'null', 'Copyright © madinafashio.com.bd 2021. All rights reserved', '<p><strong>Madinafashio.com.bd</strong> is a complete e-commerce website. Here, consumers of all ages can buy every essential product of the day, from gadgets, home appliances, leather goods, baby accessories, cosmetics, fashion, and lifestyle products to affordable prices at home</p><p>&nbsp;</p>', '2021-01-10 05:33:59', '2021-06-26 06:04:29');

-- --------------------------------------------------------

--
-- Table structure for table `found_transfers`
--

CREATE TABLE `found_transfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `from` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `to` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(8,2) NOT NULL,
  `cost` int(11) NOT NULL DEFAULT 0,
  `creator_admin` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

CREATE TABLE `general_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `logo` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `header_contact_number` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `wallet_point_value` int(11) NOT NULL DEFAULT 0,
  `invoice_address_details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `general_settings`
--

INSERT INTO `general_settings` (`id`, `logo`, `title`, `icon`, `header_contact_number`, `wallet_point_value`, `invoice_address_details`, `created_at`, `updated_at`) VALUES
(1, 'images/general_setting/emMhFBRFjvv3w9RQiW8t4CL7k2WIBpigpRPv2Fxu.png', 'madinafashion.com.bd', 'images/general_setting/ty9k7BqAwTXnCDQGMU9sVUylrKDScK7nNlQbkrcT.png', '01828044000', 2, '<p>Office: House-36, Road-6, Block-A,&nbsp;</p><p>&nbsp;Benaroshi Polli, Mirpur-10, Dhaka 1216</p><p>&nbsp;Phone: &nbsp;01715900066, 01732 199992&nbsp;</p><p>Email: madinafashion2017<a href=\"mailto:punokbd@gmail.com\">@gmail.com</a></p>', '2021-01-10 05:29:08', '2021-07-11 12:24:01');

-- --------------------------------------------------------

--
-- Table structure for table `investments`
--

CREATE TABLE `investments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `investor_id` int(11) NOT NULL,
  `purpose` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `investments`
--

INSERT INTO `investments` (`id`, `date`, `investor_id`, `purpose`, `amount`, `created_at`, `updated_at`) VALUES
(1, '2021-06-26', 1, 'test', 400.00, '2021-06-26 12:55:42', '2021-06-26 12:55:42'),
(2, '2021-06-26', 1, 'tst', 400.00, '2021-06-26 12:55:54', '2021-06-26 12:55:54');

-- --------------------------------------------------------

--
-- Table structure for table `investment_returns`
--

CREATE TABLE `investment_returns` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `investor_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `investors`
--

CREATE TABLE `investors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referance_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profit_margin` int(11) NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `investors`
--

INSERT INTO `investors` (`id`, `name`, `referance_name`, `mobile_no`, `profit_margin`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Shibbir Ahmad', 'Fahim', '01737481778', 5, 'Dhaka', '2021-06-26 12:55:42', '2021-06-26 12:55:42');

-- --------------------------------------------------------

--
-- Table structure for table `investor_profit_paids`
--

CREATE TABLE `investor_profit_paids` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `investor_id` int(11) NOT NULL,
  `amount` double(8,2) NOT NULL,
  `profit_month` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_applies`
--

CREATE TABLE `job_applies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `file` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `loaners`
--

CREATE TABLE `loaners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_no` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `loaners`
--

INSERT INTO `loaners` (`id`, `name`, `mobile_no`, `address`, `created_at`, `updated_at`) VALUES
(1, 'Mohammad', '01737481778', 'Dhaka', '2021-06-26 12:54:52', '2021-06-26 12:54:52');

-- --------------------------------------------------------

--
-- Table structure for table `loans`
--

CREATE TABLE `loans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `loaner_id` int(11) NOT NULL,
  `purpose` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date NOT NULL,
  `amount` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `loans`
--

INSERT INTO `loans` (`id`, `loaner_id`, `purpose`, `date`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, 'test', '2021-06-26', 1000.00, '2021-06-26 12:54:52', '2021-06-26 12:54:52'),
(2, 1, 'secon', '2021-06-26', 1000.00, '2021-06-26 12:55:07', '2021-06-26 12:55:07');

-- --------------------------------------------------------

--
-- Table structure for table `loan_paids`
--

CREATE TABLE `loan_paids` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `loaner_id` int(11) NOT NULL,
  `amount` double(8,2) NOT NULL,
  `date` date NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `merchants`
--

CREATE TABLE `merchants` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `company_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL COMMENT '2=deny, 0=pending, 1=approved',
  `remember_token` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `merchants`
--

INSERT INTO `merchants` (`id`, `name`, `email`, `password`, `phone`, `company_name`, `image`, `address`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Mohasagor', 'm@gmail.com', '$2y$10$ed/KYDWzPjO4u6vCnQejiu3uKdMNmdPzPmvk7Frwik8.leRzmGzp.', '01737481778', 'Mohasagor', 'images/merchant/eYcgSJ2WsHXbNXKNrnirScte7Q6dnExQa90PxcSM.png', 'Benaroshi polli, Dhaka-1216', 1, NULL, '2021-07-06 10:32:34', '2021-07-06 12:11:25');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2020_08_13_074443_create_categories_table', 1),
(4, '2020_08_17_060825_create_admins_table', 1),
(5, '2020_08_18_122228_create_sub_categories_table', 2),
(6, '2020_08_19_053842_create_sub_sub_categories_table', 2),
(7, '2020_08_19_081000_create_sliders_table', 2),
(8, '2020_08_19_104901_create_attributes_table', 2),
(9, '2020_08_19_105047_create_variants_table', 2),
(10, '2020_08_23_052431_create_merchants_table', 3),
(11, '2020_08_23_064414_create_couriers_table', 3),
(12, '2020_08_23_064458_create_cities_table', 3),
(13, '2020_08_23_075702_create_comments_table', 3),
(14, '2020_08_23_093241_create_products_table', 3),
(15, '2020_08_23_093326_create_product_images_table', 3),
(16, '2020_08_24_051714_create_product_variants_table', 3),
(17, '2020_08_24_052410_create_product_attributes_table', 3),
(18, '2020_08_25_055640_create_coupons_table', 3),
(19, '2020_08_25_082149_create_product_barcodes_table', 3),
(20, '2020_08_26_111627_create_purchases_table', 3),
(21, '2020_08_29_113350_create_purchaseitems_table', 3),
(29, '2020_09_05_164925_create_orders_table', 5),
(30, '2020_09_05_165048_create_order_items_table', 5),
(31, '2020_09_05_172052_create_customers_table', 5),
(32, '2020_08_31_110050_create_offers_table', 6),
(33, '2014_10_12_000000_create_users_table', 7),
(34, '2020_10_01_083322_create_sales_table', 8),
(35, '2020_10_01_083424_create_sale_items_table', 8),
(38, '2020_10_13_063649_create_companies_table', 9),
(42, '2020_10_15_080411_create_subscribers_table', 10),
(43, '2020_10_15_082430_create_contacts_table', 10),
(44, '2020_10_17_070148_create_resellers_table', 10),
(45, '2020_10_19_071659_create_reseller_order_details_table', 11),
(46, '2020_10_22_081732_create_selling__offers_table', 12),
(47, '2020_10_24_115225_create_carriers_table', 12),
(48, '2020_10_26_100913_create_job_applies_table', 12),
(49, '2020_10_28_094859_create_permission_tables', 13),
(51, '2020_10_28_101402_create_merchants_table', 14),
(52, '2020_11_05_080038_create_credit_dues_table', 15),
(53, '2020_11_09_052816_create_account_purposes_table', 16),
(54, '2020_11_09_100132_create_employee_salaries_table', 17),
(55, '2020_11_10_103502_create_category_sliders_table', 18),
(56, '2020_11_18_050426_create_order_barcodes_table', 19),
(57, '2020_11_18_110811_create_supplier_payments_table', 20),
(58, '2020_11_19_054703_create_customer_dues_table', 21),
(59, '2020_11_25_061607_create_reseller_models_table', 21),
(60, '2020_11_25_061640_create_reseller_payments_table', 22),
(61, '2020_12_03_055822_create_factories_table', 22),
(62, '2020_12_06_054115_create_found_transfers_table', 22),
(63, '2020_12_06_070445_create_fond_transfers_table', 23),
(64, '2021_01_02_134847_create_loaners_table', 23),
(66, '2021_01_02_170332_create_loans_table', 24),
(67, '2021_01_04_164956_create_salary_per_months_table', 25),
(68, '2021_01_09_174652_create_otp_verifications_table', 26),
(69, '2021_01_11_154041_create_sub_cities_table', 27),
(72, '2021_01_23_174005_create_occasion_products_table', 28),
(73, '2021_01_23_174505_create_seasonal_products_table', 28),
(74, '2021_01_24_173843_create_buy_one_get_one_offers_table', 29);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_permissions`
--

INSERT INTO `model_has_permissions` (`permission_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\Admin', 54),
(2, 'App\\Models\\Admin', 54),
(6, 'App\\Models\\Admin', 54),
(5, 'App\\Models\\Admin', 54),
(37, 'App\\Models\\Admin', 54),
(33, 'App\\Models\\Admin', 54),
(27, 'App\\Models\\Admin', 54),
(23, 'App\\Models\\Admin', 54),
(19, 'App\\Models\\Admin', 54),
(20, 'App\\Models\\Admin', 54),
(24, 'App\\Models\\Admin', 54),
(28, 'App\\Models\\Admin', 54),
(34, 'App\\Models\\Admin', 54),
(38, 'App\\Models\\Admin', 54),
(35, 'App\\Models\\Admin', 54),
(31, 'App\\Models\\Admin', 54),
(29, 'App\\Models\\Admin', 54),
(25, 'App\\Models\\Admin', 54),
(21, 'App\\Models\\Admin', 54),
(26, 'App\\Models\\Admin', 54),
(30, 'App\\Models\\Admin', 54),
(32, 'App\\Models\\Admin', 54),
(36, 'App\\Models\\Admin', 54),
(22, 'App\\Models\\Admin', 54),
(18, 'App\\Models\\Admin', 54),
(17, 'App\\Models\\Admin', 54),
(13, 'App\\Models\\Admin', 54),
(9, 'App\\Models\\Admin', 54),
(8, 'App\\Models\\Admin', 54),
(4, 'App\\Models\\Admin', 54),
(3, 'App\\Models\\Admin', 54),
(7, 'App\\Models\\Admin', 54),
(12, 'App\\Models\\Admin', 54),
(16, 'App\\Models\\Admin', 54),
(15, 'App\\Models\\Admin', 54),
(11, 'App\\Models\\Admin', 54),
(10, 'App\\Models\\Admin', 54),
(14, 'App\\Models\\Admin', 54);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\Admin', 3),
(1, 'App\\Models\\Admin', 23),
(1, 'App\\Models\\Admin', 53),
(1, 'App\\Models\\Admin', 54),
(2, 'App\\Models\\Admin', 25),
(2, 'App\\Models\\Admin', 31),
(2, 'App\\Models\\Admin', 32),
(2, 'App\\Models\\Admin', 33),
(2, 'App\\Models\\Admin', 38),
(2, 'App\\Models\\Admin', 39),
(2, 'App\\Models\\Admin', 41),
(2, 'App\\Models\\Admin', 42),
(2, 'App\\Models\\Admin', 52),
(2, 'App\\Models\\Admin', 54),
(2, 'App\\Models\\Admin', 55),
(3, 'App\\Models\\Admin', 32),
(3, 'App\\Models\\Admin', 42),
(3, 'App\\Models\\Admin', 50),
(3, 'App\\Models\\Admin', 52),
(3, 'App\\Models\\Admin', 54),
(4, 'App\\Models\\Admin', 32),
(4, 'App\\Models\\Admin', 42),
(4, 'App\\Models\\Admin', 52),
(4, 'App\\Models\\Admin', 54),
(5, 'App\\Models\\Admin', 25),
(5, 'App\\Models\\Admin', 31),
(5, 'App\\Models\\Admin', 32),
(5, 'App\\Models\\Admin', 33),
(5, 'App\\Models\\Admin', 38),
(5, 'App\\Models\\Admin', 39),
(5, 'App\\Models\\Admin', 42),
(5, 'App\\Models\\Admin', 52),
(5, 'App\\Models\\Admin', 54),
(5, 'App\\Models\\Admin', 55),
(6, 'App\\Models\\Admin', 41),
(6, 'App\\Models\\Admin', 54),
(7, 'App\\Models\\Admin', 41);

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`id`, `image`, `url`, `status`, `created_at`, `updated_at`) VALUES
(1, 'images/offer/284wAoiVSx58vQ64DtnmFHxoB6IeDJOJSJitXzm9.jpg', 'https://madinafashion.com.bd/t-shirt', 1, '2021-07-04 11:34:21', '2021-07-04 11:34:21');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_no` int(11) NOT NULL,
  `order_type` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `cutomer_phone` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `city_id` int(11) DEFAULT NULL,
  `sub_city_id` int(11) DEFAULT NULL,
  `courier_id` int(11) DEFAULT NULL,
  `shipping_cost` int(11) NOT NULL DEFAULT 0,
  `discount` int(11) NOT NULL DEFAULT 0,
  `paid` int(11) NOT NULL DEFAULT 0,
  `paid_by` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total` float NOT NULL,
  `status` int(11) NOT NULL,
  `memo_no` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_admin_id` int(11) DEFAULT NULL,
  `pending_admin_id` int(11) DEFAULT NULL,
  `pending_date` date DEFAULT NULL,
  `approved_admin_id` int(11) DEFAULT NULL,
  `approved_date` date DEFAULT NULL,
  `shipment_admin_id` int(11) DEFAULT NULL,
  `shippment_date` date DEFAULT NULL,
  `delivered_admin_id` int(11) DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  `cancel_admin_id` int(11) DEFAULT NULL,
  `cancel_date` date DEFAULT NULL,
  `return_admin_id` int(11) DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `reseller_id` int(11) DEFAULT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `invoice_no`, `order_type`, `customer_id`, `cutomer_phone`, `city_id`, `sub_city_id`, `courier_id`, `shipping_cost`, `discount`, `paid`, `paid_by`, `total`, `status`, `memo_no`, `create_admin_id`, `pending_admin_id`, `pending_date`, `approved_admin_id`, `approved_date`, `shipment_admin_id`, `shippment_date`, `delivered_admin_id`, `delivery_date`, `cancel_admin_id`, `cancel_date`, `return_admin_id`, `return_date`, `reseller_id`, `comment`, `created_at`, `updated_at`) VALUES
(1, 41151, 2, 993, '01737481778', 1, 739, 5, 70, 0, 800, '3', 900, 5, '254687', 54, 54, '2021-07-01', 54, '2021-07-03', 54, '2021-07-03', 54, '2021-07-03', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-01 11:22:20', '2021-07-03 12:33:17'),
(2, 41152, 3, 993, '01737481778', 1, 891, 5, 70, 50, 920, '4', 900, 5, '5482545', 54, 54, '2021-07-01', 54, '2021-07-03', 54, '2021-07-03', 54, '2021-07-03', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-01 11:54:07', '2021-07-03 12:24:38'),
(3, 41153, 2, 993, '01737481778', 1, 92, 5, 70, 0, 0, '4', 900, 5, '54875', 54, NULL, NULL, 54, '2021-07-03', 54, '2021-07-03', 54, '2021-07-03', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-03 12:34:41', '2021-07-03 12:35:22'),
(4, 41154, 2, 993, '01737481778', 12, 187, 4, 120, 0, 0, '1', 900, 5, '4534', 54, 54, '2021-07-03', 54, '2021-07-03', 54, '2021-07-03', 54, '2021-07-03', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-03 13:21:55', '2021-07-03 13:23:34'),
(5, 41155, 2, 993, '01737481778', 53, 334, 8, 120, 0, 100, '2', 900, 4, 'fgsdf', 54, 54, '2021-07-03', 54, '2021-07-03', 54, '2021-07-03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-03 13:24:55', '2021-07-03 13:25:08'),
(6, 105, 1, 513, '01759416979', 1, 92, NULL, 70, 0, 0, NULL, 425, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-06 11:40:07', '2021-07-06 11:40:07'),
(7, 106, 1, 513, '01759416979', 1, 955, NULL, 70, 0, 0, NULL, 425, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-07 10:11:16', '2021-07-07 10:11:16'),
(8, 107, 1, 513, '01759416979', 45, 397, NULL, 120, 0, 0, NULL, 900, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-07 10:33:23', '2021-07-07 10:33:23'),
(9, 108, 1, 513, '01759416979', 1, 119, NULL, 70, 0, 0, NULL, 900, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-07 10:46:23', '2021-07-07 10:46:23'),
(10, 109, 1, 513, '01759416979', 1, 71, 1, 70, 0, 0, NULL, 250, 5, '587458', NULL, NULL, NULL, 54, '2021-07-11', 54, '2021-07-11', 54, '2021-07-11', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-07 11:13:42', '2021-07-11 12:49:06'),
(11, 110, 1, 513, '01759416979', 1, 139, 2, 70, 0, 0, NULL, 250, 5, '12345787', NULL, NULL, NULL, 54, '2021-07-11', 54, '2021-07-11', 54, '2021-07-11', NULL, NULL, NULL, NULL, NULL, NULL, '2021-07-07 11:16:26', '2021-07-11 12:40:00');

-- --------------------------------------------------------

--
-- Table structure for table `order_barcodes`
--

CREATE TABLE `order_barcodes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `barcode` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `barcode_number` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` float NOT NULL,
  `attribute_id` int(11) DEFAULT NULL,
  `variant_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `price`, `quantity`, `total`, `attribute_id`, `variant_id`, `status`, `created_at`, `updated_at`) VALUES
(2, 1, 21, 900, 1, 900, NULL, 1, 1, '2021-07-01 11:36:23', '2021-07-01 11:36:23'),
(3, 2, 21, 900, 1, 900, NULL, 2, 1, '2021-07-01 11:54:07', '2021-07-01 11:54:07'),
(4, 3, 21, 900, 1, 900, NULL, 1, 1, '2021-07-03 12:34:41', '2021-07-03 12:34:41'),
(5, 4, 21, 900, 1, 900, NULL, NULL, 1, '2021-07-03 13:21:55', '2021-07-03 13:21:55'),
(6, 5, 21, 900, 1, 900, NULL, 1, 1, '2021-07-03 13:24:55', '2021-07-03 13:24:55'),
(7, 6, 34, 425, 1, 425, 1, 2, 1, '2021-07-06 11:40:07', '2021-07-06 11:40:07'),
(8, 7, 34, 425, 1, 425, 1, 1, 1, '2021-07-07 10:11:16', '2021-07-07 10:11:16'),
(9, 8, 21, 900, 1, 900, 1, 1, 1, '2021-07-07 10:33:23', '2021-07-07 10:33:23'),
(10, 9, 21, 900, 1, 900, 1, 1, 1, '2021-07-07 10:46:23', '2021-07-07 10:46:23'),
(11, 10, 35, 250, 1, 250, 1, 3, 1, '2021-07-07 11:13:42', '2021-07-07 11:13:42'),
(12, 11, 35, 250, 1, 250, 1, 3, 1, '2021-07-07 11:16:26', '2021-07-07 11:16:26');

-- --------------------------------------------------------

--
-- Table structure for table `order_shipment_and_return_policies`
--

CREATE TABLE `order_shipment_and_return_policies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `shipment_info` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `return_policy` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_shipment_and_return_policies`
--

INSERT INTO `order_shipment_and_return_policies` (`id`, `order_info`, `shipment_info`, `return_policy`, `created_at`, `updated_at`) VALUES
(1, '<p>১। আপনি যদি আমাদের নতুন ক্রেতা হয়ে থাকেন তাহলে যেকোন পণ্য কিনতে এখনই সাইন-আপ/রেজিস্ট্রেশন করুন।</p><p>২। আপনার পছন্দের পন্যটি কেনার জন্য পণ্যের ছবির উপরে ক্লিক করুন এবং পরবর্তী পাতায় পণ্যের বিস্তারিত দেখে ছবির পাশে Order Now (এখনি অর্ডার করুন) এই বাটনে ক্লিক করুন।</p><p>৩। আপনি যদি একাধিক পন্য কিনতে চান তাহলে ‘কার্ট এ যোগ করুন’ এই বাটনে ক্লিক করে আপনার নির্বাচিত সকল পন্য একবারে অর্ডার করুন।</p><p>৪। যদি ইতোমধ্যেই mohasagor.com এ আপনার একাউন্ট থেকে থাকে,তাহলে আপনার ইউজার নেম ও পাসওয়ার্ড দিয়ে সাইন ইন / লগইন করুন অথবা নতুন ক্রেতা হিসেবে সাইন-আপ/রেজিস্ট্রেশন করে আপনার নতুন একাউন্টের জন্য ইউজার নেম ও পাসওয়ার্ড তৈরি করুন।</p><p>৫। ডেলিভারী ঠিকানায় আপনি যেখানে ডেলিভারী নিতে ইচ্ছুক সেখানকার বিস্তারিত ঠিকানাসহ শহরটি সেলেক্ট করুন। আপনার প্রদানকৃত সঠিক তথ্য আপনার পন্যের ডেলিভারী প্রক্রিয়াকে দ্রততর করবে।</p><p>৬। এরপরে আপনি পরবর্তী ধাপে যেতে ‘কার্ট তথ্য সংরক্ষণ’ বাটনে ক্লিক করুন।</p><p>৭। অর্ডার সফল হলে আপনার ই-মেইলে বুকিং কোড সহ একটি মেইল যাবে ।</p><p>৮। অর্ডার সাবমিটের পর 12 ঘন্টার মধ্যে আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করে পণ্য ডেলিভারী প্রক্রিয়া শুরু করবে।</p><p>৯। সাধারণত ঢাকার মধ্যে 24 ঘন্টা (প্রায়) এবং ঢাকার বাহিরে যে কোন জেলায় 72 ঘন্টার (প্রায়) মধ্যে আপনার পণ্য হাতে পাবেন।</p><p>১০। অর্ডার সংক্রান্ত যে কোন তথ্য বা সরাসরি অর্ডার দিতে ফোন করুন 09-636-203040 বা 01627-444999 (সকাল ৯টা থেকে রাত ১১ টার মধ্যে)।</p>', '<p>How will the delivery be done? We process all deliveries through:</p><p>• Reputed couriers</p><p>• Our in house delivery team</p><p>How much are the delivery charges?</p><p>With in Dhaka city, delivery charge is BDT 45 and outside Dhaka city it is BDT 90. Note: If there is any modification in delivery charge for a particular item, it will be mentioned in Product details. What is the estimated delivery time? If your shipping address is within Dhaka city, products will be delivered by next business day or within 24 hours. If it is outside Dhaka then it will take 2-3 business days.</p><p><strong>Note:</strong></p><p>• Any order placed after 6 pm will be considered as order of next business day, not as same day.</p><p>• Business Day: Saturday to Thursday</p><p>Does eShoppingBD.com deliver internationally?</p><p>mohasagor.com doesn\'t deliver items internationally. You are more than welcome to make your purchases on our site from anywhere in the world, but you\'ll have to ensure the Delivery Address is within Bangladesh.</p><p><br>&nbsp;</p>', '<p>পণ্য গ্রহনের পরে আপনি পণ্যের যে কোন সমস্যায় (যেমন : পণ্য ভাঙ্গা , ছেঁড়া, পণ্য কাজ না করা, ছবির সাথে পণ্যের মিল না থাকা ইত্যাদি) ক্ষেত্রে আপনি পরিবর্তিত পণ্য গ্রহণ করতে পারবেন। সেক্ষেত্রে পণ্য গ্রহনের পর সর্বোচ্চ ৪৮ ঘণ্টার মধ্যে আপনি complain@mohasagor.com এ ই মেইল করতে হবে অথবা আমাদের হটলাইন নাম্বার 09-636-203040 এ আমাদের অবহিত করতে হবে। উল্লেখ্য যে, আপনার মনের পরিবর্তনের ফলে কোন পণ্য রিপ্লেস করলে হলে কুরিয়ার খরচ আপনাকে বহন করতে হবে এবং mohasagor.com কর্তৃক কোন পণ্যে সমস্যা থাকলে সেটা mohasagor.com বহন করবে। আপনার - প্রশ্ন - মতামত – অভিযোগ আমাদের জানান- ফোন: 01627-444999, ই-মেইল: complain@mohasagor.com</p>', '2021-01-17 10:52:27', '2021-01-17 10:52:27');

-- --------------------------------------------------------

--
-- Table structure for table `otp_verifications`
--

CREATE TABLE `otp_verifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `mobile_no` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `otp_verifications`
--

INSERT INTO `otp_verifications` (`id`, `mobile_no`, `code`, `created_at`, `updated_at`) VALUES
(1, '01737481778', '$2y$10$HgfpHfTxBnWcaW7qsp2uvewFVNkm/59Rn9oHz8BoEdP0zHjkWkEwa', '2021-06-26 08:41:30', '2021-06-26 08:41:30'),
(2, '01737481778', '$2y$10$dS2WboWjUC9zMVvatrZOOebeoQDIXG2H/JJLzUumMsssRWuqXXKYa', '2021-06-26 08:49:15', '2021-06-26 08:49:15'),
(3, '01759416979', '$2y$10$KI1wQGiJsSxjy8gO4broZe7edv/lQza95gojdhaZCUPwGEAx70W8K', '2021-06-26 08:51:11', '2021-06-26 08:51:11'),
(4, '01737481778', '$2y$10$euM4SZbGGNg7Rgz7QFfln.3L8pFiby4WQnf375YeGRfGcwmfBASy.', '2021-07-06 11:21:09', '2021-07-06 11:21:09');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `id` int(11) NOT NULL,
  `mobile_no` int(11) NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`id`, `mobile_no`, `token`, `created_at`) VALUES
(1, 1737481778, '$2y$10$EcaAAgubowvmAqxtc./ff.SBqsqDjz4MDrofxXv4B8A0QpQ58.Dgm', NULL),
(2, 1737481778, '$2y$10$ug0.EjfqrzJmM9jyiTrZkOjKb/n9zuCoxHzfjb2.R3uigGfHf2J2a', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'View Role', 'admin', '2020-10-29 01:32:38', '2020-10-29 01:32:38'),
(2, 'Add Role', 'admin', '2020-10-29 01:32:38', '2020-10-29 01:32:38'),
(3, 'Delete Role', 'admin', '2020-10-29 01:32:38', '2020-10-29 01:32:38'),
(4, 'Edit Role', 'admin', '2020-10-29 01:32:38', '2020-10-29 01:32:38'),
(5, 'view dashboard', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(6, 'create order', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(7, 'manage Order', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(8, 'create Sale', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(9, 'manage Sale', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(10, 'create purchase', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(11, 'manage purchase', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(12, 'create product', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(13, 'manage product', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(14, 'create category', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(15, 'manage category', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(16, 'Manage accounts', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(17, 'create credit', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(18, 'delete credit', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(19, 'edit credit', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(20, 'create debit', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(21, 'delete debit', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(22, 'edit debit', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(23, 'create attribute', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(24, 'manage attribute', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(25, 'create supplier', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(26, 'manage supplier', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(27, 'create and manage slider', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(28, 'create and manage merchant', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(29, 'create reseller', 'admin', '2020-11-03 04:20:04', '2020-11-03 04:20:04'),
(30, 'manage reseller', 'admin', '2020-11-03 04:20:05', '2020-11-03 04:20:05'),
(31, 'manage team', 'admin', '2020-11-03 04:20:05', '2020-11-03 04:20:05'),
(32, 'manage users', 'admin', '2020-11-03 04:20:05', '2020-11-03 04:20:05'),
(33, 'manage customers', 'admin', '2020-11-03 04:20:05', '2020-11-03 04:20:05'),
(34, 'manage reports', 'admin', '2020-11-03 04:20:05', '2020-11-03 04:20:05'),
(35, 'manage basic set up', 'admin', '2020-11-03 04:20:05', '2020-11-03 04:20:05'),
(36, 'manage admin', 'admin', '2020-11-03 04:59:01', '2020-11-03 04:59:01'),
(37, 'manage carieer', 'admin', '2020-11-03 04:59:01', '2020-11-03 04:59:01'),
(38, 'manage wholessale', 'admin', '2020-11-21 13:04:01', '2020-11-21 13:04:01');

-- --------------------------------------------------------

--
-- Table structure for table `print_houses`
--

CREATE TABLE `print_houses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `print_houses`
--

INSERT INTO `print_houses` (`id`, `name`, `company_name`, `mobile_no`, `address`, `created_at`, `updated_at`) VALUES
(1, 'NM print', 'nm limited', '01759416979', 'test', '2021-06-26 12:56:18', '2021-06-26 12:56:18');

-- --------------------------------------------------------

--
-- Table structure for table `print_house_payments`
--

CREATE TABLE `print_house_payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `print_house_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid_by` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail_img` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `merchant_id` int(11) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `sub_category_id` int(11) NOT NULL,
  `sub_sub_category_id` int(11) DEFAULT NULL,
  `product_code` int(11) NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` int(11) NOT NULL,
  `sale_price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `status` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `wallet_point` int(11) NOT NULL DEFAULT 0,
  `campaign_id` int(11) DEFAULT NULL,
  `expired_date` date DEFAULT NULL,
  `product_placement` int(11) NOT NULL DEFAULT 0,
  `product_position` int(11) NOT NULL DEFAULT 0,
  `details` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `thumbnail_img`, `merchant_id`, `category_id`, `sub_category_id`, `sub_sub_category_id`, `product_code`, `slug`, `stock`, `sale_price`, `discount`, `price`, `status`, `wallet_point`, `campaign_id`, `expired_date`, `product_placement`, `product_position`, `details`, `created_at`, `updated_at`) VALUES
(21, 'men\'s semi long panjabi', '1624769636F9AVWpEL4hHPWTu6dIK362PSwybJ7t7ClYZmG6Yv.jpg', 282, 1, 4, NULL, 1001, 'mens-semi-long-panjabi-1001', 74, 900, NULL, 900, '1', 2, NULL, NULL, 0, 0, '<p>details</p>', '2021-06-27 04:53:56', '2021-07-12 06:46:13'),
(22, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1022, 'men\'s semi long panjabi_406-1022', 0, 900, NULL, 900, '1', 0, NULL, NULL, 0, 0, '<p>details</p>', '2021-07-01 07:18:27', '2021-07-01 07:18:27'),
(23, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1023, 'men\'s semi long panjabi_447-1023', 0, 900, NULL, 900, '1', 0, NULL, NULL, 0, 0, '<p>details</p>', '2021-07-01 07:22:28', '2021-07-01 07:22:28'),
(24, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1024, 'men\'s semi long panjabi_215-1024', 0, 900, NULL, 900, '1', 0, NULL, NULL, 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(25, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1025, 'men\'s semi long panjabi_426-1025', 0, 900, NULL, 900, '1', 0, 1, '2021-07-31', 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-13 04:47:34'),
(26, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1026, 'men\'s semi long panjabi_390-1026', 0, 900, NULL, 900, '1', 0, NULL, NULL, 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(27, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1027, 'men\'s semi long panjabi_518-1027', 0, 900, NULL, 900, '1', 0, NULL, NULL, 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(28, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1028, 'men\'s semi long panjabi_422-1028', 0, 900, NULL, 900, '1', 0, NULL, NULL, 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(29, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1029, 'men\'s semi long panjabi_137-1029', 0, 900, NULL, 900, '1', 0, 1, '2021-07-31', 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-13 04:47:18'),
(30, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1030, 'men\'s semi long panjabi_582-1030', 0, 900, NULL, 900, '1', 0, 1, '2021-07-31', 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-13 04:47:07'),
(31, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1031, 'men\'s semi long panjabi_383-1031', 0, 900, NULL, 900, '1', 0, NULL, NULL, 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(32, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1032, 'men\'s semi long panjabi_116-1032', 0, 900, NULL, 900, '1', 0, 1, '2021-07-31', 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-13 04:46:27'),
(33, 'men\'s semi long panjabi', NULL, NULL, 1, 4, NULL, 1033, 'men\'s semi long panjabi_183-1033', 0, 900, NULL, 900, '1', 0, 1, '2021-07-17', 0, 0, '<p>details</p>', '2021-07-04 12:23:20', '2021-07-13 04:46:15'),
(34, 'Men\'s Semi Long Panjabi', NULL, 1, 1, 6, NULL, 1034, 'Panjabi-1034', 18, 475, 50, 425, '1', 0, 1, '2021-07-30', 0, 0, '<ul><li>Men\'s Semi Long Panjabi</li><li>Fabrics: Cotton/Linen</li><li>Size:38, 40, 42, 44</li><li>Measurement:</li><li>40=Chest-40, Length-40</li><li>42=Chest-42, Length-42</li><li>44=Chest-44, Length-44</li><li>Soft Fabrics</li></ul>', '2021-07-06 11:11:16', '2021-07-13 04:45:56'),
(35, 'Men\'s semi long t-shirt', NULL, 1, 2, 1, NULL, 1035, 'mens-semi-long-t-shirt-1035', 3, 250, NULL, 250, '1', 0, 1, '2021-07-24', 0, 0, '<p>description is here</p>', '2021-07-06 12:37:55', '2021-07-13 04:45:45');

-- --------------------------------------------------------

--
-- Table structure for table `product_attributes`
--

CREATE TABLE `product_attributes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `attribute_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_attributes`
--

INSERT INTO `product_attributes` (`id`, `product_id`, `attribute_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2021-06-24 10:06:35', '2021-06-24 10:06:35'),
(2, 2, 1, '2021-06-24 10:10:44', '2021-06-24 10:10:44'),
(3, 3, 1, '2021-06-24 10:10:44', '2021-06-24 10:10:44'),
(4, 4, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(5, 5, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(6, 6, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(7, 7, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(8, 8, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(9, 9, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(10, 10, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(11, 11, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(12, 12, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(13, 13, 1, '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(14, 17, 1, '2021-06-26 12:25:23', '2021-06-26 12:25:23'),
(15, 19, 1, '2021-06-26 12:42:11', '2021-06-26 12:42:11'),
(16, 20, 1, '2021-06-26 12:50:25', '2021-06-26 12:50:25'),
(17, 21, 1, '2021-06-27 04:53:56', '2021-06-27 04:53:56'),
(18, 22, 1, '2021-07-01 07:18:27', '2021-07-01 07:18:27'),
(19, 23, 1, '2021-07-01 07:22:28', '2021-07-01 07:22:28'),
(20, 24, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(21, 25, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(22, 26, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(23, 27, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(24, 28, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(25, 29, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(26, 30, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(27, 31, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(28, 32, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(29, 33, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(32, 34, 1, '2021-07-06 11:20:20', '2021-07-06 11:20:20'),
(33, 35, 1, '2021-07-06 12:37:55', '2021-07-06 12:37:55');

-- --------------------------------------------------------

--
-- Table structure for table `product_barcodes`
--

CREATE TABLE `product_barcodes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `barcode` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `barcode_number` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_barcodes`
--

INSERT INTO `product_barcodes` (`id`, `product_id`, `barcode`, `barcode_number`, `created_at`, `updated_at`) VALUES
(1, 1, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:72px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:80px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1001', '2021-06-24 10:06:35', '2021-06-24 10:06:35'),
(2, 2, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:72px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:80px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1002', '2021-06-24 10:10:44', '2021-06-24 10:10:44'),
(3, 3, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:50px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:56px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:84px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1003', '2021-06-24 10:10:44', '2021-06-24 10:10:44'),
(4, 4, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:50px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:80px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1004', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(5, 5, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1005', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(6, 6, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:50px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:80px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1006', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(7, 7, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:50px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:76px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1007', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(8, 8, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:76px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1008', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(9, 9, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:72px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:78px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1009', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(10, 10, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:76px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1010', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(11, 11, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:54px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:78px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1011', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(12, 12, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:48px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:56px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:70px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:80px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1012', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(13, 13, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:50px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:56px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:84px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1013', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(17, 17, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:50px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:76px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:80px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1014', '2021-06-26 12:25:23', '2021-06-26 12:25:23'),
(18, 18, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:62px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1018', '2021-06-26 12:28:29', '2021-06-26 12:28:29'),
(19, 19, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:62px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1018', '2021-06-26 12:42:10', '2021-06-26 12:42:10'),
(20, 20, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:72px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:84px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1020', '2021-06-26 12:50:25', '2021-06-26 12:50:25'),
(21, 21, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:72px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:80px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1001', '2021-06-27 04:53:56', '2021-06-27 04:53:56'),
(22, 22, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:78px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1022', '2021-07-01 07:18:27', '2021-07-01 07:18:27'),
(23, 23, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:84px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1023', '2021-07-01 07:22:28', '2021-07-01 07:22:28'),
(24, 24, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:8px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:84px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1024', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(25, 25, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:54px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:58px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:8px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:80px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:84px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1025', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(26, 26, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:54px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:70px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:80px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1026', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(27, 27, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:72px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1027', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(28, 28, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:54px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:76px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1028', '2021-07-04 12:23:20', '2021-07-04 12:23:20');
INSERT INTO `product_barcodes` (`id`, `product_id`, `barcode`, `barcode_number`, `created_at`, `updated_at`) VALUES
(29, 29, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:54px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:62px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:70px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1029', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(30, 30, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:50px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:56px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:72px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:84px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1030', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(31, 31, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:50px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:76px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:84px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1031', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(32, 32, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:54px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:74px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:78px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1032', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(33, 33, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:48px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:56px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:78px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:82px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1033', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(34, 34, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:56px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:70px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:8px;height:30px;position:absolute;left:76px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1034', '2021-07-06 11:11:16', '2021-07-06 11:11:16'),
(35, 35, '<div style=\"font-size:0;position:relative;width:114px;height:30px;\">\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:0px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:6px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:12px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:22px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:30px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:38px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:44px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:52px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:60px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:66px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:72px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:8px;height:30px;position:absolute;left:78px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:88px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:6px;height:30px;position:absolute;left:98px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:2px;height:30px;position:absolute;left:106px;top:0px;\">&nbsp;</div>\r\n<div style=\"background-color:black;width:4px;height:30px;position:absolute;left:110px;top:0px;\">&nbsp;</div>\r\n</div>\r\n', '1035', '2021-07-06 12:37:55', '2021-07-06 12:37:55');

-- --------------------------------------------------------

--
-- Table structure for table `product_for_prints`
--

CREATE TABLE `product_for_prints` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `product_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` int(11) NOT NULL,
  `cost_per_qty` int(11) NOT NULL,
  `total_cost` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `product_image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `product_image`, `created_at`, `updated_at`) VALUES
(3, 2, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:10:44', '2021-06-24 10:10:44'),
(4, 3, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:10:44', '2021-06-24 10:10:44'),
(6, 4, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(7, 5, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(8, 6, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(9, 7, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(10, 8, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(11, 9, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(12, 10, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(13, 11, 'images/products/w3cGN6jXGpbLzvZMPsLWOFjQCghVQjCba7BN8zw3.jpg', '2021-06-24 10:20:16', '2021-06-24 10:20:16'),
(16, 17, 'images/products/fWgcrI979ItEGKcJA5MtUjKAQK8LbaAva5SVQ0D7.jpg', '2021-06-26 12:25:23', '2021-06-26 12:25:23'),
(17, 19, 'images/products/YSlEEFOFQmYbY05tRrWS2Xs81Vu0Tkj3VIKfRfiS.jpg', '2021-06-26 12:42:11', '2021-06-26 12:42:11'),
(19, 20, 'images/products/8FwmhnEl5lfz3MzcqYCikm9xIHdHQ2zfqbCLhgJ2.jpg', '2021-06-27 04:31:18', '2021-06-27 04:31:18'),
(20, 13, 'images/products/Mt8gvn4PezMSbpjij5ASVR6EnJQuhj9zS7t4unJa.jpg', '2021-06-27 04:33:11', '2021-06-27 04:33:11'),
(21, 12, 'images/products/YCOf4SC187M3DedhYz20TbMSxfFirorxe8w0F2R8.jpg', '2021-06-27 04:33:40', '2021-06-27 04:33:40'),
(22, 1, 'images/products/6ivy3hLUGSE1bmuL9jshcaBONeOy75TtSrcH2L1H.jpg', '2021-06-27 04:40:07', '2021-06-27 04:40:07'),
(23, 1, 'images/products/H1p6kVletYmWRFgvA3q8VY8Whm1I6zfCCiky3SLD.jpg', '2021-06-27 04:40:07', '2021-06-27 04:40:07'),
(24, 21, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-06-27 04:53:56', '2021-06-27 04:53:56'),
(25, 21, 'images/products/3FqReEFbIxRdqZ3iFZXMwDS31EYXGQztaCbif2hG.jpg', '2021-06-27 04:53:56', '2021-06-27 04:53:56'),
(26, 22, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-01 07:18:27', '2021-07-01 07:18:27'),
(27, 23, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-01 07:22:28', '2021-07-01 07:22:28'),
(28, 24, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(29, 25, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(30, 26, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(31, 27, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(32, 28, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(33, 29, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(34, 30, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(35, 31, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(36, 32, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(37, 33, 'images/products/rg7LymmOjUniDkbLNHGM5KwaRckuGG3g3d09bFFZ.jpg', '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(38, 34, 'images/products/PmuBXuGDQ9YIYPDzTJ4dMbxa0tqhVJJI4g87y6UX.jpg', '2021-07-06 11:11:16', '2021-07-06 11:11:16'),
(39, 35, 'images/products/EMyqdttVwklZDF1wJ2jRJrglvICzBzXmNlfSTVCF.jpg', '2021-07-06 12:37:55', '2021-07-06 12:37:55'),
(40, 35, 'images/products/1SeMqy0Or7vJGU6GqsV7ODX1RemsCqwJW7giv7Oa.jpg', '2021-07-06 12:37:55', '2021-07-06 12:37:55');

-- --------------------------------------------------------

--
-- Table structure for table `product_transfers`
--

CREATE TABLE `product_transfers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `showroom_id` int(11) NOT NULL,
  `invoice_no` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_transfers`
--

INSERT INTO `product_transfers` (`id`, `showroom_id`, `invoice_no`, `total`, `status`, `comment`, `created_at`, `updated_at`) VALUES
(1, 1, 432, 900, 0, 'first product transfer', '2021-06-26 07:53:31', '2021-06-26 07:53:31');

-- --------------------------------------------------------

--
-- Table structure for table `product_transfer_items`
--

CREATE TABLE `product_transfer_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_transfer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `purchase_price` int(11) NOT NULL,
  `sale_price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_transfer_items`
--

INSERT INTO `product_transfer_items` (`id`, `product_transfer_id`, `product_id`, `purchase_price`, `sale_price`, `quantity`, `total`, `created_at`, `updated_at`) VALUES
(1, 1, 5, 450, 450, 2, 900, '2021-06-26 07:53:31', '2021-06-26 07:53:31');

-- --------------------------------------------------------

--
-- Table structure for table `product_variants`
--

CREATE TABLE `product_variants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `variant_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_variants`
--

INSERT INTO `product_variants` (`id`, `product_id`, `variant_id`, `created_at`, `updated_at`) VALUES
(254, 21, 1, '2021-06-27 04:53:56', '2021-06-27 04:53:56'),
(255, 21, 2, '2021-06-27 04:53:56', '2021-06-27 04:53:56'),
(262, 23, 1, '2021-07-01 07:22:28', '2021-07-01 07:22:28'),
(263, 23, 2, '2021-07-01 07:22:28', '2021-07-01 07:22:28'),
(264, 24, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(265, 24, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(266, 25, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(267, 25, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(268, 26, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(269, 26, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(270, 27, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(271, 27, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(272, 28, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(273, 28, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(274, 29, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(275, 29, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(276, 30, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(277, 30, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(278, 31, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(279, 31, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(280, 32, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(281, 32, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(282, 33, 1, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(283, 33, 2, '2021-07-04 12:23:20', '2021-07-04 12:23:20'),
(284, 34, 1, '2021-07-06 11:11:16', '2021-07-06 11:11:16'),
(285, 34, 2, '2021-07-06 11:11:16', '2021-07-06 11:11:16'),
(286, 34, 3, '2021-07-06 11:11:16', '2021-07-06 11:11:16'),
(287, 35, 2, '2021-07-06 12:37:55', '2021-07-06 12:37:55'),
(288, 35, 3, '2021-07-06 12:37:55', '2021-07-06 12:37:55'),
(289, 35, 4, '2021-07-06 12:37:55', '2021-07-06 12:37:55');

-- --------------------------------------------------------

--
-- Table structure for table `purchaseitems`
--

CREATE TABLE `purchaseitems` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `purchase_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `insert_quantity` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_no` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `paid` int(11) NOT NULL DEFAULT 0,
  `purchase_date` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `file` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `receieve_printed_products`
--

CREATE TABLE `receieve_printed_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `invoice_no` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `qty` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `resellers`
--

CREATE TABLE `resellers` (
  `id` bigint(20) NOT NULL,
  `name` text NOT NULL,
  `company_name` varchar(250) NOT NULL,
  `username` text NOT NULL,
  `email` text DEFAULT NULL,
  `phone` int(25) DEFAULT NULL,
  `password` text NOT NULL,
  `photo` varchar(250) DEFAULT NULL,
  `bkash_no` int(11) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `reseller_models`
--

CREATE TABLE `reseller_models` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reseller_order_details`
--

CREATE TABLE `reseller_order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(11) NOT NULL,
  `reseller_id` int(11) NOT NULL,
  `total_percent` double(8,2) NOT NULL,
  `total_amount` double(8,2) NOT NULL,
  `paid` int(11) DEFAULT NULL,
  `paid_date` date DEFAULT NULL,
  `paid_id` int(11) DEFAULT NULL,
  `advance` double(8,2) NOT NULL DEFAULT 0.00,
  `order_total` double(8,2) NOT NULL,
  `shipping_cost` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reseller_payments`
--

CREATE TABLE `reseller_payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `resller_id` int(11) NOT NULL,
  `paid_amount` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Super admin', 'admin', '2020-11-07 16:15:48', '2020-11-07 16:15:48'),
(2, 'Admin', 'admin', '2020-11-07 16:20:56', '2020-11-07 16:20:56'),
(3, 'Product and other\'s manager', 'admin', '2020-11-07 16:21:23', '2020-11-07 16:21:23'),
(4, 'Account Manager', 'admin', '2020-11-07 16:21:36', '2020-11-07 16:21:36'),
(5, 'Wholesale Manager', 'admin', '2020-11-21 12:53:25', '2020-11-21 12:53:25'),
(6, 'Reseller Manager', 'admin', '2020-11-29 15:54:58', '2020-11-29 15:54:58'),
(7, 'Only Wholesale Management', 'admin', '2020-12-13 09:21:07', '2020-12-13 09:21:07');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(6, 2),
(7, 1),
(7, 2),
(8, 1),
(8, 4),
(8, 5),
(9, 1),
(9, 4),
(9, 5),
(10, 1),
(10, 4),
(11, 1),
(11, 4),
(12, 1),
(12, 3),
(13, 1),
(13, 3),
(14, 1),
(15, 1),
(16, 1),
(16, 4),
(17, 1),
(17, 4),
(18, 1),
(19, 1),
(20, 1),
(20, 4),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(25, 4),
(26, 1),
(26, 4),
(27, 1),
(27, 3),
(28, 1),
(29, 1),
(29, 6),
(30, 1),
(30, 6),
(31, 1),
(31, 4),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(35, 3),
(36, 1),
(37, 1),
(38, 1),
(38, 4),
(38, 5),
(38, 7);

-- --------------------------------------------------------

--
-- Table structure for table `salary_per_months`
--

CREATE TABLE `salary_per_months` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `amount` double(8,2) NOT NULL,
  `month` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `employee_id` int(11) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sale_type` int(11) NOT NULL,
  `company_id` int(11) DEFAULT NULL COMMENT 'form_company_table',
  `paid_by` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `name` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile_no` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `invoice_no` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total` double(8,2) NOT NULL,
  `paid` double(8,2) NOT NULL,
  `discount` int(11) NOT NULL DEFAULT 0,
  `create_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `sale_type`, `company_id`, `paid_by`, `status`, `name`, `mobile_no`, `address`, `invoice_no`, `total`, `paid`, `discount`, `create_by`, `created_at`, `updated_at`) VALUES
(3, 2, 1, '1', 1, 'Daraz.com.bd', '01759416979', '01759416979', 'S-', 900.00, 500.00, 0, NULL, '2021-07-01 10:41:24', '2021-07-01 10:41:24'),
(8, 1, NULL, '2', 1, 'Shibbir Ahmad', '01737481778', 'Dhaka', 'S-', 900.00, 400.00, 0, NULL, '2021-07-01 10:59:03', '2021-07-01 10:59:03'),
(9, 1, NULL, '1', 1, 'Shibbir Ahmad', '01737481778', 'Dhaka', 'S-', 900.00, 200.00, 0, NULL, '2021-07-03 10:35:47', '2021-07-03 10:35:47'),
(10, 1, NULL, '9', 1, 'Shibbir Ahmad', '01737481778', 'Dhaka', 'S-', 900.00, 500.00, 0, NULL, '2021-07-03 12:05:09', '2021-07-03 12:05:09'),
(11, 1, NULL, '3', 1, 'Shibbir Ahmad', '01737481778', 'Dhaka', 'S-', 1150.00, 1000.00, 0, NULL, '2021-07-11 13:25:41', '2021-07-11 13:25:41'),
(12, 1, NULL, '9', 1, 'Shibbir Ahmad', '01737481778', 'Dhaka', 'S-', 1150.00, 500.00, 0, NULL, '2021-07-11 13:29:32', '2021-07-11 13:29:32'),
(13, 1, NULL, '9', 1, 'Shibbir Ahmad', '01737481778', 'Dhaka', 'S-', 1150.00, 500.00, 0, NULL, '2021-07-11 13:31:22', '2021-07-11 13:31:22'),
(14, 1, NULL, '1', 1, 'shibbir ahmad', '01759416979', 'Benarosi Polli,Mirpur-10', 'S-', 900.00, 500.00, 0, NULL, '2021-07-11 13:32:30', '2021-07-11 13:32:30'),
(15, 1, NULL, '2', 1, 'Shibbir Ahmad', '01737481778', 'Dhaka', 'S-', 900.00, 500.00, 0, NULL, '2021-07-11 13:34:05', '2021-07-11 13:34:05'),
(16, 1, NULL, '4', 1, 'shibbir ahmad', '01759416979', 'Benarosi Polli,Mirpur-10', 'S-', 900.00, 100.00, 0, NULL, '2021-07-11 13:38:17', '2021-07-11 13:38:17'),
(17, 2, 1, '2', 1, 'Daraz.com.bd', '01759416979', '01759416979', 'S-', 900.00, 100.00, 0, NULL, '2021-07-11 14:05:14', '2021-07-11 14:05:14'),
(18, 1, NULL, '3', 1, 'Shibbir Ahmad', '01737481778', 'Dhaka', 'S-', 900.00, 500.00, 0, NULL, '2021-07-12 06:40:27', '2021-07-12 06:40:27'),
(19, 1, NULL, '2', 1, 'Shibbir Ahmad', '01737481778', 'Dhaka', 'S-', 900.00, 100.00, 0, NULL, '2021-07-12 06:46:13', '2021-07-12 06:46:13');

-- --------------------------------------------------------

--
-- Table structure for table `sale_campaigns`
--

CREATE TABLE `sale_campaigns` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `expired_date` date NOT NULL,
  `background_color` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `border_color` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `border_width` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_by` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sale_campaigns`
--

INSERT INTO `sale_campaigns` (`id`, `name`, `expired_date`, `background_color`, `border_color`, `border_width`, `order_by`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Flash Sale', '2021-08-01', '#f6eeee', '#5add93', '2', 1, 1, '2021-07-06 12:18:39', '2021-07-13 04:45:22');

-- --------------------------------------------------------

--
-- Table structure for table `sale_items`
--

CREATE TABLE `sale_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sale_id` int(11) NOT NULL COMMENT 'from_sales',
  `product_id` int(11) NOT NULL COMMENT 'from_produts',
  `price` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sale_items`
--

INSERT INTO `sale_items` (`id`, `sale_id`, `product_id`, `price`, `qty`, `total`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 400, 1, 400, 1, '2021-06-26 05:16:24', '2021-06-26 05:16:24'),
(4, 4, 2, 400, 1, 400, 1, '2021-06-26 05:52:37', '2021-06-26 05:52:37'),
(5, 5, 1, 400, 1, 400, 1, '2021-06-26 06:55:31', '2021-06-26 06:55:31'),
(6, 5, 2, 400, 1, 400, 2, '2021-06-26 06:55:31', '2021-06-26 06:55:31'),
(9, 3, 21, 900, 1, 900, 1, '2021-07-01 10:41:24', '2021-07-01 10:41:24'),
(14, 8, 21, 900, 1, 900, 1, '2021-07-01 10:59:03', '2021-07-01 10:59:03'),
(15, 9, 21, 900, 1, 900, 1, '2021-07-03 10:35:47', '2021-07-03 10:35:47'),
(16, 10, 21, 900, 1, 900, 1, '2021-07-03 12:05:09', '2021-07-03 12:05:09'),
(17, 11, 21, 900, 1, 900, 1, '2021-07-11 13:25:41', '2021-07-11 13:25:41'),
(18, 11, 35, 250, 1, 250, 1, '2021-07-11 13:25:41', '2021-07-11 13:25:41'),
(19, 12, 21, 900, 1, 900, 1, '2021-07-11 13:29:32', '2021-07-11 13:29:32'),
(20, 12, 35, 250, 1, 250, 1, '2021-07-11 13:29:32', '2021-07-11 13:29:32'),
(21, 13, 21, 900, 1, 900, 1, '2021-07-11 13:31:22', '2021-07-11 13:31:22'),
(22, 13, 35, 250, 1, 250, 1, '2021-07-11 13:31:22', '2021-07-11 13:31:22'),
(23, 14, 21, 900, 1, 900, 1, '2021-07-11 13:32:30', '2021-07-11 13:32:30'),
(24, 15, 21, 900, 1, 900, 1, '2021-07-11 13:34:05', '2021-07-11 13:34:05'),
(25, 16, 21, 900, 1, 900, 1, '2021-07-11 13:38:17', '2021-07-11 13:38:17'),
(26, 17, 21, 900, 1, 900, 1, '2021-07-11 14:05:14', '2021-07-11 14:05:14'),
(27, 18, 21, 900, 1, 900, 1, '2021-07-12 06:40:27', '2021-07-12 06:40:27'),
(28, 19, 21, 900, 1, 900, 1, '2021-07-12 06:46:13', '2021-07-12 06:46:13');

-- --------------------------------------------------------

--
-- Table structure for table `selling__offers`
--

CREATE TABLE `selling__offers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_by` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `expire_date` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `showrooms`
--

CREATE TABLE `showrooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_person` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `showrooms`
--

INSERT INTO `showrooms` (`id`, `name`, `address`, `contact_number`, `contact_person`, `created_at`, `updated_at`) VALUES
(1, 'China Mart', 'Polton,Dhaka', '01759416979', 'Nahid Ahmed', '2021-06-26 07:50:12', '2021-06-26 07:50:12');

-- --------------------------------------------------------

--
-- Table structure for table `showroom_credits`
--

CREATE TABLE `showroom_credits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `showroom_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `purpose` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `credit_in` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `insert_manager_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `showroom_customer_dues`
--

CREATE TABLE `showroom_customer_dues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `showroom_id` int(11) NOT NULL,
  `showroom_sale_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `showroom_debits`
--

CREATE TABLE `showroom_debits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `showroom_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `purpose` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `debit_from` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `insert_manager_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `showroom_managers`
--

CREATE TABLE `showroom_managers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `showroom_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `showroom_managers`
--

INSERT INTO `showroom_managers` (`id`, `showroom_id`, `name`, `email`, `phone`, `address`, `image`, `password`, `created_at`, `updated_at`) VALUES
(1, 1, 'Nahid Ahmed', 'nahid@gmail.com', '01737481778', 'Dhaka', 'images/manager/dXR5HJqDEpXlToWSrmtMpawzSj5DM4Nw6oAAJe8r.png', '$2y$10$jgew6RnyIZ9l0BZNIsIhP./oGJ07wM47vbgN4295oNg5jFAc2i//G', '2021-06-26 07:51:02', '2021-06-26 07:51:02');

-- --------------------------------------------------------

--
-- Table structure for table `showroom_products`
--

CREATE TABLE `showroom_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `showroom_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `purchase_price` int(11) NOT NULL,
  `sale_price` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `showroom_sales`
--

CREATE TABLE `showroom_sales` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `showroom_id` int(11) NOT NULL,
  `sale_type` int(11) NOT NULL,
  `invoice_no` int(11) NOT NULL,
  `customer_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `customer_address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paid` int(11) NOT NULL,
  `paid_by` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount` int(11) NOT NULL,
  `discount_type` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `due_amount` int(11) DEFAULT NULL,
  `total` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `showroom_sale_items`
--

CREATE TABLE `showroom_sale_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `showroom_sale_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `attribute_id` int(11) DEFAULT NULL,
  `variant_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slider_caption` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL,
  `position` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `image`, `url`, `slider_caption`, `status`, `position`, `created_at`, `updated_at`) VALUES
(2, 'images/slider/f4ONhUIdwCB70Jk49NDlIuomI11ZbB6AtgbRbxHI.jpg', 'https://punok.com.bd', NULL, 1, 1, '2020-11-08 12:10:42', '2021-06-24 09:43:50'),
(3, 'images/slider/F1VAaNccu74vq61JRl3M9UXy6ZBaqDfQHTZ6t5k8.jpg', 'https://madinafashio.com.bd', NULL, 1, 1, '2020-11-08 12:10:58', '2021-06-24 09:42:55'),
(12, 'images/slider/PuV37hc8fValdRFhzLe7GVgByGIJUkr2H1u1dxQZ.jpg', 'https://madinafashio.com.bd', NULL, 1, 1, '2021-06-24 08:20:23', '2021-06-24 09:44:06');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `discount_type` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `name`, `slug`, `category_id`, `status`, `image`, `discount`, `discount_type`, `created_at`, `updated_at`) VALUES
(1, 'Half Sleeve T-shirt', '1000-T-shirt', 2, 1, NULL, NULL, NULL, '2020-09-21 19:51:35', '2020-09-21 19:51:35'),
(2, 'Full Sleeve T-shirt', '1001-T-shirt', 2, 1, NULL, NULL, NULL, '2020-09-21 19:54:03', '2020-09-21 19:54:03'),
(3, 'Party Punjabi', '1002-Punjabi', 1, 1, NULL, NULL, NULL, '2020-09-21 19:54:39', '2020-09-21 19:54:39'),
(4, 'Indian Panjabi', '1003-Panjabi', 1, 1, NULL, NULL, NULL, '2020-09-21 19:54:54', '2020-09-21 19:54:54'),
(5, 'Printed Panjabi', '1004-Panjabi', 1, 1, NULL, NULL, NULL, '2020-09-21 19:55:11', '2020-09-21 19:55:11'),
(6, 'Semi Long Panjabi', '1005-Panjabi', 1, 1, NULL, NULL, NULL, '2020-09-21 19:55:29', '2020-09-21 19:55:29'),
(7, 'Printed T-shirt', '1006-T-shirt', 2, 1, NULL, NULL, NULL, '2020-09-21 19:56:01', '2020-09-21 19:56:01'),
(8, 'Solid Colour T-Shirt', '1007-T-Shirt', 2, 1, NULL, NULL, NULL, '2020-09-21 19:56:52', '2020-09-21 19:56:52'),
(9, 'Half Sleeve Shirt', '1008-Shirt', 3, 1, NULL, NULL, NULL, '2020-09-21 19:57:15', '2020-09-21 19:57:15'),
(10, 'Full Sleeve Shirt', '1009-Shirt', 3, 1, NULL, NULL, NULL, '2020-09-21 19:57:45', '2020-09-21 19:57:45'),
(11, 'Gabardine Pant', '1010-Pant', 4, 1, NULL, NULL, NULL, '2020-09-21 19:57:58', '2020-09-21 19:57:58'),
(12, 'Denim Pant', '1011-Pant', 4, 1, NULL, NULL, NULL, '2020-09-21 19:58:16', '2020-09-21 19:58:16'),
(13, 'Panel Bedsheet', '1012-Bedsheet', 5, 1, NULL, NULL, NULL, '2020-09-21 19:58:38', '2020-09-21 19:58:38'),
(14, 'Twell Bedsheet', '1013-Bedsheet', 5, 1, NULL, NULL, NULL, '2020-09-21 19:58:56', '2020-09-21 19:58:56'),
(15, 'Katan Sharee', '1014-Sharee', 6, 1, NULL, NULL, NULL, '2020-09-21 19:59:17', '2020-09-21 19:59:17'),
(16, 'Half Silk Sharee', '1015-Sharee', 6, 1, NULL, NULL, NULL, '2020-09-21 19:59:33', '2020-09-21 19:59:33'),
(17, 'Silk Sharee', '1016-Sharee', 6, 1, NULL, NULL, NULL, '2020-09-21 20:00:18', '2020-09-21 20:00:18'),
(18, 'Kids Panjabi', '1017-Panjabi', 1, 1, 'images/subCategory/eiKPc13tClvPxQSsMucxhjTJSs6qq58SPG0CMESf.jpeg', NULL, NULL, '2020-09-21 20:00:36', '2020-09-21 22:55:02'),
(19, 'Kabli', '1018-Kabli', 1, 1, NULL, NULL, NULL, '2020-09-21 20:00:53', '2020-09-21 20:00:53'),
(20, 'Full Sleeve T Shirt', '1019-Shirt', 10, 1, NULL, NULL, NULL, '2020-09-21 20:02:10', '2020-09-21 20:02:10'),
(21, 'Sweat Shirt', '1020-Shirt', 10, 1, NULL, NULL, NULL, '2020-09-21 20:02:24', '2020-09-21 20:02:24'),
(22, 'Hoodie', '1021-Hoodie', 10, 1, NULL, NULL, NULL, '2020-09-21 20:02:35', '2020-09-21 20:02:35'),
(23, 'Jacket', '1022-Jacket', 10, 1, NULL, NULL, NULL, '2020-09-21 20:02:45', '2020-09-21 20:02:45'),
(24, 'Polo  T-shirt', '1023-T-shirt', 2, 1, NULL, NULL, NULL, '2020-09-28 15:32:10', '2020-09-28 15:32:10'),
(25, 'Joggers & Sweats', '1024-Sweats', 4, 1, NULL, NULL, NULL, '2020-11-01 11:12:51', '2020-11-01 11:12:51'),
(26, 'Sweater', '1025-Sweater', 10, 1, NULL, NULL, NULL, '2020-11-04 11:33:46', '2020-11-04 11:33:46'),
(27, 'Cotton Bedsheet', '1026-Bedsheet', 5, 1, NULL, NULL, NULL, '2020-11-12 13:25:54', '2020-11-12 13:25:54'),
(28, 'Ladies Jacket & Sweater', '1027-Sweater', 10, 1, NULL, NULL, NULL, '2020-12-03 11:13:32', '2020-12-03 11:13:32'),
(29, 'Baby Jacket', '1028-Sweatshirt', 10, 1, NULL, NULL, NULL, '2020-12-05 13:19:13', '2020-12-05 13:52:18'),
(30, 'Hat & Scarf', '1029-Scarf', 10, 1, NULL, NULL, NULL, '2020-12-06 13:30:59', '2020-12-06 13:30:59'),
(31, 'Jeans', '1030-Jeans', 4, 1, NULL, NULL, NULL, '2021-01-10 17:02:15', '2021-01-10 17:02:15'),
(32, 'Formal Shirt', '1031-Shirt', 3, 1, NULL, NULL, NULL, '2021-01-10 18:05:43', '2021-01-10 18:05:43');

-- --------------------------------------------------------

--
-- Table structure for table `sub_cities`
--

CREATE TABLE `sub_cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `city_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_cities`
--

INSERT INTO `sub_cities` (`id`, `city_id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(3, 63, 'Derai', 1, '2021-01-12 17:16:55', '2021-01-12 17:16:55'),
(4, 64, 'Balaganj', 1, '2021-01-12 17:38:21', '2021-01-12 17:38:21'),
(5, 64, 'Beanibazar', 1, '2021-01-12 17:38:43', '2021-01-12 17:38:43'),
(6, 64, 'Biswanath', 1, '2021-01-12 17:40:09', '2021-01-12 17:40:09'),
(7, 64, 'Companiganj', 1, '2021-01-12 17:41:43', '2021-01-12 17:41:43'),
(8, 64, 'Fenchuganj', 1, '2021-01-12 17:42:00', '2021-01-12 17:42:00'),
(9, 64, 'Golapganj', 1, '2021-01-12 17:42:16', '2021-01-12 17:42:16'),
(10, 64, 'Dakshin Surma Upazila', 1, '2021-01-12 17:44:27', '2021-01-12 17:44:27'),
(11, 64, 'Gowainghat Upazila‎', 1, '2021-01-12 17:45:02', '2021-01-12 17:45:02'),
(12, 64, 'Jaintiapur Upazila‎', 1, '2021-01-12 17:45:19', '2021-01-12 17:45:19'),
(13, 64, 'Kanaighat Upazila‎', 1, '2021-01-12 17:45:36', '2021-01-12 17:45:36'),
(14, 64, 'Osmani Nagar Upazila', 1, '2021-01-12 17:45:50', '2021-01-12 17:45:50'),
(15, 64, 'Zakiganj Upazila', 1, '2021-01-12 17:46:01', '2021-01-12 17:46:01'),
(16, 66, 'Savar', 1, '2021-01-12 17:47:47', '2021-01-13 02:06:38'),
(17, 66, 'Amin bazar', 1, '2021-01-12 17:48:00', '2021-01-13 02:15:42'),
(18, 66, 'Birulia', 1, '2021-01-12 17:48:10', '2021-01-13 02:14:46'),
(19, 66, 'Ashulia', 1, '2021-01-12 17:48:35', '2021-01-13 02:14:30'),
(20, 66, 'Shimulia', 1, '2021-01-12 17:48:45', '2021-01-13 02:14:57'),
(21, 66, 'Kaundia', 1, '2021-01-12 17:48:54', '2021-01-13 02:15:28'),
(22, 64, 'Sylhet Sadar', 1, '2021-01-12 17:49:57', '2021-01-12 17:49:57'),
(23, 63, 'Sunamganj sadar', 1, '2021-01-12 17:50:15', '2021-01-12 17:50:15'),
(24, 63, 'Chhatak Upazila‎', 1, '2021-01-12 17:53:07', '2021-01-12 17:53:07'),
(25, 63, 'Derai Upazila‎', 1, '2021-01-12 17:53:26', '2021-01-12 17:53:26'),
(26, 63, 'Dharampasha Upazila‎', 1, '2021-01-12 17:53:51', '2021-01-12 17:53:51'),
(27, 63, 'Jagannathpur Upazila‎', 1, '2021-01-12 17:55:06', '2021-01-12 17:55:06'),
(28, 62, 'Barlekha Upazila‎', 1, '2021-01-12 17:55:52', '2021-01-12 17:55:52'),
(29, 62, 'Moulvibazar sadar', 1, '2021-01-12 17:56:24', '2021-01-12 17:56:24'),
(30, 62, 'Juri Upazila‎', 1, '2021-01-12 17:56:38', '2021-01-12 17:56:38'),
(31, 62, 'Kamalganj Upazila', 1, '2021-01-12 17:56:51', '2021-01-12 17:56:51'),
(32, 62, 'Kulaura Upazila', 1, '2021-01-12 17:57:02', '2021-01-12 17:57:02'),
(33, 62, 'Rajnagar Upazila‎', 1, '2021-01-12 17:57:19', '2021-01-12 17:57:19'),
(34, 62, 'Srimangal Upazila‎', 1, '2021-01-12 17:57:30', '2021-01-12 17:57:30'),
(35, 61, 'Habiganj sadar', 1, '2021-01-12 17:58:18', '2021-01-12 17:58:18'),
(36, 61, 'Ajmiriganj Upazila', 1, '2021-01-12 17:58:28', '2021-01-12 17:58:28'),
(37, 61, 'Bahubal Upazila', 1, '2021-01-12 17:58:38', '2021-01-12 17:58:38'),
(38, 61, 'Baniachong Upazila', 1, '2021-01-12 17:58:50', '2021-01-12 17:58:50'),
(39, 61, 'Chunarughat Upazila', 1, '2021-01-12 17:59:02', '2021-01-12 17:59:02'),
(40, 61, 'Habiganj Sadar Upazila', 1, '2021-01-12 17:59:13', '2021-01-12 17:59:13'),
(41, 61, 'Lakhai Upazila', 1, '2021-01-12 17:59:23', '2021-01-12 17:59:23'),
(42, 61, 'Madhabpur Upazila', 1, '2021-01-12 17:59:34', '2021-01-12 17:59:34'),
(43, 61, 'Nabiganj Upazila', 1, '2021-01-12 17:59:53', '2021-01-12 17:59:53'),
(44, 60, 'Thakurgaon sadar', 1, '2021-01-12 18:00:49', '2021-01-12 18:00:49'),
(45, 60, 'Baliadangi Upazila', 1, '2021-01-12 18:01:00', '2021-01-12 18:01:00'),
(46, 60, 'Haripur Upazila', 1, '2021-01-12 18:01:12', '2021-01-12 18:01:12'),
(47, 60, 'Pirganj Upazila', 1, '2021-01-12 18:01:33', '2021-01-12 18:01:33'),
(48, 60, 'Ranisankail Upazila', 1, '2021-01-12 18:01:43', '2021-01-12 18:01:43'),
(49, 59, 'Rangpur sadar', 1, '2021-01-12 18:02:30', '2021-01-12 18:02:38'),
(50, 59, 'Badarganj Upazila', 1, '2021-01-12 18:02:53', '2021-01-12 18:02:53'),
(51, 59, 'Gangachara Upazila', 1, '2021-01-12 18:03:04', '2021-01-12 18:03:04'),
(52, 59, 'Kaunia Upazila', 1, '2021-01-12 18:03:16', '2021-01-12 18:03:16'),
(53, 59, 'Mithapukur Upazila', 1, '2021-01-12 18:03:28', '2021-01-12 18:03:28'),
(54, 59, 'Pirgacha Upazila', 1, '2021-01-12 18:03:44', '2021-01-12 18:03:44'),
(55, 59, 'Taraganj Upazila', 1, '2021-01-12 18:04:15', '2021-01-12 18:04:15'),
(56, 58, 'Panchagarh Sadar', 1, '2021-01-12 18:39:41', '2021-01-12 18:39:41'),
(57, 58, 'Atwari Upazila', 1, '2021-01-12 18:39:53', '2021-01-12 18:39:53'),
(58, 58, 'Boda Upazila', 1, '2021-01-12 18:40:04', '2021-01-12 18:40:04'),
(59, 58, 'Debiganj Upazila', 1, '2021-01-12 18:40:20', '2021-01-12 18:40:20'),
(60, 58, 'Tetulia Upazila', 1, '2021-01-12 18:40:32', '2021-01-12 18:40:32'),
(61, 57, 'Nilphamari Sadar Upazila', 1, '2021-01-12 18:40:59', '2021-01-12 18:40:59'),
(62, 57, 'Dimla Upazila', 1, '2021-01-12 18:41:27', '2021-01-12 18:41:27'),
(63, 57, 'Domar Upazila', 1, '2021-01-12 18:45:33', '2021-01-12 18:45:33'),
(64, 57, 'Jaldhaka Upazila', 1, '2021-01-12 18:45:51', '2021-01-12 18:45:51'),
(65, 57, 'Kishoreganj Upazila', 1, '2021-01-12 18:46:00', '2021-01-12 18:46:00'),
(66, 57, 'Saidpur Upazila', 1, '2021-01-12 18:46:12', '2021-01-12 18:46:12'),
(67, 1, 'Adabar Thana', 1, '2021-01-12 18:47:27', '2021-01-12 18:47:27'),
(68, 1, 'Azampur', 1, '2021-01-12 18:52:01', '2021-01-12 18:52:01'),
(69, 1, 'Badda Thana', 1, '2021-01-12 18:52:14', '2021-01-12 18:52:14'),
(70, 1, 'Bangsal', 1, '2021-01-12 18:52:33', '2021-01-12 18:52:33'),
(71, 1, 'Bimanbandar', 1, '2021-01-12 18:52:48', '2021-01-12 18:52:48'),
(72, 1, 'Cantonment', 1, '2021-01-12 18:53:01', '2021-01-12 18:53:01'),
(73, 1, 'Chowkbazar', 1, '2021-01-12 18:53:26', '2021-01-12 18:53:26'),
(74, 1, 'Darus Salam', 1, '2021-01-12 18:53:40', '2021-01-12 18:53:40'),
(75, 1, 'Lalmatia', 1, '2021-01-12 18:53:53', '2021-01-13 01:50:01'),
(76, 1, 'Dhanmondi', 1, '2021-01-12 18:54:07', '2021-01-12 18:54:07'),
(77, 1, 'Gendaria', 1, '2021-01-12 18:54:24', '2021-01-12 18:54:24'),
(78, 1, 'Gulshan-1', 1, '2021-01-12 18:55:25', '2021-01-12 18:55:25'),
(79, 1, 'Gulshan-2', 1, '2021-01-12 18:55:34', '2021-01-12 18:55:34'),
(80, 1, 'Hazaribagh', 1, '2021-01-12 18:56:05', '2021-01-12 18:56:05'),
(81, 1, 'Kadamtali', 1, '2021-01-12 18:57:29', '2021-01-12 18:57:29'),
(82, 1, 'Kafrul', 1, '2021-01-12 18:57:44', '2021-01-12 18:57:44'),
(83, 1, 'Kalabagan', 1, '2021-01-12 18:57:59', '2021-01-12 18:57:59'),
(84, 1, 'Khilgaon', 1, '2021-01-12 18:58:18', '2021-01-12 18:58:18'),
(85, 1, 'Khilkhet', 1, '2021-01-12 18:58:52', '2021-01-12 18:59:13'),
(86, 1, 'Kotwali', 1, '2021-01-12 18:59:32', '2021-01-12 18:59:32'),
(87, 1, 'Lalbagh', 1, '2021-01-12 18:59:50', '2021-01-12 18:59:50'),
(88, 1, 'Mirpur-1', 1, '2021-01-12 19:00:07', '2021-01-12 19:00:07'),
(89, 1, 'Mirpur-2', 1, '2021-01-12 19:00:18', '2021-01-12 19:00:18'),
(90, 1, 'Mirpur-6', 1, '2021-01-12 19:00:28', '2021-01-12 19:00:28'),
(91, 1, 'Mirpur-7', 1, '2021-01-12 19:00:41', '2021-01-12 19:00:41'),
(92, 1, 'Mirpur-10', 1, '2021-01-12 19:00:51', '2021-01-12 19:00:51'),
(93, 1, 'Mirpur-11', 1, '2021-01-12 19:01:02', '2021-01-12 19:01:02'),
(94, 1, 'Mirpur-12', 1, '2021-01-12 19:01:36', '2021-01-12 19:01:36'),
(95, 1, 'Mirpur-13', 1, '2021-01-12 19:01:56', '2021-01-12 19:01:56'),
(96, 1, 'Mirpur-14', 1, '2021-01-12 19:02:06', '2021-01-12 19:02:06'),
(97, 1, 'Mohammadpur', 1, '2021-01-12 19:02:45', '2021-01-12 19:02:45'),
(98, 1, 'Motijheel', 1, '2021-01-12 19:02:54', '2021-01-12 19:02:54'),
(99, 1, 'New Market', 1, '2021-01-12 19:03:06', '2021-01-12 19:03:06'),
(100, 1, 'Pallabi', 1, '2021-01-12 19:03:22', '2021-01-12 19:03:22'),
(101, 1, 'Paltan', 1, '2021-01-12 19:03:35', '2021-01-12 19:03:35'),
(102, 1, 'Panthapath', 1, '2021-01-12 19:03:46', '2021-01-12 19:03:46'),
(103, 1, 'Ramna', 1, '2021-01-12 19:04:08', '2021-01-12 19:04:08'),
(104, 1, 'Rampura', 1, '2021-01-12 19:04:20', '2021-01-12 19:04:20'),
(105, 1, 'Sabujbagh', 1, '2021-01-12 19:04:52', '2021-01-12 19:04:52'),
(106, 1, 'Shah Ali thana Mirpur', 1, '2021-01-12 19:05:10', '2021-01-12 19:05:10'),
(107, 1, 'Shahbagh', 1, '2021-01-12 19:05:20', '2021-01-12 19:05:20'),
(108, 1, 'Sher-e-Bangla Nagar', 1, '2021-01-12 19:07:00', '2021-01-12 19:07:00'),
(109, 1, 'Shyampur', 1, '2021-01-12 19:07:12', '2021-01-12 19:07:12'),
(110, 1, 'Nowabpur', 1, '2021-01-12 19:07:24', '2021-01-13 01:59:45'),
(111, 1, 'Tejgaon Industrial Area', 1, '2021-01-12 19:07:37', '2021-01-12 19:07:37'),
(112, 1, 'Tejgaon', 1, '2021-01-12 19:08:30', '2021-01-12 19:08:30'),
(113, 1, 'Turag Thana', 1, '2021-01-12 19:08:42', '2021-01-12 19:08:42'),
(114, 1, 'Uttar Khan', 1, '2021-01-12 19:08:56', '2021-01-12 19:08:56'),
(115, 1, 'Uttara', 1, '2021-01-12 19:09:18', '2021-01-12 19:09:18'),
(116, 1, 'Vatara Thana', 1, '2021-01-12 19:09:32', '2021-01-12 19:09:32'),
(117, 1, 'Wari', 1, '2021-01-12 19:09:43', '2021-01-12 19:09:43'),
(118, 1, 'Dhaka University', 1, '2021-01-12 19:10:03', '2021-01-12 19:10:03'),
(119, 1, 'Buet', 1, '2021-01-12 19:10:12', '2021-01-12 19:10:12'),
(120, 1, 'Bangladesh Sochibaloy', 1, '2021-01-12 19:10:29', '2021-01-12 19:10:29'),
(121, 1, 'Farmgate', 1, '2021-01-12 19:10:41', '2021-01-12 19:10:41'),
(122, 1, 'Elephant Road', 1, '2021-01-12 19:10:55', '2021-01-12 19:10:55'),
(123, 1, 'Segunbagicha', 1, '2021-01-12 19:11:12', '2021-01-12 19:11:12'),
(124, 1, 'Noya Paltan', 1, '2021-01-12 19:11:22', '2021-01-12 19:11:22'),
(125, 1, 'Purana Paltan', 1, '2021-01-12 19:11:32', '2021-01-12 19:11:32'),
(126, 1, 'Bongabazar', 1, '2021-01-12 19:11:43', '2021-01-12 19:11:43'),
(127, 1, 'Uttara Sector-1', 1, '2021-01-12 19:14:16', '2021-01-12 19:14:16'),
(128, 1, 'Uttara Sector-2', 1, '2021-01-12 19:14:23', '2021-01-12 19:14:23'),
(129, 1, 'Uttara Sector-3', 1, '2021-01-12 19:14:32', '2021-01-12 19:14:32'),
(130, 1, 'Uttara Sector-4', 1, '2021-01-12 19:14:39', '2021-01-12 19:14:39'),
(131, 1, 'Uttara Sector-5', 1, '2021-01-12 19:14:47', '2021-01-12 19:14:47'),
(132, 1, 'Uttara Sector-6', 1, '2021-01-12 19:14:54', '2021-01-12 19:14:54'),
(133, 1, 'Uttara Sector-7', 1, '2021-01-12 19:15:02', '2021-01-12 19:15:02'),
(134, 1, 'Uttara Sector-8', 1, '2021-01-12 19:15:09', '2021-01-12 19:15:09'),
(135, 1, 'Uttara Sector-9', 1, '2021-01-12 19:15:16', '2021-01-12 19:15:16'),
(136, 1, 'Uttara Sector-10', 1, '2021-01-12 19:15:23', '2021-01-12 19:15:23'),
(137, 1, 'Uttara Sector-11', 1, '2021-01-12 19:15:29', '2021-01-12 19:15:29'),
(138, 1, 'Uttara Sector-12', 1, '2021-01-12 19:15:34', '2021-01-12 19:15:34'),
(139, 1, 'Ashkona', 1, '2021-01-12 19:16:13', '2021-01-12 19:16:13'),
(140, 1, 'Jatio Songsod', 1, '2021-01-12 19:17:10', '2021-01-12 19:17:10'),
(141, 1, 'Baridhara', 1, '2021-01-12 19:17:54', '2021-01-12 19:17:54'),
(142, 1, 'Bashundhora R/A', 1, '2021-01-12 19:18:16', '2021-01-12 19:18:16'),
(143, 16, 'Kamalnagar', 1, '2021-01-12 19:18:22', '2021-01-12 19:18:22'),
(144, 16, 'Lakshmipur Sadar', 1, '2021-01-12 19:18:48', '2021-01-12 19:18:48'),
(145, 1, 'Rajarbag', 1, '2021-01-12 19:18:51', '2021-01-12 19:18:51'),
(146, 1, 'Shantinagar', 1, '2021-01-12 19:18:59', '2021-01-12 19:18:59'),
(147, 16, 'Raipur', 1, '2021-01-12 19:19:17', '2021-01-12 19:19:17'),
(148, 1, 'Shahjahanpur', 1, '2021-01-12 19:19:18', '2021-01-12 19:19:18'),
(149, 1, 'Jatrabari', 1, '2021-01-12 19:19:29', '2021-01-12 19:19:29'),
(150, 16, 'Ramgati', 1, '2021-01-12 19:19:32', '2021-01-12 19:19:32'),
(151, 1, 'Sayedabad', 1, '2021-01-12 19:19:39', '2021-01-12 19:19:39'),
(152, 16, 'Ramganj', 1, '2021-01-12 19:19:45', '2021-01-12 19:19:45'),
(153, 1, 'Basabo', 1, '2021-01-12 19:20:00', '2021-01-12 19:20:00'),
(154, 1, 'Malibagh', 1, '2021-01-12 19:20:19', '2021-01-12 19:20:19'),
(155, 1, 'Shantibagh', 1, '2021-01-12 19:20:41', '2021-01-12 19:20:41'),
(156, 1, 'Moghbazar', 1, '2021-01-12 19:20:52', '2021-01-12 19:20:52'),
(157, 1, 'Kawran bazar', 1, '2021-01-12 19:21:02', '2021-01-12 19:21:02'),
(158, 1, 'Zighatola', 1, '2021-01-12 19:21:18', '2021-01-12 19:21:18'),
(159, 12, 'Comilla Sadar', 1, '2021-01-12 19:21:20', '2021-01-12 19:21:20'),
(160, 1, 'Gulisthan', 1, '2021-01-12 19:21:32', '2021-01-12 19:21:32'),
(161, 1, 'Islampur', 1, '2021-01-12 19:21:40', '2021-01-12 19:21:40'),
(162, 1, 'Bonosri', 1, '2021-01-12 19:22:02', '2021-01-12 19:22:02'),
(163, 12, 'Debidwar', 1, '2021-01-12 19:22:10', '2021-01-12 19:22:10'),
(164, 1, 'Aftabnagar', 1, '2021-01-12 19:22:24', '2021-01-12 19:22:24'),
(165, 1, 'Mohakhali', 1, '2021-01-12 19:23:10', '2021-01-12 19:23:10'),
(166, 12, 'Brahmanpara', 1, '2021-01-12 19:23:13', '2021-01-12 19:23:13'),
(167, 1, 'Arambag', 1, '2021-01-12 19:23:21', '2021-01-12 19:23:21'),
(168, 12, 'Barura', 1, '2021-01-12 19:23:35', '2021-01-12 19:23:35'),
(169, 12, 'Chandina', 1, '2021-01-12 19:23:52', '2021-01-12 19:23:52'),
(170, 1, 'Nikunja-1', 1, '2021-01-12 19:23:55', '2021-01-12 19:23:55'),
(171, 1, 'Nikunja-2', 1, '2021-01-12 19:24:02', '2021-01-12 19:24:02'),
(172, 1, 'namapara', 1, '2021-01-12 19:24:13', '2021-01-12 19:24:13'),
(173, 1, 'Easter Housing-Mirpur', 1, '2021-01-12 19:24:43', '2021-01-12 19:24:43'),
(174, 1, 'Duaripara', 1, '2021-01-12 19:24:53', '2021-01-12 19:24:53'),
(175, 1, 'Mirpur Cantonment', 1, '2021-01-12 19:25:12', '2021-01-12 19:25:12'),
(176, 12, 'Chauddagram', 1, '2021-01-12 19:25:35', '2021-01-12 19:25:35'),
(177, 12, 'Daudkandi', 1, '2021-01-12 19:25:47', '2021-01-12 19:25:47'),
(178, 1, 'Rajabazar', 1, '2021-01-12 19:25:52', '2021-01-12 19:25:52'),
(179, 12, 'Homna', 1, '2021-01-12 19:25:58', '2021-01-12 19:25:58'),
(180, 12, 'Laksam', 1, '2021-01-12 19:26:11', '2021-01-12 19:26:11'),
(181, 1, 'Sukrabad', 1, '2021-01-12 19:26:12', '2021-01-12 19:26:12'),
(182, 12, 'Muradnagar', 1, '2021-01-12 19:26:26', '2021-01-12 19:26:26'),
(183, 1, 'Katabon', 1, '2021-01-12 19:26:30', '2021-01-12 19:26:30'),
(184, 1, 'Hatirpool', 1, '2021-01-12 19:26:39', '2021-01-12 19:26:39'),
(185, 12, 'Nangalkot', 1, '2021-01-12 19:26:53', '2021-01-12 19:26:53'),
(186, 12, 'Adarsha Sadar', 1, '2021-01-12 19:27:44', '2021-01-12 19:27:44'),
(187, 12, 'Meghna', 1, '2021-01-12 19:27:57', '2021-01-12 19:27:57'),
(188, 12, 'Monohargonj', 1, '2021-01-12 19:28:15', '2021-01-12 19:28:15'),
(189, 12, 'Sadar south upazila', 1, '2021-01-12 19:28:36', '2021-01-12 19:28:36'),
(190, 12, 'Titas', 1, '2021-01-12 19:28:48', '2021-01-12 19:28:48'),
(191, 12, 'Burichang', 1, '2021-01-12 19:29:06', '2021-01-12 19:29:06'),
(192, 12, 'Lalmai', 1, '2021-01-12 19:29:18', '2021-01-12 19:29:18'),
(193, 1, 'Mogbazar', 1, '2021-01-12 19:30:10', '2021-01-12 19:30:10'),
(194, 14, 'Feni Sadar', 1, '2021-01-12 19:30:16', '2021-01-12 19:30:16'),
(195, 1, 'Chowdhuripara', 1, '2021-01-12 19:30:20', '2021-01-12 19:30:20'),
(196, 14, 'Sonagazi', 1, '2021-01-12 19:30:29', '2021-01-12 19:30:29'),
(197, 1, 'Tejkunipara', 1, '2021-01-12 19:30:38', '2021-01-12 19:30:38'),
(198, 14, 'Fulgazi', 1, '2021-01-12 19:30:46', '2021-01-12 19:30:46'),
(199, 1, 'Mohakhali DOHS', 1, '2021-01-12 19:31:11', '2021-01-12 19:31:11'),
(200, 14, 'Parshuram', 1, '2021-01-12 19:31:15', '2021-01-12 19:31:15'),
(201, 1, 'Mirpur DOHS', 1, '2021-01-12 19:31:27', '2021-01-12 19:31:27'),
(202, 1, 'Baridhara DOHS', 1, '2021-01-12 19:31:36', '2021-01-12 19:31:36'),
(203, 14, 'Daganbhuiyan', 1, '2021-01-12 19:31:59', '2021-01-12 19:31:59'),
(204, 14, 'Feni Pourashava', 1, '2021-01-12 19:32:36', '2021-01-12 19:32:36'),
(205, 1, 'Maniknagor', 1, '2021-01-12 19:32:36', '2021-01-12 19:32:36'),
(206, 9, 'Brahmanbaria Sadar', 1, '2021-01-12 19:34:02', '2021-01-12 19:34:10'),
(207, 9, 'Kasbo', 1, '2021-01-12 19:35:06', '2021-01-12 19:35:06'),
(208, 9, 'Nasirnagar', 1, '2021-01-12 19:35:16', '2021-01-12 19:35:16'),
(209, 9, 'Sarail', 1, '2021-01-12 19:35:35', '2021-01-12 19:35:35'),
(210, 9, 'Ashuganj', 1, '2021-01-12 19:35:46', '2021-01-12 19:35:46'),
(211, 9, 'Akhaura', 1, '2021-01-12 19:36:06', '2021-01-12 19:36:06'),
(212, 9, 'Nabinagar', 1, '2021-01-12 19:36:21', '2021-01-12 19:36:21'),
(213, 9, 'Bancharampur', 1, '2021-01-12 19:36:55', '2021-01-12 19:36:55'),
(214, 9, 'Bijoynagar', 1, '2021-01-12 19:37:12', '2021-01-12 19:37:12'),
(215, 1, 'Golapbag', 1, '2021-01-12 19:37:34', '2021-01-12 19:37:34'),
(216, 1, 'Mugda', 1, '2021-01-12 19:37:55', '2021-01-12 19:37:55'),
(217, 1, 'Tikatuli', 1, '2021-01-12 19:38:08', '2021-01-12 19:38:08'),
(218, 1, 'nakhalpara', 1, '2021-01-12 19:39:16', '2021-01-12 19:39:16'),
(219, 1, 'Niketon', 1, '2021-01-12 19:39:57', '2021-01-12 19:39:57'),
(220, 1, 'Ibrahirpur', 1, '2021-01-12 19:40:19', '2021-01-12 19:40:19'),
(221, 1, 'Shewrapara', 1, '2021-01-12 19:40:37', '2021-01-12 19:40:37'),
(222, 1, 'Kazipara', 1, '2021-01-12 19:40:49', '2021-01-12 19:40:49'),
(223, 1, 'Monipur', 1, '2021-01-12 19:41:07', '2021-01-12 19:41:07'),
(224, 1, 'Ahmed Nagar', 1, '2021-01-12 19:41:36', '2021-01-12 19:41:36'),
(225, 1, 'Manikdi', 1, '2021-01-12 19:42:02', '2021-01-12 19:42:02'),
(226, 1, 'Balughat', 1, '2021-01-12 19:42:15', '2021-01-12 19:42:15'),
(227, 1, 'Kurmitola', 1, '2021-01-12 19:42:33', '2021-01-12 19:42:33'),
(228, 1, 'Azompur-South', 1, '2021-01-12 19:42:57', '2021-01-12 19:42:57'),
(229, 1, 'Azompur-North', 1, '2021-01-12 19:43:06', '2021-01-12 19:43:16'),
(230, 1, 'Mollapara', 1, '2021-01-12 19:43:29', '2021-01-12 19:43:29'),
(231, 1, 'Moddhopara', 1, '2021-01-12 19:43:39', '2021-01-12 19:43:39'),
(232, 1, 'Doyaganj', 1, '2021-01-12 19:44:37', '2021-01-12 19:44:37'),
(233, 1, 'Dhaka Cantonment', 1, '2021-01-12 19:44:46', '2021-01-13 02:01:17'),
(234, 1, 'Narinda', 1, '2021-01-12 19:44:54', '2021-01-12 19:44:54'),
(235, 1, 'TT para', 1, '2021-01-12 19:45:09', '2021-01-12 19:45:09'),
(236, 17, 'Noakhali Sadar', 1, '2021-01-12 19:45:49', '2021-01-12 19:45:49'),
(237, 1, 'Komolapur', 1, '2021-01-12 19:45:57', '2021-01-12 19:45:57'),
(238, 1, 'Baily Road', 1, '2021-01-12 19:46:20', '2021-01-12 19:46:20'),
(239, 2, 'Barguna Sadar', 1, '2021-01-12 19:48:48', '2021-01-12 19:48:48'),
(240, 2, 'Amtali', 1, '2021-01-12 19:49:06', '2021-01-12 19:49:06'),
(241, 2, 'Betagi', 1, '2021-01-12 19:49:24', '2021-01-12 19:49:24'),
(242, 2, 'Bamna', 1, '2021-01-12 19:49:34', '2021-01-12 19:49:34'),
(243, 2, 'Pathorghata', 1, '2021-01-12 19:49:51', '2021-01-12 19:49:51'),
(244, 2, 'Taltali', 1, '2021-01-12 19:50:10', '2021-01-12 19:50:10'),
(245, 3, 'Agailjhara Upazila', 1, '2021-01-12 19:51:42', '2021-01-12 19:51:42'),
(246, 3, 'Barisal Sadar', 1, '2021-01-12 19:51:55', '2021-01-12 19:51:55'),
(247, 3, 'Babuganj Upazila', 1, '2021-01-12 19:52:15', '2021-01-12 19:52:15'),
(248, 3, 'Bakerganj Upazila', 1, '2021-01-12 19:52:27', '2021-01-12 19:52:27'),
(249, 3, 'Banaripara Upazila', 1, '2021-01-12 19:52:39', '2021-01-12 19:52:39'),
(250, 3, 'Gournadi Upazila', 1, '2021-01-12 19:52:52', '2021-01-12 19:52:52'),
(251, 3, 'Hizla Upazila', 1, '2021-01-12 19:53:01', '2021-01-12 19:53:01'),
(252, 3, 'Mehendiganj Upazila', 1, '2021-01-12 19:53:13', '2021-01-12 19:53:13'),
(253, 3, 'Muladi Upazila', 1, '2021-01-12 19:53:31', '2021-01-12 19:53:31'),
(254, 3, 'Wazirpur Upazila', 1, '2021-01-12 19:53:43', '2021-01-12 19:53:43'),
(255, 17, 'Sonaimuri', 1, '2021-01-12 19:54:45', '2021-01-12 19:54:45'),
(256, 4, 'Bhola Sadar', 1, '2021-01-12 19:54:59', '2021-01-12 19:54:59'),
(257, 4, 'Borhanuddin Upazila', 1, '2021-01-12 19:55:10', '2021-01-12 19:55:10'),
(258, 17, 'Chatkhil', 1, '2021-01-12 19:55:17', '2021-01-12 19:55:17'),
(259, 4, 'Char Fasson Upazila', 1, '2021-01-12 19:55:21', '2021-01-12 19:55:21'),
(260, 4, 'Daulatkhan Upazila', 1, '2021-01-12 19:55:32', '2021-01-12 19:55:32'),
(261, 4, 'Lalmohan Upazila', 1, '2021-01-12 19:55:43', '2021-01-12 19:55:43'),
(262, 4, 'Manpura Upazila', 1, '2021-01-12 19:55:55', '2021-01-12 19:55:55'),
(263, 17, 'Senbng', 1, '2021-01-12 19:56:05', '2021-01-12 19:56:05'),
(264, 4, 'Tazumuddin Upazila', 1, '2021-01-12 19:56:06', '2021-01-12 19:56:06'),
(265, 17, 'Kabirhat', 1, '2021-01-12 19:56:45', '2021-01-12 19:56:45'),
(266, 17, 'Subarnachar', 1, '2021-01-12 19:57:36', '2021-01-12 19:57:36'),
(267, 5, 'Jhalokathi Sadar', 1, '2021-01-12 19:57:38', '2021-01-12 19:57:38'),
(268, 5, 'Kathalia', 1, '2021-01-12 19:58:04', '2021-01-12 19:58:04'),
(269, 17, 'Hatia', 1, '2021-01-12 19:58:15', '2021-01-12 19:58:15'),
(270, 5, 'Nalchity', 1, '2021-01-12 19:58:20', '2021-01-12 19:58:20'),
(271, 5, 'Rajapur', 1, '2021-01-12 19:58:36', '2021-01-12 19:58:36'),
(272, 17, 'Begumganj', 1, '2021-01-12 19:58:39', '2021-01-12 19:58:39'),
(273, 6, 'Patuakhali Sadar', 1, '2021-01-12 19:59:26', '2021-01-12 19:59:26'),
(274, 6, 'Bauphal Upazila', 1, '2021-01-12 19:59:38', '2021-01-12 19:59:38'),
(275, 6, 'Dashmina Upazila', 1, '2021-01-12 19:59:51', '2021-01-12 19:59:51'),
(276, 6, 'Dumki Upazila', 1, '2021-01-12 20:00:09', '2021-01-12 20:00:09'),
(277, 6, 'Galachipa Upazila', 1, '2021-01-12 20:00:18', '2021-01-12 20:00:18'),
(278, 6, 'Kalapara Upazila', 1, '2021-01-12 20:00:58', '2021-01-12 20:00:58'),
(279, 6, 'Mirzaganj Upazila', 1, '2021-01-12 20:01:10', '2021-01-12 20:01:10'),
(280, 6, 'Rangabali Upazila', 1, '2021-01-12 20:01:26', '2021-01-12 20:01:26'),
(281, 7, 'Pirojpur Sadar', 1, '2021-01-12 20:02:10', '2021-01-12 20:02:10'),
(282, 7, 'Bhandaria Upazila', 1, '2021-01-12 20:02:22', '2021-01-12 20:02:22'),
(283, 7, 'Indurkani Upazila', 1, '2021-01-12 20:02:36', '2021-01-12 20:02:36'),
(284, 7, 'Kawkhali Upazila', 1, '2021-01-12 20:02:54', '2021-01-12 20:02:54'),
(285, 7, 'Mathbaria Upazila', 1, '2021-01-12 20:03:06', '2021-01-12 20:03:06'),
(286, 7, 'Nazirpur Upazila', 1, '2021-01-12 20:03:19', '2021-01-12 20:03:19'),
(289, 7, 'Nesarabad', 1, '2021-01-12 20:05:49', '2021-01-12 20:05:49'),
(290, 8, 'Ali Kadam Upazila', 1, '2021-01-12 20:07:31', '2021-01-12 20:07:31'),
(291, 8, 'Bandarban Sadar', 1, '2021-01-12 20:07:58', '2021-01-12 20:07:58'),
(292, 10, 'Chandpur Sadar', 1, '2021-01-12 20:09:25', '2021-01-12 20:16:41'),
(293, 8, 'Lama Upazila', 1, '2021-01-12 20:09:41', '2021-01-12 20:09:41'),
(294, 10, 'Kachua', 1, '2021-01-12 20:09:49', '2021-01-12 20:09:49'),
(295, 10, 'Haimchar', 1, '2021-01-12 20:10:12', '2021-01-12 20:10:12'),
(296, 8, 'Naikhongchhari Upazila', 1, '2021-01-12 20:10:42', '2021-01-12 20:10:42'),
(297, 8, 'Rowangchhari Upazila', 1, '2021-01-12 20:11:19', '2021-01-12 20:11:19'),
(298, 8, 'Ruma Upazila', 1, '2021-01-12 20:11:31', '2021-01-12 20:11:31'),
(299, 8, 'Thanchi Upazila', 1, '2021-01-12 20:11:42', '2021-01-12 20:11:42'),
(300, 10, 'Matlab South', 1, '2021-01-12 20:12:30', '2021-01-12 20:12:30'),
(301, 10, 'Hajiganj', 1, '2021-01-12 20:12:58', '2021-01-12 20:12:58'),
(302, 11, 'Akbarshah Thana', 1, '2021-01-12 20:13:26', '2021-01-12 20:13:26'),
(303, 11, 'Bakoliya Thana', 1, '2021-01-12 20:13:38', '2021-01-12 20:13:38'),
(304, 11, 'Bandar Thana', 1, '2021-01-12 20:13:51', '2021-01-12 20:13:51'),
(305, 11, 'Bayazid Thana', 1, '2021-01-12 20:14:02', '2021-01-12 20:14:02'),
(306, 11, 'Bhujpur Thana', 1, '2021-01-12 20:14:13', '2021-01-12 20:14:13'),
(307, 10, 'Matlab North', 1, '2021-01-12 20:14:44', '2021-01-12 20:14:44'),
(308, 11, 'Chandgaon Thana', 1, '2021-01-12 20:14:47', '2021-01-12 20:14:47'),
(309, 11, 'Double Mooring Thana', 1, '2021-01-12 20:14:58', '2021-01-12 20:14:58'),
(310, 11, 'EPZ Thana', 1, '2021-01-12 20:15:10', '2021-01-12 20:15:10'),
(311, 11, 'Halishahar Thana', 1, '2021-01-12 20:15:20', '2021-01-12 20:15:20'),
(312, 10, 'Faridgonj', 1, '2021-01-12 20:15:31', '2021-01-12 20:15:31'),
(313, 11, 'Karnaphuli Upazila', 1, '2021-01-12 20:15:37', '2021-01-12 20:15:37'),
(314, 11, 'Khulshi Thana', 1, '2021-01-12 20:15:48', '2021-01-12 20:15:48'),
(315, 11, 'Kotwali Thana (Chittagong)', 1, '2021-01-12 20:15:58', '2021-01-12 20:15:58'),
(316, 11, 'Pahartali Thana', 1, '2021-01-12 20:16:10', '2021-01-12 20:16:10'),
(317, 11, 'Panchlaish Thana', 1, '2021-01-12 20:16:21', '2021-01-12 20:16:21'),
(318, 11, 'Patenga Thana', 1, '2021-01-12 20:16:31', '2021-01-12 20:16:31'),
(319, 13, 'Chakaria Upazila', 1, '2021-01-12 20:17:26', '2021-01-12 20:17:26'),
(320, 13, 'Cox\'s Bazar Sadar', 1, '2021-01-12 20:17:58', '2021-01-12 20:17:58'),
(321, 13, 'Kutubdia Upazila', 1, '2021-01-12 20:18:14', '2021-01-12 20:18:14'),
(322, 13, 'Moheshkhali Upazila', 1, '2021-01-12 20:18:28', '2021-01-12 20:18:28'),
(323, 13, 'Pekua Upazila', 1, '2021-01-12 20:18:44', '2021-01-12 20:18:44'),
(324, 13, 'Ramu Upazila', 1, '2021-01-12 20:19:03', '2021-01-12 20:19:03'),
(325, 13, 'Teknaf Upazila', 1, '2021-01-12 20:19:26', '2021-01-12 20:19:26'),
(326, 13, 'Ukhia Upazila', 1, '2021-01-12 20:19:38', '2021-01-12 20:19:38'),
(327, 16, 'Raipur Upazila', 1, '2021-01-12 20:21:20', '2021-01-12 20:21:20'),
(328, 16, 'Kamalnagar Upazila', 1, '2021-01-12 20:22:20', '2021-01-12 20:22:20'),
(329, 16, 'Ramganj Upazila', 1, '2021-01-12 20:23:03', '2021-01-12 20:23:03'),
(330, 16, 'Ramgati Upazila', 1, '2021-01-12 20:23:16', '2021-01-12 20:23:16'),
(331, 16, 'Chandraganj Thana', 1, '2021-01-12 20:23:32', '2021-01-12 20:23:32'),
(332, 53, 'Biral Upazila', 1, '2021-01-12 20:25:41', '2021-01-12 20:25:41'),
(333, 53, 'Birampur Upazila', 1, '2021-01-12 20:25:59', '2021-01-12 20:25:59'),
(334, 53, 'Birganj Upazila', 1, '2021-01-12 20:26:17', '2021-01-12 20:26:17'),
(335, 53, 'Bochaganj Upazila', 1, '2021-01-12 20:26:46', '2021-01-12 20:26:46'),
(336, 53, 'Chirirbandar Upazila', 1, '2021-01-12 20:26:59', '2021-01-12 20:26:59'),
(337, 53, 'Dinajpur Sadar Upazila', 1, '2021-01-12 20:27:11', '2021-01-12 20:27:11'),
(338, 53, 'Fulbari Upazila', 1, '2021-01-12 20:27:22', '2021-01-12 20:27:22'),
(339, 53, 'Ghoraghat Upazila', 1, '2021-01-12 20:27:33', '2021-01-12 20:27:33'),
(340, 53, 'Hakimpur Upazila', 1, '2021-01-12 20:27:47', '2021-01-12 20:27:47'),
(341, 53, 'Kaharole Upazila', 1, '2021-01-12 20:27:58', '2021-01-12 20:27:58'),
(342, 53, 'Khansama Upazila', 1, '2021-01-12 20:28:09', '2021-01-12 20:28:09'),
(343, 53, 'Nawabganj Upazila', 1, '2021-01-12 20:28:22', '2021-01-12 20:28:22'),
(344, 53, 'Parbatipur Upazila', 1, '2021-01-12 20:28:36', '2021-01-12 20:28:36'),
(345, 17, 'Companiganj', 1, '2021-01-12 20:33:43', '2021-01-12 20:33:43'),
(346, 55, 'Kurigram Sadar', 1, '2021-01-12 20:38:22', '2021-01-12 20:38:22'),
(347, 55, 'Bhurungamari Upazila', 1, '2021-01-12 20:39:01', '2021-01-12 20:39:01'),
(348, 55, 'Bhurungamari Upazila', 1, '2021-01-12 20:39:42', '2021-01-12 20:39:42'),
(349, 55, 'Char Rajibpur Upazila', 1, '2021-01-12 20:39:57', '2021-01-12 20:39:57'),
(350, 55, 'Chilmari Upazila', 1, '2021-01-12 20:40:23', '2021-01-12 20:40:23'),
(351, 55, 'Nageshwari Upazila', 1, '2021-01-12 20:40:49', '2021-01-12 20:40:49'),
(352, 55, 'Phulbari Upazila', 1, '2021-01-12 20:42:49', '2021-01-12 20:42:49'),
(353, 55, 'Rajarhat Upazila', 1, '2021-01-12 20:43:05', '2021-01-12 20:43:05'),
(354, 55, 'Raomari Upazila', 1, '2021-01-12 20:43:18', '2021-01-12 20:43:18'),
(355, 55, 'Ulipur Upazila', 1, '2021-01-12 20:43:32', '2021-01-12 20:43:32'),
(356, 56, 'Lalmonirhat sadar', 1, '2021-01-12 20:44:09', '2021-01-12 20:44:09'),
(357, 56, 'Aditmari Upazila‎', 1, '2021-01-12 20:44:54', '2021-01-12 20:44:54'),
(358, 56, 'Hatibandha Upazila', 1, '2021-01-12 20:45:08', '2021-01-12 20:45:08'),
(359, 56, 'Kaliganj Upazila', 1, '2021-01-12 20:45:23', '2021-01-12 20:45:23'),
(360, 56, 'Patgram Upazila', 1, '2021-01-12 20:45:37', '2021-01-12 20:45:37'),
(361, 48, 'Natore Sadar', 1, '2021-01-12 20:46:28', '2021-01-12 20:46:28'),
(362, 20, 'Gazipur Sadar', 1, '2021-01-12 20:55:26', '2021-01-12 20:55:26'),
(363, 20, 'Kapasia Upazila‎', 1, '2021-01-12 20:56:15', '2021-01-12 20:56:15'),
(364, 20, 'Kaliakair Upazila', 1, '2021-01-12 20:56:25', '2021-01-12 20:56:25'),
(365, 20, 'Kaliganj Upazila', 1, '2021-01-12 20:56:37', '2021-01-12 20:56:37'),
(366, 20, 'Kapasia Upazila', 1, '2021-01-12 20:56:47', '2021-01-12 20:56:47'),
(367, 20, 'Sreepur Upazila', 1, '2021-01-12 20:56:59', '2021-01-12 20:56:59'),
(368, 27, 'Narsingdi Sadar', 1, '2021-01-12 20:58:06', '2021-01-12 20:58:06'),
(369, 27, 'Belabo Upazila', 1, '2021-01-12 20:58:18', '2021-01-12 20:58:18'),
(370, 27, 'Monohardi Upazila', 1, '2021-01-12 20:58:29', '2021-01-12 20:58:29'),
(371, 27, 'Palash Upazila', 1, '2021-01-12 20:58:42', '2021-01-12 20:58:42'),
(372, 27, 'Raipura Upazila', 1, '2021-01-12 20:58:51', '2021-01-12 20:59:01'),
(373, 27, 'Shibpur Upazila', 1, '2021-01-12 20:59:31', '2021-01-12 20:59:31'),
(374, 51, 'Rajshahi Sadar', 1, '2021-01-12 21:02:03', '2021-01-12 21:02:03'),
(375, 51, 'Bagha Upazila', 1, '2021-01-12 21:02:22', '2021-01-12 21:02:22'),
(376, 51, 'Bagmara Upazila', 1, '2021-01-12 21:02:34', '2021-01-12 21:02:34'),
(377, 51, 'Boalia Thana', 1, '2021-01-12 21:02:45', '2021-01-12 21:02:45'),
(378, 51, 'Charghat Upazila', 1, '2021-01-12 21:02:55', '2021-01-12 21:02:55'),
(379, 51, 'Durgapur Upazila, Rajshahi', 1, '2021-01-12 21:03:09', '2021-01-12 21:03:09'),
(380, 51, 'Godagari Upazila', 1, '2021-01-12 21:03:19', '2021-01-12 21:03:19'),
(381, 51, 'Mohanpur Upazila', 1, '2021-01-12 21:03:29', '2021-01-12 21:03:29'),
(382, 51, 'Paba Upazila', 1, '2021-01-12 21:03:39', '2021-01-12 21:03:39'),
(383, 51, 'Puthia Upazila', 1, '2021-01-12 21:03:51', '2021-01-12 21:03:51'),
(384, 51, 'Shah Makhdum Thana', 1, '2021-01-12 21:04:01', '2021-01-12 21:04:01'),
(385, 51, 'Tanore Upazila', 1, '2021-01-12 21:04:14', '2021-01-12 21:04:14'),
(386, 19, 'Alfadanga Upazila', 1, '2021-01-12 21:04:45', '2021-01-12 21:04:45'),
(387, 19, 'Bhanga Upazila', 1, '2021-01-12 21:04:55', '2021-01-12 21:04:55'),
(388, 19, 'Boalmari Upazila', 1, '2021-01-12 21:05:04', '2021-01-12 21:05:04'),
(389, 19, 'Charbhadrasan Upazila', 1, '2021-01-12 21:05:14', '2021-01-12 21:05:14'),
(390, 19, 'Faridpur Sadar', 1, '2021-01-12 21:05:26', '2021-01-12 21:05:26'),
(391, 19, 'Madhukhali Upazila', 1, '2021-01-12 21:05:36', '2021-01-12 21:05:36'),
(392, 19, 'Nagarkanda Upazila', 1, '2021-01-12 21:05:46', '2021-01-12 21:05:46'),
(393, 19, 'Sadarpur Upazila', 1, '2021-01-12 21:05:54', '2021-01-12 21:05:54'),
(394, 19, 'Saltha Upazila', 1, '2021-01-12 21:06:04', '2021-01-12 21:06:04'),
(395, 45, 'Adamdighi Upazila', 1, '2021-01-12 21:06:55', '2021-01-12 21:06:55'),
(396, 45, 'Bogura Sadar', 1, '2021-01-12 21:07:12', '2021-01-12 21:07:12'),
(397, 45, 'Dhunat Upazila', 1, '2021-01-12 21:07:23', '2021-01-12 21:07:23'),
(398, 45, 'Dhupchanchia Upazila', 1, '2021-01-12 21:07:33', '2021-01-12 21:07:33'),
(399, 45, 'Gabtali Upazila', 1, '2021-01-12 21:07:43', '2021-01-12 21:07:43'),
(400, 45, 'Kahaloo Upazila', 1, '2021-01-12 21:07:54', '2021-01-12 21:07:54'),
(401, 45, 'Nandigram Upazila', 1, '2021-01-12 21:08:04', '2021-01-12 21:08:04'),
(402, 45, 'Sariakandi Upazila', 1, '2021-01-12 21:08:16', '2021-01-12 21:08:16'),
(403, 45, 'Shajahanpur Upazila', 1, '2021-01-12 21:08:26', '2021-01-12 21:08:26'),
(404, 45, 'Sherpur', 1, '2021-01-12 21:08:46', '2021-01-12 21:08:46'),
(405, 45, 'Shibganj Upazila, Bogra', 1, '2021-01-12 21:08:56', '2021-01-12 21:08:56'),
(406, 45, 'Sonatala Upazila', 1, '2021-01-12 21:09:05', '2021-01-12 21:09:05'),
(407, 49, 'Chapainawabganj Sadar', 1, '2021-01-12 21:09:46', '2021-01-12 21:09:46'),
(408, 49, 'Bholahat Upazila', 1, '2021-01-12 21:10:36', '2021-01-12 21:10:36'),
(409, 49, 'Dogachi', 1, '2021-01-12 21:10:49', '2021-01-12 21:10:49'),
(410, 49, 'Gomostapur Upazila', 1, '2021-01-12 21:10:58', '2021-01-12 21:10:58'),
(411, 49, 'Nachol Upazila', 1, '2021-01-12 21:11:08', '2021-01-12 21:11:08'),
(412, 49, 'Shibganj Upazila, Chapai Nawabganj', 1, '2021-01-12 21:11:17', '2021-01-12 21:11:17'),
(413, 9, 'Kasba Upazila', 1, '2021-01-12 21:28:00', '2021-01-12 21:28:00'),
(414, 18, 'Rangamati Sadar', 1, '2021-01-12 21:29:00', '2021-01-12 21:29:00'),
(415, 9, 'Akhaura Upazila', 1, '2021-01-12 21:29:07', '2021-01-12 21:29:07'),
(416, 9, 'Ashuganj Upazila', 1, '2021-01-12 21:29:24', '2021-01-12 21:29:24'),
(417, 18, 'Kaptai', 1, '2021-01-12 21:29:26', '2021-01-12 21:29:26'),
(418, 18, 'Kawkhali', 1, '2021-01-12 21:29:40', '2021-01-12 21:29:40'),
(419, 9, 'Bancharampur Upazila', 1, '2021-01-12 21:30:01', '2021-01-12 21:30:01'),
(420, 18, 'Baghaichari', 1, '2021-01-12 21:30:10', '2021-01-12 21:30:10'),
(421, 9, 'Bijoynagar Upazila', 1, '2021-01-12 21:30:13', '2021-01-12 21:30:13'),
(422, 18, 'Barkal', 1, '2021-01-12 21:30:27', '2021-01-12 21:30:27'),
(423, 9, 'Nasirnagar Upazila', 1, '2021-01-12 21:30:31', '2021-01-12 21:30:31'),
(424, 9, 'Sarail Upazila', 1, '2021-01-12 21:30:41', '2021-01-12 21:30:41'),
(425, 18, 'Langadu', 1, '2021-01-12 21:30:42', '2021-01-12 21:30:42'),
(426, 18, 'Rajasthali', 1, '2021-01-12 21:31:05', '2021-01-12 21:31:05'),
(427, 15, 'Khagrachari Sadar', 1, '2021-01-12 21:31:25', '2021-01-12 21:31:25'),
(428, 18, 'Belaichari', 1, '2021-01-12 21:31:28', '2021-01-12 21:31:28'),
(429, 18, 'Juraichari', 1, '2021-01-12 21:31:45', '2021-01-12 21:31:45'),
(430, 18, 'Naniarchar', 1, '2021-01-12 21:32:02', '2021-01-12 21:32:02'),
(431, 26, 'Narayanganj Sadar', 1, '2021-01-12 21:38:50', '2021-01-12 21:38:50'),
(432, 26, 'Araihajar', 1, '2021-01-12 21:39:18', '2021-01-12 21:39:18'),
(433, 26, 'Bandar', 1, '2021-01-12 21:39:33', '2021-01-12 21:39:33'),
(434, 26, 'Rupganj', 1, '2021-01-12 21:39:52', '2021-01-12 21:39:52'),
(435, 26, 'Sonargaon', 1, '2021-01-12 21:40:09', '2021-01-12 21:40:09'),
(436, 30, 'Tangail Sadar', 1, '2021-01-12 21:41:17', '2021-01-12 21:41:17'),
(437, 30, 'Sakhipur Upazila', 1, '2021-01-12 21:43:26', '2021-01-12 21:43:26'),
(438, 30, 'Basail Upazila', 1, '2021-01-12 21:43:37', '2021-01-12 21:43:37'),
(439, 30, 'Madhupur Upazila', 1, '2021-01-12 21:43:51', '2021-01-12 21:43:51'),
(440, 30, 'Ghatail', 1, '2021-01-12 21:44:07', '2021-01-12 21:44:07'),
(441, 30, 'Kalihati', 1, '2021-01-12 21:44:19', '2021-01-12 21:44:19'),
(442, 30, 'Nagarpur', 1, '2021-01-12 21:44:31', '2021-01-12 21:44:31'),
(443, 30, 'Mirzapur', 1, '2021-01-12 21:44:49', '2021-01-12 21:44:49'),
(444, 30, 'Gopalpur', 1, '2021-01-12 21:45:04', '2021-01-12 21:45:04'),
(445, 30, 'Delduar', 1, '2021-01-12 21:45:23', '2021-01-12 21:45:23'),
(446, 30, 'Bhuapur', 1, '2021-01-12 21:45:34', '2021-01-12 21:45:34'),
(447, 30, 'Dhanbari', 1, '2021-01-12 21:45:45', '2021-01-12 21:45:45'),
(448, 22, 'Kishoreganj Sadar', 1, '2021-01-12 21:48:24', '2021-01-12 21:48:24'),
(449, 22, 'Kuliarchar', 1, '2021-01-12 21:49:01', '2021-01-12 21:49:01'),
(450, 11, 'Sitakunda', 1, '2021-01-12 21:54:19', '2021-01-12 21:54:19'),
(451, 11, 'Satkania', 1, '2021-01-12 22:04:50', '2021-01-12 22:04:50'),
(452, 11, 'Satkania Upazila', 1, '2021-01-12 22:07:08', '2021-01-12 22:07:08'),
(453, 11, 'Sandwip Upazila', 1, '2021-01-12 22:07:22', '2021-01-12 22:07:22'),
(454, 11, 'Raozan Upazila', 1, '2021-01-12 22:07:37', '2021-01-12 22:07:37'),
(455, 11, 'Rangunia Upazila', 1, '2021-01-12 22:07:49', '2021-01-12 22:07:49'),
(456, 11, 'Patiya Upazila', 1, '2021-01-12 22:08:04', '2021-01-12 22:08:04'),
(457, 11, 'Mirsharai Upazila', 1, '2021-01-12 22:08:18', '2021-01-12 22:08:18'),
(458, 11, 'Lohagara Upazila', 1, '2021-01-12 22:08:29', '2021-01-12 22:08:29'),
(459, 11, 'Hathazari Upazila', 1, '2021-01-12 22:08:51', '2021-01-12 22:08:51'),
(460, 11, 'Fatikchhari Upazila', 1, '2021-01-12 22:09:05', '2021-01-12 22:09:05'),
(461, 11, 'Chandanaish Upazila', 1, '2021-01-12 22:09:16', '2021-01-12 22:09:16'),
(462, 11, 'Boalkhali Upazila', 1, '2021-01-12 22:09:27', '2021-01-12 22:09:27'),
(463, 11, 'Banshkhali Upazila', 1, '2021-01-12 22:09:35', '2021-01-12 22:09:35'),
(464, 11, 'Anwara Upazila', 1, '2021-01-12 22:09:48', '2021-01-12 22:09:48'),
(465, 22, 'Hossainpur', 1, '2021-01-12 22:14:57', '2021-01-12 22:14:57'),
(466, 22, 'Pakundia', 1, '2021-01-12 22:15:13', '2021-01-12 22:15:13'),
(467, 22, 'Bajitpur', 1, '2021-01-12 22:15:40', '2021-01-12 22:15:40'),
(468, 22, 'Austagram', 1, '2021-01-12 22:15:54', '2021-01-12 22:15:54'),
(469, 22, 'Karimganj', 1, '2021-01-12 22:16:07', '2021-01-12 22:16:07'),
(470, 22, 'Katiadi', 1, '2021-01-12 22:16:22', '2021-01-12 22:16:22'),
(471, 22, 'Tarail', 1, '2021-01-12 22:16:40', '2021-01-12 22:16:40'),
(472, 22, 'Itna', 1, '2021-01-12 22:16:53', '2021-01-12 22:16:53'),
(473, 22, 'Nikli', 1, '2021-01-12 22:17:10', '2021-01-12 22:17:10'),
(474, 22, 'Mithamain', 1, '2021-01-12 22:17:21', '2021-01-12 22:17:21'),
(475, 22, 'Bhairab', 1, '2021-01-12 22:17:34', '2021-01-12 22:17:34'),
(476, 24, 'Manikganj Sadar', 1, '2021-01-12 22:18:58', '2021-01-12 22:18:58'),
(477, 24, 'Singair', 1, '2021-01-12 22:19:46', '2021-01-12 22:19:46'),
(478, 24, 'Shivalaya', 1, '2021-01-12 22:19:58', '2021-01-12 22:19:58'),
(479, 24, 'Saturia', 1, '2021-01-12 22:20:12', '2021-01-12 22:20:12'),
(480, 24, 'Harirampur', 1, '2021-01-12 22:20:26', '2021-01-12 22:20:26'),
(481, 24, 'Ghior', 1, '2021-01-12 22:20:37', '2021-01-12 22:20:37'),
(482, 24, 'Daulatpur', 1, '2021-01-12 22:20:52', '2021-01-12 22:20:52'),
(483, 23, 'Madaripur Sadar', 1, '2021-01-12 22:22:05', '2021-01-12 22:22:05'),
(484, 23, 'Kalkini', 1, '2021-01-12 22:22:17', '2021-01-12 22:22:17'),
(485, 23, 'Rajoir', 1, '2021-01-12 22:22:39', '2021-01-12 22:22:39'),
(486, 23, 'Shibchar', 1, '2021-01-12 22:22:49', '2021-01-12 22:22:49'),
(487, 25, 'Munshiganj Sadar', 1, '2021-01-12 22:23:38', '2021-01-12 22:23:38'),
(488, 25, 'Lohajang', 1, '2021-01-12 22:23:50', '2021-01-12 22:23:50'),
(489, 25, 'Sreenagar', 1, '2021-01-12 22:24:03', '2021-01-12 22:24:03'),
(490, 25, 'Sirajdikhan', 1, '2021-01-12 22:24:13', '2021-01-12 22:24:13'),
(491, 25, 'Tongibari', 1, '2021-01-12 22:24:27', '2021-01-12 22:24:27'),
(492, 25, 'Gazaria', 1, '2021-01-12 22:24:37', '2021-01-12 22:24:37'),
(493, 28, 'Rajbari Sadar', 1, '2021-01-12 22:25:45', '2021-01-12 22:25:45'),
(494, 28, 'Baliakandi', 1, '2021-01-12 22:25:57', '2021-01-12 22:25:57'),
(495, 28, 'Goalanda', 1, '2021-01-12 22:26:13', '2021-01-12 22:26:13'),
(496, 28, 'Pangsha', 1, '2021-01-12 22:26:25', '2021-01-12 22:26:25'),
(497, 28, 'Kalukhali', 1, '2021-01-12 22:26:36', '2021-01-12 22:26:36'),
(498, 29, 'Shariatpur Sadar', 1, '2021-01-12 22:27:15', '2021-01-12 22:27:15'),
(499, 29, 'Damudya', 1, '2021-01-12 22:27:30', '2021-01-12 22:27:30'),
(500, 29, 'Naria', 1, '2021-01-12 22:27:44', '2021-01-12 22:27:44'),
(501, 29, 'Zanjira', 1, '2021-01-12 22:27:55', '2021-01-12 22:27:55'),
(502, 29, 'Bhedarganj', 1, '2021-01-12 22:28:06', '2021-01-12 22:28:06'),
(503, 29, 'Gosairhat', 1, '2021-01-12 22:28:27', '2021-01-12 22:28:27'),
(504, 29, 'Shakhipur', 1, '2021-01-12 22:28:39', '2021-01-12 22:28:39'),
(505, 41, 'Jamalpur Sadar', 1, '2021-01-12 22:46:42', '2021-01-12 22:46:42'),
(506, 41, 'Dewanganj', 1, '2021-01-12 22:47:04', '2021-01-12 22:47:04'),
(507, 41, 'Baksiganj', 1, '2021-01-12 22:47:19', '2021-01-12 22:47:19'),
(508, 41, 'Madarganj', 1, '2021-01-12 22:47:55', '2021-01-12 22:47:55'),
(509, 41, 'Melandaha', 1, '2021-01-12 22:48:06', '2021-01-12 22:48:06'),
(510, 41, 'Sarishabari', 1, '2021-01-12 22:48:19', '2021-01-12 22:48:19'),
(511, 40, 'Satkhira Sadar', 1, '2021-01-12 22:56:18', '2021-01-12 22:56:18'),
(512, 40, 'Assasuni', 1, '2021-01-12 22:56:29', '2021-01-12 22:56:29'),
(513, 40, 'Debhata', 1, '2021-01-12 22:56:45', '2021-01-12 22:56:45'),
(514, 40, 'Tala', 1, '2021-01-12 22:56:57', '2021-01-12 22:56:57'),
(515, 40, 'Kalaroa', 1, '2021-01-12 22:57:09', '2021-01-12 22:57:09'),
(516, 40, 'Kaliganj', 1, '2021-01-12 22:57:24', '2021-01-12 22:57:24'),
(517, 40, 'Shyamnagar', 1, '2021-01-12 22:57:37', '2021-01-12 22:57:37'),
(518, 33, 'Abhaynagar', 1, '2021-01-12 22:59:00', '2021-01-12 22:59:00'),
(519, 33, 'Bagherpara', 1, '2021-01-12 22:59:14', '2021-01-12 22:59:14'),
(520, 33, 'Chaugachha', 1, '2021-01-12 22:59:25', '2021-01-12 22:59:25'),
(521, 33, 'Jhikargachha', 1, '2021-01-12 22:59:35', '2021-01-12 22:59:35'),
(522, 33, 'Keshabpur', 1, '2021-01-12 22:59:45', '2021-01-12 22:59:45'),
(523, 33, 'Jessore Sadar', 1, '2021-01-12 22:59:55', '2021-01-12 22:59:55'),
(524, 33, 'Manirampur', 1, '2021-01-12 23:00:05', '2021-01-12 23:00:05'),
(525, 33, 'Sharsha', 1, '2021-01-12 23:00:24', '2021-01-12 23:00:24'),
(526, 32, 'Alamdanga', 1, '2021-01-12 23:01:41', '2021-01-12 23:01:41'),
(527, 32, 'Chuadanga Sadar', 1, '2021-01-12 23:01:55', '2021-01-12 23:01:55'),
(528, 32, 'Jibannagar', 1, '2021-01-12 23:02:10', '2021-01-12 23:02:10'),
(529, 32, 'Damurhuda', 1, '2021-01-12 23:02:30', '2021-01-12 23:02:30'),
(530, 32, 'Darsana', 1, '2021-01-12 23:02:46', '2021-01-12 23:02:46'),
(531, 31, 'Bagerhat Sadar', 1, '2021-01-12 23:03:48', '2021-01-12 23:03:48'),
(532, 31, 'Chitalmari', 1, '2021-01-12 23:04:08', '2021-01-12 23:04:08'),
(533, 31, 'Fakirhat', 1, '2021-01-12 23:04:25', '2021-01-12 23:04:25'),
(534, 31, 'Mollahat', 1, '2021-01-12 23:04:56', '2021-01-12 23:04:56'),
(535, 31, 'Kachua Upazila', 1, '2021-01-12 23:05:18', '2021-01-12 23:05:18'),
(536, 31, 'Mongla', 1, '2021-01-12 23:05:35', '2021-01-12 23:05:35'),
(537, 31, 'Morrelganj', 1, '2021-01-12 23:05:53', '2021-01-12 23:05:53'),
(538, 31, 'Rampal', 1, '2021-01-12 23:06:10', '2021-01-12 23:06:10'),
(539, 31, 'Sarankhola', 1, '2021-01-12 23:06:23', '2021-01-12 23:06:23'),
(540, 34, 'Jhenaidah Sadar', 1, '2021-01-12 23:07:52', '2021-01-12 23:07:52'),
(541, 34, 'Maheshpur', 1, '2021-01-12 23:08:05', '2021-01-12 23:08:05'),
(542, 34, 'Kaliganj  Upazila', 1, '2021-01-12 23:08:49', '2021-01-12 23:08:49'),
(543, 34, 'Kotchandpur', 1, '2021-01-12 23:09:00', '2021-01-12 23:09:00'),
(544, 34, 'Shailkupa', 1, '2021-01-12 23:09:15', '2021-01-12 23:09:15'),
(545, 34, 'Harinakunda', 1, '2021-01-12 23:09:26', '2021-01-12 23:09:26'),
(546, 36, 'Bheramara', 1, '2021-01-12 23:12:02', '2021-01-12 23:12:02'),
(547, 36, 'Daulatpur Upazila', 1, '2021-01-12 23:12:27', '2021-01-12 23:12:27'),
(548, 36, 'Khoksa', 1, '2021-01-12 23:12:40', '2021-01-12 23:12:40'),
(549, 36, 'Kumarkhali', 1, '2021-01-12 23:12:51', '2021-01-12 23:12:51'),
(550, 36, 'Kushtia Sadar', 1, '2021-01-12 23:13:06', '2021-01-12 23:13:06'),
(551, 36, 'Mirpur', 1, '2021-01-12 23:13:21', '2021-01-12 23:13:21'),
(552, 47, 'Atrai', 1, '2021-01-13 00:41:25', '2021-01-13 00:41:25'),
(553, 47, 'Badalgachhi', 1, '2021-01-13 00:41:43', '2021-01-13 00:41:43'),
(554, 47, 'Dhamoirhat', 1, '2021-01-13 00:41:58', '2021-01-13 00:41:58'),
(555, 47, 'Manda', 1, '2021-01-13 00:42:13', '2021-01-13 00:42:13'),
(556, 47, 'Mohadevpur', 1, '2021-01-13 00:42:32', '2021-01-13 00:42:32'),
(557, 47, 'Naogaon Sadar', 1, '2021-01-13 00:42:50', '2021-01-13 00:42:50'),
(558, 47, 'Niamatpur', 1, '2021-01-13 00:43:03', '2021-01-13 00:43:03'),
(559, 47, 'Patnitala', 1, '2021-01-13 00:43:18', '2021-01-13 00:43:18'),
(560, 47, 'Porsha', 1, '2021-01-13 00:43:29', '2021-01-13 00:43:29'),
(561, 47, 'Raninagar', 1, '2021-01-13 00:43:43', '2021-01-13 00:43:43'),
(562, 47, 'Sapahar', 1, '2021-01-13 00:43:57', '2021-01-13 00:43:57'),
(563, 46, 'Joypurhat Sadar', 1, '2021-01-13 00:45:10', '2021-01-13 00:45:10'),
(564, 46, 'Akkelpur', 1, '2021-01-13 00:45:24', '2021-01-13 00:45:24'),
(565, 46, 'Kalai', 1, '2021-01-13 00:45:37', '2021-01-13 00:45:37'),
(566, 46, 'Khetlal', 1, '2021-01-13 00:45:48', '2021-01-13 00:45:48'),
(567, 46, 'Panchbibi', 1, '2021-01-13 00:46:04', '2021-01-13 00:46:04'),
(568, 44, 'Jhenaigati', 1, '2021-01-13 00:46:47', '2021-01-13 00:46:47'),
(569, 44, 'Nakla Upazila', 1, '2021-01-13 00:46:58', '2021-01-13 00:46:58'),
(570, 44, 'Nalitabari', 1, '2021-01-13 00:47:11', '2021-01-13 00:47:11'),
(571, 44, 'Sherpur Sadar', 1, '2021-01-13 00:47:25', '2021-01-13 00:47:25'),
(572, 44, 'Sreebardi', 1, '2021-01-13 00:47:37', '2021-01-13 00:47:37'),
(573, 43, 'Atpara', 1, '2021-01-13 00:48:14', '2021-01-13 00:48:14'),
(574, 43, 'Barhatta', 1, '2021-01-13 00:48:26', '2021-01-13 00:48:26'),
(575, 44, 'Durgapur', 1, '2021-01-13 00:48:43', '2021-01-13 00:48:43'),
(576, 44, 'Khaliajuri', 1, '2021-01-13 00:49:01', '2021-01-13 00:49:01'),
(577, 44, 'Kalmakanda', 1, '2021-01-13 00:49:17', '2021-01-13 00:49:17'),
(578, 44, 'Kendua', 1, '2021-01-13 00:49:32', '2021-01-13 00:49:32'),
(579, 44, 'Madan', 1, '2021-01-13 00:49:45', '2021-01-13 00:49:45'),
(580, 44, 'Mohanganj', 1, '2021-01-13 00:49:59', '2021-01-13 00:49:59'),
(581, 44, 'Netrokona Sadar', 1, '2021-01-13 00:50:16', '2021-01-13 00:50:16'),
(582, 44, 'Purbadhala', 1, '2021-01-13 00:50:27', '2021-01-13 00:50:27'),
(583, 48, 'Gurudaspur', 1, '2021-01-13 00:51:44', '2021-01-13 00:51:44'),
(584, 48, 'Baraigram', 1, '2021-01-13 00:52:04', '2021-01-13 00:52:04'),
(585, 48, 'Bagatipara', 1, '2021-01-13 00:52:19', '2021-01-13 00:52:19'),
(586, 48, 'Lalpur', 1, '2021-01-13 00:52:34', '2021-01-13 00:52:34'),
(587, 48, 'Singra', 1, '2021-01-13 00:52:48', '2021-01-13 00:52:48'),
(588, 48, 'Naldanga', 1, '2021-01-13 00:53:06', '2021-01-13 00:53:06'),
(589, 21, 'Gopalganj Sadar', 1, '2021-01-13 00:55:56', '2021-01-13 00:55:56'),
(590, 21, 'Kashiani', 1, '2021-01-13 00:56:06', '2021-01-13 00:56:06'),
(591, 21, 'Kotalipara', 1, '2021-01-13 00:56:19', '2021-01-13 00:56:19'),
(592, 21, 'Muksudpur', 1, '2021-01-13 00:56:39', '2021-01-13 00:56:39'),
(593, 21, 'Tungipara', 1, '2021-01-13 00:56:52', '2021-01-13 00:56:52'),
(594, 35, 'erokhada', 0, '2021-01-13 00:58:56', '2021-01-24 15:08:46'),
(595, 35, 'Sonadanga', 1, '2021-01-13 00:59:09', '2021-01-13 00:59:09'),
(596, 35, 'Rupsa', 1, '2021-01-13 00:59:26', '2021-01-13 00:59:26'),
(597, 35, 'Phultala', 1, '2021-01-13 00:59:37', '2021-01-13 00:59:37'),
(598, 35, 'Paikgachha', 1, '2021-01-13 00:59:52', '2021-01-13 00:59:52'),
(599, 35, 'Koyra', 1, '2021-01-13 01:00:06', '2021-01-13 01:00:06'),
(600, 35, 'Kotwali Upazila', 1, '2021-01-13 01:00:32', '2021-01-13 01:00:32'),
(601, 35, 'Khan Jahan ALi', 1, '2021-01-13 01:00:44', '2021-01-13 01:00:44'),
(602, 35, 'Khalishpur', 1, '2021-01-13 01:01:01', '2021-01-13 01:01:01'),
(603, 35, 'Harintana', 1, '2021-01-13 01:01:19', '2021-01-13 01:01:19'),
(604, 35, 'Dumuria', 1, '2021-01-13 01:01:32', '2021-01-13 01:01:32'),
(605, 35, 'Dighalia', 1, '2021-01-13 01:01:45', '2021-01-13 01:01:45'),
(606, 35, 'Daulatpur  Upazila', 1, '2021-01-13 01:02:12', '2021-01-13 01:02:12'),
(607, 35, 'Dacope', 1, '2021-01-13 01:02:23', '2021-01-13 01:02:23'),
(608, 35, 'Batiaghata', 1, '2021-01-13 01:02:34', '2021-01-13 01:02:34'),
(609, 37, 'Magura Sadar', 1, '2021-01-13 01:03:37', '2021-01-13 01:03:37'),
(610, 37, 'Shalikha', 1, '2021-01-13 01:03:46', '2021-01-13 01:03:46'),
(611, 37, 'Mohammadpur Upazila', 1, '2021-01-13 01:04:00', '2021-01-13 01:04:00'),
(612, 37, 'Sreepur', 1, '2021-01-13 01:04:12', '2021-01-13 01:04:12'),
(613, 38, 'Meherpur Sadar', 1, '2021-01-13 01:04:58', '2021-01-13 01:04:58'),
(614, 38, 'Gangni', 1, '2021-01-13 01:05:15', '2021-01-13 01:05:15'),
(615, 38, 'Mujibnagar', 1, '2021-01-13 01:05:33', '2021-01-13 01:05:33'),
(616, 39, 'Narail Sadar', 1, '2021-01-13 01:06:19', '2021-01-13 01:06:19'),
(617, 39, 'Kalia', 1, '2021-01-13 01:06:35', '2021-01-13 01:06:35'),
(618, 39, 'Lohagara', 1, '2021-01-13 01:06:50', '2021-01-13 01:06:50'),
(619, 42, 'Mymensingh Sadar', 1, '2021-01-13 01:07:57', '2021-01-13 01:07:57'),
(620, 42, 'Bhaluka', 1, '2021-01-13 01:08:11', '2021-01-13 01:08:11'),
(621, 42, 'Trishal', 1, '2021-01-13 01:08:28', '2021-01-13 01:08:28'),
(622, 42, 'Haluaghat', 1, '2021-01-13 01:08:42', '2021-01-13 01:08:42'),
(623, 42, 'Muktagacha', 1, '2021-01-13 01:08:55', '2021-01-13 01:08:55'),
(624, 42, 'Dhobaura', 1, '2021-01-13 01:09:08', '2021-01-13 01:09:08'),
(625, 42, 'Fulbaria', 1, '2021-01-13 01:09:20', '2021-01-13 01:09:20'),
(626, 42, 'Gaffargaon', 1, '2021-01-13 01:09:33', '2021-01-13 01:09:33'),
(627, 42, 'Gauripur', 1, '2021-01-13 01:09:43', '2021-01-13 01:09:43'),
(628, 42, 'Ishwarganj', 1, '2021-01-13 01:09:58', '2021-01-13 01:09:58'),
(629, 42, 'Nandail', 1, '2021-01-13 01:10:10', '2021-01-13 01:10:10'),
(630, 42, 'Phulpur', 1, '2021-01-13 01:10:23', '2021-01-13 01:10:23'),
(631, 42, 'Tara Khanda', 1, '2021-01-13 01:10:34', '2021-01-13 01:10:34'),
(632, 50, 'Pabna Sadar', 1, '2021-01-13 01:13:05', '2021-01-13 01:13:05'),
(633, 50, 'Atgharia', 1, '2021-01-13 01:13:20', '2021-01-13 01:13:20'),
(634, 50, 'Bera', 1, '2021-01-13 01:13:30', '2021-01-13 01:13:30'),
(635, 50, 'Bhangura', 1, '2021-01-13 01:13:43', '2021-01-13 01:13:43'),
(636, 50, 'Chatmohar', 1, '2021-01-13 01:13:59', '2021-01-13 01:13:59'),
(637, 50, 'Faridpur', 1, '2021-01-13 01:14:15', '2021-01-13 01:14:15'),
(638, 50, 'Ishwardi', 1, '2021-01-13 01:14:29', '2021-01-13 01:14:29'),
(639, 50, 'Shathia', 1, '2021-01-13 01:14:43', '2021-01-13 01:14:43'),
(640, 50, 'Sujanagar', 1, '2021-01-13 01:14:54', '2021-01-13 01:14:54'),
(641, 52, 'Sirajganj Sadar', 1, '2021-01-13 01:15:21', '2021-01-13 01:15:21'),
(642, 52, 'Kazipur', 1, '2021-01-13 01:15:52', '2021-01-13 01:15:52'),
(643, 52, 'Ullahpara', 1, '2021-01-13 01:16:02', '2021-01-13 01:16:02'),
(644, 52, 'Shahjadpur', 1, '2021-01-13 01:16:15', '2021-01-13 01:16:15'),
(645, 52, 'Raiganj', 1, '2021-01-13 01:16:30', '2021-01-13 01:16:30'),
(646, 52, 'Kamarkhanda', 1, '2021-01-13 01:16:42', '2021-01-13 01:16:42'),
(647, 52, 'Tarash', 1, '2021-01-13 01:16:59', '2021-01-13 01:16:59'),
(648, 52, 'Belkuchi', 1, '2021-01-13 01:17:11', '2021-01-13 01:17:11'),
(649, 52, 'Chauhali', 1, '2021-01-13 01:17:23', '2021-01-13 01:17:23'),
(650, 54, 'Gaibandha Sadar', 1, '2021-01-13 01:18:10', '2021-01-13 01:18:10'),
(651, 54, 'Fulchhari', 1, '2021-01-13 01:18:24', '2021-01-13 01:18:24'),
(652, 54, 'Gobindaganj', 1, '2021-01-13 01:18:39', '2021-01-13 01:18:39'),
(653, 54, 'Palashbari', 1, '2021-01-13 01:18:51', '2021-01-13 01:18:51'),
(654, 54, 'Sadullapur', 1, '2021-01-13 01:19:03', '2021-01-13 01:19:03'),
(655, 54, 'Sundarganj', 1, '2021-01-13 01:19:19', '2021-01-13 01:19:19'),
(656, 54, 'Saghata', 1, '2021-01-13 01:19:31', '2021-01-13 01:19:31'),
(657, 66, 'Tongi Bazar', 1, '2021-01-13 01:33:49', '2021-01-13 01:33:49'),
(658, 66, 'Keraniganj', 1, '2021-01-13 01:34:03', '2021-01-13 01:54:10'),
(659, 67, 'Dohar', 1, '2021-01-13 01:47:44', '2021-01-13 01:47:44'),
(660, 66, 'Demra', 1, '2021-01-13 01:50:08', '2021-01-13 01:50:08'),
(661, 67, 'Nowabganj', 1, '2021-01-13 01:56:35', '2021-01-13 01:56:35'),
(662, 66, 'Sutrapur', 1, '2021-01-13 02:04:45', '2021-01-13 02:04:45'),
(663, 66, 'Dolaikhal', 1, '2021-01-13 02:05:01', '2021-01-13 02:05:01'),
(664, 66, 'Dolaipar', 1, '2021-01-13 02:05:13', '2021-01-13 02:05:13'),
(665, 66, 'Sonir Akhra', 1, '2021-01-13 02:08:00', '2021-01-13 02:08:00'),
(666, 66, 'Chittagong Road', 1, '2021-01-13 02:08:23', '2021-01-13 02:08:23'),
(667, 66, 'Jurain', 1, '2021-01-13 02:10:24', '2021-01-13 02:10:24'),
(668, 66, 'Postogola', 1, '2021-01-13 02:10:35', '2021-01-13 02:10:35'),
(669, 65, 'Agrabad', 1, '2021-01-13 17:41:39', '2021-01-13 17:41:39'),
(670, 65, 'Nasirabad', 1, '2021-01-13 17:42:28', '2021-01-13 17:42:28'),
(671, 65, 'Halishahar', 1, '2021-01-13 17:45:32', '2021-01-13 17:45:32'),
(672, 65, 'New Market ctg', 1, '2021-01-13 17:49:49', '2021-01-13 17:49:49'),
(673, 67, 'Banani', 1, '2021-01-13 21:54:48', '2021-01-14 00:46:36'),
(674, 11, 'baraiyarhat', 1, '2021-01-14 17:30:30', '2021-01-14 17:30:30'),
(675, 66, 'Kamrangichar', 1, '2021-01-16 17:11:26', '2021-01-16 17:11:26'),
(676, 43, 'Durgapur-', 1, '2021-01-18 22:40:27', '2021-01-18 22:40:27'),
(677, 43, 'Mohongonj', 1, '2021-01-18 22:46:14', '2021-01-18 22:46:14'),
(678, 43, 'Purbadhala.', 1, '2021-01-18 22:46:53', '2021-01-18 22:46:53'),
(679, 43, 'Kalmakanda.', 1, '2021-01-18 22:47:43', '2021-01-18 22:47:43'),
(680, 43, 'Khaliajuri.', 1, '2021-01-18 22:48:46', '2021-01-18 22:48:46'),
(681, 43, 'Madan.', 1, '2021-01-18 22:49:26', '2021-01-18 22:49:26'),
(682, 43, 'Kendua.', 1, '2021-01-18 22:50:04', '2021-01-18 22:50:04'),
(683, 11, 'Patenga', 1, '2021-01-19 21:47:39', '2021-01-19 21:47:39'),
(684, 1, 'Kochukhet', 1, '2021-01-20 16:12:21', '2021-01-20 16:12:21'),
(685, 1, 'Gudaraghat', 1, '2021-01-20 16:12:59', '2021-01-20 16:12:59');
INSERT INTO `sub_cities` (`id`, `city_id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(686, 1, 'Agargaon', 1, '2021-01-20 16:14:25', '2021-01-20 16:14:25'),
(687, 1, 'Ibrahimpur', 1, '2021-01-20 16:15:28', '2021-01-20 16:15:28'),
(688, 1, 'Vashantek', 1, '2021-01-20 16:16:36', '2021-01-20 16:16:36'),
(689, 1, 'Matikata', 1, '2021-01-20 16:17:18', '2021-01-20 16:17:18'),
(690, 1, 'Rupnagar Residential Area', 1, '2021-01-20 16:17:40', '2021-01-20 16:17:40'),
(691, 1, 'Rainkhola', 1, '2021-01-20 16:19:21', '2021-01-20 16:19:21'),
(692, 1, 'Mirpur Diabari', 1, '2021-01-20 16:19:41', '2021-01-20 16:19:41'),
(693, 1, 'Mazar Road', 1, '2021-01-20 16:21:51', '2021-01-20 16:21:51'),
(694, 1, 'Shagufta', 1, '2021-01-20 16:23:17', '2021-01-20 16:23:17'),
(695, 1, 'Bawnia', 1, '2021-01-20 16:23:28', '2021-01-20 16:23:28'),
(696, 1, 'Baigertek', 1, '2021-01-20 16:24:25', '2021-01-20 16:24:25'),
(697, 1, 'Madina nagar', 1, '2021-01-20 16:25:29', '2021-01-20 16:25:29'),
(698, 1, 'Dewanpara', 1, '2021-01-20 16:27:13', '2021-01-20 16:27:13'),
(699, 1, 'Mastertek', 1, '2021-01-20 16:27:33', '2021-01-20 16:27:33'),
(700, 1, 'Barontek', 1, '2021-01-20 16:27:52', '2021-01-20 16:27:52'),
(701, 1, 'Goltek', 1, '2021-01-20 16:28:32', '2021-01-20 16:28:32'),
(702, 1, 'Shewra', 1, '2021-01-20 16:28:51', '2021-01-20 16:28:51'),
(703, 1, 'Uttarkhan', 1, '2021-01-20 16:29:10', '2021-01-20 16:29:10'),
(704, 1, 'Dakshinkhan', 1, '2021-01-20 16:29:29', '2021-01-20 16:29:29'),
(705, 1, 'Fayedabad', 1, '2021-01-20 16:29:42', '2021-01-20 16:29:42'),
(706, 1, 'Kuril', 1, '2021-01-20 16:32:08', '2021-01-20 16:32:08'),
(707, 1, 'Nikunja', 1, '2021-01-20 16:32:35', '2021-01-20 16:32:35'),
(708, 1, 'Hajipara', 1, '2021-01-20 16:35:42', '2021-01-20 16:35:42'),
(709, 1, 'Kawla', 1, '2021-01-20 16:35:55', '2021-01-20 16:35:55'),
(710, 1, 'Naddapara', 1, '2021-01-20 16:36:14', '2021-01-20 16:36:14'),
(711, 1, 'Bashundhara R/A', 1, '2021-01-20 16:36:38', '2021-01-20 16:36:38'),
(712, 1, 'Vatara', 1, '2021-01-20 16:36:53', '2021-01-20 16:36:53'),
(713, 1, 'Nadda', 1, '2021-01-20 16:37:05', '2021-01-20 16:37:05'),
(714, 1, 'Notun Bazar', 1, '2021-01-20 16:37:45', '2021-01-20 16:37:45'),
(715, 1, 'Uttor Badda', 1, '2021-01-20 16:38:17', '2021-01-20 16:38:17'),
(716, 1, 'Middle Badda', 1, '2021-01-20 16:38:39', '2021-01-20 16:38:39'),
(717, 1, 'South Badda', 1, '2021-01-20 16:38:49', '2021-01-20 16:38:49'),
(718, 1, 'Merul Badda', 1, '2021-01-20 16:38:59', '2021-01-20 16:38:59'),
(719, 1, 'Banani DOHS', 1, '2021-01-20 16:39:26', '2021-01-20 16:39:26'),
(720, 1, 'South Monipur', 1, '2021-01-20 16:39:53', '2021-01-20 16:39:53'),
(721, 1, 'Shah Ali Bag', 1, '2021-01-20 16:40:06', '2021-01-20 16:40:06'),
(722, 1, 'Aziz Palli', 1, '2021-01-20 16:40:17', '2021-01-20 16:40:17'),
(723, 1, 'Bashtola', 1, '2021-01-20 16:40:40', '2021-01-20 16:40:40'),
(724, 1, 'South Baridhara, DIT Project', 1, '2021-01-20 16:40:51', '2021-01-20 16:40:51'),
(725, 1, 'Bijoy Shoroni', 1, '2021-01-20 16:41:08', '2021-01-20 16:41:08'),
(726, 1, 'Indira Road', 1, '2021-01-20 16:42:51', '2021-01-20 16:42:51'),
(727, 1, 'Razabazar', 1, '2021-01-20 16:43:59', '2021-01-20 16:43:59'),
(728, 1, 'Panthopath', 1, '2021-01-20 16:44:17', '2021-01-20 16:44:17'),
(729, 1, 'Green Road', 1, '2021-01-20 16:45:02', '2021-01-20 16:45:02'),
(730, 1, 'Manik Mia Avenue', 1, '2021-01-20 16:45:18', '2021-01-20 16:45:18'),
(731, 1, 'Asad Avenue', 1, '2021-01-20 16:45:38', '2021-01-20 16:45:38'),
(732, 1, 'West Dhanmondi', 1, '2021-01-20 16:45:51', '2021-01-20 16:45:51'),
(733, 1, 'Shankar', 1, '2021-01-20 16:46:03', '2021-01-20 16:46:03'),
(734, 1, 'Rayer Bazar', 1, '2021-01-20 16:46:15', '2021-01-20 16:46:15'),
(735, 1, 'Tallabag', 1, '2021-01-20 16:46:30', '2021-01-20 16:46:30'),
(736, 1, 'Hazaribag', 1, '2021-01-20 16:46:42', '2021-01-20 16:46:42'),
(737, 1, 'Pilkhana', 1, '2021-01-20 16:47:02', '2021-01-20 16:47:02'),
(738, 1, 'Nawabgonj Puran Dhaka', 1, '2021-01-20 16:47:47', '2021-01-20 16:47:47'),
(739, 1, 'Azimpur', 1, '2021-01-20 16:48:22', '2021-01-20 16:48:22'),
(740, 1, 'Nilkhet', 1, '2021-01-20 16:48:56', '2021-01-20 16:48:56'),
(741, 1, 'Chawkbazar (Dhaka)', 1, '2021-01-20 16:49:23', '2021-01-20 16:49:23'),
(742, 1, 'Naya Bazar', 1, '2021-01-20 16:49:39', '2021-01-20 16:49:39'),
(743, 1, 'Tatibazar', 1, '2021-01-20 16:50:06', '2021-01-20 16:50:06'),
(744, 1, 'Luxmi Bazar', 1, '2021-01-20 16:50:24', '2021-01-20 16:50:24'),
(745, 1, 'Puran Dhaka', 1, '2021-01-20 16:50:36', '2021-01-20 16:50:36'),
(746, 1, 'Siddique Bazar', 1, '2021-01-20 16:51:11', '2021-01-20 16:51:11'),
(747, 1, 'Tikatuly', 1, '2021-01-20 16:51:37', '2021-01-20 16:51:37'),
(748, 1, 'Nawabpur', 1, '2021-01-20 16:52:00', '2021-01-20 16:52:00'),
(749, 1, 'Kaptan Bazar', 1, '2021-01-20 16:52:15', '2021-01-20 16:52:15'),
(750, 1, 'Gulistan', 1, '2021-01-20 16:52:27', '2021-01-20 16:52:27'),
(751, 1, 'Bongo Bazar', 1, '2021-01-20 16:52:47', '2021-01-20 16:52:47'),
(752, 1, 'Chankarpul', 1, '2021-01-20 16:53:00', '2021-01-20 16:53:00'),
(753, 1, 'Palashi', 1, '2021-01-20 17:07:59', '2021-01-20 17:07:59'),
(754, 1, 'Dhakeshwari', 1, '2021-01-20 17:12:52', '2021-01-20 17:12:52'),
(755, 1, 'Kamalapur', 1, '2021-01-20 17:13:05', '2021-01-20 17:13:05'),
(756, 1, 'Dainik Bangla Mor', 1, '2021-01-20 17:13:35', '2021-01-20 17:13:35'),
(757, 1, 'Fakirapul', 1, '2021-01-20 17:13:50', '2021-01-20 17:13:50'),
(758, 1, 'Kakrail', 1, '2021-01-20 17:14:06', '2021-01-20 17:14:06'),
(759, 1, 'Naya Paltan', 1, '2021-01-20 17:14:25', '2021-01-20 17:14:25'),
(760, 1, 'Press Club', 1, '2021-01-20 17:14:57', '2021-01-20 17:14:57'),
(761, 1, 'High Court', 1, '2021-01-20 17:15:20', '2021-01-20 17:15:20'),
(762, 1, 'Dhaka Medical', 1, '2021-01-20 17:15:44', '2021-01-20 17:15:44'),
(763, 1, 'Bongo Bondhu Avenue', 1, '2021-01-20 17:15:58', '2021-01-20 17:15:58'),
(764, 1, 'Kazi Nazrul Islam Avenue', 1, '2021-01-20 17:16:22', '2021-01-20 17:16:22'),
(765, 1, 'Shantibag', 1, '2021-01-20 17:17:23', '2021-01-20 17:17:23'),
(766, 1, 'Minto Road', 1, '2021-01-20 17:18:04', '2021-01-20 17:18:04'),
(767, 1, 'Old Elephant Road', 1, '2021-01-20 17:18:16', '2021-01-20 17:18:16'),
(768, 1, 'Eskaton Garden Road', 1, '2021-01-20 17:18:28', '2021-01-20 17:18:28'),
(769, 1, 'Eskaton', 1, '2021-01-20 17:18:42', '2021-01-20 17:18:42'),
(770, 1, 'Mouchak', 1, '2021-01-20 17:19:01', '2021-01-20 17:19:01'),
(771, 1, 'Malibag', 1, '2021-01-20 17:19:13', '2021-01-20 17:19:13'),
(772, 1, 'Shahbag', 1, '2021-01-20 17:19:33', '2021-01-20 17:19:33'),
(773, 1, 'Bashabo', 1, '2021-01-20 17:20:02', '2021-01-20 17:20:02'),
(774, 1, 'Middle Bashabo', 1, '2021-01-20 17:24:36', '2021-01-20 17:24:36'),
(775, 1, 'Goran', 1, '2021-01-20 17:25:10', '2021-01-20 17:25:10'),
(776, 1, 'Madartek', 1, '2021-01-20 17:25:21', '2021-01-20 17:25:21'),
(777, 1, 'Manik Nagar', 1, '2021-01-20 17:25:33', '2021-01-20 17:25:33'),
(778, 1, 'Banasree', 1, '2021-01-20 17:27:12', '2021-01-20 17:27:12'),
(779, 1, 'Meradia', 1, '2021-01-20 17:27:25', '2021-01-20 17:27:25'),
(780, 1, 'Khilbari Tek', 1, '2021-01-20 17:27:38', '2021-01-20 17:27:38'),
(781, 1, 'Bawaliapara', 1, '2021-01-20 17:27:50', '2021-01-20 17:27:50'),
(782, 1, 'Mughdapara', 1, '2021-01-20 17:28:01', '2021-01-20 17:28:01'),
(783, 1, 'Golapbag (Dhaka)', 1, '2021-01-20 17:28:14', '2021-01-20 17:28:14'),
(784, 1, 'Hatirjheel', 1, '2021-01-20 17:28:58', '2021-01-20 17:28:58'),
(785, 1, 'Banglamotor', 1, '2021-01-20 17:29:08', '2021-01-20 17:29:08'),
(786, 1, 'Paribag', 1, '2021-01-20 17:29:20', '2021-01-20 17:29:20'),
(787, 1, 'Bakshibazar', 1, '2021-01-20 17:29:31', '2021-01-20 17:29:31'),
(788, 1, 'Kathalbagan', 1, '2021-01-20 17:30:02', '2021-01-20 17:30:02'),
(789, 1, 'Malibagh Taltola', 1, '2021-01-20 17:30:14', '2021-01-20 17:30:14'),
(790, 1, 'Central Road', 1, '2021-01-20 17:30:25', '2021-01-20 17:30:25'),
(791, 1, 'Sabujbag', 1, '2021-01-20 17:30:38', '2021-01-20 17:30:38'),
(792, 1, 'Shiddheswari', 1, '2021-01-20 17:30:52', '2021-01-20 17:30:52'),
(793, 1, 'Shegunbagicha', 1, '2021-01-20 17:31:49', '2021-01-20 17:31:49'),
(794, 1, 'Babubazar', 1, '2021-01-20 17:32:09', '2021-01-20 17:32:09'),
(795, 1, 'Islampur(Dhaka)', 1, '2021-01-20 17:32:21', '2021-01-20 17:32:21'),
(796, 1, 'Imamgonj', 1, '2021-01-20 17:32:36', '2021-01-20 17:32:36'),
(797, 1, 'Nayabazar', 1, '2021-01-20 17:32:48', '2021-01-20 17:32:48'),
(798, 1, 'Zigatola', 1, '2021-01-20 17:33:01', '2021-01-20 17:33:01'),
(799, 1, 'Kalshi', 1, '2021-01-20 17:33:26', '2021-01-20 17:33:26'),
(800, 1, 'Dholaipar', 1, '2021-01-20 17:34:00', '2021-01-20 17:34:00'),
(801, 1, 'Monipuripara', 1, '2021-01-20 17:34:12', '2021-01-20 17:34:12'),
(802, 1, 'Bosila', 1, '2021-01-20 17:34:24', '2021-01-20 17:34:24'),
(803, 1, 'Shonir Akhra', 1, '2021-01-20 17:34:36', '2021-01-20 17:34:36'),
(804, 1, 'Bongshal', 1, '2021-01-20 17:34:59', '2021-01-20 17:34:59'),
(805, 1, 'Siddweswari', 1, '2021-01-20 17:35:11', '2021-01-20 17:35:11'),
(806, 1, 'Dokshingaon', 1, '2021-01-20 17:35:29', '2021-01-20 17:35:29'),
(807, 1, 'Joar Shahara', 1, '2021-01-20 17:35:40', '2021-01-20 17:35:40'),
(808, 1, 'Science Lab', 1, '2021-01-20 17:35:54', '2021-01-20 17:35:54'),
(809, 1, 'Sobhanbag', 1, '2021-01-20 17:36:07', '2021-01-20 17:36:07'),
(810, 1, 'ECB Chattar', 1, '2021-01-20 17:36:18', '2021-01-20 17:36:18'),
(811, 1, 'Armanitola', 1, '2021-01-20 17:36:36', '2021-01-20 17:36:36'),
(812, 1, 'Islambag', 1, '2021-01-20 17:36:48', '2021-01-20 17:36:48'),
(813, 1, 'Kamarpara', 1, '2021-01-20 17:37:02', '2021-01-20 17:37:02'),
(814, 1, 'Mitford', 1, '2021-01-20 17:37:13', '2021-01-20 17:37:13'),
(815, 1, 'Shakhari Bazar', 1, '2021-01-20 17:37:26', '2021-01-20 17:37:26'),
(816, 1, 'Katherpol', 1, '2021-01-20 17:37:38', '2021-01-20 17:37:38'),
(817, 1, 'Bangla Bazar', 1, '2021-01-20 17:38:20', '2021-01-20 17:38:20'),
(818, 1, 'Patuatuly', 1, '2021-01-20 17:38:32', '2021-01-20 17:38:32'),
(819, 1, 'Nandipara', 1, '2021-01-20 17:38:49', '2021-01-20 17:38:49'),
(820, 1, 'Nazira Bazar', 1, '2021-01-20 17:39:01', '2021-01-20 17:39:01'),
(821, 1, 'Gopibag', 1, '2021-01-20 17:39:21', '2021-01-20 17:39:21'),
(822, 1, 'Shwamibag', 1, '2021-01-20 17:39:35', '2021-01-20 17:39:35'),
(823, 1, 'Sadarghat (Dhaka)', 1, '2021-01-20 17:40:01', '2021-01-20 17:40:01'),
(824, 1, 'Kaltabazar', 1, '2021-01-20 17:40:13', '2021-01-20 17:40:13'),
(825, 1, 'Gandaria', 1, '2021-01-20 17:40:33', '2021-01-20 17:40:33'),
(826, 1, 'RayerBag', 1, '2021-01-20 17:40:45', '2021-01-20 17:40:45'),
(827, 1, 'Faridabad', 1, '2021-01-20 17:40:57', '2021-01-20 17:40:57'),
(828, 1, 'Matuail', 1, '2021-01-20 17:41:09', '2021-01-20 17:41:09'),
(829, 1, 'Donia', 1, '2021-01-20 17:41:19', '2021-01-20 17:41:19'),
(830, 1, 'Konapara', 1, '2021-01-20 17:41:40', '2021-01-20 17:41:40'),
(831, 1, 'Dhaka Uddyan', 1, '2021-01-20 17:41:55', '2021-01-20 17:41:55'),
(832, 1, 'Shekhertek', 1, '2021-01-20 17:42:07', '2021-01-20 17:42:07'),
(833, 1, 'CWH', 1, '2021-01-20 17:43:15', '2021-01-20 17:43:15'),
(834, 1, 'Mirpur Taltola', 1, '2021-01-20 17:43:28', '2021-01-20 17:43:28'),
(835, 1, 'Manda(Dhaka)', 1, '2021-01-20 17:44:03', '2021-01-20 17:44:03'),
(836, 1, 'Shahjahanpur (Dhaka)', 1, '2021-01-20 17:44:31', '2021-01-20 17:44:31'),
(837, 1, 'Haterrjheel', 1, '2021-01-20 17:44:43', '2021-01-20 17:44:43'),
(838, 1, 'Dhaka uddan', 1, '2021-01-20 17:44:54', '2021-01-20 17:44:54'),
(839, 1, 'Chad Uddan', 1, '2021-01-20 17:45:08', '2021-01-20 17:45:08'),
(840, 1, 'Mohammadia Housing', 1, '2021-01-20 17:45:23', '2021-01-20 17:45:23'),
(841, 1, 'Ring Road', 1, '2021-01-20 17:48:31', '2021-01-20 17:48:31'),
(842, 1, 'Tajmahal Road', 1, '2021-01-20 17:48:46', '2021-01-20 17:48:46'),
(843, 1, 'Nurjahan Road', 1, '2021-01-20 17:49:42', '2021-01-20 17:49:42'),
(844, 1, 'Rajia Sultana Road', 1, '2021-01-20 17:49:52', '2021-01-20 17:49:52'),
(845, 1, 'Goaltek', 1, '2021-01-20 17:50:36', '2021-01-20 17:50:36'),
(846, 1, 'Chalabon', 1, '2021-01-20 17:50:47', '2021-01-20 17:50:47'),
(847, 1, 'Azampur (East)', 1, '2021-01-20 17:51:06', '2021-01-20 17:51:06'),
(848, 1, 'Nalbhog', 1, '2021-01-20 17:51:17', '2021-01-20 17:51:17'),
(849, 1, 'Azampur (West)', 1, '2021-01-20 17:51:30', '2021-01-20 17:51:30'),
(850, 1, 'Phulbaria', 1, '2021-01-20 17:51:41', '2021-01-20 17:51:41'),
(851, 1, 'Bhatuliya', 1, '2021-01-20 17:51:59', '2021-01-20 17:51:59'),
(852, 1, 'Bamnartek', 1, '2021-01-20 17:52:11', '2021-01-20 17:52:11'),
(853, 1, 'Turag', 1, '2021-01-20 17:52:25', '2021-01-20 17:52:25'),
(854, 1, 'Kallanpur', 1, '2021-01-20 17:52:35', '2021-01-20 17:52:35'),
(855, 1, 'Lalkuthi', 1, '2021-01-20 17:52:47', '2021-01-20 17:52:47'),
(856, 1, 'Tolarbag', 1, '2021-01-20 17:53:00', '2021-01-20 17:53:00'),
(857, 1, 'Paikpara', 1, '2021-01-20 17:53:35', '2021-01-20 17:53:35'),
(858, 1, 'Pirerbag', 1, '2021-01-20 17:53:45', '2021-01-20 17:53:45'),
(859, 1, 'Taltola', 1, '2021-01-20 17:54:26', '2021-01-20 17:54:26'),
(860, 1, 'MES Colony', 1, '2021-01-20 17:54:38', '2021-01-20 17:54:38'),
(861, 1, 'Zia Colony', 1, '2021-01-20 17:54:49', '2021-01-20 17:54:49'),
(862, 1, 'Ajiz Market', 1, '2021-01-20 17:55:16', '2021-01-20 17:55:16'),
(863, 1, 'Aga Nagar', 1, '2021-01-20 17:55:28', '2021-01-20 17:55:28'),
(864, 1, 'Kunipara', 1, '2021-01-20 17:55:40', '2021-01-20 17:55:40'),
(865, 1, 'Babli Masjid', 1, '2021-01-20 17:55:54', '2021-01-20 17:55:54'),
(866, 1, 'Kaderabad Housing', 1, '2021-01-20 17:56:06', '2021-01-20 17:56:06'),
(867, 1, 'Boro Bari', 1, '2021-01-20 17:56:24', '2021-01-20 17:56:24'),
(868, 1, 'Board Bazar', 1, '2021-01-20 17:56:37', '2021-01-20 17:56:37'),
(869, 1, 'Kamarjuri', 1, '2021-01-20 17:56:52', '2021-01-20 17:56:52'),
(870, 1, 'Dattapara', 1, '2021-01-20 17:57:05', '2021-01-20 17:57:05'),
(871, 1, 'Ershadnagar', 1, '2021-01-20 17:57:19', '2021-01-20 17:57:19'),
(872, 1, 'Sataish', 1, '2021-01-20 17:57:32', '2021-01-20 17:57:32'),
(873, 1, 'Nurer Chala', 1, '2021-01-20 17:58:01', '2021-01-20 17:58:01'),
(874, 1, 'Bawaila Para', 1, '2021-01-20 17:58:13', '2021-01-20 17:58:13'),
(875, 1, 'Satarkul', 1, '2021-01-20 17:58:25', '2021-01-20 17:58:25'),
(876, 1, 'Khilbar Tek', 1, '2021-01-20 17:58:38', '2021-01-20 17:58:38'),
(877, 1, 'Buddho Mondir', 1, '2021-01-20 17:58:51', '2021-01-20 17:58:51'),
(878, 1, 'Sipahibag', 1, '2021-01-20 17:59:03', '2021-01-20 17:59:03'),
(879, 1, 'Eastern Housing', 1, '2021-01-20 17:59:24', '2021-01-20 17:59:24'),
(880, 1, 'Teskunipara', 1, '2021-01-20 17:59:37', '2021-01-20 17:59:37'),
(881, 1, 'DHAKA TENARI MORE', 1, '2021-01-20 17:59:50', '2021-01-20 17:59:50'),
(882, 1, 'Shahidnagar', 1, '2021-01-20 18:00:03', '2021-01-20 18:00:03'),
(883, 1, 'Jhigatola', 1, '2021-01-20 18:00:19', '2021-01-20 18:00:19'),
(884, 1, 'Polashi', 1, '2021-01-20 18:00:31', '2021-01-20 18:00:31'),
(885, 1, 'Satmoshjid Road', 1, '2021-01-20 18:00:44', '2021-01-20 18:00:44'),
(886, 1, 'Shukrabad', 1, '2021-01-20 18:01:58', '2021-01-20 18:01:58'),
(887, 1, 'BNP Bazar', 1, '2021-01-20 18:02:18', '2021-01-20 18:02:18'),
(888, 1, 'Kalachandpur', 1, '2021-01-20 18:03:10', '2021-01-20 18:03:10'),
(889, 1, 'Jogonnathpur', 1, '2021-01-20 18:03:53', '2021-01-20 18:03:53'),
(890, 1, 'Kuratuli', 1, '2021-01-20 18:04:30', '2021-01-20 18:04:30'),
(891, 1, 'Alatunnessa School Road', 1, '2021-01-20 18:04:46', '2021-01-20 18:04:46'),
(892, 1, 'Purbo Rampura', 1, '2021-01-20 18:04:58', '2021-01-20 18:04:58'),
(893, 1, 'Bou Bazar', 1, '2021-01-20 18:05:41', '2021-01-20 18:05:41'),
(894, 1, 'Chairman Goli', 1, '2021-01-20 18:05:54', '2021-01-20 18:05:54'),
(895, 2, 'Confidence Tower, Jhilpar', 1, '2021-01-20 18:06:09', '2021-01-20 18:06:09'),
(896, 1, 'Fuji Trade Center', 1, '2021-01-20 18:06:22', '2021-01-20 18:06:22'),
(897, 1, 'Khil Barirtek', 1, '2021-01-20 18:06:36', '2021-01-20 18:06:36'),
(898, 1, 'Korail', 1, '2021-01-20 18:06:48', '2021-01-20 18:06:48'),
(899, 1, 'Mahanogor', 1, '2021-01-20 18:07:10', '2021-01-20 18:07:10'),
(900, 1, 'Nimtola', 1, '2021-01-20 18:07:34', '2021-01-20 18:07:34'),
(901, 1, 'Nurerchala', 1, '2021-01-20 18:07:46', '2021-01-20 18:07:46'),
(902, 1, 'Pastola Bazar', 1, '2021-01-20 18:07:58', '2021-01-20 18:07:58'),
(903, 1, 'Poschim Badda', 1, '2021-01-20 18:08:13', '2021-01-20 18:08:13'),
(904, 1, 'Purbo Badda', 1, '2021-01-20 18:08:26', '2021-01-20 18:08:26'),
(905, 1, 'Sat-tola Bazar', 1, '2021-01-20 18:08:37', '2021-01-20 18:08:37'),
(906, 1, 'Shaheenbagh', 1, '2021-01-20 18:08:55', '2021-01-20 18:08:55'),
(907, 1, 'Subastu', 1, '2021-01-20 18:09:06', '2021-01-20 18:09:06'),
(908, 1, 'Satrasta', 1, '2021-01-20 18:09:21', '2021-01-20 18:09:21'),
(909, 1, 'Tekpara Adorsonagor', 1, '2021-01-20 18:09:31', '2021-01-20 18:09:31'),
(910, 1, 'Uttar Badda', 1, '2021-01-20 18:09:42', '2021-01-20 18:09:42'),
(911, 1, 'Wireless', 1, '2021-01-20 18:09:53', '2021-01-20 18:09:53'),
(912, 1, 'Solmaid', 1, '2021-01-20 18:10:05', '2021-01-20 18:10:05'),
(913, 1, '300 Feet', 1, '2021-01-20 18:10:18', '2021-01-20 18:10:18'),
(914, 1, 'Mirhazirbagh', 1, '2021-01-20 18:10:29', '2021-01-20 18:10:29'),
(915, 1, 'Mahut Tuli', 1, '2021-01-20 18:10:39', '2021-01-20 18:10:39'),
(916, 1, 'Alubazar', 1, '2021-01-20 18:10:50', '2021-01-20 18:10:50'),
(917, 1, 'Badam Toli', 1, '2021-01-20 18:11:00', '2021-01-20 18:11:00'),
(918, 1, 'Chamelibag', 1, '2021-01-20 18:11:12', '2021-01-20 18:11:12'),
(919, 1, 'Dholaikhal', 1, '2021-01-20 18:11:24', '2021-01-20 18:11:24'),
(920, 1, 'Doyagonj', 1, '2021-01-20 18:11:32', '2021-01-20 18:11:32'),
(921, 1, 'Farashgong', 1, '2021-01-20 18:11:48', '2021-01-20 18:11:48'),
(922, 1, 'Dholpur', 1, '2021-01-20 18:11:59', '2021-01-20 18:11:59'),
(923, 1, 'Kodomtoli', 1, '2021-01-20 18:12:08', '2021-01-20 18:12:08'),
(924, 1, 'Kotwali (Puran Dhaka)', 1, '2021-01-20 18:12:19', '2021-01-20 18:12:19'),
(925, 1, 'Railway Colony', 1, '2021-01-20 18:12:29', '2021-01-20 18:12:29'),
(926, 1, 'Rajar Dewri', 1, '2021-01-20 18:12:42', '2021-01-20 18:12:42'),
(927, 1, 'Sat rowja', 1, '2021-01-20 18:13:08', '2021-01-20 18:13:08'),
(928, 1, 'Tantibazar', 1, '2021-01-20 18:13:20', '2021-01-20 18:13:20'),
(929, 1, 'Rosulbagh', 1, '2021-01-20 18:13:31', '2021-01-20 18:13:31'),
(930, 1, 'College Gatev', 1, '2021-01-20 18:13:51', '2021-01-20 18:13:51'),
(931, 1, 'Badekomelosshor', 1, '2021-01-20 18:14:04', '2021-01-20 18:14:04'),
(932, 1, 'Rail Station', 1, '2021-01-20 18:14:26', '2021-01-20 18:14:26'),
(933, 1, 'Uttarkhan Mazar', 1, '2021-01-20 18:14:36', '2021-01-20 18:14:36'),
(934, 1, 'Dakshinkhan Bazar', 1, '2021-01-20 18:15:10', '2021-01-20 18:15:10'),
(935, 1, 'Ranavola', 1, '2021-01-20 18:15:43', '2021-01-20 18:15:43'),
(936, 1, 'Joynal Market', 1, '2021-01-20 18:15:55', '2021-01-20 18:15:55'),
(937, 1, 'Johura Market', 1, '2021-01-20 18:16:06', '2021-01-20 18:16:06'),
(938, 1, 'Habib Market', 1, '2021-01-20 18:16:17', '2021-01-20 18:16:17'),
(939, 1, 'BDR Market-House Building', 1, '2021-01-20 18:16:32', '2021-01-20 18:16:32'),
(940, 1, 'BDR Market-Sector 6', 1, '2021-01-20 18:16:44', '2021-01-20 18:16:44'),
(941, 1, 'Moinartek', 1, '2021-01-20 18:16:56', '2021-01-20 18:16:56'),
(942, 1, 'Atipara', 1, '2021-01-20 18:18:16', '2021-01-20 18:18:16'),
(943, 1, 'Kot Bari', 1, '2021-01-20 18:18:34', '2021-01-20 18:18:34'),
(944, 1, 'Abdullahpur', 1, '2021-01-20 18:18:44', '2021-01-20 18:18:44'),
(945, 1, 'Mollartek', 1, '2021-01-20 18:19:02', '2021-01-20 18:19:02'),
(946, 1, 'Gawair', 1, '2021-01-20 18:19:17', '2021-01-20 18:19:17'),
(947, 1, 'Kosaibari', 1, '2021-01-20 18:19:28', '2021-01-20 18:19:28'),
(948, 1, 'Prembagan', 1, '2021-01-20 18:19:40', '2021-01-20 18:19:40'),
(949, 1, 'Kachkura', 1, '2021-01-20 18:19:52', '2021-01-20 18:19:52'),
(950, 1, 'Helal Market', 1, '2021-01-20 18:20:08', '2021-01-20 18:20:08'),
(951, 1, 'Masterpara', 1, '2021-01-20 18:20:23', '2021-01-20 18:20:23'),
(952, 1, 'Munda', 1, '2021-01-20 18:20:34', '2021-01-20 18:20:34'),
(953, 1, 'Namapara-Khilkhet', 1, '2021-01-20 18:20:49', '2021-01-20 18:20:49'),
(954, 1, 'Ahalia-Uttara', 1, '2021-01-20 18:21:01', '2021-01-20 18:21:01'),
(955, 1, 'Ainusbag-Uttara', 1, '2021-01-20 18:21:13', '2021-01-20 18:21:13'),
(956, 1, 'Diabari', 1, '2021-01-20 18:21:25', '2021-01-20 18:21:25'),
(957, 1, 'Habib Market-Uttara', 1, '2021-01-20 18:25:29', '2021-01-20 18:25:29'),
(958, 1, 'Pakuria-Uttara', 1, '2021-01-20 18:26:09', '2021-01-20 18:26:09'),
(959, 1, 'Aftab Nagar', 1, '2021-01-20 18:27:29', '2021-01-20 18:27:29'),
(960, 1, 'Gulbagh', 1, '2021-01-20 18:27:40', '2021-01-20 18:27:40'),
(961, 1, 'Meradiya Bazar', 1, '2021-01-20 18:27:51', '2021-01-20 18:27:51'),
(962, 1, 'Mirbagh', 1, '2021-01-20 18:28:03', '2021-01-20 18:28:03'),
(963, 1, 'Modhubagh', 1, '2021-01-20 18:28:20', '2021-01-20 18:28:20'),
(964, 1, 'Rampura TV center', 1, '2021-01-20 18:28:30', '2021-01-20 18:28:30'),
(965, 1, 'TV gate', 1, '2021-01-20 18:28:48', '2021-01-20 18:28:48'),
(966, 1, 'Ulan road', 1, '2021-01-20 18:28:56', '2021-01-20 18:28:56'),
(967, 1, 'Gudaraghat-Mirpur', 1, '2021-01-20 18:29:08', '2021-01-20 18:29:08'),
(968, 1, 'Namapara-Mirpur', 1, '2021-01-20 18:29:20', '2021-01-20 18:29:20'),
(969, 1, 'Technical', 1, '2021-01-20 18:29:44', '2021-01-20 18:29:44'),
(970, 1, 'Beribadh-Mirpur', 1, '2021-01-20 18:30:02', '2021-01-20 18:30:02'),
(971, 1, 'Buddhijibi Road', 1, '2021-01-20 18:30:13', '2021-01-20 18:30:13'),
(972, 1, 'Rupnagor', 1, '2021-01-20 18:30:37', '2021-01-20 18:30:37'),
(973, 66, 'Savar Cantonment', 1, '2021-01-21 19:56:28', '2021-01-21 19:56:28'),
(974, 66, 'Kalatia', 1, '2021-01-21 19:56:47', '2021-01-21 19:56:47'),
(975, 66, 'Kathuria', 1, '2021-01-21 19:57:15', '2021-01-21 19:57:15'),
(976, 66, 'Goljarbag', 1, '2021-01-21 19:57:30', '2021-01-21 19:57:30'),
(977, 66, 'Nazirabag', 1, '2021-01-21 19:57:45', '2021-01-21 19:57:45'),
(978, 66, 'Nazarganj', 1, '2021-01-21 19:58:09', '2021-01-21 19:58:09'),
(979, 66, 'Zinzira', 1, '2021-01-21 19:58:26', '2021-01-21 19:58:26'),
(980, 66, 'Auchpara', 1, '2021-01-21 19:58:40', '2021-01-21 19:58:40'),
(981, 66, 'Cherag Ali', 1, '2021-01-21 19:58:54', '2021-01-21 19:58:54'),
(982, 66, 'Hasnabad', 1, '2021-01-21 19:59:48', '2021-01-21 19:59:48'),
(983, 66, 'Signboard', 1, '2021-01-21 20:00:01', '2021-01-21 20:00:01'),
(984, 65, 'Bondor (Chittagong)', 1, '2021-01-21 20:05:12', '2021-01-21 20:08:42'),
(985, 14, 'Chagalnaiya', 1, '2021-01-23 18:29:56', '2021-01-23 18:29:56'),
(986, 35, 'Terokhada', 1, '2021-01-24 15:08:26', '2021-01-24 15:08:26'),
(987, 35, 'Khulna sadar', 1, '2021-01-24 15:13:11', '2021-01-24 15:13:11'),
(988, 17, 'Daganbhuiya', 1, '2021-01-24 20:27:02', '2021-01-24 20:27:02'),
(989, 11, 'Kornelhat', 1, '2021-01-31 22:15:34', '2021-01-31 22:15:34'),
(990, 43, 'Sadar', 1, '2021-02-02 20:11:12', '2021-02-02 20:11:12');

-- --------------------------------------------------------

--
-- Table structure for table `sub_sub_categories`
--

CREATE TABLE `sub_sub_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `discount_type` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `type` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `company_name`, `phone`, `address`, `status`, `type`, `created_at`, `updated_at`) VALUES
(1, 'NM Clothing', 'NM limited', '01737481778', 'Dhaka', 1, 1, '2021-06-24 10:24:02', '2021-06-24 10:24:02'),
(3, 'SA Fabrics LImited', 'SA Fabrics LImited', '01759416979', 'Mirpur-10', 1, 2, '2021-06-24 10:30:26', '2021-06-24 10:30:26');

-- --------------------------------------------------------

--
-- Table structure for table `supplier_payments`
--

CREATE TABLE `supplier_payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `paid_by` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `supplier_payments`
--

INSERT INTO `supplier_payments` (`id`, `supplier_id`, `amount`, `paid_by`, `date`, `created_at`, `updated_at`) VALUES
(1, 1, 1700, 'Bkash(personal)', '2021-06-24', '2021-06-24 11:14:46', '2021-06-24 11:14:46'),
(2, 3, 800, 'Cash', '2021-06-24', '2021-06-24 11:23:44', '2021-06-24 11:23:44'),
(3, 3, 200, 'Cash(due paid)', '2021-06-24', '2021-06-24 11:39:08', '2021-06-24 11:39:08'),
(4, 1, 1000, 'Cash(first bill paid from debit)', '2021-06-24', '2021-06-24 11:59:03', '2021-06-24 11:59:03');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile_no` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mobile_no`, `email`, `email_verified_at`, `password`, `address`, `city_id`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Md Bacchu', '01738137213', NULL, NULL, '$2y$10$gVYrKjaa5nD5yiccJ74/4./jexsT39N6ib06w5YC17abNxKv1ZZ12', 'mohammadpur', 1, 1, NULL, '2020-09-22 14:21:15', '2020-09-22 14:21:49'),
(2, 'Fahim', '01795297424', NULL, NULL, '$2y$10$/g2vU0MJoByNDLTBW.EZPuPs745uSyEIKoOcFjrK/VRptUWmYrj7S', 'Dhaka', 5, 1, NULL, '2020-09-22 17:23:50', '2021-04-27 17:55:35'),
(3, 'A.H.Rashed', '01736667222', 'ahrashed88@gmail.com', NULL, '$2y$10$7lMC5CA6YV7eNjWKgR47FellNgInHPvMdSlp6tHX1z6NqAh2RPXj.', 'Mirpur', 1, 1, NULL, '2020-09-23 09:17:16', '2020-09-23 09:18:10'),
(4, 'hmshahadat1994@gmai.com', '01732199992', NULL, NULL, '$2y$10$wb.Yw7mk6rvoTNFmkQ6V4e9OAcG1ld8T3IBA4NiAx/c8aZLZeerqG', 'H-36, R-06, Benaroshipoll, Mirpur-10. Dhaka', 1, 1, NULL, '2020-09-23 14:09:22', '2020-09-23 14:11:57'),
(5, 'Murad', '01839169179', NULL, NULL, '$2y$10$TW788jMDYpVGIKxxOualc.mlHyIr//Wo7s8XDgkiH6vdOZXXEC8La', NULL, NULL, 1, NULL, '2020-09-26 22:18:14', '2020-09-26 22:18:14'),
(6, 'Safin Ahmed', '01630567512', NULL, NULL, '$2y$10$6FE8KwV3lQr8TSxHX1Rtv.zQPL5GFEYVdZ46EemAjhGNMJh5H8JGm', NULL, NULL, 1, NULL, '2020-10-19 08:28:24', '2020-10-19 08:28:24'),
(7, 'murad', '01799221469', NULL, NULL, '$2y$10$N5E3viAqiVYsTBqiA8TopeVAlIOHQaqKtnIioM4FobzEi.FCch8qG', NULL, NULL, 1, NULL, '2020-10-28 17:57:58', '2020-10-28 17:57:58'),
(8, 'Rejaul Karim Hira', '01619876141', NULL, NULL, '$2y$10$ZT3P1pADe52/7Zf0E4o/yuMx6quFiyTy9Z9vm9BIuyZS1SHU1.GzO', NULL, NULL, 1, NULL, '2020-10-28 17:58:37', '2020-10-28 17:58:37'),
(9, 'Nurul Amin', '01965612080', NULL, NULL, '$2y$10$xdSzaqon5dXfveKio.mSN.rJjP/6GI1FRMECEDZm8suYpXVQt6VCG', NULL, NULL, 1, NULL, '2020-11-09 11:34:13', '2020-11-09 11:34:13'),
(10, 'Rohimuddin binta kadija', '01501701801', 'kaolimuddi@gmail.com', NULL, '$2y$10$e299DeFt8uJRBo9uETIwre9NTOwR.jDf5/.vufF4kmEBIrlMmz5um', '287895/34974398568, narkeltola koloni , Dhaka -900000', 1, 1, NULL, '2020-11-14 11:08:13', '2020-11-14 11:12:24'),
(11, 'Insiya', '01609740664', NULL, NULL, '$2y$10$TfkKu39efmZVt6NY72I7K.y9KLEATmEcrNryx6UPCmANf7QSyELS6', NULL, NULL, 1, NULL, '2020-11-19 14:44:13', '2020-11-19 14:44:13'),
(12, 'Shamim Ahmed', '01751689627', NULL, NULL, '$2y$10$uKrNvSowGFQDyexFspVIMeIEPub8vZu7QozvOaJksgc7I3wZJzyRu', NULL, NULL, 1, NULL, '2020-11-20 19:05:18', '2020-11-20 19:05:18'),
(13, 'nizamshemul', '01644219855', 'nizamshemul2011@gmail.com', NULL, '$2y$10$c3kSs5X18FOBYAYbO3ad9uAVGGD2y5IoivUZfPNDuqYZglZSpllzS', '32 new market', 14, 1, NULL, '2020-11-21 14:57:51', '2020-11-21 15:05:07'),
(14, 'Alamin', '01843520982', NULL, NULL, '$2y$10$ZIBkGlFdMC.QXGiZek6t6.nipY7IqJ6AB1JOuBUlksg.bsMuuSVPq', NULL, NULL, 1, NULL, '2020-12-24 22:26:16', '2020-12-24 22:26:16'),
(15, 'Anayat', '01837370048', 'mdaythp@gmail.com', NULL, '$2y$10$QOPqCfany2qf9M.5snEZH.LCc9vVjmTCeeYnoLQHzN4fNWTntC5pS', 'Mirpur 10', 7, 1, NULL, '2020-12-26 15:13:23', '2021-03-09 18:13:43'),
(16, 'Johirul islam', '01401736536', NULL, NULL, '$2y$10$PpofEhRo.d.znlkBCUEBMOa3CBiy8Zuqh3qTyp2Z5vu0r3OpTae1m', NULL, NULL, 1, NULL, '2020-12-30 20:23:32', '2020-12-30 20:23:32'),
(17, 'Fahim', '01770280894', NULL, NULL, '$2y$10$IxCGi7gmgNkmFi0/CK2PFOdK2MZfMB1WoV0g6j.ZhcU7YkTwJ77Eq', 'Dhaka', 1, 1, NULL, '2021-02-16 05:38:49', '2021-02-16 05:40:03'),
(18, 'Fahim Munta', '01770280891', NULL, NULL, '$2y$10$RL08NBK2l8S6geIKJsyvD.he7rPGlzcyDypw7TiOQbRD9VdwVOrEi', 'Test Order', 1, 1, NULL, '2021-02-16 14:42:56', '2021-02-16 14:44:01'),
(19, 'shibbir ahmad', '01759416979', NULL, NULL, '$2y$10$ZQbIY0iH6NJBGzuhghEzxOVyP/dbIcJ74jrI9Goh6LNFToVY6lSJm', 'Benarosi Polli,Mirpur-10', 1, 1, NULL, '2021-02-27 16:21:50', '2021-07-07 10:46:23'),
(20, 'Aminul haq joy', '01852553253', NULL, NULL, '$2y$10$uid6tzWG9k.THtv9teGf3.Ljpbb1G1.8Gu43dzBB9627kiNF4s/.G', NULL, NULL, 1, NULL, '2021-02-28 17:16:50', '2021-02-28 17:16:50'),
(21, 'Abdur rahman', '01889999970', NULL, NULL, '$2y$10$BPOw5JEwYVOG7tcbdypcoei6JyGZ/DWFMVpuRo/8IUx4Fyzt.S8x6', 'demra.dhaka', 1, 1, NULL, '2021-03-02 00:59:44', '2021-03-02 01:01:42'),
(22, 'Tipu sultan', '01971172257', NULL, NULL, '$2y$10$ThSaXQodki3YNkUKkC6fVe2oaan4wPQTJd9qxr4RnyJaxoxKL9QZy', NULL, NULL, 1, NULL, '2021-03-04 16:04:01', '2021-03-04 16:04:01'),
(23, 'Md parvej', '01725127701', NULL, NULL, '$2y$10$1VIkifbeJBpjYBk2HCy/2OLKD5O9ue/GhCpaIILB7oET4H33e4Nee', 'Mirpur-10 benarosi polli', 1, 1, NULL, '2021-03-07 18:21:28', '2021-03-07 18:25:54'),
(24, 'Abdullah', '01713579880', NULL, NULL, '$2y$10$KmXPb.7ozFXZBava/aJFk.u/4pwcvILmP12LtsSuYDSLBiMNYviNS', NULL, NULL, 1, NULL, '2021-03-07 21:14:59', '2021-03-07 21:14:59'),
(25, 'Mahfuz Tuhin', '01737078433', NULL, NULL, '$2y$10$5tJmevInHXENlbxAqJjTRuO33b/FW2EZpu7j7XtXc/hnj183mGcOi', NULL, NULL, 1, NULL, '2021-03-10 01:38:56', '2021-03-10 01:38:56'),
(26, 'Dipok Das', '01760364088', NULL, NULL, '$2y$10$jUgPDMOJDLnheTAQHSZOb.6MibTzUQv5pzuepwMgcg0MvyDROU50m', NULL, NULL, 1, NULL, '2021-03-17 04:05:35', '2021-03-17 04:05:35'),
(27, 'tanvir', '01618206020', NULL, NULL, '$2y$10$ZpxdbNrTGeHRR.lvT0Ewle0csG4KreBABlA3qW312hGCsUQv9HR.2', 'HOUSE- 01, ROAD- 10, BLOCK- A,, BENAROSHI POLLI, DHAKA.', 1, 1, NULL, '2021-03-20 15:07:34', '2021-03-20 15:08:04'),
(28, 'MilonShohrab', '01720410980', NULL, NULL, '$2y$10$0X6KU6Y7WxHGtlgRHXtSxurx209tF6qNDP5J4olT6ERd1S1eif3La', NULL, NULL, 1, NULL, '2021-03-21 02:44:41', '2021-03-21 02:44:41'),
(29, 'Saikat saha', '01778989824', NULL, NULL, '$2y$10$.MXnXMCS/epmo7Ut4dXlzOJsw26AsBiLqWt8nSoHeY5zFl8.pYl7G', NULL, NULL, 1, NULL, '2021-03-21 14:30:07', '2021-03-21 14:30:07'),
(30, 'nurulamin549@yshoo.com', '01713532549', NULL, NULL, '$2y$10$ddWkHR4yKKKZ.DSb.SNrq.YQNidnAIbXMZnX83fYZAiQtWDLi.lym', 'M/s Foysal Enterprise , Delear Quality feeds limited, Busstand,Dhaka-Mymensingh Highway, Trishal, Mymensingh (Near Hotel Shajalal)', 42, 1, NULL, '2021-03-30 06:08:57', '2021-03-30 06:42:47'),
(31, 'Md. Mashekul Islam', '01936116653', NULL, NULL, '$2y$10$aGYuMblvoELO/mlcnv951ebiN8NI4uBYK7drFxYkO1J8MfKID0ofq', NULL, NULL, 1, NULL, '2021-04-02 03:07:59', '2021-04-02 03:07:59'),
(32, 'Arif', '01675544259', NULL, NULL, '$2y$10$/o/2SAIpVHSvFu1kQB4qIeqpDfK6G2DQ8REqRvrxakP74TYph5dNO', NULL, NULL, 1, NULL, '2021-04-08 13:22:50', '2021-04-08 13:22:50'),
(33, 'khanokahmed@gmail.com', '01720069800', NULL, NULL, '$2y$10$Vn5c69myQ0Bc23oUebeukuIokNoyQHphxZp87IbgMwHBn/Anu.BNG', NULL, NULL, 1, NULL, '2021-04-08 18:26:00', '2021-04-08 18:26:00'),
(34, 'Fahad Niloy', '01629010080', NULL, NULL, '$2y$10$YE.D8Spb/MR6LH03wgHolOd45lM6R1NlIcjm6PBDG73kHUxxHM/bm', NULL, NULL, 1, NULL, '2021-04-09 15:58:50', '2021-04-09 15:58:50'),
(35, 'Snigdha Afroz', '01703813077', NULL, NULL, '$2y$10$Iun.EMSv8B3ymyMXbXvaSuabTSb5632IVht9b9U9Ptm17kW6vKZIa', NULL, NULL, 1, NULL, '2021-04-10 03:44:07', '2021-04-10 03:44:07'),
(36, 's r sumon', '01934446669', NULL, NULL, '$2y$10$KiYnpBHrY8qLwt28KZLkF.pcv2dt9mPyLwm6B6387cypPeJ2QCSMi', 'HOUSE- 02, ROAD- 11, BLOCK- A,\nBENAROSHI POLLI, DHAKA.', 16, 1, NULL, '2021-04-17 16:48:48', '2021-04-17 19:11:25'),
(37, 'Nesar', '01677689098', NULL, NULL, '$2y$10$fypBvyRqLSt0YZ.AyFYMduoTsbbrgQKxZae0j1FxNgtB7J4YM/YV2', NULL, NULL, 1, NULL, '2021-04-19 08:50:00', '2021-04-19 08:50:00'),
(38, 'Ek Rayhan', '01957075272', NULL, NULL, '$2y$10$v18EzcQlYRA79WOAUVyZ6unBg.uk0KT1cHk7s6QmhlJNWwNuelt2O', NULL, NULL, 1, NULL, '2021-04-22 00:24:01', '2021-04-22 00:24:01'),
(39, 'Muktar Hossen', '01521215877', NULL, NULL, '$2y$10$IX.kusBSHieJpPApGC4UIuVtUHM2Vqesx60hmBwzBRRySUDm61KE6', NULL, NULL, 1, NULL, '2021-04-26 17:42:38', '2021-04-26 17:42:38'),
(40, 'Aktaruzzaman', '01738317381', NULL, NULL, '$2y$10$FDoSE3s6CQYrPNJyMTaY8udXocmTAapUZqmNSj5KwdRDuEevP6jzi', NULL, NULL, 1, NULL, '2021-04-29 11:06:56', '2021-04-29 11:06:56'),
(41, 'zaber mahbu', '01531714359', NULL, NULL, '$2y$10$bG/jj2gmk.GGNhPqivDMZuE52ieAu9WVjpFV.9FMknaVdoafcJNFK', '58/cha, west raza bazar, farmgate behind square hospital', 1, 1, NULL, '2021-05-02 00:09:11', '2021-05-02 00:09:50'),
(42, 'Rayhan', '01638665076', NULL, NULL, '$2y$10$S0G5Cqr1MZUrhvAXfR7oCe3Vkd/dSJIfsHQEM6JtWg96oOHCAJKhe', NULL, NULL, 1, NULL, '2021-05-04 04:24:48', '2021-05-04 04:24:48'),
(43, 'mamun', '01841084111', NULL, NULL, '$2y$10$5B.ggZOSQeePjp088FX8LO.D.86q7v1ypyvZz6i2y4FsUUjkuwwUS', 'Mirpur-2 post office', 1, 1, NULL, '2021-05-22 21:20:00', '2021-05-22 21:20:32'),
(44, 'Rasel', '01832202195', NULL, NULL, '$2y$10$lrKI.3e4JBNsodOWMaLWLuDyHS9a0gYuBE33d.KYllnKxzhRQ4CQy', NULL, NULL, 1, NULL, '2021-05-24 19:33:59', '2021-05-24 19:33:59'),
(45, 'md Zamal Hussain', '01866749629', NULL, NULL, '$2y$10$nzRYmHNTVxqdwvU4ST8XHeMmqVL3kK32oOIt1QGkJSG/cQr9BLR6G', NULL, NULL, 1, NULL, '2021-06-13 08:33:59', '2021-06-13 08:33:59'),
(46, 'md nasir uddin', '01722855057', NULL, NULL, '$2y$10$/oc6EtXeibD0HlBBhrDMrOWSYsjBpWTHIL0Oq.378q8k5LBnzM4S6', NULL, NULL, 1, NULL, '2021-06-17 23:35:15', '2021-06-17 23:35:15'),
(47, 'Isahaq', '01852376598', NULL, NULL, '$2y$10$qdgmyz87GgsRZG944rXl9.qqax6o2QRy8UW4fEU0NA5O3T1SGba3a', NULL, NULL, 1, NULL, '2021-06-19 02:48:57', '2021-06-19 02:48:57'),
(48, 'nazmul', '01635684979', NULL, NULL, '$2y$10$Ummy0WN4vUhP1emzSKGEluNB97mUngkd/sf1ogpQ3v6fYkucvbuRi', NULL, NULL, 1, NULL, '2021-06-21 03:33:04', '2021-06-21 03:33:04'),
(49, 'md shahadat hossain', '01828044000', NULL, NULL, '$2y$10$G5M/dX.3X/PzA/VPbZls7.ylrwmtqGTMATHZTx1ejVUtm0epW6ldO', NULL, NULL, 1, NULL, '2021-06-23 02:17:18', '2021-06-23 02:17:18'),
(50, 'Khairul islam khan', '01753023650', NULL, NULL, '$2y$10$DH49DDz0w83pe8A5GozjO.YTd3O6uyOMuI.R7I/u3.ctWZXjQVkMa', NULL, NULL, 1, NULL, '2021-06-24 06:47:03', '2021-06-24 06:47:03');

-- --------------------------------------------------------

--
-- Table structure for table `variants`
--

CREATE TABLE `variants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `attribute_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `variants`
--

INSERT INTO `variants` (`id`, `name`, `attribute_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'S', 1, 1, '2020-11-09 10:53:10', '2020-11-09 10:53:10'),
(2, 'L', 1, 1, '2020-11-09 10:53:21', '2020-11-09 10:53:21'),
(3, 'M', 1, 1, '2020-11-09 10:53:31', '2020-11-09 10:53:31'),
(4, 'XL', 1, 1, '2020-11-09 10:54:19', '2020-11-09 10:54:19'),
(5, 'XXL', 1, 1, '2020-11-09 10:54:26', '2020-11-09 10:54:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about_and_contacts`
--
ALTER TABLE `about_and_contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `account_purposes`
--
ALTER TABLE `account_purposes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `attributes_name_unique` (`name`);

--
-- Indexes for table `background_and_colors`
--
ALTER TABLE `background_and_colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `balances`
--
ALTER TABLE `balances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bill_paid_statements`
--
ALTER TABLE `bill_paid_statements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bill_per_months`
--
ALTER TABLE `bill_per_months`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bill_statements`
--
ALTER TABLE `bill_statements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carriers`
--
ALTER TABLE `carriers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_assets`
--
ALTER TABLE `company_assets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_sale_paids`
--
ALTER TABLE `company_sale_paids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cupons_code_unique` (`code`);

--
-- Indexes for table `couriers`
--
ALTER TABLE `couriers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `credits`
--
ALTER TABLE `credits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `credit_dues`
--
ALTER TABLE `credit_dues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_dues`
--
ALTER TABLE `customer_dues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_wallets`
--
ALTER TABLE `customer_wallets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `debits`
--
ALTER TABLE `debits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discount_memberships`
--
ALTER TABLE `discount_memberships`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee_salaries`
--
ALTER TABLE `employee_salaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `factories`
--
ALTER TABLE `factories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fond_transfers`
--
ALTER TABLE `fond_transfers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_settings`
--
ALTER TABLE `footer_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `found_transfers`
--
ALTER TABLE `found_transfers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general_settings`
--
ALTER TABLE `general_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investments`
--
ALTER TABLE `investments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investment_returns`
--
ALTER TABLE `investment_returns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investors`
--
ALTER TABLE `investors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `investor_profit_paids`
--
ALTER TABLE `investor_profit_paids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_applies`
--
ALTER TABLE `job_applies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loaners`
--
ALTER TABLE `loaners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loans`
--
ALTER TABLE `loans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loan_paids`
--
ALTER TABLE `loan_paids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `merchants`
--
ALTER TABLE `merchants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `company_name` (`company_name`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_barcodes`
--
ALTER TABLE `order_barcodes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_shipment_and_return_policies`
--
ALTER TABLE `order_shipment_and_return_policies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otp_verifications`
--
ALTER TABLE `otp_verifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `print_houses`
--
ALTER TABLE `print_houses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `print_house_payments`
--
ALTER TABLE `print_house_payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_attributes`
--
ALTER TABLE `product_attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_barcodes`
--
ALTER TABLE `product_barcodes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_for_prints`
--
ALTER TABLE `product_for_prints`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_transfers`
--
ALTER TABLE `product_transfers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_transfer_items`
--
ALTER TABLE `product_transfer_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_variants`
--
ALTER TABLE `product_variants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchaseitems`
--
ALTER TABLE `purchaseitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `receieve_printed_products`
--
ALTER TABLE `receieve_printed_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `resellers`
--
ALTER TABLE `resellers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reseller_models`
--
ALTER TABLE `reseller_models`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reseller_order_details`
--
ALTER TABLE `reseller_order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reseller_payments`
--
ALTER TABLE `reseller_payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `salary_per_months`
--
ALTER TABLE `salary_per_months`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sale_campaigns`
--
ALTER TABLE `sale_campaigns`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sale_items`
--
ALTER TABLE `sale_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `selling__offers`
--
ALTER TABLE `selling__offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showrooms`
--
ALTER TABLE `showrooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showroom_credits`
--
ALTER TABLE `showroom_credits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showroom_customer_dues`
--
ALTER TABLE `showroom_customer_dues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showroom_debits`
--
ALTER TABLE `showroom_debits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showroom_managers`
--
ALTER TABLE `showroom_managers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showroom_products`
--
ALTER TABLE `showroom_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showroom_sales`
--
ALTER TABLE `showroom_sales`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `showroom_sale_items`
--
ALTER TABLE `showroom_sale_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_cities`
--
ALTER TABLE `sub_cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_sub_categories`
--
ALTER TABLE `sub_sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `supplier_payments`
--
ALTER TABLE `supplier_payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about_and_contacts`
--
ALTER TABLE `about_and_contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `account_purposes`
--
ALTER TABLE `account_purposes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `background_and_colors`
--
ALTER TABLE `background_and_colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `balances`
--
ALTER TABLE `balances`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bill_paid_statements`
--
ALTER TABLE `bill_paid_statements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bill_per_months`
--
ALTER TABLE `bill_per_months`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bill_statements`
--
ALTER TABLE `bill_statements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carriers`
--
ALTER TABLE `carriers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `company_assets`
--
ALTER TABLE `company_assets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `company_sale_paids`
--
ALTER TABLE `company_sale_paids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `couriers`
--
ALTER TABLE `couriers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `credits`
--
ALTER TABLE `credits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `credit_dues`
--
ALTER TABLE `credit_dues`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=994;

--
-- AUTO_INCREMENT for table `customer_dues`
--
ALTER TABLE `customer_dues`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `customer_wallets`
--
ALTER TABLE `customer_wallets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `debits`
--
ALTER TABLE `debits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `discount_memberships`
--
ALTER TABLE `discount_memberships`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employee_salaries`
--
ALTER TABLE `employee_salaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `factories`
--
ALTER TABLE `factories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fond_transfers`
--
ALTER TABLE `fond_transfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `footer_settings`
--
ALTER TABLE `footer_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `found_transfers`
--
ALTER TABLE `found_transfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `general_settings`
--
ALTER TABLE `general_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `investments`
--
ALTER TABLE `investments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `investment_returns`
--
ALTER TABLE `investment_returns`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `investors`
--
ALTER TABLE `investors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `investor_profit_paids`
--
ALTER TABLE `investor_profit_paids`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `job_applies`
--
ALTER TABLE `job_applies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `loaners`
--
ALTER TABLE `loaners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `loans`
--
ALTER TABLE `loans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `loan_paids`
--
ALTER TABLE `loan_paids`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `merchants`
--
ALTER TABLE `merchants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `order_barcodes`
--
ALTER TABLE `order_barcodes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `order_shipment_and_return_policies`
--
ALTER TABLE `order_shipment_and_return_policies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `otp_verifications`
--
ALTER TABLE `otp_verifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `password_resets`
--
ALTER TABLE `password_resets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `print_houses`
--
ALTER TABLE `print_houses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `print_house_payments`
--
ALTER TABLE `print_house_payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `product_attributes`
--
ALTER TABLE `product_attributes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `product_barcodes`
--
ALTER TABLE `product_barcodes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `product_for_prints`
--
ALTER TABLE `product_for_prints`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `product_transfers`
--
ALTER TABLE `product_transfers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_transfer_items`
--
ALTER TABLE `product_transfer_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_variants`
--
ALTER TABLE `product_variants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=290;

--
-- AUTO_INCREMENT for table `purchaseitems`
--
ALTER TABLE `purchaseitems`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `receieve_printed_products`
--
ALTER TABLE `receieve_printed_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `resellers`
--
ALTER TABLE `resellers`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reseller_models`
--
ALTER TABLE `reseller_models`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reseller_order_details`
--
ALTER TABLE `reseller_order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reseller_payments`
--
ALTER TABLE `reseller_payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `salary_per_months`
--
ALTER TABLE `salary_per_months`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `sale_campaigns`
--
ALTER TABLE `sale_campaigns`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sale_items`
--
ALTER TABLE `sale_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `selling__offers`
--
ALTER TABLE `selling__offers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `showrooms`
--
ALTER TABLE `showrooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `showroom_credits`
--
ALTER TABLE `showroom_credits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `showroom_customer_dues`
--
ALTER TABLE `showroom_customer_dues`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `showroom_debits`
--
ALTER TABLE `showroom_debits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `showroom_managers`
--
ALTER TABLE `showroom_managers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `showroom_products`
--
ALTER TABLE `showroom_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `showroom_sales`
--
ALTER TABLE `showroom_sales`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `showroom_sale_items`
--
ALTER TABLE `showroom_sale_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `sub_cities`
--
ALTER TABLE `sub_cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=991;

--
-- AUTO_INCREMENT for table `sub_sub_categories`
--
ALTER TABLE `sub_sub_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `supplier_payments`
--
ALTER TABLE `supplier_payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `variants`
--
ALTER TABLE `variants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
