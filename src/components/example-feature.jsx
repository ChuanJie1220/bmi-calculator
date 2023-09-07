function formatName(user) {
  return user.lastName + ' ' + user.firstName;
}

const user = {
  firstName: 'Zi Qin',
  lastName: 'Thng'
};

const element = (
<h1>
    Hello, {formatName(user)}!
</h1>
);
