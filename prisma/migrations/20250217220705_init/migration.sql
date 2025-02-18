-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title_en" TEXT NOT NULL,
    "title_es" TEXT NOT NULL,
    "description_en" TEXT NOT NULL,
    "description_es" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "linkGithub" TEXT NOT NULL,
    "linkWeb" TEXT NOT NULL,
    "icons" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
