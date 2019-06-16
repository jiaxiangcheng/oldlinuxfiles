##############################################################################
# FILE: Makefile
# DESCRIPTION: 
#   Makefile for OpenMP and Serial C Language Matrix Multiply codes
# AUTHOR: Blaise Barney
# MODIFIED: Marisa Gil
# LAST REVISED:  09/26/11
###############################################################################

#Uncomment your choice of compiler
#CC    =   icc
CC    =   gcc
#CC    =   pathcc
#CC    =   pgcc

#Add your choice of flags
FLAGS   =   -O1

all:	mm		\
	ser_mm          \
	

clean:	
	/bin/rm  -rf    \
	initial.dat     \
	final.dat       \
	mm		\
	ser_mm          \
        *.o

mm: omp_mm.c
	$(CC) -fopenmp omp_mm.c -o mm

ser_mm: ser_mm.c
	${CC} ${FLAGS} ser_mm.c -o ser_mm 

