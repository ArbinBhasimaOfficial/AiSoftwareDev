#include <iostream>
#include <fstream>
#include <vector>

constexpr int START = 50;
constexpr int MAX_VAL = 100;

int zionPartOne(const std::vector<char>& content) {
    int current = START;
    int password = 0;
    
    size_t i = 0;
    size_t n = content.size();

    while (i < n) {
        // Skip whitespace, spaces, and newlines (\r, \n)
        while (i < n && (content[i] == '\r' || content[i] == '\n' || content[i] == ' ' || content[i] == '\t')) {
            i++;
        }
        if (i >= n) break;

        // Read direction ('R' or 'L')
        char direction = content[i++];

        // Fast custom integer parsing directly from raw bytes
        int value = 0;
        while (i < n && content[i] >= '0' && content[i] <= '9') {
            value = value * 10 + (content[i] - '0');
            i++;
        }

        // Apply rotation
        switch (direction) {
            case 'R':
                current = (current + value) % MAX_VAL;
                break;
            case 'L':
                current = (current - value) % MAX_VAL;
                if (current < 0) {
                    current += MAX_VAL;
                }
                break;
        }

        if (current == 0) {
            password++;
        }
    }

    return password;
}

int main() {
    // Fast I/O optimization
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(nullptr);

    // Read whole file into buffer in a single I/O call
    std::ifstream file("../input.txt", std::ios::binary | std::ios::ate);
    if (!file.is_open()) {
        std::cerr << "Error opening file\n";
        return 1;
    }

    std::streamsize size = file.tellg();
    file.seekg(0, std::ios::beg);

    std::vector<char> buffer(size);
    if (file.read(buffer.data(), size)) {
        int password = zionPartOne(buffer);
        std::cout << password << "\n";
    }

    return 0;
}