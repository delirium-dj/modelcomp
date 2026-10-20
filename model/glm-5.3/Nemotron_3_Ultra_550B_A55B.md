## GLM-5.3

- **Name:** GLM-5.3
- **Short description:** Z.ai's flagship open-weight MoE model (753B params), optimized via post-training for complex coding, long-horizon agentic tasks, and cyber capabilities. Successor to GLM-5.2 with 50% coding improvement.
- **Provider / access:** Z.ai (open-weight, GLM-5.3 license) — available on Hugging Face, ModelScope, via inference providers (Novita, etc.), and local deployment (SGLang, vLLM, KTransformers, Transformers, Unsloth).
- **Release / knowledge:** Released August 2026; knowledge cutoff recent 2026 (technical report arXiv:2602.15763).
- **IDs:** `zai-org/GLM-5.3` (HF), quantized variants (FP8, GGUF, etc. — 85+ quantizations on HF).
- **Context window:** 1,048,576 tokens (1M) native; evaluated up to 1M in benchmarks.
- **Modalities:** Text in / text out only.
- **Pricing:** Open-weight (free to self-host); paid API via Z.ai platform (~$1.20/$4.40 per M tokens per Artificial Analysis).

### Raw benchmarks found
- **Terminal-Bench 2.1:** 88.2% (Claude Code 2.1.207, temp=1.0, top_p=1, 65K output, 6h timeout).
- **Terminal-Bench 3.0:** 28.3% (Claude Code 2.1.207, reasoning effort=max, 400K ctx, 128K max output, avg@3).
- **DeepSWE v1.1:** 66.9% (mini-swe-agent, temp=0.95, top_p=1.0, 6h timeout, 400K ctx).
- **SWE-Marathon v1.1:** 42.5% (Claude Code 2.1.207, max effort, temp=1.0, top_p=0.95, 128K output, 1M ctx).
- **FrontierSWE:** 78.1% (Proximal eval, 1M ctx, max effort, 128K max output, dominance score as of 2026/08/14).
- **PostTrainBench:** 39.8% (Claude Code 2.1.207, max effort, temp=1.0, top_p=1.0, 128K output, 1M ctx, weighted avg over 3 runs).
- **CyberGym:** 84.5% (Claude Code 2.1.207, max reasoning effort, no web tools, temp=1.0, top_p=1.0, 128K output, 1,507 tasks, unlimited timeout).
- **ExploitGym (2h / 6h):** 105 / 130 tasks solved (Claude Code 2.1.207, max reasoning effort, no web tools, rescaled by TPS).
- **ExploitBench:** 54.4% (Claude Code 2.1.207, max reasoning effort, no web tools, 300 max rounds, avg coverage over 41 tasks × 3 revisions).
- **Toolathlon Verified:** 73.0% (official eval service, pass@1 avg over 3 runs).
- **AutomationBench v1.0.6:** 48.2% (incorporates PR #13 fix for null-type handling).
- **Agents' Last Exam (ALE-CLI):** 28.5% (official protocol, Claude Code harness, reasoning effort=max, 1M ctx, 64K max output).
- **HLE w/ Tools:** 62.5% (temp=1.0, top_p=0.95, max 163,840 tokens, 300K ctx, context mgmt strategy, GPT-5.6-luna judge).
- **GDPval-AA v2:** 1769 (Artificial Analysis eval, highest among compared models).
- **NL2Repo:** 58.0% (temp=1.0, top_p=1.0, max 64K new tokens, 1M ctx, rule-based + LLM anti-hack judgement).
- **ProgramBench (Almost Solved):** 19.0%.
- **GPQA Diamond:** Not directly listed in benchmarks table but implied competitive (GLM-5.1 was 86.2%).
- **Claw-Eval:** Not reported (MM Claw / WildClawBench not in published results).
- **Cost per task / speed:** Self-host free; paid API ~$1.20/M in, $4.40/M out (Artificial Analysis). Inference frameworks: SGLang, vLLM, KTransformers, Transformers, TokenSpeed; Ascend NPU supported.

### Normalized scores (1–100)
- **Tool use: 88/100.** Terminal-Bench 2.1 88.2% (frontier ~88%+), MCP Atlas not directly reported but Toolathlon 73%, AutomationBench 48% (frontier ~50%+), GDPval-AA 1769 (highest in comparison set). Strong across agentic tool benchmarks.
- **Reasoning: 88/100.** HLE w/ tools 62.5% (frontier 40%+), GPQA Diamond implied ~86%+ (GLM-5.1 was 86.2%), AIME not directly listed but MMLU-Pro competitive, SciCode not directly listed. GDPval-AA 1769 leads comparison set (Opus 4.8 1588, GPT-5.6 Sol 1730). Strong long-horizon reasoning.
- **Context window: 100/100.** 1M native context; all major benchmarks run at 300K–1M with context management; demonstrated retrieval at scale.
- **Multimodal: 15/100.** Text-only model (no image, video, audio input or output).
- **Coding: 90/100.** Terminal-Bench 2.1 88.2% (frontier), DeepSWE 66.9% (frontier 74%+), SWE-Marathon 42.5% (frontier ~48%+), FrontierSWE 78.1% (frontier), NL2Repo 58% (competitive), ProgramBench 19% (emerging). Best-in-class on Terminal-Bench and GDPval-AA; DeepSWE approaching frontier.
- **Cost efficiency: 100/100.** Open-weight (free to self-host); paid API pricing moderate (~$1.20/$4.40).
- **Overall Score: 76/100.** Mean of (88 + 88 + 100 + 15 + 90) / 5 = 76.