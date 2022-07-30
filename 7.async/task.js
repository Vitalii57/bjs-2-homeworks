class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, action, id) {
    if (id === undefined) {
      throw new Error("Параметр id не передан");
    } else if (this.alarmCollection.some((element) => element.id === id)) {
      console.error("Звонок с таким id уже существует");
      return;
    }
    this.alarmCollection.push({ id, time, action });
  }
  removeClock(id) {
    if (this.alarmCollection.some((element) => element.id === id)) {
      this.alarmCollection.splice(
        this.alarmCollection.findIndex((element) => element.id === id),
        1
      );
      return true;
    } else return false;
  }
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  start() {
    let examination = checkClock.bind(this);
    function checkClock(AlarmClock) {
      if (AlarmClock.time === this.getCurrentFormattedTime()) AlarmClock.func();
    }
    if (!this.timerId)
      this.timerID = setInterval(
        () => this.alarmCollection.forEach((element) => examination(element)),
        500
      );
  }
  stop() {
    if (this.tierId === null) {
      return;
    }
    clearInterval(this.timerID);
    this.timerID = null;
  }
  printAlarms() {
    console.log("Будильник заведен:" + this.alarmCollection.length);
    this.alarmCollection.forEach((clok) => console.log(clok.time, clok.id));
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
