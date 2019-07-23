(function setInfoDefault() {

	dataUrlImg = "data:image/jpeg;base64,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"

	if (!localStorage.getItem("imgDefault")){
		localStorage.setItem("imgDefault", dataUrlImg)
	}

	if (!localStorage.getItem("янинасоколова")) {
		localStorage.setItem("янинасоколова", JSON.stringify({
			avatar: dataUrlImg,
			firstName: "Янина",
			secondName: "Соколова",
			telNums: "0633560890, 0503333636",
			birthDate: "12.06.1986",
			comments: "Телеведущая"
		}));
	}

	if (!localStorage.getItem("ираподдубная")) {
		localStorage.setItem("ираподдубная", JSON.stringify({
			avatar: dataUrlImg,
			firstName: "Ира",
			secondName: "Поддубная",
			telNums: "0673560890",
			birthDate: "28.03.1980",
			comments: "Радио"
		}));
	}
		
	if (!localStorage.getItem("сашаволк")) {
		localStorage.setItem("сашаволк", JSON.stringify({
			avatar: dataUrlImg,
			firstName: "Саша",
			secondName: "Волк",
			telNums: "0633560890",
			birthDate: "19.11.1976",
			comments: "Life"
		}));
	}

	if (!localStorage.getItem("владрудик")) {
		localStorage.setItem("владрудик", JSON.stringify({
			avatar: dataUrlImg,
			firstName: "Влад",
			secondName: "Рудик",
			telNums: "0503333636",
			birthDate: "23.09.1996",
			comments: "Эпицентр"
		}));		
	}	

}());
