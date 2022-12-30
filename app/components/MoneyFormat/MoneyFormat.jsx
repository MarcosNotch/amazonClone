


export default function MoneyFormat({value}){

    function currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }

    return (
        <div>
            <p>{currencyFormat(value)}</p>
        </div>
    )
}