const DoomsDAO = artifacts.require('DoomsDAO')

module.exports = async function (deployer) {
  await deployer.deploy(DoomsDAO)
}
