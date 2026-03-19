// validaciones base

function toNumberStric(value, label = "valor") {
  const n = Number(value);

  if (!Number.isFinite(n)) {
    throw new Error(`El ${label} debe ser un número finito`);
  }
  return n;
}

function assertNonNegative(value, label = "valor") {
  if (value < 0) {
    throw new Error(`El ${label} debe ser un número no negativo`);
  }
}

function toNonEmptyString(value, label = "valor") {
  if (typeof value !== "string") {
    throw new Error(`El ${label} debe ser una cadena de texto`);
  }
  if (value.trim() === "") {
    // El método trim() elimina los espacios en blanco al inicio y al final de la cadena
    throw new Error(`El ${label} no puede estar vacío`);
  }
  return value.trim();
}

//normalizaacion

function normalizeExpense(raw) {
  const id = toNonEmptyString(raw.id, "id");
  const fecha = toNonEmptyString(raw.fecha, "fecha");
  const categoria = toNonEmptyString(raw.categoria, "categoria");
  const monto = toNumberStric(raw.monto, "monto");
  assertNonNegative(monto, "monto");

  return { id, fecha, categoria, monto };
}

// expenses

const expenses = [
  {
    id: "e1",
    fecha: "2024-01-15",
    categoria: "comida",
    monto: 25.5,
  },
  {
    id: "e2",
    fecha: "2024-01-20",
    categoria: "transporte",
    monto: 15.0,
  },
  {
    id: "e3",
    fecha: "2024-01-25",
    categoria: "entretenimiento",
    monto: 50.0,
  },
  {
    id: "e4",
    fecha: "2024-01-30",
    categoria: "comida",
    monto: 30.0,
  },
  {
    id: "e5",
    fecha: "2024-02-05",
    categoria: "transporte",
    monto: 20.0,
  },
];

// etditicas

function calStats(expenses) {
  if (expenses.length === 0) {
    return {
      total: 0,
      promedio: 0,
      maximo: 0,
      minimo: 0,
    };
  }

  const values = expenses.map((e) => e.monto); // [25.5, 15.0, 50.0, 30.0, 20.0]
  const total = values.reduce((acc, val) => acc + val, 0);
  const minimo = Math.min(...values);
  const maximo = Math.max(...values);
  const promedio = total / values.length;

  return { total, promedio, maximo, minimo };
}

// encontrarel gsto mas alto

function maxExpense(expenses) {
  if (expenses.length === 0) return null;

  return expenses.reduce(
    (max, expense) => (expense.monto > max.monto ? expense : max),
    expenses[0],
  );
}

// reporte en consola

function formatCop(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(value); // $25.500,00 COP
}

// reporte en tabla
function printReport(expenses) {
  const stats = calStats(expenses);

  console.group("Reporte de gastos");
  console.log("Resumen:");
  console.table([
    {
      Total: formatCop(stats.total),
      Promedio: formatCop(stats.promedio),
      Maximo: formatCop(stats.maximo),
      Minimo: formatCop(stats.minimo),
    },
  ]);

 
}

printReport(expenses);