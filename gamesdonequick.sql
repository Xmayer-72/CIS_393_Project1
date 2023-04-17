-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3310
-- Generation Time: Apr 17, 2023 at 11:21 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gamesdonequick`
--

-- --------------------------------------------------------

--
-- Table structure for table `gametimes`
--

CREATE TABLE `gametimes` (
  `ID` int(11) NOT NULL,
  `gameName` varchar(255) NOT NULL,
  `duration` time(2) NOT NULL,
  `submitter` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gametimes`
--

INSERT INTO `gametimes` (`ID`, `gameName`, `duration`, `submitter`, `createdAt`) VALUES
(1, 'Fallout New Vegas', '01:52:32.95', 'Xander', '2023-04-14 01:36:14'),
(2, 'Fallout New Vegas', '25:25:25.25', 'Spiff', '2023-04-14 02:28:33'),
(3, 'Fallout 4', '35:35:25.95', 'Xander 2nd', '2023-04-14 02:29:03'),
(4, 'Skyrim: Special Edition', '15:37:45.54', 'Nawaz', '2023-04-17 20:23:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gametimes`
--
ALTER TABLE `gametimes`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gametimes`
--
ALTER TABLE `gametimes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
