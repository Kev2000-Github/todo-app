export const styleData = {
    roseColor: '#EF476F',
    headerColor: '#FFC43D'
}

export const titles = {
    edit: "E D I T",
    create: "N E W  T A S K"
}

const timeBreakPoints = {
    min: 1000 * 60,
    h: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
}

const transformTime = {
    toSeconds: (time: number) => time / 1000,
    toMinutes: (time: number) => time / (1000 * 60),
    toHours: (time: number) => time / (1000 * 60 * 60)
}

const monthsName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const processDate = (creationDate: Date) => {
    const Now = new Date();
    const difference = Now.getTime() - creationDate.getTime();
    if (difference < timeBreakPoints.min) {
        return `${transformTime.toSeconds(difference)} segundos`;
    }
    else if (difference < timeBreakPoints.h) {
        const minutes = transformTime.toMinutes(difference);
        const seconds = Math.round((minutes % 1) * 60)
        return `${Math.round(minutes)} minutos y ${seconds} s`;
    }
    else if (difference < timeBreakPoints.day) {
        const hours = transformTime.toHours(difference);
        const minutes = Math.round((hours % 1) * 60);
        return `${Math.round(hours)} horas ${minutes} min`;
    }
    else if (difference < timeBreakPoints.day * 2) {
        const hours = creationDate.getHours();
        const minutes = creationDate.getMinutes();
        return `Ayer a las ${hours}:${minutes}`
    }
    else if (Now.getFullYear() - creationDate.getFullYear() == 0) {
        const day = creationDate.getDate();
        const month = monthsName[creationDate.getMonth()];
        const hours = creationDate.getHours();
        const minutes = creationDate.getMinutes();
        return `${day} de ${month} a las ${hours}:${minutes}`;
    }
    else {
        const day = creationDate.getDate();
        const month = monthsName[creationDate.getMonth()];
        const year = creationDate.getFullYear();
        return `${day} de ${month} del ${year}`;
    }
}