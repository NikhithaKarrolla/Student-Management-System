import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddStudent() {
  const [student, setStudent] = useState({
    fname: '',
    lname: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent({ ...student, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/students', student)
      .then(() => navigate('/students'))
      .catch(err => console.error(err));
  };

  return (
    <div className="card p-4">
      <h2 className="mb-4">Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input className="form-control" name="fname" value={student.fname} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input className="form-control" name="lname" value={student.lname} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={student.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" className="form-control" name="dob" value={student.dob} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Department</label>
          <input className="form-control" name="department" value={student.department} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Enrollment Year</label>
          <input type="number" className="form-control" name="enrollmentYear" value={student.enrollmentYear} onChange={handleChange} required />
        </div>
        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" name="isActive" checked={student.isActive} onChange={handleChange} />
          <label className="form-check-label">Active</label>
        </div>
        <button type="submit" className="btn btn-success">Add Student</button>
      </form>
    </div>
  );
}
