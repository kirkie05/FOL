export type SermonVideo = {
  id: string;
  title: string;
  kind: "message" | "live";
  published: string;
};

export const youtubeChannel = {
  id: "UCVf6XCgB8J2O1UOA0cWpRhQ",
  handle: "@RCCGFOL",
  url: "https://www.youtube.com/@RCCGFOL",
  uploadsPlaylist: "UUVf6XCgB8J2O1UOA0cWpRhQ",
} as const;

// Verified against the public RCCGFOL Videos and Live tabs on 24 October 2026.
// The channel archive player below this catalogue exposes every public upload.
export const sermonVideos: SermonVideo[] = [
  { id: "BFUBLZbAFiU", title: "When Sisters Pray — Exceeding Abundantly", kind: "live", published: "Streamed 1 hour ago" },
  { id: "zmpOe7bppJM", title: "Now Faith Is — Part II", kind: "message", published: "8 days ago" },
  { id: "FUADmkxeRi8", title: "Bible Study — Now Faith Is", kind: "live", published: "Streamed 3 days ago" },
  { id: "SO_DTD0DztA", title: "Second Service — Sekere Sunday Youth Service", kind: "live", published: "Streamed 5 days ago" },
  { id: "y5baEFUF4Zs", title: "First Service — Sekere Sunday Word Service", kind: "live", published: "Streamed 6 days ago" },
  { id: "QVNZj1mThy4", title: "The Biblical Foundation of Marriage", kind: "message", published: "3 weeks ago" },
  { id: "qYxtDFZX4xw", title: "How to Build a Happy Home", kind: "message", published: "3 weeks ago" },
  { id: "zP9K53k9Hc8", title: "Bible Study — Now Faith Is", kind: "live", published: "Streamed 10 days ago" },
  { id: "N-BBRlGzbpM", title: "Word Service — Now Faith Is", kind: "live", published: "Streamed 12 days ago" },
  { id: "0Jl6LHeOzFs", title: "Opportunity in the Agriculture Sector", kind: "live", published: "Streamed 13 days ago" },
  { id: "UW4ObS6kq3A", title: "Praise for the Lord's Mercies", kind: "message", published: "4 weeks ago" },
  { id: "as32egrv0O8", title: "AI & You — Turning Knowledge into Productivity", kind: "message", published: "4 weeks ago" },
  { id: "GBruJZwvRsQ", title: "Holy Communion Service — Now Faith Is", kind: "live", published: "Streamed 2 weeks ago" },
  { id: "hvf0dVW0msY", title: "Naija Thanksgiving Service — Now Faith Is", kind: "live", published: "Streamed 2 weeks ago" },
  { id: "bfK7MM8RHmk", title: "Dance & Rejoice", kind: "message", published: "1 month ago" },
  { id: "rxJeXNC7D3s", title: "Old-school Gospel Vibes", kind: "message", published: "1 month ago" },
  { id: "MEG0hJ4lcLQ", title: "Zion's Hill — A Song of Hope, Faith & Victory", kind: "message", published: "1 month ago" },
  { id: "eax18P2Pd3U", title: "Financial Freedom Through Entrepreneurship", kind: "message", published: "1 month ago" },
  { id: "Mnz5jEX8PVU", title: "Holy Ghost Tuesday — Pause, Look Back and Say Thank You", kind: "live", published: "Streamed 3 weeks ago" },
  { id: "iNzZcHkjLy4", title: "Special Relationship Service — How to Build a Happy Home", kind: "live", published: "Streamed 3 weeks ago" },
  { id: "7tcjCJpqf8o", title: "Divine Lifting — When God Changes Your Level", kind: "message", published: "1 month ago" },
  { id: "A3a1vB-gwwk", title: "Dealing with Sibling Rivalry", kind: "message", published: "1 month ago" },
  { id: "Sfz2LO26gyY", title: "Bible Study — Pause, Look Back and Say Thank You", kind: "live", published: "Streamed 1 month ago" },
  { id: "kRz-5njuZa0", title: "Youth Service — Pause, Look Back and Say Thank You", kind: "live", published: "Streamed 1 month ago" },
];
