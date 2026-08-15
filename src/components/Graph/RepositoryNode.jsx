import { Handle, Position } from "@xyflow/react";

const RepositoryNode = ({ data }) => {
    return (
        <div className="relative min-w-[170px] rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 shadow-xl">

            <Handle
                type="target"
                position={Position.Left}
            />

            <p className="truncate text-sm font-semibold text-white">
                {data.label}
            </p>

            <Handle
                type="source"
                position={Position.Right}
            />

        </div>
    );
};

export default RepositoryNode;