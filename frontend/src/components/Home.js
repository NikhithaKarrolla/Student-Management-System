import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="mb-4">Welcome to the Student Management System</h1>
      <Link to="/students" className="btn btn-primary">View Students</Link>
    </div>
  );
}
