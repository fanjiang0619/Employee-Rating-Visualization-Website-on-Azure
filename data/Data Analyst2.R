data=read.csv("data.csv",header = TRUE)
colnames(data)
attach(data)
new1=matrix(nrow = 12, ncol = 8)
new1[,1]=as.character(unique(X...company))
new1[1:6,2]="Current Employee"
new1[7:12,2]="Former Employee"
for (i in 1:6){
  new1[i,3]=mean(as.numeric(overall)[X...company==as.character(unique(X...company))[i] & status=="Current Employee "])
  new1[i,4]=mean(as.numeric(work.balance)[X...company==as.character(unique(X...company))[i] & status=="Current Employee "])
  new1[i,5]=mean(as.numeric(culture)[X...company==as.character(unique(X...company))[i] & status=="Current Employee "])
  new1[i,6]=mean(as.numeric(career)[X...company==as.character(unique(X...company))[i] & status=="Current Employee "])
  new1[i,7]=mean(as.numeric(benefit)[X...company==as.character(unique(X...company))[i] & status=="Current Employee "])
  new1[i,8]=mean(as.numeric(senior.mangemnet)[X...company==as.character(unique(X...company))[i] & status=="Current Employee "])
}
for (i in 7:12){
  new1[i,3]=mean(as.numeric(overall)[X...company==as.character(unique(X...company))[i-6] & status=="Former Employee "])
  new1[i,4]=mean(as.numeric(work.balance)[X...company==as.character(unique(X...company))[i-6] & status=="Former Employee "])
  new1[i,5]=mean(as.numeric(culture)[X...company==as.character(unique(X...company))[i-6] & status=="Former Employee "])
  new1[i,6]=mean(as.numeric(career)[X...company==as.character(unique(X...company))[i-6] & status=="Former Employee "])
  new1[i,7]=mean(as.numeric(benefit)[X...company==as.character(unique(X...company))[i-6] & status=="Former Employee "])
  new1[i,8]=mean(as.numeric(senior.mangemnet)[X...company==as.character(unique(X...company))[i-6] & status=="Former Employee "])
}
write.csv(new1,"Status.csv")