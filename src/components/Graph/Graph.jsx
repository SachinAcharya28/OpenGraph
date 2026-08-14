import { ReactFlow, Background, Controls } from "@xyflow/react";
import RepositoryNode from "./RepositoryNode";
import { useState } from "react";

import "@xyflow/react/dist/style.css";


const Graph = ({ graphData }) => {

    const [selectedNode, setSelectedNode] = useState(null);

    const nodeTypes = {
        repository: RepositoryNode,
    };

    const connectedNodeIds = new Set();

    if (selectedNode) {
        connectedNodeIds.add(selectedNode);

        graphData.edges.forEach((edge) => {
            if (edge.source === selectedNode) {
                connectedNodeIds.add(edge.target);
            }

            if (edge.target === selectedNode) {
                connectedNodeIds.add(edge.source);
            }
        });
    }

    const nodes = graphData.nodes.map((node, index) => {
        const totalNodes = graphData.nodes.length;

        const layerSize = 10;
        const layer = Math.floor(index / layerSize);
        const indexInLayer = index % layerSize;

        const nodesInLayer = Math.min(
            layerSize,
            totalNodes - layer * layerSize
        );

        const angle =
            (indexInLayer / nodesInLayer) * 2 * Math.PI;

        const radius = 180 + layer * 150;

        return {
            id: node.id,

            type: "repository",

            position: {
                x: 400 + radius * Math.cos(angle),
                y: 250 + radius * Math.sin(angle),
            },

            data: {
                label: node.label,
            },

            style: {
                opacity:
                    selectedNode && !connectedNodeIds.has(node.id)
                        ? 0.25
                        : 1,
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
        <div className="h-[600px] w-full ">
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
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );

}
export default Graph;