data=read.csv("data.csv",header = TRUE)
colnames(data)
attach(data)
year=sort(unique(dates))
new1=matrix(nrow = 8, ncol = 8)
new1[2:8,1]=year
new1[1,2:8]=c(as.character(unique(X...company)),"average")
for (j in 1:7){
  for (i in 1:6){
    new1[(j+1),(i+1)]=mean(as.numeric(overall)[X...company==as.character(unique(X...company))[i] & dates==year[j]])
  }
}
for (k in 1:7){
  new1[(k+1),8]=mean(as.numeric(overall)[dates==year[k]])
}
write.csv(new1,"year.csv")