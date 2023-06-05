/**
 * ----------------------------
 *      BASIC
 * ---------------------------
 * 1. do not show link to them who should not see it 
 *  only show to the person/types of user who should see it
 * 2. Do not allow to visit the  link by typing on the url
 * use adminRoute that will check wether the user is admin or not 
 * if not admin then redirect to any others page . you could logout user and send them to the login page as well . 
 * ----------------------------
 *       TO SEND DATA         
 * ----------------------------
 * 
 * 1.  verify  jwt  token(send authorization token in the header to the server) if possible axios to send jwt token by intercepting to the request .
 * 2. if is it an admin activity. Make sure only admin user sending or posting data 
 * by using verifyAdmin 
 * 
 * */ 