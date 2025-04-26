import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/students').then(res => setStudents(res.data));
  }, []);

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5001/students/${id}`)
      .then(() => setStudents(students.filter(s => s._id !== id)));
  };

  return (
    <div>
      <h2 className="mb-3">Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Department</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s._id}>
              <td>{s.fname} {s.lname}</td>
              <td>{s.email}</td>
              <td>{s.department}</td>
              <td>
                <Link to={`/edit/${s._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
