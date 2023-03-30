import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
      }
    });
  }, []);

  const location = useLocation();

  const navigate = useNavigate();

  const navigateAddress = (route, name) => {
    let css = "py-3 text-sm cursor-pointer font-semibold   ";

    if (route === location.pathname)
      css += "border-b-[3px] text-black border-b-red-500 ";
    else css += "text-gray-400 border-b-transparent hover:text-black";

    return (
      <li className={css} onClick={() => navigate(route)}>
        {name}
      </li>
    );
  };
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50 px-3">
      <header className="flex flex-row justify-between w-full items-center max-w-6xl mx-auto ">
        <div>
          <div
            className="h-5 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <svg
              viewBox="0 0 484 64"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                className="circle"
                d="M0.000253149 31.8258C-0.0692354 49.4759 14.1759 63.9295 31.826 63.999C49.4761 64.138 63.9298 49.8233 63.9992 32.1732C64.0687 14.5231 49.8236 0.138977 32.1735 0C32.104 0 32.0345 0 31.965 0C14.4539 0 0.13923 14.2452 0.000253149 31.8258Z"
                fill="#E4002B"
              ></path>
              <path
                className="house"
                d="M51.5422 28.6292L34.448 11.535C33.8226 10.8401 32.9193 10.4927 32.0159 10.4927C31.1126 10.4927 30.2092 10.8401 29.5838 11.535L12.4896 28.6292C11.5168 29.602 11.1694 31.0613 11.7253 32.3816C12.2812 33.7019 13.532 34.5357 14.9217 34.5357H17.3538V47.4606C17.3538 49.3368 18.8826 50.935 20.8283 50.935H43.2036C45.0798 50.935 46.678 49.4063 46.678 47.4606V34.5357H49.1101C50.4999 34.5357 51.7507 33.7019 52.3066 32.3816C52.793 31.1308 52.5151 29.6715 51.5422 28.6292ZM43.3426 32.9375V47.4606C43.3426 47.5301 43.2731 47.6691 43.1341 47.6691H20.8283C20.7588 47.6691 20.6198 47.5996 20.6198 47.4606V32.9375C20.6198 32.0341 19.9249 31.3393 19.0216 31.3393H14.9217C14.8523 31.3393 14.7828 31.2698 14.7828 31.2003C14.7828 31.1308 14.7828 31.0613 14.8523 30.9918L31.9464 13.8281C32.0159 13.8281 32.0159 13.7586 32.0854 13.7586C32.1549 13.7586 32.1549 13.7586 32.2244 13.8281L49.3186 30.9918C49.3881 31.0613 49.3881 31.1308 49.3881 31.2003C49.3881 31.2698 49.3186 31.3393 49.2491 31.3393H45.1493C44.1069 31.2698 43.3426 32.0341 43.3426 32.9375Z"
                fill="white"
              ></path>
              <path
                className="logo_text"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M155.826 46.5391C150.887 46.5391 148.035 43.5478 148.035 38.6087V10.0174H154.783V38.1913C154.783 39.8609 155.548 40.7652 157.148 40.7652H159.096V46.5391H155.826ZM90.2956 19.0609V26.2261H87.4434C84.313 26.2261 82.0869 28.4522 82.0869 32.4174V46.4696H75.3391V19.687H82.0869V23.5131C83.6174 20.3826 86.0521 18.9913 88.9043 18.9913C88.9043 19.0609 90.2956 19.0609 90.2956 19.0609ZM116.73 34.6435H97.8086C98.226 39.3739 100.73 41.4609 104.139 41.4609C107.339 41.4609 109.635 40 111.026 36.3826L116.73 38.4696C114.643 44.5217 109.913 47.2348 104.417 47.2348C96.4869 47.2348 90.9216 41.6 90.9216 33.1826C90.9216 24.8348 96.3477 19.1304 104.069 19.1304C111.513 19.1304 116.73 24.7652 116.73 33.113V34.6435ZM97.9477 30.0522H109.913C109.148 26.2261 107.061 24.5565 104.069 24.5565C100.8 24.4869 98.713 26.2956 97.9477 30.0522ZM143.652 46.5391V29.6348C143.652 22.4 138.017 19.0609 131.687 19.0609C126.4 19.0609 121.669 21.287 119.861 26.9913L125.426 29.3565C126.4 26.5739 128.417 25.0435 131.409 25.0435C134.887 25.0435 136.974 26.713 136.974 30.3304V32.7652C135.374 31.3043 133.009 30.4 129.948 30.4C123.339 30.4 119.096 33.6696 119.096 38.7478C119.096 44.0348 123.2 47.1652 129.461 47.1652C133.009 47.1652 135.791 46.0522 137.391 43.8957V46.5391H143.652ZM131.548 35.1304C134.817 35.1304 137.043 36.4522 137.043 38.7478C137.043 41.0435 134.817 42.2957 131.548 42.2957C128.278 42.2957 126.052 41.0435 126.052 38.7478C126.052 36.4522 128.278 35.1304 131.548 35.1304ZM167.165 34.6435H186.087C186.157 34.1565 186.157 33.5304 186.087 33.113C186.087 24.7652 180.87 19.1304 173.426 19.1304C165.704 19.1304 160.278 24.8348 160.278 33.1826C160.278 41.6 165.844 47.2348 173.774 47.2348C179.27 47.2348 184 44.5217 186.087 38.4696L180.383 36.3826C178.991 40 176.696 41.4609 173.496 41.4609C170.087 41.4609 167.583 39.3739 167.165 34.6435ZM179.339 30.0522H167.374C168.07 26.2956 170.157 24.4869 173.496 24.5565C176.487 24.5565 178.644 26.2261 179.339 30.0522ZM188.174 38.2609L193.6 36.4522C194.365 40 197.078 41.7391 200.487 41.7391C203.548 41.7391 205.356 40.7652 205.356 39.0957C205.356 37.5652 203.896 36.8696 200.626 36.0348L197.983 35.4087C191.791 33.8783 189.148 31.3043 189.148 27.0609C189.148 22.2609 193.391 19.0609 199.93 19.0609C206.191 19.0609 210.852 22.3304 211.548 27.7565L205.983 29.2174C205.426 25.9478 202.922 24.5565 199.93 24.5565C197.287 24.5565 195.548 25.6 195.548 26.9217C195.548 28.6609 197.565 29.2174 200.696 29.9826L203.339 30.6783C209.043 32 211.826 34.713 211.826 38.8174C211.826 43.7565 207.304 47.1652 200.487 47.1652C194.783 47.1652 189.635 44.3826 188.174 38.2609ZM224.278 25.0435H230.261V19.7565H224.278V10.8522L217.53 14.5391V19.687H212.661V25.0435H217.53V37.2174C217.53 42.9218 220.869 46.5391 226.574 46.5391H230.261V40.7652H227.409C225.322 40.7652 224.278 39.4435 224.278 36.8696V25.0435ZM256.556 29.6348V46.5391H250.296V43.8957C248.696 46.0522 245.913 47.1652 242.365 47.1652C236.104 47.1652 232 44.0348 232 38.7478C232 33.6696 236.243 30.4 242.852 30.4C245.913 30.4 248.278 31.3043 249.809 32.7652V30.3304C249.809 26.713 247.722 25.0435 244.243 25.0435C241.252 25.0435 239.235 26.5739 238.261 29.3565L232.696 26.9913C234.504 21.287 239.235 19.0609 244.522 19.0609C250.991 19.0609 256.556 22.4 256.556 29.6348ZM250.017 38.7478C250.017 36.4522 247.791 35.1304 244.452 35.1304C241.183 35.1304 238.887 36.4522 238.887 38.7478C238.887 41.0435 241.113 42.2957 244.452 42.2957C247.722 42.2957 250.017 41.0435 250.017 38.7478ZM269.982 25.0435H275.965V19.7565H269.982V10.8522L263.235 14.5391V19.687H258.365V25.0435H263.235V37.2174C263.235 42.9218 266.574 46.5391 272.278 46.5391H275.965V40.7652H273.113C271.026 40.7652 269.982 39.4435 269.982 36.8696V25.0435ZM303.304 34.6435H284.382C284.8 39.3739 287.304 41.4609 290.713 41.4609C293.913 41.4609 296.209 40 297.6 36.3826L303.304 38.4696C301.217 44.5217 296.487 47.2348 290.991 47.2348C283.061 47.2348 277.496 41.6 277.496 33.1826C277.496 24.8348 282.922 19.1304 290.643 19.1304C298.087 19.1304 303.304 24.7652 303.304 33.113V34.6435ZM284.522 30.0522H296.487C295.791 26.2261 293.635 24.5565 290.643 24.5565C287.374 24.4869 285.287 26.2956 284.522 30.0522ZM310.191 38.1218C307.478 38.1218 305.67 40 305.67 42.6435C305.67 45.287 307.478 47.1652 310.191 47.1652C312.835 47.1652 314.643 45.287 314.643 42.6435C314.643 40 312.835 38.1218 310.191 38.1218ZM316.869 33.113C316.869 24.6957 322.713 19.0609 330.365 19.0609C336.348 19.0609 341.426 22.0522 343.165 28.5913L337.252 30.7478C335.93 26.6435 333.774 25.0435 330.365 25.0435C326.956 25.0435 323.826 27.687 323.826 33.113C323.826 38.5391 326.956 41.1826 330.365 41.1826C333.774 41.1826 335.93 39.6522 337.252 35.4783L343.165 37.6348C341.426 44.1739 336.278 47.1652 330.296 47.1652C322.713 47.1652 316.869 41.5304 316.869 33.113ZM358.678 19.0609C350.748 19.0609 344.835 24.8348 344.835 33.113C344.835 41.4609 350.748 47.1652 358.678 47.1652C366.678 47.1652 372.591 41.4609 372.591 33.113C372.591 24.7652 366.678 19.0609 358.678 19.0609ZM358.678 25.0435C362.713 25.0435 365.704 28.0348 365.704 33.113C365.704 38.2609 362.713 41.2522 358.678 41.2522C354.713 41.2522 351.722 38.2609 351.722 33.113C351.722 27.9652 354.713 25.0435 358.678 25.0435ZM414.609 28.8V46.5391H407.861V30.1913C407.861 26.7826 406.122 24.9044 403.687 24.9044C400.835 24.9044 398.748 26.8522 398.748 30.4V46.5391H392V30.1913C392 26.7826 390.261 24.9044 387.826 24.9044C384.974 24.9044 382.887 26.8522 382.887 30.4V46.5391H376.139V19.687H382.887V23.0261C384.417 20.2435 386.922 19.0609 389.843 19.0609C393.183 19.0609 395.965 20.6609 397.496 23.513C399.096 20.3826 401.948 19.0609 405.287 19.0609C410.643 19.0609 414.609 22.9565 414.609 28.8ZM422.539 38.1218C419.826 38.1218 418.017 40 418.017 42.6435C418.017 45.287 419.826 47.1652 422.539 47.1652C425.183 47.1652 426.991 45.287 426.991 42.6435C426.991 40 425.183 38.1218 422.539 38.1218ZM453.844 29.6348V46.5391H447.583V43.8957C445.983 46.0522 443.2 47.1652 439.652 47.1652C433.391 47.1652 429.287 44.0348 429.287 38.7478C429.287 33.6696 433.6 30.4 440.139 30.4C443.2 30.4 445.565 31.3043 447.096 32.7652V30.3304C447.096 26.713 445.009 25.0435 441.53 25.0435C438.539 25.0435 436.522 26.5739 435.548 29.3565L429.983 26.9913C431.791 21.287 436.522 19.0609 441.809 19.0609C448.278 19.0609 453.844 22.4 453.844 29.6348ZM447.235 38.7478C447.235 36.4522 445.009 35.1304 441.67 35.1304C438.4 35.1304 436.104 36.4522 436.104 38.7478C436.104 41.0435 438.33 42.2957 441.67 42.2957C445.009 42.2957 447.235 41.0435 447.235 38.7478ZM457.948 19.687V35.7565C457.948 42.9913 463.096 47.1652 469.913 47.1652C476.661 47.1652 481.739 42.9218 481.739 35.7565V19.687H474.922V35.3392C474.922 39.3739 472.835 41.1826 469.843 41.1826C466.922 41.1826 464.765 39.3739 464.765 35.3392V19.687H457.948Z"
                fill="#3D3A40"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          <ul className="flex space-x-10">
            {navigateAddress("/", "Home")}
            {navigateAddress("/offers", "Offers")}

            {!login && navigateAddress("/signIn", "SignIn")}

            {login && navigateAddress("/profile", "Profile")}
          </ul>
        </div>
      </header>
    </div>
  );
}
