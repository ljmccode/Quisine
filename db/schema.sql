CREATE SCHEMA `celz` ;

USE 'celz';

CREATE TABLE `celz`.`recipes` (
  `recipe_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(256) NOT NULL,
  `status` TINYINT NOT NULL,
  `link` VARCHAR(256) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`recipes_id`));

CREATE TABLE `celz`.`ratings` (
  `rating_id` INT(11) NOT NULL AUTO_INCREMENT,
  `rating` INT NULL,
  `comments` VARCHAR(75) NULL,
  `favorite` TINYINT NULL,
  PRIMARY KEY (`rating_id`));

ALTER TABLE `celz`.`ratings` 
ADD CONSTRAINT `fkrecipes`
  FOREIGN KEY (`rating_id`)
  REFERENCES `celz`.`recipes` (`recipe_id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
