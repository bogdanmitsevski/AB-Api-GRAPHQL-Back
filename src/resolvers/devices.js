const db = require("../../models")
const uuid = require('uuid');

module.exports = {
    Query: {
        async allDevices() {
            return await db.devices.findAll();
        },

        async totalDevicesByGroupA() {
            return await db.devices.count({
                where: {
                    experimentId: 1
                }
            })
        },

        async totalDevicesByGroupB() {
            return await db.devices.count({
                where: {
                    experimentId: 2
                }
            })
        },

        async totalDevicesByGroupC() {
            return await db.devices.count({
                where: {
                    experimentId: 3
                }
            })
        },

        async currentDevice(uuid) {
            console.log(uuid);
            return await db.devices.findOne({
                where: {
                    uuid: uuid
                }
            })
        }

    },

    Mutation: {
        async newDevice() {
            const devicesCount = await db.devices.count()
            return await db.devices.create({
                uuid: uuid.v4(),
                experimentId: (devicesCount % 3) + 1
            })
        }
    }
}