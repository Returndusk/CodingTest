function solution(babbling) {
    let result = 0;
    const speak = ['aya', 'ye', 'woo', 'ma'];
        for(let i = 0; i < babbling.length; i++) {
            let b = babbling[i];
            
            for(let j = 0; j < speak.length; j++) {
                let s = speak[j];
                
                if(b.includes(s.repeat(2))) {
                    break;
                } else {    
                    b = b.split(s).join('z');
                }
            }
    
            if(b.split('z').join('').length == 0) {
                result++;
            }
        }
    return result;
}