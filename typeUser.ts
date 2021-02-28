type User= {
    name: string
    age: string
    address:{
        city: string
        uf: string
    }
}



function showUserInfo(user:User){
    return `Welcome, ${user.name} - ${user.age} . City: ${user.address.city} UF: ${user.address.uf}`
}

// adicionar cidade,estado usuário nessa mensagem
