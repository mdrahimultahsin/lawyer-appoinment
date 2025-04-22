export function getWeekDayName() {
        return new Date().toLocaleString("en-US", { weekday: "long" });
      }
      