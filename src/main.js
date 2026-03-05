import { createApp } from 'vue';
import App from './App.vue';

// Importa el CSS global
import './assets/css/main.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import { faFilePdf, faEnvelope, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faPhp, faPython, faJs, faLaravel, faVuejs, faReact, faGit, faDocker, faGitlab, faBitbucket, faLinux, faWindows, faUbuntu, faDebian, faCentos, faAws } from '@fortawesome/free-brands-svg-icons';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(faFilePdf, faEnvelope, faDatabase, faGithub, faLinkedin, faPhp, faPython, faJs, faLaravel, faVuejs, faReact, faGit, faDocker, faGitlab, faBitbucket, faLinux, faWindows, faUbuntu, faDebian, faCentos, faAws );

//createApp(App).mount('#app');


const app = createApp(App);

/* globally register the font-awesome-icon component */
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');