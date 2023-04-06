import { Profile } from "./Profile/Profile";
import {Statistics} from "./Statistics/Statistics";
import user from "../data/user.json";
import data from '../data/data.json';

console.log(data);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}
/>
<Statistics title="Upload stats" stats={data} />
    </div>
  );
};
