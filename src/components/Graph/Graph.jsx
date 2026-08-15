import { ReactFlow, Background, Controls } from "@xyflow/react";
import RepositoryNode from "./RepositoryNode";
import { useState } from "react";

import "@xyflow/react/dist/style.css";

const nodeTypes = {
    repository: RepositoryNode,
};

const Graph = ({ graphData }) => {
    const [selectedNode, setSelectedNode] = useState(null);



    // Get non-center nodes once
    const otherNodes = graphData.nodes.filter(
        (node) => !node.isCenter
    );

    // Stable scattered positions
    const positions = [
        { x: 80, y: 70 },
        { x: 380, y: 50 },
        { x: 700, y: 80 },
        { x: 980, y: 60 },

        { x: 180, y: 210 },
        { x: 560, y: 180 },
        { x: 850, y: 230 },
        { x: 1080, y: 200 },

        { x: 50, y: 360 },
        { x: 330, y: 350 },
        { x: 720, y: 360 },
        { x: 950, y: 390 },

        { x: 150, y: 520 },
        { x: 480, y: 500 },
        { x: 800, y: 530 },
        { x: 1100, y: 500 },

        { x: 60, y: 680 },
        { x: 350, y: 650 },
        { x: 680, y: 690 },
        { x: 980, y: 670 },

        { x: 200, y: 820 },
        { x: 520, y: 800 },
        { x: 850, y: 830 },
        { x: 1100, y: 800 },
    ];

    const nodes = graphData.nodes.map((node) => {

        // Center repository
        if (node.isCenter) {
            return {
                id: node.id,
                type: "repository",
                position: {
                    x: 600,
                    y: 400,
                },
                data: {
                    label: node.label,
                },
                style: {
                    border: "1px solid rgba(255,255,255,0.4)",
                    background: "#18181b",
                },
            };
        }

        // Find this node's position in the non-center list
        const otherIndex = otherNodes.findIndex(
            (item) => item.id === node.id
        );

        const position =
            positions[otherIndex % positions.length];

        return {
            id: node.id,
            type: "repository",
            position,
            data: {
                label: node.label,
            },
        };
    });

    const edges = graphData.edges.map((edge, index) => {
        const isConnected =
            selectedNode &&
            (edge.source === selectedNode ||
                edge.target === selectedNode);

        return {
            id: `edge-${index}`,
            source: edge.source,
            target: edge.target,
            type: "smoothstep",

            style: {
                stroke: "#52525b",
                strokeWidth: isConnected ? 2.5 : 1.5,
                opacity:
                    selectedNode && !isConnected
                        ? 0.15
                        : 1,
            },
        };
    });

    return (
        <div className="h-[500px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">

            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                onNodeClick={(event, node) => {
                    setSelectedNode(node.id);
                }}
                onPaneClick={() => {
                    setSelectedNode(null);
                }}
            >
                <Background gap={24} size={1} />

                <Controls className="border-white/10! bg-zinc-900! text-black" />
            </ReactFlow>

        </div>
    );
};

export default Graph;