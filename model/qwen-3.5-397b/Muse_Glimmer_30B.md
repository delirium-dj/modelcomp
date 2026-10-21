# Qwen 3.5 397B — findings by Muse Glimmer 30B

- Source: Alibaba/Qwen (`qwen-3.5-397b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B A17B
- **Short description:** Alibaba's Qwen3.5-397B-A17B open-weights MoE (397B total/17B active) for reasoning, coding and vision; SWE-bench 76.4%, AIME 91.3%, Apache 2.0.
- **Provider / access:** Open weights on Hugging Face `Qwen/Qwen3.5-397B-A17B` Apache 2.0; hosted as `Qwen3.5-Plus` on Alibaba Cloud Model Studio with 1M context and built-in tools; OpenCode Zen `opencode/qwen-3.5-397b`.
- **Release / knowledge:** Qwen3.5 generation; release 2026; knowledge cutoff not stated in public card.
- **IDs:** `Qwen/Qwen3.5-397B-A17B`, `opencode/qwen-3.5-397b`
- **Context window:** 262,144 native, extensible to ~1,010,000 tokens; 1M hosted per meta.json.
- **Modalities:** Text, image, video in; text out; reasoning on; tool/function calling supported.
- **Pricing (as of 2026-10-20):** Apache 2.0 open weights free self-host; AA indicative $0.60/$3.60 per 1M; hosted Qwen3.5-Plus pricing per Alibaba Model Studio.
- **Architecture:** 397B total / 17B active MoE, Gated Delta Networks + sparse MoE, Apache 2.0.

### Raw benchmarks found

> Numbers from Hugging Face model card Qwen/Qwen3.5-397B-A17B benchmark tables, vendor-reported Feb 2026. Peer column context from same table.

Agent / tool use:

- TAU2-Bench: **86.7%** (vendor table; peers 77.0–91.6)
- BFCL-V4: **72.9%** (vendor table)
- Tool Decathlon: **38.3%** (vendor table)
- MCP-Mark: **46.1%** (vendor table)
- DeepPlanning: **34.3%** (vendor table)
- VITA-Bench: **49.7%** (vendor table)

Reasoning / knowledge:

- GPQA: **88.4%** (vendor table; peers 87.0–92.4)
- HLE: **28.7%** (vendor table; peers 30.1–37.5)
- HLE-Verified: **37.6%** (vendor table)
- AIME26: **91.3%** (vendor table; peers 90.6–96.7)
- HMMT Feb 25: **94.8%**
- HMMT Nov 25: **92.7%**
- MMLU-Pro: **87.8%**
- MMLU-Redux: **94.9%**
- SuperGPQA: **70.4%**
- C-Eval: **93.0%**
- IFEval: **92.6%**
- IFBench: **76.5%**

Coding:

- SWE-bench Verified: **76.4%** (vendor table; peers 75.3–80.9)
- SWE-bench Multilingual: **69.3%**
- LiveCodeBench v6: **83.6%**
- Terminal Bench 2: **52.5%** (vendor table)
- SecCodeBench: **68.3%**

Long context:

- AA-LCR: **68.7%** (vendor table)
- LongBench v2: **63.2%**

Multimodal:

- MMMU: **85.0%**
- MMMU-Pro: **79.0%**
- MathVision: **88.6%**
- MathVista (mini): **90.3%**
- We-Math: **87.9%**
- VideoMME (w sub.): **87.5%**
- RealWorldQA: **83.9%**
- MMStar: **83.8%**

### Normalized scores (1–100)

- **Tool use: 71/100.** TAU2-Bench 86.7 and BFCL-V4 72.9 show strong tool reliability; capped by Tool Decathlon 38.3, MCP-Mark 46.1 and DeepPlanning 34.3.
- **Reasoning: 80/100.** GPQA 88.4, AIME26 91.3, HMMT ~94, MMLU-Pro 87.8 form a strong core; HLE 28.7 and HLE-Verified 37.6 cap the score.
- **Context window: 78/100.** 262K native with YaRN extension to ~1M; tier mapping for 262K plus hosted 1M support.
- **Multimodal: 85/100.** Native text/image/video in with text out; MMMU 85.0, MathVision 88.6, VideoMME 87.5 support multimodal strength.
- **Coding: 78/100.** SWE-bench Verified 76.4 and LiveCodeBench 83.6 are strong for the class; Terminal Bench 2 52.5 limits the top end.
- **Cost efficiency: 90/100.** Apache 2.0 open weights free to self-host; AA indicative $0.60/$3.60 per 1M is low for 397B-class.
- **Overall Score: 78/100.** Half-up mean of the five quality dims (71+80+78+85+78)/5 = 78.4 → 78; strong open-weights multimodal agentic model with 262K native context and hosted 1M option.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research using meta.json and Hugging Face model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
