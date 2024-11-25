import app = require("teem");
CREATE DATABASE IF NOT EXISTS eco6ense DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_0900_ai_ci;

use eco6ense;

CREATE TABLE IF NOT EXISTS `ecosense`.`usuario` (
  `idUsu` INT NOT NULL,
  `usuNome` VARCHAR(100) NOT NULL,
  `usuMail` VARCHAR(100) NOT NULL,
  `usuPass` VARCHAR(50) NOT NULL,
  `usuNasc` DATE NOT NULL,
  `exclusao` DATETIME NULL,
  PRIMARY KEY (`idUsu`),
  INDEX `exclusao_IX` (`exclusao` ASC) VISIBLE)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `ecosense`.`Post` (
  `idPost` INT NOT NULL,
  `posTitu` VARCHAR(45) NOT NULL,
  `posCont` MEDIUMTEXT NOT NULL,
  `posView` INT ZEROFILL NOT NULL,
  `posData` DATETIME NOT NULL,
  `idUsu` INT NOT NULL,
  `exclusao` DATETIME NULL,
  PRIMARY KEY (`idPost`),
  INDEX `idUsu_idx` (`idUsu` ASC) VISIBLE,
  INDEX `exclusao_IX` (`exclusao` ASC) VISIBLE,
  CONSTRAINT `idUsuPost`
    FOREIGN KEY (`idUsu`)
    REFERENCES `ecosense`.`usuario` (`idUsu`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;