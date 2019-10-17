import argparse
import re

parser = argparse.ArgumentParser()
parser.add_argument('filename')
args = parser.parse_args()

with open(args.filename, "r") as file:
    regex = re.compile('([^\s\w]|_)+')
    f = file.read()
    newF = regex.sub('', f)
    file.close()
    file = open(args.filename, "w")
    file.write(newF)
    file.close()
