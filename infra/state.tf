# this file is used to store the state of the terraform
# in order for other people to be able to use it without 
# redundancies 

terraform { 
 backend "gcs" {
   bucket = "ignite-sci-project-state"
 }
}