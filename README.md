# Hotel_OverBooking_Sys

Hotel Revenue Management System

## This is a Demo for our Hotel OverBooking Management System.

This is a small part of our hotel revenue management system. In this demo, we use the passenger flow forecasting model to calculate the hotel’s revenue in the case of oversold by assuming that the hotel is in the scenario of oversold rooms, and assist the hotel in improving the overall benefit.


# How To Use...

Clone/git pull the repo into any local directory e.g. like it is shown below (here I show all the examples related to this repository, but I assume you have your own derived from the demo):

```
$ git clone git@github.com:BroadCastAir/Hotel_OverBooking_Sys.git
```

#### Running the application with IDE

There are several ways to run a Spring Boot application on your local machine.

* 	Download the zip or clone the Git repository.
* 	Unzip the zip file (if you downloaded one)
* 	Open Command Prompt and Change directory (cd) to folder containing pom.xml
* 	Open Eclipse
	* File -> Import -> Existing Maven Project -> Navigate to the folder where you unzipped the zip
	* Select the project
* 	Choose the Spring Boot Application file (search for @SpringBootApplication)
* 	Right Click on the file and Run as Java Application

#### Running the application with Maven

Alternatively you can use the [Spring Boot Maven plugin](https://docs.spring.io/spring-boot/docs/current/reference/html/build-tool-plugins-maven-plugin.html) like so:

```shell
$ git clone https://github.com/BroadCastAir/Hotel_OverBooking_Sys.git
$ cd Hotel_OverBooking_Sys
$ mvn spring-boot:run
```

#### Running the application with Executable JAR

The code can also be built into a jar and then executed/run. Once the jar is built, run the jar by double clicking on it or by using the command (see in Pre-release)

```shell
$ java -jar inter-sys-0.0.1-SNAPSHOT.jar --spring.profiles.active=test
```

To shutdown the jar, follow the below mentioned steps on a Windows machine.

*	In command prompt execute the **jcmd** command to print a list of all running Java processes
*	**Taskkill /PID PROCESS_ID_OF_RUNNING_APP /F** execute this command by replacing the **PROCESS_ID_OF_RUNNING_APP** with the actual process id of the running jar found out from executing the previous command

# Web URL

- Default active profile is test. When the application is running, Flyway will create the necessary tables and system data along with Intersystem IRIS. In the test profile, the application uses REST API provided by InterSystems IRIS Data Platform.
- URL to access application UI: http://localhost:8011/inter-sys/index.html
