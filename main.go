package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.LoadHTMLGlob("templates/*")
	r.Static("/static", "static")

	r.GET("/index", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "index.html", gin.H{
			"title": "",
		})
	})

	r.GET("/offlineToroku", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "offline-toroku.html", gin.H{
			"title": "",
		})
	})

	r.GET("/toLogin", func(ctx *gin.Context) {
		ctx.HTML(http.StatusOK, "login-toroku.html", gin.H{
			"title": "",
		})
	})

	r.Run(":8677")
}
