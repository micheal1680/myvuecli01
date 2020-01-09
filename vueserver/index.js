const express = require("express");//1、安装和引入
const mysql = require("mysql");//5、引入 mysql
const bodyPaser = require("body-parser");
const multer = require("multer");

//6、mysql 连接对象
var mydb = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "123456",
	database: "music"
})
mydb.connect();//7、发起数据库连接


var app = express();//2、创建
//9、处理跨域
app.use(function(req,res,next){
	res.setHeader("Access-Control-Allow-Origin","*");
	res.setHeader("Access-Control-Allow-Headers","content-type");
	next();
})

app.use(bodyPaser.json());//处理前端传递数据为json 格式
app.use(bodyPaser.urlencoded({
	extended: true	//让后端识别urlencoded ，gzip 文件格式
}))

//8、创建路由
app.get("/getData", function (req, res) {//4、开辟路由
	console.log("接收到前端发起的/getData 请求");
	res.json({
		data: "测试接口，请求成功"
	})
})

app.get("/getEmployees", function (req, res) {
	console.log("接收到前端发起的/getEmployees 请求");
	console.log(req.query.employName);
	var sql = "select * from employee where 1 ";

	if (req.query.employName) {
		sql += `and name like '%${req.query.employName}% '`
	}

	if (req.query.deptid) {
		sql += `and deptid=${req.query.deptid}`
	}

	mydb.query(sql, function (err, result) {
		if (err) {
			console.log(err); return;
		}
		console.log(sql, result)
		res.json(result)
	})

})
// 登录操作post
app.post("/userLogin", function (req, res) {
	console.log(req)
	var sql = `select * from user where username='${req.body.username}'`;
	mydb.query(sql, function (err, result) {
		if (err) return;
		console.log(result)
		if (result.length == 0) {
			res.json({
				status: 2,
				msg: "用户名输入错误"
			})
		} else {
			if (result[0].username == req.body.username && result[0].password == req.body.password) {
				res.json({
					status: 0,
					msg: "登陆成功"
				})
			} else {
				res.json({
					status: 1,
					msg: "用户密码输入错误"
				})
			}
		}

	})
});
// 注册
app.post("/register", (req, res) => {
	console.log(req.body)
	var sql = `select * from  user where username='${req.body.username}'`;
	mydb.query(sql, (err, result) => {
		console.log(result)
		if (!result.length) {
			if (req.body.checkPass == req.body.password) {
				var sql = `insert  into user (username,password) values ('${req.body.username}','${req.body.password}')`
				mydb.query(sql, (err, result) => {
					console.log(result);
					if (result.affectedRows) {
						res.send({
							code: 0,
							msg: "注册成功"
						})
					}
				})
			} else {
				res.send({
					code: -2,
					msg: "输入密码与上次不一致"

				})
			}
		} else {
			res.send({
				code: -1,
				msg: "用户名已存在"
			})
		}

	})


})


//获取所有音乐列表
app.get("/getAllmusic", function (req, res) {

	var sql = "select * from allmusic where 1 ";
	mydb.query(sql, function (err, result) {
		if (err) {
			console.log(err); return;
		} else {
			res.json(result)
		}
	})
})


//获取热门推荐音乐列表（用的是所有音乐的前8条数据）
app.get("/getHotmusic", function (req, res) {

	let sql = "select * from allmusic limit 8";
	mydb.query(sql, function (err, result) {
		if (err) {
			console.log(err); return;
		} else {
			res.json(result)
		}
	})
})

//根据点击的音乐封面获取相应的歌曲信息
app.get("/getSinglesongInfo",(req,res)=>{
	let sql = "select * from allmusic";
	mydb.query(sql, function (err, result) {
		if (err) {
			console.log(err); return;
		} else {
			res.json(result)
		}
	})
})

//首页登录后展示用户信息，根据用户名获取头像
app.post("/getUserPicture",function(req,res){
	
	let sql = "select * from user where 1 "
	if(req.body.username){
		sql += `and username = '${req.body.username}'`		
	}
	console.log(sql)
	
	mydb.query(sql,function(err,result){
		if(err){
			console.log(err)
			return;
		} else {
			res.json(result)
			console.log(result)
			console.log(req.body.username)
		}
	})
})

//首页获取歌手列表
app.get("/getSingerList",function(req,res){
	let sql = "select * from singer limit 10";
	mydb.query(sql, function (err, result) {
		if (err) {
			console.log(err); return;
		} else {
			res.json(result)

		}
	})

})

// 商品展示
app.get("/getproducts", function (req, res) {
	console.log("接收到前端发起的商品 请求");
	// console.log(req.query);
	var sql = "select * from products where 1 ";

	if (req.query.keyword) {
		sql += `and name like '%${req.query.keyword}%' `
	}

	if (req.query.type) {
		sql += `and deptid=${req.query.type}`
	}

	mydb.query(sql, function (err, result) {
		if (err) {
			console.log(err); return;
		}
		// console.log(sql,result)
		res.json(result)
	})
}),
	// 获取单个产品详情
	app.get("/productDetails", function (req, res) {
		// console.log(req.query.id);
		let sql = `select * from products where id='${req.query.id}' `;

		mydb.query(sql, function (err, result) {
			// console.log(result[0].img_id)
			if (result[0].img_id) {
				let sql = `select * from productdetails where id='${result[0].img_id}' `;
				mydb.query(sql, function (err, data) {
					if (result[0].prodes_id) {
						// console.log(result[0].prodes_id)
						let sql = `select * from productdesciption where id='${result[0].prodes_id}' `;
						mydb.query(sql, function (err, description) {
							// console.log(description)

							res.send({

								description: description,
								data: data,
								result: result
							})

						})

					}
				})
			}
		})
	}),
	app.post("/myset", (req, res) => {
		console.log(123)
		var sql = `select * from setting where nickname='${req.body.nickname}'`;
		mydb.query(sql, (err, result) => {
			console.log(result);
			if (!result.length) {
				var sql = `insert into setting (nickname,description,sex,birth,location) values ('${req.body.nickname}','${req.body.description}','${req.body.sex}','${req.body.birth}','${req.body.location}')`;
				mydb.query(sql, (err, result) => {
					console.log(result)
					if (result.affectedRows) {
						res.send({
							code: 0,
							msg: "保存成功"
						})
					}
				})
			} else {
				res.send({
					code: -1,
					msg: "该昵称已存在"
				})
			}
		})
	})
// 搜索获取音乐
app.get("/getMusic", function (req, res) {
	var sql = "select * from mylike where 1 "
	if (req.query.keyWord) {
		sql += `and title like '%${req.query.keyWord}%'`
	}
	sql += " limit 2";
	mydb.query(sql, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		console.log(sql, result);
		res.json(result)
	})
})
// 我喜欢的歌曲
app.get("/favoritelist",(req,res)=>{
	var sql=`select * from mylike`;
	mydb.query(sql,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        console.log(sql,result);
        res.json(result)
    })
})
// 我的年度歌单
app.get("/yearlist",(req,res)=>{
	var sql=`select * from yearlist`;
	mydb.query(sql,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        console.log(sql,result);
        res.json(result)
    })
})
// 后台音乐列表
app.get("/bacstagelist",(req,res)=>{
	var sql=`select * from bacstagelist`;
	mydb.query(sql,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        console.log(sql,result);
        res.json(result)
    })
})
app.post("/updateset", (req, res) => {
	var sql = `select * from setting where nickname='${req.body.nickname}'`;
	mydb.query(sql, (err, result) => {
		console.log(result);
		if (!result.length) {gi
			var sql = `update setting set nickname='${req.body.nickname}',description='${req.body.description}',sex='${req.body.sex}',birth='${req.body.birth}',location='${req.body.location}' where user_id=4`;
			mydb.query(sql, (err, result) => {
				console.log(result)
				if (result.affectedRows) {
					res.send({
						code: 0,
						msg: "修改成功"
					})
				}
			})
		} else {
			res.send({
				code: -1,
				msg: "该昵称已存在"
			})
		}
	})
})

//cnpm i --save multer
//const multer=require("multer")
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');//存放路径
	},
	filename: function (req, file, cb) {
		cb(null,
			Date.now() + '_' +
			Math.random().toString().substring(2, 8) + '.' +
			file.originalname.split('.').pop())
	}
});

var upload = multer({
	storage: storage
})
var hostname = "http://localhost:8888";
app.post('/imgUpload', upload.array('file'), (req, res) => {
	let imgdata = { "errno": 0 };
	imgdata.data = [];
	console.log(req.files);
	for (let ind = 0; ind < req.files.length; ind++) {
		let src = hostname + '/' + req.files[ind].destination + req.files[ind].filename;
		//返回给富文本编辑框图片的
		imgdata.data.push(src);
	}
	res.json(imgdata);//将数据返回给前端
});

//  对后端资源进行静态资源托管(托管文件夹路径就是/uploads)
app.use("/uploads", express.static(__dirname + "/uploads"));

//3、监听服务
app.listen(8888, function () {
	console.log("服务开启，监听端口8888……")
})