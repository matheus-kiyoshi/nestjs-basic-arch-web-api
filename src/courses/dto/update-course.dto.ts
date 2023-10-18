import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDto } from "./create-course.dto";

export class updateCourseDto extends PartialType(CreateCourseDto) {}
