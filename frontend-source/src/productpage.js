const productpage_load = (product) => {
    $(document).ready(() => {
        for(let property of product) {
            $('#product').append(
                $('<div></div>').addClass('image-div').append(
                    $('<img></img>').addClass('product-image').attr('src', '/images/' + property.imageURL)
                ),
                $('<div></div>').addClass('product-info').append(
                    $('<p></p>').addClass('product-text').text(property.name),
                    $('<p></p>').addClass('product-text').text(property.price + '$'),
                    $('<p></p>').addClass('product-text').text(property.description),
                    $('<button></button>').addClass('btn btn-success').text('Lisää tuote ostoskoriin').click(() => {

                    })
                ).appendTo('#product')
            )
        }
    })
}