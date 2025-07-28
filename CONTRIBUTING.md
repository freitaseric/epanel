# Contributing to EPanel

First off, thank you for considering contributing to EPanel! We're thrilled
you're here. This project thrives on community contributions, and every bit of help
is greatly appreciated.

This document provides guidelines for contributing to EPanel. Following them helps
us keep the project manageable and makes the contribution process smooth for everyone.

## Code of Conduct

To ensure a welcoming and inclusive environment, EPanel has adopted a Code of Conduct.
All contributors are expected to read and adhere to it.
Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand what actions
will and will not be tolerated.

## How Can I Contribute?

There are many ways to contribute, from writing code and documentation to
reporting bugs and suggesting new features.

### Reporting Bugs

If you find a bug, please ensure it hasn't already been reported by searching our
[GitHub Issues](https://github.com/your-github-username/epanel/issues).

If you're opening a new issue, please include:

- A clear and descriptive title.
- A detailed description of the problem, including steps to reproduce it.
- Your operating system, browser, and any relevant version numbers.
- Any screenshots or logs that might be helpful.

### Suggesting Enhancements

We love hearing new ideas! If you have a suggestion for a new feature or an
improvement to an existing one, please open an issue with the "enhancement" label.

Provide a clear and detailed explanation of the feature, why it would be useful,
and if possible, a potential implementation approach.

## Your First Code Contribution

Ready to write some code? Here’s how to set up your environment and submit your
first pull request.

### Fork & Clone

1. **Fork** the repository by clicking the "Fork" button on the top right of the
main repository page.
2. **Clone** your forked repository to your local machine:

    ```sh
    git clone https://github.com/your-personal-github-username/epanel.git
    cd epanel
    ```

3. **Add the upstream remote** to keep your fork synced with the main project:

    ```sh
    git remote add upstream https://github.com/your-github-username/epanel.git
    ```

### Branching

Create a new branch for each feature or bug fix. Use a descriptive name.

```sh
# Example for a new feature
git checkout -b feature/add-user-avatars

# Example for a bug fix
git checkout -b fix/login-form-validation
````

### Making Changes

1. Make your changes to the code, following the existing code style.
2. Ensure your code is well-commented, especially in complex areas.
3. Add or update tests as appropriate. All contributions should pass the existing
test suite.

### Committing Your Changes

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
specification. This helps us automate changelogs and makes the commit history easier
to read.

Your commit messages should be structured as follows:

```git
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Common types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space,
formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

**Example Commit Message:**

```git
feat(api): add two-factor authentication endpoint

Implement the logic and routing for enabling and verifying 2FA
using TOTP. The new endpoints are POST /auth/2fa/enable and
POST /auth/2fa/verify.
```

### Submitting a Pull Request

1. **Push** your branch to your fork on GitHub:

    ```sh
    git push origin feature/add-user-avatars
    ```

2. **Open a Pull Request** (PR) from your forked repository to the `main` branch
of the upstream EPanel repository.
3. **Fill out the PR template** with a clear title and a detailed description of
your changes. Link to any relevant issues.
4. **Wait for review.** A maintainer will review your code. We may suggest some
changes or improvements. Once your PR is approved, it will be merged into the main
codebase.

Thank you again for your contribution. Let's build something amazing together!
