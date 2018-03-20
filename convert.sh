#!/bin/bash

for i in public/samples/*.wav; 
do
	echo $i
	s=${i##*/}
	echo s
	s=${s%.*}
	echo s
	ffmpeg -i $i public/samples/$s.mp3
done