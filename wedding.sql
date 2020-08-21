/*
 Navicat Premium Data Transfer

 Source Server         : alldb
 Source Server Type    : MySQL
 Source Server Version : 100413
 Source Host           : localhost:3306
 Source Schema         : wedding

 Target Server Type    : MySQL
 Target Server Version : 100413
 File Encoding         : 65001

 Date: 07/08/2020 09:20:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for akad
-- ----------------------------
DROP TABLE IF EXISTS `akad`;
CREATE TABLE `akad`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `lokasi` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `tanggal` date NOT NULL,
  `jam` time(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of akad
-- ----------------------------
INSERT INTO `akad` VALUES (1, 'ff', '2014-01-02', '06:28:00');

-- ----------------------------
-- Table structure for galery
-- ----------------------------
DROP TABLE IF EXISTS `galery`;
CREATE TABLE `galery`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of galery
-- ----------------------------
INSERT INTO `galery` VALUES (2, 'dadf019a8ad50a94b0a0cb7642bced23.png');
INSERT INTO `galery` VALUES (12, '710af8d90a176b83c8ed1167b512357a.jpeg');
INSERT INTO `galery` VALUES (13, 'b510fab313b6988a9e25c918b4bb6550.png');

-- ----------------------------
-- Table structure for keluarga_pria
-- ----------------------------
DROP TABLE IF EXISTS `keluarga_pria`;
CREATE TABLE `keluarga_pria`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `ayah` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ibu` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of keluarga_pria
-- ----------------------------
INSERT INTO `keluarga_pria` VALUES (1, 'Jony', 'Jane');

-- ----------------------------
-- Table structure for keluarga_wanita
-- ----------------------------
DROP TABLE IF EXISTS `keluarga_wanita`;
CREATE TABLE `keluarga_wanita`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `ayah` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ibu` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of keluarga_wanita
-- ----------------------------
INSERT INTO `keluarga_wanita` VALUES (1, 'Jonyd', 'Doeee');

-- ----------------------------
-- Table structure for mempelai
-- ----------------------------
DROP TABLE IF EXISTS `mempelai`;
CREATE TABLE `mempelai`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `pria` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `wanita` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `story` longtext CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of mempelai
-- ----------------------------
INSERT INTO `mempelai` VALUES (1, 'Jhony', 'Jane', 'hello world');

-- ----------------------------
-- Table structure for resepsi
-- ----------------------------
DROP TABLE IF EXISTS `resepsi`;
CREATE TABLE `resepsi`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `lokasi` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `tanggal` date NOT NULL,
  `jam` time(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of resepsi
-- ----------------------------
INSERT INTO `resepsi` VALUES (1, 'ff', '2014-01-02', '06:28:00');

-- ----------------------------
-- Table structure for ucapan_selamat
-- ----------------------------
DROP TABLE IF EXISTS `ucapan_selamat`;
CREATE TABLE `ucapan_selamat`  (
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `user` varchar(20) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `ucapan` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of ucapan_selamat
-- ----------------------------
INSERT INTO `ucapan_selamat` VALUES (1, 'test', 'selamat');

SET FOREIGN_KEY_CHECKS = 1;
