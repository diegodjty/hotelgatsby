exports.createPages = async ({actions,graphql,reporter}) => {

    const results = await graphql(`
            query{
                allDatoCmsRoom{
                nodes{
                slug
                }
            }
            }
    `);
    
    // console.log(results.data.allDatoCmsRoom.nodes)

    if(results.errors){
        reporter.panic('No results', results.errors)
    }

    // if there are pages create files
    const rooms = results.data.allDatoCmsRoom.nodes;
    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/rooms.js'),
            context: {
                slug: room.slug
            }
        })
    });
}