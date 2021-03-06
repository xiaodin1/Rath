import { BIField, Record } from "../global"

const DATA_SOURCE_LOGGER_URL =
  'https://1423108296428281.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/Rath/dataSourceLogger/'

interface IDataImportInfo {
    dataType: string;
    fields: BIField[];
    dataSource: Record[];
    name?: string;
    info?: any;
    size: number;
}
export async function logDataImport (props: IDataImportInfo) {
    if (process.env.NODE_ENV === 'production') {
        try {
          const res = await fetch(DATA_SOURCE_LOGGER_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(props),
          })
          const result = await res.json()
          console.log(result)
        } catch (error) {
          console.error(error)
        }
    } else {
        console.log(`Current Env: ${process.env.NODE_ENV}.`, props);
    }
}