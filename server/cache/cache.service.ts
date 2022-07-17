import { CACHE_MANAGER, Controller, Get, Inject } from "@nestjs/common";
import type { Cache } from "cache-manager";

@Controller()
export class CacheController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get("/cache")
  async getCache(): Promise<string> {
    const savedTime = await this.cacheManager.get<number>("time");
    if (savedTime) {
      return "saved time : " + savedTime;
    }
    const now = new Date().getTime();
    await this.cacheManager.set<number>("time", now);
    return "save new time : " + now;
  }
}
