export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const merged: number[] = [];
    let a = 0;
    let b = 0;
    let c = collection_3.length - 1;

    while(a < collection_1.length || b < collection_2.length || c >= 0) {
        
        const val1 = a < collection_1.length ? collection_1[a] : Infinity;
        const val2 = b < collection_2.length ? collection_2[b] : Infinity;
        const val3 = c >= 0 ? collection_3[c] : Infinity;
        // 1 น้อยสุด
        if (val1 <= val2 && val1 <= val3) {
            merged.push(val1);
            a++;
        } 
        // 2 น้อยสุด
        else if (val2 <= val1 && val2 <= val3) {
            merged.push(val2);
            b++;
        } 
        // 3 น้อยสุด
        else {
            merged.push(val3);
            c--;
        }
    }
    return merged;
}