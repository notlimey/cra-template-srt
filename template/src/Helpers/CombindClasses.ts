export default function CombineClasses (a : string, b : string | undefined) {
    return `${a}${b ? ` ${b}` : ''}`;
};