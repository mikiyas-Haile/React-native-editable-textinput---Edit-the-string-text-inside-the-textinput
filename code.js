<TextInput
    maxLength={200}
    style={{
        padding: 10,
        textAlign: 'left',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#2c3e50',
        fontFamily: 'Poppins-Regular',
        color: ctx.textColor,
        width: '90%',
        marginRight: 5
    }} multiline onChangeText={setBody} placeholder='Hey' placeholderTextColor={'grey'} >
    {body.split(/(\s+)/).map((item, index) => {
        return (
            <Text key={index}
                style={{
                    fontFamily:
                        item.includes(".com")
                            || item[0] === ("@")
                            || item[0] === ("#")
                            || item.includes("http://")
                            || item.includes("https://")
                            || item === '69'
                            || item === '69420'
                            ? 'Poppins-Bold' : 'Poppins-Regular',
                    color:
                        item.includes(".com")
                            || item[0] === ("@")
                            || item[0] === ("#")
                            || item.includes("http://")
                            || item.includes("https://")
                            || item === '69'
                            || item === '69420'
                            ? 'white'
                            : ctx.textColor
                }}>{item}</Text>
        )
    })}
</TextInput>
