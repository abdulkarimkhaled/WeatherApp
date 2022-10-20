//gloval functions to use in any file 


//convert from kelvin to celsius function
export const convertToCel = (temp: number | undefined) => {
    temp -= 273.15
    return temp.toFixed(2)
}

//convert the first letter in each word in a string
export const upperFirstLetters = (text: string) => {
    return text?.split(' ').map((item) => item[0]?.toUpperCase() + item?.substring(1)).join(' ')
}


