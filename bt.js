let account;
let password;
let choice;
let lish ;

let wrong_input = 0 ;
let check_true_input = false ;

//tạo vòng lặp nhỏ <3 để chỉ được phép lặp laij 3 lần tương ứng số lần sai
while(check_true_input === false && wrong_input <= 3){
    //thông tin tk
    account = prompt("Vui lòng nhập tài khoản");
    password = Number(prompt("Vui lòng nhập mật khẩu"));


    //vòng lặp mk và tk
    if( password  === 12345 && account === "admin" ){
        alert(`Chào mừng trở lại ${account}`);
        check_true_input = true; //
        break;
    } else if( account !== "admin" ){
        alert(`Tài khoản sai.`);
        wrong_input = wrong_input + 1;
    } else if( password !== 12345){
        alert(`Mật khẩu sai.`);
        wrong_input = wrong_input + 1;
    }
    if(wrong_input === 3){
        alert(`Bạn nhập sai quá 3 lần.`);
 
    }
}


// in danh sách chức nằng bộ xử lí
if(check_true_input === true){ 
do { 
    lish = prompt (`-----Menu------
         1. Phân loại mã số sách (Số nguyên chẵn/lẻ).
         2. Thiết kế bản đồ kho sách (Dạng lưới). 
         3. Dự toán phí bảo trì sách theo năm.
         4. Tìm mã số sách may mắn (Số nguyên tố/Số đặc biệt).
         5. Thoát.
         chọn chức năng: .
         `);
choice = Number(lish);

//danh sách chọn chức năng bộ xử lý

    switch (choice ){
        case 1: //phân loại số sách
    let total_book =0;
    let even = 0;
    let odd = 0;
    let book_code; 
    alert(`Vui lòng nhập mã sách: `);
    while(true){
        book_code = Number(prompt("Nhập mã số sách"));
        if( isNaN(book_code)){
            alert(" Đây không phải số");
            continue;
        } else {
            alert("Đây là số");
        };
        if( book_code === 0){
            alert(`Vui lòng nhập lại`);
            break;
        }else{
            alert(`Cảm ơn vì nhập đúng dữ liệu.`);
            total_book = total_book+1;
        };
        if(book_code % 2 ===0 ){
            console.log("Số chẵn");
            even = even + 1;
        } else{
            console.log("số lẻ");
            odd = odd + 1;
        };
        
    }
        console.log("số chẵn: ",even);
        console.log("số lẻ: ",odd);
        console.log("Tổng số mã sách: ",total_book);
    break;    


        case 2:// thiết kế kho sách
        let rows ;
        let cols ;
        let map ;
        let line;

        //nhập dữ liệu
        rows = Number(prompt("Số hàng"));
        cols = Number(prompt("Số cột"));
        
        if( isNaN(cols) || isNaN(rows)){
            console.log("Nhập số");
            break;
        }
        if(rows <= 0 || cols <=0){
            alert("Hàng và cột phải lớn hơn 0");
            break;
        }
        console.log("-----KHO SÁCH------");
        for( j = 1 ; j <= rows ;j++){
            let one_rows = "";
            for(let j= 1 ; j<= rows ;j++){
                one_rows =one_rows + j;
            }
            console.log(one_rows);
        }
        for (let i = 1 ; i<= rows ; i++ ){
            line ="";
            for( j = 1 ; j <= cols; j++ ){
                if( i === j){
                    line = line + "[*]";// vị trị ưu tiến
                } else {
                    line = line + "[ ]"//vị trí thuongwf
                }
            }
            console.log(line);
        }
        break;



        case 3: //Dự đoán phí bảo trì sách    
        let quanlity = Number(prompt("Số lượng sách"));
        let cost = Number(prompt("Phí bảo trì 1 cuốn sách"));
        let year = Number(prompt("Số năm dự đoán"));
        //nhập dữ liệu 
        if( isNaN(quanlity) || isNaN(cost) || isNaN(year)){
            console.log("Vui lòng nhập số ");
            break;
        }
        console.log("----Dự Đoán Phiếu Bảo Trì------");
        for( i =1 ; i<= year ; i++ ){
            let toltal_cost =quanlity *cost;//phí riêng của năm 
            console.log("Tổng chi phí năm" + i + "là " + toltal_cost + ".000 VND" );
        }
            break;
        
        
        
        case 4:
            let n = Number(prompt("Giới hạn mã sách tối đa"));
            if( isNaN(n)){
                console.log("Vui lòng nhập lại số: ");
                break;
            }
            let count = 0; // bién đếm những số lượng mã sach thoả mãn


            console.log("---Các mã sách thoả mãn---");
            for(  let i =1 ; i <= n ; i++ ){
                if( i % 3 === 0 &&  i % 5 !==0 ){
                    count++;
                    console.log("Mã số may mắn: " + i);
                }
            }
            console.log("Tổng số sách: " + count);

            break;
        case 5:
            alert(`\n thoát chương trình.Tạm biệt.`);
            break;
        default:
            alert(`Lựa chọn không hợp lệ.Vui lòng lựa chọn lại.`);
            break;
    }
} while (choice !== 5);
}
