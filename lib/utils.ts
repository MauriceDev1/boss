// /lib/utils.ts
export function cn(...classes: any[]): any {
    return classes.filter(Boolean).join(' ');
}
