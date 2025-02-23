import test from "../../tools/test.mjs";
const tests = test("Node Calculation Test");
import fs from 'fs';

function nodeCalculation(node, depth = 1) {
    if (!node) {
        return { total: 0, depth: depth, nodeCount: 0 };
    }

    const leftEndpoint = nodeCalculation(node.left, depth + 1);
    const rightEndpoint = nodeCalculation(node.right, depth + 1);

    return {
        total: node.value + leftEndpoint.total + rightEndpoint.total,
        depth: Math.max(depth, leftEndpoint.depth, rightEndpoint.depth),
        nodeCount: 1 + leftEndpoint.nodeCount + rightEndpoint.nodeCount
    };
}

fs.readFile('C:/Users/david/Documents/School Work/Year 2.2/Programming 2/Exam2/moduleSkillSummaryAssignment/example_files/nodes.json', 'utf8', (error, content) => {
    if (error) {
        console.log('Error trying to read:', error);
        return;
    }

    const nodes = JSON.parse(content);
    const endpoint = nodeCalculation(nodes);

    console.log('')
    console.log('Totals:')
    console.log('Total node value:', endpoint.total);
    console.log('Deepest level:', endpoint.depth);
    console.log('Total nodes:', endpoint.nodeCount);
});



const testTree = {
    value: 10,
    left: {
        value: 5,
        left: null,
        right: null
    },
    right: {
        value: 15,
        left: null,
        right: null
    }
};

tests.isEqual(nodeCalculation(testTree).total, 30, 'Expects total value to be 30 (10 + 5 + 15)');
tests.isEqual(nodeCalculation(testTree).depth, 3, 'Expects deepest level to be 3');
tests.isEqual(nodeCalculation(testTree).nodeCount, 3, 'Expects total number of nodes to be 3');

const testTreeWithNegativeValues = {
    value: -10,
    left: {
        value: 5,
        left: null,
        right: null
    },
    right: {
        value: -15,
        left: null,
        right: null
    }
};

tests.isEqual(nodeCalculation(testTreeWithNegativeValues).total, -20, 'Expects total value to be -20 (-10 + -5 + -15)');
tests.isEqual(nodeCalculation(testTreeWithNegativeValues).depth, 3, 'Expects deepest level to be 3');
tests.isEqual(nodeCalculation(testTreeWithNegativeValues).nodeCount, 3, 'Expects total number of nodes to be 3');

const testTreeWithInfinity = {
    value: 24,
    left: {
        value: Infinity,
        left: null,
        right: null
    },
    right: {
        value: 10,
        left: null,
        right: null
    }
};

tests.isEqual(nodeCalculation(testTreeWithInfinity).total, Infinity, 'Expects total value to be Infinity');
tests.isEqual(nodeCalculation(testTreeWithInfinity).depth, 3, 'Expects deepest level to be 3');
tests.isEqual(nodeCalculation(testTreeWithInfinity).nodeCount, 3, 'Expects total number of nodes to be 3');