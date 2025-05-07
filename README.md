# Control de Gastos

Una **Single Page Application** para gestionar presupuestos y controlar gastos de forma dinámica. Construida con **Vite**, **React**, **TypeScript** y **Tailwind CSS**, y desplegada en **Netlify**.

---

## 🔗 Demo en Vivo

[👉 Probar la aplicación en Netlify](https://bejewelled-elf-123401.netlify.app/)

---

## 🚀 Características

- **Formulario de Presupuesto**  
  Permite al usuario ingresar un presupuesto inicial, que sirve como base para calcular los gastos restantes.

- **Agregar Gastos**  
  Se pueden registrar múltiples gastos con nombre y monto, los cuales se acumulan y afectan el presupuesto restante.

- **Listado de Gastos Dinámico**  
  Los gastos se renderizan automáticamente en una lista con la posibilidad de eliminar elementos.

- **Context API y useReducer**  
  Se emplea Context API para compartir estado global entre componentes, y `useReducer` para manejar las acciones sobre el presupuesto y los gastos de forma escalable y predecible.

- **Custom Hook `useBudget`**  
  Toda la lógica de acceso al estado global del presupuesto se encapsula en un hook personalizado (`src/hooks/useBudget.ts`) para una mejor separación de responsabilidades.

- **Cálculo en Tiempo Real**
  - **Total Gastado**: suma de todos los gastos ingresados.
  - **Saldo Restante**: diferencia entre presupuesto y total gastado.
  - Colores visuales indican si el presupuesto ha sido sobrepasado o está dentro del límite.

---

## 🛠 Tecnologías y Herramientas

- **Vite** ^5.2.0 – Bundler moderno y rápido para desarrollo frontend.
- **React** ^18.2.0 – Biblioteca para construir interfaces de usuario basadas en componentes.
- **TypeScript** ^5.3.3 – Lenguaje con tipado estático que mejora la robustez del código.
- **Tailwind CSS** ^3.4.1 – Framework de estilos utilitarios para una maquetación rápida y responsive.
- **Context API** – Para manejar el estado global de forma centralizada.
- **useReducer** – Para manejar estados complejos con lógica clara y mantenible.
- **Custom Hook `useBudget`** – Permite acceder y modificar el estado del presupuesto con una interfaz sencilla.
- **ESLint** ^8.56.0 – Herramienta para mantener buenas prácticas en el código.
- **Prettier** ^3.2.5 – Formateador automático de código.
- **Netlify** – Plataforma utilizada para desplegar la aplicación en producción.

---

## 🎨 Estilos

Esta aplicación utiliza **Tailwind CSS** para construir una interfaz moderna, responsive y altamente personalizable con clases utilitarias directamente en el markup.

---

## 💻 Instalación y Uso

1. **Clonar el repositorio**

```bash
git clone https://github.com/Cachi1997/control-gastos-ts.git

cd control-gastos-ts

npm install

npm run dev
```
