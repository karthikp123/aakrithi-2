-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 24, 2023 at 06:54 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aakrithi`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `admin`
--

-- INSERT INTO `admin` (`id`, `email`) VALUES
-- (1, 'karthik@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `all_artist`
--

DROP TABLE IF EXISTS `all_artist`;
CREATE TABLE IF NOT EXISTS `all_artist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `proof` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `age` int NOT NULL,
  `gender` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `contact` int NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `all_artist`
--

INSERT INTO `all_artist` (`id`, `image`, `email`, `name`, `proof`, `country`, `city`, `age`, `gender`, `category`, `contact`, `description`) VALUES
(1, 'https://i.ibb.co/9gj8TN5/1D.jpg', 'mahedandpritom@gmail.com', 'mahed', 'what', 'Bangladesh', 'Dhaka', 23, 'male', 'sdfsf', 1759704872, 'asdfasfdsaf'),
(2, 'https://i.ibb.co/vYHF8m1/1D.jpg', 'mahed255261@gmail.com', 'Mahed', 'asdas', 'Bangladesh', 'Dhaka', 244, 'male', 'sadfsaf', 456456, 'safsadf'),
(3, 'https://i.ibb.co/m5vdNv2/application-form.jpg', 'mahedandpritom@gmail.com', 'Mahed Ahmed Chowdhury', 'hello', 'Bangladesh', 'Dhaka', 20, 'male', 'GOLD_SCULPTURE', 10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque eleifend molestie. Lorem i'),
(4, 'https://i.ibb.co/vvHNp4N/1D.jpg', 'asdfasf@gmail.com', 'mahed', 'mahed', 'Bangladesh', 'dhaka', 53, 'male', 'efsasd', 2147483647, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ');

-- --------------------------------------------------------

--
-- Table structure for table `art`
--

DROP TABLE IF EXISTS `art`;
CREATE TABLE IF NOT EXISTS `art` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `prodcutName` varchar(100) NOT NULL,
  `availableQty` int NOT NULL,
  `description` mediumtext NOT NULL,
  `price` int NOT NULL,
  `category` varchar(100) NOT NULL,
  `size` text CHARACTER SET utf8mb4 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `art`
--

INSERT INTO `art` (`id`, `image`, `email`, `prodcutName`, `availableQty`, `description`, `price`, `category`, `size`) VALUES
(1, 'https://i.ibb.co/vYHF8m1/1D.jpg', 'mahedandpritom@gmail.com', 'new product', 100, 'dsafasdf', 100, '', ''),
(5, 'https://i.ibb.co/LZMQBhr/addBlog.png', 'asdfasf@gmail.com', 'asdfasgf', 10, 'dfgsdfgdsgf', 100, '', '10inch height X inch width'),
(7, 'https://i.ibb.co/vHDtVmT/register.png', 'asdfasf@gmail.com', 'dfgsdgf', 45, 'dfgsdfgsdfg', 10, '', '600'),
(8, 'https://i.ibb.co/vHDtVmT/register.png', 'asdfasf@gmail.com', 'dsfgsdfg', 10, 'dfsssssssssssssssss', 10, '', '4inch'),
(9, 'https://i.ibb.co/LZMQBhr/addBlog.png', 'asdfasf@gmail.com', 'sdfgsdgf', 100, 'dsrfgsdfgggggggggg', 100, '', '10cm');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
CREATE TABLE IF NOT EXISTS `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` mediumtext CHARACTER SET utf8mb4 NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `image`, `title`, `description`, `status`, `email`) VALUES
(5, 'https://i.ibb.co/nBpQh9N/addBlog.png', 'sdfgsdfg', 'sdfgsdfgsdfg', 'active', 'mahedandpritom@gmail.com'),
(4, 'https://i.ibb.co/Vvfv34t/c2.jpg', 'Stone Carving: Know about this art of Karkala', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham', 'active', 'mahedandpritom@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `number` text NOT NULL,
  `address` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `image`, `email`, `name`, `number`, `address`, `pass`) VALUES
(1, 'https://i.ibb.co/D77hGtv/blog-Details.png', 'asdfasf@gmail.com', 'my name', '3748979879', 'asfasdf', '123456'),
(2, 'https://i.ibb.co/D77hGtv/blog-Details.png', 'ma@gmail.com', 'my name', '3748979879', 'asfasdf', '123456');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
