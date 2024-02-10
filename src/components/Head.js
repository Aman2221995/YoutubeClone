import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={()=> toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAADp6ent7e0JCQk/Pz8PDw+Pj4+Hh4fDw8P7+/vV1dXg4OAZGRltbW3c3NwgICBgYGBnZ2ewsLCkpKRPT080NDR1dXVFRUXAwMB/f3/k5OS6urp5eXkpKSmzs7OMjIyXl5fPz89aWlquczz2AAABoUlEQVR4nO3d7U4aQRSA4ZWvygoiAoK2tS69/3usGH8725xNzrg8zxWcN8N+kMxkmwYAAAAAAAAAAAAA/tO0Uu0wee3+8LCo09PxboDA1cNNzW7jgdkJJcdo4Sm7oOg5FrjMnr/sFCt8yZ6/h5+hwm32+D3E7qfjLxz/r3T8d5pv8LT4FSwc/xO/Wc2yG770Oxz4bj9fz6q0eH0c4s37Yjqp00D/ngAAAAAAAAAAgKuy6Q7zKp3u/wyxK6q9z96c95VZcKf+JfApO6JgFy2segU/rGKBd9nzl21jhW/Z8/cwCRU+Zo/fwyZU+Dd7/B7OocJj9vg9xG41u+zxy15jT/12kR1Q1IUCm+Y5O6BkHgys/nc6n4YLm03F59fW3TAHEtrzsk6xU2sAAAAAAAAAAMB1as/djzrthtkUta/5AxfbATbu1X4cIbbL+12XXVAUXMVJ9vxlL2Nfwpt1bBFrvwovnLe49jXssscvC16H3+BeGv06QpcdUBR+q6n9Shzg+w/7mg8GHWKHDz+1y+62Sm+78EspAAAAAAAAAAAAAIzOP09WOq3tUN5KAAAAAElFTkSuQmCC"
        />
        <a href="/">
        <img
          className="h-8 mx-2"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"
        />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
        <button className="border border-gray-900 px-5 py-2 bg-gray-100 rounded-r-full">🔍</button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACUCAMAAABY3hBoAAAAY1BMVEX///8AAADy8vL29vb8/Pzl5eXu7u7Z2dnp6emqqqorKyuUlJRKSkrGxsbU1NSurq5hYWEhISFCQkK1tbVpaWlXV1cbGxtwcHC+vr58fHyfn58yMjKEhIQSEhI7OzsmJiaMjIxVXrGKAAAGgElEQVR4nO1ca5eqOBCU9xvRgAIC+v9/5crc9c4EOtAVgrN7jvWdnIJ0uqsf4XD44IMPPngnXNsLgjwPAs92f5vLF2wvF0mZxr31F32clonIPfv3WAXHrrpbCtyr7hi8n5Mb1k2s4vSNuKnDd26tk3FYvbhlzntYuUGi3D/FribBGz5bfcVY/cG13peVI1IdWiNSseOOikKX1ohC7MPKzaottEZU2Q625jVbaY1oPNO8xMUEL8u6mN1PT+so0rga/GjZYI6XZQ2ZIVpuYpLWiMTIGfANbuMLV387r8DoNr4wbBYeGRgXubhvNDSxD60Rm/zGcT9elnX8j/LawGxnXtrM6r15WZaWSstP+xM75Tgvb39aI+DAaW/ShHwUaPr5Jl5PZhiv6F28LCtCeGX9+oKm0APByd0lcKsw8EWQEXnPR8PeyPfysizmZtqG8g4+LjyfoaWkz2UbCRG15Vnn6YTDCw9F5y778cp21sHkWKGpQ2mJcLpEKFBq3TqvAFsxVRhuBlZf1nMALCdKlGZrY6Z6XeMF+fzb4jnPbsBSq/4f8a33le8fIBnWipdFVFi6qqU8xNCWV3vwF4oZGs9j15At67G0kM83iwtLFef8KHJbKhsA+S1TRgHCbiEDdkv2KmzhyZfCpVr+8E2fn94AEU5ttC17DUYIeYEf4lrlGvwIB2Rd/G04q5YI2F+94vM6HNhV+JPKYfNPEFRC4h91xUl32eHoBtUDA7ZzbOhzabNNrIDaQg7bY5xprcK30gfCC4lz9Jni2wJY1+LX2Wjb5TscsHiUsxem3SNfo8xE/jJC9sIp9bjDlyhg6chmLxxTp8rjKxSwV+uwF75Q1g+ofbDh4rMXJpU/oMXAfguQEVLHEpB0YLEZKH9TQQnIA9X6hARfTZFFDCAPWc1OZQA59GP+ND+EP2Ma5MhCoJBBhHEXqQ1Arp/v+J97MSfm8BMRcC+RNy7nLpIvTkYATW0XWZcQVBgx4FwCZ9IAsZQdLm2oUEYRQ2yMWTUdgZXJCBuDTqXFTuDAJh5xKhE/NuLMiuQ+WIyl0hHA83+B5TLQYZIHsQZ0ekYwygRoBZw87XgnkHo9Cegm0OpCozd/XXQatsZQECWoco0eZbUgGQONycGeCsKhztRAnygOp5/o9GJPlGxxkbL8N9IjkZo4R72x1BsZg3X78/EjkGzNDh5AsVoCXUDdMFiXdsfMCx0n9LJjpz3Dqwp0Gxu7l9P9ftrYg6X7NuEbRwdo9LRkdzZPBm9FpUjxcUdtGA+aF+b7h2tb11GjnNAYmqiu2ys0waFKpEP+Kf/rvZysIUyz/3vtAfFosTIr5Hqyc/TDGFwvSaXDeEkT74ejdCKuJlO3gXh72SczGw1E0hTV+VwVTSJm8dNhhid1ScTn7GVKB27XcWzbcei8LuDsZ7ygiRnnEiyovMCQoY+Fx1eLdzftSyn1mkZYbtevfPIULAv/RLi29uLTy/q63MDryWw5c11uGS+WroEmJY2l3IQsWP/AgvbpNl8PcBeYraX2ntJG2XNxS1Bm1bfVzF71yYiqggaUFZL1WohDaz2VIoGZ0drqwliedIWDsTs7Hqk3OG6bKmjxxlJ4oIZXeOU2okWiGYdoEFvC7LHPDBSs669hVjoomQ9Oxxwuhi8JB5PNVI41zDDRZdCYNgeTwAcIA0nKmvIU35B9BjI47/88mVskBQ1JaKRQ91Nqs2BjFuuQK/egJ5LMAL4/sQj51gdqwLIQMBMo/0AOlxqSRTLQ9QlOLuRJT2is6l/IbUZFbgRDzpewxucLvjRf2xu5FSykbOeuef8zl3X29guuk0u3sbY0mMzXbjW0ySAxZ8JXhVwW2vGGK5GHw1F+zdsmKTVttFfaq+UT6apn99/wpxoo0doAb5pKlJvvPc9Srr6F3zVsp6WH7anggcjO4wibu4hmWbQhIZXP8odLFzCDlBN0M40/GMsgfCJPLSLOPH9EFCkbA9fqX3AFkaDfqyRX/9fItfOE+qvPTZj9GYdHp9Dxta292a46Xt1e6fJMafxPHK6y8hYPafloRZbleZaJ9lGmg6pmdKv3+E+OPT9dGOJor/9Fhe2GK9on3P9B1DQvqw670hrhCw1qgzDoItTIsXuK585gSWYFviiYzc2+eM/H+oZdd8XKUTgVXf0r/22zvSypFOROVZL95t/knghzESVdUxbVE0XZdEkk8r2PIB9fPS51l+uDDz74/+MfE6Jb+wXtT4sAAAAASUVORK5CYII"
        />
      </div>
    </div>
  );
};

export default Head;
