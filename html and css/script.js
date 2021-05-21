const register_user = async (Username, Password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/user/register",
      data: {
        Username,
        Password,
        passwordConfirm,
      },
    });
    alert("User registered successfully !");
  } catch (err) {
    alert(err.response.data.message);
  }
};

const register_vendor = async (Username, mobile, Password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/vendor/register",
      data: {
        Username,
        mobile,
        Password,
        passwordConfirm,
      },
    });
    alert("Vendor registered successfully !");
  } catch (err) {
    alert(err.response.data.message);
  }
};

const login_user = async (Username, Password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/user/login",
      data: {
        Username,
        Password,
      },
    });
    alert("User loggedIn successfully !");
  } catch (err) {
    alert(err.response.data.message);
  }
};

const login_vendor = async (mobile, Password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/vendor/login",
      data: {
        mobile,
        Password,
      },
    });
    alert("Vendor loggedIn successfully !");
  } catch (err) {
    alert(err.response.data.message);
  }
};

const addItem = async (Title, Description, Price) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/vendor/addItem",
      data: {
        Title,
        Description,
        Price,
      },
    });
    alert("Product added successfully !");
  } catch (err) {
    alert(err.response.data.message);
  }
};

if (document.getElementById("my_form") !== null) {
  document.getElementById("my_form").addEventListener("submit", (e) => {
    e.preventDefault();
    const Username = document.getElementById("username").value;
    const Password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordConfirm").value;
    register_user(Username, Password, passwordConfirm);
  });
}

if (document.getElementById("vendor_regi") !== null) {
  document.getElementById("vendor_regi").addEventListener("submit", (e) => {
    e.preventDefault();
    const Username_vendor = document.getElementById("username_vendor").value;
    const mobile = document.getElementById("mobile_vendor").value;
    const password_vendor = document.getElementById("password_vendor").value;
    const passwordConfirm_vendor = document.getElementById(
      "passwordConfirm_vendor"
    ).value;
    register_vendor(
      Username_vendor,
      mobile,
      password_vendor,
      passwordConfirm_vendor
    );
  });
}

if (document.getElementById("login_user") !== null) {
  document.getElementById("login_user").addEventListener("submit", (e) => {
    e.preventDefault();
    const Username_user_login = document.getElementById(
      "username_user_login"
    ).value;
    const Password_user_login = document.getElementById(
      "password_user_login"
    ).value;

    login_user(Username_user_login, Password_user_login);
  });
}

if (document.getElementById("login_vendor") !== null) {
  document.getElementById("login_vendor").addEventListener("submit", (e) => {
    e.preventDefault();
    const mobile_vendor = document.getElementById("mobile_vendor").value;
    const password_vendor = document.getElementById("password_vendor").value;

    login_vendor(mobile_vendor, password_vendor);
  });
}

if (document.getElementById("addItem") !== null) {
  document.getElementById("addItem").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    addItem(title, description, price);
  });
}
