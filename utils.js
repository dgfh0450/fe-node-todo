export const calculateDDay = (date) => {
    const today = new Date().getTime();
    const deadline = new Date(date).getTime();

    const diff = (today - deadline) / (1000 * 60 * 60 * 24);
    
    const sign = diff > 0 ? "+" : "-";
    const dDay = Math.floor(diff);

    if (dDay === 0) return "D-Day";

    return "D" + sign + String(Math.abs(dDay));
}

console.log(calculateDDay("2025-01-02"))