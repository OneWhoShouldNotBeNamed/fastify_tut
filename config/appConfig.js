function loadEnvVariable(keyname){
    const envVar = process.env[keyname];
    if(!envVar){
        throw new Error(`Must include ${keyname} as an env variable to start`)
    }
    return envVar
}

module.exports={
    postgresUri: loadEnvVariable('POSTGRES_URI')
};