import { Template, ROUTER } from "./template";

enum Categary {
    Region,
    Administrative,
    Hospital,
}

new class extends Template {
    items!: string[]
    constructor() {
        super();
        this.render(
            this.headerWithUrl({ title: "科室", url: ROUTER.index })
        )
        this.items = ["儿科", "妇科", "泌尿外科", "中医科", "皮肤病科", "全科"
            , "心理科", "普外科", "骨科", "心内科", "呼吸道科", "男科", "整形外科"]

        this.generaterHTML(
            "list_items",
            this.getItem(Categary.Administrative)
        )

    }
    private getItem(categary: Categary): string[] | undefined {
        switch (categary) {
            case Categary.Region: return this.items;
            case Categary.Hospital: return undefined;
            case Categary.Administrative: return undefined;
        }
    }
    private generaterHTML(elId: string, items: string[]) {
        $(() => {
            for (const item of items) {
                $(`#${elId}`).append(`
                <div>
                    <span>${item}</span>
                    <span>></span>
                </div>
                `)
            }
        })
    }



}