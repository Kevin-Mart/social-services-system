import { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState("");

  // Alta
  const addStudent = () => {
    if (newStudent.trim() !== "") {
      setStudents([...students, { id: Date.now(), name: newStudent }]);
      setNewStudent("");
    }
  };

  // Baja
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Edición
  const editStudent = (id, newName) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, name: newName } : s))
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          placeholder="Nombre del alumno"
          className="border p-2 rounded-lg flex-1"
        />
        <button
          onClick={addStudent}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Agregar
        </button>
      </div>

      <ul>
        {students.map((s) => (
          <li
            key={s.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <input
              type="text"
              value={s.name}
              onChange={(e) => editStudent(s.id, e.target.value)}
              className="border p-1 rounded-lg flex-1 mr-2"
            />
            <button
              onClick={() => deleteStudent(s.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}