 import img from '../images/earth.png'
 import programmer from '../images/programming.png'

import style from '../styles/About.module.css';

const About = () => {
  return (
    <div data-testid="test" className='container'>
      <div className='infoContainer'>
        <div className='titleContainer'>
          <h3 className='title'>About this page</h3>
        </div>
        <div className={style.content}>
          <div className={style.containerImg}>
            <img className={`${style.img} ${style.floatRight}`} src={img} alt="Earth img" />
          </div>
          <p>This page is an Individual Project for SoyHenry's bootcamp.</p>
          <p> Here you can find information about all countries in the world, such as the population, touristic activities you can do there, and a simple trivia game about capitals of all countries in the world.</p>
          <p>To create this page, I had to follow a readme with those rules:</p>
          <ul >
            <li className={style.list}>
              <p>Use the <a className={style.link} href="https://restcountries.com/" target='_blank' rel='noreferrer' >API Restcountries.</a></p>
            </li>
            <li className={style.list}>
              <p>Save the information in a database.</p>
            </li>
            <li className={style.list}>
              <p>Display some information about countries in the home page.</p>
            </li>
            <li className={style.list}>
              <p>Add filters such as search by name, order alphabetically, etc.</p>
            </li>
            <li className={style.list}>
              <p>Create touristic activities you can do in one or more countries through a form and store the information in a database</p>
            </li>
            <li className={style.list}>
              <p>Show details about each country.</p>
            </li>
            <li className={style.list}>
              <p>Use vanilla CSS.</p>
            </li>

          </ul>
          <div className={style.containerTechs}>
            <h4 className={style.title}>Technologies</h4>
            <div className={style.containerAllIcons}>
              <div className={style.iconContainer}>
                <svg width="48px" height="48px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" /><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z" /><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z" /><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z" /></svg>
                <p>HTML5</p>
              </div>
              <div className={style.iconContainer}>
                <svg width="48px" height="48px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z" /><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z" /><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z" /><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z" /></svg>
                <p>CSS3</p>
              </div>
              <div className={style.iconContainer}>
                <i className={`fa-brands fa-react ${style.faReact}`}></i>
                <p>React</p>
              </div>
              <div className={style.iconContainer}>
                <svg width="48px" height="48px"><path fill="#7e57c2" d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z" /><path fill="#7e57c2" d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z" /><path fill="#7e57c2" d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z" /></svg>
                <p>Redux</p>
              </div>
              <div className={style.iconContainer}>
                <svg width="48px" height="48px" viewBox="0 0 2249 2249"><path d="m1068.3 1214.8v-292.4l-253.2-146.1-253.2 146.1v292.4l253.2 146.2z" fill="#2E7D32" /><path d="m2065.4 1170.4 165 95.3-165 95.3-253.2-146.2v-292.3l253.2-146.2 153.4 88.6c15.6 65.8 25.1 132.9 28.6 200.5l-93.8 54.2v-101.8l-88.2-50.9-88.2 50.9v101.8z" fill="#37474F" /><path d="m2114.6 1097v-56.8l-49.1-28.4-49.2 28.4v56.8l49.2 28.4z" fill="#4CAF50" /><path d="m442.3 922.5v385.5l-168.9-96.3v-197.7l-84.3-48.7-84.3 48.7v197.6l-95.9 54.7c-5.9-47-8.9-94.4-8.9-141.8 0-88 10.1-173.7 29.2-255.9l159.9-92.3z" fill="#37474F" /><path d="m815 776.2 253.2 438.5-253.2 146.2-253.1-438.5z" fill="#4CAF50" /><path d="m561.9 1214.8 86.9-141.8-86.9-150.6z" fill="#388E3C" /><path d="m983.8 1068.6 84.4-146.2-253.1-146.1z" fill="#388E3C" /><path d="m1522.3 437.4v387.9l-84.9-49-253.2 146.2v292.4l253.2 146.2 253.2-146.2v-687.4zm-.5 679.9-84.4 48.7-84.4-48.7v-97.4l84.4-48.7 84.4 48.7z" fill="#37474F" /><g fill="#4CAF50"><path d="m1239.4 1575.7s-5-42.7-50.7-42.7-77 6-77 31.3 88.9 25.3 122.7 35.3c33.8 9.9 63.6 35.8 48.7 81.5s-60.6 50.7-131.2 50.7-86.5-58.6-86.5-81.5h39.8s-5 35.8 41.7 41.7 91.4 9.3 97.4-26.8c8-47.7-151.1-23.9-165-70.6-11.8-39.5-5-91.4 74.5-99.4s123.2 27.2 123.2 79.5z" /><path d="m855.3 1762 87.9 50.7c44.2 25.5 99.4-6.4 99.4-57.4v-252.6h-35.8v242.6c0 27.8-30.1 45.3-54.3 31.3l-61.3-35.4v-258.9l224.2-129.4 224.2 129.4v258.9l-224.2 129.4-64.6-37.3-42.2 17 106.8 61.6 260-150.1v-300.2l-260-150.1-260 150.1z" /></g></svg>
                <p>NodeJS</p>
              </div>
              <div className={style.iconContainer}>
                <svg width="120" height="40"><path fill='#fff' d="M40 41.753V18.708h1.25v3.625a4.74 4.74 0 0 0 .408-.511c1.044-2.166 3.246-3.533 5.65-3.506 2.85-.085 5.166.97 6.527 3.506a11.27 11.27 0 0 1 .272 10.331c-1.268 2.842-4.4 4.255-7.753 3.736a6.27 6.27 0 0 1-5.004-3.302v9.165zm1.25-14.893l.28 2.706c.494 3.08 2.315 4.9 5.174 5.242a5.88 5.88 0 0 0 6.459-3.736c1.112-2.65 1.03-5.65-.22-8.238a5.76 5.76 0 0 0-6.068-3.353 5.61 5.61 0 0 0-5.012 4.144 28.62 28.62 0 0 0-.613 3.234zm39.498 3.132a6.74 6.74 0 0 1-6.587 5.957c-5.242.264-7.702-3.217-8.093-7.234a11.59 11.59 0 0 1 1.021-6.383 7.12 7.12 0 0 1 7.412-3.974 6.81 6.81 0 0 1 6.042 5.183 34.97 34.97 0 0 1 .587 3.83H67.363c-.255 3.642 1.702 6.57 4.476 7.276 3.455.85 6.408-.647 7.48-3.932.238-.843.672-.962 1.438-.723zm-13.395-3.787h12.314c-.077-3.88-2.493-6.7-5.77-6.732-3.7-.06-6.383 2.647-6.544 6.732zm15.94 3.872H84.5a4.84 4.84 0 0 0 2.842 4.17 7.43 7.43 0 0 0 6.451-.17 2.9 2.9 0 0 0 1.702-2.851 2.63 2.63 0 0 0-1.77-2.63c-1.328-.494-2.74-.766-4.093-1.2a30 30 0 0 1-4.119-1.506c-2.18-1.064-2.315-5.208.153-6.52a8.69 8.69 0 0 1 8.306-.128c1.594.88 2.475 2.657 2.213 4.46H95.15c0-.05-.094-.094-.094-.145-.128-3.3-2.902-4.332-5.88-4.042-.9.1-1.753.372-2.553.774a2.55 2.55 0 0 0-1.48 2.553 2.55 2.55 0 0 0 1.702 2.4c1.3.477 2.68.783 4.025 1.157l3.25.85a3.84 3.84 0 0 1 2.638 3.464c.26 1.745-.63 3.46-2.204 4.255-2.842 1.608-7.523 1.183-9.608-.85-1.067-1.073-1.662-2.53-1.65-4.042zm28.78-6.374h-1.132c0-.153-.06-.3-.077-.417a3.7 3.7 0 0 0-3.013-3.557 7.43 7.43 0 0 0-4.774.23 2.9 2.9 0 0 0-2.102 2.766 2.67 2.67 0 0 0 2.042 2.689l5.174 1.328a14.39 14.39 0 0 1 1.65.502c1.65.6 2.77 2.132 2.82 3.883a4.25 4.25 0 0 1-2.6 4.04 9.47 9.47 0 0 1-7.659.077 5.31 5.31 0 0 1-3.2-5.157h1.106c.416 2.005 1.793 3.675 3.682 4.465s4.046.596 5.764-.516a3.04 3.04 0 0 0 1.634-2.842 2.63 2.63 0 0 0-1.796-2.613c-1.328-.494-2.74-.757-4.093-1.2a30.15 30.15 0 0 1-4.144-1.489c-2.128-1.047-2.298-5.157.128-6.468a8.57 8.57 0 0 1 8.442-.094 4.45 4.45 0 0 1 2.136 4.366zm-74.13 11.83a1.95 1.95 0 0 1-2.417-.919l-4.4-6.085-.638-.85-5.106 6.944a1.87 1.87 0 0 1-2.298.902l6.578-8.825-6.12-7.974c.908-.328 1.92.028 2.425.85l4.56 6.16 4.587-6.136a1.83 1.83 0 0 1 2.281-.851L35.02 21.9l-3.217 4.187a.85.85 0 0 0 0 1.268l6.127 8.178zm27.93-16.892v1.2a6.17 6.17 0 0 0-6.57 6.374q0 4.204 0 8.408v.953h-1.217v-16.86h1.2v3.455c1.472-2.52 3.744-3.455 6.595-3.523zM7.333 26.59l.536-2.647c1.472-5.234 7.472-7.412 11.6-4.17 2.417 1.898 3.02 4.587 2.902 7.617H8.754c-.22 5.412 3.685 8.68 8.68 7.012 1.646-.6 2.885-1.968 3.293-3.668.264-.85.7-.996 1.498-.75a6.91 6.91 0 0 1-3.302 5.047 8 8 0 0 1-9.319-1.191c-1.216-1.367-1.95-3.095-2.093-4.92 0-.3-.1-.58-.17-.85q-.01-.757-.01-1.48zm1.438-.366h12.314c-.077-3.923-2.553-6.706-5.855-6.732-3.676-.05-6.306 2.672-6.468 6.715z" /></svg>
                <p>ExpressJS</p>
              </div>
              <div className={style.iconContainer}>
                <svg width="120" height="60"><style></style><path fill='#2f406a' d="M31.554 23.517v12.9L20.59 42.855l-.1.092v4.866l.1.092 15.435-8.916V21.01h-.147l-4.352 2.433v.1" className="D" /><path d="M9.59 36.52L20.61 42.9v5.004L5.046 38.952V21.048h.156l4.343 2.525.046.147v12.855" fill='#2379bd' className="E" /><path d="M9.59 23.692L5 21.048l15.554-8.952 15.472 8.916-4.472 2.507-11.018-6.27-10.963 6.427" fill='#03afef' className="F" /><path d="M20.398 35.04l-.12-.12v-4.84l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553" fill='#2f406a' className="D" /><path d="M16.018 32.654v-5.188h.12l4.224 2.46v5.124l-4.38-2.397" fill='#2379bd' className="E" /><path d="M20.325 24.922l-4.306 2.553L20.398 30l4.306-2.516-4.38-2.59" fill='#03afef' className="F" /><path d="M15.036 38.21l-.12-.12V33.24l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553" fill='#2f406a' className="D" /><path d="M10.656 35.812v-5.188h.12L15 33.085v5.124l-4.343-2.397" fill='#2379bd' className="E" /><path d="M14.972 28.08l-4.316 2.543 4.38 2.553 4.306-2.516-4.38-2.59" fill='#03afef' className="F" /><path d="M26.146 38.328l-.12-.12V33.36l.12-.064v-.12l4.15-2.424h.13v4.995L26.12 38.3" fill='#2f406a' className="D" /><path d="M21.766 35.932v-5.188h.138l4.224 2.46v5.124l-4.38-2.397" fill='#2379bd' className="E" /><path d="M26.073 28.164l-4.306 2.553 4.38 2.553 4.306-2.516-4.38-2.59" fill='#03afef' className="F" /><path d="M20.784 41.487l-.12-.12V36.52l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553" fill='#2f406a' className="D" /><path d="M16.395 39.1v-5.18h.12l4.224 2.46v5.124L16.395 39.1" fill='#2379bd' className="E" /><path d="M20.7 31.36l-4.316 2.553 4.39 2.516 4.306-2.516-4.38-2.553" fill='#03afef' className="F" /><path d="M20.398 28.164l-.12-.12v-4.83l.12-.064v-.12l4.15-2.424h.13v4.995l-4.28 2.562" fill='#2f406a' className="D" /><path d="M16.018 25.785v-5.188h.12l4.224 2.46v5.105l-4.38-2.397" fill='#2379bd' className="E" /><path d="M20.325 18.063l-4.306 2.553 4.38 2.553 4.306-2.516-4.38-2.59" fill='#03afef' className="F" /><path d="M15.036 31.33l-.12-.12v-4.885l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553" fill='#2f406a' className="D" /><path d="M10.656 28.944v-5.188h.12L15 26.217v5.124l-4.343-2.397" fill='#2379bd' className="E" /><path d="M14.972 21.213l-4.316 2.543 4.38 2.57 4.306-2.516-4.38-2.59" fill='#03afef' className="F" /><path d="M26.146 31.45l-.12-.12v-4.84l.12-.064v-.12l4.15-2.424h.13v4.995l-4.306 2.553" fill='#2f406a' className="D" /><path d="M21.766 29.082v-5.206h.138l4.205 2.452v5.124l-4.343-2.37" fill='#2379bd' className="E" /><path d="M26.073 21.332l-4.306 2.553 4.38 2.553 4.306-2.516-4.38-2.59" fill='#03afef' className="F" /><path d="M20.784 34.59l-.12-.12v-4.82l.12-.064v-.12l4.15-2.424h.13v4.995l-4.28 2.553" fill='#2f406a' className="D" /><path d="M16.395 32.222v-5.188h.12l4.224 2.46v5.096l-4.343-2.37" fill='#2379bd' className="E" /><path d="M20.7 24.49l-4.316 2.543 4.38 2.553 4.306-2.516-4.37-2.58" fill='#03afef' className="F" /><path d="M43.776 23.17q-2.892 0-2.892 2.176c-.086.634.165 1.267.66 1.67a8.87 8.87 0 0 0 2.7.918 6.86 6.86 0 0 1 2.883 1.148 2.98 2.98 0 0 1 .845 2.378q0 4.104-4.26 4.104a23.96 23.96 0 0 1-3.526-.33l-.698-.092.156-1.23c1.323.197 2.657.314 3.994.35q2.856 0 2.856-2.68a1.84 1.84 0 0 0-.624-1.58 6.14 6.14 0 0 0-2.34-.8c-1.146-.173-2.24-.596-3.205-1.24-.702-.655-1.06-1.597-.973-2.553q0-3.6 4.297-3.6c1.132.014 2.26.1 3.38.285l.652.1-.064 1.285a36.25 36.25 0 0 0-3.838-.321zM56.85 34.215l.56-.055v1.14a27.74 27.74 0 0 1-3.765.312 3.39 3.39 0 0 1-2.947-1.203c-.666-1.13-.97-2.438-.872-3.746q0-5.068 4.03-5.068a3.67 3.67 0 0 1 2.938 1.074 5.08 5.08 0 0 1 .964 3.425l-.046 1.093H51.33a3.97 3.97 0 0 0 .578 2.37 2.37 2.37 0 0 0 2.011.771q1.442 0 2.93-.1zM56.327 30c.078-.875-.12-1.75-.57-2.507-.46-.522-1.142-.795-1.836-.735a2.37 2.37 0 0 0-1.928.771 3.91 3.91 0 0 0-.707 2.47zm6.896 5.6a3.23 3.23 0 0 1-2.755-1.139 6.7 6.7 0 0 1-.836-3.856c-.127-1.37.227-2.74 1-3.875q1-1.157 3.544-1.157l3.223.193v13.92h-1.423v-4.72c-.86.416-1.8.633-2.755.634zm.918-8.778c-.92-.115-1.84.228-2.46.918a5.04 5.04 0 0 0-.643 2.883 5.64 5.64 0 0 0 .533 2.837 1.93 1.93 0 0 0 1.781.854c.76-.001 1.514-.145 2.222-.422l.35-.138V26.94q-1.166-.1-1.78-.1zm12.047-1.055h1.45v9.64h-1.45v-.67a5.51 5.51 0 0 1-2.865.863q-1.965 0-2.617-1.02c-.53-1.186-.75-2.488-.643-3.783v-5.032h1.423v5.013a7.09 7.09 0 0 0 .367 2.819q.367.716 1.662.716c.438-.002.874-.063 1.295-.184a6.01 6.01 0 0 0 1-.358l.35-.174zm10.78 8.448l.56-.055v1.14a27.74 27.74 0 0 1-3.765.312 3.39 3.39 0 0 1-2.947-1.203c-.666-1.13-.97-2.438-.872-3.746q0-5.068 4.03-5.068c1.084-.085 2.15.315 2.9 1.093a5.08 5.08 0 0 1 .964 3.425l-.073 1.102H81.45a3.97 3.97 0 0 0 .578 2.37 2.37 2.37 0 0 0 2.011.771q1.442-.028 2.93-.138zM86.445 30c.078-.875-.12-1.75-.57-2.507-.46-.522-1.142-.795-1.836-.735a2.37 2.37 0 0 0-1.928.771 3.89 3.89 0 0 0-.68 2.47zm3.82 5.408V21.562h1.423v13.846zm4.333-11.835V21.9h1.442v1.662zm0 11.817v-9.623h1.442v9.64zm3.645-8.328v-1.295h7.153v1.295l-5.4 7.06h5.4v1.295h-7.153v-1.304l5.38-7.052zm15.857 7.153l.56-.055v1.14a27.74 27.74 0 0 1-3.765.312 3.39 3.39 0 0 1-2.947-1.203c-.666-1.13-.97-2.438-.872-3.746q0-5.068 4.03-5.068c1.084-.085 2.15.315 2.9 1.093a5.08 5.08 0 0 1 .964 3.425l-.073 1.102h-6.326a3.97 3.97 0 0 0 .578 2.37 2.37 2.37 0 0 0 2.011.771q1.442-.028 2.93-.138zM113.577 30c.078-.875-.12-1.75-.57-2.507-.46-.522-1.142-.795-1.836-.735a2.37 2.37 0 0 0-1.928.771c-.492.725-.725 1.596-.66 2.47z" fill='#2f406a' className="D" /></svg>
                <p>Sequelize</p>
              </div>
              <div className={style.iconContainer}>
                <svg width="60" height="60" viewBox="0 0 256 264" preserveAspectRatio="xMinYMin meet"><path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351" /><path d="M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002" fill="#336791" /><path d="M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225" fill="#FFF" /><path d="M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z" fill="#FFF" /></svg>
                <p>PostgreSQL</p>
              </div>

            </div>
          </div>
          <div className={style.aboutMeContainer}>
            <h4 className={style.title}>About me</h4>
            <div className={style.containerImg}>
              <img className={`${style.img} ${style.floatLeft}`} src={programmer} alt="" />
            </div>
            <p>Hello World!</p>
            <p>I'm Pablo Farias an apassionate about coding and technologies, with one goal: become a FullStack Developer.</p>
            <p>To any feedback about this page, feel free to contact me :)</p>
            <p><a className={style.link} href="https://www.linkedin.com/in/pablo-farias-gallardo-3355a8b8/" target='_blank' rel='noreferrer'>My Linkedin</a></p>
            <p><a className={style.link} href="https://github.com/pablofarias1987" target='_blank' rel='noreferrer'>GitHub Repositore</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About