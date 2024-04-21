class TimeUtils {
  constructor() {
    this.currTime;
  }

  setCurrentTime() {
    this.currTime = new Date();
  }

  timeDifference(time) {
    this.setCurrentTime();
    const timeDifference = this.currTime - new Date(time);

    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
      return `${hoursDifference} ${hoursDifference === 1 ? "hour" : "hours"} ago`;
    } else {
      return `${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago`;
    }
  }
}

const timeCalculator = new TimeUtils();

export default timeCalculator;
