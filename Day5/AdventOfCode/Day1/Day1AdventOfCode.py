START = 50
MAX_VAL = 100

def zion_part_one(file_path: str) -> int:
    current = START
    password = 0

    with open(file_path, "r", encoding="utf-8") as f:
        # .split() handles all whitespace (\n, \r, spaces) and skips empty lines automatically
        for rotation in f.read().split():
            direction = rotation[0]
            value = int(rotation[1:])

            if direction == 'R':
                current = (current + value) % MAX_VAL
            elif direction == 'L':
                current = (current - value) % MAX_VAL

            if current == 0:
                password += 1

    return password

if __name__ == "__main__":
    result = zion_part_one("../input.txt")
    print(result)