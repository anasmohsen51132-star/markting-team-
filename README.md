# AUTOFLOW — Full-Stack Platform

نفس الشكل والتصميم بتاع النسخة الأولى (dark navy + glassmorphism + circuit lines + دخول بسيريال + AR/EN)،
بس دلوقتي **Full Stack حقيقي**:

- **Backend:** Node.js + Express (شغال كـ Vercel Serverless Function)
- **Database:** PostgreSQL على Neon
- **Frontend:** HTML/CSS/JS عادي (بدون build step) — متزود على Vercel كـ static files
- **Auth:** جلسة حقيقية بتوكن JWT في httpOnly cookie (مفيش تخزين في المتصفح)، والسيرفر بيعمل rate-limit/lockout حقيقي على محاولات الدخول الفاشلة (مش الفرونت اند بس زي المرة اللي فاتت)

```
autoflow-fullstack/
├── api/index.js          ← Vercel serverless entry (بيلف الـ Express app)
├── src/
│   ├── app.js             ← إعداد Express + الراوترز
│   ├── db.js               ← اتصال PostgreSQL (pg Pool)
│   ├── middleware/auth.js  ← التحقق من الـ JWT وصلاحية الأدمن
│   ├── routes/auth.js      ← login / logout / me
│   ├── routes/members.js   ← إدارة أعضاء الفريق
│   └── routes/deals.js     ← إدارة الصفقات/العمولات
├── db/schema.sql            ← سكيمة الداتابيز
├── scripts/init-db.js       ← بيعمل create للجداول + بيانات تجريبية (seed)
├── scripts/dev-server.js    ← تشغيل محلي (npm run dev)
└── public/                  ← الفرونت اند (index.html + css/ + js/ + logo)
```

---

## 1) تجهيز قاعدة البيانات على Neon

1. اعمل حساب/مشروع على [neon.tech](https://neon.tech) (فيه Free Tier كفاية للبداية).
2. من الـ Dashboard خد الـ **Connection String** (لازم يحتوي على `?sslmode=require`).
3. هتستخدمه في المتغير `DATABASE_URL`.

---

## 2) التشغيل محليًا (اختياري بس قبل الـ deploy)

```bash
cd autoflow-fullstack
npm install
cp .env.example .env
```

افتح `.env` واملأ:
```
DATABASE_URL=postgres://...neon.tech/...?sslmode=require
JWT_SECRET=<قيمة عشوائية طويلة>
```

ولّد `JWT_SECRET` بالأمر ده:
```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

بعدين جهّز الجداول والبيانات التجريبية:
```bash
npm run db:init
```

وشغّل السيرفر:
```bash
npm run dev
```

افتح `http://localhost:4000` وجرّب بالسيريالات دي:
- **أدمن:** `0001`
- **تسويق:** `1001` (سارة) أو `1002` (عمر)

---

## 3) النشر (Deploy) على Vercel

1. ارفع المجلد ده على GitHub repo.
2. من [vercel.com](https://vercel.com) → **Add New Project** → اختار الـ repo.
3. Framework Preset خليه **Other** (مفيش build step مطلوب).
4. في **Environment Variables** ضيف:
   - `DATABASE_URL` = نفس الـ connection string من Neon
   - `JWT_SECRET` = نفس القيمة اللي ولّدتها فوق
   - `NODE_ENV` = `production`
5. اعمل Deploy.
6. أول مرة بس، شغّل السيد سكريبت مرة واحدة عشان يجهز الجداول والبيانات التجريبية على قاعدة بيانات Neon نفسها (مش المحلية):
   ```bash
   DATABASE_URL="<نفس قيمة Neon>" npm run db:init
   ```
   (تقدر تشغلها من جهازك، مش لازم من على Vercel.)

بعد كده الرابط بتاع Vercel هيشتغل بنفس المنصة، والداتا هتتخزن فعليًا على Neon مش في المتصفح.

---

## 4) نقاط أمان مهمة قبل ما تديه لفريق حقيقي

- **غيّر السيريال الافتراضي بتاع الأدمن (`0001`)** فورًا بعد أول تشغيل — روح على قاعدة البيانات وعدّله يدويًا، أو أضف زرار تغيير سيريال لاحقًا.
- السيريال 4 أرقام بس (10,000 احتمال) — فيه lockout بعد 5 محاولات فاشلة لمدة 30 ثانية على مستوى السيرفر، لكن لو حابب أمان أعلى في بيئة إنتاج حقيقية، فكّر في زيادة عدد الخانات مستقبلًا.
- الكوكي بتاعة الجلسة `httpOnly` و `secure` في production، فمينفعش أي كود جافاسكريبت في المتصفح يقرأها.
- كل عمليات الإضافة/التعديل/الحذف الخاصة بالأدمن محمية سيرفريًا (`requireAdmin`) — مش بس مخفية في الواجهة.

---

## 5) إيه اللي اتغيّر عن نسخة الـ HTML الأولى؟

| | النسخة الأولى (Artifact) | النسخة دي (Full Stack) |
|---|---|---|
| تخزين البيانات | `window.storage` (جوه المحادثة) | PostgreSQL حقيقية على Neon |
| تسجيل الدخول | فحص محلي في المتصفح | API + JWT httpOnly cookie |
| الـ lockout | في المتصفح بس (سهل الالتفاف عليه) | في السيرفر (حقيقي) |
| حساب العمولة | بيتحسب في الفرونت اند | بيتحسب ويتراجع في السيرفر دايمًا |
| الاستضافة | رابط artifact داخل المحادثة | دومين حقيقي على Vercel |

الشكل والتصميم والألوان والحركات (بما فيها أنيميشن الدخول) **نفسها بالظبط** زي النسخة الأولى.
