import * as React from "react";

import { useBreakpoint } from "../../providers/breakpoint";

import DiscordIcon from "./assets/discord.svg";
import GithubIcon from "./assets/github.svg";
import TelegramIcon from "./assets/telegram.svg";
import TwitterIcon from "./assets/twitter.svg";
import BscscanIcon from "./assets/bscscan.svg";

const SocialIcons = ({ data }) => {
  const breakpoint = useBreakpoint();

  const getSocialSize = (offset = 0) => {
    if (breakpoint.xl) {
      return 31 + offset + "px"; // if 'xl' width
    }
    if (breakpoint.lg) {
      return 31 + offset + "px"; // if 'lg' width
    }
    if (breakpoint.md) {
      return 31 + offset + "px"; // if 'md' width
    }
    if (breakpoint.sm) {
      return 31 + offset + "px"; // if 'sm' width
    }
    if (breakpoint.xs) {
      return 31 + offset + "px"; // if 'xs' width
    }
    return 31 + offset + "px";
  };

  return (
    <div className="flex justify-center mt-4">
      <a href={data.twitterUrl}>
        <TwitterIcon fill="white" height={getSocialSize(-3)} className="mx-1" />
      </a>
      <a href={data.telegramUrl}>
        <TelegramIcon fill="white" height={getSocialSize()} className="mx-1" />
      </a>
      <a href={data.gitHubUrl}>
        <GithubIcon fill="white" height={getSocialSize()} className="mx-1" />
      </a>
      <a href={data.discordUrl}>
        <DiscordIcon fill="white" height={getSocialSize()} className="mx-1" />
      </a>
      <a href={data.bscscanUrl}>
        <BscscanIcon fill="white" height={getSocialSize()} width={getSocialSize(-6)} className="mx-1 ml-2" />
      </a>
    </div>
  );
};

export default SocialIcons;
