// Danh sách lưu trữ thông tin
const courses = [];
const users = [];

// Quản lý khóa học
const addCourse = (courseId, name, instructor) => {
    courses.push({ id: courseId, name, instructor, students: new Set() });
    console.log(`Thêm khóa học: ${name}`);
};

const searchCourse = (name) => {
    const results = courses.filter(course => course.name.toLowerCase().includes(name.toLowerCase()));
    if (results.length > 0) {
        results.forEach(course => {
            console.log(`ID: ${course.id}, Tên: ${course.name}, Giáo viên: ${course.instructor}, Số học viên: ${course.students.size}`);
        });
    } else {
        console.log("Không tìm thấy khóa học.");
    }
};

const removeCourse = (courseId) => {
    const courseIndex = courses.findIndex(course => course.id === courseId);
    if (courseIndex !== -1) {
        const course = courses[courseIndex];
        course.students.forEach(student => student.registeredCourses.delete(courseId));
        courses.splice(courseIndex, 1);
        console.log(`Đã xóa khóa học ID ${courseId}.`);
    } else {
        console.log("Không tìm thấy khóa học.");
    }
};

// Quản lý người dùng
const addUser = (userId, name) => {
    users.push({ id: userId, name, registeredCourses: new Set() });
    console.log(`Thêm người dùng: ${name}`);
};

const registerCourse = (userId, courseId) => {
    const user = users.find(u => u.id === userId);
    const course = courses.find(c => c.id === courseId);

    if (!user) return console.log("Người dùng không tồn tại.");
    if (!course) return console.log("Khóa học không tồn tại.");
    if (user.registeredCourses.has(courseId)) return console.log(`${user.name} đã đăng ký khóa học này.`);

    user.registeredCourses.add(courseId);
    course.students.add(user);
    console.log(`${user.name} đã đăng ký khóa học ${course.name}.`);
};

const unregisterCourse = (userId, courseId) => {
    const user = users.find(u => u.id === userId);
    const course = courses.find(c => c.id === courseId);

    if (!user) return console.log("Người dùng không tồn tại.");
    if (!user.registeredCourses.has(courseId)) return console.log(`${user.name} chưa đăng ký khóa học này.`);

    user.registeredCourses.delete(courseId);
    if (course) course.students.delete(user);

    console.log(`${user.name} đã hủy đăng ký khóa học ${courseId}.`);
};

const displayUserCourses = (userId) => {
    const user = users.find(u => u.id === userId);
    if (!user) return console.log("Người dùng không tồn tại.");

    console.log(`Khóa học của ${user.name}:`);
    if (user.registeredCourses.size === 0) return console.log("Chưa đăng ký khóa học nào.");

    user.registeredCourses.forEach(courseId => {
        const course = courses.find(c => c.id === courseId);
        if (course) console.log(`ID: ${course.id}, Tên: ${course.name}, Giáo viên: ${course.instructor}`);
    });
};