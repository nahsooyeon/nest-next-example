import { CacheModule, Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import Next from "next";
import { AppController } from "./app.controller";
import { BlogController } from "./blog/blog.controller";
import { BlogService } from "./blog/blog.service";
import * as redisStore from "cache-manager-ioredis";
import { CacheController } from "./cache/cache.service";

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: "127.0.0.1",
      port: 6379,
    }),
    RenderModule.forRootAsync(
      Next({
        dev: process.env.NODE_ENV !== "production",
        conf: { useFilesystemPublicRoutes: false }, // nextjs 디렉토리 주소로 라우팅하는 옵션 해제
      })
    ),
  ],
  controllers: [AppController, BlogController, CacheController],
  providers: [BlogService],
})
export class AppModule {}
