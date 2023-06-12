module.exports = {
    commands: ["setmenu"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setMenu, setReply }) => {
        if (m.args[0] == "viewonce" || m.args[0] == "1") {
        if (setMenu == "viewonce") return setReply("Sudah active")
        db.settings[m.botNumber].setmenu = "viewonce"
        setReply("Success mengganti menu bot ke viewonce")
        } else if (m.args[0] == "image" || m.args[0] == "2") {
        if (setMenu == "image") return setReply("Sudah active")
        db.settings[m.botNumber].setmenu = "image"
        setReply("Success mengganti menu bot ke image")
        } else if (m.args[0] == "gif" || m.args[0] == "3") {
        if (setMenu == "gif") return setReply("Sudah active")
        db.settings[m.botNumber].setmenu = "gif"
        setReply("Success mengganti menu bot ke gif")
        } else if (m.args[0] == "video" || m.args[0] == "4") {
        if (setMenu == "video") return setReply("Sudah active")
        db.settings[m.botNumber].setmenu = "video"
        setReply("Success mengganti menu bot ke video")
        } else if (m.args[0] == "document" || m.args[0] == "5") {
        if (setMenu == "document") return setReply("Sudah active")
        db.settings[m.botNumber].setmenu = "document"
        setReply("Success mengganti menu bot ke document")
        } else if (m.args[0] == "context" || m.args[0] == "6") {
        if (setMenu == "context") return setReply("Sudah active")
        db.settings[m.botNumber].setmenu = "context"
        setReply("Success mengganti menu bot ke context")
        } else {
        setReply("\`\`\`「 SETTINGS MENU BOT 」\`\`\`\n\n1. viewonce\n2. image\n3. gif\n4. video\n5. document\n6. context") 
        }
    }
}
