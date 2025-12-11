export default function formatTime(time: number): string {
    const hours = Math.floor(time);
    const minutes = Math.floor((time - hours) * 60);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
