import {
  GithubPath,
  InstagramPath,
  LinkedInPath,
  TwitterPath,
} from "../Data/constants";

export const redirect = (link: string) => {
  switch (link) {
    case "Github":
      window.open(GithubPath, "_blank", "noreferrer");
      break;
    case "LinkedIn":
      window.open(LinkedInPath, "_blank", "noreferrer");
      break;
    case "Instagram":
      window.open(InstagramPath, "_blank", "noreferrer");
      break;
    case "Twitter":
      window.open(TwitterPath, "_blank", "noreferrer");
      break;
  }
};
