import { Component, OnInit, ViewChild } from '@angular/core';
import { FlexmonsterPivot } from 'ng-flexmonster';
import * as Highcharts from 'highcharts';
import "flexmonster/lib/flexmonster.highcharts.js";

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

    @ViewChild('pivot') pivot!: FlexmonsterPivot;

    constructor() { }

    ngOnInit(): void {
    }

    customizeToolbar(toolbar: Flexmonster.Toolbar) {
        toolbar.showShareReportTab = true;
    }

    drawChart() {
        this.pivot.flexmonster.highcharts?.getData(
            {
                type: "spline"
            },
            (data: Flexmonster.GetDataValueObject) => {
                Highcharts.chart('highcharts-container', <Highcharts.Options>data);
            }
        );
    }

    onReportComplete() {
        this.pivot.flexmonster.off("reportcomplete");
        this.drawChart();
    }
}
