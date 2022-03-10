// import cy from 'cypress';



Cypress.Commands.add('login', () => { 
      window.localStorage.setItem('credentials', 
      JSON.stringify(
          {access_token: 'BQBrrEnA-zPD3cbcR0lcIQLSGnQXXkkIdBmsV2J2xe76wgqIib9S1sMXVqqh5MTK4jT_2-S3pk8EC4psSAZNOs6fS3FvCdQ9MXPNMP72_ITonYSldOwHNcXJUIdiN-AvqqeSFqCLZ3iYR6Ad33e4Q-2a43VQQnLiEkhiiLC_sZMo7oY-F0gRUesc48YM6b-jW0yfTiLLbtQZl_sj3MX2qoQzK3hUaDAjCYbJ1hDyY5aPFdP3_c4iMhb_JAGU7SlQQsRKvWodqD0UXw',
          refresh_token: 'AQBuVIzni9GYPWtJRjAuVLgruo-xv4Negn25PWaof2KVZr20ya7uEkAfghazOuaVWxQ8v5LeKzJcJ4eTEXoZyYSSpNmusuR-NzAT4D3cx7O79HQot9TgiUF3dG8s0wQIUmk'}))
  })

describe('Layout', () =>{
    beforeEach(() => {
        cy.login()
        cy.visit('http://localhost:3000/')

      })
    it('Fetch data', ()=>{
        cy.contains('desde')
        const btnfetch = cy.get('[id="btnRecTopSongs"]')                // const btnfetch = cy.get('[id="btnTopArtistTopSongs"]')
        btnfetch.click() 
        // console.log("🚀 ~ file: layout_app.spec.js ~ line 20 ~ it ~ btn", btnTopArtistTopSongs)
        
    })


    // it('create Playlist', () => {
    //     const btnSavePlaylist = cy.get('[id="btnSavePlaylist"]')
    //     // console.log("🚀 ~ file: layout_app.spec.js ~ line 27 ~ it ~ btnSavePlaylist", btnSavePlaylist)
    //     btnSavePlaylist.click( )
    // })
})