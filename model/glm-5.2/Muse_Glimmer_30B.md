# GLM-5.2 — findings by Muse Glimmer 30B

- Source: Zhipu AI / GLM-5.2
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-5.2
- **Short description:** Zhipu AI flagship long-horizon agentic model for coding and multi-step tasks. Open-weights MIT release built on GLM-5 base with IndexShare sparse attention and solid 1M context, succeeding GLM-5.1 with stronger coding and flexible thinking effort.
- **Provider / access:** Zhipu AI / Z.ai API Platform `zai-org/GLM-5.2` on Hugging Face, ModelScope `ZhipuAI/GLM-5.2`. Chat Completions compatible via vLLM / SGLang / Transformers. Open-weights self-host.
- **Release / knowledge:** 2026-06-17 release (announced via Z.ai blog/GitHub GLM-5 repo); knowledge cutoff not publicly disclosed.
- **IDs:** `zai-org/GLM-5.2` (Hugging Face), `ZhipuAI/GLM-5.2` (ModelScope). MIT license, no Free Zen ID.
- **Context window:** 1,048,576 tokens total, solid 1M context verified by Z.ai blog and Hugging Face model card. Output up to ~128k in benchmarks; long-context stability reported.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes, JSON mode supported. Text-only – no official image/audio/video in model card.
- **Pricing (as of 2026-10-25):** Open source MIT – self-host free. Z.ai API pricing not publicly disclosed in model card; paid access via Z.ai platform. No $0 OpenCode Zen tier.
- **Architecture:** 744B total parameters, 40B active MoE with DeepSeek Sparse Attention DSA. IndexShare cross-layer indexer reuse, improved MTP for speculative decoding. Open weights, MIT.

### Raw benchmarks found

> Sources: Hugging Face zai-org/GLM-5.2 model card benchmark table, GitHub zai-org/GLM-5 README June 2026, arXiv GLM-5 technical report 2602.15763 Feb 2026. Values listed as reported by vendor; no independent re-runs located.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2): **81.0%** (Z.ai/HF)
- Terminal-Bench 2.1 (Best Reported Harness): **82.7%** (Z.ai/HF)
- MCP-Atlas (Public Set): **76.8%** (Z.ai/HF)
- Tool-Decathlon: **48.2%** (Z.ai/HF)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (HF eval results)
- HLE: **40.5%** (Z.ai/HF)
- HLE w/ Tools: **54.7%** (Z.ai/HF)
- CritPt: **20.9%** (Z.ai/HF)
- AIME 2026: **99.2%** (Z.ai/HF)
- HMMT Nov 2025: **94.4%** (Z.ai/HF)
- HMMT Feb 2026: **92.5%** (Z.ai/HF)
- IMOAnswerBench: **91.0%** (Z.ai/HF)
- Artificial Analysis Intelligence Index / BenchLM overall: no independent verified score found for this exact ID

Coding:

- SWE-bench Pro: **62.1%** (Z.ai/HF)
- NL2Repo: **48.9%** (Z.ai/HF)
- DeepSWE: **46.2%** (Z.ai/HF)
- ProgramBench: **63.7%** (Z.ai/HF)
- FrontierSWE (Dominance): **74.4** (Proximal eval, 1M context, as of 2026/06/16)
- PostTrainBench: **34.3%** (PostTrainBench eval)
- SWE-Marathon: **13.0%** (Abundant AI eval)
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- Solid 1M-token context reported; no public RULER / GraphWalks numeric score found. Long-horizon stability claimed in blog; Terminal-Bench and agentic evaluations run with 256K–400K–1M windows.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 2.1 81–82.7% and MCP-Atlas 76.8% show strong agentic tool use; Tool-Decathlon 48.2% and lack of Claw-Eval caps score.
- **Reasoning: 82/100.** GPQA Diamond 91.2% and HLE w/ Tools 54.7% are frontier-level; HLE 40.5% and CritPt 20.9% limit top-end, no independent Intelligence Index.
- **Context window: 95/100.** Verified 1M solid context for long-horizon work per vendor; no public RULER/GraphWalks retrieval percentage published.
- **Multimodal: 15/100.** Text-only model card; no image/audio/video input documented.
- **Coding: 77/100.** SWE-bench Pro 62.1%, Terminal-Bench 81%, ProgramBench 63.7% indicate strong open-source coding; DeepSWE 46.2% and lack of LiveCodeBench/SciCode public numbers cap score.
- **Cost efficiency: 100/100.** MIT open weights allow free self-host; no paid Zen tier to evaluate. API pricing not disclosed.
- **Overall Score: 70/100.** Mean of five quality dims (80+82+95+15+77)/5 = 69.8 → 70. Best-fit: strong open long-context coding/agent model, text-only, excellent cost for self-host.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GLM_5.2_Other.md`, using the same headings.

---
