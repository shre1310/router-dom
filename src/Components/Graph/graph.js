import React from 'react'
import ReactEcharts from "echarts-for-react";

export const GraphComponent = (props) => {
    const { xAxis, series, legend, title, vendor} = props;
    const option = {
        title : {
            text: title,
            subtext: `Vendor: ${vendor}`,
            x : 'center',
            lineHeight: 56,
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: legend,
            orient: 'vertical',
            left: 'right'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '1%',
            
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxis,
        
        },
        yAxis: {
            type: 'value',
        
        },
        series: series
    };

    return (
        <ReactEcharts option={option} />
    )
}

export const Graph = GraphComponent