dateStr=`date +"%d%m%y%H%M"`

node /home/tom/Desktop/print_server/node_workspace/print_server_working.js  > /home/tom/Desktop/print_server/node_workspace/PrintServerDemoLog/${dateStr}_1.txt &

ServerPID=$!

echo $ServerPID>> /home/tom/Desktop/print_server/node_workspace/PrintServerDemoLog/PID.txt

node /home/tom/Desktop/print_server/node_workspace/print_push_server.js  > /home/tom/Desktop/print_server/node_workspace/PrintServerDemoLog/${dateStr}_2.txt &

ServerPID=$!

echo $ServerPID>> /home/tom/Desktop/print_server/node_workspace/PrintServerDemoLog/PID.txt
