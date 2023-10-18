import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
	private courses: Course[] = [
		{
			id: '1',
			name: 'Angular',
			description: 'JavaScript Framework',
			tags: ['angular', 'framework', 'javascript'],
		}
	]

	findAll() {
		const courses = this.courses
		if (!courses) {
			throw new NotFoundException('Courses not found')
		}

		return courses
	}

	findOne(id: string) {
		const course = this.courses.find(course => course.id === id)
		if (!course) {
			throw new NotFoundException('Course not found')
		}

		return course
	}

	create(createCourseDto: any) {
		this.courses.push(createCourseDto)
		return createCourseDto
	}

	update(id: string, updateCourseDto: any) {
		const course = this.courses.findIndex(course => course.id === id)
		if (course === -1) {
			throw new NotFoundException('Course not found')
		}

		this.courses[course] = updateCourseDto
		return this.courses[course]
	}

	delete(id: string) {
		const index = this.courses.findIndex(course => course.id === id)
		if (index === -1) {
			throw new HttpException('Course not found', 404)
		}
		this.courses.splice(index, 1)
		return
	}
}
