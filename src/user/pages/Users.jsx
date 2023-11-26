import UsersList from "../components/UsersList/UsersList";

const Users = () => {
  const USERS = [
    {id: 'u1', name: 'Senya', image: 'https://static10.tgstat.ru/channels/_0/1e/1e4f42daa1c6ae0a03ce8419b805eaa2.jpg', places: 3},
    {id: 'u2', name: 'Eva', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_eHqMqMAeK624HEV83CPrUwHFaoZhdXJ3BACnDwc1etPpaIm2CoCX-OQdxrTeNFl1Mwg&usqp=CAU', places: 2}
  ];

  return <UsersList items={USERS} />;
};

export default Users;