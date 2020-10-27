data=read.csv("data.csv",header = TRUE)
colnames(data)
attach(data)
new1=matrix(nrow = 6, ncol = 7)
new1[,1]=as.character(unique(X...company))
for (i in 1:6){
  new1[i,2]=mean(as.numeric(overall)[X...company==as.character(unique(X...company))[i]])
  new1[i,3]=mean(as.numeric(work.balance)[X...company==as.character(unique(X...company))[i]])
  new1[i,4]=mean(as.numeric(culture)[X...company==as.character(unique(X...company))[i]])
  new1[i,5]=mean(as.numeric(career)[X...company==as.character(unique(X...company))[i]])
  new1[i,6]=mean(as.numeric(benefit)[X...company==as.character(unique(X...company))[i]])
  new1[i,7]=mean(as.numeric(senior.mangemnet)[X...company==as.character(unique(X...company))[i]])
}
write.csv(new1,"total.csv")