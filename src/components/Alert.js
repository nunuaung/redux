import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

    const Alert = ({text,icon,title})=>{
        Swal.fire({
            title: title,
            text: text,
            icon: icon,
            confirmButtonText: 'Ok'
          })
    }

export default Alert
