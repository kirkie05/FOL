# Firestore data model

Primary collections: `users`, `memberProfiles`, `memberPrivateData`, `memberships`, `ministries`, `ministryMemberships`, `ministryApplications`, `visitors`, `followUps`, `attendance`, `serviceInstances`, `events`, `eventRegistrations`, `sermons`, `communityPosts`, `postComments`, `postReactions`, `postReports`, `notifications`, `bibleBookmarks`, `bibleHighlights`, `bibleNotes`, `readingPlans`, `readingProgress`, `prayerRequests`, `testimonies`, `donations`, `paymentTransactions`, `givingCategories`, `auditLogs`, and `systemSettings`.

Critical writes use deterministic IDs or transactions. Attendance uses `{serviceInstanceId}_{subjectId}`. Payment transactions use the provider reference. Reactions should use `{postId}_{userId}_{reaction}`. All records use server timestamps and paginated queries described in `firestore.indexes.json`.
