const db = require("../../models")
//const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    Query: {
        async allDevices() {
            return await db.devices.count();
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
        }

    },

    Mutation: {
        async Device(parent, { uuid }) {
            const currentDevice = await db.devices.findOne({
                where: { uuid }
            })
            if (currentDevice) {
                const findExperimentKey = await db.experiments.findOne({
                    where: {
                        id: currentDevice.experimentId
                    }
                })
                currentDevice.experimentValue = findExperimentKey.value;
                return currentDevice;
            }
            else {
                const devicesCount = await db.devices.count()
                const newDevice = await db.devices.create({
                    uuid: uuidv4(),
                    experimentId: (devicesCount % 3) + 1
                });
                await newDevice.save();
                const findExperimentKey = await db.experiments.findOne({
                    where: {
                        id: newDevice.experimentId
                    }
                })
                newDevice.experimentValue = findExperimentKey.value;
                return newDevice;
            }
        }
    }
}