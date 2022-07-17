import { NestFactory } from "@nestjs/core";
import { AppModule } from "./application.module";

const init = async () => {
  const server = await NestFactory.create(AppModule);

  await server.listen(3000);
};

init();
