import { Template, ROUTER } from "./template";
import { Component } from "./utils/decorators";
import * as $ from "jquery";
import { GetQueryString } from "./utils/tools";
enum Categary {
    Region = "Region",
    Administrative = "Administrative",
    Hospital = "Hospital",
}

@Component({ styleUrls: ["./css/expert_searching.css","./css/index.css"] })

class ExpertSearching extends Template {

    private hospital_datalist_Id: string = "hospital_datalist";
    administrativeItems!: string[];
    regionItems!: string[];
    hospitalItems!: string[];
    constructor() {
        super();
        this.render(
            this.headerWithUrl({ title: "科室", url: ROUTER.expert })
        )
        this.administrativeItems = ["儿科", "妇科", "泌尿外科", "中医科", "皮肤病科", "全科"
            , "心理科", "普外科", "骨科", "心内科", "呼吸道科", "男科", "整形外科"]
        this.hospitalItems=["人民医院","儿童医院"];
        this.regionItems=["江苏","北京","安徽"];

        this.render(null,this.homeTab("expert"));
        $(() => {
            var type = GetQueryString("type")

            this.generaterHTML(
                this.hospital_datalist_Id,
                this.getItem(type as Categary)
            )
        })
    }
    private getItem(categary: Categary): string[] | undefined {
        switch (categary) {
            case Categary.Region: return this.regionItems;
            case Categary.Hospital: return this.hospitalItems;
            case Categary.Administrative: return this.administrativeItems;
        }
    }
    private generaterHTML(elId: string, items: string[]) {
        for (const item of items) {
            $(`#${elId}`).append(`
            <li>
                <span>${item}</span>
                <span>></span>
            </li>
            `)
        }
    }
}

new ExpertSearching();