class TransformDate {

    static transform(date){
        var tf_date= ""+date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+""
        return tf_date
    }

}

module.exports = TransformDate