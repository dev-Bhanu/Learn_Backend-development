class  ApiError extends Error {
    constructor(
        statusCode,
        massage = "Something wnet wrong ",
        error =[],
        stack =""
    ){
        super(massage)
        this.statusCode= statusCode
        this.data=null
        this.massage= massage
        this.success=false
        this.errors=errors

        if(stack){
            this.stack=stack
        }else{
            Error.captureStatckTrace(this,this.constructor)
        }
    }
} 