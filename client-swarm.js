const N = process.argv[2] != null ? process.argv[2] : 1;

const child = require('child_process');

for (let i = 0; i < N; i++)
{
    child.exec('node client.js', (err, stdout, stderr)=>
    {
        if(err)
            console.log(err);
        console.log("\nClient number: "+ (i+1));
        console.log(stdout);
    });
}