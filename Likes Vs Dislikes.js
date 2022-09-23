function likeOrDislike(buttons) {
    return buttons.reduce((prev, cur) => cur === prev ? 'Nothing' : cur, 'Nothing'
    )
}