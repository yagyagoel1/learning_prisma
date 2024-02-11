import { PrismaClient } from "@prisma/client";
const client =  new PrismaClient({log : ['info','query','error']});

async function main(){
    await client.user.create({
        data : {
            email : "jiji@gmail.com",
            name : "harkiarraasdflk"
        }
    })
}
main()
.then(async()=>{
    console.log("ram ram ladar query ho gayi hai teri");

    await client.$disconnect();
}).catch(async(e)=>{
    console.log("ladar nhi ho pai query");
    console.log(e);
    await client.$disconnect();
})