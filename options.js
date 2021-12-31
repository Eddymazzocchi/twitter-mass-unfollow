import * as shared from "./shared.js";

const form = document.querySelector("form");

shared.storage.get(shared.whiteListedUsersKey).then((whitelistedUsers) => {
  if (!whitelistedUsers) return;
  document.querySelector("textarea").value = whitelistedUsers.join(", ");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let whitelistedUsers = document.querySelector("textarea").value;
  whitelistedUsers = whitelistedUsers
    .split(",")
    .map((username) => username.trim());
  shared.storage.set(shared.whiteListedUsersKey, whitelistedUsers);
});
