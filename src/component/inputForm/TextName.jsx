export const TextName = () => {
    return(
        <form action="/name" method="post">
            <label>
                Name:
                <input type="text" name="name" />
            </label>
        </form>
    )
}