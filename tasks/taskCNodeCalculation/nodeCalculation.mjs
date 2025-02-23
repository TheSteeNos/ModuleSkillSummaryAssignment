import fs from 'fs';

function directionCalculation(node, depth = 1) {
    if (!node) {
        return { total: 0, depth: depth, nodeCount: 0 };
    }

    const leftEndpoint = directionCalculation(node.left, depth + 1);
    const rightEndpoint = directionCalculation(node.right, depth + 1);

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
    const endpoint = directionCalculation(nodes);

    console.log('Total node value:', endpoint.total);
    console.log('Deepest level:', endpoint.depth);
    console.log('Total nodes:', endpoint.nodeCount);
});