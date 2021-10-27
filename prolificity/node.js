const greetings = document.getElementById("greetings")
const hour = new Date().getHours()
const welcome = ["Good Morning", "Good Afternoon", "Good Evening"]
var welcomemsg = ""
if(hour<12)
{
    welcomemsg = welcome[0];
}
else if(hour<16)
{
    welcomemsg = welcome[1];
}
else
{
    welcomemsg = welcome[2];
}
greetings.innerHTML = welcomemsg + ", Let's be productive! :D"
