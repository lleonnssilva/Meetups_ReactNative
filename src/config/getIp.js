let ip='10.0.0.10'

const IpApi = () =>{
    return `http://${ip}:3333`
}
const IpReactotron = () =>{
    return ip
}
const IpFiles = () =>{
    return `http://${ip}:3333/files`
}

export default {IpApi ,IpReactotron,IpFiles}