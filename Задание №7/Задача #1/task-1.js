const peopleWaiting = [
  "Кристина",
  "Олег",
  "Кирилл",
  "Мария",
  "Светлана",
  "Артем",
  "Глеб",
];

function giveParcel() {
  const person = peopleWaiting.shift();
  if (person) {
    alert(
      `${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
    );
  }
}

function leaveQueueWithoutParcel() {
  const personWithoutParcel = peopleWaiting.pop();
  if (personWithoutParcel) {
    alert(
      `${personWithoutParcel} не получил(а) посылку и ушел(ла) из очереди.`
    );
  }
}

giveParcel();
giveParcel();

const kirillIndex = peopleWaiting.indexOf("Кирилл");
peopleWaiting.splice(kirillIndex, 1);
while (peopleWaiting.length > 0) {
  leaveQueueWithoutParcel();
}
