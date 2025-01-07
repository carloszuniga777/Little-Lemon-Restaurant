//verifica las horas disponibles para realizar reservacion

const seededRandom = (seed: number): (() => number) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;

    return () => {
        s = (s * a) % m;
        return s / m;
    };
};

const fetchAPI = (date: Date): string[] => {
    const result: string[] = [];
    const random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) {
            result.push(`${i}:00`);
        }
        if (random() < 0.5) {
            result.push(`${i}:30`);
        }
    }

    return result;
};

/*
const submitAPI = (formData: Record<string, any>): boolean => {
    return true;
};
*/

export { fetchAPI, /*submitAPI*/ };