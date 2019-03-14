const ip = '10.0.0.11';

const IpApi = () => `http://${ip}:3333`;
const IpReactotron = () => ip;
const IpFiles = () => `http://${ip}:3333/files`;

export default { IpApi, IpReactotron, IpFiles };
