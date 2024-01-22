import {
  GithubPath,
  InstagramPath,
  LinkedInPath,
  TwitterPath,
  cloudinaryBaseURL,
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

export const linkExplorer = (link: string, isImage: boolean) => {
  isImage
    ? window.open(`${cloudinaryBaseURL}${link}`, "_blank", "noreferrer")
    : window.open(link, "_blank", "noreferrer");
};
