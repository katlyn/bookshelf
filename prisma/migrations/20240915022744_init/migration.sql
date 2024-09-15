-- CreateTable
CREATE TABLE "user" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
