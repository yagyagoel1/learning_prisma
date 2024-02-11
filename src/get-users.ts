import { PrismaClient } from "@prisma/client";
const client =  new PrismaClient({log : ['info','query','error']});

async function main(){
   const users =await client.user.findMany({});
   console.log(users);
   const user = await client.user.findUnique({
    where : {
        id:1,
    },
    include:{
        post : true
    }
   })
   console.log(user);
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