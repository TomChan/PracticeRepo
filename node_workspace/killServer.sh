for PID in `cat /home/tom/Desktop/print_server/node_workspace/PrintServerDemoLog/PID.txt`
do
	kill $PID
done 

rm /home/tom/Desktop/print_server/node_workspace/PrintServerDemoLog/PID.txt 
