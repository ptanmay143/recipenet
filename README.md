# RecipeNet

> Recommendation system for recipes based on the available ingredients

![RecipeNet](/assets/tool.png?raw=true)

## Instructions

### Setup

- Install [Miniconda](https://conda.io/projects/conda/en/latest/user-guide/install/index.html).

- Setup the Python environment.

  ```shell
  conda create -n recipenet python=3.7
  conda activate recipenet
  conda install nltk numpy scikit-learn
  ```

- Install [Node.js](https://nodejs.org/en/download/).

- Setup the Node.js environment.

  ```shell
  npm install
  ```

### Usage

- Activate the Python environment.

  ```shell
  conda activate recipenet
  ```

- Run the `py-data-preprocess.py` python script to preprocess the dataset.

  ```shell
  python py-data-preprocess.py
  ```

- Run the `py-calculate-tf-idf.py` python script to calculate the term frequency and inverse document frequency scores.

  ```shell
  python py-calculate-tf-idf.py
  ```

- Start the Node.js server serving the website.

  ```shell
  node start
  ```

- Visit [this website](http://localhost:9876) to access the front-end for the recommendation system.

## License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
