-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 09-11-2020 a las 19:56:42
-- Versión del servidor: 8.0.18
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `leonesblancos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `correo` varchar(80) NOT NULL,
  `password` varchar(60) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apPaterno` varchar(30) NOT NULL,
  `apMaterno` varchar(30) NOT NULL,
  `diaNac` int(2) NOT NULL,
  `mesNac` int(2) NOT NULL,
  `añoNac` int(4) NOT NULL,
  `grado` varchar(20) NOT NULL,
  `cinta` varchar(15) NOT NULL,
  `tutor` varchar(80) DEFAULT NULL,
  `telefono` varchar(15) NOT NULL,
  `actualizado` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `correo`, `password`, `nombre`, `apPaterno`, `apMaterno`, `diaNac`, `mesNac`, `añoNac`, `grado`, `cinta`, `tutor`, `telefono`, `actualizado`) VALUES
(1, 'Allan.FL.15@live.com', '$2y$12$jqrqNGILZCvNFaicyekRb.ij/njMKXgWzWqPJ4pC1l1NU9JEhNKE.', 'Allan Atzin', 'Flores', 'De la Serna', 15, 5, 1998, '1', 'negra', '', '55-7168-1630', NULL),
(3, 'paulissagameplay@gmail.com', '$2y$12$Bs/Oo1/7cum2mk11p1dP.O1acQWQN.Qsy9zZtQz7m4EpLd2.3/K2.', 'Paulette Melissa', 'Villegas', 'Reyes', 10, 10, 1996, '1', 'negra', '', '55-3201-3065', NULL),
(6, 'allanbell98@hotmail.com', '$2y$12$pNJRnVUkj9.R87878lzdO.5aI2nCVxcoYg/N2TbsBNDzKu7xF7NqO', 'Allan', 'Flores', 'De la Serna', 15, 5, 1998, '1', 'negra', '', '55-7168-1630', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
