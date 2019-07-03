DROP TABLE IF EXISTS `recipes`;

CREATE TABLE `recipes` (
  `recipe_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `link` varchar(256) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`recipe_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `ratings`;

CREATE TABLE `ratings` (
  `rating_id` int(11) NOT NULL AUTO_INCREMENT,
  `rating` int(11) DEFAULT NULL,
  `comments` varchar(75) DEFAULT NULL,
  `favorite` tinyint(4) DEFAULT NULL,
  `recipe_id` INT(11) NOT NULL,
  PRIMARY KEY (`rating_id`),
CONSTRAINT recipe_id FOREIGN KEY (recipe_id) REFERENCES recipes (recipe_id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


