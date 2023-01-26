-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-01-2023 a las 04:56:06
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `strenadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `nameCategory` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `nameCategory`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Jacket', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(2, 'Pants', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(3, 'Top', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(10) UNSIGNED NOT NULL,
  `nameColor` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `nameColor`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Blanco', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(2, 'Negro', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(3, 'Rojo', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(4, 'Amarillo', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfiles`
--

CREATE TABLE `perfiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `namePerfil` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `perfiles`
--

INSERT INTO `perfiles` (`id`, `createdAt`, `updatedAt`, `deletedAt`, `namePerfil`) VALUES
(1, '2023-01-20 01:49:38', '2023-01-20 01:49:38', NULL, 'vendedor'),
(2, '2023-01-20 01:50:01', '2023-01-20 01:50:01', NULL, 'Comprador'),
(3, '2023-01-20 01:50:12', '2023-01-20 01:50:12', NULL, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `sizeId` int(10) UNSIGNED DEFAULT NULL,
  `colorId` int(10) UNSIGNED DEFAULT NULL,
  `categoryId` int(10) UNSIGNED DEFAULT NULL,
  `nameProduct` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` text COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `sizeId`, `colorId`, `categoryId`, `nameProduct`, `description`, `price`, `image`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 3, 2, 2, 'Death Puff', 'Hermosa Chaqueta de cuero', '25000.00', 'campera-puff1.jpg', '2022-12-16 00:09:15', '2022-12-16 00:09:15', NULL),
(2, 3, 1, 2, 'Killer Jacket', 'Hermosa Chaqueta', '35000.00', 'campera-cuero.jpg', '2022-12-16 00:09:15', '2022-12-16 00:09:15', NULL),
(3, 1, 1, 1, 'Sky Puff', 'Hermosa Chaqueta', '22000.00', 'campera-puff2.jpg', '2022-12-16 00:09:15', '2022-12-16 00:09:15', NULL),
(4, 5, 1, 2, 'Scream Pants', 'Pantalon con bolsillo', '15990.00', 'pantalon.jpg', '2022-12-16 00:09:15', '2022-12-16 00:09:15', NULL),
(5, 4, 1, 3, 'Bermuda Goth level one', 'Pantalon con bolsillo ancho corto', '10005.00', 'image-1666741943759.jpg', '2022-12-16 00:09:15', '2022-12-16 00:09:15', NULL),
(6, 4, 4, 2, 'Spikes Pants', 'Pantalon con bolsillo', '16000.00', 'puas.jpg', '2022-12-16 00:09:15', '2022-12-16 00:09:15', NULL),
(7, 3, 1, 3, 'Line Sweater', 'Sweater muy cómodo', '14000.00', 'sweater2.jpg', '2022-12-16 00:09:15', '2022-12-16 00:09:15', NULL),
(8, 1, 3, 3, 'Skull Sweater', 'Sweater muy cómodo', '18000.00', 'sweater.jpg', '2022-12-16 00:09:15', '2022-12-16 00:09:15', NULL),
(9, 2, 1, 3, 'Bad T-Shirt', 'Camisa increíble', '8400.00', 'sweater2.jpg', '2022-12-16 00:09:15', '2022-12-16 00:09:15', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(10) UNSIGNED NOT NULL,
  `nameSize` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `nameSize`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'XS', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(2, 'S', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(3, 'M', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(4, 'L', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(5, 'XL', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `firstName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tel` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `image` text COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `perfilId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `createdAt`, `updatedAt`, `deletedAt`, `firstName`, `lastName`, `tel`, `email`, `image`, `password`, `perfilId`) VALUES
(1, '2023-01-20 01:51:18', '2023-01-25 04:43:27', NULL, 'fernandito', 'mateu', '74747 ', 'fmd.diez10@gmail.com', 'image-default.jpg', '$2a$10$M9VwVJeFRG1DvbtmaFC4Ze93zi8Mno5IZbl7hueAZLiog447GPaMq', 1),
(2, '2023-01-24 19:25:51', '2023-01-24 19:25:51', NULL, 'Marcelo', 'Lopez', '  381154246587', 'marcelo@gmail.com', 'image-1674588350933.jpg', '$2a$10$Cu03Rj2HoSKG9WT1X8LcaehJHE38atctgOq.RWXmxwFUbF4/JqVxC', 2),
(3, '2023-01-24 19:29:14', '2023-01-24 19:29:14', NULL, 'Pablo', 'Liendro', '  6598745321458', 'Pablo@gmail.com', 'image-1674588554893.jpg', '$2a$10$I2pzUqxaW2rPSUzODHM49ey.B/qB.3Z0TmsGFqlrlwN5uGU9Vbqv6', 1),
(4, '2023-01-24 19:29:56', '2023-01-24 19:29:56', NULL, 'Luciana', 'Vera', '123456789', 'Luciana@hotmail.com', 'image-1674588596303.jpg', '$2a$10$NfFtj1vKNYF1osAiiqvVjeoO7Cu9wo90FQyhwz4Mdla5Z5eGqP/xq', 2),
(5, '2023-01-25 00:52:12', '2023-01-25 00:52:12', NULL, 'deee', 'dddd', '  22222222222  ', 'fmd.diez10@gmai1.com', 'image-1674607932457.jpg', '$2a$10$PDPA9HWWxM0ymovmXhQvHuVe8UQGqMcJ5.WOgilag5Zthhne/YGWe', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_sizes_FK` (`sizeId`),
  ADD KEY `products_colors_FK` (`colorId`),
  ADD KEY `products_category_FK` (`categoryId`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_perfilId_foreign` (`perfilId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `perfiles`
--
ALTER TABLE `perfiles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
