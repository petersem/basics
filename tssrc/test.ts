function getCaffeine(cafType: string): string {

    const cafMap: any = {
        'Coffee': '95 mg',
        'Redbull': '147 mg',
        'Tea': '11 mg',
        'Coke': '21 mg'
    }

    const caffeine: string = cafMap[cafType] ?? 'Not found';
    return caffeine;
}

console.log(getCaffeine('Redbull'));