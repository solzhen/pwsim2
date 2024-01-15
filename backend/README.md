
## Prerequisites

- Python (version 3+)
- Django (version 16+)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/solzhen/pwsim2/tree/main
    ```

2. Navigate to the project directory:

    ```bash
    cd pwsim2
    ```

3. Create a virtual environment:

    ```bash
    python -m venv venv
    ```

4. Activate the virtual environment:

    - For Windows:

      ```bash
      venv\Scripts\activate
      ```

    - For macOS/Linux:

      ```bash
      source venv/bin/activate
      ```

5. Install the project dependencies:

    ```bash
    pip install -r requirements.txt
    ```

## Configuration

1. Navigate to the frontend folder:
    ```bash
    cd frontend
    ```

2. Run database migrations:

    ```bash
    python manage.py migrate
    ```

## Usage

Navigate to the frontend folder if you're not there already:
    ```bash
    cd frontend
    ```


To start the development server, run the following command:

    ```bash
    python manage.py runserver
    ```
