var cor_ans = ["am", "'re", "are"];
var ans = ["0", "0", "0"];
// Submit form with name function.
function submit_by_name() {
	var i;
	var score = 0;
	//console.log(ans[0]);
	for (i = 0; i < 3; i++) {
		var str = String(i+1);
		//console.log("q"+str);
		ans[i] = document.getElementById("q"+str).value;
		//console.log(ans[i]);
	}

	for (i = 0; i < 3; i++){
		if (ans[i] == cor_ans[i]) {
			score++;
		}
	}
	//var ans1 = document.getElementById("q1").value;
	//var ans2 = document.getElementById("q2").value;
	//var ans3 = document.getElementById("q3").value;

	//var x = document.getElementsByName('form_name');
	//x[0].submit(); //form submission

	alert("Answers:" 
		+ "\n\n1."+ ans[0] 
		+ "\n2."+ ans[1]
		+ "\n3."+ ans[2]
		+ "\n\nScore: " + score);
	}
//console.log(ans[1]);
function show_answers() {
	alert("Correct Answers:"
		+ "\n\n1. " + cor_ans[0]
		+ "\n2. " + cor_ans[1]
		+ "\n3. " + cor_ans[2]);
}