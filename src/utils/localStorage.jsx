const employees = [
    {
      firstname: "Fatima",
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Design Homepage",
          taskDescription: "Create a UI design for the homepage.",
          taskDate: "2025-03-22",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Fix Navbar Bug",
          taskDescription: "Resolve navbar alignment issues in mobile view.",
          taskDate: "2025-03-23",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ],
      taskCount: {
        active: 2,
        newTask: 1,
        completed: 0,
        failed: 0
      }
    },
    {
      firstname: "Muhammad",
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Database Optimization",
          taskDescription: "Optimize queries for faster data retrieval.",
          taskDate: "2025-03-25",
          category: "Backend",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "API Testing",
          taskDescription: "Test all API endpoints for errors.",
          taskDate: "2025-03-26",
          category: "Testing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Bug Fixing",
          taskDescription: "Fix critical bugs reported by users.",
          taskDate: "2025-03-27",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ],
      taskCount: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0
      }
    },
    {
      firstname: "Siraj",
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Write Documentation",
          taskDescription: "Create technical documentation for API usage.",
          taskDate: "2025-03-28",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Logo Redesign",
          taskDescription: "Redesign the company logo for better branding.",
          taskDate: "2025-03-29",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Improve SEO",
          taskDescription: "Enhance website SEO for better ranking.",
          taskDate: "2025-03-30",
          category: "Marketing",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Security Audit",
          taskDescription: "Check for vulnerabilities in the system.",
          taskDate: "2025-03-31",
          category: "Security",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ],
      taskCount: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 1
      }
    },
    {
      firstname: "Ali",
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Customer Support Emails",
          taskDescription: "Respond to customer queries via email.",
          taskDate: "2025-04-01",
          category: "Support",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Social Media Marketing",
          taskDescription: "Run paid ad campaigns on social media.",
          taskDate: "2025-04-02",
          category: "Marketing",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        }
      ],
      taskCount: {
        active: 2,
        newTask: 1,
        completed: 0,
        failed: 0
      }
    },
    {
      firstname: "Khan",
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Write Blog Post",
          taskDescription: "Create a blog post on industry trends.",
          taskDate: "2025-04-03",
          category: "Content",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          taskTitle: "Deploy New Features",
          taskDescription: "Release and deploy the latest app update.",
          taskDate: "2025-04-04",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          taskTitle: "Unit Testing",
          taskDescription: "Write and execute unit tests.",
          taskDate: "2025-04-05",
          category: "Testing",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          taskTitle: "Fix UI Bugs",
          taskDescription: "Resolve small UI glitches in dashboard.",
          taskDate: "2025-04-06",
          category: "Development",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ],
      taskCount: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 1
      }
    }
  ];
  
  const admin = [
    {
    firstname:"Admin",
      id: 1,
      email: "admin@example.com",
      password: "123"
    }
  ];
  
  export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  };

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
  };
