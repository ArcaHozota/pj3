package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

const titleStr string = "新宿純福音教会｜日本東京"

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")
	r.Static("/static", "static")

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
