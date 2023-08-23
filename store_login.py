import sys

def store_login_info(username, password):
    with open("login_info.txt", "a") as file:
        file.write(f"Username: {username}, Password: {password}\n")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python store_login.py username password")
    else:
        username = sys.argv[1]
        password = sys.argv[2]
        store_login_info(username, password)
        print("Login information stored successfully.")
