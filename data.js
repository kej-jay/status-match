// Path data as a plain JavaScript variable
const pathData = [
  {
    "from": "ITA Airways Club Plus",
    "to": "Miles & More Frequent Traveller",
    "link": "https://lufthansa.statusmatch.com/faq/",
    "comment": ""
  },
  {
    "from": "ITA Airways Club Premium",
    "to": "Miles & More Senator",
    "link": "https://lufthansa.statusmatch.com/faq/",
    "comment": ""
  },
  {
    "from": "ITA Airways Club Executive",
    "to": "Miles & More Senator",
    "link": "https://lufthansa.statusmatch.com/faq/",
    "comment": ""
  },
  {
    "from": "Marriott Bonvoy Rewards Member",
    "to": "Wyndham Rewards GOLD",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Marriott Bonvoy Silver Elite",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Marriott Bonvoy Gold Elite",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Marriott Bonvoy Platinum Elite",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Marriott Bonvoy Titanium Elite",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Marriott Bonvoy Ambassador Elite",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Hilton Honors Member",
    "to": "Wyndham Rewards GOLD",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Hilton Honors Silver",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Hilton Honors Gold",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Hilton Honors Diamond",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Choice Privileges Member",
    "to": "Wyndham Rewards GOLD",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Choice Privileges Gold",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Choice Privileges Platinum",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Choice Privileges Diamond",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Best Western Rewards Blue",
    "to": "Wyndham Rewards GOLD",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Best Western Rewards Gold",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Best Western Rewards Platinum",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Best Western Rewards Diamond",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Best Western Rewards Diamond Select",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "World of Hyatt Member",
    "to": "Wyndham Rewards GOLD",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "World of Hyatt Discoverist",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "World of Hyatt Explorist",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "World of Hyatt Globalist",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "IHG One Rewards Club Member",
    "to": "Wyndham Rewards GOLD",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "IHG One Rewards Silver Elite",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "IHG One Rewards Gold Elite",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "IHG One Rewards Platinum Elite",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "IHG One Rewards Diamond Elite",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Radisson Rewards Club",
    "to": "Wyndham Rewards GOLD",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Radisson Rewards Premium",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Radisson Rewards VIP",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Omni Select Guest Insider",
    "to": "Wyndham Rewards GOLD",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Omni Select Guest Champion",
    "to": "Wyndham Rewards PLATINUM",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Omni Select Guest Icon",
    "to": "Wyndham Rewards DIAMOND",
    "link": "https://help.wyndhamrewards.com/s/status-match?language=en_US",
    "comment": ""
  },
  {
    "from": "Miles & More Base",
    "to": "SIXT Express",
    "link": "https://www.sixt.com/partners/milesandmore/",
    "comment": "Skip rental formalities. Rent a car simply and quickly. Collect valuable miles."
  },
  {
    "from": "Miles & More Frequent Traveller",
    "to": "SIXT Gold Status",
    "link": "https://www.sixt.com/partners/milesandmore/",
    "comment": "Up to 10% discount on SIXT rent a car or SIXT rent a truck. All advantages of the SIXT Express Status. Preferred Mobility: Forgot to book your rental car? No problem. SIXT prioritizes your reservation when calling up to 48 hours prior to your rental start. For your rental with SIXT, collect valuable miles."
  },
  {
    "from": "Miles & More Senator",
    "to": "SIXT Platinum Status",
    "link": "https://www.sixt.com/partners/milesandmore/",
    "comment": "Up to 15% discount on SIXT rent a car or SIXT rent a truck. Free upgrade to the next car group. All advantages of the SIXT Gold Status. Preferred Mobility: Forgot to book your rental car? No problem. SIXT prioritizes your reservation when calling up to 24 hours prior to your rental start. For your rental with SIXT, collect valuable miles."
  },
  {
    "from": "Miles & More HON Circle",
    "to": "Marriott Bonvoy Gold Elite",
    "link": "https://travel-partner.marriott.com/miles-and-more/en-gb",
    "comment": "Receive complimentary Marriott Bonvoy Gold Elite status"
  },
  {
    "from": "Miles & More Senator",
    "to": "Marriott Bonvoy Gold Elite",
    "link": "https://travel-partner.marriott.com/miles-and-more/en-gb",
    "comment": "Receive complimentary Marriott Bonvoy Gold Elite status"
  },
  {
    "from": "Miles & More Frequent Traveller",
    "to": "Marriott Bonvoy Silver Elite",
    "link": "https://travel-partner.marriott.com/miles-and-more/en-gb",
    "comment": "Receive complimentary Marriott Bonvoy Silver Elite status (with Lufthansa Miles & More Credit Card issued by Deutsche Bank AG)"
  },
  {
    "from": "Miles & More Frequent Traveller",
    "to": "Marriott Bonvoy Gold Elite",
    "link": "https://travel-partner.marriott.com/miles-and-more/en-gb",
    "comment": "Accelerate to Marriott Bonvoy Gold Elite status (with Lufthansa Miles & More Credit Card issued by Deutsche Bank AG)"
  },
  {
    "from": "Miles & More Base",
    "to": "Marriott Bonvoy Silver Elite",
    "link": "https://travel-partner.marriott.com/miles-and-more/en-gb",
    "comment": "Receive complimentary Marriott Bonvoy Silver Elite status (with Lufthansa Miles & More Credit Card issued by Deutsche Bank AG)"
  },
  {
    "from": "Miles & More Base",
    "to": "Marriott Bonvoy Gold Elite",
    "link": "https://travel-partner.marriott.com/miles-and-more/en-gb",
    "comment": "Accelerate to Marriott Bonvoy Gold Elite status (with Lufthansa Miles & More Credit Card issued by Deutsche Bank AG)"
  },
  {
    "from": "Miles & More HON Circle member",
    "to": "Miles & More Senator",
    "link": "",
    "comment": "HON Circle includes all Senator benefits"
  },
  {
    "from": "Miles & More Senator",
    "to": "Miles & More Frequent Traveller",
    "link": "",
    "comment": "Senator includes all Frequent Traveller benefits"
  },
  {
    "from": "Miles & More Frequent Traveller",
    "to": "Miles & More Base",
    "link": "",
    "comment": "Frequent Traveller includes all Base benefits"
  },
  {
    "from": "Wyndham Rewards DIAMOND",
    "to": "Wyndham Rewards PLATINUM",
    "link": "",
    "comment": "Diamond includes all Platinum benefits"
  },
  {
    "from": "Wyndham Rewards PLATINUM",
    "to": "Wyndham Rewards GOLD",
    "link": "",
    "comment": "Platinum includes all Gold benefits"
  },
  {
    "from": "Wyndham Rewards GOLD",
    "to": "Wyndham Rewards BLUE",
    "link": "",
    "comment": "Gold includes all Blue benefits"
  },
  {
    "from": "SIXT Platinum Status",
    "to": "SIXT Gold Status",
    "link": "",
    "comment": "Platinum includes all Gold benefits"
  },
  {
    "from": "SIXT Gold Status",
    "to": "SIXT Express",
    "link": "",
    "comment": "Gold includes all Express benefits"
  }
];
