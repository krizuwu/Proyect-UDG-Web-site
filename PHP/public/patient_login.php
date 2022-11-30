<?php session_start();  ?>
<?php include('header.php'); ?>





	<!-- this is for donor registraton -->
<h1 class="text-center" style="background-color:#16bfb2;color: #fff; height: 40px; font-family: 'Poppins', sans-serif;">Inicio de Sesion Pacientes</h1>
<div style=" width: 50%; margin-left: auto; margin-right: auto; margin-top: 50px;">
	<div class="login" style="background-color:#fff;">
		
			<div class="formstyle" style="float: right;padding:20px;border: 1px solid lightgrey;margin-right:415px; margin-bottom:30px;background-color:#f3f3f8;color:#141313;">
				<form action="" method="post" class="text-center form-group">
					<label>
						 <input type="email" name="email"  placeholder="email" required>
					</label><br><br>
					<label>
						 <input type="password" name="password"  placeholder="Contraseña" required>
					</label><br><br>
					<button name="submit" type="submit" style="float: left; margin-left: 10px;width: 215px;border-radius: 3px;">Login</button> <br> <br>

					<span style="color:#000;clear: left; float: left;">¿No tienes cuenta?</span> <span style="float: left;"><a href="patient_regi.php" title="create a account" target="" style="color:#000;">&nbsp;Registrate ahora</a></span> <br>


					<!-- login validation -->
			<?php 
					$_SESSION['patient']="";
							
							include('config.php');
							if(isset($_POST["submit"])){


							$sql= "SELECT * FROM patient WHERE email= '" . $_POST["email"]."' AND password= '" . $_POST["password"]."'";

							$result = $conn->query($sql);

									if ($result->num_rows > 0) {
											$_SESSION["email"]= $_POST["email"];
											$_SESSION['patient']= "yes";
										    echo "<script>location.replace('patient/dashboard.php');</script>";
												// echo "u are supposed to redirect to ur profile";
										} else {
										    echo "<span style='color:red;'>Invalid username or password</span>";
										}
						$conn->close();		
					}
					
 			?>
		<!-- login validation End-->


				</form> <br>&nbsp;&nbsp;&nbsp;
				
				<br>

				
		
				
			
		
	</div>
	
	
</div>
</div>


 <?php include('footer.php'); ?>


	
	</div><!--  containerFluid Ends -->




	<script src="js/bootstrap.min.js"></script>


 
			



	
</body>
</html>

