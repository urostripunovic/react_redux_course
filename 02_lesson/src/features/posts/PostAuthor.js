import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => { //Här skiljer det sig från class based, måste importera det
    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unkown author'}</span>
};

export default PostAuthor;