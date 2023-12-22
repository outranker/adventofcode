import * as fs from "fs";

const input = fs.readFileSync(__dirname + "/data.txt", "utf8").replace(/\r/g, "");

type Dir = "U" | "D" | "L" | "R";

type Command = {
    dir: Dir;
    len: number;
    color?: string;
};

type Position = {
    x: number;
    y: number;
};

function parseCommands2(input: string): Command[] {
    return input.split("\n").map((line) => {
        const [_, color] = line.match(/\(#(\S+)\)/);

        const dir = ["R", "D", "L", "U"][color.at(-1)] as Dir;
        const len = parseInt(color.slice(0, color.length - 1), 16);

        return { dir, len };
    });
}

function getTrenchVolume2(commands: Command[]) {
    const pos: Position = { x: 0, y: 0 };

    const vertices: Position[] = [{ ...pos }];

    for (let cmd of commands) {
        if (cmd.dir === "U") pos.y -= cmd.len;
        else if (cmd.dir === "D") pos.y += cmd.len;
        else if (cmd.dir === "L") pos.x -= cmd.len;
        else if (cmd.dir === "R") pos.x += cmd.len;
        vertices.push({ ...pos });
    }

    console.log(vertices);
    let shoe = 0;

    for (let i = 0; i < vertices.length - 1; i++) {
        shoe += vertices[i].x * vertices[i + 1].y;
        shoe -= vertices[i].y * vertices[i + 1].x;
    }

    shoe = Math.abs(shoe) / 2;

    const length = commands.reduce((acc, cmd) => acc + cmd.len, 0);

    return shoe + length / 2 + 1;
}

console.log(getTrenchVolume2(parseCommands2(input)));
