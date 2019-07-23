
/*
Создать конструктор массива, который будет содержать объекты из прошлого задания на прототипы.

Массивы созданные с помощью этого конструктора должны содержать следующие методы:

.attendance — если вызывается без аргумента, то возвращает среднюю посещаемость группы за одно занятие; если с аргументом — строкой содержащей фамилию одного из студентов, то возвращает его место в рейтинге посещаемости

.performance — то же самое, но с оценками
*/

//конструктор массива

class Group extends Array {

//метод attendance

	attendance(secondName) {

		function studentAttendance(student) {

			var averageAtt = student.presentArr.reduce(function(acc, pres) {
				if (pres) {
					return acc + 1;
				} else {
					return acc;
				}
			}, 0) / student.presentArr.length;

			return averageAtt;
		}

		function compareFunc(a, b) {

			return b.studentAttendance - a.studentAttendance;
		}

		if (secondName === undefined) {
			
			var attend = this.reduce(function(sum, item) {
				
				return sum + studentAttendance(item);
				}, 0) / this.length;

			return attend;

		} else {
			this.forEach(function(item) {
				
				item.studentAttendance = studentAttendance(item);
			})
			this.sort(compareFunc);

			var studentRating;

			this.forEach(function(item, i) {
				
				if (item.secondName === secondName)
					studentRating  = i + 1;
				})

			return studentRating;
		}
	}

//метод performance

	performance(secondName) {

		function studentPerformance(student) {
			var averageGrade = student.gradeArr.reduce(function(acc, grade) {
				
				return acc + grade;
				
			}, 0) / student.gradeArr.length;

			return averageGrade;
		}

		function compareFuncPerf(a, b) {

			return b.studentPerformance - a.studentPerformance;
		}

		if (secondName === undefined) {
			
			var perform = this.reduce(function(sum, item) {
				
				return sum + studentPerformance(item);
				}, 0) / this.length;

			return perform;

		} else {
			this.forEach(function(item) {
				
				item.studentPerformance = studentPerformance(item);
			})

			this.sort(compareFuncPerf);
			
			var studentRating;

			this.forEach(function(item, i) {
				
				if (item.secondName === secondName)
					studentRating  = i + 1;
				})

			return studentRating;
		}
	}
}


var group = new Group();
group.push(student1);
group.push(student2);
group.push(student3);

console.log("Средняя посещаемость группы: " + group.attendance());
console.log("Рейтинг посещаемости студента Попова: " + group.attendance("Popov"));

console.log("Средняя успеваемость группы: " + group.performance());
console.log("Рейтинг успеваемости студента Попова: " + group.performance("Popov"));

