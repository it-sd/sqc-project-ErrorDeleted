// Link Testing File
require('../server.js')

// Test that the server is healthy
describe('Warframe Market Server Test', function () {
  const baseUrl = 'http://localhost:5163'
  const shouldBe200 = async function (route) {
    it('should return 200–399', async function () {
      const url = new URL(route, baseUrl)
      const res = await fetch(url)
      expect(res.status).toBeGreaterThanOrEqual(200)
      expect(res.status).toBeLessThanOrEqual(399)
    }, 10000)
  }

  // Home
  describe("GET '/'", function () {
    shouldBe200('/')
  })

  // Health
  describe("GET '/health'", function () {
    shouldBe200('/health')
  })

  // About
  describe("GET '/about'", function () {
    shouldBe200('/about')
  })
})
