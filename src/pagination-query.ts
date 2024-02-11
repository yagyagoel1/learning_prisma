import { PrismaClient } from "@prisma/client";
const client =  new PrismaClient({log : ['info','query','error']});

async function main(){
    //select * form post OFFSET 2 LIMIT 3
  await client.post.findMany({
    take : 3,
    skip :2
  })
  //first two queries will get skippped and with only show 3 query 
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