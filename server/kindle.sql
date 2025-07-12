-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2025 at 04:28 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kindle`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(255) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `author` varchar(1000) NOT NULL,
  `description` mediumtext NOT NULL,
  `price` varchar(10000) NOT NULL,
  `pdf` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `image`, `title`, `author`, `description`, `price`, `pdf`) VALUES
(1, 'https://m.media-amazon.com/images/G/01/kfw/landing/img_books2x._CB611756466_.png', 'j', 'j', 'j', '1', 'uploads/REGISTRATION FORM.pdf'),
(2, 'https://m.media-amazon.com/images/G/01/kfw/landing/img_books2x._CB611756466_.png', 'second', 'second', 'second', '78', 'second'),
(3, 'https://m.media-amazon.com/images/G/01/kfw/landing/img_books2x._CB611756466_.png', 'w', 'w', 'w', '85', 'vv.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

  CREATE TABLE `user` (
    `id` int(255) NOT NULL,
    `name` varchar(100) NOT NULL,
    `email` varchar(100) NOT NULL,
    `password` varchar(100) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'radhika', 'radhika@gmail.com', '$2b$10$8N6fBgmoO354B9rnoo3mTewsoqLk9.h6s3LSrBN1R3F.LlThF9xgC'),
(2, 'mumma', 'saru@gmail.com', '$2b$10$/BP0AW7zrFiOvTJBm8T6juzkKHIY/Tfp4HfDpcBsSYHqTdO6K8/KO'),
(3, 'b', 'g', '$2b$10$kIq/IneABPKKM2MjgRgogO4r/RjoQFF5HpYy2dENXfHxuB.MG3Dx2'),
(4, 'you', 'you@gmail.com', '$2b$10$dhT1CeV/yVUc0sWZDM6yfu3xBzOhGEXfnusXd5q2NYQqimAWo9QUa'),
(5, 'jk', 'jk@gmail.com', '$2b$10$HtecCVDdtO3TYsKEF2pW9uVldA2VciJOvYg2qWpbRgwjaMHftSyQi'),
(6, 'me', 'me@gmail.com', '$2b$10$x67U6AP9MjssGkQ3YCyoD.EowYDzz2I6PGtHDB1KiNaRDOvCbtWC6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
