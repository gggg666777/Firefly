import type { AnnouncementConfig } from "../types/announcementConfig";
import data from "../data/announcement.json";

// 公告内容由 src/data/announcement.json 提供
// 可在 /admin 后台的「公告」里直接编辑，改完 Publish 即生效
export const announcementConfig = data as AnnouncementConfig;
