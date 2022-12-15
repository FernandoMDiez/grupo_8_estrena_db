-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2022 a las 17:15:47
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
-- Base de datos: `estrenadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(11) NOT NULL,
  `firstName` varchar(60) NOT NULL,
  `lastName` varchar(60) NOT NULL,
  `tel` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `image` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL,
  `perfil_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `firstName`, `lastName`, `tel`, `email`, `password`, `image`, `created_at`, `updated_at`, `deleted_at`, `perfil_id`) VALUES
(1, 'fernandito', 'barrera', '213213215456', 'ddfeer@gmail.com', '$2a$10$Fqvb/Zzt9klgQpSXu3WMY.lnFDR0nmLCPrMfzmQ.BY8G3LjTLGl6i', 'image-1671120555278.jpg', '2022-12-15 16:09:15', '2022-12-15 16:09:15', NULL, 1),
(3, 'usuario prueba', 'barrera', '78728798798798', 'fmd.diez10@gmail.com', '$2a$10$Lj31habEviQxsXHAFihtWuymr14EdelUBI72WoeyIMieytjCeilNe', 'image-1671120909879.jpg', '2022-12-15 16:15:09', '2022-12-15 16:15:09', NULL, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_perfil`
--

CREATE TABLE `user_perfil` (
  `idPerfil` int(11) NOT NULL,
  `nameCategory` varchar(60) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_perfil`
--

INSERT INTO `user_perfil` (`idPerfil`, `nameCategory`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'vendedor', '2022-12-15 16:08:43', '2022-12-15 16:08:43', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `perfil_id` (`perfil_id`);

--
-- Indices de la tabla `user_perfil`
--
ALTER TABLE `user_perfil`
  ADD PRIMARY KEY (`idPerfil`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user_perfil`
--
ALTER TABLE `user_perfil`
  MODIFY `idPerfil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`perfil_id`) REFERENCES `user_perfil` (`idPerfil`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
