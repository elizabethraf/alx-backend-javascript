interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

class TeacherImpl implements Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
  }

  setYearsOfExperience(yearsOfExperience: number) {
    this.yearsOfExperience = yearsOfExperience;
  }
}

const teacher: Teacher = new TeacherImpl("John", "Doe", true, "New York");
teacher.contract = true;

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

class DirectorImpl implements Directors {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  numberOfReports: number;
  [key: string]: any;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, numberOfReports: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    this.numberOfReports = numberOfReports;
  }

  setYearsOfExperience(yearsOfExperience: number) {
    this.yearsOfExperience = yearsOfExperience;
  }
}

const director: Directors = new DirectorImpl("John", "Doe", true, "New York", 10);
director.contract = true;

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}

const student: StudentClass = new StudentClass("John", "Doe");
console.log(student.workOnHomework()); // "Currently working"
console.log(student.displayName()); // "John"

