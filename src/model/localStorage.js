
function createLocalStorage()
{
    function getSavesList() {
        return saves.map(s => ({
            id: s.id,
            date: s.date,
            currentQuest: s.currentQuest,
            progress: s.progress
        }));
    }

    function createSave(saveData) {
        const date = Date.now().toLocaleString("ru");
        const id = Math.floor(date * Math.random()).toString(16);
        saves.push({ id, date, ...saveData });
        localStorage.setItem("saves", JSON.stringify(saves));

        return id;
    }

    function deleteSave(id) {
        const index = saves.findIndex(s => s.id === id);
        saves.splice(index, 1);
        localStorage.setItem("saves", JSON.stringify(saves));
    }

    function getSave(id) { return saves.find(s => s.id === id); }

    function setSave(id, saveData) {
        const date = Date.now().toLocaleString("ru");
        const index = saves.findIndex(s => s.id === id);
        saves[index] = { id, date, ...saveData };
        localStorage.setItem("saves", JSON.stringify(saves));
    }

    function getSettings() { return settings; }

    function setSettings(newSettings) {
        settings = newSettings;
        localStorage.setItem("settings", JSON.stringify(settings));
    }

    const savesJSON    = localStorage.getItem("saves");
    const settingsJSON = localStorage.getItem("settings");

    let saves    = savesJSON ? JSON.parse(savesJSON) : [];
    let settings = settingsJSON ? JSON.parse(settingsJSON) : null;

    return {
        getSavesList,
        createSave, deleteSave, getSave, setSave,
        getSettings, setSettings,
    }
}

export default createLocalStorage();