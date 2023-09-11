insert into users(name, password) values ('adminET7','ETN7dolores');

create user usuario_posts@localhost identified by 'ETN7dolores';
grant all privileges on posts.posts to usuario_posts@localhost;
grant select on posts.users to usuario_posts@localhost;
flush privileges;