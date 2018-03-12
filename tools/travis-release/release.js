"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
function Main() {
    return __awaiter(this, void 0, void 0, function* () {
        const travisTag = process.env["TRAVIS_TAG"];
        if (travisTag == null) {
            return undefined;
        }
        const packageJsonPath = path.join(process.cwd(), "./package.json");
        const packageJsonContents = yield fs.readJson(packageJsonPath);
        const prereleaseTags = ["-alpha", "-beta", "-rc"];
        let isPrerelease = false;
        for (const tag of prereleaseTags) {
            if (packageJsonContents.version.indexOf(tag)) {
                isPrerelease = true;
                break;
            }
        }
        if (!isPrerelease) {
            return undefined;
        }
        // Pre-release
        if (packageJsonContents.publishConfig == null) {
            packageJsonContents.publishConfig = {};
        }
        // Add tag next
        packageJsonContents.publishConfig.tag = "next";
        yield fs.writeJson(packageJsonPath, packageJsonContents, { spaces: 4 });
    });
}
Main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVsZWFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlbGVhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFXN0I7O1FBQ0ksTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU1QyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ25FLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBZ0IsQ0FBQztRQUU5RSxNQUFNLGNBQWMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEQsSUFBSSxZQUFZLEdBQVksS0FBSyxDQUFDO1FBQ2xDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLEtBQUssQ0FBQztZQUNWLENBQUM7UUFDTCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUVELGNBQWM7UUFDZCxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QyxtQkFBbUIsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQzNDLENBQUM7UUFFRCxlQUFlO1FBQ2YsbUJBQW1CLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDL0MsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FBQTtBQUVELElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzLWV4dHJhXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmludGVyZmFjZSBQYWNrYWdlSnNvbiB7XHJcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XHJcbiAgICBwdWJsaXNoQ29uZmlnPzoge1xyXG4gICAgICAgIHRhZz86IHN0cmluZztcclxuICAgICAgICByZWdpc3RyeT86IHN0cmluZztcclxuICAgICAgICBhY2Nlc3M/OiBzdHJpbmc7XHJcbiAgICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBNYWluKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgdHJhdmlzVGFnID0gcHJvY2Vzcy5lbnZbXCJUUkFWSVNfVEFHXCJdO1xyXG5cclxuICAgIGlmICh0cmF2aXNUYWcgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGFja2FnZUpzb25QYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiLi9wYWNrYWdlLmpzb25cIik7XHJcbiAgICBjb25zdCBwYWNrYWdlSnNvbkNvbnRlbnRzID0gYXdhaXQgZnMucmVhZEpzb24ocGFja2FnZUpzb25QYXRoKSBhcyBQYWNrYWdlSnNvbjtcclxuXHJcbiAgICBjb25zdCBwcmVyZWxlYXNlVGFncyA9IFtcIi1hbHBoYVwiLCBcIi1iZXRhXCIsIFwiLXJjXCJdO1xyXG5cclxuICAgIGxldCBpc1ByZXJlbGVhc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGZvciAoY29uc3QgdGFnIG9mIHByZXJlbGVhc2VUYWdzKSB7XHJcbiAgICAgICAgaWYgKHBhY2thZ2VKc29uQ29udGVudHMudmVyc2lvbi5pbmRleE9mKHRhZykpIHtcclxuICAgICAgICAgICAgaXNQcmVyZWxlYXNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNQcmVyZWxlYXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmUtcmVsZWFzZVxyXG4gICAgaWYgKHBhY2thZ2VKc29uQ29udGVudHMucHVibGlzaENvbmZpZyA9PSBudWxsKSB7XHJcbiAgICAgICAgcGFja2FnZUpzb25Db250ZW50cy5wdWJsaXNoQ29uZmlnID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRhZyBuZXh0XHJcbiAgICBwYWNrYWdlSnNvbkNvbnRlbnRzLnB1Ymxpc2hDb25maWcudGFnID0gXCJuZXh0XCI7XHJcbiAgICBhd2FpdCBmcy53cml0ZUpzb24ocGFja2FnZUpzb25QYXRoLCBwYWNrYWdlSnNvbkNvbnRlbnRzLCB7IHNwYWNlczogNCB9KTtcclxufVxyXG5cclxuTWFpbigpO1xyXG4iXX0=