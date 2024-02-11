import { PrismaClient } from "@prisma/client";
import { info } from "console";
const client =  new PrismaClient({log : ['info','query','error']});
 
async function main(){
    await client.post.create({
        data : {
            title : "title ,bj,.bkhjlgbof the post",
            content : "Asdfasdfsdfa",
            author : {
                connect :{
                    id :1
                }
            }
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