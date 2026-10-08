module.exports = {
    apps: [
        {
            name: "basmni-technologies",
            script: "pnpm",
            args: "start",
            cwd: "/root/basmni",
            env: {
                NODE_ENV: "production",
                PORT: 7018
            }
        }
    ]
}