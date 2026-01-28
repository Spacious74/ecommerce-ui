# E-commerce Website UI (Angular)
## Deployed Live Link : https://ecommerce-ui-assignment-by-vishal.netlify.app/

This project is a front-end e-commerce website UI developed using **Angular (latest version)**.
It demonstrates component-based architecture, dynamic API integration, and a responsive layout.


---


## 🚀 Features


- Dynamic navigation bar using provided APIs
- Component-based and reusable Angular structure
- Responsive UI using HTML & CSS
- Public API integration (no authentication required)


---


## 🛠️ Tech Stack


- Angular (Latest)
- TypeScript
- HTML5
- CSS3
- REST APIs


---


## 📦 Prerequisites


Make sure the following are installed on your system:


- **Node.js** (latest recommended) v24 used
- **Angular CLI** (latest recommended) v21 used
- **Git**


Check versions using:
```bash
node -v
npm -v
ng version
git --version
```
## 🚗Steps to Run the Project Locally

1️⃣ Clone the Repository

```bash 
git clone https://github.com/Spacious74/ecommerce-ui.git
```
2️⃣ Navigate to Project Directory

```bash 
cd ecommerce-ui
```
3️⃣ Install Dependencies

```bash 
npm install
```
4️⃣ Run the Application

```bash 
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.


## Folder Structure

├── src<br/>
    ├── app<br/>
    │   ├── app.css<br/>
    │   ├── components/ <br/>
    │   │   ├── homepage/ <br/>
    │   │   │   ├── homepage.css<br/>
    │   │   │   ├── homepage.html<br/>
    │   │   │   └── homepage.ts<br/>
    │   │   ├── home-footer-section/<br/>
    │   │   │   ├── home-footer-section.ts<br/>
    │   │   │   ├── home-footer-section.html <br/>
    │   │   │   └── home-footer-section.css<br/>
    │   │   ├── home-hero-section/ <br/>
    │   │   │   ├── home-hero-section.ts <br/>
    │   │   │   ├── home-hero-section.html<br/>
    │   │   │   └── home-hero-section.css <br/>
    │   │   ├── home-product-section/ <br/>
    │   │   │   ├── home-product-section.ts <br/>
    │   │   │   ├── home-product-section.html<br/>
    │   │   │   └── home-product-section.css <br/>
    │   │   └── navbar/<br/>
    │   │   │   ├── navbar.ts <br/>
    │   │   │   ├── navbar.css <br/>
    │   │   │   └── navbar.html <br/>
    │   ├── app.html<br/>
    │   ├── assets/ <br/>
    │   │   └── fonts/ <br/>
    │   │   │   └── AspektaVF.woff2<br/>
    │   ├── app.routes.server.ts<br/>
    │   ├── app.routes.ts<br/>
    │   ├── models/ <br/>
    │   │   ├── PreparedTree.ts<br/>
    │   │   ├── CategoryTree.ts <br/>
    │   │   └── MainCategories.ts <br/>
    │   ├── app.ts<br/>
    │   ├── app.config.server.ts<br/>
    │   ├── app.config.ts <br/>
    │   ├── app.spec.ts<br/>
    │   └── services/<br/>
    │   │   ├── category.service.ts <br/>
    │   │   └── sampleProduct.service.ts <br/>
    ├── main.ts<br/>
    ├── main.server.ts<br/>
    ├── styles.css<br/>
    ├── index.html<br/>
    └── server.ts<br/>
├── public/ <br/>
    └── favicon.ico<br/>
├── .vscode/<br/>
    ├── extensions.json<br/>
    ├── launch.json <br/>
    └── tasks.json <br/>
├── .editorconfig<br/>
├── tsconfig.spec.json<br/>
├── tsconfig.app.json<br/>
├── .gitignore <br/>
├── tsconfig.json <br/>
├── package.json<br/>
├── angular.json <br/>
└── README.md <br/>
