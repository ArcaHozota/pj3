package main

import (
	"net/http"
	"text/template"
	"time"

	"github.com/gin-gonic/gin"
)

const titleStr string = "新宿純福音教会｜日本東京"

func Int2Time(timestamp int64) string {
	t := time.Unix(timestamp, 0)
	return t.Format("yyyy-MM-dd hh:mm:ss")
}

func main() {
	r := gin.Default()

	r.SetFuncMap(template.FuncMap{
		"Unix2Time": Int2Time,
	})
	r.LoadHTMLGlob("templates/*")
	r.Static("/static", "./static")

	r.GET("/index", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "index.html", gin.H{
			"title": titleStr,
		})
	})

	r.GET("/offlineToroku", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "offline-toroku.html", gin.H{
			"title": titleStr,
		})
	})

	r.GET("/toLogin", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "login-toroku.html", gin.H{
			"title": titleStr,
		})
	})

	r.Run(":8677")
}
