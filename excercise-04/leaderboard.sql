Select Student.id, Student.name, Grade.mask, Subject.name
    from Student join Grade on Grade.student_id = Student.id join Subject on Subject.code = Grade.code
        order by Grade.mask desc limit 10
