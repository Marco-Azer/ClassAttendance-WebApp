<!DOCTYPE html>
<html>
<head>
	<title>Insert User</title>
</head>
<body>
	<?php require_once __DIR__ . '/inc/libs.php'; ?>

<div style="width:80%; margin: auto">
	<form method="post" action="inc/insert_user_db.php">
		<div class="form-group">
			<label>First Name</label>
			<input class="form-control" type="text" name="fname"/>
		</div>

		<div class="form-group">
			<label>Middle Name</label>
			<input class="form-control" type="text" name="mname"/>
		</div>

		<div class="form-group">
			<label>Last Name</label>
			<input class="form-control" type="text" name="lname"/>
		</div>

		<div class="form-group">
			<label>Age</label>
			<input class="form-control" type="text" name="age"/>
		</div>

		<div class="form-group">
			<label>Gender</label>
			<select class="form-control" name="gender">
				<option value="M">Male</option>
				<option value="F">Female</option>
			</select>
		</div>

		<div class="form-group">
			<button class="btn btn-primary" type="submit">Enter User</button>
		</div>
	</form>
	</div>
</body>
</html>