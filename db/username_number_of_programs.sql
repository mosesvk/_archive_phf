-- create a query that will make a table of all of the users and the number of programs that they are enlisted in. Remember you'll have to use a type of join query. 

select  
  users.user_id,
  users.username,
  count(userprogram.program_id) as number_of_programs
from users 
left outer join userprogram on users.user_id = userprogram.user_id
group by users.user_id 
order by number_of_programs desc;