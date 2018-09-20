import { Injectable } from "@angular/core";

const TRIGGER_SCHEDULE_FORM = {
    cronExpression: {
        label: 'Cron Expression',
        value: '',
        type: 'cronExpression',
        validation: {
            required: true
        }
    },
    duration: {
        label: 'Duration',
        value: '',
        type: 'number',
        validation: {

        }
    },
    startTime: {
        label: 'Start Time',
        value: '',
        type: 'date',
        validation: {

        }
    }
}

const TRIGGER_DB_POLLING_FORM = {
    cronExpression: {
        label: 'Cron Expression',
        value: '',
        type: 'cronExpression',
        validation: {
            required: true
        }
    },
    duration: {
        label: 'Duration',
        value: '',
        type: 'number',
        validation: {

        }
    },
    startTime: {
        label: 'Start Time',
        value: '',
        type: 'date',
        validation: {

        }
    },
    connectionProfileId: {
        label: 'Connection Profile',
        value: '',
        type: 'text',
        validation: {
            
        }
    },
    sql: {
        label: 'SQL',
        value: '',
        type: 'textarea',
        validation: {
            required: true
        }
    }
}

const TRIGGER_MANUAL_FORM = {
    key: {
        label: 'Key',
        value: '',
        type: 'div',
        validation: {
            required: true
        }
    },
    value: {
        label: 'Value',
        value: '',
        type: 'div',
        validation: {
            required: true
        }
    },
}

const TRIGGER_FILE_WATCHER_FORM = {
    cronExpression: {
        label: 'Cron Expression',
        value: '',
        type: 'cronExpression',
        validation: {
            required: true
        }
    },
    duration: {
        label: 'Duration',
        value: '',
        type: 'number',
        validation: {

        }
    },
    startTime: {
        label: 'Start Time',
        value: '',
        type: 'date',
        validation: {

        }
    },
    filePath: {
        label: 'File Path',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    fileName: {
        label: 'File Name',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    fileType: {
        label: 'File Type',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    minimumSize: {
        label: 'Minimum Size',
        value: '',
        type: 'number',
        validation: {
            
        }
    },
    timeLimit: {
        label: 'Time Limit',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    },
    fileSearchInterval: {
        label: 'File Search Interval',
        value: '',
        type: 'text',
        validation: {
            required: true
        }
    }
}

@Injectable()
export class FormModelGenerator {

    getScheduleTriggerForm() {
        return TRIGGER_SCHEDULE_FORM;
    }

    getDbPollingTriggerForm() {
        return TRIGGER_DB_POLLING_FORM;
    }

    getManualTriggerForm() {
        return TRIGGER_MANUAL_FORM;
    }

    getFileWatcherTriggerForm() {
        return TRIGGER_FILE_WATCHER_FORM;
    }


}