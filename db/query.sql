SELECT employees.role_id, departments.name, employees.first_name, 
employees.last_name, roles.title, roles.salary, employees.manager_id

FROM employees
JOIN roles ON employees.role_id = roles.id
JOIN departments ON roles.department_id = departments.id;