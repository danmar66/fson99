// console.log(process.argv); -- аргументи запуску
// console.log(process.env); -- перелік всіх змінних оточення
// process.exit();
// console.log(process.cwd());

process.on('uncaughtException', (err) => {
    console.error('SMTH HAPPEND! HELP');
    process.exit(1);
});

process.on('warning', (warning) => {
    console.warn(warning.name);
    console.warn(warning.message);
    console.warn(warning.stack);
})
