class friend {
  name: string;
  namelowercase: string;
  avatar: string | string[];
  avatars?: string[];
  description: string;
  socials?: social[] 
}

class social {
  title: string;
  url: string
  icon?: string
  textColor?: string
  bgColor?: string
  iconCss?: string
}

