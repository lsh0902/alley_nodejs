let user = [
  {
    id : 1,
    username : 'lsh',
    password : '$2b$04$XTo6IZuIYJZXiY7trZKeKOtSYvEiPAS3rdhaktKsFPY88GZLsBuxK',
    email : 'hehesi207@nave.com',
    url : 'Http://www.sdf.fdbs/fbsdbosd'
  }
]


export async function findByUsername(username) {
  return user.find(u => u.username === username);
}

export async function findById(id) {
  return user.find(u => u.id == id);
}

export async function createUser(user) {
  const created = {...user, id : Date.now().toString()};
  user.push(created);
  return created.id;
}