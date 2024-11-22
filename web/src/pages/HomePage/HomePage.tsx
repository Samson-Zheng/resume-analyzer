import React from 'react'
import { Component } from 'react'
import './HomePage.css'

interface HomePageState {
  email: string
  username: string
  password: string
  confirmPassword: string
}

class HomePage extends Component<{}, HomePageState> {
  constructor(props: {}) {
    super(props)

    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    }

    // Bind event handler methods to this
    this.handleYesClick = this.handleYesClick.bind(this)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleSignUpClick = this.handleSignUpClick.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
  }

  handleYesClick() {
    const extraField = document.getElementById('extraField')
    extraField.classList.toggle('hidden') // Toggle the 'hidden' class to show or hide the input
  }

  handleLoginClick() {
    if (this.state.email == '' || this.state.password == '') {
      alert('Missing Data')
    } else {
      alert('Success')
    }
  }

  async handleSignUpClick() {
    if (
      this.state.email == '' ||
      this.state.username == '' ||
      this.state.password == '' ||
      this.state.confirmPassword == ''
    ) {
      alert('Missing Data')
    } else {
      if (this.state.confirmPassword == this.state.password) {
        const url = '*OUR GRAPHQL REGISTER POST ENDPOINT URL*'

        interface GraphQLResponse {
          data: {
            message: string
          }
        }

        async function fetchGraphQLData() {
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              email: this.state.email,
              password: this.state.password,
              username: this.state.username,
            }),
          })
          const responseData: GraphQLResponse = await response.json()

          console.log(responseData.data.message)

          if (responseData.data.message =="User registered"){
            alert('Welcome '+this.state.username+'!')
          }
          else{
            alert('There has been an issue. Please try again later.')
          }
        }
      } else {
        alert('Passwords do not match.')
      }
    }
  }

  // Generic field change handler
  handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target // Get name and value from the input
    this.setState({
      [name]: value, // Dynamically update the state based on the input's name
    } as Pick<HomePageState, keyof HomePageState>)
  }

  render(): React.ReactNode {
    return (
      <div className="home">
        <p className="title">Ace Your Application!</p>
        <p className="subtext">Login</p>
        <input
          type="text"
          id="email"
          name="email"
          className="field"
          placeholder="Email"
          onChange={this.handleFieldChange}
        />
        <input
          type="password"
          id="password"
          name="password"
          className="field"
          placeholder="Password"
          onChange={this.handleFieldChange}
        />
        <button
          type="button"
          className="button"
          onClick={this.handleLoginClick}
        >
          Login
        </button>
        <div className="separator"></div>
        <button type="button" className="button" onClick={this.handleYesClick}>
          New User?
        </button>

        <div id="extraField" className="hidden">
          <div className="signup">
            <p className="subtext">Sign Up</p>
            <input
              type="text"
              id="SignUpEmail"
              name="email"
              className="field"
              placeholder="Email"
              onChange={this.handleFieldChange}
            />
            <input
              type="text"
              id="username"
              name="username"
              className="field"
              placeholder="Username"
              onChange={this.handleFieldChange}
            />
            <input
              type="password"
              id="SignUpPassword"
              name="password"
              className="field"
              placeholder="Password"
              onChange={this.handleFieldChange}
            />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="field"
              placeholder="Confirm Password"
              onChange={this.handleFieldChange}
            />

            <button
              type="button"
              className="button"
              onClick={this.handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
