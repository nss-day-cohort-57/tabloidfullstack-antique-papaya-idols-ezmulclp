ALTER Table Post
DROP CONSTRAINT "FK_Post_Category";
ALTER Table Post
ADD CONSTRAINT "FK_Post_Category"
FOREIGN KEY (CategoryId) REFERENCES Category(Id) ON DELETE SET NULL

ALTER Table Post
ALTER Column CategoryId int