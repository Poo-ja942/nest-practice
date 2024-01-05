import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ValidationPipe } from "@nestjs/common";
import Helmet from "helmet";
import * as compression from "compression";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    /* Enables request from given domains and types */
    cors: {
      origin: process.env.CORS_ORIGIN,
      methods: ["GET", "POST", "PATCH", "OPTIONS"],
    },
    /* Whether to use underlying platform body parser */
    bodyParser: true,
  });

  /* Activate request validation at global level */
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  /* Setup HTTP security headers */
  app.use(Helmet());

  /* Compress files running through Express server */
  app.use(compression());

  await app.listen(3000);
}
bootstrap();
