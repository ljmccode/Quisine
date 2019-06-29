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
  `rating` int(11) NOT NULL,
  `comments` varchar(75) NOT NULL DEFAULT '',
  `favorite` tinyint(4) NOT NULL,
  PRIMARY KEY (`rating_id`),
  CONSTRAINT `fkrecipes` FOREIGN KEY (`rating_id`) REFERENCES `recipes` (`recipe_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


##################### SEED DATA #####################

INSERT INTO `recipes`
    (`name`, `status`, `link`, `type`)
VALUES
    ('Tacos', 0, 'www.google.com', 'lunch');
INSERT INTO `recipes`
    (`name`, `status`, `link`, `type`)
VALUES
    ('Pasta', 0, 'www.yahoo.com', 'dinner');
