export default class ModelM {
    async getData() {
        const res = await fetch('https://opensheet.vercel.app/1yh2kVgMDELkBtBYv9WubYVYidXJ3qNLPGiE3GAF_3Fo/sheet1');
        const data = await res.json();
        return data;
    }
}