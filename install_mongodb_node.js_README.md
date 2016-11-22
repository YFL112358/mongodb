install step:<br>
Ubuntu 16.04 详细参考：https://github.com/genxium/Ubuntu14InitScripts/tree/master/database/mongodb<br>
# 1、查询ubuntu系统的型号
$sudo lsb_release -a<br>
# 2、若在Ubuntu16.04系统下, 
（1）、先运行 <a href = "https://github.com/genxium/Ubuntu14InitScripts/blob/master/database/mongodb/install_metapackage">install_metapackage</a> 或者 <a href = "https://github.com/genxium/Ubuntu14InitScripts/blob/master/database/mongodb/install_server">install_server</a>.
（2）、运行<a href = "https://github.com/genxium/Ubuntu14InitScripts/blob/master/database/mongodb/create_systemd_service_for_1604"> create_systemd_service_for_1604</a>
# 3、start service
$ sudo service mongod start<br>

# stop service
$ sudo service mongod stop<br>

# restart service
$ sudo service mongod restart<br>


# uninstall
1、Stop MongoDB.<br>
$ sudo service mongod stop<br>
2、Remove Packages<br>
$ sudo apt-get purge mongodb-enterprise*<br>
3、Remove Data Directories<br>
$ sudo rm -r /var/log/mongodb<br>
$ sudo rm -r /var/lib/mongodb<br>


# 使用 Ubuntu 并且 想运行 Node.js >= 6.x 的 安装步驟： 详情参考： https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

1、$ sudo apt-get install curl<br>
2、$ sudo curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -<br>
3、$ sudo apt-get install -y nodejs<br>
4、$ sudo apt-get install -y nodejs-legacy<br>
