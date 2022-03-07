import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './footer.scss';

function Footer() {
  return (
    <footer>
      <p>Project by: Daniel Jackson</p>
      <div>
        <a href='https://github.com/daniel-jacks'><GitHubIcon /></a>
        <a href='https://www.linkedin.com/in/daniel-jacks/'><LinkedInIcon /></a>
      </div>
    </footer>
  )
}

export default Footer;