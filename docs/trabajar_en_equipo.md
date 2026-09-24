El trabajo en equipo con ramas en Git consiste en que **cada uno trabaje en una copia independiente del código (rama)** para no alterar la versión principal (`main`) ni pisar los cambios del otro.

Aquí tienes el flujo exacto paso a paso de cómo deben trabajar día a día:

---

### 1. El ciclo diario de trabajo en tu propia rama

Supongamos que vas a empezar la sección de perros y ella la de gatos.

#### Paso 1: Obtener la versión más reciente del proyecto

Antes de crear una rama nueva, asegúrate de tener todo lo que tu compañera haya subido a `main`:

```bash
git checkout main
git pull origin main

```

#### Paso 2: Crear tu rama de trabajo

Crea una rama con un nombre descriptivo de la tarea que vas a realizar:

```bash
# Para ti (sección de perros)
git checkout -b feature/dogs-section

# Para ella (sección de gatos)
git checkout -b feature/cats-section

```

#### Paso 3: Trabajar y guardar tus avances (Commits)

A medida que avanzas creando componentes o estilos CSS, guarda tus cambios localmente:

```bash
git add .
git commit -m "feat: add Dogs page and basic layout"

```

#### Paso 4: Subir tu rama a GitHub

Cuando quieras respaldar tu trabajo o compartirlo:

```bash
git push origin feature/dogs-section

```

---

### 2. Cómo unir los cambios en GitHub (Pull Request)

Una vez terminada la tarea en tu rama:

1. Ve a la página de tu repositorio en **GitHub**.
2. Verás un botón amarillo que dice **"Compare & pull request"** de la rama que acabas de subir. Haz clic en él.
3. Escribe un breve resumen de lo que agregaste.
4. Tu compañera revisa el código en GitHub y, si todo está correcto, hace clic en **"Merge pull request"**.
5. ¡Listo! Tus cambios ahora forman parte de la rama `main`.

---

### 3. Qué hacer después de que un Pull Request es aprobado

Una vez que los cambios de tu rama (o los de ella) están en `main`:

1. Ambas personas vuelven a la rama principal en su computadora:
```bash
git checkout main
git pull origin main

```


2. Borran la rama antigua que ya se fusionó:
```bash
git branch -d feature/dogs-section

```


3. Crean una nueva rama para la siguiente tarea del Sprint:
```bash
git checkout -b feature/dogs-api

```



---

### Resumen de comandos clave

| Acción | Comando |
| --- | --- |
| **Ver en qué rama estás** | `git branch` |
| **Cambiar a la rama `main**` | `git checkout main` |
| **Crear y cambiar a una nueva rama** | `git checkout -b nombre-de-rama` |
| **Descargar cambios de GitHub** | `git pull origin main` |
| **Subir tu rama a GitHub** | `git push origin nombre-de-rama` |