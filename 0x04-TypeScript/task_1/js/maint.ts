class Teacher {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private readonly location: string;
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

