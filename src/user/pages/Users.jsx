import { useEffect, useState, Fragment } from 'react';
import { useHttpClient } from '../../shared/hooks/http.hook';

import UsersList from '../components/UsersList/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const Users = () => {
  const [loadedUsers, setLoadedUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchedUsers = async () => {
      try {
        const responseData = await sendRequest(proce.env.REACT_APP_BACKEND_URL + '/users');

        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchedUsers();
  }, [sendRequest]);

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </Fragment>
  );
};

export default Users;
