import User from './User';

const Users = () => {
    return (
        <div>
            <div className='space-y-4'>
                {
                    [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10].map((user, indx) => <User key={indx} user={user}></User>)
                }
            </div>
        </div>
    );
}

export default Users;
