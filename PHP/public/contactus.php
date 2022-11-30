<?php include('header.php'); ?>




	<!-- this is for donor registraton -->
	<div class="contactus"  style="background-color:#fff;">
<h1 class="text-center" style="background-color:#16bfb2;color: #fff; height: 40px; font-family: 'Poppins', sans-serif;">Contacto </h1>

		
		
		<div class="main_content">
			<div class="col-md-6" style="border-right: 2px solid black;">
				<article>
					
				</article>
			</div>
			<div class="col-md-6"style= "margin-top:15px ;margin-bottom:15px ;">
				<h2 class="text-center">Your Message</h2>
				<div class="card">
	<div class="card-header">Login</div>
	<div class="card-body">

		<form>
<!-- Input type text -->
<div class="form-group">
	<label for="input_id_1">First name</label>
	<input type="text" class="form-control" name="input_id_1" id="input_id_1" placeholder="First name" required>
	<small class="text-muted form-text">First name</small>
</div>

<!-- Input type text -->
<div class="form-group">
	<label for="input_id_2">Last Name</label>
	<input type="text" class="form-control" name="input_id_2" id="input_id_2" placeholder="last name" required>
</div>

<!-- Input type text -->
<div class="form-group">
	<label for="input_id_3">Email</label>
	<input type="text" class="form-control" name="input_id_3" id="input_id_3" placeholder="Email" required>
</div>

<!-- textarea -->
<div class="form-group">
	<label for="textarea_id_4">Your comments:</label>
	<textarea class="form-control" rows="2" name="textarea_id_4" id="textarea_id_4"></textarea>
	<small class="text-muted form-text">Your comments:</small>
</div>

<button type="submit" class="btn btn-primary" name="button_id_5" id="button_id_5">Send US</button>
		</form>


	</div>
</div>
			</div>

          
 		</div>

	</div>
	
	

	
 <?php include('footer.php'); ?>


	
	</div><!--  containerFluid Ends -->




	<script src="js/bootstrap.min.js"></script>


 
<!-- contact information inserting -->
					<?php

						include('config.php');
						if(isset($_POST['submit'])){
							

							$sql = "INSERT INTO contact (firstname, lastname,email,comment)
							VALUES ('" . $_POST["firstname"] ."','" . $_POST["lastname"] . "','" . $_POST["email"] . "','" . $_POST["comment"] . "' )";

							if ($conn->query($sql) === TRUE) {
							    echo "<script>location.replace('success.php');</script>";
							} else {
							    echo "<script>alert('There was an Error')<script>" . $sql . "<br>" . $conn->error;
							}

							$conn->close();
						}
					?> 



	
</body>
</html>

