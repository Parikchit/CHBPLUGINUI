import React, { Component } from 'react';

import './App.css';
import {DataTable} from 'damco-components';
import TableSampleData from './TableSampleData';
import TableColumnData from "./TableColumnData";
import SubColumnData from "./SubColumnData";



class ResultTable extends Component {

    constructor(props) {
        super(props);

        let tableActions = {
            primaryActionIsMoreBtn: true,
            primaryActionLabel: "Primary Action",
            primaryAction: () => this.tablePrimaryAction(),
            primaryActionMoreBtn: [
                {label: "Action", action: () => this.tablePrimaryActionMoreActionOne()},
                {label: "Action", action: () => this.tablePrimaryActionMoreActionTwo()},
            ],
            secondaryActions:[
                {isMoreBtn: true,
                    moreBtnActions: [
                        {label: "Action", action: () => this.tableSecondaryActionMoreButtonActionOne()},
                        {label: "Action", action: () => this.tableSecondaryActionMoreButtonActionTwo()},
                    ]
                },
                {isMoreBtn: false, label: "Action", action: () => this.tableSecondaryActionTwo()},
                {isMoreBtn: false, label: "Action", action: () => this.tableSecondaryActionThree()},
            ],
            contextualActions:[
                {isMoreBtn: true,
                    moreBtnActions: [
                        {label: "Action", action: () => this.tableContextualActionMoreButtonActionOne()},
                        {label: "Action", action: () => this.tableContextualActionMoreButtonActionTwo()},
                    ]},
                {isMoreBtn: false, label: "Action", action: () => this.tableContextualActionTwo()},
                {isMoreBtn: false, label: "Action", action: () => this.tableContextualActionThree()},
            ],
            childContextualActions:[
                {isMoreBtn: false, label: "Action", action: () => this.tableChildContextualActionOne()},
                {isMoreBtn: false, label: "Action", action: () => this.tableChildContextualActionTwo()},
            ],
            parentContextualActions:[
                {isMoreBtn: false, label: "Action", action: () => this.tableParentContextualActionOne()},
                {isMoreBtn: false, label: "Action", action: () => this.tableParentContextualActionTwo()},
                {isMoreBtn: false, label: "Action", action: () => this.tableParentContextualActionThree()},
            ]
        }

        let status = {
            positive: {text: "Positive text", colorClass: "green-status-color"},
            warning: {text: "Warning text", colorClass: "amber-status-color"},
            negative: {text: "Negative text", colorClass: "red-status-color"},
            inProgress: {text: "In progress text", colorClass: "blue-status-color"},
            launch: {text: "Launch text", colorClass: "blue-status-color"},
            pencil: {text: "Pencil text", colorClass: "blue-status-color"},
            thumbsUp: {text: "Thumbs up text", colorClass: "green-status-color"},
            thumbsDown: {text: "Thumbs down text", colorClass: "red-status-color"}
        }

        this.state = {
            actions: tableActions,
            statusOptions: status
        }
    }

    tablePrimaryActionMoreActionOne() {
        let items = this.dataTable.getSelectedItems();
        let data = this.dataTable.getData();
        alert("More button action 1");
    }

    tablePrimaryActionMoreActionTwo() {
        alert("More button action 2");
    }


    tableSecondaryActionMoreButtonActionOne() {
        alert("More button action 1");
    }

    tableSecondaryActionMoreButtonActionTwo() {
        alert("More button action 2");
    }


    tableSecondaryActionTwo() {
        alert("Secondary action 2");
    }

    tableSecondaryActionThree() {
        alert("Secondary action 3");
    }

    tableContextualActionMoreButtonActionOne(){
        alert("More button action 1");
    }

    tableContextualActionMoreButtonActionTwo(){
        alert("More button action 2");
    }

    tableContextualActionTwo() {
        alert("Contextual action 2")
    }

    tableContextualActionThree() {
        alert("Contextual action 3")
    }

    tableChildContextualActionOne() {
        alert("Child contextual action 1")
    }

    tableChildContextualActionTwo() {
        alert("Child contextual action 2")
    }

    tableParentContextualActionOne(){
        alert("Parent contextual action 1")
    }

    tableParentContextualActionTwo(){
        alert("Parent contextual action 2")
    }

    tableParentContextualActionThree(){
        alert("Parent contextual action 3")
    }

    fetchData(state, instance){
        alert("Load next page of data");
    }

    render() {
        return (
            <div>
                <DataTable
                    data={TableSampleData}
                    columns={TableColumnData}
                    subColumns={SubColumnData}
                    isSelectable={true}

                    isSortable={true}
                    isResizable={true}
                    isEditable={true}
                    hasFooter={true}
                    isExpandable={true}
                    manualPagination={false}
                    showPagination={true}
                    showColumnOptions={true}


                    tableName={"MyTable"}
                    ref={(dataTable) => { this.dataTable = dataTable; }}
                    statusOptions={this.state.statusOptions}
                    actions={this.state.actions}
                    height={400}/>
            </div>
        );
    }
}


export default ResultTable;