terraform {
  backend "s3" {
    bucket         = "charan-appu-invite-tfstate"
    key            = "wedding/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "charan-appu-invite-tf-lock"
    encrypt        = true
  }
}
