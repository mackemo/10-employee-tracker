-- inserting 5 departments 
INSERT INTO departments (name)
VALUES 
    ('Finance'),
    ('Marketing'),
    ('Operations Management'),
    ('Human Resources'),
    ('Information Technology');

-- inserting 5 roles and data
INSERT INTO roles (title, salary, department_id)
VALUES
    ('Accountant', '65000', 1),
    ('Digital Marketing Specialist', '50000', 2),
    ('Logistics Coordinator', '45000', 3),
    ('HR Generalist', '60000', 4),
    ('Systems Analyst', '70000', 5);

-- inserting 5 employees and data
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Donald', 'Duck', 1, 1),
    ('Mickey', 'Mouse', 2, 1),
    ('Minnie', 'Mouse', 3, 2),
    ('Goofy', 'Goose', 4, 2),
    ('Daisy', 'Duck', 5, 1);