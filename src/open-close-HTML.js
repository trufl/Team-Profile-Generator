const fs = require('fs');

const startHtmlFile = () => {
    const starter = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,200&display=swap" rel="stylesheet">
    <title>Team Profile</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    screens: {
                        'sm': '375px',
                    }
                }
            }
        }
    </script>
</head>
<body style="font-family: 'Poppins', sans-serif;">
    <header class="mb-12 p-12 text-4xl text-center text-white bg-emerald-500">
        <h1>My Team</h1>
    </header>
    <main>`;

    fs.writeFile('./dist/team-profile.html', starter, (err) => {
        if(err){ console.error(err)}
    })
}

const closeHtmlFile = () => {
    const end = 
`
    </main>
</body>
</html>`;

    fs.appendFile('./dist/team-profile.html', end, (err) => {
        err ? console.error(err) : console.log("Succesfully finshed Team Profile! HTML file will be in the dist directory.\n")
    })
}


module.exports = {
    startHtmlFile,
    closeHtmlFile
};