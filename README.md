# FundRun

FunRun is an Progressive Web App that developed for PWA Online Hackathon 2017 (Thailand).

##About FunRun:

FundRun ก้าวคนละก้าว เป็น PWA ที่สนับสนุนการวิ่งมาราธอนการกุศลเพื่อนำเงินมาบริจาคช่วยเหลือโครงการต่างๆ โดย login เข้าสู่เว็บไซต์เพื่อเข้าร่วมวิ่งผ่าน account ของ facebook เมื่อ login เข้ามาแล้วจะมีเมนูดังต่อไปนี้ 
- Challenges เป็นเมนูที่แสดง event ต่างๆ ที่มีการจัดวิ่งมาราธอนการกุศลขึ้น โดยจะมี challenge กำหนดระยะทางการวิ่งต่างๆ ที่ให้เหล่านักวิ่งและผู้สนใจมาวิ่งรวมระยะทางให้ได้ตามกำหนด เมื่อได้ตามระยะทางตามกำหนด ผู้ที่ให้การสนับสนุน (สปอนเซอร์) ที่ได้กำหนด challenge ไว้ จะมอบเงินบริจาคตามกำหนด
- My Run จะเป็นการเก็บเมนู event ที่เราได้เข้าร่วมวิ่งไว้ โดยเราสามารถวิ่งต่อได้จากเมนูนี้   (ซึ่งถ้าเข้าเมนู Challenges ก็สามารถวิ่งต่อได้เช่นกัน) 
- ในหน้าเมนู Challenges และ My Run จะสรุประยะทางรวมที่ทุกคนช่วยกันวิ่ง และระยะทางการวิ่งของเจ้าของ account
- ในหน้า event การวิ่งจะดึงแผนที่จาก Google Map และแสดงการเคลื่อนที่ตามเส้นทางที่วิ่ง หากต้องการเริ่มวิ่งให้กด Start และหยุดการวิ่งโดยการกด Stop ในระหว่างการวิ่งจะมีการแสดงค่าของระยะทางที่เพิ่มขึ้น เวลาที่วิ่ง อัตราการวิ่ง และค่า Pace ตามลำดับ
- Logout ออกจากระบบ

## Preparation
1. Run `npm install -g @angular/cli` to install angular CLI.
2. Run `npm install` to install all dependencies.

## Development server

1. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment Steps

1. Run `ng build -prod` to build the project for production build.
2. Run `npm run sw` to build service worker.
3. Run `firebase deploy` for deploying to Firebase hosting.