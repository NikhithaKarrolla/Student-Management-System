const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// CREATE
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.status(201).send(student);
  } catch (err) {
    res.status(400).send(err);
  }
});

// READ ALL
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// READ BY ID
router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(student);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Student deleted' });
});

module.exports = router;
