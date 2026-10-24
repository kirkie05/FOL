# Roles and permissions

- Super Admin: all operational configuration, role assignment, audit review, and emergency administration.
- Church Admin: membership and normal church operations; no implicit finance access.
- Pastor: pastoral records, prayer requests, and authorized oversight.
- Ministry Leader: assigned ministry applications, members, and internal announcements only.
- Finance Admin: giving transactions and finance reports only.
- Community Moderator: reports, posts, comments, pins, and posting restrictions.
- Member: approved member application and owned records.
- Pending Member: profile completion and approval status only.
- Visitor: public forms and pages only.

Custom claims are changed only by privileged Functions. Firestore status records remain the operational source of truth and every sensitive backend repeats the authorization check.
