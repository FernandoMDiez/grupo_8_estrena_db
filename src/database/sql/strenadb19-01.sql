-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-01-2023 a las 02:07:40
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
(13, 3, 2, 2, 'Death Puff', 'Hermosa Chaqueta de cuero', '25000.00', 'campera-puff1.jpg', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(14, 3, 1, 2, 'Killer Jacket', 'Hermosa Chaqueta', '35000.00', 'campera-cuero.jpg', '2022-12-15 21:09:15', '2022-12-15 21:09:15', NULL),
(15, 3, 0, 0, '  asasas', 'sasasa', '50000.00', 'image-1674005800405.png', '2023-01-18 01:36:40', '2023-01-18 01:36:40', '2023-01-18 01:46:03'),
(16, 2, 0, 0, '  asasas', 'asdasd', '50000.00', 'image-1674006496627.png', '2023-01-18 01:48:16', '2023-01-18 01:48:16', '2023-01-18 01:48:20'),
(17, 2, 0, 0, '  asasas', 'sdasdasd', '50000.00', 'image-1674006522385.png', '2023-01-18 01:48:42', '2023-01-18 01:48:42', '2023-01-18 02:04:52'),
(18, 5, 0, 0, ' hola', 'asdasd', '20000.00', 'image-1674007076956.png', '2023-01-18 01:57:57', '2023-01-18 01:57:57', '2023-01-18 02:10:49'),
(19, 2, 0, 0, '  uasnais', 'asdasd', '5468.00', 'image-1674007337461.mp4', '2023-01-18 02:02:17', '2023-01-18 02:02:17', '2023-01-18 02:04:50'),
(20, 2, 0, 0, 'juliana', 'qweqw', '8582.00', 'image-1674007788068.png', '2023-01-18 02:05:32', '2023-01-18 02:09:48', '2023-01-18 02:10:47'),
(21, 3, 0, 0, 'nicolas  ', 'askaskasasaasasasas', '800000.00', 'image-1674175196731.png', '2023-01-20 00:27:19', '2023-01-20 00:40:41', '2023-01-20 00:40:54'),
(22, 2, 0, 0, '  nicolas', 'hola como estas', '30000.00', 'image-1674175415898.png', '2023-01-20 00:43:36', '2023-01-20 00:43:36', NULL),
(23, 4, 0, 0, '  Fer', 'asasa', '2525.00', 'image-1674175744752.png', '2023-01-20 00:49:06', '2023-01-20 00:49:06', NULL),
(24, 4, 0, 0, '  jolas', 'sjdasdasd', '80000.00', 'image-1674175970492.mp4', '2023-01-20 00:52:52', '2023-01-20 00:52:52', NULL),
(26, 2, NULL, NULL, '  Hola', 'asas', '52525.00', 'image-1674176759514.jpg', '2023-01-20 01:05:59', '2023-01-20 01:05:59', NULL);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_FKK` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_colors_FK` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`),
  ADD CONSTRAINT `products_sizes_FK` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_perfilId_foreign` FOREIGN KEY (`perfilId`) REFERENCES `perfiles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
