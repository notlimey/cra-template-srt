// Documentation on component is here: https://github.com/Notlimey/SRT-template#combineClasses

export default function CombineClasses (a : string, b : string | undefined) {
    return `${a}${b ? ` ${b}` : ''}`;
};
