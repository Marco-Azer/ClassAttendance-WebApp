<h1>SundaySchool</h1>

<h2>Database Stuct:</h2>

<b>Person</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Null</th>
    <th>Default</th>
    <th>Extra</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Person Id</td>
  </tr>
  <tr>
    <td>fname</td>
    <td>varchar(30)</td>
    <td>No</td>
    <td>None</td>
    <td>First Name</td>
  </tr>
  <tr>
    <td>lname</td>
    <td>varchar(30)</td>
    <td>No</td>
    <td>None</td>
    <td>Last Name</td>
  </tr>
  <tr>
    <td>mname</td>
    <td>varchar(30)</td>
    <td>Yes</td>
    <td>Null</td>
    <td>Middle Name</td>
  </tr>
  <tr>
    <td>gender</td>
    <td>char(1)</td>
    <td>No</td>
    <td>None</td>
    <td>Gender</td>
  </tr>
  <tr>
    <td>age</td>
    <td>int(3)</td>
    <td>No</td>
    <td>None</td>
    <td>Age</td>
  </tr>
  <tr>
    <td>dob</td>
    <td>int(2)</td>
    <td>No</td>
    <td>None</td>
    <td>Day of birth</td>
  </tr>
  <tr>
    <td>mob</td>
    <td>int(2)</td>
    <td>No</td>
    <td>None</td>
    <td>Month of birth</td>
  </tr>
  <tr>
    <td>yob</td>
    <td>int(4)</td>
    <td>No</td>
    <td>None</td>
    <td>Year of birth</td>
  </tr>
  <tr>
    <td>phone</td>
    <td>varchar(15)</td>
    <td>No</td>
    <td>None</td>
    <td>Phone number</td>
  </tr>
  <tr>
    <td>aptnum</td>
    <td>varchar(5)</td>
    <td>No</td>
    <td>None</td>
    <td>Appartement Number</td>
  </tr>
  <tr>
    <td>streetname</td>
    <td>text</td>
    <td>No</td>
    <td>None</td>
    <td>Street Name</td>
  </tr>
  <tr>
    <td>pcode</td>
    <td>varchar(10)</td>
    <td>No</td>
    <td>None</td>
    <td>Postal Code</td>
  </tr>
</table>

<b>Student</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Null</th>
    <th>Default</th>
    <th>Extra</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Student ID (Foriegn Key)</td>
  </tr>
  <tr>
    <td>pname</td>
    <td>varchar(30)</td>
    <td>No</td>
    <td>None</td>
    <td>Parent Name</td>
  </tr>
  <tr>
    <td>emergcontact</td>
    <td>varchar(15)</td>
    <td>No</td>
    <td>None</td>
    <td>Emergency Contact</td>
  </tr>
</table>

<b>Servant</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Null</th>
    <th>Default</th>
    <th>Extra</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Servant ID (Foriegn Key)</td>
  </tr>
  <tr>
    <td>crdid</td>
    <td>int(11)</td>
    <td>Yes</td>
    <td>Null</td>
    <td>Cordinator ID. Null if cordinator</td>
  <tr>
</table>

<b>Class</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Null</th>
    <th>Default</th>
    <th>Extra</th>
  </tr>
  <tr>
    <td>id</td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Class ID</td>
  </tr>
  <tr>
    <td>cname</td>
    <td>varchar(30)</td>
    <td>No</td>
    <td>None</td>
    <td>Class Name</td>
  </tr>
  <tr>
    <td>grade</td>
    <td>char(2)</td>
    <td>No</td>
    <td>None</td>
    <td>Class Grade</td>
  </tr>
  <tr>
    <td>numofstdns</td>
    <td>int(3)</td>
    <td>No</td>
    <td>None</td>
    <td>Number of students</td>
  </tr>
  <tr>
    <td>numofsrvnts</td>
    <td>int(3)</td>
    <td>No</td>
    <td>None</td>
    <td>Number of servants</td>
  </tr>
</table>

<b>Served</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Null</th>
    <th>Default</th>
    <th>Extra</th>
  </tr>
  <tr>
    <td>stdntid</td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Student ID (Foriegn Key)</td>
  </tr>
  <tr>
    <td>classid</td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Class ID (Foriegn Key)</td>
  </tr>
</table>

<b>Serves</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Null</th>
    <th>Default</th>
    <th>Extra</th>
  </tr>
  <tr>
    <td>srvntid</td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Servant ID (Foriegn Key)</td>
  </tr>
  <tr>
    <td>classid></td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Class ID (Foriegn Key)</td>
  </tr>
</table>

<b>Attended</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Null</th>
    <th>Default</th>
    <th>Extra</th>
  </tr>
  <tr>
    <td>stdntid</td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Student ID (Foriegn Key)</td>
  </tr>
  <tr>
    <td>day</td>
    <td>int(2)</td>
    <td>No</td>
    <td>None</td>
    <td>Day</td>
  </tr>
  <tr>
    <td>month</td>
    <td>int(2)</td>
    <td>No</td>
    <td>None</td>
    <td>Month</td>
  </tr>
  <tr>
    <td>year</td>
    <td>int(2)</td>
    <td>No</td>
    <td>None</td>
    <td>Year</td>
  </tr>
</table>

<b>Outreached</b>
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Null</th>
    <th>Default</th>
    <th>Extra</th>
  </tr>
  <tr>
    <td>stdntid</td>
    <td>int(11)</td>
    <td>No</td>
    <td>None</td>
    <td>Student ID (Foriegn Key)</td>
  </tr>
  <tr>
    <td>day</td>
    <td>int(2)</td>
    <td>No</td>
    <td>None</td>
    <td>Day</td>
  </tr>
  <tr>
    <td>month</td>
    <td>int(2)</td>
    <td>No</td>
    <td>None</td>
    <td>Month</td>
  </tr>
  <tr>
    <td>year</td>
    <td>int(4)</td>
    <td>No</td>
    <td>None</td>
    <td>year</td>
  </tr>
  <tr>
    <td>serv1</td>
    <td>varchar(30)</td>
    <td>No</td>
    <td>None</td>
    <td>First Servant (Foriegn Key)</td>
  </tr>
  <tr>
    <td>serv2</td>
    <td>varchar(30)</td>
    <td>Yes</td>
    <td>Null</td>
    <td>Second Servant (Foriegn Key)</td>
  </tr>
  <tr>
    <td>serv3</td>
    <td>varchar(30)</td>
    <td>Yes</td>
    <td>Null</td>
    <td>Third Servant (Foriegn Key)</td>
  </tr>
</table>
